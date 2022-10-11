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
  - /github/administering-a-repository/managing-releases-in-a-repository
  - /github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Manage releases
---

{% ifversion fpt or ghes > 3.0 or ghae %}

## リリース管理について

You can create new releases with release notes, @mentions of contributors, and links to binary files, as well as edit or delete existing releases.

{% ifversion fpt %}
{% data variables.product.prodname_marketplace %} の特定のリリースからのアクションを公開することもできます。 詳しい情報については、「<a href="/actions/creating-actions/publishing-actions-in-github-marketplace" class="dotcom-only">アクションを {% data variables.product.prodname_marketplace %} で公開する</a>」を参照してください。

{% data variables.large_files.product_name_long %}（{% data variables.large_files.product_name_short %}）オブジェクトを、{% data variables.product.product_name %} がリリースごとに作成する ZIP ファイルと tarball に含めるかどうかを選択できます。 詳しい情報については、「[リポジトリのアーカイブ内の {% data variables.large_files.product_name_short %} オブジェクトを管理する](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)」を参照してください。
{% endif %}
{% endif %}

## リリースの作成

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. [**Draft a new release**] をクリックします。 ![新しいリリースのドラフトを作成するボタン](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt %}Click **Choose a tag** and type{% else %}Type{% endif %} a version number for your release. Alternatively, select an existing tag.
   {% ifversion fpt %}
   ![Enter a tag](/assets/images/help/releases/releases-tag-create.png)
1. If you are creating a new tag, click **Create new tag**. ![Confirm you want to create a new tag](/assets/images/help/releases/releases-tag-create-confirm.png)
   {% else %}
   ![タグ付きバージョンのリリース](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
5. If you have created a new tag, use the drop-down menu to select the branch that contains the project you want to release.
   {% ifversion fpt %}![Choose a branch](/assets/images/help/releases/releases-choose-branch.png)
   {% else %}![タグ付きブランチのリリース](/assets/images/enterprise/releases/releases-tag-branch.png)
   {% endif %}
6. リリースのタイトルと説明を入力します。
   {%- ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}
   If you @mention any {% data variables.product.product_name %} users in the description, the published release will include a **Contributors** section with an avatar list of all the mentioned users.
   {%- endif %}
   {% ifversion fpt %} Alternatively, you can automatically generate your release notes by clicking **Auto-generate release notes**.
   {% endif %}
   ![リリースの説明](/assets/images/help/releases/releases_description_auto.png)
7. オプションで、コンパイルされたプログラムなどのバイナリファイルをリリースに含めるには、ドラッグアンドドロップするかバイナリボックスで手動で選択します。 ![リリースに DMG ファイルを含める](/assets/images/help/releases/releases_adding_binary.gif)
8. リリースが不安定であり、運用準備ができていないことをユーザに通知するには、[**This is a pre-release**] を選択します。 ![リリースをプレリリースとしてマークするチェックボックス](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt %}
1. 必要に応じて、[**Create a discussion for this release**] を選択し、[**Category**] ドロップダウンメニューを選択してリリースディスカッションのカテゴリをクリックします。 ![リリースディスカッションを作成するためのチェックボックスと、カテゴリを選択するドロップダウンメニュー](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
9. リリースを公開する準備ができている場合は、[**Publish release**] をクリックします。 リリースの作業を後でする場合は、[**Save draft**] をクリックします。 ![[Publish release] と [Save draft] ボタン](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}
   You can then view your published or draft releases in the releases feed for your repository. For more information, see "[Viewing your repository's releases and tags](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."

   ![Published release with @mentioned contributors](/assets/images/help/releases/releases-overview-with-contributors.png)
   {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. To create a release, use the `gh release create` subcommand. Replace `tag` with the desired tag for the release.

   ```shell
   gh release create <em>tag</em>
   ```

2. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_release_create). For example, this command creates a prerelease with the specified title and notes.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.2 or ghae-issue-4972 %}
If you @mention any {% data variables.product.product_name %} users in the notes, the published release on {% data variables.product.prodname_dotcom_the_website %} will include a **Contributors** section with an avatar list of all the mentioned users.
{% endif %}

{% endcli %}

## リリースの編集

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. ページの右側で、編集するリリースの横にある [**Edit release**] をクリックします。 ![リリースの編集](/assets/images/help/releases/edit-release.png)
4. Edit the details for the release in the form, then click **Update release**.{% ifversion fpt or ghes > 3.2 or ghae-issue-4972 %} If you add or remove any @mentions of GitHub users in the description, those users will be added or removed from the avatar list in the **Contributors** section of the release.{% endif %} ![リリースの更新](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Releases cannot currently be edited with {% data variables.product.prodname_cli %}.

{% endcli %}

## リリースの削除

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. 削除するリリースの名前をクリックします。 ![リリースを表示するリンク](/assets/images/help/releases/release-name-link.png)
4. ページの右上にある [**Delete**] をクリックします。 ![リリースの削除ボタン](/assets/images/help/releases/delete-release.png)
5. [**Delete this release**] をクリックします。 ![リリースの削除を確認](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. To delete a release, use the `gh release delete` subcommand. Replace `tag` with the tag of the release to delete. Use the `-y` flag to skip confirmation.

   ```shell
   gh release delete <em>tag</em> -y
   ```

{% endcli %}
