---
ms.openlocfilehash: 543455f8802e8e2c8b4dc60283c442a536476751
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145098450"
---
可以使用 `jobs.<job_id>.if` 条件来阻止步骤运行，除非满足条件。 您可以使用任何支持上下文和表达式来创建条件。

{% data reusables.actions.expression-syntax-if %} 有关详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。

### 示例：仅针对特定存储库运行作业

此示例使用 `if` 控制 `production-deploy` 作业何时可以运行。 仅当存储库名为 `octo-repo-prod` 且位于 `octo-org` 组织内时，它才会运行。 否则，作业将被标记为“跳过”。

```yaml{:copy}
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: github.repository == 'octo-org/octo-repo-prod'
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
```
