---
title: Использование GitHub CLI в рабочих процессах
shortTitle: GitHub CLI in workflows
intro: 'Вы можете создать скрипт с помощью {% data variables.product.prodname_cli %} в рабочих процессах {% data variables.product.prodname_actions %}.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120899'
---
{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} предустановлен на всех средствах выполнения, размещенных на {% data variables.product.prodname_dotcom %}. Для каждого шага, использующего {% data variables.product.prodname_cli %}, необходимо задать для переменной среды `GITHUB_TOKEN` маркер с необходимыми областями.

Вы можете выполнить любую команду {% data variables.product.prodname_cli %}. Например, этот рабочий процесс использует подкоманду `gh issue comment` для добавления примечания при открытии проблемы.

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

Вы также можете выполнять вызовы API с помощью {% data variables.product.prodname_cli %}. Например, этот рабочий процесс сначала использует подкоманду `gh api` для запроса API GraphQL и анализа результата. Затем он сохраняет результат в переменной среды, к которой он может получить доступ на следующем шаге. На втором шаге используется подкоманда `gh issue create` для создания проблемы, содержащей сведения с первого шага.

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
