---
title: リポジトリのファイルを Git Large File Storage に移動する
intro: '{% data variables.large_files.product_name_short %} をセットアップしてあり、{% data variables.large_files.product_name_short %} で追跡する必要があるファイルがすでにリポジトリにある場合は、まずそれをリポジトリから削除する必要があります。'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Move a file to Git LFS
ms.openlocfilehash: fc03edc2ef82be8d7edb106a8c4a2a0b8efbeedb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131922'
---
{% data variables.large_files.product_name_short %} をインストールして {% data variables.large_files.product_name_short %} の追跡を設定すると, Git の通常の追跡から {% data variables.large_files.product_name_short %} にファイルを移動できます。 詳しくは、「[{% data variables.large_files.product_name_long %} をインストールする](/github/managing-large-files/installing-git-large-file-storage)」と「[{% data variables.large_files.product_name_long %} を構成する](/github/managing-large-files/configuring-git-large-file-storage)」を参照してください。

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**参考:** ファイルを Git にプッシュしようとしたとき、「これは {% data variables.large_files.product_name_short %} のファイル サイズ制限である {% data variables.large_files.max_github_size %} を超えています」という趣旨のエラーが表示された場合は、`filter branch` または BFG Repo Cleaner ではなく `git lfs migrate` を使用して大きいファイルを {% data variables.large_files.product_name_long %} に移動してください。 `git lfs migrate` コマンドについて詳しくは、[Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released) リリース告知をご覧ください。

{% endtip %}

1.  `filter-branch` コマンドか BFG Repo-Cleaner を使用し、リポジトリの Git 履歴からファイルを削除します。 これらの使用方法について詳しくは、「[リポジトリから機密データを削除する](/articles/removing-sensitive-data-from-a-repository)」を参照してください。
2. ファイルの追跡を設定し、{% data variables.large_files.product_name_short %} にプッシュします。 このプロシージャについて詳しくは、「[{% data variables.large_files.product_name_long %} を構成する](/articles/configuring-git-large-file-storage)」を参照してください。

## 参考資料

- 「[{% data variables.large_files.product_name_long %} について](/articles/about-git-large-file-storage)」
- 「[{% data variables.large_files.product_name_long %} とのコラボレーション](/articles/collaboration-with-git-large-file-storage/)」
- 「[{% data variables.large_files.product_name_long %} をインストールする](/articles/installing-git-large-file-storage)」
