---
ms.openlocfilehash: 00fcbabef5e440a27a495ab562cf7ccc43a7e030
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114174"
---
単一の変数を指定して、1 次元のマトリックスを作成できます。

たとえば、次のワークフローでは、変数 `version` に値 `[10, 12, 14]` を定義しています。 このワークフローでは、変数の値ごとに 1 つずつ、3 つのジョブが実行されます。 各ジョブは、`matrix.version` コンテキストを通して `version` 値にアクセスし、`node-version` として `actions/setup-node` アクションにその値を渡します。

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
