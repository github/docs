---
title: Running variations of jobs in a workflow
shortTitle: Run job variations
intro: Create a matrix to define variations for each job.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/using-a-build-matrix-for-your-jobs
  - /actions/using-jobs/using-a-matrix-for-your-jobs
  - /actions/examples/using-concurrency-expressions-and-a-test-matrix
  - /actions/writing-workflows/choosing-what-your-workflow-does/using-a-matrix-for-your-jobs
  - /actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow
  - /actions/how-tos/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow
---

## About matrix strategies

{% data reusables.actions.jobs.about-matrix-strategy %}

## Adding a matrix strategy to your workflow job

Use `jobs.<job_id>.strategy.matrix` to define a matrix of different job configurations. Within your matrix, define one or more variables followed by an array of values. For example, the following matrix has a variable called `version` with the value `[10, 12, 14]` and a variable called `os` with the value `[ubuntu-latest, windows-latest]`:

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

A job will run for each possible combination of the variables. In this example, the workflow will run six jobs, one for each combination of the `os` and `version` variables.

The above matrix will create the jobs in the following order.

* `{version: 10, os: ubuntu-latest}`
* `{version: 10, os: windows-latest}`
* `{version: 12, os: ubuntu-latest}`
* `{version: 12, os: windows-latest}`
* `{version: 14, os: ubuntu-latest}`
* `{version: 14, os: windows-latest}`

For reference information and examples, see [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix).

## Using contexts to create matrices

To create matrices with information about workflow runs, variables, runner environments, jobs, and steps, access contexts using the {% raw %}`${{ <context> }}`{% endraw %} expression syntax. For more information about contexts, see [AUTOTITLE](/actions/learn-github-actions/contexts).

For example, the following workflow triggers on the `repository_dispatch` event and uses information from the event payload to build the matrix. When a repository dispatch event is created with a payload like the one below, the matrix `version` variable will have a value of `[12, 14, 16]`. For more information about the `repository_dispatch` trigger, see [AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#repository_dispatch).

```json
{
  "event_type": "test",
  "client_payload": {
    "versions": [12, 14, 16]
  }
}
```

```yaml
on:
  repository_dispatch:
    types:
      - test

jobs:
  example_matrix:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        version: {% raw %}${{ github.event.client_payload.versions }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```

## Expanding or adding matrix configurations

To expand existing matrix configurations or to add new configurations, use `jobs.<job_id>.strategy.matrix.include`. The value of `include` is a list of objects.

For example, consider the following matrix.

```yaml
strategy:
  matrix:
    fruit: [apple, pear]
    animal: [cat, dog]
    include:
      - color: green
      - color: pink
        animal: cat
      - fruit: apple
        shape: circle
      - fruit: banana
      - fruit: banana
        animal: cat
```

This will result in six jobs with the following matrix combinations.

* `{fruit: apple, animal: cat, color: pink, shape: circle}`
* `{fruit: apple, animal: dog, color: green, shape: circle}`
* `{fruit: pear, animal: cat, color: pink}`
* `{fruit: pear, animal: dog, color: green}`
* `{fruit: banana}`
* `{fruit: banana, animal: cat}`

Each `include` entry was applied in the following ways.

* `{color: green}` is added to all of the original matrix combinations because it can be added without overwriting any part of the original combinations.
* `{color: pink, animal: cat}` adds `color:pink` only to the original matrix combinations that include `animal: cat`. This overwrites the `color: green` that was added by the previous `include` entry.
* `{fruit: apple, shape: circle}` adds `shape: circle` only to the original matrix combinations that include `fruit: apple`.
* `{fruit: banana}` cannot be added to any original matrix combination without overwriting a value, so it is added as an additional matrix combination.
* `{fruit: banana, animal: cat}` cannot be added to any original matrix combination without overwriting a value, so it is added as an additional matrix combination. It does not add to the `{fruit: banana}` matrix combination because that combination was not one of the original matrix combinations.

For reference and example configurations, see [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategymatrixinclude).

## Excluding matrix configurations

To remove specific configurations defined in the matrix, use `jobs.<job_id>.strategy.matrix.exclude`.

For example, the following workflow will run nine jobs: one job for each of the 12 configurations, minus the one excluded job that matches `{os: macos-latest, version: 12, environment: production}`, and the two excluded jobs that match `{os: windows-latest, version: 16}`.

```yaml
strategy:
  matrix:
    os: [macos-latest, windows-latest]
    version: [12, 14, 16]
    environment: [staging, production]
    exclude:
      - os: macos-latest
        version: 12
        environment: production
      - os: windows-latest
        version: 16
runs-on: {% raw %}${{ matrix.os }}{% endraw %}
```

For reference information, see [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategymatrixexclude)

## Using an output to define two matrices

You can use the output from one job to define matrices for multiple jobs.

For example, the following workflow demonstrates how to define a matrix of values in one job, use that matrix in a second jobs to produce artifacts, and then consume those artifacts in a third job. Each artifact is associated with a value from the matrix.

```yaml copy
name: shared matrix
on:
  push:
  workflow_dispatch:

jobs:
  define-matrix:
    runs-on: ubuntu-latest

    outputs:
      colors: {% raw %}${{ steps.colors.outputs.colors }}{% endraw %}

    steps:
      - name: Define Colors
        id: colors
        run: |
          echo 'colors=["red", "green", "blue"]' >> "$GITHUB_OUTPUT"

  produce-artifacts:
    runs-on: ubuntu-latest
    needs: define-matrix
    strategy:
      matrix:
        color: {% raw %}${{ fromJSON(needs.define-matrix.outputs.colors) }}{% endraw %}

    steps:
      - name: Define Color
        env:
          color: {% raw %}${{ matrix.color }}{% endraw %}
        run: |
          echo "$color" > color
      - name: Produce Artifact
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: {% raw %}${{ matrix.color }}{% endraw %}
          path: color

  consume-artifacts:
    runs-on: ubuntu-latest
    needs:
    - define-matrix
    - produce-artifacts
    strategy:
      matrix:
        color: {% raw %}${{ fromJSON(needs.define-matrix.outputs.colors) }}{% endraw %}

    steps:
    - name: Retrieve Artifact
      uses: {% data reusables.actions.action-download-artifact %}
      with:
        name: {% raw %}${{ matrix.color }}{% endraw %}

    - name: Report Color
      run: |
        cat color
```

## Handling failures

To control how job failures are handled, use `jobs.<job_id>.strategy.fail-fast` and `jobs.<job_id>.continue-on-error`.

You can use `jobs.<job_id>.strategy.fail-fast` and `jobs.<job_id>.continue-on-error` together. For example, the following workflow will start four jobs. For each job, `continue-on-error` is determined by the value of `matrix.experimental`. If any of the jobs with `continue-on-error: false` fail, all jobs that are in progress or queued will be cancelled. If the job with `continue-on-error: true` fails, the other jobs will not be affected.

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    continue-on-error: {% raw %}${{ matrix.experimental }}{% endraw %}
    strategy:
      fail-fast: true
      matrix:
        version: [6, 7, 8]
        experimental: [false]
        include:
          - version: 9
            experimental: true
```

For reference information see [`jobs.<job_id>.strategy.fail-fast`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) and [`jobs.<job_id>.continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error).

## Defining the maximum number of concurrent jobs

To set the maximum number of jobs that can run simultaneously when using a `matrix` job strategy, use `jobs.<job_id>.strategy.max-parallel`.

For example, the following workflow will run a maximum of two jobs at a time, even if there are runners available to run all six jobs at once.

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

For reference information, see [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel).
