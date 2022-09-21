---
title: Hello World
intro: 'この Hello World 演習に従って、{% data variables.product.product_name %} の使用を開始します。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 71278b720bcbfaabc892c396ab7fb558f5309173
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125862'
---
## はじめに

{% data variables.product.product_name %} は、バージョン コントロールとコラボレーションのためのコード ホスティング プラットフォームです。 これにより、どこからでもプロジェクトで共同作業を行うことができます。

このチュートリアルでは、リポジトリ、ブランチ、コミット、pull request などの {% data variables.product.product_name %} の要点について説明します。 独自の Hello World リポジトリを作成し、{% data variables.product.product_name %} の pull request ワークフローについて学びます。これは、コードを作成してレビューする一般的な方法です。

このクイックスタート ガイドでは、次の操作を行います。

* リポジトリを作成して使用する
* 新しいブランチを開始して管理する
* ファイルに変更を加え、コミットとして {% data variables.product.product_name %} にプッシュする
* pull request を開いてマージする

このチュートリアルを完了するには、[{% data variables.product.product_name %} アカウント](http://github.com)とインターネット アクセスが必要です。 コードを作成し、コマンド ラインを使用し、Git ({% data variables.product.product_name %} が構築されているバージョン コントロール ソフトウェア) をインストールする方法を知る必要はありません。 このガイドで使用されている式について質問がある場合は、[用語集](/get-started/quickstart/github-glossary)に進み、用語の詳細を確認してください。

## リポジトリを作成する

リポジトリは、通常 1 つのプロジェクトを整理するために使用されます。 リポジトリには、フォルダーとファイル、画像、ビデオ、スプレッドシート、データ セットなどプロジェクトに必要なものは何でも含めることができます。 多くの場合、リポジトリには _README_ ファイル (プロジェクトに関する情報を含むファイル) が含まれます。 _README_ ファイルは、プレーン テキストの Markdown 言語で記述されます。 この[チート シート](https://www.markdownguide.org/cheat-sheet/)を使用して、Markdown 構文の使用を開始できます。 {% data variables.product.product_name %} を使用すると、新しいリポジトリを作成するのと同時に _README_ ファイルを追加できます。 {% data variables.product.product_name %} にはライセンス ファイルなどの他の一般的なオプションも用意されていますが、現在はそれらを選択する必要はありません。

`hello-world` リポジトリは、アイデアやリソースを格納し、他のユーザーと共有し話し合う場所にすることができます。

{% data reusables.repositories.create_new %}
1. **[リポジトリ名]** ボックスに「`hello-world`」と入力します。
2. **[説明]** ボックスに簡単な説明を記述します。
3. **[README ファイルを追加する]** を選択します。
4. リポジトリが **[パブリック]** か **[プライベート]** かを選択します。
5. **[Create repository]** \(リポジトリの作成\) をクリックします。

   ![Hello World リポジトリを作成する](/assets/images/help/repository/hello-world-repo.png)

## ブランチの作成

ブランチを使用すると、一度に異なるバージョンのリポジトリを使用できます。

既定では、リポジトリには、決定版ブランチと見なされる `main` という名前のブランチが 1 つ存在します。 リポジトリで `main` の追加のブランチを作成できます。 ブランチを使用すると、一度にあるプロジェクトの異なるバージョンを作成できます。 これは、コードのメインのソースを変更せずに新しい機能をプロジェクトに追加する場合に役立ちます。 異なるブランチで行われた作業は、マージするまでメインのブランチには表示されません。これについてはこのガイドで後ほど説明します。 ブランチを使用すると、`main` にブランチをコミットする前に実験や編集を行うことができます。

`main` ブランチからブランチを作成すると、`main` のその時点のコピー (スナップショット) が作成されます。 ブランチの作業中に他のユーザーが `main` ブランチに変更を加えた場合は、その更新をプルできます。

この図は次のことを示しています。

* `main` ブランチ
* `feature` という名前の新しいブランチ
* `main` にマージされる前に `feature` がたどるプロセス

![分岐図](/assets/images/help/repository/branching.png)

ファイルの異なるバージョンを保存したことがありますか? 次のようなものです。

* `story.txt`
* `story-edit.txt`
* `story-edit-reviewed.txt`

ブランチは、{% data variables.product.product_name %} リポジトリでも同様の目標を達成します。

ここ {% data variables.product.product_name %} では、開発者、ライター、設計者は、バグ修正と機能作業を `main` (運用) ブランチとは別の場所に保存するためにブランチを使用します。 変更の準備ができたら、ブランチを `main` にマージします。

### 分岐を作成する

1. `hello-world` リポジトリの **[コード]** タブをクリックします。
2. **[main]** と表示されるファイル リストの一番上にあるドロップダウンをクリックします。
   ![ブランチ メニュー](/assets/images/help/branch/branch-selection-dropdown.png)
4. テキスト ボックスにブランチ名の「`readme-edits`」を入力します。
5. **[ブランチの作成: main からの readme-edits]** をクリックします。

![ブランチ メニュー](/assets/images/help/repository/new-branch.png)

これで `main` と `readme-edits` の 2 つのブランチを作成しました。 今のところ、この 2 つはまったく同じように見えます。 次に、新しいブランチに変更を追加します。

## 変更を加え、変更をコミットする

前の手順で新しいブランチを作成後、{% data variables.product.product_name %} を使用して新しい `readme-edits` ブランチ (`main` のコピー) のコード ページに移動しました。

リポジトリ内のファイルに変更を加えて保存できます。 {% data variables.product.product_name %} では、保存された変更はコミットと呼ばれます。 各コミットには、特定の変更が行われた理由を説明するコミット メッセージが関連付けられています。 コミット メッセージでは、行ったこととその理由を他の共同作成者が理解できるように、変更内容の履歴がキャプチャされます。

1. 作成した `readme-edits` ブランチで _README.md_ ファイルをクリックします。
2. {% octicon "pencil" aria-label="The edit icon" %}をクリックしてファイルを編集してください。
3. エディターで簡単な自己紹介文を書きます。 さまざまな Markdown 要素を使用してみてください。
4. **[変更のコミット]** ボックスに、変更について説明するコミット メッセージを書き込みます。
5. **[Commit changes]** をクリックします。

   ![コミットの例](/assets/images/help/repository/first-commit.png)

これらの変更は `readme-edits` ブランチ上の README ファイルにのみ行われるため、このブランチに `main` とは異なるコンテンツが含まれるようになりました。

## プルリクエストのオープン

`main` とは別のブランチに変更が加わったため、pull request を開くことができます。

pull request は、{% data variables.product.product_name %} でのコラボレーションの主な機能です。 pull request を開くと、変更を提案し、誰かにコントリビューションをレビューしてプルし、ブランチにマージするよう要求できます。 pull request では、両方のブランチのコンテンツの相違点 (差分) が表示されます。 変更、追加、差分は異なる色で表示されます。

コミットしたらすぐに、コードが完成していなくても、pull request を開き、ディスカッションを開始できます。

pull request メッセージで {% data variables.product.product_name %} の `@mention` 機能使用することにより、特定のユーザーやチームが近くにいる場合でも、10 タイム ゾーン離れている場合でも、フィードバックを求めることができます。

独自のリポジトリで pull request を開き、自分でマージすることもできます。 これは、大規模なプロジェクトに取り組む前に {% data variables.product.product_name %} フローを学習するのに最適な方法です。

1. `hello-world` リポジトリの **[pull request]** タブをクリックします。
2. **[新しい pull request]** をクリックします。
3. **[比較例]** ボックスで、作成したブランチの `readme-edits` を選択して、`main` (元のブランチ) と比較します。
4. [比較] ページの差分で変更内容を確認し、送信すべき内容であることを確認します。

   ![差分の例](/assets/images/help/repository/diffs.png)

5. **[pull request の作成]** をクリックします。
6. pull request にタイトルを付け、変更内容の簡単な説明を記述します。 絵文字を含め、画像や gif をドラッグ アンド ドロップできます。
7. 必要に応じて、タイトルと説明の右側にある {% octicon "gear" aria-label="The Gear icon" %} ( **[レビュー担当者]** 、 **[担当者]** 、 **[ラベル]** 、 **[プロジェクト]** 、または **[マイルストーン]** の横の) をクリックして、pull request にこのようなオプションを追加します。 まだ追加する必要はありませんが、これらのオプションでは pull request を使用して共同作業を行うさまざまな方法が提供されます。 詳細については、「[pull request について](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」を参照してください。
7. **[pull request の作成]** をクリックします。

コラボレーターが編集内容を確認し、提案できるようになりました。

## pull request を管理する

この最後の手順では、`readme-edits` ブランチを `main` ブランチにマージします。  pull request をマージすると、`readme-edits` ブランチの変更が `main` に組み込まれます。

場合によっては、pull request によって、`main` の既存のコードと競合するコードが変更される場合があります。 競合がある場合、{% data variables.product.product_name %} は競合するコードについて警告し、競合が解決されるまでマージを禁止します。 競合を解決するコミットを行うか、pull request のコメントを使用して、チーム メンバーと競合について話し合うことができます。

このチュートリアルでは、競合は発生しないため、ブランチをメイン ブランチにマージする準備ができました。

1. **[pull request のマージ]** をクリックして、変更を `main` にマージします。
  ![[マージ] ボタンのスクリーン ショット。](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
2. **[マージの確認]** をクリックします。 要求が正常にマージされ、要求が閉じられたことを示すメッセージが表示されます。
3. **[ブランチの削除]** をクリックします。 pull request がマージされ、変更が `main` に反映されたため、`readme-edits` ブランチを安全に削除できます。 プロジェクトをさらに変更する場合は、いつでも新しいブランチを作成し、このプロセスを繰り返すことができます。

## 次の手順

このチュートリアルを完了することで、プロジェクトを作成し、{% data variables.product.product_name %} に対して pull request を行う方法を学習しました。

このチュートリアルで実行した内容は次のとおりです。

* オープンソース リポジトリを作成しました
* 新しいブランチを開始し、管理しました
* ファイルを変更し、変更を {% data variables.product.product_name %} にコミットしました
* pull request 開き、マージしました

{% data variables.product.product_name %} プロファイルを見ると、作業内容がコントリビューション グラフに反映されていることがわかります。

ブランチと pull request の機能の詳細については、「[GitHub フロー](/get-started/quickstart/github-flow)」を参照してください。 {% data variables.product.product_name %} の使用開始について詳しくは、[「はじめに」のクイックスタート](/get-started/quickstart)の他のガイドを参照してください。
