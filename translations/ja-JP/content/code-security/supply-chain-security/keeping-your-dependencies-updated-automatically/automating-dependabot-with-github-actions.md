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
shortTitle: Use Dependabot with actions
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %}及び{% data variables.product.prodname_actions %}について

{% data variables.product.prodname_dependabot %}は、依存関係を最新に保つためのPull Requestを作成します。{% data variables.product.prodname_actions %}を使って、それらのPull Requestが作成されたときに自動化されたタスクを実行できます。 たとえば、追加の成果物のフェッチ、ラベルの追加、テストの実行、あるいはPull Requestの変更ができます。

## イベントへの応答

{% data variables.product.prodname_dependabot %}は、そのPull Requestとコメントに対して{% data variables.product.prodname_actions %}ワークフローをトリガーできます。ただし、[GitHub Actions: DependabotのPull Requestがトリガーしたワークフローは読み取りのみの権限で実行される](https://github.blog/changelog/2021-02-19-github-actions-workflows-triggered-by-dependabot-prs-will-run-with-read-only-permissions/)ので、特定のイベントは異なった扱いを受けます。

`pull_request`、`pull_request_review`、`pull_request_review_comment`、`push`イベントを使って {% data variables.product.prodname_dependabot %}によって開始されたワークフロー（`github.actor == "dependabot[bot]"`）については、以下の制限が適用されます。

- `GITHUB_TOKEN`は読み取りのみの権限を持ちます。
- シークレットにはアクセスできません。

詳しい情報については[GitHub Actionsとワークフローをセキュアに保つ: pwnリクエストの防止](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/)を参照してください。

{% ifversion ghes > 3.2 %}
{% note %}

**Note:** Your site administrator can override these restrictions for {% data variables.product.product_location %}. For more information, see "[Troubleshooting {% data variables.product.prodname_actions %} for your enterprise](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows)."

If the restrictions are removed, when a workflow is triggered by {% data variables.product.prodname_dependabot %} it will have access to any secrets that are normally available. In addition, workflows triggered by {% data variables.product.prodname_dependabot %} can use the `permissions` term to increase the default scope of the `GITHUB_TOKEN` from read-only access.

{% endnote %}
{% endif %}

### `pull_request`イベントの処理

ワークフローでシークレットへのアクセスや書き込み権限を持つ`GITHUB_TOKEN`が必要なら、2つの選択肢があります。`pull_request_target`の使用、もしくは2つの別々のワークフローの使用です。 このセクションでは`pull_request_target`の使用を詳しく説明し、2つのワークフローの使用は下の「[`push`イベントの処理](#handling-push-events)」で詳しく説明します。

以下は、失敗する可能性がある`pull_request`ワークフローのシンプルな例です。

{% raw %}
```yaml
### このワークフローはシークレットを持たず、読み取りのみのトークンを持つ
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # ワークフローがDependabot PR以外で失敗しないよう、アクターがDependabotか常にチェック
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: actions/checkout@v2
```
{% endraw %}

`pull_request`は`pull_request_target`で置き換えることができます。これはフォークからのPull Requestのために使われるもので、厳密にPull Requestの`HEAD`をチェックアウトします。

{% warning %}

**警告** `pull_request`の代わりとして`pull_request_target`を使うと、安全でない動作にさらされることになります。 下の「[`push`イベントの処理](#handling-push-events)」で説明する2つのワークフローの方法を使うことをおすすめします。

{% endwarning %}

{% raw %}
```yaml
### このワークフローはシークレットへのアクセスと読み書きできるトークンを持ちます
name: Dependabot Workflow
on:
  pull_request_target

permissions:
  # 今度は読み書きできるトークンを持っているので、必要に応じてスコープを下げる

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: actions/checkout@v2
        with:
          # pull requestのHEADをチェックアウト
          ref: ${{ github.event.pull_request.head.sha }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

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

### 手動でのワークフローの再実行

失敗したDependabotワークフローを手動で再実行することもできます。これは、読み書きできるトークンを持ち、シークレットにアクセスできる状態で実行されます。 失敗したワークフローを手動で再実行する前には、更新される依存関係を常にチェックし、その変更によって悪意ある、あるいは意図しない動作が入り込むことがないようにすべきです。

## 一般的なDependabotの自動化

以下は、{% data variables.product.prodname_actions %}を使って自動化できる一般的ないくつかのシナリオです。

### Pull Reqeustに関するメタデータのフェッチ

大量の自動化には、依存関係の名前が何か、それは実働環境の依存関係か、メジャー、マイナー、パッチアップデートのいずれなのかといった、Pull Requestの内容に関する情報を知ることが必要です。

`dependabot/fetch-metadata`アクションは、これらの情報をすべて提供します。

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

詳しい情報については[`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata)リポジトリを参照してください。

### Pull Requestのラベル付け

{% data variables.product.prodname_dotcom %}ラベルに基づく他の自動化やトリアージワークフローがあるなら、提供されたメタデータに基づいてラベルを割り当てるアクションを設定できます。

たとえば、すべての実働環境の依存関係の更新にラベルでフラグを設定したいなら:

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

### Pull Requestの承認

自動的にDependabotのPull Requestを承認したいなら、ワークフロー中で{% data variables.product.prodname_cli %}を利用できます。

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

### Pull Requestの自動マージを有効化する

Pull Requestを自動マージしたいなら、{% data variables.product.prodname_dotcom %}の自動マージ機能を利用できます。 これは、すべての必須テストと承認が正常に満たされた場合に、Pull Requestがマージされるようにしてくれます。 For more information on auto-merge, see "[Automatically merging a pull request"](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)."

以下は、`my-dependency`に対するすべてのパッチアップデートの自動マージを有効化する例です。

{% raw %}
```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  pull-requests: write
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

## 失敗したワークフローの実行のトラブルシューティング

ワークフローの実行が失敗した場合は、以下をチェックしてください。

- 適切なアクターがトリガーした場合にのみワークフローを実行しているか。
- `pull_request`に対する正しい`ref`をチェックアウトしているか。
- Dependabotがトリガーした`pull_request`、`pull_request_review`、`pull_request_review_comment`、`push`イベントからシークレットにアクセスしようとしているか。
- Dependabotがトリガーした`pull_request`、`pull_request_review`、`pull_request_review_comment`、`push`イベントからなんらかの`write`アクションを実行しようとしていないか。

{% data variables.product.prodname_actions %}の作成とでバッグに関する情報については、「[GitHub Actionsを学ぶ](/actions/learn-github-actions)」を参照してください。
