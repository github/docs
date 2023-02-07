```yaml
on:
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'
        required: true
        default: 'warning' {% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
        type: choice
        options:
          - info
          - warning
          - debug {% endif %}
      print_tags:
        description: 'True to print to STDOUT'
        required: true {% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
        type: boolean {% endif %}
      tags:
        description: 'Test scenario tags'
        required: true {% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
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
