コンテキストを使ってマトリックスを作成できます。 コンテキストに関する詳しい情報については「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

たとえば、以下のワークフローは`repository_dispatch`イベントでトリガーされ、マトリックスの構築にイベントのペイロードからの情報を使います。 リポジトリのディスパッチイベントが以下のようなペイロードで作成されると、マトリックスの`version`変数は`[12, 14, 16]`という値を持ちます。 `repository_dispatch`に関する詳しい情報については「[ワークフローをトリガーするイベント](/actions/using-workflows/events-that-trigger-workflows#repository_dispatch)」を参照してください。

```json
{
  "event_type": "test",
  "client_payload": {
    "versions": [12, 14, 16]
  }
}
```

```yaml
on:
  repository_dispatch:
    types:
      - test

jobs:
  example_matrix:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        version: {% raw %}${{ github.event.client_payload.versions }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
