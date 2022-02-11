When using the `workflow_dispatch` event, you can optionally specify inputs that are passed to the workflow.

The triggered workflow receives the inputs in the `github.event.inputs` context. For more information, see "[Contexts](/actions/learn-github-actions/contexts#github-context)."

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
      tags:
        description: 'Test scenario tags'
        required: false {% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5511 %}
        type: boolean
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true {% endif %}

jobs:
  print-tag:
    runs-on: ubuntu-latest

    steps:
      - name: Print the input tag to STDOUT
        run: echo {% raw %} The tag is ${{ github.event.inputs.tag }} {% endraw %}
```
