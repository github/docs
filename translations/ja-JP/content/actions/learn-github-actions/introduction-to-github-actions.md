---
title: GitHub Actions 入門
shortTitle: GitHub Actions 入門
intro: '{% data variables.product.prodname_actions %} の中核的概念とさまざまなコンポーネントについて学び、リポジトリに自動化を追加する方法の例を示します。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### 概要

{% data variables.product.prodname_actions %} は、ソフトウェア開発ライフサイクル内のタスクを自動化するのに役立ちます。 {% data variables.product.prodname_actions %} はイベント駆動型で、指定されたイベントが発生した後に一連のコマンドを実行できます。 たとえば、誰かがリポジトリのプルリクエストを作成するたびに、ソフトウェアテストスクリプトを実行するコマンドを自動的に実行できます。

この図は、{% data variables.product.prodname_actions %} を使用してソフトウェアテストスクリプトを自動的に実行する方法を示しています。 イベントは、_ジョブ_を含む_ワークフロー_を自動的にトリガーします。 次に、ジョブは_ステップ_を使用して、_アクション_が実行される順序を制御します。 これらのアクションは、ソフトウェアテストを自動化するコマンドです。

![ワークフローの概要](/assets/images/help/images/overview-actions-simple.png)

### {% data variables.product.prodname_actions %} のコンポーネント

以下は、ジョブを実行するために連動する複数の {% data variables.product.prodname_actions %} コンポーネントのリストです。 これらのコンポーネントがどのように相互作用するかを確認できます。

![コンポーネントとサービスの概要](/assets/images/help/images/overview-actions-design.png)

#### ワークフロー

ワークフローは、リポジトリに追加する自動化された手順です。 ワークフローは 1 つ以上のジョブで構成されており、イベントによってスケジュールまたはトリガーできます。 ワークフローを使用して、{% data variables.product.prodname_dotcom %} でプロジェクトをビルド、テスト、パッケージ、リリース、またはデプロイできます。

#### イベント

