---
ms.openlocfilehash: 718f58c2013f7deda31fd2a300a5a2b3f7e4b5ec
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120910"
---
组合组和标签时，运行器必须满足这两项要求才能运行作业。

在此示例中，名为 `ubuntu-runners` 的运行器组使用 Ubuntu 16 核心运行器（分配了标签 `ubuntu-20.04-16core`）进行填充。 `runs-on` 键将 `group` 和 `labels` 组合在一起，以便将作业路由到具有匹配标签的组内的任何可用运行器：

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      group: ubuntu-runners
      labels: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```
