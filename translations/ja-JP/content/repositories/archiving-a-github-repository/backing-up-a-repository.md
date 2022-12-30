---
title: リポジトリのバックアップ
intro: '{% ifversion ghes or ghae %}Git と {% endif %}API{% ifversion fpt or ghec %} またはサードパーティ製ツール{% endif %}を使って、リポジトリをバックアップできます。'
redirect_from:
  - /articles/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/backing-up-a-repository
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/backing-up-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 3c9a6b5569563858987e338584b3b42bededf716
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883450'
---
{% ifversion fpt or ghec %}

リポジトリのアーカイブをダウンロードするには、ユーザあるいは Organization のマイグレーション用の API が利用できます。 詳細については、「[移行](/rest/reference/migrations)」を参照してください。
{% else %}

リポジトリのダウンロードおよびバックアップを手動で実行できます。

- リポジトリの Git データをローカルマシンにダウンロードするには、リポジトリをクローンする必要があります。 詳細については、「[リポジトリをクローンする](/articles/cloning-a-repository)」を参照してください。
- また、リポジトリの wiki をダウンロードすることもできます。 詳細については、「[ウィキページを追加または編集する](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)」を参照してください。

リポジトリもしくは wiki をクローンすると、プロジェクトのファイルやコミット履歴などの Git のデータだけがダウンロードされます。 API を使用して、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上のリポジトリの他の要素をローカル マシンにエクスポートできます。

- [問題](/rest/reference/issues#list-issues-for-a-repository)
- [Pull requests](/rest/reference/pulls#list-pull-requests)
- [フォーク](/rest/reference/repos#list-forks)
- [コメント](/rest/reference/issues#list-issue-comments-for-a-repository)
- [マイルストーン](/rest/reference/issues#list-milestones)
- [ラベル](/rest/reference/issues#list-labels-for-a-repository)
- [Watcher](/rest/reference/activity#list-watchers)
- [Star を付けたユーザー](/rest/reference/activity#list-stargazers)
- [プロジェクト](/rest/reference/projects#list-repository-projects) {% endif %}

{% ifversion ghes or ghae %}バックアップしたいすべての内容のローカル バージョンがそろったら、zip アーカイブを作成して{% else %}アーカイブをダウンロードしたら、{% endif %}外部ハード ドライブにコピーすることも、[Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview/)、[Google Drive](https://www.google.com/drive/)、[Dropbox](https://www.dropbox.com/) などのクラウドベースのバックアップまたはストレージ サービスにアップロードすることもできます。

{% ifversion fpt or ghec %}
## サードパーティのバックアップツール

リポジトリのバックアップを自動化するセルフサービスのツールはたくさんあります。 オプトアウトしておらず、誰でもデータにアクセスできるようにする {% data variables.product.product_name %} 上の _すべての_ パブリック リポジトリをアーカイブするアーカイブ プロジェクトとは異なり、バックアップ ツールは _特定の_ リポジトリからデータをダウンロードし、新しいブランチまたはディレクトリ内に整理します。 アーカイブ プロジェクトの詳細については、「[{% data variables.product.prodname_dotcom %} でのコンテンツとデータのアーカイブについて](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)」を参照してください。 セルフサービス バックアップ ツールの詳細については、「[{% data variables.product.prodname_marketplace %} のバックアップ ユーティリティのカテゴリ](https://github.com/marketplace?category=backup-utilities)」を参照してください。
{% endif %}
