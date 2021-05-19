---
title: リポジトリのリリースを管理する
intro: リリースを作成し、プロジェクトのイテレーションをバンドルしてユーザに配信できます。
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases/
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion ver_gt "github-ae@latest" %}

### リリース管理について

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.prodname_marketplace %} の特定のリリースからのアクションを公開することもできます。 詳しい情報については、「<a href="/actions/creating-actions/publishing-actions-in-github-marketplace" class="dotcom-only">アクションを {% data variables.product.prodname_marketplace %} で公開する</a>」を参照してください。
{% endif %}
リポジトリに対して

{% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) オブジェクトを {% data variables.product.product_name %} がリリースごとに作成する ZIP ファイルと tarball に含めるかどうかを選択できます。 詳しい情報については、「[リポジトリのアーカイブ内の {% data variables.large_files.product_name_short %} オブジェクトを管理する](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)」を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**ヒント**: {% data variables.product.prodname_cli %} を使用してリリースを管理することもできます。 詳しい情報については、{% data variables.product.prodname_cli %} ドキュメントの「[`gh release`](https://cli.github.com/manual/gh_release)」を参照してください。

{% endtip %}
{% endif %}

### リリースの作成

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. [**Draft a new release**] をクリックします。 ![新しいリリースのドラフトを作成するボタン](/assets/images/help/releases/draft_release_button.png)
4. リリースのバージョン番号を入力します。 バージョンは [Git タグ](https://git-scm.com/book/en/Git-Basics-Tagging)に基づきます。 名前付けタグは[セマンティック バージョニング ](http://semver.org/)に準じることをおすすめします。 ![タグ付きバージョンのリリース](/assets/images/help/releases/releases-tag-version.png)
5. ドロップダウンメニューを使ってリリース対象のプロジェクトを含むブランチを選択します。 ![タグ付きブランチのリリース](/assets/images/help/releases/releases-tag-branch.png)
6. リリースのタイトルと説明を入力します。 ![リリースの説明](/assets/images/help/releases/releases_description.png)
7. オプションで、コンパイルされたプログラムなどのバイナリファイルをリリースに含めるには、ドラッグアンドドロップするかバイナリボックスで手動で選択します。 ![リリースに DMG ファイルを含める](/assets/images/help/releases/releases_adding_binary.gif)
8. リリースが不安定であり、運用準備ができていないことをユーザに通知するには、[**This is a pre-release**] を選択します。 ![リリースをプレリリースとしてマークするチェックボックス](/assets/images/help/releases/prerelease_checkbox.png)
{%- if currentVersion == "free-pro-team@latest" %}
1. 必要に応じて、[**Create a discussion for this release**] を選択し、[**Category**] ドロップダウンメニューを選択してリリースディスカッションのカテゴリをクリックします。 ![リリースディスカッションを作成するためのチェックボックスと、カテゴリを選択するドロップダウンメニュー](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
9. リリースを公開する準備ができている場合は、[**Publish release**] をクリックします。 リリースの作業を後でする場合は、[**Save draft**] をクリックします。 ![[Publish release] と [Save draft] ボタン](/assets/images/help/releases/release_buttons.png)

コマンドラインから、またはスクリプトでリリースを自動的に作成することもできます。 詳しい情報については、「[リリース](/rest/reference/repos/#create-a-release)」を参照してください。

### リリースの編集

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. ページの右側で、編集するリリースの横にある [**Edit release**] をクリックします。 ![リリースの編集](/assets/images/help/releases/edit-release.png)
4. フォームでリリースの詳細を編集し、[**Update release**] をクリックします。 ![リリースの更新](/assets/images/help/releases/update-release.png)

### リリースの削除

リリースを削除するには、まずリリースに添付されているバイナリファイルをすべて削除する必要があります。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. 削除するリリースの名前をクリックします。 ![リリースを表示するリンク](/assets/images/help/releases/release-name-link.png)
4. ページの右上にある [**Delete**] をクリックします。 ![リリースの削除ボタン](/assets/images/help/releases/delete-release.png)
5. [**Delete this release**] をクリックします。 ![リリースの削除を確認](/assets/images/help/releases/confirm-delete-release.png)
