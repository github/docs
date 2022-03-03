Para um trabalho específico, você pode usar `jobs.<job_id>.permissions` para modificar as permissões padrão concedidas ao `GITHUB_TOKEN`, adicionar ou remover o acesso conforme necessário, para que você apenas permita o acesso mínimo necessário. Para obter mais informações, consulte "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

Ao especificar a permissão de uma definição de trabalho, você pode configurar um conjunto diferente de permissões para o `GITHUB_TOKEN` para cada trabalho, se necessário. Como alternativa, você pode especificar as permissões para todas as tarefas do fluxo de trabalho. Para informações sobre como definir permissões no nível do fluxo de trabalho, consulte [`permissões`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions).

{% data reusables.actions.github-token-available-permissions %}
{% data reusables.actions.forked-write-permission %}

#### Exemplo: Configurar permissões para um trabalho específico

Este exemplo mostra as permissões que estão sendo definidas para o `GITHUB_TOKEN` que só se aplicará ao trabalho denominado `stale`. O acesso de gravação é concedido para os escopos dos `problemas` e `pull-requests`. Todos os outros escopos não terão acesso.

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: actions/stale@v3
```
