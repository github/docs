---
ms.openlocfilehash: 7f2ff76b540b7f4356c8011aa72eefeec150820e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148097978"
---
Можно использовать `jobs.<job_id>.outputs` для создания `map` выходных данных для задания. Выходные данные задания доступны для всех подчиненных заданий, которые зависят от этого задания. Дополнительные сведения об определении зависимостей заданий см. в разделе [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds).

{% data reusables.actions.output-limitations %}

Выходные данные задания, содержащие выражения, вычисляются в средстве выполнения в конце каждого задания. Выходные данные, содержащие секреты, редактируются в средстве выполнения и не отправляются в {% data variables.product.prodname_actions %}.

Чтобы применять выходные данные задания в зависимом задании, можно использовать контекст `needs`. Дополнительные сведения см. в разделе «[Контексты](/actions/learn-github-actions/contexts#needs-context)».

### Пример: определение выходных данных для задания

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
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "test=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=test::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "test=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=test::world"
{%- endif %}{% raw %}
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}
