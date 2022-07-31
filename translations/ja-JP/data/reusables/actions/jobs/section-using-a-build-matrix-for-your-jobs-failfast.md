`jobs.<job_id>.strategy.fail-fast` and `jobs.<job_id>.continue-on-error`で、ジョブの失敗をどのように扱うかを制御できます。

`jobs.<job_id>.strategy.fail-fast`はマトリックス全体に適用されます。 `jobs.<job_id>.strategy.fail-fast`が`true`に設定されていると、{% data variables.product.product_name %}はマトリックス内のいずれかのジョブが失敗した場合、マトリックスの進行中及びキューイングされたすべてのジョブをキャンセルします。 この属性のデフォルトは`true`です。

`jobs.<job_id>.continue-on-error`は単一のジョブに適用されます。 `jobs.<job_id>.continue-on-error`が`true`の場合、`jobs.<job_id>.continue-on-error: true`を指定されたジョブが失敗したとしても、マトリックス内の他のジョブは実行を継続します。

`jobs.<job_id>.strategy.fail-fast`と`jobs.<job_id>.continue-on-error`は合わせて利用できます。 たとえば、以下のワークフローは4つのジョブを開始します。 それぞれのジョブにおいて、`continue-on-error`は`matrix.experimental`の値によって決定されます。 `continue-on-error: false`を指定されたいずれかのジョブが失敗すると、進行中もしくはキューイングされたすべてのジョブはキャンセルされます。 `continue-on-error: true`を指定されたジョブが失敗しても、他のジョブは影響を受けません。


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
