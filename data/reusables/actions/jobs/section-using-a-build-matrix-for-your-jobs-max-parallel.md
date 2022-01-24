Use `jobs.<job_id>.strategy.max-parallel` to set the maximum number of jobs that can run simultaneously when using a `matrix` job strategy. By default, {% data variables.product.prodname_dotcom %} will maximize the number of jobs run in parallel depending on the available runners on {% data variables.product.prodname_dotcom %}-hosted virtual machines.

```yaml
strategy:
  max-parallel: 2
```