Ruleset workflows support using the `pull_request`, `pull_request_target` and `merge_group` events. As a result, you must specify one or more of these events in the `on:` section of the workflow for the workflow to be run by a ruleset.

Any filters you specify for the supported events are ignored - for example, `branches`, `branches-ignore`, `paths`, `types` and so on. The workflow is only triggered, and is always triggered, by the default activity types of the supported events.

| Event                 | Default activity types              |
| --------------------- | ----------------------------------- |
| `pull_request`        | `opened`, `synchronize`, `reopened` |
| `pull_request_target` | `opened`, `synchronize`, `reopened` |
| `merge_group`         | `checks_requested`                  |
