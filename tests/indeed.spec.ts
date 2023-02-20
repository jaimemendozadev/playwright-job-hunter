import {test} from '@playwright/test';


test('Run indeed.com scraping', async({page}) => {
  await page.goto('https://indeed.com');
});