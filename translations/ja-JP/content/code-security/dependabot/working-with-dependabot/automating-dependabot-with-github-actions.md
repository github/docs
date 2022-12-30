---
title: GitHub ActionsでのDependabotの自動化
intro: '{% data variables.product.prodname_actions %}を使って一般的な{% data variables.product.prodname_dependabot %}関連のタスクを自動化する例。'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use Dependabot with Actions
redirect_from:
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions
ms.openlocfilehash: 3280b42309b388c5faf2071d6e3a39d9a0e58474
ms.sourcegitcommit: 67aba5f277f3a8ef2ab1ccb14465ae486eabaa2b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165082'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %}及び{% data variables.product.prodname_actions %}について

{% data variables.product.prodname_dependabot %}は、依存関係を最新に保つためのPull Requestを作成します。{% data variables.product.prodname_actions %}を使って、それらのPull Requestが作成されたときに自動化されたタスクを実行できます。 たとえば、追加の成果物のフェッチ、ラベルの追加、テストの実行、あるいはPull Requestの変更ができます。

## イベントへの応答

{% data variables.product.prodname_dependabot %} は、pull request とコメントで {% data variables.product.prodname_actions %} ワークフローをトリガーできます。ただし、特定のイベントは異なる方法で処理されます。

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} `pull_request`、`pull_request_review`、`pull_request_review_comment`、`push`、`create`、`deployment`、および `deployment_status` イベントを使用して {% data variables.product.prodname_dependabot %} によって開始されるワークフロー (`github.actor == 'dependabot[bot]'`) の場合は、次の制限が適用されます: {% endif %}

- {% ifversion ghes = 3.3 %}`GITHUB_TOKEN` には、管理者が制限を削除していない限り、読み取り専用のアクセス許可があります。{% else %}`GITHUB_TOKEN` には、既定で読み取り専用のアクセス許可があります。{% endif %}
- {% ifversion ghes = 3.3 %} 管理者が制限を削除していない限り、シークレットにアクセスできません。{% else %}シークレットは、{% data variables.product.prodname_dependabot %} シークレットから設定されます。 {% data variables.product.prodname_actions %} シークレットは使用できません。{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} `pull_request_target` イベントを使用して {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) によって開始されたワークフローについては、pull request のベース参照が {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) によって作成された場合、`GITHUB_TOKEN` は読み取り専用であり、シークレットは使用できません。
{% endif %}

{% ifversion actions-stable-actor-ids %}これらの制限は、ワークフローが別のアクターによって再実行された場合でも適用されます。{% endif %}

詳細については、[GitHub Actions およびワークフローのセキュリティ保護の維持: pwn 要求の阻止](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/)に関するページを参照してください。

{% ifversion fpt or ghec or ghes > 3.3 %}

### `GITHUB_TOKEN` アクセス許可の変更

既定では、{% data variables.product.prodname_dependabot %} によってトリガーされる {% data variables.product.prodname_actions %} ワークフローでは、読み取り専用のアクセス許可を持つ `GITHUB_TOKEN` を取得します。 ワークフローで `permissions` キーを使用すると、トークンのアクセスを増やすことができます。

{% raw %}

```yaml
name: CI
on: pull_request

# Set the access for individual scopes, or use permissions: write-all
permissions:
  pull-requests: write
  issues: write
  repository-projects: write
  ...

jobs:
  ...
```

{% endraw %}

詳細については、「[GITHUB_TOKEN の権限を変更する](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token)」を参照してください。

### シークレットへのアクセス

{% data variables.product.prodname_dependabot %} イベントでワークフローがトリガーされる場合、ワークフローで使用できるシークレットは {% data variables.product.prodname_dependabot %} シークレットのみです。 {% data variables.product.prodname_actions %} シークレットは使用できません。 そのため、{% data variables.product.prodname_dependabot %} イベントによってトリガーされるワークフローで使用されるシークレットは、{% data variables.product.prodname_dependabot %} シークレットとして格納する必要があります。 詳細については、「[Dependabot に対する暗号化されたシークレットを管理する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」を参照してください。

{% data variables.product.prodname_dependabot %} シークレットは `secrets` コンテキストに追加され、{% data variables.product.prodname_actions %} のシークレットとまったく同じ構文を使用して参照されます。 詳細については、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow)」を参照してください。

