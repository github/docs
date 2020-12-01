---
title: GitHub Desktop を使ってみる
intro: '{% data variables.product.prodname_desktop %} のセットアップ、認証、構成して、自分のマシンから直接プロジェクトに貢献できるようにする方法を学びます。'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

### はじめに
{% data variables.product.prodname_desktop %} は、コマンドラインや Web ブラウザの代わりに GUI を使用して {% data variables.product.prodname_dotcom %} とやり取りできるようにするアプリケーションです。 {% data variables.product.prodname_desktop %} は、あなたとあなたの Team が Git および {% data variables.product.prodname_dotcom %} とベストプラクティスを使用して共同開発することを推奨します。 {% data variables.product.prodname_desktop %} を使用すると、変更を視覚的に確認して、デスクトップからほとんどの Git コマンドを完了できます。 {% data variables.product.prodname_desktop %} を使用してリモートリポジトリにプッシュ、プル、およびクローンを作成し、コミットの関連付けやプルリクエストの作成などのコラボレーションツールを使用できます。

このガイドは、アプリケーションのセットアップ、アカウントの認証、基本設定の構成、および {% data variables.product.prodname_desktop %} を使用したプロジェクト管理の基本を紹介しており、{% data variables.product.prodname_desktop %} の使用開始の際に役立ちます。 このガイドを実行すると、{% data variables.product.prodname_desktop %} を使用してプロジェクトでコラボレーションを行い、リモートリポジトリに接続できるようになります。

{% data variables.product.prodname_desktop %} を始める前に、Git と {% data variables.product.prodname_dotcom %} の基本を理解しておくと便利です。 詳しい情報については、次の記事を参照してください。

- "[Learning about Git](/github/using-git/learning-about-git)"
- "[Learning about {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Getting started with {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"

{% data variables.product.prodname_desktop %} is an open source project. You can see the roadmap, contribute to the project, or open an issue to provide feedback or feature requests. For more information, see the [`desktop/desktop`](https://github.com/desktop/desktop) repository.

### Part 1: Installing and authenticating
{% data variables.product.prodname_desktop %} は、サポートされている任意のオペレーティングシステムにインストールできます。 For more information, see "[Supported operating systems](/desktop/getting-started-with-github-desktop/supported-operating-systems)."

To install {% data variables.product.prodname_desktop %}, visit the download page for [{% data variables.product.prodname_desktop %}](https://desktop.github.com/). 詳しい情報については「[{% data variables.product.prodname_desktop %}のインストール](/desktop/installing-and-configuring-github-desktop/installing-github-desktop)」を参照してください。

After you have installed {% data variables.product.prodname_desktop %}, you can authenticate the application with your account on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}. Authenticating allows you to connect to remote repositories on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}.

{% mac %}

