---
title: Issue とプルリクエストのマイルストーンの作成と削除
intro: リポジトリ内にある Issue やPull Requestのグループに関する進行状況を追跡するためのマイルストーンを作成できます。
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/creating-and-editing-milestones-for-issues-and-pull-requests
  - /articles/creating-milestones-for-issues-and-pull-requests
  - /articles/creating-and-editing-milestones-for-issues-and-pull-requests
  - /github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Create & edit milestones
type: how_to
ms.openlocfilehash: c0e812b9f91f91d88d7512974f1df52efbf8c65b
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878796'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.milestones %}
4. 次のいずれかのオプションを選択します。
    - 新しいマイルストーンを作成するには、 **[新しいマイルストーン]** をクリックします。
  ![[新しいマイルストーン]](/assets/images/help/repository/new-milestone.png) ボタン
    - マイルストーンを編集するには、編集対象のマイルストーンの隣にある **[編集]** をクリックします。
  ![[マイルストーンの編集] オプション](/assets/images/help/repository/edit-milestone.png)
5. マイルストーンのタイトル、説明、またはその他の変更を入力し、 **[マイルストーンの作成]** または **[変更の保存]** をクリックします。 マイルストーンはMarkdown構文をレンダリングします。 マークダウン構文について詳しくは、「[基本的な書き方とフォーマットの構文](/github/writing-on-github/basic-writing-and-formatting-syntax)」を参照してください。

## マイルストーンの削除

マイルストーンを削除しても、Issue やPull Requestに影響はありません。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.milestones %}
4. 削除対象のマイルストーンの隣にある **[削除]** をクリックします。
![[マイルストーンの削除] オプション](/assets/images/help/repository/delete-milestone.png)

## 参考資料

- "[マイルストーンについて](/articles/about-milestones)"
- "[Issue および pull request にマイルストーンを関連付ける](/articles/associating-milestones-with-issues-and-pull-requests)"
- "[マイルストーンの進捗状況を表示する](/articles/viewing-your-milestone-s-progress)"
- "[Issue と pull request をマイルストーンでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-milestone)"
