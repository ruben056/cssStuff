import { TestBed, inject } from '@angular/core/testing';

import { CardserviceService } from './cardservice.service';

describe('CardserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardserviceService]
    });
  });

  it('should ...', inject([CardserviceService], (service: CardserviceService) => {
    expect(service).toBeTruthy();

    const cards = service.getCards(5);
    expect(cards.length).toBe(5);
  }));
});
