import { MyAppLynPage } from './app.po';

describe('my-app-lyn App', () => {
  let page: MyAppLynPage;

  beforeEach(() => {
    page = new MyAppLynPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
