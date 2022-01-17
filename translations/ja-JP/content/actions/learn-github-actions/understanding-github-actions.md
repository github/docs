---
title: Understanding GitHub Actions
shortTitle: Understanding GitHub Actions
intro: 'Learn the basics of {% data variables.product.prodname_actions %}, including core concepts and essential terminology.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

{% data reusables.actions.about-actions %}  You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.

{% data variables.product.prodname_actions %} goes beyond just DevOps and lets you run workflows when other events happen in your repository. For example, you can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository.

{% data variables.product.prodname_dotcom %} provides Linux, Windows, and macOS virtual machines to run your workflows, or you can host your own self-hosted runners in your own data center or cloud infrastructure.

## {% data variables.product.prodname_actions %} のコンポーネント

You can configure a {% data variables.product.prodname_actions %} _workflow_ to be triggered when an _event_ occurs in your repository, such as a pull request being opened or an issue being created.  Your workflow contains one or more _jobs_ which can run in sequential order or in parallel.  Each job will run inside its own virtual machine _runner_, or inside a container, and has one or more _steps_ that either run a script that you define or run an _action_, which is a reusable extension that can simplify your workflow.

![ワークフローの概要](/assets/images/help/images/overview-actions-simple.png)

### ワークフロー

A workflow is a configurable automated process that will run one or more jobs.  Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

Your repository can have multiple workflows in a repository, each of which can perform a different set of steps.  For example, you can have one workflow to build and test pull requests, another workflow to deploy your application every time a release is created, and still another workflow that adds a label every time someone opens a new issue.

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}You can reference a workflow within another workflow, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."{% endif %}

### イベント

