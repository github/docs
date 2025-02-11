import { Page, test as Test } from '@playwright/test'
import {
  getActiveExperiments,
  CONTROL_VARIATION,
  TREATMENT_VARIATION,
} from '@/events/components/experiments/experiments'

export async function turnOffExperimentsInPage(page: Page) {
  await alterExperimentsInPage(page, CONTROL_VARIATION)
}

export async function turnOnExperimentsInPage(page: Page) {
  await alterExperimentsInPage(page, TREATMENT_VARIATION)
}

async function alterExperimentsInPage(
  page: Page,
  variation: typeof TREATMENT_VARIATION | typeof CONTROL_VARIATION,
) {
  const experiments = getActiveExperiments('all')
  // Include a page.evaluate call to simulate the same # of events as if an experiment were active
  if (!experiments.length) {
    await page.evaluate(() => {
      console.log('No experiments to turn off, skipping')
    })
    return
  }
  for (const experiment of getActiveExperiments('all')) {
    await page.evaluate(
      ({ experimentKey, variation }) => {
        // @ts-expect-error overrideControlGroup is a custom function added to the window object
        window.overrideControlGroup(experimentKey, variation)
      },
      { experimentKey: experiment.key, variation },
    )
  }
}

// Place Playwright tests in control group for every active experiment
// To write a test for an experiment, explicitly turn that experiment on in the test
export function turnOffExperimentsBeforeEach(test: typeof Test) {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await turnOffExperimentsInPage(page)
  })
}
