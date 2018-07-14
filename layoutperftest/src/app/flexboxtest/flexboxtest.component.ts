import { Component, OnInit } from '@angular/core';
import { Card } from '../cards/cards.model';
import { CardserviceService} from '../cards/cardservice.service';

@Component({
  selector: 'app-flexboxtest',
  templateUrl: './flexboxtest.component.html',
  styleUrls: ['./flexboxtest.component.css']
})
export class FlexboxtestComponent {

  public cards: Array<Card>

  constructor(private cardsService: CardserviceService) {
    this.cards = cardsService.getCards(5000);
  }
}
