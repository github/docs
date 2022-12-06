---
ms.openlocfilehash: 7f2ff76b540b7f4356c8011aa72eefeec150820e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148097979"
---
`jobs.<job_id>.outputs`를 사용하여 작업 출력의 `map`을 만들 수 있습니다. 작업 출력은 이 작업에 의존하는 모든 다운스트림 작업에 사용할 수 있습니다. 작업 종속성 정의에 대한 자세한 내용은 [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds)를 참조하세요.

{% data reusables.actions.output-limitations %}

식을 포함하는 작업 출력은 각 작업의 끝에 있는 실행기에서 평가됩니다. 비밀이 포함된 출력은 실행기에서 수정되며 {% data variables.product.prodname_actions %}로 보내지 않습니다.

종속 작업에서 작업 출력을 사용하려면 `needs` 컨텍스트를 사용할 수 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts#needs-context)”를 참조하세요.

### 예: 작업 출력 정의

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
