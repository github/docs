---
title: リポジトリのファイルを Git Large File Storage に移動する
intro: '{% data variables.large_files.product_name_short %} をセットアップしてあり、{% data variables.large_files.product_name_short %} で追跡する必要があるファイルがすでにリポジトリにある場合は、まずそれをリポジトリから削除する必要があります。'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.large_files.product_name_short %} をインストールして {% data variables.large_files.product_name_short %} の追跡を設定すると, Git の通常の追跡から {% data variables.large_files.product_name_short %} にファイルを移動できます。 詳しい情報については、「[{% data variables.large_files.product_name_long %}をインストールする](/github/managing-large-files/installing-git-large-file-storage)」および「[{% data variables.large_files.product_name_long %}を設定する](/github/managing-large-files/configuring-git-large-file-storage)」を参照してください。

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**ヒント:** ファイルを Git にプッシュしようとしたとき、「これは {% data variables.large_files.product_name_short %} のファイル サイズ制限である {% data variables.large_files.max_github_size %} を超えています」という趣旨のエラーが表示された場合は、`filter branch` または BFG Repo Cleaner ではなく `git lfs migrate` を使用して大きいファイルを {% data variables.large_files.product_name_long %} に移動してください。 `git lfs migrate` コマンドの情報については、[Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released) のリリース記事を参照してください。

{% endtip %}

1.  `filter-branch` コマンドか BFG Repo-Cleaner を使用して、リポジトリの Git 履歴からファイルを削除します。 これらを使用する詳しい情報については、「[機密データをリポジトリから削除する](/articles/removing-sensitive-data-from-a-repository)」を参照してください。
2. ファイルの追跡を設定し、{% data variables.large_files.product_name_short %} にプッシュします。 この手順の詳しい情報については、「[{% data variables.large_files.product_name_long %} の設定](/articles/configuring-git-large-file-storage)」を参照してください。

### 参考リンク

- [{% data variables.large_files.product_name_long %}について](/articles/about-git-large-file-storage)
- [{% data variables.large_files.product_name_long %} でのコラボレーション](/articles/collaboration-with-git-large-file-storage/)
- 「[{% data variables.large_files.product_name_long %}をインストールする](/articles/installing-git-large-file-storage)」
