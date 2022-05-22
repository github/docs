---
title: GitHub Desktop を使った最初のリポジトリ作成方法
shortTitle: 最初のリポジトリを作成する
intro: '{% data variables.product.prodname_desktop %} を使って、コマンドラインを使用せずに Git リポジトリを作成および管理できます。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
  - /desktop/installing-and-configuring-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  free-pro-team: '*'
---
### はじめに
{% data variables.product.prodname_desktop %} は、コマンドライン上でテキストコマンドを使うのではなく、ビジュアルインターフェースを使って、あなたの {% data variables.product.prodname_dotcom_the_website %} ワークフローを拡張し簡略化します。 このガイドをとおして、{% data variables.product.prodname_desktop %} を使用してリポジトリを作成し、リポジトリに変更を加え、最後に変更を {% data variables.product.product_name %} に公開するところまでを行います。

{% data variables.product.prodname_desktop %} をインストールし、{% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} にサインインした後、チュートリアルリポジトリを作成してクローンできます。 チュートリアルでは、テキストエディタのインストール、ブランチの作成、コミットの作成、{% data variables.product.prodname_dotcom_the_website %} へのプッシュ、プルリクエストの開始など、Gitと {% data variables.product.prodname_dotcom %} で作業するための基本をご紹介します。 チュートリアルは、{% data variables.product.prodname_desktop %} にリポジトリが未作成の場合に利用できます。

チュートリアルを最後まで完了することをお勧めしますが、新しいリポジトリを作成することで {% data variables.product.prodname_desktop %} を学ぶ場合は、このガイドで {% data variables.product.prodname_desktop %} を使用して Git で作業する方法を説明します。

### パート 1: {% data variables.product.prodname_desktop %} をインストールしてアカウントを認証する
{% data variables.product.prodname_desktop %} は、サポートされている任意のオペレーティングシステムにインストールできます。 アプリをインストールした後、チュートリアルリポジトリを作成して複製する前に、{% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} でアカウントにサインインして認証する必要があります。

インストールと認証の詳細については、「[{% data variables.product.prodname_desktop %} の設定](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)」を参照してください。

### パート 2: 新しいリポジトリを作成する
{% data variables.product.prodname_desktop %} に関連付けられたリポジトリがない場合は、「Let's get started!」ビューが表示されます。ここでは、チュートリアルリポジトリの作成と複製、インターネットからの既存のリポジトリの複製、新しいリポジトリの作成、またはハードドライブからの既存のリポジトリの追加を選択できます。  ![さあ、始めましょう！ screen](/assets/images/help/desktop/lets-get-started.png)

#### チュートリアルリポジトリの作成とクローン
{% data variables.product.prodname_desktop %} を使用して練習する最初のプロジェクトとして、チュートリアルリポジトリを作成してクローンすることをお勧めします。

