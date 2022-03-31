Use `jobs.<job_id>.strategy.max-parallel` para definir o número máximo de trabalhos que podem ser executados simultaneamente ao usar uma estratégia de trabalho de `matriz`. Por padrão, o {% data variables.product.prodname_dotcom %} maximizará o número de trabalhos executados em paralelo dependendo dos executores disponíveis nas máquinas virtuais hospedadas no {% data variables.product.prodname_dotcom %}.

```yaml
strategy:
  max-parallel: 2
```
