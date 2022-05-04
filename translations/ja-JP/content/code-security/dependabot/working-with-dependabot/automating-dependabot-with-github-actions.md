---
title: GitHub ActionsでのDependabotの自動化
intro: '{% data variables.product.prodname_actions %}を使って一般的な{% data variables.product.prodname_dependabot %}関連のタスクを自動化する例。'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: ActionsとDependabotを利用する
redirect_from:
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %}及び{% data variables.product.prodname_actions %}について

{% data variables.product.prodname_dependabot %}は、依存関係を最新に保つためのPull Requestを作成します。{% data variables.product.prodname_actions %}を使って、それらのPull Requestが作成されたときに自動化されたタスクを実行できます。 たとえば、追加の成果物のフェッチ、ラベルの追加、テストの実行、あるいはPull Requestの変更ができます。

## イベントへの応答

{% data variables.product.prodname_dependabot %}は、Pull Requestやコメントの際に{% data variables.product.prodname_actions %}ワークフローをトリガーできます。ただし、特定のイベントは異なる扱いを受けます。

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5792 %}
`pull_request`、`pull_request_review`、`pull_request_review_comment`、`push`、`create`、`deployment`、`deployment_status`イベントを使って{% data variables.product.prodname_dependabot %}が起動したワークフロー(`github.actor == "dependabot[bot]"`)には、以下の制限が適用されます:
{% endif %}

- {% ifversion ghes = 3.3 %}`GITHUB_TOKEN` has read-only permissions, unless your administrator has removed restrictions.{% else %}`GITHUB_TOKEN` has read-only permissions by default.{% endif %}
- {% ifversion ghes = 3.3 %}Secrets are inaccessible, unless your administrator has removed restrictions.{% else %}Secrets are populated from {% data variables.product.prodname_dependabot %} secrets. {% data variables.product.prodname_actions %} secrets are not available.{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5792 %}
For workflows initiated by {% data variables.product.prodname_dependabot %} (`github.actor == "dependabot[bot]"`) using the `pull_request_target` event, if the base ref of the pull request was created by {% data variables.product.prodname_dependabot %} (`github.actor == "dependabot[bot]"`), the `GITHUB_TOKEN` will be read-only and secrets are not available.
{% endif %}

詳しい情報については[GitHub Actionsとワークフローをセキュアに保つ: pwnリクエストの防止](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/)を参照してください。

{% ifversion fpt or ghec or ghes > 3.3 %}

### Changing `GITHUB_TOKEN` permissions

By default, {% data variables.product.prodname_actions %} workflows triggered by {% data variables.product.prodname_dependabot %} get a `GITHUB_TOKEN` with read-only permissions. You can use the `permissions` key in your workflow to increase the access for the token:

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

For more information, see "[Modifying the permissions for the GITHUB_TOKEN](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token)."

### Accessing secrets

When a {% data variables.product.prodname_dependabot %} event triggers a workflow, the only secrets available to the workflow are {% data variables.product.prodname_dependabot %} secrets. {% data variables.product.prodname_actions %} secrets are not available. Consequently, you must store any secrets that are used by a workflow triggered by {% data variables.product.prodname_dependabot %} events as {% data variables.product.prodname_dependabot %} secrets. 詳しい情報については「[Dependabotの暗号化されたシークレットの管理](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)」を参照してください。

{% data variables.product.prodname_dependabot %} secrets are added to the `secrets` context and referenced using exactly the same syntax as secrets for {% data variables.product.prodname_actions %}. For more information, see "[Encrypted secrets](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow)."

If you have a workflow that will be triggered by {% data variables.product.prodname_dependabot %} and also by other actors, the simplest solution is to store the token with the permissions required in an action and in a {% data variables.product.prodname_dependabot %} secret with identical names. Then the workflow can include a single call to these secrets. If the secret for {% data variables.product.prodname_dependabot %} has a different name, use conditions to specify the correct secrets for different actors to use. For examples that use conditions, see "[Common automations](#common-dependabot-automations)" below.

To access a private container registry on AWS with a user name and password, a workflow must include a secret for `username` and `password`. In the example below, when {% data variables.product.prodname_dependabot %} triggers the workflow, the {% data variables.product.prodname_dependabot %} secrets with the names `READONLY_AWS_ACCESS_KEY_ID` and `READONLY_AWS_ACCESS_KEY` are used. If another actor triggers the workflow, the actions secrets with those names are used.

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

**Note:** Your site administrator can override these restrictions for {% data variables.product.product_location %}. For more information, see "[Troubleshooting {% data variables.product.prodname_actions %} for your enterprise](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows)."

