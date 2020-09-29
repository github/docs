---
title: GitHub Desktop を使った最初のリポジトリ作成方法
intro: '{% data variables.product.prodname_desktop %} を使って、コマンドラインを使わずに素早く Git リポジトリで作業できます。'
versions:
  free-pro-team: '*'
---

### はじめに

このガイドは、{% data variables.product.prodname_desktop %} を使って Git リポジトリで作業する手順を一通り案内します。 {% data variables.product.prodname_desktop %} は、コマンドライン上でテキストコマンドを使うのではなく、ビジュアルインターフェースを使って、あなたの {% data variables.product.prodname_dotcom_the_website %} ワークフローを拡張し簡略化します。 このガイドが終わるまでに、{% data variables.product.prodname_desktop %} でリポジトリを作成し、リポジトリで変更を行い、{% data variables.product.prodname_dotcom_the_website %} または {% data variables.product.prodname_ghe_server %} に変更を公開することになります。

{% data variables.product.prodname_desktop %} をダウンロードし、{% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} にサインインした後は、チュートリアルリポジトリを作成およびクローンできます。 チュートリアルは、エディタのインストール、コミットの作成、{% data variables.product.prodname_dotcom_the_website %} へのプッシュ、プルリクエストの作成など、Git および {% data variables.product.prodname_dotcom %} で作業するための基本を紹介します。 チュートリアルは、{% data variables.product.prodname_desktop %} にリポジトリが存在しない状態である限り利用できます。

### ステップ 1. {% data variables.product.prodname_desktop %} のインストールとサインイン

1. {% data variables.product.desktop_link %} から {% data variables.product.prodname_desktop %} をダウンロードします。 {% data variables.product.prodname_desktop %} は、 Windows および macOS の最新バージョンをサポートしています。 お手持ちのオペレーティングシステムにインストールする具体的な方法の詳細は「[Installing {% data variables.product.prodname_desktop %} をインストールする](/desktop/getting-started-with-github-desktop/installing-github-desktop)」を参照してください。

2. {% data variables.product.prodname_desktop %} を起動し、画面に表示される手順に従って {% data variables.product.product_name %} アカウントにサインインします。 [Configure Git] ステップが表示されるので、そこで名前とメールアドレスを設定してください。 コミットが {% data variables.product.product_name %} アカウントに確実に関連付けられるようにするため、あなたの {% data variables.product.product_name %} アカウントに関連付けられたメールアドレスを使います。 コミットの属性付けに関する詳細は「[コミットメールアドレスを設定する](/articles/setting-your-commit-email-address)」を参照してください。

### ステップ 2. 新しいリポジトリの作成

