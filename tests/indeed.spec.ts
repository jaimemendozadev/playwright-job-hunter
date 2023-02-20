import {test} from '@playwright/test';
import env from '../env';

test('Run indeed.com scraping', async({page}) => {
  await page.goto('https://indeed.com');

  await page.locator("input#text-input-what").type(env.searchKeyword);

  await page.locator("input#text-input-where").type(env.location[0]);

}); 