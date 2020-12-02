---
title: ファイルを Git Large File Storage から削除する
intro: 'リポジトリに {% data variables.large_files.product_name_short %} をセットアップしてあれば、{% data variables.large_files.product_name_short %} からは、すべてのファイルを削除することも、ファイルのサブセットを削除することもできます。'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 1 つのファイルを削除する

1.  `filter-branch` コマンドか BFG Repo-Cleaner を使用して、リポジトリの Git 履歴からファイルを削除します。 これらを使用する詳しい情報については、「[機密データをリポジトリから削除する](/articles/removing-sensitive-data-from-a-repository)」を参照してください。
2. *.gitattributes* ファイルに移動します。

  {% note %}

  **メモ:** *.gitattributes* ファイルは通常、ローカルリポジトリ内に保存されます。 場合によっては、{% data variables.large_files.product_name_short %} 関連をすべて含むグローバル *.gitattributes* ファイルが作成されている可能性があります。

  {% endnote %}
3. *.gitattributes* ファイル内で、関連付けられている {% data variables.large_files.product_name_short %} 追跡ルールを検索して削除します。
4. *.gitattributes* ファイルを保存して終了します。

### {% data variables.large_files.product_name_short %} リポジトリ内にあるすべてのファイルを削除する

1. `filter-branch` コマンドか BFG Repo-Cleaner のいずれかを使用して、リポジトリの Git 履歴から ファイルを削除します。 これらを使用する詳しい情報については、「[機密データをリポジトリから削除する](/articles/removing-sensitive-data-from-a-repository)」を参照してください。
2. オプションで、リポジトリにある {% data variables.large_files.product_name_short %} をアンインストールするには、次を実行します:
  ```shell
  $ git lfs uninstall
  ```
  バージョンが 1.1.0 より前の {% data variables.large_files.product_name_short %} については、次を実行します:
  ```shell
  $ git lfs uninit
  ```

### リポジトリにある {% data variables.large_files.product_name_short %}オブジェクト

After you remove files from {% data variables.large_files.product_name_short %}, the {% data variables.large_files.product_name_short %} objects still exist on the remote storage{% if currentVersion == "free-pro-team@latest" %} and will continue to count toward your {% data variables.large_files.product_name_short %} storage quota{% endif %}.

To remove {% data variables.large_files.product_name_short %} objects from a repository, {% if currentVersion == "free-pro-team@latest" %}delete and recreate the repository. リポジトリを削除すると、関連する Issue、Star、フォークもすべて削除されます。 詳しい情報については、「[リポジトリを削除する](/github/administering-a-repository/deleting-a-repository)」を参照するか、{% else %}{% data variables.product.prodname_enterprise %} 管理者に連絡してオブジェクトをアーカイブします。 アーカイブ化されたオブジェクトは、3 か月後にパージされます。{% endif %}

{% note %}

**注釈:** ファイルを 1 つ削除しても、それ以外の {% data variables.large_files.product_name_short %} オブジェクトはリポジトリに保持する場合は、リポジトリを削除して再作成してから、{% data variables.large_files.product_name_short %} に関連付けられたファイルを再設定してください。 詳しい情報については、「[1 つのファイルを削除する](#removing-a-single-file)」および「[{% data variables.large_files.product_name_long %}を設定する](/github/managing-large-files/configuring-git-large-file-storage)」を参照してください。

{% endnote %}

### 参考リンク

- [{% data variables.large_files.product_name_long %}について](/articles/about-git-large-file-storage)
- [{% data variables.large_files.product_name_long %} でのコラボレーション](/articles/collaboration-with-git-large-file-storage/)
- 「[{% data variables.large_files.product_name_long %}をインストールする](/articles/installing-git-large-file-storage)」
