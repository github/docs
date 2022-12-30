---
ms.openlocfilehash: d0e9408a29307848c49c9d0889c96b054e1d1222
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062163"
---
たとえば、このマトリックスでは 10 個のジョブが実行されます。マトリックス内の `os` と `version` の組み合わせごとに 1 つと、`windows-latest` の `os` 値と `17` の `version` 値のジョブです。

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [macos-latest, windows-latest, ubuntu-latest]
        version: [12, 14, 16]
        include:
          - os: windows-latest
            version: 17
```

マトリックス変数を指定しない場合は、`include` の下のすべての構成が実行されます。 たとえば、次のワークフローでは、`include` エントリごとに 1 つずつ、2 つのジョブが実行されます。 これにより、マトリックスを完全に設定しなくても、マトリックス戦略を利用できます。

```yaml
jobs:
  includes_only:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        include:
          - site: "production"
            datacenter: "site-a"
          - site: "staging"
            datacenter: "site-b"

```
