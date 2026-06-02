import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  // Expect page to have a heading whit the name of Installing Playwright
  await expect(page.getByRole('heading', {name: 'Installing Playwright'})).toBeVisible();

  //Click the how to install playwright link
  await page.getByRole('link', {name: 'How to install Playwright'}).click();
  
});

test('first test on practicetestautomation', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/');

  // validate practice link exists and click it
  await page.getByRole('link', { name: 'Practice', exact: true }).click();

  // validate page URL
  await expect(page).toHaveURL('https://practicetestautomation.com/practice/');

  // validate page title
  await expect(page.getByRole('heading', { name: 'Practice' })).toBeVisible();
  
  // verificate to link title test exeptions exists and click it
  await expect(page.getByRole('link', { name: 'Test Exceptions' })).toBeVisible()
  await page.getByRole('link', { name: 'Test Exceptions' }).click();

  // validate page URL
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-exceptions/');

  // check that it contains text
  await expect(page.locator('body')).toContainText('This page is created to be able to reproduce the most common Selenium Exceptions. Follow test cases below to see exactly how to get: ElementNotInteractableException, ElementNotVisibleException, NoSuchElementException and StaleElementReferenceException. If you want to learn how to deal with these exceptions in your tests, check out my');

  // check the button add exist
  await page.getByRole('button', { name: 'Add' }).click();

  // Wait until the new row appears
  await expect(page.locator('#row2')).toBeVisible({ timeout: 6000 });
  await expect(page.locator('#row2 > label')).toBeVisible();
  await expect(page.locator('#row2 > input')).toBeVisible();
  await expect(page.locator('#row2 #save_btn')).toBeVisible();
  await expect(page.locator('#row2 #remove_btn')).toBeVisible();

  // fill in the field and click save
  await page.locator('#row2 > input').fill('brainx was here!');
  await page.locator('#row2 #save_btn').click();

  // checks that the input field is no longer editable
  await expect(page.locator('#row2 > input')).toBeDisabled();

  //Check that the information was saved correctly in the input field 
  await expect(page.locator('#row2 > input')).toHaveValue('brainx was here!');


});


