import { FilmsterPage } from './app.po';

describe('filmster App', function() {
  let page: FilmsterPage;

  beforeEach(() => {
    page = new FilmsterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
