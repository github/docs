By default, {% data variables.product.product_name %} will maximize the number of jobs run in parallel depending on runner availability. Para definir o número máximo de trabalhos que podem ser executados simultaneamente ao usar uma estratégia de trabalho de `matriz`, use `jobs.<job_id>.strategy.max-parallel`.

Por exemplo, o fluxo de trabalho seguinte será executado um máximo de duas tarefas por vez, mesmo que haja executores disponíveis para executar todos os seis trabalhos de uma só vez.

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