1. Before you can authenticate to {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, you will need an account. For more information about creating an account, see "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/github/getting-started-with-github/signing-up-for-a-new-github-account)" or contact your {% data variables.product.prodname_enterprise %} site administrator.

2. In the {% data variables.product.prodname_desktop %} drop-down menu, click **Preferences**. In the preferences window, click **Accounts** and follow the steps to sign in. For more information on authenticating, see "[Authenticating to {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)." ![GitHubのサインインボタン](/assets/images/help/desktop/mac-sign-in-github.png)

{% endmac %}

{% windows %}

1. Before you can authenticate to {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, you will need an account. For more information about creating an account, see "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/github/getting-started-with-github/signing-up-for-a-new-github-account)" or contact your {% data variables.product.prodname_enterprise %} site administrator.

2. In the File drop-down menu, click **Options**. In the options window, click **Accounts** and follow the steps to sign in. For more information on authenticating, see "[Authenticating to {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)." ![GitHubのサインインボタン](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

### Part 2: Configuring and customizing {% data variables.product.prodname_desktop %}
After you install {% data variables.product.prodname_desktop %}, you can configure and customize the app to best suit your needs.

{% mac %}

You can connect or remove accounts on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, choose a default text editor or shell, edit your Git configuration, change the appearance of {% data variables.product.prodname_desktop %}, customize system dialogs, and set privacy preferences in the {% data variables.product.prodname_desktop %} Preferences window. 詳しい情報については、「[基本的な設定](/desktop/getting-started-with-github-desktop/configuring-basic-settings)」を参照してください。

  ![The basic settings in the Preference window](/assets/images/help/desktop/mac-appearance-tab-themes.png)

{% endmac %}

{% windows %}

You can connect or remove accounts on {% data variables.product.prodname_dotcom %} or {% data variables.product.prodname_enterprise %}, choose a default text editor or shell, edit your Git configuration, change the appearance of {% data variables.product.prodname_desktop %}, customize system dialogs, and set privacy preferences in the {% data variables.product.prodname_desktop %} Options window. 詳しい情報については、「[基本的な設定](/desktop/getting-started-with-github-desktop/configuring-basic-settings)」を参照してください。

  ![The basic settings in the Options window](/assets/images/help/desktop/windows-appearance-tab-themes.png)

{% endwindows %}

### Part 3: Contributing to projects with {% data variables.product.prodname_desktop %}
After installing, authenticating, and configuring the app, you are ready to start using {% data variables.product.prodname_desktop %}. You can create, add, or clone repositories and use {% data variables.product.prodname_desktop %} to manage contributions to your repositories.

#### Creating, adding, and cloning repositories
You can create a new repository by selecting the File menu and clicking **New repository...**. For more information, see "[Creating your first repository using {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop)."

You can add a repository from your local computer by selecting the File menu and clicking **Add Local Repository...**. For more information, see "[Adding a repository from your local computer to {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop)."

You can clone a repository from {% data variables.product.prodname_dotcom %} by selecting the File menu and clicking **Clone Repository...**. For more information, see "[Cloning and Forking Repositories from {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)."

{% mac %}

  ![The File menu options for creating, adding, and cloning repositories](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

  ![The File menu options for creating, adding, and cloning repositories](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

#### ブランチでの変更
You can use {% data variables.product.prodname_desktop %} to create a branch of a project. Branches isolate your development work from other branches in the repository, so that you can safely experiment with changes. 詳しい情報については、「[ブランチを管理する](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)」を参照してください。

  ![The New Branch button](/assets/images/help/desktop/new-branch-button-mac.png)

After you make changes to a branch, you can review them in {% data variables.product.prodname_desktop %} and make a commit to keep track of your changes. 詳しい情報については「[プロジェクトに対する変更のコミットとレビュー](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)」を参照してください。

  ![Viewing and making commits](/assets/images/help/desktop/commit-button.png)

If you want to access your changes remotely or share them with other people, you can push your commits to {% data variables.product.prodname_dotcom %}. 詳しい情報については、「[{% data variables.product.prodname_dotcom %} への変更をプッシュする](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)」を参照してください。

#### Collaborating with {% data variables.product.prodname_desktop %}
You can use {% data variables.product.prodname_desktop %} to create issues or pull requests to collaborate on projects with other people. Issues help you keep track of ideas and discuss possible changes to projects. Pull requests let you share your proposed changes with others, receive feedback, and merge changes into a project. For more information, see "[Creating an issue or pull request](/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request)."''

You can view your own or your collaborator's pull requests in {% data variables.product.prodname_desktop %}. Viewing a pull request in {% data variables.product.prodname_desktop %} lets you see any proposed changes and make additional changes by opening the project's files and repositories in your default text editor. For more information, see "[Viewing a pull request in {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop)."

#### Keeping your local repository in sync
When you make changes to your local repositories or when other people make changes to the remote repositories, you will need to sync your local copy of the project with the remote repository. {% data variables.product.prodname_desktop %} can keep your local copy of a project in sync with the remote version by pushing and pulling commits. 詳しい情報については、「[ブランチを同期する](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)」を参照してください。

### 参考リンク
- "[Installing and authenticating to {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/installing-and-authenticating-to-github-desktop)"
- "[Contributing and collaborating using {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop)"
