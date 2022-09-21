---
title: リポジトリのファイルを削除する
intro: '{% data variables.product.product_name %} では、リポジトリ内にある個々のファイル{% ifversion fpt or ghes or ghec %}、またはディレクトリ全体{% endif %}を削除することができます。'
redirect_from:
  - /articles/deleting-files
  - /github/managing-files-in-a-repository/deleting-files
  - /github/managing-files-in-a-repository/deleting-a-file-or-directory
  - /github/managing-files-in-a-repository/deleting-files-in-a-repository
  - /github/managing-files-in-a-repository/managing-files-on-github/deleting-files-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: 'People with write permissions can delete files{% ifversion fpt or ghes or ghec %} or directories{% endif %} in a repository.'
topics:
  - Repositories
shortTitle: Delete files
ms.openlocfilehash: b3d939a7be6be37e875104f7a3c4df53f7a3b7ed
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131988'
---
## ファイル {% ifversion fpt or ghes or ghec %} とディレクトリ {% endif %} の削除について

リポジトリ {% ifversion fpt or ghes or ghec %} 内の個々のファイル、またはディレクトリ {% endif %} 内のすべてのファイルを含むディレクトリ全体を削除できます。

書き込み権限をもっていないリポジトリ内のファイル {% ifversion fpt or ghes or ghec %} またはディレクトリ {% endif %} を削除しようとすると、プロジェクトが個人アカウントにフォークされ、変更をコミットした後に元のリポジトリへのプル要求の送信を支援します。 詳細については、「[pull request について](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)」を参照してください。

削除したファイル {% ifversion fpt or ghes or ghec %} またはディレクトリ {% endif %} に機密データが含まれている場合、そのデータはリポジトリの Git 履歴で引き続き入手可能です。 {% data variables.product.product_name %} からファイルを完全に削除するには、リポジトリの履歴からファイルを削除する必要があります。 詳細については、「[Removing sensitive data from a repository](/github/authenticating-to-github/removing-sensitive-data-from-a-repository)」 (リポジトリからの機密データの削除) を参照してください。

## ファイルを削除する

1. リポジトリ内で削除対象のファイルを見つけます。
2. ファイルの上部にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% ifversion fpt or ghes or ghec %}
## ディレクトリを削除する

1. リポジトリ内で削除対象のディレクトリを見つけます。
1. 右上隅にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックしてから、 **[ディレクトリの削除]** をクリックします。
  ![ディレクトリを削除するボタン](/assets/images/help/repository/delete-directory-button.png)
1. 削除するファイルを確認します。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %} {% endif %}
