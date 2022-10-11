当并发作业或工作流程排队时，如果仓库中使用同一并发组的其他作业或工作流程正在运行，则排队的作业或工作流程将 `pending`。 在并发组中任何先前挂起的作业或工作流程都将被取消。 如果还要取消同一并发组中任何当前运行的作业或工作流程，请指定 `cancel-in-progress: true`。

##### 示例：使用并发和默认行为

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

##### 示例：使用并发取消任何当前作业或运行

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref }}
  cancel-in-progress: true
```
{% endraw %}
