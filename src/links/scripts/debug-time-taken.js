const timeInstances = new Map()

/* Meant to be called before debugTimeEnd with the same instanceName to behave like console.time() */
export function debugTimeStart(core, instanceName) {
  if (timeInstances.has(instanceName)) {
    core.warn(`instanceName: ${instanceName} has already been used for a debug instance.`)
    return
  }

  timeInstances.set(instanceName, new Date())
}

/* Meant to be called after debugTimeStart with the same instanceName to behave like console.timeEnd() */
export function debugTimeEnd(core, instanceName) {
  if (!timeInstances.has(instanceName)) {
    core.warn(
      `Invalid instanceName: ${instanceName} in debugTimeEnd. Did you call debugTimeStart first with the same instanceName?`,
    )
    return
  }
  const startTime = timeInstances.get(instanceName)
  const ms = new Date().getTime() - startTime.getTime()
  const seconds = ms / 1000
  const minutes = seconds / 60
  let display = `${ms.toFixed(1)} ms`
  if (minutes > 1) {
    display = `${minutes.toFixed(1)} minutes`
  } else if (seconds > 1) {
    display = `${seconds.toFixed(1)} seconds`
  }
  core.debug(`Completed ${instanceName} in ${display}`)
}
