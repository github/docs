---
title: GitHub Desktop を使った最初のリポジトリ作成方法
shortTitle: 最初のリポジトリを作成する
intro: '{% data variables.product.prodname_desktop %} を使って、コマンドラインを使用せずに Git リポジトリを作成および管理できます。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  free-pro-team: '*'
---

### はじめに
{% data variables.product.prodname_desktop %} は、コマンドライン上でテキストコマンドを使うのではなく、ビジュアルインターフェースを使って、あなたの {% data variables.product.prodname_dotcom_the_website %} ワークフローを拡張し簡略化します。 このガイドをとおして、{% data variables.product.prodname_desktop %} を使用してリポジトリを作成し、リポジトリに変更を加え、最後に変更を {% data variables.product.product_name %} に公開するところまでを行います。

{% data variables.product.prodname_desktop %} をインストールし、{% data variables.product.prodname_dotcom %} または {% data variables.product.prodname_enterprise %} にサインインした後、チュートリアルリポジトリを作成してクローンできます。 チュートリアルでは、テキストエディタのインストール、ブランチの作成、コミットの作成、{% data variables.product.prodname_dotcom_the_website %} へのプッシュ、プルリクエストの開始など、Gitと {% data variables.product.prodname_dotcom %} で作業するための基本をご紹介します。 チュートリアルは、{% data variables.product.prodname_desktop %} にリポジトリが未作成の場合に利用できます。

チュートリアルを最後まで完了することをお勧めしますが、新しいリポジトリを作成することで {% data variables.product.prodname_desktop %} を学ぶ場合は、このガイドで {% data variables.product.prodname_desktop %} を使用して Git で作業する方法を説明します。

### パート 1: {% data variables.product.prodname_desktop %} をインストールしてアカウントを認証する
You can install {% data variables.product.prodname_desktop %} on any supported operating system. After you install the app, you will need to sign in and authenticate your account on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %} before you can create and clone a tutorial repository.

For more information on installing and authenticating, see "[Setting up {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)."

