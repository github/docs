---
ms.openlocfilehash: 50b42f8e3c703723fc592bf63881c997e88b059c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114237"
---
既定で、{% data variables.product.product_name %} は、ランナーの可用性に応じて並列実行されるジョブの数を最大化します。 `matrix` ジョブ戦略を使うとき、同時に実行できるジョブの最大数を設定するには、`jobs.<job_id>.strategy.max-parallel` を使います。

たとえば、次のワークフローでは、6 つのジョブすべてを一度に実行できるランナーがある場合でも、一度に最大 2 つのジョブを実行します。

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
