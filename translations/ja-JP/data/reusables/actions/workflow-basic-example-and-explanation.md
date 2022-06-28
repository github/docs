## サンプルワークフローを作成する

{% data variables.product.prodname_actions %} uses YAML syntax to define the workflow.  Each workflow is stored as a separate YAML file in your code repository, in a directory named `.github/workflows`.

コードがプッシュされるたびに一連のコマンドを自動的にトリガーするサンプルワークフローをリポジトリに作成できます。 In this workflow, {% data variables.product.prodname_actions %} checks out the pushed code, installs the [bats](https://www.npmjs.com/package/bats) testing framework, and runs a basic command to output the bats version: `bats -v`.

1. リポジトリに、ワークフローファイルを保存するための `.github/workflows/` ディレクトリを作成します。
1. `.github/workflows/` ディレクトリに、`learn-github-actions.yml` という名前の新しいファイルを作成し、次のコードを追加します。

   ```yaml
   name: learn-github-actions
   on: [push]
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: '14'
         - run: npm install -g bats
         - run: bats -v
   ```
1. これらの変更をコミットして、{% data variables.product.prodname_dotcom %} リポジトリにプッシュします。

これで、新しい {% data variables.product.prodname_actions %} ワークフローファイルがリポジトリにインストールされ、別のユーザがリポジトリに変更をプッシュするたびに自動的に実行されます。 To see the details about a workflow's execution history, see "[Viewing the activity for a workflow run](#viewing-the-activity-for-a-workflow-run)."

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
Specifies the trigger for this workflow. This example uses the <code>push</code> event, so a workflow run is triggered every time someone pushes a change to the repository or merges a pull request.  This is triggered by a push to every branch; for examples of syntax that runs only on pushes to specific branches, paths, or tags, see "<a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">Workflow syntax for {% data variables.product.prodname_actions %}</a>."
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
  Configures the job to run on the latest version of an Ubuntu Linux runner. これは、ジョブが GitHub によってホストされている新しい仮想マシンで実行されるということです。 For syntax examples using other runners, see "<a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">Workflow syntax for {% data variables.product.prodname_actions %}</a>."
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
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
The <code>uses</code> keyword specifies that this step will run <code>v3</code> of the <code>actions/checkout</code> action. This is an action that checks out your repository onto the runner, allowing you to run scripts or other actions against your code (such as build and test tools). You should use the checkout action any time your workflow will run against the repository's code.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
  ```
</td>
<td>
  This step uses the <code>{% data reusables.actions.action-setup-node %}</code> action to install the specified version of the Node.js (this example uses v14). This puts both the <code>node</code> and <code>npm</code> commands in your <code>PATH</code>.
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

## Viewing the activity for a workflow run

When your workflow is triggered, a _workflow run_ is created that executes the workflow. After a workflow run has started, you can see a visualization graph of the run's progress and view each step's activity on {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下で**Actions（アクション）**をクリックしてください。

   ![リポジトリに移動](/assets/images/help/images/learn-github-actions-repository.png)
1. 左のサイドバーで、表示させたいワークフローをクリックしてください。

   ![ワークフロー結果のスクリーンショット](/assets/images/help/images/learn-github-actions-workflow.png)
1. "Workflow runs（ワークフローの実行）"の下で、表示させたい実行の名前をクリックしてください。

   ![ワークフロー実行のスクリーンショット](/assets/images/help/images/learn-github-actions-run.png)
1. [**Jobs**] または視覚化グラフで、表示するジョブをクリックします。

   ![ジョブを選択](/assets/images/help/images/overview-actions-result-navigate.png)
1. View the results of each step.

   ![ワークフロー実行の詳細のスクリーンショット](/assets/images/help/images/overview-actions-result-updated-2.png)