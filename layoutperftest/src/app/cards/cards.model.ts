export class Card{

  constructor(public title: string, public content: string){
  }

  public static aCard(title: string, content: string){
    return new Card(title, content);
  }
}
