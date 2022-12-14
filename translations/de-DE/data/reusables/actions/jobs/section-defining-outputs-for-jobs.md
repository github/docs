---
ms.openlocfilehash: 446bc8429d81d54d38eeaf2852a61d25db17da68
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145186076"
---
Du kannst `jobs.<job_id>.outputs` verwenden, um eine `map` von Ausgaben für einen Auftrag zu erstellen. Ausgaben eines Jobs stehen allen nachgelagerten Jobs zur Verfügung, die von diesem Job abhängen. Weitere Informationen zum Definieren von Auftragsabhängigkeiten findest du unter [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds).

{% data reusables.actions.output-limitations %}

Ausgaben von Aufträgen, die Ausdrücke enthalten, werden am Ende jedes Auftrags auf dem Runner ausgewertet. Ausgaben, die Geheimnisse enthalten, werden auf dem Runnder zensiert und nicht an {% data variables.product.prodname_actions %} gesendet.

Um Auftragsausgaben in einem abhängigen Auftrag zu verwenden, kannst du den `needs`-Kontext verwenden. Weitere Informationen findest du unter [Kontexte](/actions/learn-github-actions/contexts#needs-context).

### Beispiel: Definieren von Ausgaben für einen Auftrag

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