イベントは、ワークフローをトリガーする特定のアクティビティです。 たとえば、誰かがコミットをリポジトリにプッシュした場合、あるいはIssueもしくはプルリクエストが作成された場合、{% data variables.product.prodname_dotcom %}からアクティビティを発生させることができます。 You can also use the [repository dispatch webhook](/rest/reference/repos#create-a-repository-dispatch-event) to trigger a workflow when an external event occurs. ワークフローのトリガーに使用できるイベントの完全なリストについては、[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)を参照してください。

#### Jobs

ジョブは、同じランナーで実行される一連のステップです。 デフォルトでは、複数のジョブを含むワークフローは、それらのジョブを並行して実行します。 ジョブを順番に実行するようにワークフローを設定することもできます。 たとえば、ワークフローにコードのビルドとテストという2つのシーケンシャルなジョブを持たせ、テストジョブをビルドジョブのステータスに依存させることができます。 ビルドジョブが失敗した場合は、テストジョブは実行されません。

#### ステップ

A step is an individual task that can run commands in a job. A step can be either an _action_ or a shell command. ジョブの各ステップは同じランナーで実行され、そのジョブのアクションが互いにデータを共有できるようにします。

#### アクション

_アクション_は、_ジョブ_を作成するために_ステップ_に結合されるスタンドアロンコマンドです。 アクションは、ワークフローの最小のポータブルな構成要素です。 独自のアクションを作成することも、{% data variables.product.prodname_dotcom %} コミュニティによって作成されたアクションを使用することもできます。 ワークフローでアクションを使うには、それをステップとして含めなければなりません。

#### ランナー

A runner is a server that has the [{% data variables.product.prodname_actions %} runner application](https://github.com/actions/runner) installed. {% data variables.product.prodname_dotcom %} がホストするランナーを使用することも、自分でランナーをホストすることもできます。 ランナーは、使用可能なジョブをリッスンし、一度に 1 つのジョブを実行し、進行状況、ログ、および結果を {% data variables.product.prodname_dotcom %} に返します。 {% data variables.product.prodname_dotcom %}ホストランナーでは、ワークフロー内の各ジョブは新しい仮想環境で実行されます。

{% data variables.product.prodname_dotcom %} ホストランナーは、Ubuntu Linux、Microsoft Windows、および macOS に基づいています。 {% data variables.product.prodname_dotcom %} ホストランナーの詳細については、「[{% data variables.product.prodname_dotcom %} ホストランナーの仮想環境](/actions/reference/virtual-environments-for-github-hosted-runners)」を参照してください。 別のオペレーティングシステムが必要な場合、または特定のハードウェア設定が必要な場合は、自分のランナーをホストできます。 セルフホストランナーの詳細については、「[自分のランナーをホストする](/actions/hosting-your-own-runners)」を参照してください。

### サンプルワークフローを作成する

{% data variables.product.prodname_actions %}は、YAML 構文を使用して、イベント、ジョブ、およびステップを定義します。 これらの YAML ファイルは、コードリポジトリの `.github/workflows` というディレクトリに保存されます。

コードがプッシュされるたびに一連のコマンドを自動的にトリガーするサンプルワークフローをリポジトリに作成できます。 このワークフローでは、{% data variables.product.prodname_actions %} がプッシュされたコードをチェックアウトし、ソフトウェアの依存関係をインストールして、`bats-v` を実行します。

1. リポジトリに、ワークフローファイルを保存するための `.github/workflows/` ディレクトリを作成します。
1. `.github/workflows/` ディレクトリに、`learn-github-actions.yml` という名前の新しいファイルを作成し、次のコードを追加します。
    ```yaml
    name: learn-github-actions
    on: [push]
    jobs:
      check-bats-version:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
          - run: npm install -g bats
          - run: bats -v
    ```
1. これらの変更をコミットして、{% data variables.product.prodname_dotcom %} リポジトリにプッシュします。

これで、新しい {% data variables.product.prodname_actions %} ワークフローファイルがリポジトリにインストールされ、別のユーザがリポジトリに変更をプッシュするたびに自動的に実行されます。 ジョブの実行履歴の詳細については、「[ワークフローのアクティビティを表示する](/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity)」を参照してください。

### ワークフローファイルを理解する

YAML 構文を使用してワークフローファイルを作成する方法を理解しやすくするために、このセクションでは、導入例の各行について説明します。

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>オプション</em> - {% data variables.product.prodname_dotcom %} リポジトリの [Actions] タブに表示されるワークフローの名前。
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
  ワークフローファイルを自動的にトリガーするイベントを指定します。 この例では <code>push</code> イベントを使用しているため、別のユーザが変更をリポジトリにプッシュするたびにジョブが実行されます。 特定のブランチ、パス、またはタグでのみ実行するようにワークフローを設定できます。 ブランチ、パス、またはタグを含むまたは除外する構文の例については、「<a href="https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths">{% data variables.product.prodname_actions %} のワークフロー構文</a>」を参照してください。
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 <code>learn-github-actions</code> ワークフローファイルで実行されるすべてのジョブをグループ化します。
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
  <code>jobs</code> セクション内に保存されている <code>check-bats-version</code> ジョブの名前を定義します。
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  Ubuntu Linux ランナーで実行するようにジョブを設定します。 これは、ジョブが GitHub によってホストされている新しい仮想マシンで実行されるということです。 他のランナーを使用した構文例については、「<a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">{% data variables.product.prodname_actions %} のワークフロー構文</a>」を参照してください。
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  <code>check-bats-version</code> ジョブで実行されるすべてのステップをグループ化します。 このセクションの下にネストされた各行は、個別のアクションです。
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/checkout@v2
  ```
</td>
<td>
  <code>uses</code> キーワードは、<code>actions/checkout@v2</code> という名前のコミュニティアクションの <code>v2</code> を取得するようにジョブに指示します。 これは、リポジトリをチェックアウトしてランナーにダウンロードし、コード（テストツールなど）に対してアクションを実行できるようにします。 ワークフローがリポジトリのコードに対して実行されるとき、またはリポジトリで定義されたアクションを使用しているときはいつでも、チェックアウトアクションを使用する必要があります。
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/setup-node@v1
  ```
</td>
<td>
  このアクションにより、<code>node</code> ソフトウェアパッケージがランナーにインストールされ、<code>npm</code> コマンドにアクセスできるようになります。
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
  <code>run</code> キーワードは、ランナーでコマンドを実行するようにジョブに指示します。 この場合、<code>npm</code> を使用して <code>bats</code> ソフトウェアテストパッケージをインストールしています。 
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
  最後に、ソフトウェアバージョンを出力するパラメータを指定して <code>bats</code> コマンドを実行します。
</td>
</tr>
</table>

#### ワークフローファイルの視覚化

この図では、作成したワークフローファイルと、{% data variables.product.prodname_actions %} コンポーネントが階層にどのように整理されているかを確認できます。 Each step executes a single action or shell command. ステップ 1 と 2 は、ビルド済みのコミュニティアクションを使用します。 Steps 3 and 4 run shell commands directly on the runner. ワークフローのビルド済みアクションの詳細については、「[アクションの検索とカスタマイズ](/actions/learn-github-actions/finding-and-customizing-actions)」を参照してください。

![ワークフローの概要](/assets/images/help/images/overview-actions-event.png)


### ジョブのアクティビティを表示する

ジョブの実行が開始されると、{% data variables.product.prodname_dotcom %} で各ステップのアクティビティを表示できます。

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下で**Actions（アクション）**をクリックしてください。 ![リポジトリに移動](/assets/images/help/images/learn-github-actions-repository.png)
1. 左サイドバーで、表示するワークフローをクリックします。 ![ワークフロー結果のスクリーンショット](/assets/images/help/images/learn-github-actions-workflow.png)
1. [Workflow runs] で、表示する実行の名前をクリックします。 ![ワークフロー実行のスクリーンショット](/assets/images/help/images/learn-github-actions-run.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. ジョブ名をクリックして、各ステップの結果を確認します。 ![ワークフロー実行の詳細のスクリーンショット](/assets/images/help/images/overview-actions-result-updated.png)
{% else %}
1. ジョブ名をクリックして、各ステップの結果を確認します。 ![ワークフロー実行の詳細のスクリーンショット](/assets/images/help/images/overview-actions-result.png)
{% endif %}

### 次のステップ

{% data variables.product.prodname_actions %} について詳しくは、「[アクションの検索とカスタマイズ](/actions/learn-github-actions/finding-and-customizing-actions)」を参照してください。

### サポートへの連絡

{% data reusables.github-actions.contacting-support %}
