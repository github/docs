複数の変数を指定して、多次元マトリックスを作成できます。 変数の取り得るそれぞれの組み合わせに対してジョブが実行されます。

たとえば、以下のワークフローは2つの変数を指定しています。

- `os`変数では2つのオペレーティングシステムが指定されています
- `version`変数では、3つのNode.jsのバージョンが指定されています

このワークフローは、`os`及び`version`変数のそれぞれの組み合わせに応じた6のジョブを実行します。 各ジョブは、`runs-on`の値を現在の`os`の値に設定し、現在の`version`の値を`actions/setup-node`アクションに渡します。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [ubuntu-18.04, ubuntu-20.04]
        version: [10, 12, 14]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
