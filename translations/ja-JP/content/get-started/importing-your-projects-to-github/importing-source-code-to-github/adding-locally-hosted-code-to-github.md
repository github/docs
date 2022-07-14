---
title: Adding locally hosted code to GitHub
intro: 'Learn how to add existing source code or repositories to {% data variables.product.product_name %} from the command line using {% data variables.product.prodname_cli %} or Git Commands. Then, share your code and invite others to work with you.'
redirect_from:
  - /articles/add-an-existing-project-to-github
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add locally hosted code
---

## About adding existing source code to {% data variables.product.product_name %}

If you have existing source code or repositories stored locally on your computer or private network you can add them to {% data variables.product.product_name %} by typing commands in a terminal. You can do this by typing Git commands directly, or by using {% data variables.product.prodname_cli %}.

{% data variables.product.prodname_cli %} は、コンピューターのコマンドラインから {% data variables.product.prodname_dotcom %} を使用するためのオープンソースツールです。 {% data variables.product.prodname_cli %} can simplify the process of adding an existing project to {% data variables.product.product_name %} using the command line. To learn more about {% data variables.product.prodname_cli %}, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

{% tip %}

**ヒント:** ポイントアンドクリック型のユーザインターフェースに慣れている場合は、プロジェクトを {% data variables.product.prodname_desktop %}で追加してみてください。 詳しい情報については *{% data variables.product.prodname_desktop %}ヘルプ* 中の[ローカルコンピュータから GitHub Desktop へのリポジトリの追加](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)を参照してください。

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Adding a local repository to {% data variables.product.product_name %} with {% data variables.product.prodname_cli %}

1. In the command line, navigate to the root directory of your project.
1. ローカルディレクトリを Git リポジトリとして初期化します。

    ```shell
    git init -b main
    ```

1. Stage and commit all the files in your project

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. To create a repository for your project on GitHub, use the `gh repo create` subcommand. When prompted, select **Push an existing local repository to GitHub** and enter the desired name for your repository. If you want your project to belong to an organization instead of your user account, specify the organization name and project name with `organization-name/project-name`.

1. Follow the interactive prompts. To add the remote and push the repository, confirm yes when asked to add the remote and push the commits to the current branch.

