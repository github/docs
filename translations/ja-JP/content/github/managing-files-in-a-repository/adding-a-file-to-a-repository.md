---
title: ファイルをリポジトリに追加する
intro: '既存のファイルを {% data variables.product.product_name %}のリポジトリにアップロードおよびコミットできます。 ファイルツリー中のいずれかのディレクトリにファイルをドラッグアンドドロップするか、リポジトリのメインページからファイルをアップロードしてください。'
redirect_from:
  - /articles/adding-a-file-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

ブラウザを介してリポジトリに追加できるファイルのサイズは、1 ファイルあたり {% data variables.large_files.max_github_browser_size %}までです。 コマンドラインからは、より大きいサイズのファイルを追加でき、1 ファイルあたり {% data variables.large_files.max_github_size %}までです。 詳しい情報については[コマンドラインを使用してリポジトリにファイルを追加する](/articles/adding-a-file-to-a-repository-using-the-command-line)を参照してください。

{% tip %}

**参考:**
- {% data variables.product.product_name %} には同時に複数のファイルをアップロードできます。
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
2. リポジトリ名の下で [**Upload files**] をクリックします。 ![ファイルのアップロードボタン](/assets/images/help/repository/upload-files-button.png)
{% else %}
2. ファイルリストの上にある [**Add file**] プルダウンを使用して、[**Upload files**] をクリックします。 ![[Add file] ドロップダウンの [Upload files]](/assets/images/help/repository/upload-files-button.png)
{% endif %}
3. アップロードするファイルもしくはフォルダーを、ファイルツリー上のリポジトリにドラッグ & ドロップします。 ![ドラッグ＆ドロップエリア](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. **[Commit changes]** をクリックしてください。 ![[Commit changes] ボタン](/assets/images/help/repository/commit-changes-button.png)
