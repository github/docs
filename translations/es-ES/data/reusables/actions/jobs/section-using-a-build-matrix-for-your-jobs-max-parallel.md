Predeterminadamente, {% data variables.product.product_name %} maximizará la cantidad de jobs que se ejecutan en paralelo, dependiendo de la disponibilidad del ejecutor. Para configurar la cantidad máxima de jobs que puedan ejecutarse simultáneamente al utilizar una estrategia de jobs de `matrix`, utiliza `jobs.<job_id>.strategy.max-parallel`.

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