### Part 2: Creating a new repository
If you do not have any repositories associated with {% data variables.product.prodname_desktop %}, you will see a "Let's get started!" view, where you can choose to create and clone a tutorial repository, clone an existing repository from the Internet, create a new repository, or add an existing repository from your hard drive. ![The Let's get started! screen](/assets/images/help/desktop/lets-get-started.png)

#### Creating and cloning a tutorial repository
We recommend that you create and clone a tutorial repository as your first project to practice using {% data variables.product.prodname_desktop %}.

1. [**Create a tutorial repository and clone it**] をクリックします。 ![[Create and clone a tutorial repository] ボタン](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Follow the prompts in the tutorial to install a text editor, create a branch, edit a file, make a commit, publish to {% data variables.product.prodname_dotcom %}, and open a pull request.

#### 新しいリポジトリの作成
If you do not wish to create and clone a tutorial repository, you can create a new repository.

1. [**Create a New Repository on your Hard Drive...**] をクリックします。 ![新しいリポジトリの作成](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Fill in the fields and select your preferred options. ![リポジトリの作成オプション](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - [Name] は、ローカルと {% data variables.product.product_name %} の両方で使う、リポジトリの名前を定義します。
   - [Description] はオプションのフィールドで、リポジトリの目的に関する情報を提供するために使うことができます。
   - [Local path] は、お手元のコンピューターにおけるリポジトリの場所を設定します。 デフォルトでは、{% data variables.product.prodname_desktop %} は _Documents_ フォルダの中に_GitHub_ フォルダを作成して、そこにリポジトリを保存しますが、保存するフォルダは任意の場所に設定可能です。 新しいリポジトリは、選択した場所の中のフォルダになります。 たとえば、リポジトリに `Tutorial` と名付けた場合、選択したローカルパスのフォルダの中に _Tutorial_ という名前のフォルダが作成されます。 {% data variables.product.prodname_desktop %} は、次に新しいリポジトリをクローンするか作成するときに、選択した場所を記憶します。
   - [**Initialize this repository with a README**] は、最初のコミットを _README.md_ ファイル付きで作成します。 README は、人々がプロジェクトの目的を理解するために役立つので、これを選択して、README に役立つ情報を記載することをおすすめします。 {% data variables.product.product_name %} でリポジトリにアクセスした人は、まず README を読んで、そのプロジェクトについて知ります。 詳細は「[README について](/articles/about-readmes)」を参照してください。
   - [**Git ignore**] ドロップダウンメニューは、バージョン管理で保存したくない、ローカルリポジトリ内で無視するファイルを指定するためのカスタムファイルを追加します。 If there's a specific language or framework that you'll be using, you can select an option from the available list. まだ始めたばかりの場合は、この選択について無視して構いません。 詳細は「[ファイルを無視する](/articles/ignoring-files)」を参照してください。
   - [**License**] ドロップダウンメニューは、リポジトリの _LICENSE_ ファイルにオープンソースライセンスを追加します。 ライセンスをすぐに追加する必要はありません。 利用可能なオープンソースライセンスと、それらをリポジトリに追加する方法についての詳細は「[リポジトリのライセンス](/articles/licensing-a-repository)」を参照してください。
3. [**Create repository**] をクリックします。

### Part 3: Exploring {% data variables.product.prodname_desktop %}
In the file menu at the top of the screen, you can access settings and actions that you can perform in {% data variables.product.prodname_desktop %}. 作業の効率化のため、ほとんどのアクションにはキーボードショートカットも設定されています。 For a full list of keyboard shortcuts, see "[Keyboard shortcuts](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)."

#### The {% data variables.product.prodname_desktop %} menu bar
At the top of the {% data variables.product.prodname_desktop %} app, you will see a bar that shows the current state of your repository.
  - [**Current repository**] では、現在作業中のリポジトリ名が表示されます。 [**Current repository**] をクリックすると、{% data variables.product.prodname_desktop %} の別のリポジトリに切り替えることができます。
  - [**Current branch**] では、作業中のブランチ名が表示されます。 [**Current branch**] をクリックすると、リポジトリ内のすべてのブランチの表示、別のブランチへの切り替え、新しいブランチの作成ができます。 リポジトリにプルリクエストを作成すると、[**Current branch**] をクリックしてプルリクエストを表示することもできます。
  - [**Publish repository**] が表示されるのは、まだリポジトリを {% data variables.product.product_name %} に公開していないためです。これについては、次のステップで扱います。 This section of the bar will change based on the status of your current branch and repository. Different context dependent actions will be available that let you exchange data between your local and remote repositories.

  ![GitHub Desktop を探索する](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

#### Changes and History
左サイドバーには、[**Changes**] ビューと [**History**] ビューが表示されています。 ![The Changes and History tabs](/assets/images/help/desktop/changes-and-history.png)

  - [**Changes**] ビューは、現在のブランチで変更を行い、まだローカルリポジトリにコミットしていないファイルが表示されます。 At the bottom, there is a box with "Summary" and "Description" text boxes and a **Commit to BRANCH** button. これが、新しい変更をコミットする場所です。 The **Commit to BRANCH** button is dynamic and will display which branch you're committing your changes to. ![コミットエリア](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - [**History**] ビューには、リポジトリの現在のブランチにおける以前のコミットが表示されます。 リポジトリを作成したときに、{% data variables.product.prodname_desktop %} によって作成された「最初のコミット」が表示されているはずです。 そのコミットの右側に、リポジトリを作成したときのオプションによっては、_.gitattributes_、_.gitignore_、_LICENSE_、_README_ ファイルが表示されているかもしれません。 各ファイルをクリックすると、そのファイルの diff が表示できます。これは、コミットでファイルに行った変更を示すものです。 diff には、ファイル全体の内容ではなく、変更を行った部分のみが表示されます。 ![[History] ビュー](/assets/images/help/desktop/getting-started-guide/history-view.png)

### Part 4: Publishing your repository to {% data variables.product.product_name %}
When you create a new repository, it only exists on your computer and you are the only one who can access the repository. You can publish your repository to {% data variables.product.product_name %} to keep it synchronized across multiple computers and allow other people to access it. To publish your repository, push your local changes to {% data variables.product.product_name %}.

1. Click **Publish repository** in the menu bar. ![[Publish repository]](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} automatically fills the "Name" and "Description" fields with the information you entered when you created the repository.
    - **Keep this code private** lets you control who can view your project. If you leave this option unselected, other users on {% data variables.product.product_name %} will be able to view your code. If you select this option, your code will not be publicly available.
    - The **Organization** drop-down menu, if present, lets you publish your repository to a specific organization that you belong to on {% data variables.product.product_name %}.

    ![[Publish repository] のステップ](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. **Publish Repository**ボタンをクリックします。
  3. {% data variables.product.prodname_desktop %} から {% data variables.product.prodname_dotcom_the_website %} のリポジトリにアクセスできます。 ファイルメニューで、[**Repository**] をクリックしてから [**View on GitHub**] をクリックしてください。 デフォルトブラウザで、リポジトリに直接移動します。

### Part 5: Making, committing, and pushing changes
Now that you've created and published your repository, you're ready to make changes to your project and start crafting your first commit to your repository.

1. To launch your external editor from within {% data variables.product.prodname_desktop %}, click **Repository**, then click **Open in <em>EDITOR</em>**. For more information, see "[Configuring a default editor](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)." ![[Open in editor]](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Make some changes to the _README.md_ file that you previously created. You can add information that describes your project, like what it does and why it is useful. When you are satisfied with your changes, save them in your text editor.
3. In {% data variables.product.prodname_desktop %}, navigate to the **Changes** view. ファイルのリストに、_README.md_ が表示されているはずです。 The checkmark to the left of the _README.md_ file indicates that the changes you've made to the file will be part of the commit you make. 今後、複数のファイルに変更を行って、そのうちの一部のファイルのみの変更をコミットしたい場合があるかもしれません。 If you click the checkmark next to a file, that file will not be included in the commit. ![変更を表示する](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. [**Changes**] リストの下に、コミットメッセージを入力します。 プロフィール画像の右側で、コミットについて簡潔な説明を入力します。 ここでは _README.md_ ファイルを変更するので、「プロジェクトの目的について情報を追加する」などがコミットの要約として良いかもしれません。 Below the summary, you'll see a "Description" text field where you can type a longer description of the changes in the commit, which is helpful when looking back at the history of a project and understanding why changes were made. 今は _README.md_ ファイルの基本的な更新を行っているところなので、この内容は飛ばしてもかまいません。 ![コミットメッセージ](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. Click **Commit to BRANCH NAME**. The commit button shows your current branch so you can be sure to commit to the branch you want. ![Commit to branch](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. 変更を {% data variables.product.product_name %} のリモートリポジトリにプッシュするには、[**Push origin**] をクリックします。 ![[Push origin]](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - The **Push origin** button is the same one that you clicked to publish your repository to {% data variables.product.product_name %}. This button changes contextually based on where you are at in the Git workflow. It should now say `Push origin` with a `1` next to it, indicating that there is one commit that has not been pushed up to {% data variables.product.product_name %}.
  - The "origin" in **Push origin** means that you are pushing changes to the remote called `origin`, which in this case is your project's repository on {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.product_name %} に何か新しいコミットをプッシュするまで、お手元のコンピューターにあるプロジェクトのリポジトリと、{% data variables.product.prodname_dotcom_the_website %} にあるプロジェクトのリポジトリには違いがあります。 This allows you to work locally and only push your changes to {% data variables.product.prodname_dotcom_the_website %} when you're ready.
7. In the window to the right of the **Changes** view, you'll see suggestions for actions you can do next. To open the repository on {% data variables.product.product_name %} in your browser, click **View on {% data variables.product.product_name %}**. ![Available actions](/assets/images/help/desktop/available-actions.png)
8. ブラウザで、[**2 commits**] をクリックします。 {% data variables.product.product_name %} にあるリポジトリの、コミットのリストが表示されます。 The first commit should be the commit you just made in {% data variables.product.prodname_desktop %}. ![2 つのコミットをクリック](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### おわりに
You've now created a repository, published the repository to {% data variables.product.product_name %}, made a commit, and pushed your changes to {% data variables.product.product_name %}. You can follow this same workflow when contributing to other projects that you create or collaborate on.

### 参考リンク
- "[Learning about Git](/github/using-git/learning-about-git)"
- "[Learning about {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Getting started with {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"
