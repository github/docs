---
ms.openlocfilehash: c9db6ca4a418e5107cb3714b70c8112457b1868c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114774"
---
一部のイベントには、ワークフローを実行するタイミングをより細かく制御できるフィルターがあります。

たとえば、`push` イベントの `branches` フィルターでは、プッシュが発生したときではなく、`branches` フィルターと同じブランチに対してプッシュが発生したときのみ、ワークフローを実行できます。

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```
