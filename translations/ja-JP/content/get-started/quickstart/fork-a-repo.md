---
title: リポジトリをフォークする
redirect_from:
  - /fork-a-repo
  - /forking
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: フォークとはリポジトリのコピーのことです。 リポジトリをフォークすることにより、オリジナルのプロジェクトに影響を与えることなく変更を自由にテストできます。
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
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

## フォークについて

Most commonly, forks are used to either propose changes to someone else's project to which you do not have write access, or to use someone else's project as a starting point for your own idea. You can fork a repository to create a copy of the repository and make changes without affecting the upstream repository. For more information, see "[Working with forks](/github/collaborating-with-issues-and-pull-requests/working-with-forks)."

### 他のユーザのプロジェクトへの変更を提案する

たとえば、フォークを使用して、バグの修正に関連する変更を提案できます。 Rather than logging an issue for a bug you have found, you can:

- リポジトリをフォークする。
- 修正する。
- プロジェクトのオーナーにプルリクエストを送信する。

### 他のユーザのプロジェクトを自分のアイディアの出発点として活用する。

オープンソースソフトウェアは、コードを共有することで、より優れた、より信頼性の高いソフトウェアを作成可能にするという考えに基づいています。 詳しい情報については、Open Source Initiative の「[Open Source Initiative について](http://opensource.org/about)」を参照してください。

{% data variables.product.product_location %} に関する Organization の開発作業にオープンソースの原則を適用する方法の詳細については、{% data variables.product.prodname_dotcom %} のホワイトペーパー「[インナーソース入門](https://resources.github.com/whitepapers/introduction-to-innersource/)」を参照してください。

{% ifversion fpt or ghes or ghec %}

他のユーザのプロジェクトのフォークからパブリックリポジトリを作成する際は、プロジェクトの他者との共有方法を定義するライセンスファイルを必ず含めてください。 詳しい情報については、choosealicense.com の「[オープンソースのライセンスを選択する](https://choosealicense.com/)」を参照してください。

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endif %}

## 必要な環境

If you have not yet, you should first [set up Git](/articles/set-up-git). [Git からの {% data variables.product.product_location %} への認証を設定](/articles/set-up-git#next-steps-authenticating-with-github-from-git)することも忘れないでください。

## リポジトリをフォークする

{% webui %}

上流または元のリポジトリへの変更を提案するために、プロジェクトをフォークする場合があります。 この場合、自分のフォークを上流のリポジトリと定期的に同期させるとよいでしょう。 これには、コマンドラインで Git を使用する必要があります。 先程フォークした同じ [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) リポジトリを使用して、上流リポジトリの設定を練習できます。

1. On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %}, navigate to the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository.
2. ページの右上にある [**Fork**] をクリックします。 ![[Fork] ボタン](/assets/images/help/repository/fork_button.jpg)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a fork of a repository, use the `gh repo fork` subcommand.

```shell
gh repo fork <em>repository</em>
```

To create the fork in an organization, use the `--org` flag.

```shell
gh repo fork <em>repository</em> --org "octo-org"
```

{% endcli %}

{% desktop %}
{% enddesktop %}

## Cloning your forked repository

Right now, you have a fork of the Spoon-Knife repository, but you do not have the files in that repository locally on your computer.

{% webui %}

1. On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %}, navigate to **your fork** of the Spoon-Knife repository.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
{% data reusables.command_line.change-current-directory-clone %}
4. `git clone` と入力し、前の手順でコピーした URL を貼り付けます。 次のようになるはずです (`YOUR-USERNAME` はあなたの {% data variables.product.product_name %} ユーザ名に置き換えてください):
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  ```

5. **Enter** を押します。 これで、ローカルにクローンが作成されます。
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>YOUR-USERNAME</em>/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a clone of your fork, use the `--clone` flag.

```shell
gh repo fork <em>repository</em> --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

{% enddesktop %}

## Configuring Git to sync your fork with the original repository

When you fork a project in order to propose changes to the original repository, you can configure Git to pull changes from the original, or upstream, repository into the local clone of your fork.

{% webui %}

1. On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_location %}{% endif %}, navigate to the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Change directories to the location of the fork you cloned.
    - ホームディレクトリに移動するには、`cd` とだけ入力します。
    - 現在のディレクトリのファイルとフォルダを一覧表示するには、`ls` と入力します。
    - 一覧表示されたディレクトリのいずれかにアクセスするには、`cd your_listed_directory` と入力します。
    - 1 つ上のディレクトリに移動するには、`cd ..` と入力します。
5. `git remote -v` と入力して **Enter** キーを押します。 You will see the current configured remote repository for your fork.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```

6. Type `git remote add upstream`, and then paste the URL you copied in Step 3 and press **Enter**. 次のようになります:
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
  ```

7. To verify the new upstream repository you have specified for your fork, type `git remote -v` again. フォークの URL が `origin` として、オリジナルのリポジトリの URL が `upstream` として表示されるはずです。
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```

これで、いくつかの Git コマンドでフォークと上流リポジトリの同期を維持できます。 For more information, see "[Syncing a fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)."

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To configure a remote repository for the forked repository, use the `--remote` flag.

```shell
gh repo fork <em>repository</em> --remote=true
```

To specify the remote repository's name, use the `--remote-name` flag.

```shell
gh repo fork <em>repository</em> --remote-name "main-remote-repo"
```

{% endcli %}

### Editing a fork

フォークには、次のような変更を加えることができます。

- **ブランチを作成する:** [*ブランチ*](/articles/creating-and-deleting-branches-within-your-repository/)によって、メインプロジェクトをリスクにさらすことなく新機能を構築したりアイデアを試したりできます。
- **プルリクエストをオープンする:** オリジナルのリポジトリにコントリビュートしたい場合は、[プルリクエスト](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)を送信して、オリジナルの作者に自分のフォークをリポジトリへプルするようリクエストを送信できます。

## フォークする他のリポジトリを見つける
リポジトリをフォークしてプロジェクトへのコントリビューションを開始しましょう。 {% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}You can browse [Explore](https://github.com/explore) to find projects and start contributing to open source repositories. 詳しい情報については、「[{% data variables.product.prodname_dotcom %} でオープンソースにコントリビュートする方法を見つける](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)」を参照してください。

{% endif %}

## 次のステップ

リポジトリをフォークし、フォークのクローンを練習し、上流リポジトリを構成しました。

* For more information about cloning the fork and syncing the changes in a forked repository from your computer, see "[Set up Git](/articles/set-up-git)."

* You can also create a new repository where you can put all your projects and share the code on {% data variables.product.prodname_dotcom %}. {% data reusables.getting-started.create-a-repository %}"

* Each repository in {% data variables.product.product_name %} is owned by a person or an organization. You can interact with users, repositories, and organizations by connecting and following them on {% data variables.product.product_name %}. {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
