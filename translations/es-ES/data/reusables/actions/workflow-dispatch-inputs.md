Cuando se utiliza el evento `workflow_dispatch`, puedes especificar opcionalmente entradas que se pasan al flujo de trabajo.

El flujo de trabajo activado recibe las entradas en el contexto {% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %}. Para obtener más información, consulta la sección "[Contextos]({% ifversion actions-unified-inputs %}/actions/learn-github-actions/contexts#inputs-context{% else %}/actions/learn-github-actions/contexts#github-context{% endif %})".

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
