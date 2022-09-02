`jobs.<job_id>.strategy.matrix`を使って、様々なジョブ設定のマトリックスを定義してください。 マトリックス内では、1つ以上の変数のあとに値の配列を続けて定義してください。 たとえば、以下のマトリックスは`[10, 12, 14]`という値の`version`という変数を、そして`[ubuntu-latest, windows-latest]`という値の`os`という変数を持っています。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

取り得る変数のそれぞれの組み合わせに対して、ジョブが実行されます。 この例では、ワークフローは`os`及び`version`変数のそれぞれの組み合わせに対応する6つのジョブを実行します。

デフォルトでは、{% data variables.product.product_name %}は利用可能なランナーに応じて並列に実行されるジョブ数を最大化します。 マトリックス内の変数の順序によって、ジョブが生成される順序が決まります。 定義された最初の変数が、ワークフロー中で生成される最初のジョブになります。 たとえば、上のマトリックスはジョブを以下の順序で生成します。

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

1つのマトリックスはワークフローの実行ごとに最大で256のジョブを生成します。 この制限は、{% data variables.product.product_name %}ホスト及びセルフホストの両方のランナーに適用されます。

定義した変数は`matrix`コンテキストのプロパティとなり、このプロパティはワークフローファイルの他の領域から参照できます。 この例では、`matrix.version`と`matrix.os`を使ってジョブが使用している現在の`version`と`os`の値にアクセスできます。 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。
