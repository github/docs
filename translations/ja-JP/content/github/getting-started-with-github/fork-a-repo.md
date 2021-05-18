---
title: リポジトリをフォークする
redirect_from:
  - /fork-a-repo/
  - /forking/
  - /articles/fork-a-repo
intro: フォークとはリポジトリのコピーのことです。 リポジトリをフォークすることにより、オリジナルのプロジェクトに影響を与えることなく変更を自由にテストできます。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

### フォークについて

一般的にフォークは、他のユーザのプロジェクトへの変更を提案するため、あるいは他のユーザのプロジェクトを自分のアイディアの出発点として活用するために使用します。

#### 他のユーザのプロジェクトへの変更を提案する

たとえば、フォークを使用して、バグの修正に関連する変更を提案できます。 見つけたバグから Issue をログするのではなく、以下のことができます:

- リポジトリをフォークする。
- 修正する。
- プロジェクトのオーナーにプルリクエストを送信する。

#### 他のユーザのプロジェクトを自分のアイディアの出発点として活用する。

オープンソースソフトウェアは、コードを共有することで、より優れた、より信頼性の高いソフトウェアを作成可能にするという考えに基づいています。 詳しい情報については、Open Source Initiative の「[Open Source Initiative について](http://opensource.org/about)」を参照してください。

{% data variables.product.product_location %} に関する Organization の開発作業にオープンソースの原則を適用する方法の詳細については、{% data variables.product.prodname_dotcom %} のホワイトペーパー「[インナーソース入門](https://resources.github.com/whitepapers/introduction-to-innersource/)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

他のユーザのプロジェクトのフォークからパブリックリポジトリを作成する際は、プロジェクトの他者との共有方法を定義するライセンスファイルを必ず含めてください。 詳しい情報については、choosealicense.com の「[オープンソースのライセンスを選択する](https://choosealicense.com/)」を参照してください。

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endif %}

{% note %}

**注釈**: {% data reusables.repositories.desktop-fork %}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**ヒント**: {% data variables.product.prodname_cli %} を使用してリポジトリをフォークすることもできます。 詳しい情報については、{% data variables.product.prodname_cli %} ドキュメントの「[`gh repo fork`](https://cli.github.com/manual/gh_repo_fork)」を参照してください。

{% endtip %}
{% endif %}

### リポジトリのフォークの例

リポジトリのフォークは、2 つのステップからなるシンプルなプロセスです。 練習用のリポジトリを用意しましたので、ぜひお使いください。

1. {% data variables.product.product_location %} で、[octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) リポジトリに移動します。
2. ページの右上にある [**Fork**] をクリックします。 ![[Fork] ボタン](/assets/images/help/repository/fork_button.jpg)

### フォークを同期させる

上流または元のリポジトリへの変更を提案するために、プロジェクトをフォークする場合があります。 この場合、自分のフォークを上流のリポジトリと定期的に同期させるとよいでしょう。 これには、コマンドラインで Git を使用する必要があります。 先程フォークした同じ [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) リポジトリを使用して、上流リポジトリの設定を練習できます。

#### ステップ 1: Git をセットアップする

まだ設定していない場合は、まず [Git を設定](/articles/set-up-git)します。 [Git からの {% data variables.product.product_location %} への認証を設定](/articles/set-up-git#next-steps-authenticating-with-github-from-git)することも忘れないでください。

#### ステップ 2: フォークのローカルクローンを作成する

今、Spoon-Knife リポジトリのフォークがありますが、お使いのコンピュータにはそのリポジトリ内のファイルはありません。 コンピューター上でローカルにフォークのクローンを作成しましょう。

1. On

{% data variables.product.product_name %} で、Spoon-Knife リポジトリの**自分のフォーク**に移動します。
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

Spoon-Knife リポジトリのフォークのローカルのコピーができました。

#### ステップ 3: Git を構成して、自分のフォークとオリジナルの Spoon-Knife リポジトリを同期させる

オリジナルのリポジトリへの変更を提案するためにプロジェクトをフォークする場合は、オリジナルまたは上流のリポジトリから、フォークのローカルのクローンへと、変更をプルするように Git を構成できます。

1. On

{% data variables.product.product_name %} で、[octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) リポジトリに移動します。
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
4. ディレクトリを、「[ステップ 2: フォークのローカルクローンを作成する](#step-2-create-a-local-clone-of-your-fork)」でクローンしたフォークの場所に変更します。
    - ホームディレクトリに移動するには、`cd` とだけ入力します。
    - 現在のディレクトリのファイルとフォルダを一覧表示するには、`ls` と入力します。
    - 一覧表示されたディレクトリのいずれかにアクセスするには、`cd your_listed_directory` と入力します。
    - 1 つ上のディレクトリに移動するには、`cd ..` と入力します。
5. `git remote -v` と入力して **Enter** キーを押します。 フォーク用に現在構成されているリモートリポジトリが表示されます。
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  ```

6. `git remote add upstream` と入力し、ステップ 2 でコピーした URL を貼り付けて **Enter** キーを押します。 次のようになります:
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
  ```

7. フォーク用に指定した新しい上流リポジトリを確認するには、再度 `git remote -v` と入力します。 フォークの URL が `origin` として、オリジナルのリポジトリの URL が `upstream` として表示されるはずです。
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_FORK</em>.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/<em>ORIGINAL_OWNER</em>/<em>ORIGINAL_REPOSITORY</em>.git (push)
  ```

これで、いくつかの Git コマンドでフォークと上流リポジトリの同期を維持できます。 詳細は「[フォークを同期する](/articles/syncing-a-fork)」を参照してください。

#### 次のステップ

フォークには、次のような変更を加えることができます。

- **ブランチを作成する:** [*ブランチ*](/articles/creating-and-deleting-branches-within-your-repository/)によって、メインプロジェクトをリスクにさらすことなく新機能を構築したりアイデアを試したりできます。
- **プルリクエストをオープンする:** オリジナルのリポジトリにコントリビュートしたい場合は、[プルリクエスト](/articles/about-pull-requests)を送信して、オリジナルの作者に自分のフォークをリポジトリへプルするようリクエストを送信できます。

### フォークする他のリポジトリを見つける

リポジトリをフォークしてプロジェクトへのコントリビューションを開始しましょう。 {% data reusables.repositories.you-can-fork %}

{% if currentVersion == "free-pro-team@latest" %}[Explore](https://github.com/explore) でプロジェクトを探してオープンソースのリポジトリへのコントリビューションを開始できます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} でオープンソースにコントリビュートする方法を見つける](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)」を参照してください。

{% endif %}

### おめでとうございます

リポジトリをフォークし、フォークのクローンを練習し、上流リポジトリを構成しました。 次に何をしたいですか?

- [Git をセットアップする](/articles/set-up-git)
- 「[リポジトリを作成する](/articles/create-a-repo)」
- **リポジトリのフォーク**
- [交流する](/articles/be-social)
- {% data reusables.support.connect-in-the-forum-bootcamp %}
