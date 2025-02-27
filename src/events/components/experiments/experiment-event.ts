import { EventType } from '@/events/types'
import { sendEvent } from '../events'
import { getExperimentControlGroupFromSession } from './experiment'
import { ExperimentNames } from './experiments'

export function sendExperimentSuccess(experimentKey: ExperimentNames, success = true) {
  return sendEvent({
    type: EventType.experiment,
    experiment_name: experimentKey,
    experiment_variation:
      getExperimentControlGroupFromSession(experimentKey)?.toLowerCase() || 'control',
    experiment_success: success,
  })
}
