import { Injectable } from '@angular/core';
import { Card } from './cards.model';

@Injectable()
export class CardserviceService {

  constructor() { }

  getCards(nrOfCards: number=50): Card[]{
    var cards = [];
    for(let idx = 0; idx<nrOfCards;idx++){
      const content = this.randomString();
      const title = content.substr(0,10);
      cards.push(Card.aCard(title,content));
    }
    return cards;
  }


  private randomString(length: number=30): string{
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result ="";
    for(let idx = 0; idx<length;idx++){
      result += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return result;
  }
}
