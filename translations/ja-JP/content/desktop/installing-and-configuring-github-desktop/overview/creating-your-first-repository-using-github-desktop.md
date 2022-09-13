---
title: GitHub Desktop を使った最初のリポジトリ作成方法
shortTitle: Creating your first repository
intro: '{% data variables.product.prodname_desktop %} を使って、コマンドラインを使用せずに Git リポジトリを作成および管理できます。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
  - /desktop/installing-and-configuring-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: bdfaa5770faef23d8176b24753e23d6a3d5159a1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117326'
---
## はじめに
{% data variables.product.prodname_desktop %} は、コマンドライン上でテキストコマンドを使うのではなく、ビジュアルインターフェースを使って、あなたの {% data variables.product.prodname_dotcom_the_website %} ワークフローを拡張し簡略化します。 このガイドをとおして、{% data variables.product.prodname_desktop %} を使用してリポジトリを作成し、リポジトリに変更を加え、最後に変更を {% data variables.product.product_name %} に公開するところまでを行います。

{% data variables.product.prodname_desktop %} をインストールし、{% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} にサインインした後、チュートリアルリポジトリを作成してクローンできます。 チュートリアルでは、テキストエディタのインストール、ブランチの作成、コミットの作成、{% data variables.product.prodname_dotcom_the_website %} へのプッシュ、プルリクエストの開始など、Gitと {% data variables.product.prodname_dotcom %} で作業するための基本をご紹介します。 チュートリアルは、{% data variables.product.prodname_desktop %} にリポジトリが未作成の場合に利用できます。

チュートリアルを最後まで完了することをお勧めしますが、新しいリポジトリを作成することで {% data variables.product.prodname_desktop %} を学ぶ場合は、このガイドで {% data variables.product.prodname_desktop %} を使用して Git で作業する方法を説明します。

## パート 1: {% data variables.product.prodname_desktop %} をインストールしてアカウントを認証する
{% data variables.product.prodname_desktop %} は、サポートされている任意のオペレーティングシステムにインストールできます。 アプリをインストールした後、チュートリアルリポジトリを作成して複製する前に、{% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} でアカウントにサインインして認証する必要があります。

インストールと認証の詳細については、「[{% data variables.product.prodname_desktop %} の設定](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)」を参照してください。

## パート 2: 新しいリポジトリを作成する
{% data variables.product.prodname_desktop %} に関連付けられているリポジトリがない場合は、"それでは始めましょう。" ビューが 表示され、チュートリアル リポジトリの作成と複製、インターネットからの既存のリポジトリの複製、新しいリポジトリの作成、またはハード ドライブからの既存のリポジトリの追加を選択できます。
  ![それでは始めましょう。 画面](/assets/images/help/desktop/lets-get-started.png)

### チュートリアルリポジトリの作成とクローン
{% data variables.product.prodname_desktop %} を使用して練習する最初のプロジェクトとして、チュートリアルリポジトリを作成してクローンすることをお勧めします。

