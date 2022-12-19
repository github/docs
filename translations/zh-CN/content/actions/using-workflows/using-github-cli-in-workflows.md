---
title: 在工作流中使用 GitHub CLI
shortTitle: GitHub CLI in workflows
intro: '可以在 {% data variables.product.prodname_actions %} 工作流中使用 {% data variables.product.prodname_cli %} 编写脚本。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145100117'
---
{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} 预安装在所有 {% data variables.product.prodname_dotcom %} 托管的运行程序上。 对于使用 {% data variables.product.prodname_cli %} 的每个步骤，必须将调用 `GITHUB_TOKEN` 的环境变量设置为具有所需范围的令牌。

可以执行任何 {% data variables.product.prodname_cli %} 命令。 例如，此工作流使用 `gh issue comment` 子命令在打开问题时添加注释。

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

还可以通过 {% data variables.product.prodname_cli %} 执行 API 调用。 例如，此工作流首先使用 `gh api` 子命令查询 GraphQL API 并分析结果。 然后，它将结果存储在可在后续步骤中访问的环境变量中。 在第二步中，它使用 `gh issue create` 子命令创建包含第一步中信息的问题。

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
