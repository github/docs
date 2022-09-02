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

### 示例：使用回退值

如果使用仅为特定事件定义的属性构建组名，则可以使用回退值。 例如，`github.head_ref` 仅在 `pull_request` 事件上定义。 如果您的工作流响应除 `pull_request` 事件之外的其他事件，则需要提供回退以避免语法错误。 以下并发组取消正在进行的作业或仅在 `pull_request` 事件上运行；如果未定义 `github.head_ref` ，则并发组将回退到运行 ID，该 ID 保证是唯一的，并且是为运行定义的。

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}


### 示例：仅取消当前工作流程的正在进行的作业或运行

 如果同一存储库中有多个工作流程，则并发组名称在工作流程中必须唯一，以避免取消正在进行的作业或从其他工作流程运行。 否则，无论工作流程如何，任何以前正在进行的或挂起的作业都将被取消。

要仅取消同一工作流程的正在进行的运行，可以使用 `github.workflow` 属性来构建并发组：

{% raw %}
```yaml
concurrency: 
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

