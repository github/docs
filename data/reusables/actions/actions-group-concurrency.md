When a concurrent job or workflow is queued, if another job or workflow using the same concurrency group in the repository is in progress, the queued job or workflow will be `pending`. Any previously pending job or workflow in the concurrency group will be canceled. To also cancel any currently running job or workflow in the same concurrency group, specify `cancel-in-progress: true`.

## Examples: Using concurrency and the default behavior

{% raw %}
```yaml
concurrency: staging_environment
```
{% endraw %}

{% raw %}
```yaml
concurrency: ci-${{ github.ref }}
```
{% endraw %}

## Example: Using concurrency to cancel any in-progress job or run on a pull request

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref }}
  cancel-in-progress: true
```
{% endraw %}

{% note %}

**Note:** `github.head_ref` is only defined on `pull_request` events. If you have a workflow that responds to other events in addition to `pull_request` events, you will need to provide a fallback to avoid a syntax error.

{% endnote %}

### Example: With fallback

To cancel in-progress jobs or runs on `pull_request` events only, but not on other events the workflow responds to:

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}

If `github.head_ref` is undefined, the concurrency group will fallback to the run ID, which is guaranteed to be both unique and defined for the run.

### Only cancel in-progress jobs or runs for the current workflow

{% note %}

**Note:** If you have multiple workflows in the same repository, concurrency group names must be unique to avoid canceling in-progress jobs or runs from independent workflows. Otherwise, any previously in-progress or pending job will be canceled, regardless of the workflow that triggered it, leading to potentially confusing behavior if that wasn't your intent.

{% endnote %}

To only cancel in-progress runs on a per-workflow basis:

{% raw %}
```yaml
concurrency: 
  group: ${{github.workflow}}-${{ github.head_ref }}
  cancel-in-progress: true
```
{% endraw %}

With fallback:

{% raw %}
```yaml
concurrency: 
  group: ${{github.workflow}}-${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}
