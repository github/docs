export const TREATMENT_VARIATION = 'treatment'
export const CONTROL_VARIATION = 'control'

type Experiment = {
  key: ExperimentNames
  isActive: boolean
  // Missing percentOfUsersToGetExperiment defaults to 50.
  percentOfUsersToGetExperiment?: number
  // Only one experiment can include its variation in the event context at a time.
  includeVariationInContext?: boolean
  limitToLanguages?: string[]
  // Limit to specific version keys, such as enterprise-cloud@latest.
  limitToVersions?: string[]
  // Staff readers with the staffonly cookie always see treatment when this is true.
  alwaysShowForStaff: boolean
  // feature=<value> forces treatment and forwards across link navigation.
  turnOnWithURLParam?: string
}

export type ExperimentNames = 'placeholder_experiment' | 'readability_copilot'

// To add an experiment, see README.md in this directory.
export const EXPERIMENTS = {
  // The placeholder keeps ExperimentNames compatible when no active experiments exist.
  placeholder_experiment: {
    key: 'placeholder_experiment',
    isActive: false,
    percentOfUsersToGetExperiment: 0,
    includeVariationInContext: false,
    limitToLanguages: [],
    limitToVersions: [],
    alwaysShowForStaff: false,
    turnOnWithURLParam: 'placeholder',
  },
  readability_copilot: {
    key: 'readability_copilot',
    isActive: true,
    percentOfUsersToGetExperiment: 50,
    includeVariationInContext: true,
    limitToLanguages: ['en'],
    limitToVersions: [],
    alwaysShowForStaff: true,
    turnOnWithURLParam: 'readability',
  },
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

    if (experiment.limitToLanguages?.length && !experiment.limitToLanguages.includes(locale)) {
      include = false
    }

    if (experiment.limitToVersions?.length && !experiment.limitToVersions.includes(version || '')) {
      include = false
    }

    return include
  })
}
