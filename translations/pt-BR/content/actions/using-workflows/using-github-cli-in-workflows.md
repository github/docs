---
title: Usar o GitHub CLI em fluxos de trabalho
shortTitle: CLI do GitHub em fluxos de trabalho
intro: 'Você pode fazero script com {% data variables.product.prodname_cli %} em fluxos de trabalho {% data variables.product.prodname_actions %}.'
redirect_from:
  - /actions/guides/using-github-cli-in-workflows
  - /actions/advanced-guides/using-github-cli-in-workflows
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

{% data variables.product.prodname_cli %} está pré-instalado em todos os executores hospedados em {% data variables.product.prodname_dotcom %}. Para cada etapa que usa {% data variables.product.prodname_cli %}, você deve definir uma variável de ambiente denominada `GITHUB_TOKEN` como um token com os escopos necessários.

Você pode executar qualquer comando de {% data variables.product.prodname_cli %}. Por exemplo, este fluxo de trabalho usa o subcomando `gh issue comment` para adicionar um comentário quando um problema é aberto.

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

Você também pode executar chamadas de API por meio de {% data variables.product.prodname_cli %}. Por exemplo, este fluxo de trabalho usa primeiro o subcomando `gh api` para consultar a API do GraphQL e analisar o resultado. Em seguida, ele armazena o resultado de uma variável de ambiente a qual pode acessar em uma etapa posterior. Na segunda etapa, ele usa o subcomando `gh issue create` para criar um problema que contém as informações da primeira etapa.

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
