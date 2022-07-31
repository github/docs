例如，以下工作流程将运行六个作业，每个作业对应于 `os` 和 `node` 的组合。 当 `windows-latest` 值为 `os` 且 `16` 值为 `node` 的作业运行时，作业中将包含一个名为 `npm`、值为 `6` 的附加变量。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [windows-latest, ubuntu-latest]
        node: [12, 14, 16]
        include:
          - os: windows-latest
            node: 16
            npm: 6
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - if: {% raw %}${{ matrix.npm }}{% endraw %}
        run: npm install -g npm@{% raw %}${{ matrix.npm }}{% endraw %}
      - run: npm --version
```
