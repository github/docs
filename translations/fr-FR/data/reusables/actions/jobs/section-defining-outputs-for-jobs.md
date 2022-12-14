---
ms.openlocfilehash: 446bc8429d81d54d38eeaf2852a61d25db17da68
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145186075"
---
Vous pouvez utiliser `jobs.<job_id>.outputs` pour créer une `map` de sorties pour un travail. Les sorties de travail sont disponibles pour tous les travaux en aval qui dépendent de ce travail. Pour plus d’informations sur la définition des dépendances de travail, consultez [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds).

{% data reusables.actions.output-limitations %}

Les sorties de travail contenant des expressions sont évaluées sur l’exécuteur à la fin de chaque travail. Les sorties contenant des secrets sont rédigées sur l’exécuteur et ne sont pas envoyées à {% data variables.product.prodname_actions %}.

Pour utiliser les sorties de travail dans un travail dépendant, vous pouvez utiliser le contexte `needs`. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts#needs-context) ».

### Exemple : Définition de sorties pour un travail

{% raw %}
```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    # Map a step output to a job output
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1
        run: echo "::set-output name=test::hello"
      - id: step2
        run: echo "::set-output name=test::world"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}
