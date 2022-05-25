Você pode controlar como falhas de trabalho são tratadas com `jobs.<job_id>.strategy.fail-fast` e `jobs.<job_id>.continue-on-error`.

`jobs.<job_id>.strategy.fail-fast` aplica-se à matriz inteira. Se `jobs.<job_id>.strategy.fail-fast` estiver definido como `verdadeiro`, {% data variables.product.product_name %} cancelará todos os trabalhos em andamento e agendados na matriz se algum trabalho na matriz falhar. This property defaults to `true`.

`jobs.<job_id>.continue-on-error` applies to a single job. If `jobs.<job_id>.continue-on-error` is `true`, other jobs in the matrix will continue running even if the job with `jobs.<job_id>.continue-on-error: true` fails.

You can use `jobs.<job_id>.strategy.fail-fast` and `jobs.<job_id>.continue-on-error` together. For example, the following workflow will start four jobs. For each job, `continue-on-error` is determined by the value of `matrix.experimental`. If any of the jobs with `continue-on-error: false` fail, all jobs that are in progress or queued will be cancelled. If the job with `continue-on-error: true` fails, the other jobs will not be affected.


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
