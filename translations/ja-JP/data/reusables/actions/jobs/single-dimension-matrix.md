1つの変数を指定して、1次元のマトリックスを作成できます。

たとえば、以下のワークフローは変数`version`に`[10, 12, 14]`という値を定義しています。 このワークフローは、変数中のそれぞれの値に対して1つずつ、3つのジョブを実行します。 それぞれのジョブは`version`の値に`matrix.version`コンテキストを通じてアクセスし、その値を`node-version`として`actions/setup-node`アクションに渡します。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
