---
ms.openlocfilehash: a38aec9a1becf4c15877b2d3057d413b6d609f6c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145068236"
---
マトリックスで定義されている特定の構成を削除するには、`jobs.<job_id>.strategy.matrix.exclude` を使用します。 除外する構成は、それを除外するために部分一致である必要があるだけです。 たとえば、次のワークフローでは 9 つのジョブが実行されます。12 個の構成ごとに 1 つのジョブで、`{os: macos-latest, version: 12, environment: production}` と一致する 1 つのジョブと、`{os: windows-latest, version: 16}` と一致する 2 つのジョブが除外されます。

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

**注:** すべての `include` の組み合わせは、`exclude` の後に処理されます。 このため、`include` を使って以前に除外された組み合わせを追加し直すことができます。

{% endnote %}