An event is a specific activity in a repository that triggers a workflow run. For example, activity can originate from {% data variables.product.prodname_dotcom %} when someone creates a pull request, opens an issue, or pushes a commit to a repository.  You can also trigger a workflow run on a schedule, by [posting to a REST API](/rest/reference/repos#create-a-repository-dispatch-event), or manually.

ワークフローのトリガーに使用できるイベントの完全なリストについては、[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows)を参照してください。

### ジョブ

A job is a set of _steps_ in a workflow that execute on the same runner.  Each step is either a shell script that will be executed, or an _action_ that will be run.  Steps are executed in order and are dependent on each other.  Since each step is executed on the same runner, you can share data from one step to another.  For example, you can have a step that builds your application followed by a step that tests the application that was built.

You can configure a job's dependencies with other jobs; by default, jobs have no dependencies and run in parallel with each other.  When a job takes a dependency on another job, it will wait for the dependent job to complete before it can run.  For example, you may have multiple build jobs for different architectures that have no dependencies, and a packaging job that is dependent on those jobs.  The build jobs will run in parallel, and when they have all completed successfully, the packaging job will run.

### アクション

An _action_ is a custom application for the {% data variables.product.prodname_actions %} platform that performs a complex but frequently repeated task.  Use an action to help reduce the amount of repetitive code that you write in your workflow files.  An action can pull your git repository from {% data variables.product.prodname_dotcom %}, set up the correct toolchain for your build environment, or set up the authentication to your cloud provider.

You can write your own actions, or you can find actions to use in your workflows in the {% data variables.product.prodname_marketplace %}.

### ランナー

{% data reusables.actions.about-runners %} Each runner can run a single job at a time. {% ifversion ghes or ghae %} You must host your own runners for {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows; each workflow run executes in a fresh, newly-provisioned virtual machine. If you need a different operating system or require a specific hardware configuration, you can host your own runners.{% endif %} For more information{% ifversion fpt or ghec %} about self-hosted runners{% endif %}, see "[Hosting your own runners](/actions/hosting-your-own-runners)."

## サンプルワークフローを作成する

{% data variables.product.prodname_actions %} uses YAML syntax to define the workflow.  Each workflow is stored as a separate YAML file in your code repository, in a directory called `.github/workflows`.

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
          - uses: actions/setup-node@v2
            with:
              node-version: '14'
          - run: npm install -g bats
          - run: bats -v
    ```
1. これらの変更をコミットして、{% data variables.product.prodname_dotcom %} リポジトリにプッシュします。

これで、新しい {% data variables.product.prodname_actions %} ワークフローファイルがリポジトリにインストールされ、別のユーザがリポジトリに変更をプッシュするたびに自動的に実行されます。 ジョブの実行履歴の詳細については、「[ワークフローのアクティビティを表示する](/actions/learn-github-actions/introduction-to-github-actions#viewing-the-jobs-activity)」を参照してください。

## ワークフローファイルを理解する

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
Specifies the trigger for this workflow. This example uses the <code>push</code> event, so a workflow run is triggered every time someone pushes a change to the repository or merges a pull request.  This is triggered by a push to every branch; for examples of syntax that runs only on pushes to specific branches, paths, or tags, see <a href="https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths">"Workflow syntax for {% data variables.product.prodname_actions %}."</a>
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 Groups together all the jobs that run in the <code>learn-github-actions</code> workflow.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
Defines a job named <code>check-bats-version</code>. The child keys will define properties of the job.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  Configures the job to run on the latest version of an Ubuntu Linux runner. これは、ジョブが GitHub によってホストされている新しい仮想マシンで実行されるということです。 他のランナーを使用した構文例については、「<a href="https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">{% data variables.product.prodname_actions %} のワークフロー構文</a>」を参照してください。
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  <code>check-bats-version</code> ジョブで実行されるすべてのステップをグループ化します。 Each item nested under this section is a separate action or shell script.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/checkout@v2
  ```
</td>
<td>
The <code>uses</code> keyword specifies that this step will run <code>v2</code> of the <code>actions/checkout</code> action.  This is an action that checks out your repository onto the runner, allowing you to run scripts or other actions against your code (such as build and test tools). You should use the checkout action any time your workflow will run against the repository's code.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
  ```
</td>
<td>
  This step uses the <code>actions/setup-node@v2</code> action to install the specified version of the Node.js (this example uses v14). This puts both the <code>node</code> and <code>npm</code> commands in your <code>PATH</code>.
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

### ワークフローファイルの視覚化

この図では、作成したワークフローファイルと、{% data variables.product.prodname_actions %} コンポーネントが階層にどのように整理されているかを確認できます。 Each step executes a single action or shell script. Steps 1 and 2 run actions, while steps 3 and 4 run shell scripts. ワークフローのビルド済みアクションの詳細については、「[アクションの検索とカスタマイズ](/actions/learn-github-actions/finding-and-customizing-actions)」を参照してください。

![ワークフローの概要](/assets/images/help/images/overview-actions-event.png)

## Viewing the workflow's activity

Once your workflow has started running, you can {% ifversion fpt or ghes > 3.0 or ghae or ghec %}see a visualization graph of the run's progress and {% endif %}view each step's activity on {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下で**Actions（アクション）**をクリックしてください。 ![リポジトリに移動](/assets/images/help/images/learn-github-actions-repository.png)
1. 左サイドバーで、表示するワークフローをクリックします。 ![ワークフロー結果のスクリーンショット](/assets/images/help/images/learn-github-actions-workflow.png)
1. [Workflow runs] で、表示する実行の名前をクリックします。 ![ワークフロー実行のスクリーンショット](/assets/images/help/images/learn-github-actions-run.png)
{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
1. [**Jobs**] または視覚化グラフで、表示するジョブをクリックします。 ![ジョブを選択](/assets/images/help/images/overview-actions-result-navigate.png)
{% endif %}
{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
1. 各ステップの結果を表示します。 ![ワークフロー実行の詳細のスクリーンショット](/assets/images/help/images/overview-actions-result-updated-2.png)
{% elsif ghes %}
1. ジョブ名をクリックして、各ステップの結果を確認します。 ![ワークフロー実行の詳細のスクリーンショット](/assets/images/help/images/overview-actions-result-updated.png)
{% else %}
1. ジョブ名をクリックして、各ステップの結果を確認します。 ![ワークフロー実行の詳細のスクリーンショット](/assets/images/help/images/overview-actions-result.png)
{% endif %}

## 次のステップ

{% data variables.product.prodname_actions %} について詳しくは、「[アクションの検索とカスタマイズ](/actions/learn-github-actions/finding-and-customizing-actions)」を参照してください。

{% ifversion fpt or ghec or ghes %}

To understand how billing works for {% data variables.product.prodname_actions %}, see "[About billing for {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)".

{% endif %}

## サポートへの連絡

{% data reusables.github-actions.contacting-support %}
