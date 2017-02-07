import { browser, element, by } from 'protractor';

export class OutPlanetsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Planets-root h1')).getText();
  }
}
