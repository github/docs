---
ms.openlocfilehash: c9db6ca4a418e5107cb3714b70c8112457b1868c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098586"
---
某些事件具有筛选器，可让你更好地控制工作流的运行时间。

例如，`push` 事件具有 `branches` 筛选器，该筛选器仅在发生目标为与 `branches` 筛选器匹配的分支的推送时（而不是在发生任何推送时）运行工作流。

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```
