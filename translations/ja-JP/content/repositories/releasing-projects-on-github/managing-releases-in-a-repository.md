---
title: リポジトリのリリースを管理する
intro: リリースを作成し、プロジェクトのイテレーションをバンドルしてユーザに配信できます。
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases
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
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage releases
ms.openlocfilehash: 0170f17674fcd45e3459670672d545400f1b635a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409476'
---
## リリース管理について

リリース ノート、共同作成者の @mentions、バイナリ ファイルへのリンクを含む新しいリリースを作成したり、既存のリリースを編集または削除したりすることができます。

{% ifversion fpt or ghec %}特定のリリースのアクションを {% data variables.product.prodname_marketplace %} で公開することもできます。 詳細については、「[{% data variables.product.prodname_marketplace %} でアクションを発行する](/actions/creating-actions/publishing-actions-in-github-marketplace)」を参照してください。

{% data variables.large_files.product_name_long %}（{% data variables.large_files.product_name_short %}）オブジェクトを、{% data variables.product.product_name %} がリリースごとに作成する ZIP ファイルと tarball に含めるかどうかを選択できます。 詳細については、「[リポジトリのアーカイブでの {% data variables.large_files.product_name_short %} オブジェクトの管理](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)」を参照してください。
{% endif %}

## リリースの作成

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. **[新しいリリースの下書き]** をクリックします。

   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}![新しいリリースのドラフトを作成するボタン](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![新しいリリースのドラフトを作成するボタン](/assets/images/help/releases/draft_release_button.png){% endif %}
4. {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %} **[タグの選択]** をクリックし、{% else %}{% endif %}リリースのバージョン番号を入力し{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}**Enter** キーを押し{% endif %}ます。 または、既存のタグを選択します。

   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![タグを入力する](/assets/images/help/releases/releases-tag-create.png)
5. 新しいタグを作成する場合は、 **[新しいタグの作成]** をクリックします。

   ![新しいタグを作成することを確認する](/assets/images/help/releases/releases-tag-create-confirm.png){% else %}![タグ付きバージョン をリリースする](/assets/images/enterprise/releases/releases-tag-version.png){% endif %}
5. 新しいタグを作成した場合は、ドロップダウン メニューを使ってリリース対象のプロジェクトを含むブランチを選択します。

   {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4865 %}![ブランチの選択](/assets/images/help/releases/releases-choose-branch.png) {% else %}![タグ付きブランチのリリース](/assets/images/enterprise/releases/releases-tag-branch.png){% endif %} {%- data reusables.releases.previous-release-tag %}
6. リリースのタイトルと説明を入力します。
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %}説明に含まれる任意の {% data variables.product.product_name %} ユーザーに @mention した場合、公開されたリリースには、 **[共同作成者]** セクションと、メンションされているすべてのユーザーのアバター リストが含まれます。
   {%- endif %} {% ifversion fpt or ghec or ghes > 3.3 %} あるいは、{% ifversion previous-release-tag %}**リリース ノートの生成**{% else %}**リリース ノートの自動生成**{% endif %} をクリックし、リリース ノートを自動生成できます。{% endif %}{% ifversion previous-release-tag %} ![リリースの説明](/assets/images/help/releases/releases_description_auto.png){% else %} ![リリースの説明](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}
1. オプションで、コンパイルされたプログラムなどのバイナリファイルをリリースに含めるには、ドラッグアンドドロップするかバイナリボックスで手動で選択します。
   ![リリースに DMG ファイルを含める](/assets/images/help/releases/releases_adding_binary.gif)
2. リリースが不安定であり、運用の準備ができていないことをユーザーに通知するには、 **[これはプレリリースです]** を選択します。
   ![リリースをプレリリースとしてマークするチェック ボックス](/assets/images/help/releases/prerelease_checkbox.png){%- ifversion discussions %}
1. 必要に応じて、リポジトリで {% data variables.product.prodname_discussions %} が有効になっている場合は、 **[このリリースのディスカッションを作成する]** を選択し、 **[カテゴリ]** ドロップダウン メニューを選択してリリース ディスカッションのカテゴリをクリックします。
  ![リリース ディスカッションを作成するためのチェックボックスと、カテゴリを選択するドロップダウン メニュー](/assets/images/help/releases/create-release-discussion.png){%- endif %}
9. リリースを公開する準備ができている場合は、 **[リリースの公開]** をクリックします。 リリースの作業を後でする場合は、 **[下書きの保存]** をクリックします。
   ![[リリースの公開] と [下書きの保存] ボタン](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4972 or ghae-issue-4974 %}その後、リポジトリのリリース フィードで公開されたリリースまたはドラフト リリースを表示できます。 詳細については、「[リポジトリのリリースとタグを表示する](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)」を参照してください。

   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %} ![@mentioned した共同作成者を含む公開されたリリース](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% else %} ![@mentioned した共同作成者を含む公開されたリリース](/assets/images/help/releases/releases-overview-with-contributors.png){% endif %} {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. リリースを作成するには、`gh release create` サブコマンドを使用します。 `tag` をリリースに必要なタグに置き換えます。

   ```shell
   gh release create <em>tag</em>
   ```

2. 対話型のプロンプトに従います。 または、引数を指定して、これらのプロンプトをスキップすることもできます。 このコマンドの詳細については、[{% data variables.product.prodname_cli %} のマニュアル](https://cli.github.com/manual/gh_release_create)を参照してください。 たとえば、このコマンドでは、指定したタイトルとノートを含むプレリリースが作成されます。

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.3 or ghae-issue-4972 or ghec %}ノートに含まれる任意の {% data variables.product.product_name %} ユーザーに @mention した場合、{% data variables.product.prodname_dotcom_the_website %} で公開されたリリースには、 **[共同作成者]** セクションと、メンションされているすべてのユーザーのアバター リストが含まれます。
{% endif %}

{% endcli %}

## リリースの編集

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. ページの右側で、編集するリリースの横にある {% octicon "pencil" aria-label="The edit icon" %} をクリックします。
  ![リリースの編集](/assets/images/help/releases/edit-release-pencil.png){% else %}
3. ページの右側で、編集するリリースの横にある **[リリースの編集]** をクリックします。
  ![リリースの編集](/assets/images/help/releases/edit-release.png){% endif %}
4. フォームでリリースの詳細を編集し、 **[リリースの更新]** をクリックします。{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4972 %}説明に含まれる GitHub ユーザーの @mentions を追加または削除すると、それらのユーザーはリリースの **[共同作成者]** セクションのアバター リストに追加またはアバター リストから削除されます。{% endif %}![リリースを更新する](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

現在、リリースは {% data variables.product.prodname_cli %} では編集できません。

{% endcli %}

## リリースの削除

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
3. ページの右側で、削除するリリースの横にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。
  ![リリースの削除](/assets/images/help/releases/delete-release-trash.png) {% else %}
3. 削除するリリースの名前をクリックします。
  ![リリースを表示するリンク](/assets/images/help/releases/release-name-link.png)
4. ページの右上隅にある **[削除]** をクリックします。
  ![[リリースの削除] ボタン](/assets/images/help/releases/delete-release.png){% endif %}
5. **[このリリースを削除]** をクリックします。
  ![リリースの削除を確認](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. リリースを削除するには、`gh release delete` サブコマンドを使用します。 `tag` を削除するリリースのタグに置き換えます。 確認をスキップするには、`-y` フラグを使用します。

   ```shell
   gh release delete <em>tag</em> -y
   ```

{% endcli %}
