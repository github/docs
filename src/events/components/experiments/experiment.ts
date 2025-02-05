import murmur from 'imurmurhash'
import {
  CONTROL_VARIATION,
  ExperimentNames,
  TREATMENT_VARIATION,
  getActiveExperiments,
} from './experiments'
import { getUserEventsId } from '../events'
import Cookies from 'src/frame/components/lib/cookies'

let experimentsInitialized = false

export function shouldShowExperiment(
  experimentKey: ExperimentNames | { key: ExperimentNames },
  locale: string,
) {
  // Accept either EXPERIMENTS.<experiment_key> or EXPERIMENTS.<experiment_key>.key
  if (typeof experimentKey === 'object') {
    experimentKey = experimentKey.key
  }

  // Determine if user is in treatment group. If they are, show the experiment
  const experiments = getActiveExperiments('all')
  for (const experiment of experiments) {
    if (experiment.key === experimentKey) {
      // If the user has staffonly cookie, and staff override is true, show the experiment
      if (experiment.alwaysShowForStaff) {
        const staffCookie = Cookies.get('staffonly')
        if (staffCookie && staffCookie.startsWith('yes')) {
          console.log(`Staff cookie is set, showing '${experiment.key}' experiment`)
          return true
        }
      }

      // If there is an override for the current session, use that
      if (controlGroupOverride[experiment.key]) {
        const controlGroup = getExperimentControlGroupFromSession(
          experimentKey,
          experiment.percentOfUsersToGetExperiment,
        )
        return controlGroup === TREATMENT_VARIATION
        // Otherwise use the regular logic to determine if the user is in the treatment group
      } else if (
        experiment.limitToLanguages?.length &&
        experiment.limitToLanguages.includes(locale)
      ) {
        return (
          getExperimentControlGroupFromSession(
            experimentKey,
            experiment.percentOfUsersToGetExperiment,
          ) === TREATMENT_VARIATION
        )
      }
    }
  }
  return false
}

// Allow developers to override their experiment group for the current session
export const controlGroupOverride = {} as { [key in ExperimentNames]: 'treatment' | 'control' }
if (typeof window !== 'undefined') {
  // @ts-expect-error
  window.overrideControlGroup = (
    experimentKey: ExperimentNames,
    controlGroup: 'treatment' | 'control',
  ): string => {
    const activeExperiments = getActiveExperiments('all')
    // Make sure key is valid
    if (activeExperiments.some((experiment) => experiment.key === experimentKey)) {
      controlGroupOverride[experimentKey] = controlGroup
      const event = new Event('controlGroupOverrideChanged')
      window.dispatchEvent(event)
      return `Updated ${experimentKey}. Session is now in the "${controlGroup}" group for this session.`
    } else {
      throw new Error(
        `Invalid experiment key: ${experimentKey}. Must be one of: ${activeExperiments.map((experiment) => experiment.key).join(', ')}`,
      )
    }
  }
}

// Determine if the user is in the treatment or control group for a given experiment
export function getExperimentControlGroupFromSession(
  experimentKey: ExperimentNames,
  percentToGetExperiment = 50,
): string {
  if (controlGroupOverride[experimentKey]) {
    return controlGroupOverride[experimentKey]
  } else if (process.env.NODE_ENV === 'development') {
    return TREATMENT_VARIATION
  } else if (process.env.NODE_ENV === 'test') {
    return CONTROL_VARIATION
  }
  // We hash the user's events ID to ensure that the user is always in the same group for a given experiment
  // This works because the hash is a deterministic and the user's ID is stored in a cookie for 365 days
  const id = getUserEventsId()
  const hash = murmur(experimentKey).hash(id).result()
  const modHash = hash % 100
  return modHash < percentToGetExperiment ? TREATMENT_VARIATION : CONTROL_VARIATION
}

export function getExperimentVariationForContext(locale: string): string {
  const experiments = getActiveExperiments(locale)
  for (const experiment of experiments) {
    if (experiment.includeVariationInContext) {
      return getExperimentControlGroupFromSession(
        experiment.key,
        experiment.percentOfUsersToGetExperiment,
      )
    }
  }

  // When no experiment has `includeVariationInContext: true`
  return ''
}

export function initializeExperiments(locale: string) {
  if (experimentsInitialized) return
  experimentsInitialized = true

  const experiments = getActiveExperiments(locale)

  if (experiments.length && process.env.NODE_ENV === 'development') {
    console.log(
      `In development, all users are placed in the "${TREATMENT_VARIATION}" group for experiments`,
    )
  } else if (experiments.length && process.env.NODE_ENV === 'test') {
    console.log(`In test, all users are placed in the "${CONTROL_VARIATION}" group for experiments`)
  }

  let numberOfExperimentsUsingContext = 0
  for (const experiment of experiments) {
    if (experiment.includeVariationInContext) {
      // Validate the experiments object
      numberOfExperimentsUsingContext++
      if (numberOfExperimentsUsingContext > 1) {
        throw new Error(
          'Only one experiment can include its variation in the context at a time. Please update the experiments configuration.',
        )
      }
    }

    const controlGroup = getExperimentControlGroupFromSession(
      experiment.key,
      experiment.percentOfUsersToGetExperiment,
    )

    // Even in preview & prod it is useful to see if a given experiment is "on" or "off"
    console.log(
      `Experiment ${experiment.key} is in the "${controlGroup === TREATMENT_VARIATION ? TREATMENT_VARIATION : CONTROL_VARIATION}" group for this browser.\nCall function window.overrideControlGroup('${experiment.key}', 'treatment' | 'control') to change your group for this session.`,
    )
  }
}
