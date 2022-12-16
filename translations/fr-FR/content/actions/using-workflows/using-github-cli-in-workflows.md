---
title: "Utilisation de l’interface\_CLI de GitHub dans des workflows"
shortTitle: GitHub CLI in workflows
intro: 'Vous pouvez créer des scripts avec {% data variables.product.prodname_cli %} dans les workflows {% data variables.product.prodname_actions %}.'
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
ms.openlocfilehash: 3455e4f082acf26215ad050c5c381df53c0c2713
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145107045'
---
{% data reusables.cli.cli-learn-more %}

L’{% data variables.product.prodname_cli %} est préinstallé sur tous les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}. Pour chaque étape qui utilise l’{% data variables.product.prodname_cli %}, vous devez définir une variable d’environnement appelée `GITHUB_TOKEN` sur un jeton avec les étendues requises.

Vous pouvez exécuter n’importe quelle commande de l’{% data variables.product.prodname_cli %}. Par exemple, ce workflow utilise la sous-commande `gh issue comment` pour ajouter un commentaire lorsqu’un problème est ouvert.

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

Vous pouvez également exécuter des appels d’API via l’{% data variables.product.prodname_cli %}. Par exemple, ce workflow utilise d’abord la sous-commande `gh api` pour interroger l’API GraphQL et analyser le résultat. Ensuite, il stocke le résultat dans une variable d’environnement auquel il peut accéder dans une étape ultérieure. Dans la deuxième étape, il utilise la sous-commande `gh issue create` pour créer un problème contenant les informations de la première étape.

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
