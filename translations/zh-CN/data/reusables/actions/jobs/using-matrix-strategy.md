使用 `jobs.<job_id>.strategy.matrix` 定义不同作业配置的矩阵。 在矩阵中，定义一个或多个变量，后跟一个值数组。 例如，以下矩阵有一个名为 `version` 的变量，其值为 `[10, 12, 14]`，以及一个名为 `os` 的变量，其值为 `[ubuntu-latest, windows-latest]`：

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

将为每个可能的变量组合运行一个作业。 在此示例中，工作流程将运行六个作业，每个作业对应于 `os` 和 `version` 变量的组合。

默认情况下，{% data variables.product.product_name %} 将根据运行器的可用性最大化并行运行的作业数。 矩阵中变量的顺序决定了作业的创建顺序。 您定义的第一个变量将是工作流程运行中创建的第一个作业。 例如，上面的矩阵将按以下顺序创建作业：

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

矩阵将为每个工作流运行生成最多 256 个作业。 此限制适用于 {% data variables.product.product_name %} 托管和自托管运行器。

您定义的变量将成为 `matrix` 上下文中的属性，您可以在工作流程文件的其他区域中引用该属性。 在此示例中，可以使用 `matrix.version` 和 `matrix.os` 来访问作业所用 `version` 和 `os` 的当前值。 更多信息请参阅“[上下文](/actions/learn-github-actions/contexts)”。
