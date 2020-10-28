---
title: Git Large File Storage を設定する
intro: '[{% data variables.large_files.product_name_short %} をインストール](/articles/installing-git-large-file-storage/) したら、それをリポジトリ内の大容量ファイルに関連付ける必要かあります。'
redirect_from:
  - /articles/configuring-large-file-storage/
  - /articles/configuring-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.product.product_name %} で利用したいファイルがリポジトリにある場合、まずリポジトリからそれらのファイルを削除し、それからローカルで {% data variables.large_files.product_name_short %} に追加する必要があります。 詳細は「[リポジトリ内のファイルを {% data variables.large_files.product_name_short %} に移動する](/articles/moving-a-file-in-your-repository-to-git-large-file-storage)」を参照してください。

{% data reusables.large_files.resolving-upload-failures %}

{% if enterpriseServerVersions contains currentVersion %}

{% tip %}

**メモ:** 大容量ファイルを {% data variables.product.product_name %}にプッシュする前に、アプライアンスで {% data variables.large_files.product_name_short %}を有効化していることを確認してください。 詳しい情報については「[GitHub Enterprise Server で Git Large File Storage を設定する](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-git-large-file-storage-on-github-enterprise-server/)」を参照してください。

{% endtip %}

{% endif %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. カレントワーキングディレクトリを、{% data variables.large_files.product_name_short %}で利用したい既存のリポジトリに変更します。
3. リポジトリにあるファイルの種類を {% data variables.large_files.product_name_short %} と関連付けるには、`git {% data variables.large_files.command_name %} track` の後に、{% data variables.large_files.product_name_short %} に自動的にアップロードしたいファイル拡張子の名前を入力します。

  たとえば、_.psd_ ファイルを関連付けるには、以下のコマンドを入力します:
  ```shell
  $ git {% data variables.large_files.command_name %} track "*.psd"
  > Adding path *.psd
  ```
  {% data variables.large_files.product_name_short %} に関連付けたいファイルタイプはすべて `git {% data variables.large_files.command_name %} track` で追加する必要があります。 このコマンドは、リポジトリの *.gitattributes* ファイルを修正し、大容量ファイルを {% data variables.large_files.product_name_short %} に関連付けます。

  {% tip %}

  **ヒント:** ローカルの *.gitattributes* ファイルをリポジトリにコミットするよう強くおすすめします。 {% data variables.large_files.product_name_short %} に関連付けられているグローバルな *.gitattributes* ファイルを利用すると、他の Git プロジェクトにコントリビュートする際にコンフリクトを起こすことがあります。

  {% endtip %}

4. 以下のコマンドで、関連付けた拡張子に一致するリポジトリにファイルを追加します:
  ```shell
  $ git add path/to/file.psd
  ```
5. 以下のように、ファイルをコミットし、{% data variables.product.product_name %} にプッシュします:
  ```shell
  $ git commit -m "add file.psd"
  $ git push
  ```
  アップロードしたファイルの Diagnostics 情報が、以下のように表示されるはずです:
  ```shell
  > Sending file.psd
  > 44.74 MB / 81.04 MB  55.21 % 14s
  > 64.74 MB / 81.04 MB  79.21 % 3s
  ```

### 参考リンク

- "[Collaboration with {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
- 「[リポジトリのアーカイブ内の {% data variables.large_files.product_name_short %} オブジェクトを管理する](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)」{% endif %}
