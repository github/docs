---
ms.openlocfilehash: 00f63e08cc047ce722f7a7172783c07e12344a87
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120915"
---
在此示例中，Ubuntu 16 核心运行器已添加到名为 `ubuntu-runners` 的组中。 `runs-on` 键将作业发送到 `ubuntu-runners` 组中的任何可用运行器：

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: 
      group: ubuntu-runners
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```
