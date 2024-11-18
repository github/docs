When a concurrent job or workflow is queued, if another job or workflow using the same concurrency group in the repository is in progress, the queued job or workflow will be `pending`. Any pending job or workflow in the concurrency group will be canceled.  This means that there can be at most one running and one pending job in a concurrency group at any time.

To also cancel any currently running job or workflow in the same concurrency group, specify `cancel-in-progress: true`.  To conditionally cancel currently running jobs or workflows in the same concurrency group, you can specify `cancel-in-progress` as an expression with any of the allowed expression contexts.

{% note %}

**Notes:**

* The concurrency group name is case insensitive. For example, `prod` and `Prod` will be treated as the same concurrency group.
* Ordering is not guaranteed for jobs or workflow runs using concurrency groups. Jobs or workflow runs in the same concurrency group are handled in an arbitrary order.

{% endnote %}

### Example: Using concurrency and the default behavior

The default behavior of {% data variables.product.prodname_actions %} is to allow multiple jobs or workflow runs to run concurrently. The `concurrency` keyword allows you to control the concurrency of workflow runs.

For example, you can use the `concurrency` keyword immediately after where trigger conditions are defined to limit the concurrency of entire workflow runs for a specific branch:

```yaml
on:
  push:
    branches:
      - main

concurrency:
  group: {% raw %}${{ github.workflow }}-${{ github.ref }}{% endraw %}
  cancel-in-progress: true
```

You can also limit the concurrency of jobs within a workflow by using the `concurrency` keyword at the job level:

```yaml
on:
  push:
    branches:
      - main

jobs:
  job-1:
    runs-on: ubuntu-latest
    concurrency:
      group: example-group
      cancel-in-progress: true
```

### Example: Concurrency groups

Concurrency groups provide a way to manage and limit the execution of workflow runs or jobs that share the same concurrency key.

The `concurrency` key is used to group workflows or jobs together into a concurrency group. When you define a `concurrency` key, {% data variables.product.prodname_actions %} ensures that only one workflow or job with that key runs at any given time. If a new workflow run or job starts with the same `concurrency` key, {% data variables.product.prodname_actions %} will cancel any workflow or job already running with that key. The `concurrency` key can be a hard-coded string, or it can be a dynamic expression that includes context variables.

It is possible to define concurrency conditions in your workflow so that the workflow or job is part of a concurrency group.

This means that when a workflow run or job starts, GitHub will cancel any workflow runs or jobs that are already in progress in the same concurrency group. This is useful in scenarios where you want to prevent parallel runs for a certain set of a workflows or jobs, such as the ones used for deployments to a staging environment, in order to prevent actions that could cause conflicts or consume more resources than necessary.

In this example, `job-1` is part of a concurrency group named `staging_environment`. This means that if a new run of `job-1` is triggered, any runs of the same job in the `staging_environment` concurrency group that are already in progress will be cancelled.

{% raw %}

```yaml
jobs:
  job-1:
    runs-on: ubuntu-latest
    concurrency:
      group: staging_environment
      cancel-in-progress: true
```

{% endraw %}

Alternatively, using a dynamic expression such as `{% raw %}concurrency: ci-${{ github.ref }}{% endraw %}` in your workflow means that the workflow or job would be part of a concurrency group named `ci-` followed by the reference of the branch or tag that triggered the workflow. In this example, if a new commit is pushed to the main branch while a previous run is still in progress, the previous run will be cancelled and the new one will start:

{% raw %}

```yaml
on:
  push:
    branches:
      - main

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true
```

{% endraw %}

### Example: Using concurrency to cancel any in-progress job or run

To use concurrency to cancel any in-progress job or run in {% data variables.product.prodname_actions %}, you can use the `concurrency` key with the `cancel-in-progress` option set to `true`:

{% raw %}

```yaml
concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true
```

{% endraw %}

Note that in this example, without defining a particular concurrency group, {% data variables.product.prodname_actions %} will cancel _any_ in-progress run of the job or workflow.

### Example: Using a fallback value

If you build the group name with a property that is only defined for specific events, you can use a fallback value. For example, `github.head_ref` is only defined on `pull_request` events. If your workflow responds to other events in addition to `pull_request` events, you will need to provide a fallback to avoid a syntax error. The following concurrency group cancels in-progress jobs or runs on `pull_request` events only; if `github.head_ref` is undefined, the concurrency group will fallback to the run ID, which is guaranteed to be both unique and defined for the run.

{% raw %}

```yaml
concurrency:
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```

{% endraw %}

### Example: Only cancel in-progress jobs or runs for the current workflow

 If you have multiple workflows in the same repository, concurrency group names must be unique across workflows to avoid canceling in-progress jobs or runs from other workflows. Otherwise, any previously in-progress or pending job will be canceled, regardless of the workflow.

To only cancel in-progress runs of the same workflow, you can use the `github.workflow` property to build the concurrency group:

{% raw %}

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

{% endraw %}

### Example: Only cancel in-progress jobs on specific branches

If you would like to cancel in-progress jobs on certain branches but not on others, you can use conditional expressions with `cancel-in-progress`. For example, you can do this if you would like to cancel in-progress jobs on development branches but not on release branches.

To only cancel in-progress runs of the same workflow when not running on a release branch, you can set `cancel-in-progress` to an expression similar to the following:

{% raw %}

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: ${{ !contains(github.ref, 'release/')}}
```

{% endraw %}

In this example, multiple pushes to a `release/1.2.3` branch would not cancel in-progress runs. Pushes to another branch, such as `main`, would cancel in-progress runs.
