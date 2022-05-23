---
title: リポジトリを作成する
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'To put your project up on {% data variables.product.prodname_dotcom %}, you will need to create a repository for it to live in.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## リポジトリの作成

{% ifversion fpt or ghec %}

オープンソースプロジェクトを含む、さまざまなプロジェクトを {% data variables.product.prodname_dotcom %} リポジトリに保存できます。 With open source projects, you can share code to make better, more reliable software. You can use repositories to collaborate with others and track your work. For more information, see "[About repositories](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)." To learn more about open source projects, visit [OpenSource.org](http://opensource.org/about).

{% elsif ghes or ghae %}

インナーソースプロジェクトを含め、さまざまなプロジェクトを {% data variables.product.product_name %} リポジトリに保存できます。 インナーソースを使用すると、コードを共有して、より優れた、より信頼性の高いソフトウェアを作成できます。 インナーソースの詳細については、{% data variables.product.company_short %} のホワイトペーパー「[インナーソース入門](https://resources.github.com/whitepapers/introduction-to-innersource/)」を参照してください。

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**メモ:** オープンソースプロジェクトのパブリックリポジトリを作成できます。 パブリックリポジトリを作成する際は、他のユーザにどのようにプロジェクトを共有してほしいのかを定義する[ライセンスファイル](https://choosealicense.com/)を含めるようにしてください。 {% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. リポジトリに、短くて覚えやすい名前を入力します。 たとえば、"hello-world" といった名前です。 ![リポジトリ名を入力するフィールド](/assets/images/help/repository/create-repository-name.png)
3. 必要な場合、リポジトリの説明を追加します。 たとえば、「{% data variables.product.product_name %} の最初のリポジトリ」などです。 ![リポジトリの説明を入力するフィールド](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

おめでとうございます。 最初のリポジトリ作成に成功し、初期設定として *README* ファイルが生成されました。

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. In the command line, navigate to the directory where you would like to create a local clone of your new project.
2. To create a repository for your project, use the `gh repo create` subcommand. When prompted, select **Create a new repository on GitHub from scratch** and enter the name of your new project. If you want your project to belong to an organization instead of to your personal account, specify the organization name and project name with `organization-name/project-name`.
3. Follow the interactive prompts. To clone the repository locally, confirm yes when asked if you would like to clone the remote project directory.
4. Alternatively, to skip the prompts supply the repository name and a visibility flag (`--public`, `--private`, or `--internal`). For example, `gh repo create project-name --public`. To clone the repository locally, pass the `--clone` flag.  For more information about possible arguments, see the [GitHub CLI manual](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## 最初の変更をコミットする

{% webui %}

*[コミット](/articles/github-glossary#commit)*とは、ある特定の時点における、あなたのプロジェクト内のすべてのファイルのスナップショットのようなものです。

上の例では、新しいリポジトリを作成すると同時に *README* ファイルを生成しました。 *README* ファイルは、プロジェクトの詳細を説明したり、プロジェクトのインストール方法や使い方などのドキュメンテーションを書き込んだりするためにふさわしい場所です。 *README* ファイルの内容は、リポジトリのフロントページに自動的に表示されます。

それでは、*README* ファイルに変更を加えてコミットしてみましょう。

1. リポジトリのファイル一覧にある、[***README.md***] をクリックします。 ![ファイル一覧にある README ファイル](/assets/images/help/repository/create-commit-open-readme.png)
2. ファイルの中身の上にある {% octicon "pencil" aria-label="The edit icon" %}をクリックします。
3. [**Edit file**] タブで、あなた自身に関する情報を入力します。 ![ファイル内の新しいコンテンツ](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
5. ファイルに加えた変更を確認します。 You will see the new content in green. ![ファイルプレビュービュー](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Now that you have created a project, you can start committing changes.

*README* ファイルは、プロジェクトの詳細を説明したり、プロジェクトのインストール方法や使い方などのドキュメンテーションを書き込んだりするためにふさわしい場所です。 *README* ファイルの内容は、リポジトリのフロントページに自動的に表示されます。 Follow these steps to add a *README* file.

1. In the command line, navigate to the root directory of your new project. (This directory was created when you ran the `gh repo create` command.)
1. Create a *README* file with some information about the project.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Enter `git status`. You will see that you have an untracked `README.md` file.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Stage and commit the file.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Push the changes to your branch.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## 次のステップ

*README* ファイルを持つ新しいリポジトリを作成し、{% data variables.product.product_location %}に最初のコミットを作成しました。

{% webui %}

* You can now clone a {% data variables.product.prodname_dotcom %} repository to create a local copy on your computer. From your local repository you can commit, and create a pull request to update the changes in the upstream repository. For more information, see "[Cloning a repository](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)" and "[Set up Git](/articles/set-up-git)."

{% endwebui %}

* You can find interesting projects and repositories on {% data variables.product.prodname_dotcom %} and make changes to them by creating a fork of the repository. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
