---
ms.openlocfilehash: 9a9d2b4deb488e7b8fa5f0df2377e7d5ca57d194
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884435"
---
可以使用上下文来创建矩阵。 有关上下文的详细信息，请参阅“[上下文](/actions/learn-github-actions/contexts)”。

例如，以下工作流触发事件 `repository_dispatch`，并使用事件有效负载中的信息来生成矩阵。 使用如下所示的有效负载创建存储库调度事件时，矩阵 `version` 变量的值为 `[12, 14, 16]`。 有关 `repository_dispatch` 触发器的详细信息，请参阅“[触发工作流的事件](/actions/using-workflows/events-that-trigger-workflows#repository_dispatch)”。

```json
{
  "event_type": "test",
  "client_payload": {
    "versions": [12, 14, 16]
  }
}
```

```yaml
on:
  repository_dispatch:
    types:
      - test
 
jobs:
  example_matrix:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        version: {% raw %}${{ github.event.client_payload.versions }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
