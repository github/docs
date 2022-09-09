---
ms.openlocfilehash: c999fec9a5ab78a42f78c5d7312f54a62b81cbef
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114262"
---
たとえば、次のワークフローでは、`os` と `node` の組み合わせごとに 1 つずつ、計 6 つのジョブが実行されます。 `os` の値が `windows-latest` で `node` の値が `16` のジョブが実行されると、`6` の値を持つ `npm` という追加の変数がジョブに含まれます。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [windows-latest, ubuntu-latest]
        node: [12, 14, 16]
        include:
          - os: windows-latest
            node: 16
            npm: 6
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - if: {% raw %}${{ matrix.npm }}{% endraw %}
        run: npm install -g npm@{% raw %}${{ matrix.npm }}{% endraw %}
      - run: npm --version
```
