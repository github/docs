例如，此矩阵将运行 10 个作业，矩阵中 `os` 和 `version` 的每个组合各一个作业，再加上一个 `windows-latest` 值为 `os` 且 `17` 值为 `version` 的作业。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [macos-latest, windows-latest, ubuntu-latest]
        version: [12, 14, 16]
        include:
          - os: windows-latest
            version: 17
```

如果未指定任何矩阵变量，则 `include` 下的所有配置都将运行。 例如，以下工作流程将运行两个作业，每个作业一个 `include` 条目。 这使您可以利用矩阵策略，而无需完全填充的矩阵。

```yaml
jobs:
  includes_only:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        include:
          - site: "production"
            datacenter: "site-a"
          - site: "staging"
            datacenter: "site-b"

```
