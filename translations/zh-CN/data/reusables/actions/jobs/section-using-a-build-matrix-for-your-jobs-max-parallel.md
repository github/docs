Use `jobs.<job_id>.strategy.max-parallel` to set the maximum number of jobs that can run simultaneously when using a `matrix` job strategy. 默认情况下，{% data variables.product.prodname_dotcom %} 将最大化并发运行的作业数量，具体取决于 {% data variables.product.prodname_dotcom %} 托管虚拟机上可用的运行程序。

```yaml
strategy:
  max-parallel: 2
```