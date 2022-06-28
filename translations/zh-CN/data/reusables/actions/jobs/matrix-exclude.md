To remove specific configurations defined in the matrix, use `jobs.<job_id>.strategy.matrix.exclude`. An excluded configuration only has to be a partial match for it to be excluded. For example, the following workflow will run nine jobs: one job for each of the 12 configurations, minus the one excluded job that matches `{os: macos-latest, version: 12, environment: production}`, and the two excluded jobs that match `{os: windows-latest, version: 16}`.

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
