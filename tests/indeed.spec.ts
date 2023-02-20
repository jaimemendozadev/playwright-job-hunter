import {test} from '@playwright/test';

test('Run indeed.com scraping', async({page}) => {
  await page.goto('https://indeed.com');

  await page.locator("input#text-input-what").type("");

  await page.locator("input#text-input-where").type("");

}); 