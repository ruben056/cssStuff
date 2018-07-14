import { Component, OnInit } from '@angular/core';
import { Card } from '../cards/cards.model';
import { CardserviceService} from '../cards/cardservice.service';

@Component({
  selector: 'app-floattest',
  templateUrl: './floattest.component.html',
  styleUrls: ['./floattest.component.css']
})
export class FloattestComponent {

  public cards: Array<Card>

  constructor(private cardsService: CardserviceService) {
    this.cards = cardsService.getCards(5000);
  }

}
