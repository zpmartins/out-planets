import { OutPlanetsPage } from './app.po';

describe('out-planets App', function() {
  let page: OutPlanetsPage;

  beforeEach(() => {
    page = new OutPlanetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Planets works!');
  });
});
