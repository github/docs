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
  // When no experiments run, page.evaluate keeps the Playwright event count matching active runs.
  if (!experiments.length) {
    await page.evaluate(() => {
      console.log('No experiments to turn off, skipping')
    })
    return
  }
  for (const experiment of getActiveExperiments('all')) {
    await page.evaluate(
      ({ experimentKey, variationType }) => {
        // @ts-expect-error -- overrideControlGroup is a custom window helper for experiment tests.
        window.overrideControlGroup(experimentKey, variationType)
      },
      { experimentKey: experiment.key, variationType: variation },
    )
  }
}

// Playwright fixtures start in the control group; tests opt into treatments explicitly.
export function turnOffExperimentsBeforeEach(test: typeof Test) {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await turnOffExperimentsInPage(page)
  })
}
