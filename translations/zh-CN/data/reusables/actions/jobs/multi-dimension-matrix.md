您可以指定多个变量来创建多维矩阵。 将为每个可能的变量组合运行一个作业。

例如，以下工作流程指定了两个变量：

- `os` 变量中指定的两个操作系统
- 在 `version` 变量中指定的三个 Node.js 版本

工作流程将运行六个作业，每个作业对应于 `os` 和 `version` 变量的组合。 每个作业都会将 `runs-on` 值设置为当前 `os` 值，并将当前 `version` 值传递给 `actions/setup-node` 操作。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [ubuntu-18.04, ubuntu-20.04]
        version: [10, 12, 14]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
