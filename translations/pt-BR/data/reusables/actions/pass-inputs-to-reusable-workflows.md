Para passar entradas de nome para um fluxo de trabalho chamado, use a palavra-chave `com` em um trabalho. Use a palavra-chave `segredos` para passar segredos nomeados. Para entradas, o tipo de dado do valor de entrada deve corresponder ao tipo especificado no fluxo de trabalho chamado (booleano, número ou string).

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      username: mona
    secrets:
      envPAT: ${{ secrets.envPAT }}
```
{% endraw %}

{% ifversion actions-inherit-secrets-reusable-workflows %}
Os fluxos de trabalho que chamam fluxos de trabalho reutilizáveis na mesma organização ou empresa podem usar a palavra-chave `herdar` para passar implicitamente os segredos.

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      username: mona
    secrets: inherit
```
{% endraw %}

{%endif%}
