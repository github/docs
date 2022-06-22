Você pode controlar como falhas de trabalho são tratadas com `jobs.<job_id>.strategy.fail-fast` e `jobs.<job_id>.continue-on-error`.

`jobs.<job_id>.strategy.fail-fast` aplica-se à matriz inteira. Se `jobs.<job_id>.strategy.fail-fast` estiver definido como `verdadeiro`, {% data variables.product.product_name %} cancelará todos os trabalhos em andamento e agendados na matriz se algum trabalho na matriz falhar. Esta propriedade padrão é `verdadeira`.

`jobs.<job_id>.continue-on-error` aplica-se a um único trabalho. Se `jobs.<job_id>.continue-on-error` for `true`, os outros trabalhos na matriz continuarão sendo executados, ainda que o trabalho com `jobs.<job_id>.continue-on-error: true` falhe.

Você pode usar `jobs.<job_id>.strategy.fail-fast` e `jobs.<job_id>.continue-on-error` juntos. Por exemplo, o fluxo de trabalho a seguir dará início a quatro trabalhos. Para cada trabalho, `continue-on-error` é determinado pelo valor de `matriz.experimental`. Se algum dos jobs com `continue-on-error: false` falhar, todos os trabalhos em progresso ou na fila serão cancelados. Se o trabalho com `continue-on-error: true` falhar, os outros trabalhos não serão afetados.


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
