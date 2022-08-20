マトリックスで定義されている特定の設定を除外したい場合には、`jobs.<job_id>.strategy.matrix.exclude`を使ってください。 除外する設定は、部分一致だけでかまいません。 たとえば、以下のワークフローは9つのジョブを実行します。12個の各設定に対応するジョブから、`{os: macos-latest, version: 12, environment: production}`にマッチする1つのジョブと`{os: windows-latest, version: 16}`にマッチする2つのジョブが除外されます。

```yaml
strategy:
  matrix:
    os: [macos-latest, windows-latest]
    version: [12, 14, 16]
    environment: [staging, production]
    exclude:
      - os: macos-latest
        version: 12
        environment: production
      - os: windows-latest
        version: 16
runs-on: {% raw %}${{ matrix.os }}{% endraw %}
```

{% note %}

**ノート:** すべての`include`の組み合わせは、`exclude`の後に処理されます。 このため、`include`を使って以前に除外された組み合わせを追加し直すことができます。

{% endnote %}
