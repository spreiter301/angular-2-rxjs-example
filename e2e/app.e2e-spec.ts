import { Angular2rxjsPage } from './app.po';

describe('angular2rxjs App', function() {
  let page: Angular2rxjsPage;

  beforeEach(() => {
    page = new Angular2rxjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
