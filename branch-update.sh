#!/usr/bin/env bash

set -euo pipefail

MAIN_BRANCH="main"
REMOTE="origin"
DEFAULT_ROUTE_FILE="src/app/app.route.default.ts"

log() {
  printf '\n[%s] %s\n' "$(date '+%H:%M:%S')" "$*"
}

ensure_clean_worktree() {
  if [[ -n "$(git status --porcelain)" ]]; then
    echo "Error: working tree is not clean. Commit or stash changes first."
    exit 1
  fi
}

ensure_repo() {
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
    echo "Error: not inside a git repository."
    exit 1
  }
}

update_default_route_file() {
  local branch_name="$1"
  printf "export const DEFAULT_ROUTE = '%s';\n" "${branch_name}" > "${DEFAULT_ROUTE_FILE}"
}

push_branch_safely() {
  local branch_name="$1"
  git push -u "${REMOTE}" "refs/heads/${branch_name}:refs/heads/${branch_name}"
}

resolve_conflicts_prefer_main() {
  local target_branch="$1"
  log "Conflict detected while on '${target_branch}'. Resolving by preferring '${MAIN_BRANCH}'."

  # merging main into target branch => --theirs is main
  git checkout --theirs . || true
  git add -A
  git commit -m "merge(${target_branch}): resolve conflicts by taking ${MAIN_BRANCH}"
}

merge_main_into_branch() {
  local branch_name="$1"

  log "Switching to branch '${branch_name}'"
  git switch "${branch_name}"

  log "Pulling latest '${branch_name}' from '${REMOTE}'"
  git pull --ff-only "${REMOTE}" "${branch_name}"

  log "Merging '${MAIN_BRANCH}' into '${branch_name}'"
  if ! git merge "${MAIN_BRANCH}" --no-edit; then
    resolve_conflicts_prefer_main "${branch_name}"
  fi
}

merge_branch_into_main() {
  local branch_name="$1"

  log "Switching to '${MAIN_BRANCH}'"
  git switch "${MAIN_BRANCH}"

  log "Pulling latest '${MAIN_BRANCH}' from '${REMOTE}'"
  git pull --ff-only "${REMOTE}" "${MAIN_BRANCH}"

  log "Merging '${branch_name}' into '${MAIN_BRANCH}'"
  if ! git merge "${branch_name}" --no-edit; then
    log "Conflict detected while merging '${branch_name}' into '${MAIN_BRANCH}'. Preferring '${MAIN_BRANCH}'."
    # merging branch into main => --ours is main
    git checkout --ours . || true
    git add -A
    git commit -m "merge(${branch_name}): resolve conflicts by keeping ${MAIN_BRANCH}"
  fi
}

main() {
  ensure_repo
  ensure_clean_worktree

  if [[ ! -f "${DEFAULT_ROUTE_FILE}" ]]; then
    echo "Error: file not found: ${DEFAULT_ROUTE_FILE}"
    exit 1
  fi

  log "Fetching latest from '${REMOTE}'"
  git fetch "${REMOTE}"

  log "Switching to '${MAIN_BRANCH}'"
  git switch "${MAIN_BRANCH}"

  log "Pulling latest '${MAIN_BRANCH}'"
  git pull --ff-only "${REMOTE}" "${MAIN_BRANCH}"

  BRANCHES="$(git for-each-ref --format='%(refname:short)' refs/heads | grep -v "^${MAIN_BRANCH}$" || true)"

  if [[ -z "${BRANCHES}" ]]; then
    log "No branches found other than '${MAIN_BRANCH}'."
    exit 0
  fi

  log "Branches to process:"
  printf '%s\n' "${BRANCHES}"

  while IFS= read -r branch_name; do
    [[ -z "${branch_name}" ]] && continue

    log "=================================================="
    log "Processing branch '${branch_name}'"
    log "=================================================="

    git switch "${MAIN_BRANCH}"
    git pull --ff-only "${REMOTE}" "${MAIN_BRANCH}"

    merge_main_into_branch "${branch_name}"

    log "Updating ${DEFAULT_ROUTE_FILE} for '${branch_name}'"
    update_default_route_file "${branch_name}"

    git add "${DEFAULT_ROUTE_FILE}"

    if [[ -n "$(git status --porcelain)" ]]; then
      git commit -m "chore(playground): set default route to ${branch_name}"
    else
      log "No changes to commit on '${branch_name}'"
    fi

    log "Pushing '${branch_name}'"
    push_branch_safely "${branch_name}"

    merge_branch_into_main "${branch_name}"

    log "Pushing '${MAIN_BRANCH}'"
    push_branch_safely "${MAIN_BRANCH}"

  done <<< "${BRANCHES}"

  log "Done. Final switch to '${MAIN_BRANCH}'"
  git switch "${MAIN_BRANCH}"
}

main "$@"