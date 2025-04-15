import murmur from 'imurmurhash'
import type { NextRouter } from 'next/router'
import {
  CONTROL_VARIATION,
  EXPERIMENTS,
  ExperimentNames,
  TREATMENT_VARIATION,
  getActiveExperiments,
} from './experiments'
import { getUserEventsId } from '../events'
import type { ParsedUrlQuery } from 'querystring'

let experimentsInitialized = false

export function shouldShowExperiment(
  experimentKey: ExperimentNames | { key: ExperimentNames },
  locale: string,
  version: string,
  isStaff: boolean,
  routerQuery: ParsedUrlQuery,
) {
  // Accept either EXPERIMENTS.<experiment_key> or EXPERIMENTS.<experiment_key>.key
  if (typeof experimentKey === 'object') {
    experimentKey = experimentKey.key
  }

  // Determine if user is in treatment group. If they are, show the experiment
  const experiments = getActiveExperiments('all')
  for (const experiment of experiments) {
    if (experiment.key === experimentKey) {
      // If there is an override for the current session, use that
      if (controlGroupOverride[experiment.key]) {
        const controlGroup = getExperimentControlGroupFromSession(
          experimentKey,
          experiment.percentOfUsersToGetExperiment,
        )
        return controlGroup === TREATMENT_VARIATION
        // Otherwise determine if the user is in the treatment group
      } else if (
        (experiment.limitToLanguages?.length
          ? experiment.limitToLanguages.includes(locale)
          : true) &&
        (experiment.limitToVersions?.length ? experiment.limitToVersions.includes(version) : true)
      ) {
        // If the user has staffonly cookie, and staff override is true, show the experiment
        if (experiment.alwaysShowForStaff) {
          if (isStaff) {
            console.log(`Staff cookie is set, showing '${experiment.key}' experiment`)
            return true
          }
        }
        if (experiment.turnOnWithURLParam) {
          if (
            typeof routerQuery?.feature === 'string'
              ? routerQuery.feature.toLowerCase() === experiment.turnOnWithURLParam.toLowerCase()
              : false
          ) {
            return true
          }
        }
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

export function getExperimentVariationForContext(locale: string, version: string): string {
  const experiments = getActiveExperiments(locale, version)
  for (const experiment of experiments) {
    if (experiment.includeVariationInContext) {
      // If the user is using the URL param to view the experiment, include the variation in the context
      if (
        experiment.turnOnWithURLParam &&
        window.location?.search
          ?.toLowerCase()
          .includes(`feature=${experiment.turnOnWithURLParam.toLowerCase()}`)
      ) {
        return TREATMENT_VARIATION
      }
      return getExperimentControlGroupFromSession(
        experiment.key,
        experiment.percentOfUsersToGetExperiment,
      )
    }
  }

  // When no experiment has `includeVariationInContext: true`
  return CONTROL_VARIATION
}

export function initializeExperiments(
  locale: string,
  currentVersion: string,
  allVersions: { [key: string]: { version: string } },
) {
  if (experimentsInitialized) return
  experimentsInitialized = true

  // Replace any occurrence of 'enterprise-server@latest' with the actual latest version
  for (const [experimentKey, experiment] of Object.entries(EXPERIMENTS)) {
    if (experiment.limitToVersions?.includes('enterprise-server@latest')) {
      // Sort the versions in descending order so that the latest enterprise-server version is first
      const latestEnterpriseServerVersion = Object.keys(allVersions)
        .filter((version) => version.startsWith('enterprise-server@'))
        .sort((a, b) => {
          const aVersion = a.split('@')[1]
          const bVersion = b.split('@')[1]
          return Number(bVersion) - Number(aVersion)
        })[0]
      if (latestEnterpriseServerVersion) {
        EXPERIMENTS[experimentKey as ExperimentNames].limitToVersions =
          experiment.limitToVersions.map((version) =>
            version.replace(
              'enterprise-server@latest',
              allVersions[latestEnterpriseServerVersion].version,
            ),
          )
      }
    }
  }

  const experiments = getActiveExperiments(locale, currentVersion)

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

    // In any environment, it is useful to see if a given experiment is "on" or "off"
    console.log(
      `Experiment ${experiment.key} is in the "${controlGroup === TREATMENT_VARIATION ? TREATMENT_VARIATION : CONTROL_VARIATION}" group for this browser.\nCall function window.overrideControlGroup('${experiment.key}', 'treatment' | 'control') to change your group for this session.`,
    )
  }
}

// If we have an experiment enabled that supports turnOnWithURLParam, we need to listen to
// all clicks on links to ensure we forward the `feature` query param to the new page
export function initializeForwardFeatureUrlParam(router: NextRouter, currentVersion: string) {
  const experiments = getActiveExperiments(router.locale || 'en', currentVersion)

  if (!experiments.some((experiment) => experiment.turnOnWithURLParam)) {
    return
  }

  try {
    const searchParams = new URLSearchParams(window.location.search)
    const featureValue = searchParams.get('feature')
    // If the user's URL doesn't include `feature`, we don't need to forward it
    if (!featureValue) return

    const updateAnchorHref = (anchor: HTMLAnchorElement): void => {
      try {
        const url = new URL(anchor.href, window.location.origin)
        url.searchParams.set('feature', featureValue)
        router.push(url.toString())
      } catch (error) {
        console.error('Error modifying anchor URL:', error)
        router.push(anchor.href)
      }
    }

    const handleClick = (event: any) => {
      const anchor = event.target?.closest('a')
      if (anchor) {
        // If we found that the target is an anchor, we need to update and manually navigate to it
        event.preventDefault()
        updateAnchorHref(anchor)
      }
    }

    const handleKeyDown = (event: any) => {
      if (event.key !== 'Enter') return
      const anchor = event.target?.closest('a')
      if (anchor) {
        // If we found that the target is an anchor, we need to update and manually navigate to it
        event.preventDefault()
        updateAnchorHref(anchor)
      }
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  } catch (error) {
    console.error('Error adding event listener:', error)
  }
}
