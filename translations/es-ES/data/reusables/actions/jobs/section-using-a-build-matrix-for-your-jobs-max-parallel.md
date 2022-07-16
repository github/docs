By default, {% data variables.product.product_name %} will maximize the number of jobs run in parallel depending on runner availability. Para configurar la cantidad máxima de jobs que puedan ejecutarse simultáneamente al utilizar una estrategia de jobs de `matrix`, utiliza `jobs.<job_id>.strategy.max-parallel`.

Por ejemplo, el siguiente flujo de trabajo ejecutará un máximo de dos jobs a la vez, incluso si hay ejecutores disponibles para ejecutar los seis jobs al mismo tiempo.

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
