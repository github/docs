---
title: GitHub Actions のクイックスタート
intro: '{% data variables.product.prodname_actions %} の機能を 5 分またはそれ以下で試すことができます。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
shortTitle: Quickstart
ms.openlocfilehash: 164aef041c509264c9e8440d5339bce3cf4aaaca
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '146139458'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

{% data variables.product.prodname_actions %} ワークフローを作成して実行するには、{% data variables.product.prodname_dotcom %} リポジトリのみが必要になります。 このガイドでは、{% data variables.product.prodname_actions %} の重要な機能のいくつかを示すワークフローを追加します。 

次の例は、{% data variables.product.prodname_actions %} ジョブを自動的にトリガーする方法、実行する場所、およびリポジトリ内のコードとやり取りする方法を示しています。

## 最初のワークフローを作成する

1. `.github/workflows` ディレクトリがまだ存在しない場合、リポジトリの {% data variables.product.prodname_dotcom %} でこのディレクトリを作成します。
2. `.github/workflows` ディレクトリに `github-actions-demo.yml` という名前のファイルを作成します。 詳細については、「[新しいファイルの作成](/github/managing-files-in-a-repository/creating-new-files)」を参照してください。
3. 次の YAML コンテンツを `github-actions-demo.yml` ファイルにコピーします: {% raw %}
    ```yaml{:copy}
    name: GitHub Actions Demo
    on: [push]
    jobs:
      Explore-GitHub-Actions:
        runs-on: ubuntu-latest
        steps:
          - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
          - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
          - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."{% endraw %}
          - name: Check out repository code
            uses: {% data reusables.actions.action-checkout %}{% raw %}
          - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
          - run: echo "🖥️ The workflow is now ready to test your code on the runner."
          - name: List files in the repository
            run: |
              ls ${{ github.workspace }}
          - run: echo "🍏 This job's status is ${{ job.status }}."

    ```
    {% endraw %}
3. ページの下部までスクロールして、 **[このコミットに新しいブランチを作成して pull request を開始]** を選択してください。 そして、pull request を作成するために **[新しいファイルを提案]** をクリックしてください。
    ![ワークフローファイルのコミット](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

リポジトリ内のワークフローファイルをブランチにコミットすると、`push` イベントがトリガーされ、ワークフローが実行されます。

## ワークフローの結果を表示する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 左サイドバーで、表示するワークフローをクリックします。

   ![左サイドバーのワークフローのリスト](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. ワークフローの実行リストから、表示させたい実行の名前をクリックしてください。

   ![ワークフローの実行の名前](/assets/images/help/repository/actions-quickstart-run-name.png)
1. **[ジョブ]** で **[Explore-GitHub-Actions]** ジョブをクリックします。

   ![ジョブを探す](/assets/images/help/repository/actions-quickstart-job.png)
1. ログには、各ステップの処理方法が表示されます。 いずれかのステップを展開して、詳細を表示します。

   ![ワークフロー結果の例](/assets/images/help/repository/actions-quickstart-logs.png)
   
   たとえば、リポジトリ内のファイルのリストを確認できます。![アクションの詳細の例](/assets/images/help/repository/actions-quickstart-log-detail.png)
   
## その他のスターターワークフロー

{% data reusables.actions.workflow-template-overview %}

## より複雑な例
{% data reusables.actions.link-to-example-library %}

## 次の手順

追加したワークフロー例では、コードがブランチにプッシュされるたびに実行され、{% data variables.product.prodname_actions %} がリポジトリのコンテンツを処理できる方法が示されます。 ただし、これは {% data variables.product.prodname_actions %} で可能なことの一部にすぎません。

- リポジトリには、さまざまなイベントに基づいてさまざまなジョブをトリガーする複数のワークフローを含めることができます。 
- ワークフローを使用してソフトウェアテストアプリをインストールし、{% data variables.product.prodname_dotcom %} のランナーでコードを自動的にテストすることができます。 

{% data variables.product.prodname_actions %} は、アプリケーション開発プロセスのほぼすべての要素を自動化するのに役立ちます。 使い始める準備はできていますか。 {% data variables.product.prodname_actions %} で次のステップに進む際に役立つ、以下のようなリソースを参照してください。

- 詳しいチュートリアルについては、「[{% data variables.product.prodname_actions %}](/actions/learn-github-actions)」を参照してください。
