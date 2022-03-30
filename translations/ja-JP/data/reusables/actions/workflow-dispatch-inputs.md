When using the `workflow_dispatch` event, you can optionally specify inputs that are passed to the workflow.

The triggered workflow receives the inputs in the `github.event.inputs` context. 詳細については、「[コンテキスト](/actions/learn-github-actions/contexts#github-context)」を参照してください。

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
    if: {% raw %} ${{ github.event.inputs.print_tags == 'true' }} {% endraw %}
    steps:
      - name: Print the input tag to STDOUT
        run: echo {% raw %} The tag is ${{ github.event.inputs.tag }} {% endraw %}
```