{% data variables.product.prodname_dependabot %} や他のアクターによってトリガーされるワークフローがある場合、最もシンプルな解決策は、アクションで、および同じ名前を持つ {% data variables.product.prodname_dependabot %} シークレットで必要なアクセス許可を持つトークンを格納することです。 その後、ワークフローには、これらのシークレットへの 1 回の呼び出しを含めることができます。 {% data variables.product.prodname_dependabot %} のシークレットの名前が異なる場合は、条件を使用して、使用するアクターごとに適切なシークレットを指定します。 条件を使用する例については、以下の[一般的な自動化](#common-dependabot-automations)に関するセクションを参照してください。

ユーザー名とパスワードを使用して AWS 上のプライベート コンテナー レジストリにアクセスするには、ワークフローに `username` と `password` のシークレットを含める必要があります。 次の例では、{% data variables.product.prodname_dependabot %} によってワークフローがトリガーされると、`READONLY_AWS_ACCESS_KEY_ID` および `READONLY_AWS_ACCESS_KEY` という名前を持つ {% data variables.product.prodname_dependabot %} シークレットが使用されます。 別のアクターでワークフローがトリガーされる場合は、それらの名前を持つアクション シークレットが使用されます。

```yaml
name: CI
on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Login to private container registry for dependencies
        uses: docker/login-action@v1
        with:
          registry: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
          username: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY_ID }}{% endraw %}
          password: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY }}{% endraw %}

      - name: Build the Docker image
        run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
```

{% endif %}

{% ifversion ghes = 3.3 %}

{% note %}

**注:** サイト管理者は、{% data variables.location.product_location %} に対するこれらの制限をオーバーライドできます。 詳細については、「[エンタープライズでの {% data variables.product.prodname_actions %} のトラブルシューティング](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows)」を参照してください。

制限が削除された場合、{% data variables.product.prodname_dependabot %} によってワークフローがトリガーされると、それは {% data variables.product.prodname_actions %} シークレットにアクセスできるようになり、この `permissions` 条件を使用して、読み取り専用アクセスから `GITHUB_TOKEN` の既定のスコープを増やすことができます。 [`pull_request` イベントの処理] および [`push` イベントの処理] セクションの特定のステップは、適用されなくなったため無視できます。

{% endnote %}

### `pull_request` イベントの処理

ご利用のワークフローでシークレットに、または書き込みアクセス許可がある `GITHUB_TOKEN` にアクセスする必要がある場合は、次の 2 つのオプションを使用できます: `pull_request_target` を使用する。2 つの個別のワークフローを使用する。 このセクションでは、`pull_request_target` の使用方法を、「[`push` イベントの処理](#handling-push-events)」では以下の 2 つのワークフローを使用する方法について詳しく説明します。

失敗する可能性がある `pull_request` ワークフローのシンプルな例を次に示します。

```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
```

`pull_request` を `pull_request_target` (フォークからの pull request に使用される) に置き換えて、pull request の `HEAD` を明示的にチェックアウトできます。

{% warning %}

**警告:** `pull_request` の代わりに `pull_request_target` を使用すると、安全でない動作にさらされます。 「[`push` イベントの処理](#handling-push-events)」で後述するように、2 つのワークフロー メソッドを使用することをお勧めします。

{% endwarning %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Workflow
on:
  pull_request_target

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          # Check out the pull request HEAD
          ref: {% raw %}${{ github.event.pull_request.head.sha }}{% endraw %}
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

必要以上の権限を持つトークンの漏洩を避けるために、`GITHUB_TOKEN` に付与する権限のスコープを絞ることも強くおすすめします。 詳細については、「[`GITHUB_TOKEN` の権限](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)」を参照してください。

### `push` イベントの処理

`push` イベントには、`pull_request_target` に相当するものがないので、2 つのワークフローを使うことになります。1 つは信頼されないワークフローで、成果物のアップロードで終わります。そしてこれは、成果物をダウンロードして処理を続ける、2 番目の信頼されるワークフローをトリガーします。

最初のワークフローは、信頼されない作業をすべて行います。

{% raw %}

```yaml
### This workflow doesn't have access to secrets and has a read-only token
name: Dependabot Untrusted Workflow
on:
  push

jobs:
  check-dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: ...
```

{% endraw %}

2番目のワークフローは、最初のワークフローが正常に終了した後に、信頼された処理を行います。

{% raw %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Trusted Workflow
on:
  workflow_run:
    workflows: ["Dependabot Untrusted Workflow"]
    types:
      - completed

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - uses: ...
```

{% endraw %}

{% endif %}

### 手動でのワークフローの再実行

{% ifversion actions-stable-actor-ids %}

Dependabot ワークフローを手動で再実行すると、再実行を開始したユーザーの権限が異なる場合でも、以前と同じ権限で実行されます。 詳しくは、「[ワークフローとジョブの再実行](/actions/managing-workflow-runs/re-running-workflows-and-jobs)」をご覧ください。

{% else %}

失敗したDependabotワークフローを手動で再実行することもできます。これは、読み書きできるトークンを持ち、シークレットにアクセスできる状態で実行されます。 失敗したワークフローを手動で再実行する前には、更新される依存関係を常にチェックし、その変更によって悪意ある、あるいは意図しない動作が入り込むことがないようにすべきです。

{% endif %}

## 一般的なDependabotの自動化

以下は、{% data variables.product.prodname_actions %}を使って自動化できる一般的ないくつかのシナリオです。

{% ifversion ghes = 3.3 %}

{% note %}

**注:** サイト管理者が {% data variables.location.product_location %} 上の {% data variables.product.prodname_dependabot %} に対する制限をオーバーライドしている場合は、次のワークフローの `pull_request` ではなく `pull_request_target` を使用できます。

{% endnote %}

{% endif %}

### Pull Reqeustに関するメタデータのフェッチ

大量の自動化には、依存関係の名前が何か、それは実働環境の依存関係か、メジャー、マイナー、パッチアップデートのいずれなのかといった、Pull Requestの内容に関する情報を知ることが必要です。

`dependabot/fetch-metadata` アクションによって、次の情報のすべてが提供されます。

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.dependabot-metadata.outputs.dependency-names
      #  - steps.dependabot-metadata.outputs.dependency-type
      #  - steps.dependabot-metadata.outputs.update-type      
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.metadata.outputs.dependency-names
      #  - steps.metadata.outputs.dependency-type
      #  - steps.metadata.outputs.update-type      
```

{% endraw %}

{% endif %}

詳細については、[`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata) リポジトリを参照してください。

### Pull Requestのラベル付け

{% data variables.product.prodname_dotcom %}ラベルに基づく他の自動化やトリアージワークフローがあるなら、提供されたメタデータに基づいてラベルを割り当てるアクションを設定できます。

たとえば、すべての実働環境の依存関係の更新にラベルでフラグを設定したいなら:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.dependabot-metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% endif %}

### Pull Requestの承認

自動的にDependabotのPull Requestを承認したいなら、ワークフロー中で{% data variables.product.prodname_cli %}を利用できます。

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request_target

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

### Pull Requestの自動マージを有効化する

メンテナーが自動マージの特定の pull request をマークできるようにする場合は、{% data variables.product.prodname_dotcom %} の自動マージ機能を使用できます。 これにより、ブランチ保護ルールで必要なすべての必須テストと承認が正常に満たされた場合に、pull request がマージされます。 詳しくは、「[pull request を自動的にマージする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)」と[ブランチ保護ルールの管理](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)に関する説明を参照してください。

{% note %}

**メモ:** pull request のテストにステータス チェックを使用する場合、{% data variables.product.prodname_dependabot %} pull request のためにターゲット ブランチで **[マージ前にステータス チェックの合格を必須にする]** をオンにする必要があります。 このブランチ保護ルールにより、必須のステータス チェックに合格しないと、pull request はマージされません。 詳細については、「[ブランチ保護ルールを管理する](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule)」を参照してください。

{% endnote %}

代わりに、{% data variables.product.prodname_actions %} と {% data variables.product.prodname_cli %} を使用できます。 すべてのパッチ更新プログラムを `my-dependency` に自動マージする例を次に示します。

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  contents: write
  pull-requests: write
  
jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.dependabot-metadata.outputs.dependency-names, 'my-dependency') && steps.dependabot-metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request

permissions:
  contents: write
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.metadata.outputs.dependency-names, 'my-dependency') && steps.metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

## 失敗したワークフローの実行のトラブルシューティング

ワークフローの実行が失敗した場合は、以下をチェックしてください。

{% ifversion ghes = 3.3 %}

- 適切なアクターがトリガーした場合にのみワークフローを実行しているか。
- `pull_request` に対する正しい `ref` をチェックアウトしています。
- Dependabot によってトリガーされる `pull_request`、`pull_request_review`、`pull_request_review_comment`、または `push` イベント内からシークレットにアクセスしようとしているのではありません。
- Dependabot によってトリガーされた `write``pull_request``pull_request_review`、または `pull_request_review_comment` イベント内からアクション`push` を実行しようとはしていません。

{% else %}

- 適切なアクターがトリガーした場合にのみワークフローを実行しているか。
- `pull_request` に対する正しい `ref` をチェックアウトしています。
- シークレットは、{% data variables.product.prodname_actions %} シークレットとしてではなく、{% data variables.product.prodname_dependabot %} シークレットで使用できます。
- 適切なアクセス許可を持つ `GITHUB_TOKEN` があります。

{% endif %}

{% data variables.product.prodname_actions %} の作成とデバッグに関する情報については、「[GitHub Actions について学ぶ](/actions/learn-github-actions)」を参照してください。
