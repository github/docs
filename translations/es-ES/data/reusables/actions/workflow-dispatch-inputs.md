Cuando se utiliza el evento `workflow_dispatch`, puedes especificar opcionalmente entradas que se pasan al flujo de trabajo.

El flujo de trabajo que se activa recibe las entradas en el contexto de `github.event.inputs`. Para obtener más información, consulta "[Contextos](/actions/learn-github-actions/contexts#github-context)".

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
