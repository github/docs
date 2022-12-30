---
ms.openlocfilehash: cbef944587557a76da3f57cb87aeb16e711b6cf9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147065079"
---
若要将命名输入传递到调用的工作流，请在作业中使用 `with` 关键字。 使用 `secrets` 关键字传递命名机密。 对于输入，输入值的数据类型必须与调用的工作流中指定的类型（布尔值、数字或字符串）匹配。

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      username: mona
    secrets:
      envPAT: ${{ secrets.envPAT }}
```
{% endraw %}

{% ifversion actions-inherit-secrets-reusable-workflows %} 在同一组织或企业中调用可重用工作流的工作流可使用 `inherit` 关键字隐式传递机密。

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      username: mona
    secrets: inherit
```
{% endraw %}

{%endif%}
