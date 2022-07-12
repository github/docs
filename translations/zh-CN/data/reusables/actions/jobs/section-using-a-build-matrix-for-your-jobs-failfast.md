您可以使用 `jobs.<job_id>.strategy.fail-fast` and `jobs.<job_id>.continue-on-error` 控制如何处理作业失败。

`jobs.<job_id>.strategy.fail-fast` 适用于整个矩阵。 如果`jobs.<job_id>.strategy.fail-fast` 设置为 `true`，如果矩阵中的任何作业失败， {% data variables.product.product_name %} 将取消矩阵中所有正在进行的作业和排队的作业。 此属性默认为 `true`。

`jobs.<job_id>.continue-on-error` 适用于单个作业。 如果 `jobs.<job_id>.continue-on-error` 为 `true`，则矩阵中的其他作业将继续运行，即使具有 `jobs.<job_id>.continue-on-error: true` 的作业失败也一样。

您可以同时使用 `jobs.<job_id>.strategy.fail-fast` 和 `jobs.<job_id>.continue-on-error`。 例如，以下工作流程将启动四个作业。 对于每个作业，`continue-on-error` 由 `matrix.experimental` 的值确定。 如果任何具有 `continue-on-error: false` 的作业失败，则将取消所有正在进行的作业或排队的作业。 如果具有 `continue-on-error: true` 的作业失败，其他作业将不受影响。


```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    continue-on-error: {% raw %}${{ matrix.experimental }}{% endraw %}
    strategy:
      fail-fast: true
      matrix:
        version: [6, 7, 8]
        experimental: [false]
        include:
          - version: 9
            experimental: true
```
