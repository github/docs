---
ms.openlocfilehash: d17a60d7bf330c0c7fd3acfacd7652a054cf7c86
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "147885017"
---
可使用 [POSIX cron 语法](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)将工作流计划为在特定的 UTC 时间运行。 预定的工作流程在默认或基础分支的最新提交上运行。 您可以运行预定工作流程的最短间隔是每 5 分钟一次。

此示例在每天 5:30 和 17:30 UTC 触发工作流程：

```yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

```

多个 `schedule` 事件可以触发单个工作流。 你可以通过 `github.event.schedule` 上下文访问触发工作流的计划事件。 此示例触发工作流在每周一至周四 5:30 UTC 运行，但在周一和周三跳过 `Not on Monday or Wednesday` 步骤。

```yaml
on:
  schedule:
    - cron: '30 5 * * 1,3'
    - cron: '30 5 * * 2,4'

jobs:
  test_schedule:
    runs-on: ubuntu-latest
    steps:
      - name: Not on Monday or Wednesday
        if: github.event.schedule != '30 5 * * 1,3'
        run: echo "This step will be skipped on Monday and Wednesday"
      - name: Every time
        run: echo "This step will always run"
```
