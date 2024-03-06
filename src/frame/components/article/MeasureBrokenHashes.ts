/**
 * This component never renders anything but on initial mount, it checks
 * if the hash is broken and sends this as a measurement analytics point.
 *
 * This experiment is meant to be temporary. At least until we know and
 * have documented how often this happens.
 *
 */

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { sendEvent, EventType } from 'src/events/components/events'

const EXPERIMENT_NAME = 'broken_hash'

function sendHash(hash: string) {
  const broken = !document.querySelector(`#${hash},a[name="${hash}"]`)
  sendEvent({
    type: EventType.experiment,
    experiment_name: EXPERIMENT_NAME,
    experiment_variation: hash,
    experiment_success: broken,
  })
}

export function MeasureBrokenHashes() {
  const { asPath } = useRouter()

  useEffect(() => {
    try {
      if (asPath.includes('#')) {
        const hash = asPath.split('#')[1]
        if (hash) sendHash(hash)
      }
    } catch (error) {
      console.error('Error measuring broken hash', error)
    }
  }, [])

  return null
}
