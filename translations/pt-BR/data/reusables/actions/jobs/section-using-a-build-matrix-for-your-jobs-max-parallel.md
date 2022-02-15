Use `jobs.<job_id>.strategy.max-parallel` to set the maximum number of jobs that can run simultaneously when using a `matrix` job strategy. Por padrão, o {% data variables.product.prodname_dotcom %} maximizará o número de trabalhos executados em paralelo dependendo dos executores disponíveis nas máquinas virtuais hospedadas no {% data variables.product.prodname_dotcom %}.

```yaml
strategy:
  max-parallel: 2
```