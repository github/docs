`workflow_dispatch`イベントを使う場合、ワークフローに渡す入力を指定することもできます。

トリガーされたワークフローは、入力を{% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %}コンテキストで受け取ります。 詳しい情報については「[コンテキスト]({% ifversion actions-unified-inputs %}/actions/learn-github-actions/contexts#inputs-context{% else %}/actions/learn-github-actions/contexts#github-context{% endif %})」を参照してください。

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
