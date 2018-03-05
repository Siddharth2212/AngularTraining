import { AppPage } from './app.po';
import {browser} from 'protractor';

describe('CV da Dhaba App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display message saying CV da Dhaba', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-header .navbar-brand')).toEqual('CV da Dhaba');
  });

  it('should navigate to about us page by clicking on the link', () => {
    page.navigateTo('/');

    let navlink = page.getAllElements('a').get(4);
    navlink.click();

    expect(page.getParagraphText('h3')).toBe('About Us');
  });

  it('should enter a new comment for the first dish', () => {
    page.navigateTo('/dishdetail/1');

    setTimeout(function () {
      const newAuthor = page.getElement('input[type=text]');
      newAuthor.sendKeys('Siddharth Sogani');

      const newComment = page.getElement('textarea');
      newComment.sendKeys('Siddharth Sogani liked this dish very very much');

      const newSubmitButton = page.getElement('button[type=submit]');
      newSubmitButton.click();
      browser.pause();
    }, 5000);
  });
});
