当并发作业或工作流程排队时，如果仓库中使用同一并发组的其他作业或工作流程正在运行，则排队的作业或工作流程将 `pending`。 在并发组中任何先前挂起的作业或工作流程都将被取消。 如果还要取消同一并发组中任何当前运行的作业或工作流程，请指定 `cancel-in-progress: true`。

### 示例：使用并发和默认行为

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

### 示例：使用并发取消任何当前作业或运行

{% raw %}
```yaml
concurrency: 
  group: ${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

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