1. Alternatively, to skip all the prompts, supply the path to the repository with the `--source` flag and pass a visibility flag (`--public`, `--private`, or `--internal`). For example, `gh repo create --source=. --public`. Specify a remote with the `--remote` flag. To push your commits, pass the `--push` flag. For more information about possible arguments, see the [GitHub CLI manual](https://cli.github.com/manual/gh_repo_create).

## Adding a local repository to {% data variables.product.product_name %} using Git

{% mac %}

1. {% data variables.product.product_location %}上で[新しいリポジトリを作成](/repositories/creating-and-managing-repositories/creating-a-new-repository)します。 エラーを避けるため、新しいリポジトリは*README*、ライセンス、あるいは `gitignore` で初期化しないでください。 これらのファイルは、プロジェクトを {% data variables.product.product_name %}にプッシュした後で追加できます。 ![[Create New Repository] ドロップダウン](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. ワーキングディレクトリをローカルプロジェクトに変更します。
4. ローカルディレクトリを Git リポジトリとして初期化します。
  ```shell
  $ git init -b main
  ```
5. ファイルを新しいローカルリポジトリに追加します。 これで、それらのファイルが最初のコミットに備えてステージングされます。
  ```shell
  $ git add .
  # ローカルリポジトリにファイルを追加し、コミットに備えてステージします。 {% data reusables.git.unstage-codeblock %}
  ```
6. ローカルリポジトリでステージングしたファイルをコミットします。
  ```shell
  $ git commit -m "First commit"
  # 追跡された変更をコミットし、リモートリポジトリへのプッシュに備えます。 {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. At the top of your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}'s Quick Setup page, click {% octicon "clippy" aria-label="The copy to clipboard icon" %} to copy the remote repository URL. ![リモートリポジトリの URL フィールドのコピー](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. ターミナルで、ローカルリポジトリがプッシュされる[リモートリポジトリの URL を追加](/github/getting-started-with-github/managing-remote-repositories)してください。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # 新しいリモートを設定する
  $ git remote -v
  # 新しいリモート URL を検証する
  ```
9. {% data variables.product.product_location %} へ、ローカルリポジトリの[変更をプッシュ](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)します。
  ```shell
  $ git push -u origin main
  # ローカルリポジトリの変更を、origin として指定したリモートリポジトリにプッシュする
  ```

{% endmac %}

{% windows %}

1. {% data variables.product.product_location %}上で[新しいリポジトリを作成](/articles/creating-a-new-repository)します。 エラーを避けるため、新しいリポジトリは*README*、ライセンス、あるいは `gitignore` で初期化しないでください。 これらのファイルは、プロジェクトを {% data variables.product.product_name %}にプッシュした後で追加できます。 ![[Create New Repository] ドロップダウン](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. ワーキングディレクトリをローカルプロジェクトに変更します。
4. ローカルディレクトリを Git リポジトリとして初期化します。
  ```shell
  $ git init -b main
  ```
5. ファイルを新しいローカルリポジトリに追加します。 これで、それらのファイルが最初のコミットに備えてステージングされます。
  ```shell
  $ git add .
  # ローカルリポジトリにファイルを追加し、コミットに備えてステージします。 {% data reusables.git.unstage-codeblock %}
  ```
6. ローカルリポジトリでステージングしたファイルをコミットします。
  ```shell
  $ git commit -m "First commit"
  # 追跡された変更をコミットし、リモートリポジトリへのプッシュに備えます。 {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. At the top of your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}'s Quick Setup page, click {% octicon "clippy" aria-label="The copy to clipboard icon" %} to copy the remote repository URL. ![リモートリポジトリの URL フィールドのコピー](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. コマンドプロンプトで、ローカルリポジトリのプッシュ先となる[リモートリポジトリの URL を追加](/github/getting-started-with-github/managing-remote-repositories)します。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # 新しいリモートを設定する
  $ git remote -v
  # 新しいリモート URL を検証する
  ```
9. {% data variables.product.product_location %} へ、ローカルリポジトリの[変更をプッシュ](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)します。
  ```shell
  $ git push origin main
  # ローカルリポジトリの変更を、origin として指定したリモートリポジトリにプッシュする
  ```

{% endwindows %}

{% linux %}

1. {% data variables.product.product_location %}上で[新しいリポジトリを作成](/articles/creating-a-new-repository)します。 エラーを避けるため、新しいリポジトリは*README*、ライセンス、あるいは `gitignore` で初期化しないでください。 これらのファイルは、プロジェクトを {% data variables.product.product_name %}にプッシュした後で追加できます。 ![[Create New Repository] ドロップダウン](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. ワーキングディレクトリをローカルプロジェクトに変更します。
4. ローカルディレクトリを Git リポジトリとして初期化します。
  ```shell
  $ git init -b main
  ```
5. ファイルを新しいローカルリポジトリに追加します。 これで、それらのファイルが最初のコミットに備えてステージングされます。
  ```shell
  $ git add .
  # ローカルリポジトリにファイルを追加し、コミットに備えてステージします。 {% data reusables.git.unstage-codeblock %}
  ```
6. ローカルリポジトリでステージングしたファイルをコミットします。
  ```shell
  $ git commit -m "First commit"
  # 追跡された変更をコミットし、リモートリポジトリへのプッシュに備えます。 {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. At the top of your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}'s Quick Setup page, click {% octicon "clippy" aria-label="The copy to clipboard icon" %} to copy the remote repository URL. ![リモートリポジトリの URL フィールドのコピー](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. ターミナルで、ローカルリポジトリがプッシュされる[リモートリポジトリの URL を追加](/github/getting-started-with-github/managing-remote-repositories)してください。
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # 新しいリモートを設定する
  $ git remote -v
  # 新しいリモート URL を検証する
  ```
9. {% data variables.product.product_location %} へ、ローカルリポジトリの[変更をプッシュ](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)します。
  ```shell
  $ git push origin main
  # ローカルリポジトリの変更を、origin として指定したリモートリポジトリにプッシュする
  ```

{% endlinux %}

## 参考リンク

- [リポジトリへのファイルの追加](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)
