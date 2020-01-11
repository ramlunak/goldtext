import { GoldtextPage } from './app.po';

describe('goldtext App', function() {
  let page: GoldtextPage;

  beforeEach(() => {
    page = new GoldtextPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
