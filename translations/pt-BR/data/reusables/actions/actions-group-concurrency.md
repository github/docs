When a concurrent job or workflow is queued, if another job or workflow using the same concurrency group in the repository is in progress, the queued job or workflow will be `pending`. Any previously pending job or workflow in the concurrency group will be canceled. To also cancel any currently running job or workflow in the same concurrency group, specify `cancel-in-progress: true`.

##### Examples: Using concurrency and the default behavior

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

##### Example: Using concurrency to cancel any in-progress job or run

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref }}
  cancel-in-progress: true
```
{% endraw %}
