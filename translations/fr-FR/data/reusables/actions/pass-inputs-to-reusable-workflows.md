---
ms.openlocfilehash: cbef944587557a76da3f57cb87aeb16e711b6cf9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147065080"
---
Pour transmettre des entrées nommées à un workflow appelé, utilisez le mot clé `with` dans un travail. Utilisez le mot clé `secrets` pour transmettre des secrets nommés. Pour les entrées, le type de données de la valeur d’entrée doit correspondre au type spécifié dans le workflow appelé (booléen, nombre ou chaîne).

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

{% ifversion actions-inherit-secrets-reusable-workflows %} Les workflows qui appellent des workflows réutilisables dans la même organisation ou entreprise peuvent utiliser le mot clé `inherit` pour transmettre implicitement les secrets.

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
