import { Component } from '@angular/core';
import { TngCardActionsComponent, TngCardComponent, TngCardContentComponent, TngCardDescriptionComponent, TngCardFooterComponent, TngCardHeaderComponent, TngCardTitleComponent, TngCardMediaComponent, TngCardDividerComponent, TngCardLinkComponent } from '@tailng-ui/components';
@Component({
  selector: 'app-card-overview-plain-css',
  standalone: true,
  imports: [
    TngCardComponent,
    TngCardHeaderComponent,
    TngCardTitleComponent,
    TngCardDescriptionComponent,
    TngCardContentComponent,
    TngCardFooterComponent,
    TngCardActionsComponent,
    TngCardMediaComponent,
    TngCardDividerComponent,
    TngCardLinkComponent
],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
