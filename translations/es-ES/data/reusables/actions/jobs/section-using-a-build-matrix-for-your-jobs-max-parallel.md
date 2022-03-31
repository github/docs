Use `jobs.<job_id>.strategy.max-parallel` to set the maximum number of jobs that can run simultaneously when using a `matrix` job strategy. De manera predeterminada, {% data variables.product.prodname_dotcom %} maximizará el número de trabajos ejecutados en paralelo dependiendo de los ejecutadores disponibles en las máquinas virtuales alojadas en {% data variables.product.prodname_dotcom %}.

```yaml
strategy:
  max-parallel: 2
```
