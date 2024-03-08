---
title: Setting exit codes for actions
shortTitle: Set exit codes
intro: 'You can use exit codes to set the status of an action. {% data variables.product.prodname_dotcom %} displays statuses to indicate passing or failing actions.'
redirect_from:
  - /actions/building-actions/setting-exit-codes-for-actions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## About exit codes

{% data variables.product.prodname_dotcom %} uses the exit code to set the action's check run status, which can be `success` or `failure`.

Exit status | Step conclusion | Description
------------|-----------------|------------
`0` | `success` | The action completed successfully and other tasks that depend on it can begin.
Nonzero value (any integer but 0)| `failure` | Any other exit code indicates the action failed. When an action fails unless the step has `continue-on-error: true` the job will be set to `failed` and future steps in the job will be skipped unless they use `if:` with either `always()` or `failed()`. Concurrent jobs will be canceled unless `jobs.<job_id>.strategy.fail-fast` is `false`.

## Setting a failure exit code in a JavaScript action

If you are creating a JavaScript action, you can use the actions toolkit [`@actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) package to log a message and set a failure exit code. For example:

```javascript
try {
  // something
} catch (error) {
  core.setFailed(error.message);
}
```

For more information, see "[AUTOTITLE](/actions/creating-actions/creating-a-javascript-action)."

## Setting a failure exit code in a Docker container action

If you are creating a Docker container action, you can set a failure exit code in your `entrypoint.sh` script. For example:

```shell
if <condition> ; then
  echo "Game over!"
  exit 1
fi
```

For more information, see "[AUTOTITLE](/actions/creating-actions/creating-a-docker-container-action)."

## Handling exit codes in composite actions

### Handling failing steps in composite actions

If a step exits with a Nonzero value (any integer but 0), its `outcome` will be `failure`.

Any step in a composite action that doesn't have `continue-on-error: true` and has a `failure` outcome will cause the composite action `outcome` to be `failure`.

To perform other logic based on a step that uses an action that can fail for which you don't want to automatically have the consuming action fail, you can use `continue-on-error: true` on the step and then use `steps.<step_id>.outcome` for that possibly failing step to control the logic of the remaining steps in the composite action. For more information, see "[AUTOTITLE](/actions/learn-github-actions/contexts#steps-context)."

Consumers of an action in a matrix with `jobs.<job_id>.strategy.fail-fast` set to `true` will be canceled when an action step fails without `continue-on-error: true`.

### Setting a success outcome in a composite action

As long as all steps without `continue-on-error: true` yield an exit code of `0` whether explicit or implicit (e.g. a shell run step where commands don't fail or the shell is set not to treat failed steps as failures), the action's outcome will be success.

### Setting a failure in a composite action

Set the exit code of a step to a nonzero value and ensure that the step does not have `continue-on-error: true` to cause the composite action `outcome` to be `failure`.

### Examples of success and failure in composite actions

`maybe-fail/action.yaml`:

```yaml
{% raw %}name: 'Maybe fail'
description: 'Conditionally fail based on inputs'
inputs:
  return-code:
    description: 'Value to use as exit code for main step'
    required: false
    default: '0'
  continue-on-error:
    description: 'Whether to run the main step with `continue-on-error`'
    required: false
    default: 'false'
outputs:
  result:
    description: "Result for posterity"
    value: ${{ steps.report-outcome.outputs.result }}
runs:
  using: "composite"
  steps:
    - name: Run step if continue-on-error = false
      id: continue-on-error-false
      if: ${{ inputs.continue-on-error == 'false' }}
      continue-on-error: false
      run: exit ${{ inputs.return-code }}
      shell: bash
    - name: Run step if continue-on-error != false
      id: continue-on-error-true
      if: ${{ inputs.continue-on-error != 'false' }}
      continue-on-error: true
      run: exit ${{ inputs.return-code }}
      shell: bash
    - id: report-outcome
      if: success() || failure()
      run: echo "result=$outcome" | tee -a "$GITHUB_OUTPUT"
      env:
        outcome: ${{ steps.continue-on-error-false.outcome != 'skipped' && steps.continue-on-error-false.outcome || steps.continue-on-error-true.outcome }}
      shell: bash{% endraw %}
```

`use-maybe-fail/action.yaml`:

```yaml
{% raw %}name: 'Use maybe fail'
description: 'Call maybe fail to conditionally fail based on inputs'
inputs:
  return-code:
    description: 'Value to use as exit code for main step'
    required: false
    default: '0'
  continue-on-error:
    description: 'Whether to run the main step with `continue-on-error`'
    required: false
    default: 'false'
outputs:
  result:
    description: "Result for posterity"
    value: ${{ steps.maybe-fail.outputs.result }}
runs:
  using: "composite"
  steps:
    - name: Call maybe fail
      id: maybe-fail
      uses: ./maybe-fail
      with:
        return-code: ${{ inputs.return-code }}
        continue-on-error: ${{ inputs.continue-on-error }}
    - id: report-outcome
      if: (success() || failure()) && steps.maybe-fail.outcome == 'failure'
      run: |
        echo 'Something must be done because maybe-fail failed!' | tee -a "$GITHUB_STEP_SUMMARY"
      shell: bash{% endraw %}
```

`.github/workflows/maybe-fail.yaml`:

```yaml
{% raw %}name: Maybe-fail

on:
  push:
  pull_request:
  workflow_dispatch:
jobs:
  use-action-without-fail-fast:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        return-code:
          - 0
          - 1
        continue-on-error:
          - true
          - false
      fail-fast: false
    name: Maybe fail
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use maybe-fail action
        id: maybe-fail
        uses: ./use-maybe-fail
        with:
          return-code: ${{ matrix.return-code }}
          continue-on-error: ${{ matrix.continue-on-error }}
      - name: After Action
        if: success() || failure()
        env:
          conclusion: ${{ steps.maybe-fail.conclusion }}
          outcome: ${{ steps.maybe-fail.outcome}}
          result: ${{ steps.maybe-fail.outputs.result }}
        run: |
          (
            echo "outcome: $outcome"
            echo "conclusion: $conclusion"
            echo "result: $result"
            echo
          ) | tee -a "$GITHUB_STEP_SUMMARY"
      - name: Next Step
        run:
          echo Next step | tee -a "$GITHUB_STEP_SUMMARY"
  use-action-with-fail-fast:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        return-code:
          - 0
          - 1
        continue-on-error:
          - false
      fail-fast: true
    name: Maybe fail fast
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: sleep
        if: ${{ matrix.return-code == 0 }}
        run:
          sleep 10
      - name: Use maybe-fail action
        id: maybe-fail
        uses: ./maybe-fail
        with:
          return-code: ${{ matrix.return-code }}
          continue-on-error: ${{ matrix.continue-on-error }}
      - name: After Action
        if: success() || failure()
        env:
          conclusion: ${{ steps.maybe-fail.conclusion }}
          outcome: ${{ steps.maybe-fail.outcome}}
          result: ${{ steps.maybe-fail.outputs.result }}
        run: |
          (
            echo "outcome: $outcome"
            echo "conclusion: $conclusion"
            echo "result: $result"
            echo
          ) | tee -a "$GITHUB_STEP_SUMMARY"
      - name: Next Step
        run:
          echo Next step | tee -a "$GITHUB_STEP_SUMMARY"{% endraw %}
```
