## サンプルワークフローを作成する

{% data variables.product.prodname_actions %}はワークフローの定義にYAMLの構文を使います。  各ワークフローはコードリポジトリ中の`.github/workflows`というディレクトリに個別のYAMLファイルとして保存されます。

コードがプッシュされるたびに一連のコマンドを自動的にトリガーするサンプルワークフローをリポジトリに作成できます。 このワークフローでは、{% data variables.product.prodname_actions %}はプッシュされたコードをチェックアウトし、[bats](https://www.npmjs.com/package/bats)テスティングフレームワークをインストールし、`bats -v`というbatsのバージョンを出力するための基本的なコマンドを実行します。

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

これで、新しい {% data variables.product.prodname_actions %} ワークフローファイルがリポジトリにインストールされ、別のユーザがリポジトリに変更をプッシュするたびに自動的に実行されます。 ワークフローの実行履歴に関する詳細を見るには、「[ワークフローの実行のアクティビティの表示](#viewing-the-activity-for-a-workflow-run)」を参照してください。

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
このワークフローのトリガーを指定します。 この例は<code>push</code>イベントを使っているので、ワークフローの実行は誰かが変更をリポジトリにプッシュするか、Pull Requestをマージするたびにトリガーされます。  これは、すべてのブランチに対するプッシュによってトリガーされます。特定のブランチ、パス、タグへのプッシュでのみ実行するための構文の例については「<a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">{% data variables.product.prodname_actions %}のワークフロー構文</a>」を参照してください。
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
 <code>learn-github-actions</code>ワークフロー中で実行されるすべてのジョブをグループ化します。
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
<code>check-bats-version</code>という名前のジョブを定義します。 子キーはジョブのプロパティを定義します。
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
  Ubuntu Linuxランナーの最新バージョンで実行されるよう、ジョブを設定します。 これは、ジョブが GitHub によってホストされている新しい仮想マシンで実行されるということです。 他のランナーを使う構文の例については「<a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">{% data variables.product.prodname_actions %}のワークフロー構文</a>」を参照してください。
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
  <code>check-bats-version</code> ジョブで実行されるすべてのステップをグループ化します。 このセクションの下にネストされている各アイテムは、個別のアクションもしくはシェルスクリプトです。
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
<code>uses</code>　キーワードは、このステップが<code>actions/checkout</code>アクションの<code>v3</code>を実行することを指定しています。 これは、リポジトリをランナーにチェックアウトするアクションで、コードに対してスクリプトや他のアクション（ビルドやテストツールなど）を実行できるようにしてくれます。 ワークフローがリポジトリのコードに対して実行されるときには、いつでもチェックアウトのアクションを使うべきです。
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
  このステップは<code>{% data reusables.actions.action-setup-node %}</code>アクションを使ってNode.jsの指定されたバージョンをインストールします（この例ではv14が使われます）。 これは、<code>node</code>及び<code>npm</code>コマンドをどちらも<code>PATH</code>に置きます。
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

この図では、作成したワークフローファイルと、{% data variables.product.prodname_actions %} コンポーネントが階層にどのように整理されているかを確認できます。 それぞれのステップは、1つのアクションもしくはシェルスクリプトを実行します。 ステップ1と2はアクションを実行しますが、ステップ3と4はシェルスクリプトを実行します。 ワークフローのビルド済みアクションの詳細については、「[アクションの検索とカスタマイズ](/actions/learn-github-actions/finding-and-customizing-actions)」を参照してください。

![ワークフローの概要](/assets/images/help/images/overview-actions-event.png)

## ワークフローの実行のアクティビティの表示

ワークフローがトリガーされると、ワークフローを実行する_ワークフローの実行_が生成されます。 ワークフローの実行が開始されると、実行の進行の可視化グラフを見ることができ、{% data variables.product.prodname_dotcom %}上の各ステップのアクティビティを表示できます。

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下で**Actions（アクション）**をクリックしてください。

   ![リポジトリに移動](/assets/images/help/images/learn-github-actions-repository.png)
1. 左のサイドバーで、表示させたいワークフローをクリックしてください。

   ![ワークフロー結果のスクリーンショット](/assets/images/help/images/learn-github-actions-workflow.png)
1. "Workflow runs（ワークフローの実行）"の下で、表示させたい実行の名前をクリックしてください。

   ![ワークフロー実行のスクリーンショット](/assets/images/help/images/learn-github-actions-run.png)
1. [**Jobs**] または視覚化グラフで、表示するジョブをクリックします。

   ![ジョブを選択](/assets/images/help/images/overview-actions-result-navigate.png)
1. 各ステップの結果を表示させます。

   ![ワークフロー実行の詳細のスクリーンショット](/assets/images/help/images/overview-actions-result-updated-2.png)