1. **[Create a tutorial repository and clone it]\(チュートリアル リポジトリの作成と複製\)** をクリックします。
  ![チュートリアル リポジトリの作成と複製のボタン](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. チュートリアルのプロンプトに従って、テキストエディタのインストール、ブランチの作成、ファイルの編集、コミットの作成、{% data variables.product.prodname_dotcom %} への公開、プルリクエストのオープンを行います。

### 新しいリポジトリの作成
チュートリアルリポジトリを作成してクローンしない場合は、新しいリポジトリを作成できます。

1. **[Create a New Repository on your Hard Drive...]\(ハード ドライブに新しいリポジトリを作成する...\)** をクリックします。![新しいリポジトリを作成する](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. フィールドに入力し、希望するオプションを選択します。
  ![リポジトリの作成オプション](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - [Name] は、ローカルと {% data variables.product.product_name %} の両方で使う、リポジトリの名前を定義します。
   - [Description] はオプションのフィールドで、リポジトリの目的に関する情報を提供するために使うことができます。
   - [Local path] は、お手元のコンピューターにおけるリポジトリの場所を設定します。 既定では、{% data variables.product.prodname_desktop %} は _ドキュメント_ フォルダー内に _GitHub_ フォルダーを作成してリポジトリを保存しますが、コンピューター上の任意の場所を選択することもできます。 新しいリポジトリは、選択した場所の中のフォルダになります。 たとえば、リポジトリに `Tutorial` という名前を付けた場合、ローカル パスで選択したフォルダー内に _Tutorial_ という名前のフォルダーが作成されます。 {% data variables.product.prodname_desktop %} は、次に新しいリポジトリをクローンするか作成するときに、選択した場所を記憶します。
   - **README を使用してこのリポジトリを初期化する** と、_README.md_ ファイルを使用して初期コミットが作成されます。 README は、人々がプロジェクトの目的を理解するために役立つので、これを選択して、README に役立つ情報を記載することをおすすめします。 {% data variables.product.product_name %} でリポジトリにアクセスした人は、まず README を読んで、そのプロジェクトについて知ります。 詳細については、「[README について](/articles/about-readmes)」を参照してください。
   - **[Git 無視]** ドロップダウン メニューでは、バージョン コントロールで保存したくない、ローカル リポジトリ内で無視するファイルを指定するためのカスタム ファイルを追加できます。 特定の言語またはフレームワークを使用する場合、利用できるリストからオプションを選択できます。 まだ始めたばかりの場合は、この選択について無視して構いません。 詳細については、「[ファイルを無視する](/github/getting-started-with-github/ignoring-files)」を参照してください。
   - **[ライセンス]** ドロップダウン メニューを使用すると、リポジトリ内の _LICENSE_ ファイルにオープンソース ライセンスを追加できます。 ライセンスをすぐに追加する必要はありません。 使用可能なオープンソース ライセンスと、リポジトリに追加する方法の詳細については、「[リポジトリのライセンス](/articles/licensing-a-repository)」を参照してください。
3. **[Create repository]** \(リポジトリの作成\) をクリックします。

## パート 3: {% data variables.product.prodname_desktop %} に触れる
画面上部のファイルメニューから、{% data variables.product.prodname_desktop %} で実行可能な設定や操作にアクセスできます。 作業の効率化のため、ほとんどのアクションにはキーボードショートカットも設定されています。 キーボード ショートカットの完全な一覧については、「[キーボード ショートカット](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)」を参照してください。

### {% data variables.product.prodname_desktop %} メニューバー
{% data variables.product.prodname_desktop %} アプリケーションの上部に、リポジトリの現在の状態を示すバーが表示されます。
  - **[Current repository]\(現在のリポジトリ\)** には、作業中のリポジトリの名前が表示されます。 **[Current repository]\(現在のリポジトリ\)** をクリックすると、{% data variables.product.prodname_desktop %} の別のリポジトリに切り替えることができます。
  - **[Current Branch]** には、作業中のブランチの名前が表示されます。 **[Current Branch]** をクリックすると、リポジトリ内のすべてのブランチの表示、別のブランチへの切り替え、新しいブランチの作成を行うことができます。 リポジトリに pull request を作成したら、 **[Current Branch]** をクリックして表示することもできます。
  - **[リポジトリの発行]** が表示されるのは、まだリポジトリを {% data variables.product.product_name %} に発行していないためです。これについては、次のステップで扱います。 バーのこのセクションは、現在のブランチとリポジトリのステータスに基づいて変更されます。 ローカルリポジトリとリモートリポジトリの間でデータを交換できるようにする、さまざまなコンテキスト依存のアクションが利用可能になります。

  ![GitHub Desktop を探索する](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

### 変更と履歴
左側のサイドバーには、 **[変更]** ビューと **[履歴]** ビューがあります。
  ![[変更] タブと [履歴] タブ](/assets/images/help/desktop/changes-and-history.png)

  - **[変更]** ビューは、現在のブランチで変更を行い、まだローカル リポジトリにコミットしていないファイルが表示されます。 下部には、[概要] テキスト ボックスと [説明] テキスト ボックスと **[Commit to BRANCH]\(BRANCH へのコミット\)** ボタンが表示されたボックスがあります。 これが、新しい変更をコミットする場所です。 **[Commit to BRANCH]\(BRANCH へのコミット\)** ボタンは動的であり、変更をコミットするブランチが表示されます。
  ![コミット領域](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - **[履歴]** ビューには、リポジトリの現在のブランチにおける以前のコミットが表示されます。 リポジトリを作成したときに、{% data variables.product.prodname_desktop %} によって作成された「最初のコミット」が表示されているはずです。 コミットの右側には、リポジトリの作成時に選択したオプションに応じて、 _.gitattributes_、 _.gitignore_、_LICENSE_、または _README_ ファイルが表示される場合があります。 各ファイルをクリックすると、そのファイルの diff が表示できます。これは、コミットでファイルに行った変更を示すものです。 diff には、ファイル全体の内容ではなく、変更を行った部分のみが表示されます。
  ![[履歴] ビュー](/assets/images/help/desktop/getting-started-guide/history-view.png)

## パート4: リポジトリを {% data variables.product.product_name %} に公開する
新しいリポジトリを作成する場合、そのリポジトリはコンピュータ上にのみ存在し、自分だけがアクセスできます。 リポジトリを {% data variables.product.product_name %} に公開して、複数のコンピュータ間で同期を維持し、他のユーザがアクセスできるようにすることができます。 リポジトリを公開するには、ローカルの変更を {% data variables.product.product_name %} にプッシュします。

1. メニュー バーの **[リポジトリの発行]** をクリックします。
    ![リポジトリの発行](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} は、リポジトリの作成時に入力した情報を [Name] フィールドと [Description] フィールドに自動的に入力します。
    - **[このコードを非公開のままにする]** では、プロジェクトを表示できるユーザーを制御できます。 このオプションを選択していない場合、{% data variables.product.product_name %} の他のユーザがあなたのコードを表示できるようになります。 このオプションを選択すると、コードは公開されなくなります。
    - **[組織]** ドロップダウン メニューがある場合は、{% data variables.product.product_name %} で所属している特定の組織にリポジトリを発行できます。

    ![[Publish repository] のステップ](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. **[リポジトリの発行]** ボタンをクリックします。
  3. {% data variables.product.prodname_desktop %} から {% data variables.product.prodname_dotcom_the_website %} のリポジトリにアクセスできます。 ファイル メニューの **[リポジトリ]** をクリックし、 **[GitHub 上で表示]** をクリックします。 デフォルトブラウザで、リポジトリに直接移動します。

## パート 5: 変更の作成、コミット、プッシュ
これまでの手順でリポジトリを作成して公開したら、プロジェクトに変更を加えて、リポジトリへの最初のコミットを作成することができます。

1. {% data variables.product.prodname_desktop %} 内から外部エディターを起動するには、 **[リポジトリ]** をクリックし、 **[<<em>エディター</em>>で開く]** をクリックします。 詳細については、「[既定のエディターの設定方法](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)」を参照してください。
  ![エディターで開く](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. 以前に作成した _README.md_ ファイルに変更を加えます。 何を行うのか、なぜ役立つのかなど、プロジェクトを説明する情報を追加できます。 変更が完了したら、テキストエディタに保存します。
3. {% data variables.product.prodname_desktop %} で、 **[変更]** ビューに移動します。 ファイル リストに、_README.md_ が表示されます。 _README.md_ ファイルの左側にあるチェックマークは、ファイルに加えた変更がコミットの一部になることを示しています。 今後、複数のファイルに変更を行って、そのうちの一部のファイルのみの変更をコミットしたい場合があるかもしれません。 ファイルの横にあるチェックマークをクリックすると、そのファイルはコミットに含まれません。
  ![変更を表示する](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. **[変更]** リストの下部に、コミット メッセージを入力します。 プロフィール画像の右側で、コミットについて簡潔な説明を入力します。 ここでは _README.md_ ファイルを変更するので、「プロジェクトの目的に関する情報を追加する」などがコミットの概要として良いかもしれません。 概要の下に、コミットの変更詳しい説明を入力できる [Description] テキストフィールドが表示されます。これは、プロジェクトの履歴を振り返ったり、変更理由を確認するときに役立ちます。 今は _README.md_ ファイルの基本的な更新を行っているところなので、この内容は飛ばしてもかまいません。
  ![コミット メッセージ](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. **[Commit to BRANCH NAME]\(ブランチ名にコミット\)** をクリックします。 コミットボタンには現在のブランチが表示されるので、必要なブランチに確実にコミットできます。
  ![ブランチへのコミット](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. 変更を {% data variables.product.product_name %} のリモート リポジトリにプッシュするには、 **[Push origin]\(オリジンへプッシュ\)** をクリックします。
  ![[Push origin]\(オリジンへプッシュ\)](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - **[Push origin]\(オリジンへプッシュ\)** ボタンは、リポジトリを {% data variables.product.product_name %} に発行する際にクリックしたボタンと同じです。 このボタンは、Git ワークフローの現在の場所に基づいてコンテキストが変わります。 これで、`Push origin` の横に `1` と表示されるようになりました。これは、{% data variables.product.product_name %} にプッシュされていないコミットが 1 つあることを示します。
  - **[Push origin]\(オリジンへプッシュ\)** の "オリジン" は、`origin` というリモートに変更をプッシュしていることを示しています。この場合は、{% data variables.product.prodname_dotcom_the_website %} 上のプロジェクトのリポジトリです。 {% data variables.product.product_name %} に何か新しいコミットをプッシュするまで、お手元のコンピューターにあるプロジェクトのリポジトリと、{% data variables.product.prodname_dotcom_the_website %} にあるプロジェクトのリポジトリには違いがあります。 これにより、ローカルで作業し、準備ができたときにのみ変更を {% data variables.product.prodname_dotcom_the_website %} にプッシュできます。
7. **[変更]** ビューの右側のウィンドウに、次に実行できるアクションの候補が表示されます。 ブラウザーで {% data variables.product.product_name %} のリポジトリを開くには、 **[{% data variables.product.product_name %} 上で表示]** をクリックします。
  ![使用可能なアクション](/assets/images/help/desktop/available-actions.png)
8. ブラウザーで、 **[2 commits]\(2 件のコミット\)** をクリックします。 {% data variables.product.product_name %} にあるリポジトリの、コミットのリストが表示されます。 最初のコミットは、{% data variables.product.prodname_desktop %} で行ったコミットである必要があります。
  ![2 件のコミットをクリック](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

## まとめ
これで、リポジトリの作成、{% data variables.product.product_name %} へのリポジトリの公開、コミットの実行、{% data variables.product.product_name %} への変更のプッシュが完了しました。 作成やコラボレーションを行う他のプロジェクトに貢献するときに、これと同じワークフローを使用することができます。

## 参考資料
- 「[Git の概要](/github/getting-started-with-github/getting-started-with-git)」
- 「[{% data variables.product.prodname_dotcom %} について学ぶ](/github/getting-started-with-github/learning-about-github)」
- 「[{% data variables.product.prodname_dotcom %} の概要](/github/getting-started-with-github)」
