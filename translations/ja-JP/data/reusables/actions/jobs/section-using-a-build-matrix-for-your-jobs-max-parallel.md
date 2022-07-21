デフォルトでは、{% data variables.product.product_name %}は利用できるランナーに応じて並列に実行するジョブ数を最大化します。 `matrix`ジョブ戦略を使用する際に同時に実行できるジョブの最大数を設定するには、`jobs.<job_id>.strategy.max-parallel`を使ってください。

たとえば以下のワークフローは、仮に6つのジョブすべてを一度に実行できるランナーが利用できるとしても、同時に最大で2つのジョブしか実行しません。

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
