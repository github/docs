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
  limitToVersions?: string[]
  alwaysShowForStaff: boolean
  turnOnWithURLParam?: string
}

// Update this with the name of the experiment, e.g. | 'example_experiment'
export type ExperimentNames = 'placeholder_experiment'

export const EXPERIMENTS = {
  // Placeholder experiment to maintain type compatibility
  placeholder_experiment: {
    key: 'placeholder_experiment',
    isActive: false, // Inactive placeholder
    percentOfUsersToGetExperiment: 0,
    includeVariationInContext: false,
    limitToLanguages: [],
    limitToVersions: [],
    alwaysShowForStaff: false,
    turnOnWithURLParam: 'placeholder', // Placeholder URL param
  },
  /*  Add new experiments here, example:
  'example_experiment': {
      key: 'example_experiment',
      isActive: true, // Set to false when the experiment is over
      percentOfUsersToGetExperiment: 10, // 10% of users will randomly get the experiment
      includeVariationInContext: true, // All events will include the `experiment_variation` of the `example_experiment`
      limitToLanguages: ['en'], // Only users with the `en` language will be included in the experiment
      limitToVersions: [
        'free-pro-team@latest',
        'enterprise-cloud@latest',
        'enterprise-server@latest',
      ], // Only enable for the latest versions
      alwaysShowForStaff: true, // When set to true, staff will always see the experiment (determined by the `staffonly` cookie)
      turnOnWithURLParam: 'example', // When the query param `?feature=example` is set, the experiment will be enabled
    }
  */
} as Record<ExperimentNames, Experiment>

export function getActiveExperiments(locale: string, version?: string): Experiment[] {
  return Object.values(EXPERIMENTS).filter((experiment) => {
    if (locale === 'all') {
      return true
    }

    let include = true
    if (!experiment.isActive) {
      include = false
    }

    // Only include experiment if it's supported for the current language
    if (experiment.limitToLanguages?.length && !experiment.limitToLanguages.includes(locale)) {
      include = false
    }

    // Only include experiment if it's supported for the current version
    if (experiment.limitToVersions?.length && !experiment.limitToVersions.includes(version || '')) {
      include = false
    }

    return include
  })
}
