import {test } from '@playwright/test';

test('API Test', async ({page}) => {
    await page.goto('http://localhost:3001');
    await page.pause();
})
