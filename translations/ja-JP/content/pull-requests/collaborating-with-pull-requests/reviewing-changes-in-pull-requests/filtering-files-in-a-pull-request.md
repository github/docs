---
title: プルリクエスト内のファイルをフィルタリングする
intro: '大規模な pull request 内の変更をすばやく確認できるように、変更されたファイルをフィルター処理する{% ifversion pr-tree-view %}か、ファイル ツリーを使用してファイル間を移動する{% endif %}ことができます。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter files
ms.openlocfilehash: 1ca50334e4329d40ee164cd01523abc69e127ab3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884174'
---
pull request 内のファイルは、`.html` や `.js` などのファイル拡張子の種類、拡張子なし、コード所有権、ドットファイルなどでフィルター処理することができます。{% ifversion pr-tree-view %}また、ファイル ツリーを使用すると、ファイル パスでフィルター処理したり、ファイル間を移動したり、変更されたファイルの概要を表示したりすることができます。{% endif %}

## [File Filter]\(ファイル フィルター) ドロップダウンの使用

{% tip %}

**ヒント:** pull request の diff 表示を簡素化するには、[File Filter]\(ファイル フィルター) ドロップダウン メニューから、pull request の diff 内の削除したファイルまたは既に表示したファイルを一時的に非表示にすることもできます。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. プルリクエストのリストで、フィルタしたいプルリクエストをクリックします。
{% data reusables.repositories.changed-files %}
4. [File filter] ドロップダウンメニュードロップダウンメニュー使って、目的のフィルタを選択、選択解除、またはクリックします。
  ![pull request の diff の上にあるファイル フィルター オプション](/assets/images/help/pull_requests/file-filter-option.png)
5. 必要に応じて、フィルターの選択をクリアするには、 **[Files changed]\(変更したファイル)** タブで、 **[Clear]\(クリア)** をクリックします。
  ![ファイル フィルター選択のクリア](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}
## ファイル ツリーの使用

{% data reusables.repositories.sidebar-pr %}
1. プルリクエストのリストで、フィルタしたいプルリクエストをクリックします。
{% data reusables.repositories.changed-files %}

1. ファイル ツリー内のファイルをクリックして、対応するファイルの diff を表示します。 ファイル ツリーが表示されない場合は、{% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} をクリックしてファイル ツリーを表示します。

   {% note %}

   **注**: 画面の幅が狭すぎる場合、または pull request に含まれるファイルが 1 つのみの場合、ファイル ツリーは表示されません。

   {% endnote %}
   
   ![[変更したファイルのフィルタリング] 検索ボックスとファイル ツリーが強調されたスクリーンショット](/assets/images/help/repository/file-tree.png)
1. ファイル パスでフィルタリングするには、 **[Filter changed files]\(変更したファイルのフィルタリング)** 検索ボックスに、ファイル パスの一部または全部を入力します。 または、[File Filter]\(ファイル フィルター) ドロップダウンを使用します。 詳細については、「[Using the file filter dropdown](#using-the-file-filter-dropdown)」 ([File Filter]\(ファイル フィルター) ドロップダウンの使用) を参照してください。

{% endif %}

## 参考資料

- 「[About comparing branches in a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)」 (pull request 内のブランチの比較について)
- 「[Finding changed methods and functions in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)」 (pull request で変更されたメソッドや機能を見つける)