1. [**Create a tutorial repository and clone it**] をクリックします。 ![[Create and clone a tutorial repository] ボタン](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. チュートリアルのプロンプトに従って、テキストエディタのインストール、ブランチの作成、ファイルの編集、コミットの作成、{% data variables.product.prodname_dotcom %} への公開、プルリクエストのオープンを行います。

#### 新しいリポジトリの作成
チュートリアルリポジトリを作成してクローンしない場合は、新しいリポジトリを作成できます。

1. [**Create a New Repository on your Hard Drive...**] をクリックします。 ![新しいリポジトリの作成](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. フィールドに入力し、希望するオプションを選択します。 ![リポジトリの作成オプション](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - [Name] は、ローカルと {% data variables.product.product_name %} の両方で使う、リポジトリの名前を定義します。
   - [Description] はオプションのフィールドで、リポジトリの目的に関する情報を提供するために使うことができます。
   - [Local path] は、お手元のコンピューターにおけるリポジトリの場所を設定します。 デフォルトでは、{% data variables.product.prodname_desktop %} は _Documents_ フォルダの中に_GitHub_ フォルダを作成して、そこにリポジトリを保存しますが、保存するフォルダは任意の場所に設定可能です。 新しいリポジトリは、選択した場所の中のフォルダになります。 たとえば、リポジトリに `Tutorial` と名付けた場合、選択したローカルパスのフォルダの中に _Tutorial_ という名前のフォルダが作成されます。 {% data variables.product.prodname_desktop %} は、次に新しいリポジトリをクローンするか作成するときに、選択した場所を記憶します。
   - [**Initialize this repository with a README**] は、最初のコミットを _README.md_ ファイル付きで作成します。 README は、人々がプロジェクトの目的を理解するために役立つので、これを選択して、README に役立つ情報を記載することをおすすめします。 {% data variables.product.product_name %} でリポジトリにアクセスした人は、まず README を読んで、そのプロジェクトについて知ります。 詳細は「[README について](/articles/about-readmes)」を参照してください。
   - [**Git ignore**] ドロップダウンメニューは、バージョン管理で保存したくない、ローカルリポジトリ内で無視するファイルを指定するためのカスタムファイルを追加します。 特定の言語またはフレームワークを使用する場合、利用できるリストからオプションを選択できます。 まだ始めたばかりの場合は、この選択について無視して構いません。 詳細は「[ファイルを無視する](/github/getting-started-with-github/ignoring-files)」を参照してください。
   - [**License**] ドロップダウンメニューは、リポジトリの _LICENSE_ ファイルにオープンソースライセンスを追加します。 ライセンスをすぐに追加する必要はありません。 利用可能なオープンソースライセンスと、それらをリポジトリに追加する方法についての詳細は「[リポジトリのライセンス](/articles/licensing-a-repository)」を参照してください。
3. [**Create repository**] をクリックします。

### パート 3: {% data variables.product.prodname_desktop %} に触れる
画面上部のファイルメニューから、{% data variables.product.prodname_desktop %} で実行可能な設定や操作にアクセスできます。 作業の効率化のため、ほとんどのアクションにはキーボードショートカットも設定されています。 キーボードショートカットの一覧は「[キーボードショートカット](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)」を参照してください。

#### {% data variables.product.prodname_desktop %} メニューバー
{% data variables.product.prodname_desktop %} アプリケーションの上部に、リポジトリの現在の状態を示すバーが表示されます。
  - [**Current repository**] では、現在作業中のリポジトリ名が表示されます。 [**Current repository**] をクリックすると、{% data variables.product.prodname_desktop %} の別のリポジトリに切り替えることができます。
  - [**Current branch**] では、作業中のブランチ名が表示されます。 [**Current branch**] をクリックすると、リポジトリ内のすべてのブランチの表示、別のブランチへの切り替え、新しいブランチの作成ができます。 リポジトリにプルリクエストを作成すると、[**Current branch**] をクリックしてプルリクエストを表示することもできます。
  - [**Publish repository**] が表示されるのは、まだリポジトリを {% data variables.product.product_name %} に公開していないためです。これについては、次のステップで扱います。 バーのこのセクションは、現在のブランチとリポジトリのステータスに基づいて変更されます。 ローカルリポジトリとリモートリポジトリの間でデータを交換できるようにする、さまざまなコンテキスト依存のアクションが利用可能になります。

  ![GitHub Desktop を探索する](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

#### 変更と履歴
左サイドバーには、[**Changes**] ビューと [**History**] ビューが表示されています。 ![[Changes] および [History] タブ](/assets/images/help/desktop/changes-and-history.png)

  - [**Changes**] ビューは、現在のブランチで変更を行い、まだローカルリポジトリにコミットしていないファイルが表示されます。 ビューの下部には、[Summary] および [Description] テキストボックスのあるボックスと [**Commit to BRANCH**] ボタンがあります。 これが、新しい変更をコミットする場所です。 [**Commit to BRANCH**] ボタンは動的で、変更をコミットするブランチが表示されます。 ![コミットエリア](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - [**History**] ビューには、リポジトリの現在のブランチにおける以前のコミットが表示されます。 リポジトリを作成したときに、{% data variables.product.prodname_desktop %} によって作成された「最初のコミット」が表示されているはずです。 そのコミットの右側に、リポジトリを作成したときのオプションによっては、_.gitattributes_、_.gitignore_、_LICENSE_、_README_ ファイルが表示されているかもしれません。 各ファイルをクリックすると、そのファイルの diff が表示できます。これは、コミットでファイルに行った変更を示すものです。 diff には、ファイル全体の内容ではなく、変更を行った部分のみが表示されます。 ![[History] ビュー](/assets/images/help/desktop/getting-started-guide/history-view.png)

### パート4: リポジトリを {% data variables.product.product_name %} に公開する
新しいリポジトリを作成する場合、そのリポジトリはコンピュータ上にのみ存在し、自分だけがアクセスできます。 リポジトリを {% data variables.product.product_name %} に公開して、複数のコンピュータ間で同期を維持し、他のユーザがアクセスできるようにすることができます。 リポジトリを公開するには、ローカルの変更を {% data variables.product.product_name %} にプッシュします。

1. メニューバーの [**Publish repository**] をクリックします。 ![[Publish repository]](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} は、リポジトリの作成時に入力した情報を [Name] フィールドと [Description] フィールドに自動的に入力します。
    - [**Keep this code private**] を使用すると、プロジェクトを表示できるユーザを制御できます。 このオプションを選択していない場合、{% data variables.product.product_name %} の他のユーザがあなたのコードを表示できるようになります。 このオプションを選択すると、コードは公開されなくなります。
    - [**Organization**] ドロップダウンメニューがある場合は、{% data variables.product.product_name %} で所属している特定の Organization にリポジトリを公開できます。

    ![[Publish repository] のステップ](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. **Publish Repository**ボタンをクリックします。
  3. {% data variables.product.prodname_desktop %} から {% data variables.product.prodname_dotcom_the_website %} のリポジトリにアクセスできます。 ファイルメニューで、[**Repository**] をクリックしてから [**View on GitHub**] をクリックしてください。 デフォルトブラウザで、リポジトリに直接移動します。

### パート 5: 変更の作成、コミット、プッシュ
これまでの手順でリポジトリを作成して公開したら、プロジェクトに変更を加えて、リポジトリへの最初のコミットを作成することができます。

1. {% data variables.product.prodname_desktop %} 内から外部エディタを起動するには、[**Repository**] をクリックしてから [**Open in <em>EDITOR</em>**] をクリックします。 詳しい情報については、「[デフォルトエディタを設定する](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)」を参照してください。 ![[Open in editor]](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. 以前作成した _README.md_ ファイルにいくつかの変更を加えます。 何を行うのか、なぜ役立つのかなど、プロジェクトを説明する情報を追加できます。 変更が完了したら、テキストエディタに保存します。
3. {% data variables.product.prodname_desktop %} で、[**Changes**] ビューに移動します。 ファイルのリストに、_README.md_ が表示されているはずです。 _README.md_ ファイルの左側にあるチェックマークは、ファイルに加えた変更がコミットの一部になることを示しています。 今後、複数のファイルに変更を行って、そのうちの一部のファイルのみの変更をコミットしたい場合があるかもしれません。 ファイルの横にあるチェックマークをクリックすると、そのファイルはコミットに含まれません。 ![変更を表示する](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. [**Changes**] リストの下に、コミットメッセージを入力します。 プロフィール画像の右側で、コミットについて簡潔な説明を入力します。 ここでは _README.md_ ファイルを変更するので、「プロジェクトの目的について情報を追加する」などがコミットの要約として良いかもしれません。 概要の下に、コミットの変更詳しい説明を入力できる [Description] テキストフィールドが表示されます。これは、プロジェクトの履歴を振り返ったり、変更理由を確認するときに役立ちます。 今は _README.md_ ファイルの基本的な更新を行っているところなので、この内容は飛ばしてもかまいません。 ![コミットメッセージ](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. [**Commit to BRANCH NAME**] をクリックします。 コミットボタンには現在のブランチが表示されるので、必要なブランチに確実にコミットできます。 ![ブランチへのコミット](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. 変更を {% data variables.product.product_name %} のリモートリポジトリにプッシュするには、[**Push origin**] をクリックします。 ![[Push origin]](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - [**Push origin**] ボタンは、リポジトリを {% data variables.product.product_name %} に公開する際にクリックしたボタンと同じです。 このボタンは、Git ワークフローの現在の場所に基づいてコンテキストが変わります。 ボタンが `Push origin` に変わり、横に `1` と表示されます。これは、{% data variables.product.product_name %} にプッシュされていないコミットが 1 つあることを示しています。
  - **Push origin** の「origin」は、`origin` というリモートに変更をプッシュしていることを示しています。この場合は、{% data variables.product.prodname_dotcom_the_website %} 上のプロジェクトのリポジトリです。 {% data variables.product.product_name %} に何か新しいコミットをプッシュするまで、お手元のコンピューターにあるプロジェクトのリポジトリと、{% data variables.product.prodname_dotcom_the_website %} にあるプロジェクトのリポジトリには違いがあります。 これにより、ローカルで作業し、準備ができたときにのみ変更を {% data variables.product.prodname_dotcom_the_website %} にプッシュできます。
7. [**Changes**] ビューの右側のウィンドウに、次に実行可能なアクションの提案が表示されます。 ブラウザで {% data variables.product.product_name %} のリポジトリを開くには、[**View on {% data variables.product.product_name %}**] をクリックします。 ![利用可能なアクション](/assets/images/help/desktop/available-actions.png)
8. ブラウザで、[**2 commits**] をクリックします。 {% data variables.product.product_name %} にあるリポジトリの、コミットのリストが表示されます。 最初のコミットは、{% data variables.product.prodname_desktop %} で行ったコミットである必要があります。 ![2 つのコミットをクリック](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### おわりに
これで、リポジトリの作成、{% data variables.product.product_name %} へのリポジトリの公開、コミットの実行、{% data variables.product.product_name %} への変更のプッシュが完了しました。 作成やコラボレーションを行う他のプロジェクトに貢献するときに、これと同じワークフローを使用することができます。

### 参考リンク
- "[Getting started with Git](/github/getting-started-with-github/getting-started-with-git)"
- 「[{% data variables.product.prodname_dotcom %} について学ぶ](/github/getting-started-with-github/learning-about-github)」
- 「[{% data variables.product.prodname_dotcom %} を使ってみる](/github/getting-started-with-github)」
