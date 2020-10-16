---
title: リポジトリを作成する
redirect_from:
  - /create-a-repo/
  - /articles/create-a-repo
intro: 'プロジェクトを {% data variables.product.product_location %} に保存するには、それを保存するためのリポジトリを作成する必要があります。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

オープンソースプロジェクトを含む、さまざまなプロジェクトを {% data variables.product.product_name %} リポジトリに保存できます。 [オープンソースプロジェクト](http://opensource.org/about)では、より優れた信頼性のあるソフトウェアを作成するためにコードを共有できます。

{% note %}

**メモ:** オープンソースプロジェクトのパブリックリポジトリを作成できます。 パブリックリポジトリを作成する際は、他のユーザにどのようにプロジェクトを共有してほしいのかを定義する[ライセンスファイル](http://choosealicense.com/)を含めるようにしてください。 {% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endnote %}

{% data reusables.repositories.create_new %}
2. リポジトリに、短くて覚えやすい名前を入力します。 たとえば、"hello-world" といった名前です。 ![リポジトリ名を入力するフィールド](/assets/images/help/repository/create-repository-name.png)
3. 必要な場合、リポジトリの説明を追加します。 For example, "My first repository on
{% data variables.product.product_name %}."
  ![リポジトリの説明を入力するフィールド](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

おめでとうございます。 最初のリポジトリ作成に成功し、初期設定として *README* ファイルが生成されました。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also create repositories using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### 最初の変更をコミットする

*[コミット](/articles/github-glossary#commit)*とは、ある特定の時点における、あなたのプロジェクト内のすべてのファイルのスナップショットのようなものです。

上の例では、新しいリポジトリを作成すると同時に *README* ファイルを生成しました。 *README* ファイルは、プロジェクトの詳細を説明したり、プロジェクトのインストール方法や使い方などのドキュメンテーションを書き込んだりするためにふさわしい場所です。 *README* ファイルの内容は、リポジトリのフロントページに自動的に表示されます。

それでは、*README* ファイルに変更を加えてコミットしてみましょう。

1. リポジトリのファイル一覧にある、[***README.md***] をクリックします。 ![ファイル一覧にある README ファイル](/assets/images/help/repository/create-commit-open-readme.png)
2. ファイルの中身の上にある {% octicon "pencil" aria-label="The edit icon" %}をクリックします。
3. [**Edit file**] タブで、あなた自身に関する情報を入力します。 ![ファイル内の新しいコンテンツ](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
5. ファイルに加えた変更を確認します。 新しいコンテンツは緑色で表示されます。 ![ファイルプレビュービュー](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### おめでとうございます

おめでとうございます。 *README* ファイルを持つ新しいリポジトリを作成し、{% data variables.product.product_location %}に最初のコミットを作成しました。 次に何をしたいですか?

- [Git をセットアップする](/articles/set-up-git)
- **リポジトリの作成**
- [リポジトリをフォークする](/articles/fork-a-repo)
- [交流する](/articles/be-social)
- {% data reusables.support.connect-in-the-forum-bootcamp %}
