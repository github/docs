---
title: 워크플로에서 GitHub CLI 사용
shortTitle: GitHub CLI in workflows
intro: '{% data variables.product.prodname_actions %} 워크플로에서 {% data variables.product.prodname_cli %}으로 스크립팅할 수 있습니다.'
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120900'
---
{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %}는 모든 {% data variables.product.prodname_dotcom %}호스팅 실행기에 사전 설치됩니다. {% data variables.product.prodname_cli %}를 사용하는 각 단계에서는 `GITHUB_TOKEN` 환경 변수를 필요한 범위가 있는 토큰으로 설정해야 합니다.

모든 {% data variables.product.prodname_cli %} 명령을 실행할 수 있습니다. 예를 들어 이 워크플로는 `gh issue comment` 하위 명령을 사용하여 이슈가 열리면 주석을 추가합니다.

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

{% data variables.product.prodname_cli %}를 통해 API 호출을 실행할 수도 있습니다. 예를 들어 이 워크플로는 먼저 `gh api` 하위 명령을 사용하여 GraphQL API를 쿼리하고 결과를 구문 분석합니다. 그런 다음 이후 단계에서 액세스할 수 있는 환경 변수에 결과를 저장합니다. 두 번째 단계에서는 `gh issue create` 하위 명령을 사용하여 첫 번째 단계의 정보를 포함하는 이슈를 만듭니다.

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
