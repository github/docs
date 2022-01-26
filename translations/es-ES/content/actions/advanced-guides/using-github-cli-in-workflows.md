---
title: Utilizar el CLI de GitHub en los flujos de trabajo
shortTitle: El CLI de GitHub en los flujos de trabajo
intro: 'Puedes hacer scripts con el {% data variables.product.prodname_cli %} en los flujos de trabajo de {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/guides/using-github-cli-in-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
  - Workflows
type: how_to
---


{% data reusables.cli.cli-learn-more %}

El {% data variables.product.prodname_cli %} está preinstalado en todos los ejecutores hospedados en {% data variables.product.prodname_dotcom %}. Para cada paso que utilice el {% data variables.product.prodname_cli %}, debes configurar una variable de ambiente llamada `GITHUB_TOKEN` para un token con los alcances requeridos.

Puedes ejecutar cualquier comando del {% data variables.product.prodname_cli %}. Por ejemplo, este flujo de trabajo utiliza el subcomando `gh issue comment` para agregar un comentario cuando se abre una propuesta.

```yaml{:copy}
name: Comment when opened
on:
  issues:
    types:
      - opened
jobs:
  comment:
    runs-on: ubuntu-latest
    steps:
      - run: gh issue comment $ISSUE --body "Thank you for opening this issue!"
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          ISSUE: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
```

También puedes ejecutar llamadas de la API a través de {% data variables.product.prodname_cli %}. Por ejemplo, este flujo de trabajo utiliza primero el subcomando de `gh api` para consultar la API de GraphQL y analizar el resultado. Entonces, almacenará el resultado en una variable de ambiente a la que pueda acceder en un paso posterior. En el segundo paso, utiliza el subcomando `gh issue create` para crear una propuesta que contenga la información del primer paso.

```yaml{:copy}
name: Report remaining open issues
on: 
  schedule: 
    # Daily at 8:20 UTC
    - cron: '20 8 * * *'
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - run: |
          numOpenIssues="$(gh api graphql -F owner=$OWNER -F name=$REPO -f query='
            query($name: String!, $owner: String!) {
              repository(owner: $owner, name: $name) {
                issues(states:OPEN){
                  totalCount
                }
              }
            }
          ' --jq '.data.repository.issues.totalCount')"

          echo 'NUM_OPEN_ISSUES='$numOpenIssues >> $GITHUB_ENV
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          OWNER: {% raw %}${{ github.repository_owner }}{% endraw %}
          REPO: {% raw %}${{ github.event.repository.name }}{% endraw %}
      - run: |
          gh issue create --title "Issue report" --body "$NUM_OPEN_ISSUES issues remaining" --repo $GITHUB_REPOSITORY
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```
