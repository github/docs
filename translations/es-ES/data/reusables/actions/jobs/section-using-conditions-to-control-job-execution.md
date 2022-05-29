Puedes utilizar el condicional `jobs.<job_id>.if` para prevenir que un job se ejecute a menos de que una condición se cumpla. Puedes usar cualquier contexto y expresión admitidos para crear un condicional.

{% data reusables.actions.expression-syntax-if %} Para obtener más información, consulta la sección "[Expresiones](/actions/learn-github-actions/expressions)".

### Ejemplo: Solo ejecutar un job para un repositorio específico

Este ejemplo utiliza `if` para controla cuándo se puede ejecutar el job `production-deploy`. Este solo se ejecutará si el repositorio se llama `octo-repo-prod` y está dentro de la organización `octo-org`. De otra forma, el job se marcará como _skipped_.

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
