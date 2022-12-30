---
title: Verwenden der GitHub CLI in Workflows
shortTitle: GitHub CLI in workflows
intro: 'Du kannst ein Skript {% data variables.product.prodname_cli %} in {% data variables.product.prodname_actions %}-Workflows erstellen.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145107044'
---
{% data reusables.cli.cli-learn-more %}

Die {% data variables.product.prodname_cli %} ist auf allen {% data variables.product.prodname_dotcom %}-gehosteten Runnern vorinstalliert. Für jeden Schritt, der die {% data variables.product.prodname_cli %} verwendet, musst du eine Umgebungsvariable namens `GITHUB_TOKEN` auf ein Token mit den erforderlichen Geltungsbereichen festlegen.

Du kannst alle {% data variables.product.prodname_cli %}-Befehle ausführen. Dieser Workflow verwendet beispielsweise den `gh issue comment`-Unterbefehl, um einen Kommentar hinzuzufügen, wenn ein Issue geöffnet wird.

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

Du kannst API-Aufrufe auch über {% data variables.product.prodname_cli %} ausführen. Dieser Workflow verwendet beispielsweise zuerst den `gh api`-Unterbefehl, um die GraphQL-API abzufragen und das Ergebnis zu analysieren. Anschließend speichert er das Ergebnis in einer Umgebungsvariablen, auf die er in einem späteren Schritt zugreifen kann. Im zweiten Schritt wird der `gh issue create`-Unterbefehl verwendet, um ein Issue zu erstellen, das die Informationen aus dem ersten Schritt enthält.

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
