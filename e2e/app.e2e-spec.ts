import { DevdashPage } from './app.po';

describe('devdash App', () => {
  let page: DevdashPage;

  beforeEach(() => {
    page = new DevdashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
