For a specific job, you can use `jobs.<job_id>.permissions` to modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. Para obter mais informações, consulte "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".

Ao especificar a permissão de uma definição de trabalho, você pode configurar um conjunto diferente de permissões para o `GITHUB_TOKEN` para cada trabalho, se necessário. Como alternativa, você pode especificar as permissões para todas as tarefas do fluxo de trabalho. Para informações sobre como definir permissões no nível do fluxo de trabalho, consulte [`permissões`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions).

{% data reusables.github-actions.github-token-available-permissions %}
{% data reusables.github-actions.forked-write-permission %}

#### Example: Setting permissions for a specific job

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
