---
ms.openlocfilehash: cbef944587557a76da3f57cb87aeb16e711b6cf9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147065082"
---
名前付き入力を呼び出されたワークフローに渡すには、ジョブで `with` キーワードを使用します。 `secrets` キーワードを使用して名前付きシークレットを渡します。 入力の場合、入力値のデータ型は、呼び出されたワークフローで指定された型 (ブール値、数値、または文字列) と一致する必要があります。

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

{% ifversion actions-inherit-secrets-reusable-workflows %} 同じ Organizatio または Enterprise 内の再利用可能なワークフローを呼び出すワークフローでは、`inherit` キーワードを使ってシークレットを暗黙的に渡すことができます。

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
