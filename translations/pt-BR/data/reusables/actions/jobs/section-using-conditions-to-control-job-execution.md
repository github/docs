Você pode usar a condicional `jobs.<job_id>.if` para evitar que um trabalho seja executado a não ser que determinada condição seja atendida. Você pode usar qualquer contexto e expressão compatível para criar uma condicional.

{% data reusables.actions.expression-syntax-if %} Para obter mais informações, consulte "[Expressões](/actions/learn-github-actions/expressions)".

### Exemplo: Somente executar o trabalho para um repositório específico

Este exemplo usa `se` para controlar quando o trabalho `production-deploy` pode ser executado. Ele só será executado se o repositório for denominado `octo-repo-prod` e estiver dentro da organização `octo-org`. Caso contrário, o trabalho será marcado como _ignorado_.

```yaml{:copy}
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: github.repository == 'octo-org/octo-repo-prod'
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
```
