Puedes controlar cómo se manejan los fallos de los jobs con `jobs.<job_id>.strategy.fail-fast` y `jobs.<job_id>.continue-on-error`.

`jobs.<job_id>.strategy.fail-fast` aplica a toda la matriz. Si configuras a `jobs.<job_id>.strategy.fail-fast` como `true`, {% data variables.product.product_name %} cancelará todos los jobs de la matriz que estén en cola y en progreso en caos de que cualquiera de ellos falle. Esta propiedad se predetermina en `true`.

`jobs.<job_id>.continue-on-error` aplica a un solo job. Si `jobs.<job_id>.continue-on-error` es `true`, otros jobs en la matriz seguirán ejecutándose, incluso si el job con `jobs.<job_id>.continue-on-error: true` falla.

Puedes utilizar `jobs.<job_id>.strategy.fail-fast` y `jobs.<job_id>.continue-on-error` juntos. Por ejemplo, el siguiente flujo de trabajo iniciará cuatro jobs. Para cada job, `continue-on-error` se determina mediante el valor de `matrix.experimental`. Si cualquiera de los jobs con `continue-on-error: false` falla, todos los jobs que estén en progreso o en cola se cancelarán. Si el job con `continue-on-error: true` falla, los otros no se verán afectados.


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
