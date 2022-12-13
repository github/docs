---
ms.openlocfilehash: 446bc8429d81d54d38eeaf2852a61d25db17da68
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145186080"
---
Puede usar `jobs.<job_id>.outputs` para crear un objeto `map` de salidas para un trabajo. Las salidas de un job se encuentran disponibles para todos los jobs descendentes que dependan de este job. Para más información sobre cómo definir dependencias de trabajo, vea [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds).

{% data reusables.actions.output-limitations %}

Las salidas de un trabajo que incluyen expresiones se evalúan en el ejecutor al final de cada trabajo. Las salidas que contienen secretos se redactan en el ejecutor y no se envían a {% data variables.product.prodname_actions %}.

Para usar salidas de trabajo en un trabajo dependiente, puede utilizar el contexto `needs`. Para más información, vea "[Contextos](/actions/learn-github-actions/contexts#needs-context)".

### Ejemplo: definir salidas para un job

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
