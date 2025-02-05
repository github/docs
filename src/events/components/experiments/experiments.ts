export const TREATMENT_VARIATION = 'treatment'
export const CONTROL_VARIATION = 'control'

type Experiment = {
  key: ExperimentNames
  isActive: boolean
  // If percentOfUsersToGetExperiment is not provided, it will default to 50
  percentOfUsersToGetExperiment?: number
  // Only one experiment's control group (variation) can be included in the context at a time
  includeVariationInContext?: boolean
  limitToLanguages?: string[]
  alwaysShowForStaff: boolean
}

// Update this with the name of the experiment, e.g. | 'example_experiment'
export type ExperimentNames = 'ai_search_experiment'

export const EXPERIMENTS = {
  /*  Add new experiments here, example:
  'example_experiment': {
      key: 'example_experiment',
      isActive: true, // Set to false when the experiment is over
      percentOfUsersToGetExperiment: 10, // 10% of users will randomly get the experiment
      includeVariationInContext: true, // All events will include the `experiment_variation` of the `example_experiment`
      limitToLanguages: ['en'], // Only users with the `en` language will be included in the experiment
      alwaysShowForStaff: true, // When set to true, staff will always see the experiment (determined by the `staffonly` cookie)
    }
  */
} as Record<ExperimentNames, Experiment>

export function getActiveExperiments(locale: string): Experiment[] {
  return Object.values(EXPERIMENTS).filter((experiment) => {
    return (
      experiment.isActive &&
      (locale === 'all' ||
        (experiment.limitToLanguages?.length ? experiment.limitToLanguages.includes(locale) : true))
    )
  })
}
