---
ms.openlocfilehash: 9a9d2b4deb488e7b8fa5f0df2377e7d5ca57d194
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884438"
---
コンテキストを使用してマトリックスを作成できます。 コンテキストの詳細については、「[コンテキスト](/actions/learn-github-actions/contexts)」を参照してください。

たとえば、次のワークフローは `repository_dispatch` イベントをトリガーし、イベント ペイロードからの情報を使用してマトリックスを構築します。 次のようなペイロードを使用してリポジトリのディスパッチ イベントが作成されると、マトリックス `version` 変数の値は `[12, 14, 16]` になります。 `repository_dispatch` イベントの詳細については、「[ワークフローをトリガーするイベント](/actions/using-workflows/events-that-trigger-workflows#repository_dispatch)」を参照してください。

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
