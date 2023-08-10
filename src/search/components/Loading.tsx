import { Spinner } from '@primer/react'
import { useEffect, useState } from 'react'

export function Loading() {
  const [showLoading, setShowLoading] = useState(false)
  useEffect(() => {
    let mounted = true
    setTimeout(() => {
      if (mounted) {
        setShowLoading(true)
      }
    }, 1000)

    return () => {
      mounted = false
    }
  }, [])
  return showLoading ? <ShowSpinner /> : <ShowNothing />
}

function ShowSpinner() {
  return (
    <div className="my-12 d-flex flex-justify-center">
      <Spinner size="medium" />
    </div>
  )
}

function ShowNothing() {
  return (
    // The min heigh is based on inspecting what the height became when it
    // does render. Making this match makes the footer to not flicker
    // up or down when it goes from showing nothing to something.
    <div className="my-12" style={{ minHeight: 105 }}>
      {/* Deliberately empty */}
    </div>
  )
}
