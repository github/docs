Use `jobs.<job_id>.strategy.max-parallel` to set the maximum number of jobs that can run simultaneously when using a `matrix` job strategy. デフォルトでは、{% data variables.product.prodname_dotcom %}は{% data variables.product.prodname_dotcom %}がホストしている仮想マシン上で利用できるrunnerに応じてできるかぎりの数のジョブを並列に実行します。

```yaml
strategy:
  max-parallel: 2
```
