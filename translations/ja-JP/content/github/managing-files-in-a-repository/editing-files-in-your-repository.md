---
title: リポジトリのファイルを編集する
intro: 'ファイルエディタを使用しているすべてのリポジトリについて、{% data variables.product.product_name %} でファイルを直接編集できます。'
redirect_from:
  - /articles/editing-files/
  - /articles/editing-files-in-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**参考**: {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% note %}

**参考:** {% data variables.product.product_name %} のファイルエディタでは、[CodeMirror](https://codemirror.net/) が使用されます。

{% endnote %}

1. リポジトリ内で、編集するファイルに移動します。
{% data reusables.repositories.edit-file %}
3. [**Edit file**] タブで、ファイルに必要な変更を加えます。 ![ファイル内の新しいコンテンツ](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

### 参考リンク

* 「[他のユーザーのリポジトリ内のファイルを編集する](/articles/editing-files-in-another-user-s-repository)」
