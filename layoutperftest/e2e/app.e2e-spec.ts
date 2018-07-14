import { LayoutperftestPage } from './app.po';

describe('layoutperftest App', () => {
  let page: LayoutperftestPage;

  beforeEach(() => {
    page = new LayoutperftestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
