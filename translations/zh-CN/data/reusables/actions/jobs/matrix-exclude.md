若要删除矩阵中定义的特定配置，请使用 `jobs.<job_id>.strategy.matrix.exclude`。 排除的配置只需是部分匹配即可排除。 例如，以下工作流程将运行 9 个作业：12 个配置中每个配置一个作业，减去与 `{os: macos-latest, version: 12, environment: production}` 匹配的一个已排除作业，以及与 `{os: windows-latest, version: 16}` 匹配的两个已排除作业。

```yaml
strategy:
  matrix:
    os: [macos-latest, windows-latest]
    version: [12, 14, 16]
    environment: [staging, production]
    exclude:
      - os: macos-latest
        version: 12
        environment: production
      - os: windows-latest
        version: 16
runs-on: {% raw %}${{ matrix.os }}{% endraw %}
```

{% note %}

**注意：**所有 `include` 组合在 `exclude` 后处理。 这允许您使用 `include` 添加回以前排除的组合。

{% endnote %}
