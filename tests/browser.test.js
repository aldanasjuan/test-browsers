import { test, devices } from '@playwright/test'

const url = "https://google.com"

// test.use({...devices["iPhone 11"]})

test('test browser', async ({ page }) => {
    // point this to wherever you want
    await page.goto(url)
    // keep browser open
    await page.pause()
})