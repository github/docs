---
ms.openlocfilehash: 61eae3ef1bfff1fc27fcfd45a693934155021a2a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089480"
---
`jobs.<job_id>.strategy.fail-fast` と `jobs.<job_id>.continue-on-error` を使用して、ジョブ エラーの処理方法制御できます。

`jobs.<job_id>.strategy.fail-fast` はマトリックス全体に適用されます。 `jobs.<job_id>.strategy.fail-fast` が `true` に設定されている場合、マトリックス内のいずれかのジョブが失敗すると、{% data variables.product.product_name %} によってマトリックス内の進行中およびキューに入れられたすべてのジョブがキャンセルされます。 このプロパティでは、既定値が `true` に設定されます。

`jobs.<job_id>.continue-on-error` は 1 つのジョブに適用されます。 `jobs.<job_id>.continue-on-error` が `true` の場合、`jobs.<job_id>.continue-on-error: true` が失敗するジョブであっても、マトリックス内の他のジョブは引き続き実行されます。

`jobs.<job_id>.strategy.fail-fast` と `jobs.<job_id>.continue-on-error` は一緒に使用できます。 たとえば、次のワークフローは 4 つのジョブを開始します。 ジョブごとに、`continue-on-error` は `matrix.experimental` の値によって決定されます。 `continue-on-error: false` のいずれかのジョブが失敗すると、進行中またはキューに入っているすべてのジョブがキャンセルされます。 `continue-on-error: true` のジョブが失敗した場合、他のジョブは影響を受けません。


```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    continue-on-error: {% raw %}${{ matrix.experimental }}{% endraw %}
    strategy:
      fail-fast: true
      matrix:
        version: [6, 7, 8]
        experimental: [false]
        include:
          - version: 9
            experimental: true
```
