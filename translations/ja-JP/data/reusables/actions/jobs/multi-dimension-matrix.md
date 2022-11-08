---
ms.openlocfilehash: 9a29d1039a0929c7366eeb4624e1fb6fb8a2e4f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529337"
---
複数の変数を指定して、多次元マトリックスを作成できます。 ジョブは、変数の可能な組み合わせごとに実行されます。

たとえば、次のワークフローでは 2 つの変数を指定しています。

- `os` 変数で指定された 2 つのオペレーティング システム
- `version` 変数で指定された 3 つの Node.js バージョン

このワークフローでは、`os` と `version` 変数の組み合わせごとに 1 つずつ、計 6 つのジョブが実行されます。 各ジョブは、`runs-on` の値を現在の `os` の値に設定し、現在の `version` の値を `actions/setup-node` アクションに渡します。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [ubuntu-22.04, ubuntu-20.04]
        version: [10, 12, 14]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
