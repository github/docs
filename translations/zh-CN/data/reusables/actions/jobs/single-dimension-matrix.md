可以指定单个变量来创建单维矩阵。

例如，以下工作流程使用值 `[10, 12, 14]` 定义变量 `version`。 工作流程将运行三个作业，变量中的每个值对应一个作业。 每个作业将通过 `matrix.version` 上下文访问 `version` 值，并将该值作为 `node-version` 传递给 `actions/setup-node` 操作。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
