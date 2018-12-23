import { LearnFirebasePage } from './app.po';

describe('learn-firebase App', function() {
  let page: LearnFirebasePage;

  beforeEach(() => {
    page = new LearnFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