If the restrictions are removed, when a workflow is triggered by {% data variables.product.prodname_dependabot %} it will have access to {% data variables.product.prodname_actions %} secrets and can use the `permissions` term to increase the default scope of the `GITHUB_TOKEN` from read-only access. You can ignore the specific steps in the "Handling `pull_request` events" and "Handling `push` events" sections, as it no longer applies.

{% endnote %}

### `pull_request`イベントの処理

ワークフローでシークレットへのアクセスや書き込み権限を持つ`GITHUB_TOKEN`が必要なら、2つの選択肢があります。`pull_request_target`の使用、もしくは2つの別々のワークフローの使用です。 このセクションでは`pull_request_target`の使用を詳しく説明し、2つのワークフローの使用は下の「[`push`イベントの処理](#handling-push-events)」で詳しく説明します。

以下は、失敗する可能性がある`pull_request`ワークフローのシンプルな例です。

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

`pull_request`は`pull_request_target`で置き換えることができます。これはフォークからのPull Requestのために使われるもので、厳密にPull Requestの`HEAD`をチェックアウトします。

{% warning %}

**警告** `pull_request`の代わりとして`pull_request_target`を使うと、安全でない動作にさらされることになります。 下の「[`push`イベントの処理](#handling-push-events)」で説明する2つのワークフローの方法を使うことをおすすめします。

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

必要以上の権限を持つトークンの漏洩を避けるために、`GITHUB_TOKEN`に付与する権限のスコープを絞ることも強くおすすめします。 詳しい情報については「[`GITHUB_TOKEN`の権限](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)」を参照してください。

### `push`イベントの処理

`push`イベントには`pull_request_target`に相当するものがないので、2つのワークフローを使うことになります。1つは信頼されないワークフローで、成果物のアップロードで終わります。そしてこれは、成果物をダウンロードして処理を続ける、2番目の信頼されるワークフローをトリガーします。

最初のワークフローは、信頼されない作業をすべて行います。

{% raw %}

```yaml
### このワークフローはシークレットにアクセスできず、読み取りのみのトークンを持つ
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

失敗したDependabotワークフローを手動で再実行することもできます。これは、読み書きできるトークンを持ち、シークレットにアクセスできる状態で実行されます。 失敗したワークフローを手動で再実行する前には、更新される依存関係を常にチェックし、その変更によって悪意ある、あるいは意図しない動作が入り込むことがないようにすべきです。

## 一般的なDependabotの自動化

以下は、{% data variables.product.prodname_actions %}を使って自動化できる一般的ないくつかのシナリオです。

{% ifversion ghes = 3.3 %}

{% note %}

**Note:** If your site administrator has overridden restrictions for {% data variables.product.prodname_dependabot %} on {% data variables.product.product_location %}, you can use `pull_request` instead of `pull_request_target` in the following workflows.

{% endnote %}

{% endif %}

### Pull Reqeustに関するメタデータのフェッチ

大量の自動化には、依存関係の名前が何か、それは実働環境の依存関係か、メジャー、マイナー、パッチアップデートのいずれなのかといった、Pull Requestの内容に関する情報を知ることが必要です。

`dependabot/fetch-metadata`アクションは、これらの情報をすべて提供します。

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

詳しい情報については[`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata)リポジトリを参照してください。

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

Pull Requestを自動マージしたいなら、{% data variables.product.prodname_dotcom %}の自動マージ機能を利用できます。 これは、すべての必須テストと承認が正常に満たされた場合に、Pull Requestがマージされるようにしてくれます。 For more information on auto-merge, see "[Automatically merging a pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)."

以下は、`my-dependency`に対するすべてのパッチアップデートの自動マージを有効化する例です。

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  contents: write

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
- `pull_request`に対する正しい`ref`をチェックアウトしているか。
- Dependabotがトリガーした`pull_request`、`pull_request_review`、`pull_request_review_comment`、`push`イベントからシークレットにアクセスしようとしているか。
- Dependabotがトリガーした`pull_request`、`pull_request_review`、`pull_request_review_comment`、`push`イベントからなんらかの`write`アクションを実行しようとしていないか。

{% else %}

- 適切なアクターがトリガーした場合にのみワークフローを実行しているか。
- `pull_request`に対する正しい`ref`をチェックアウトしているか。
- Your secrets are available in {% data variables.product.prodname_dependabot %} secrets rather than as {% data variables.product.prodname_actions %} secrets.
- You have a `GITHUB_TOKEN` with the correct permissions.

{% endif %}

{% data variables.product.prodname_actions %}の作成とでバッグに関する情報については、「[GitHub Actionsを学ぶ](/actions/learn-github-actions)」を参照してください。
