---
ms.openlocfilehash: 6a71d461562c3d6e390549739ac1f17cb274f3f2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146199795"
---
`workflow_dispatch` 이벤트를 사용할 때 필요에 따라 워크플로에 전달되는 입력을 지정할 수 있습니다.

트리거된 워크플로는 {% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %} 컨텍스트에서 입력을 받습니다. 자세한 내용은 “[컨텍스트]({% ifversion actions-unified-inputs %}/actions/learn-github-actions/contexts#inputs-context{% else %}/actions/learn-github-actions/contexts#github-context{% endif %})”를 참조하세요.

{% data reusables.actions.inputs-vs-github-event-inputs %}

```yaml
on:
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'
        required: true
        default: 'warning' {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %}
        type: choice
        options:
        - info
        - warning
        - debug {% endif %}
      print_tags:
        description: 'True to print to STDOUT'
        required: true {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %}
        type: boolean {% endif %}
      tags:
        description: 'Test scenario tags'
        required: true {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %}
        type: string
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true {% endif %}

jobs:
  print-tag:
    runs-on: ubuntu-latest
    if: {% ifversion actions-unified-inputs %}{% raw %} ${{ inputs.print_tags }} {% endraw %}{% else %}{% raw %} ${{ github.event.inputs.print_tags == 'true' }} {% endraw %}{% endif %}
    steps:
      - name: Print the input tag to STDOUT
        run: {% ifversion actions-unified-inputs %}echo {% raw %} The tags are ${{ inputs.tags }} {% endraw %}{% else %}echo {% raw %} The tags are ${{ github.event.inputs.tags }} {% endraw %}{% endif %}
```
