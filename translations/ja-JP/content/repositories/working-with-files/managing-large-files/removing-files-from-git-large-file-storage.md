---
title: ファイルを Git Large File Storage から削除する
intro: 'リポジトリに {% data variables.large_files.product_name_short %} をセットアップしてあれば、{% data variables.large_files.product_name_short %} からは、すべてのファイルを削除することも、ファイルのサブセットを削除することもできます。'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
  - /github/managing-large-files/removing-files-from-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/removing-files-from-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove files
ms.openlocfilehash: 4aa8b6789a916616b43b2b995174e64e25856ed4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131917'
---
## 1 つのファイルを削除する

1.  `filter-branch` コマンドか BFG Repo-Cleaner を使用し、リポジトリの Git 履歴からファイルを削除します。 これらの使用方法について詳しくは、「[リポジトリから機密データを削除する](/articles/removing-sensitive-data-from-a-repository)」を参照してください。
2. *.gitattributes* ファイルに移動します。

  {% note %}

  **注:** *.gitattributes* ファイルは通常、ローカル リポジトリ内に保存されています。 場合によっては、{% data variables.large_files.product_name_short %} 関連をすべて含むグローバル *.gitattributes* ファイルが作成されている可能性があります。

  {% endnote %}
3. *.gitattributes* ファイル内で、関連付けられている {% data variables.large_files.product_name_short %} 追跡ルールを検索して削除します。
4. *.gitattributes* ファイルを保存して終了します。

## {% data variables.large_files.product_name_short %} リポジトリ内にあるすべてのファイルを削除する

1. `filter-branch` コマンドか BFG Repo-Cleaner を使用し、リポジトリの Git 履歴からファイルを削除します。 これらの使用方法について詳しくは、「[リポジトリから機密データを削除する](/articles/removing-sensitive-data-from-a-repository)」を参照してください。
2. オプションで、リポジトリにある {% data variables.large_files.product_name_short %} をアンインストールするには、次を実行します:
  ```shell
  $ git lfs uninstall
  ```
  バージョンが 1.1.0 より前の {% data variables.large_files.product_name_short %} については、次を実行します:
  ```shell
  $ git lfs uninit
  ```

## リポジトリにある {% data variables.large_files.product_name_short %}オブジェクト

{% data variables.large_files.product_name_short %} からファイルを削除した後でも、{% data variables.large_files.product_name_short %} オブジェクトはそのままリモートストレージに存在し{% ifversion fpt or ghec %}、{% data variables.large_files.product_name_short %} ストレージ容量に対するカウントも継続します{% endif %}。

{% data variables.large_files.product_name_short %} オブジェクトをリポジトリから削除するには、{% ifversion fpt or ghec %}リポジトリを削除して再作成します。 リポジトリを削除すると、関連する Issue、Star、フォークもすべて削除されます。 詳しくは、「[リポジトリの削除](/github/administering-a-repository/deleting-a-repository)」を参照してください。 削除されたオブジェクトを消去する必要があり、リポジトリを削除できない場合、[サポートにお問い合わせください](/github/working-with-github-support)。{% else %}{% data variables.product.prodname_enterprise %} 管理者に問い合わせてオブジェクトをアーカイブします。 アーカイブ化されたオブジェクトは、3 か月後にパージされます。{% endif %}

{% note %}

**注:** ファイルを 1 つ削除しても、それ以外の {% data variables.large_files.product_name_short %} オブジェクトはリポジトリに保持する場合、リポジトリを削除して再作成してから、{% data variables.large_files.product_name_short %} に関連付けられたファイルを再設定してください。 詳しくは、「[単一ファイルを削除する](#removing-a-single-file)」と「[{% data variables.large_files.product_name_long %} を構成する](/github/managing-large-files/configuring-git-large-file-storage)」を参照してください。

{% endnote %}

## 参考資料

- 「[{% data variables.large_files.product_name_long %} について](/articles/about-git-large-file-storage)」
- 「[{% data variables.large_files.product_name_long %} とのコラボレーション](/articles/collaboration-with-git-large-file-storage/)」
- 「[{% data variables.large_files.product_name_long %} をインストールする](/articles/installing-git-large-file-storage)」
