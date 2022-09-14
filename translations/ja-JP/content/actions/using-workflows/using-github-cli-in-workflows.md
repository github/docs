---
title: ワークフローで GitHub CLI を使用する
shortTitle: GitHub CLI in workflows
intro: '{% data variables.product.prodname_actions %} ワークフローでは、{% data variables.product.prodname_cli %} を使用してスクリプトを作成できます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120901'
---
{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} は、{% data variables.product.prodname_dotcom %} でホストされるすべてのランナーにプレインストールされます。 {% data variables.product.prodname_cli %} を使う各ステップで、`GITHUB_TOKEN` という環境変数に必要なスコープを持つトークンを設定する必要があります。

任意の {% data variables.product.prodname_cli %} コマンドを実行できます。 たとえば、このワークフローでは、`gh issue comment` サブコマンドを使って、issue が開かれるときにコメントを追加します。

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

{% data variables.product.prodname_cli %} を使って API 呼び出しを実行することもできます。 たとえば、このワークフローでは、最初に `gh api` サブコマンドを使って GraphQL API のクエリを実行し、結果を解析します。 次に、後のステップでアクセスできる環境変数に結果を格納します。 2 番目のステップでは、`gh issue create` サブコマンドを使って、最初のステップの情報を含む issue を作成します。

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
