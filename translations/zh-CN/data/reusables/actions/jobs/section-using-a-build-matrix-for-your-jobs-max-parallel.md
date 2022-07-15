默认情况下，{% data variables.product.product_name %} 将根据运行器的可用性最大化并行运行的作业数。 要设置在使用 `matrix` 作业策略时可以同时运行的最大作业数，请使用 `jobs.<job_id>.strategy.max-parallel`。

例如，以下工作流程一次最多运行两个作业，即使有运行器可以同时运行所有六个作业也是如此。

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