[Let's get started!] ビューが表示され、チュートリアルリポジトリの作成とクローン、既存のリポジトリをクローン、新しいリポジトリの作成、既存のリポジトリの追加を選択できます。

#### チュートリアルリポジトリの作成とクローン

1. [**Create a tutorial repository and clone it**] をクリックします。 ![[Create and clone a tutorial repository] ボタン](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. チュートリアルのプロンプトに従います。

#### 新しいリポジトリの作成

1. [**Create a New Repository on your Hard Drive...**] をクリックします。 ![新しいリポジトリの作成](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. 新しいリポジトリを作成するには、以下のフィールドに入力します: ![リポジトリの作成オプション](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - [Name] は、ローカルと {% data variables.product.product_name %} の両方で使う、リポジトリの名前を定義します。
   - [Description] はオプションのフィールドで、リポジトリの目的に関する情報を提供するために使うことができます。
   - [Local path] は、お手元のコンピューターにおけるリポジトリの場所を設定します。 デフォルトでは、{% data variables.product.prodname_desktop %} は _Documents_ フォルダの中に_GitHub_ フォルダを作成して、そこにリポジトリを保存しますが、保存するフォルダは任意の場所に設定可能です。 新しいリポジトリは、選択した場所の中のフォルダになります。 たとえば、リポジトリに `Tutorial` と名付けた場合、選択したローカルパスのフォルダの中に _Tutorial_ という名前のフォルダが作成されます。 {% data variables.product.prodname_desktop %} は、次に新しいリポジトリをクローンするか作成するときに、選択した場所を記憶します。
   - [**Initialize this repository with a README**] は、最初のコミットを _README.md_ ファイル付きで作成します。 README は、人々がプロジェクトの目的を理解するために役立つので、これを選択して、README に役立つ情報を記載することをおすすめします。 {% data variables.product.product_name %} でリポジトリにアクセスした人は、まず README を読んで、そのプロジェクトについて知ります。 詳細は「[README について](/articles/about-readmes)」を参照してください。
   - [**Git ignore**] ドロップダウンメニューは、バージョン管理で保存したくない、ローカルリポジトリ内で無視するファイルを指定するためのカスタムファイルを追加します。 特定の言語やフレームワークを使っている場合、利用できるリストからオプションを選択できます。 まだ始めたばかりの場合は、この選択について無視して構いません。 詳細は「[ファイルを無視する](/articles/ignoring-files)」を参照してください。
   - [**License**] ドロップダウンメニューは、リポジトリの _LICENSE_ ファイルにオープンソースライセンスを追加します。 ライセンスをすぐに追加する必要はありません。 利用可能なオープンソースライセンスと、それらをリポジトリに追加する方法についての詳細は「[リポジトリのライセンス](/articles/licensing-a-repository)」を参照してください。
3. [**Create repository**] をクリックします。

### ステップ 3. {% data variables.product.prodname_desktop %} を探索する

リポジトリを作成したので、画面上部にファイルメニューが表示されます。 この画面で、{% data variables.product.prodname_desktop %} の設定や実行可能なアクションにアクセスできます。 作業の効率化のため、ほとんどのアクションにはキーボードショートカットも設定されています。 For a full list of keyboard shortcuts, see "[Keyboard shortcuts](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)."

1. 以下のメニューは、{% data variables.product.prodname_desktop %} におけるリポジトリの現在の状態を示すバーです:
    - [**Current repository**] では、現在作業中のリポジトリ名が表示されます。 [**Current repository**] をクリックすると、{% data variables.product.prodname_desktop %} の別のリポジトリに切り替えることができます。
    - [**Current branch**] では、作業中のブランチ名が表示されます。 [**Current branch**] をクリックすると、リポジトリ内のすべてのブランチの表示、別のブランチへの切り替え、新しいブランチの作成ができます。 リポジトリにプルリクエストを作成すると、[**Current branch**] をクリックしてプルリクエストを表示することもできます。
    - [**Publish repository**] が表示されるのは、まだリポジトリを {% data variables.product.product_name %} に公開していないためです。これについては、次のステップで扱います。

  ![GitHub Desktop を探索する](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

2. 左サイドバーには、[**Changes**] ビューと [**History**] ビューが表示されています。

    - [**Changes**] ビューは、現在のブランチで変更を行い、まだローカルリポジトリにコミットしていないファイルが表示されます。 ビューの下部には、[Summary] および [Description] テキストボックスと、[**Commit to master**] ボタンもあります。 これが、新しい変更をコミットする場所です。 [**Commit**] ボタンは、変更をどのブランチにコミットしようとしているのかを知らせます。 ![コミットエリア](/assets/images/help/desktop/getting-started-guide/commit-area.png)

    - [**History**] ビューには、リポジトリの現在のブランチにおける以前のコミットが表示されます。 リポジトリを作成したときに、{% data variables.product.prodname_desktop %} によって作成された「最初のコミット」が表示されているはずです。 そのコミットの右側に、リポジトリを作成したときのオプションによっては、_.gitattributes_、_.gitignore_、_LICENSE_、_README_ ファイルが表示されているかもしれません。 各ファイルをクリックすると、そのファイルの diff が表示できます。これは、コミットでファイルに行った変更を示すものです。 diff には、ファイル全体の内容ではなく、変更を行った部分のみが表示されます。 ![[History] ビュー](/assets/images/help/desktop/getting-started-guide/history-view.png)

### ステップ 4. リポジトリの {% data variables.product.product_name %} へのプッシュ

現在のところ、あなたのリポジトリはお手元のコンピューターにのみ存在しており、そのリポジトリにアクセスできるのはあなただけです。 リポジトリを {% data variables.product.product_name %} に公開することで、同じプロジェクトに属する複数のコンピューターやチームメンバー間で同期を保つことができます。 リポジトリを公開するには、{% data variables.product.product_name %} にプッシュします。そうすると、{% data variables.product.prodname_dotcom_the_website %} でも利用できるようになります。

1. [**Publish repository**] をクリックします。 ![[Publish repository]](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
   - おなじみのフィールドがいくつか表示されます。 [Name] と [Description] は、リポジトリを作成したときに入力したものと一致します。
   - [**Keep this code private**] というオプションが表示されます。 {% data variables.product.product_name %} の他のユーザに、コードを公にしたくない場合はこのオプションを選択します。
   - [**Organization**] ドロップダウンメニューが表示されている場合があります。これは、{% data variables.product.product_name %} であなたが所属する特定の Organization にリポジトリを公開するためのものです。 まだ Organization のメンバーでない場合も、何の問題もありません。 ![[Publish repository] のステップ](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
2. [**Publish repository**] をクリックします。
3. {% data variables.product.prodname_desktop %} から {% data variables.product.prodname_dotcom_the_website %} のリポジトリにアクセスできます。 ファイルメニューで、[**Repository**] をクリックしてから [**View on GitHub**] をクリックしてください。 デフォルトブラウザで、リポジトリに直接移動します。

これでリポジトリが公開されました。{% data variables.product.prodname_desktop %} に戻って、ローカルリポジトリにもっと変更を行いましょう。 まず、デフォルトのテキストエディタを設定する方法を説明します。

### ステップ 5. テキストエディタの設定

開発環境の設定にかける時間を節約するために、{% data variables.product.prodname_desktop %} から直接、多くのテキストエディタと統合開発環境 (IDE) を起動できます。 {% data variables.product.prodname_desktop %} のリポジトリから、お好みのテキストエディタでプロジェクトフォルダをシームレスに開けます。

1. [**File**] をクリックし、[**Options**] をクリックしてから、[**Advanced**] をクリックします。
2. [**External editor**] ドロップダウンメニューで、リストからテキストエディタを選択します。 インストール済みの全てのテキストエディタがリストに表示されるはずです。 エディタが何も表示されない場合、 [Atom](https://atom.io) などのサポートされているエディタをインストールしてください。 サポートされているエディタの一覧については、{% data variables.product.prodname_desktop %} リポジトリの[[Open External Editor] の統合](https://github.com/desktop/desktop/blob/development/docs/technical/editor-integration.md#windows)を参照してください。 ![外部エディタ](/assets/images/help/desktop/mac-editor-menu.png)
3. 新しくエディタをインストールした際は、[**External editor**] ドロップダウンメニューでエディタを使えるようにするため、{% data variables.product.prodname_desktop %} を再起動します。

### ステップ 6. 変更、変更のコミット、変更のプッシュ

デフォルトのエディタが設定でき、いよいよ準備が整いました。それではプロジェクトに変更を行って、リポジトリに最初のコミットを作成しましょう。

1. {% data variables.product.prodname_desktop %} で外部エディタを起動するには、[**Repository**] をクリックしてから[**Open in <em>EDITOR</em>**] をクリックします。 ![[Open in editor]](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. 事前に作成した _README.md_ ファイルに変更を行うことから始めましょう。 何をするのか、なぜ役立つのかなどの、プロジェクトに関する情報を追加します。 これが、プロジェクトに参加する人との最初のやりとりに使われるものであることを念頭におきましょう。 これで最初のコミットを行う準備ができました。
3. テキストエディタから {% data variables.product.prodname_desktop %} に戻り、[**Changes**] タブに移動します。 ファイルのリストに、_README.md_ が表示されているはずです。 _README.md_ ファイルの隣についているチェックマークは、ファイルに行った変更が、コミットの一部になることを示しています。 今後、複数のファイルに変更を行って、そのうちの一部のファイルのみの変更をコミットしたい場合があるかもしれません。 {% data variables.product.prodname_desktop %} では、コミットしたい特定の変更を選ぶことができます。 ![変更を表示する](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. [**Changes**] リストの下に、コミットメッセージを入力します。 プロフィール画像の右側で、コミットについて簡潔な説明を入力します。 ここでは _README.md_ ファイルを変更するので、「プロジェクトの目的について情報を追加する」などがコミットの要約として良いかもしれません。 要約の下には、[Description] テキストフィールドが表示されています。ここには、コミットの変更について、もっと長い内容を入力できます。これは、プロジェクトの履歴を振り返ったり、変更の理由を理解したりするために役立ちます。 今は _README.md_ ファイルの基本的な更新を行っているところなので、この内容は飛ばしてもかまいません。 ![コミットメッセージ](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. [**Commit to master**] をクリックします。 コミットのボタンは、現在のブランチを表示します。現在の例では `master` になり、コミットしたいブランチにコミットすることができます。 ![[Commit to master]](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. 変更を {% data variables.product.product_name %} のリモートリポジトリにプッシュするには、[**Push origin**] をクリックします。 ![[Push origin]](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
   - {% data variables.product.product_name %} にリポジトリを公開したときに使った [**Publish**] ボタンを覚えていますか。 そのボタンが [`Push origin`] に変わって、右に `1` と表示されているはずです。これは、{% data variables.product.product_name %} にプッシュしていないコミットが 1 つあることを示しています。
   - [**Push origin**] の「origin」とは、`origin` というリモートに変更をプッシュしようとしていることを示しています。この例では、{% data variables.product.prodname_dotcom_the_website %} にあるプロジェクトのリポジトリです。 {% data variables.product.product_name %} に何か新しいコミットをプッシュするまで、お手元のコンピューターにあるプロジェクトのリポジトリと、{% data variables.product.prodname_dotcom_the_website %} にあるプロジェクトのリポジトリには違いがあります。 これにより、作業はローカルで行って、準備ができた場合にのみ {% data variables.product.prodname_dotcom_the_website %} に作業をプッシュすることができます。
7. [**Changes**] タブの隣にあるオープンなスペースに、次に行うことについての提案が表示されてています。 {% data variables.product.product_name %} にあるリポジトリをブラウザで開くには、[**View on GitHub**] をクリックします。 ![[View on GitHub]](/assets/images/help/desktop/getting-started-guide/view-on-github.png)
8. ブラウザで、[**2 commits**] をクリックします。 {% data variables.product.product_name %} にあるリポジトリの、コミットのリストが表示されます。 最初のコミットは、つい先ほど {% data variables.product.prodname_desktop %} で行ったコミットのはずです。 ![2 つのコミットをクリック](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### おわりに

おめでとうございます。 ここまでで、リポジトリを作成し、そのリポジトリを {% data variables.product.product_name %} に公開し、コミットを行い、変更をプッシュしました。 ここまで行ってきたことは、{% data variables.product.product_name %} および {% data variables.product.prodname_desktop %} でできるあらゆることのうち、ごく基本的なことだけです。 この練習が、今後のさらなる探求につながれば幸いです。
