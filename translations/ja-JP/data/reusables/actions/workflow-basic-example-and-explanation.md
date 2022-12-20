---
ms.openlocfilehash: 53dbd22ad351ec7a1abc92107b366ecd8c71a3a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064539"
---
## サンプルワークフローを作成する

{% data variables.product.prodname_actions %} では、YAML 構文を使用してワークフローを定義します。  各ワークフローは、コード リポジトリ内の `.github/workflows` という名前のディレクトリに個別の YAML ファイルとして格納されます。

コードがプッシュされるたびに一連のコマンドを自動的にトリガーするサンプルワークフローをリポジトリに作成できます。 このワークフローでは、{% data variables.product.prodname_actions %} がプッシュされたコードをチェックアウトし、[bats](https://www.npmjs.com/package/bats) テスト フレームワークをインストールし、bats バージョンを出力する基本コマンド `bats -v` を実行します。

1. 自身のリポジトリで、ワークフロー ファイルを格納するための `.github/workflows/` ディレクトリを作成します。
1. `.github/workflows/` ディレクトリで、`learn-github-actions.yml` という名前の新しいファイルを作成し、次のコードを追加します。

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

これで、新しい {% data variables.product.prodname_actions %} ワークフローファイルがリポジトリにインストールされ、別のユーザがリポジトリに変更をプッシュするたびに自動的に実行されます。 ワークフローの実行履歴に関する詳細については、「[ワークフロー実行時のアクティビティを見る](#viewing-the-activity-for-a-workflow-run)」を参照してください。

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
  <em>省略可能</em> - {% data variables.product.prodname_dotcom %} リポジトリの [アクション] タブに表示されるワークフローの名前。
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
このワークフローのトリガーを指定します。 この例では、<code>push</code> イベントを使用しているため、変更がリポジトリにプッシュされるか、pull request がマージされるたびに、ワークフロー実行がトリガーされます。  これは、すべてのブランチへのプッシュによってトリガーされます。特定のブランチ、パス、またはタブへのプッシュでのみ実行される構文の例については、「<a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">{% data variables.product.prodname_actions %} のワークフロー構文</a>」を参照してください。
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
<code>learn-github-actions</code> ワークフローで実行されるすべてのジョブをグループ化します。
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
<code>check-bats-version</code> という名前のジョブを定義します。 子キーは、ジョブのプロパティを定義します。
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
Ubuntu Linux ランナーの最新バージョンで実行されるようにジョブを構成します。 これは、ジョブが GitHub によってホストされている新しい仮想マシンで実行されるということです。 他のランナーを使う構文例については、「<a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">{% data variables.product.prodname_actions %} のワークフロー構文</a>」を参照してください。
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
<code>check-bats-version</code> ジョブで実行されるすべてのステップをグループ化します。 このセクションで入れ子になった各項目は、個別のアクションまたはシェル スクリプトです。
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
<code>uses</code> キーワードは、このステップが <code>actions/checkout</code> アクションの <code>v3</code> を実行することを指定します。 これは、リポジトリをランナーにチェックアウトするアクションであり、コードに対してスクリプトまたは他のアクション (ビルド ツールやテスト ツールなど) を実行できます。 チェックアウト アクションは、リポジトリのコードに対してワークフローが実行されるたびに使用する必要があります。
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
このステップでは、<code>{% data reusables.actions.action-setup-node %}</code> アクションを使用して、指定されたバージョン (この例では、v14 を使用) の Node.js をインストールします。 これにより、<code>node</code> と <code>npm</code> の両方のコマンドが <code>PATH</code> にプッシュされます。
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
<code>run</code> キーワードは、ランナーでコマンドを実行するようにジョブに指示します。 この場合は、<code>npm</code> を使用して <code>bats</code> ソフトウェア テスト パッケージをインストールします。
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
最後に、ソフトウェアのバージョンを出力するパラメーターを指定して <code>bats</code> を実行します。
</td>
</tr>
</table>

### ワークフローファイルの視覚化

この図では、作成したワークフローファイルと、{% data variables.product.prodname_actions %} コンポーネントが階層にどのように整理されているかを確認できます。 各ステップでは、単一のアクションまたはシェル スクリプトが実行されます。 ステップ 1 と 2 ではアクションが実行され、ステップ 3 と 4 ではシェル スクリプトが実行されます。 ワークフローの事前構築済みアクションの詳細については、「[Finding and customizing actions](/actions/learn-github-actions/finding-and-customizing-actions)」 (アクションの検出とカスタマイズ) を参照してください。

![ワークフローの概要](/assets/images/help/images/overview-actions-event.png)

## ワークフロー実行のアクティビティの表示

ワークフローがトリガーされると、 _ワークフローを実行するワークフロー実行_ が作成されます。 ワークフロー実行の開始後に、実行の進行状況を示す視覚化グラフが表示され、{% data variables.product.prodname_dotcom %} での各ステップのアクティビティを表示できます。

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下にある **[アクション]** をクリックします。

   ![リポジトリに移動](/assets/images/help/images/learn-github-actions-repository.png)
1. 左サイドバーで、表示するワークフローをクリックします。

   ![ワークフロー結果のスクリーンショット](/assets/images/help/images/learn-github-actions-workflow.png)
1. [Workflow runs] で、表示する実行の名前をクリックします。

   ![ワークフロー実行のスクリーンショット](/assets/images/help/images/learn-github-actions-run.png)
1. **[ジョブ]** の下、または視覚化グラフ内で、表示するジョブをクリックします。

   ![ジョブを選択](/assets/images/help/images/overview-actions-result-navigate.png)
1. 各ステップの結果を表示します。

   ![ワークフロー実行の詳細のスクリーンショット](/assets/images/help/images/overview-actions-result-updated-2.png)
