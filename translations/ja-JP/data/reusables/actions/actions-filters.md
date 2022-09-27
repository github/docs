---
ms.openlocfilehash: c9db6ca4a418e5107cb3714b70c8112457b1868c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
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
