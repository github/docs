---
title: リポジトリ内でブランチを作成および削除する
intro: '{% data variables.product.product_name %}上で直接、ブランチの作成や削除ができます。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create & delete branches
ms.openlocfilehash: 44b56d8a1884e5cbfe0832f291cdc244b57a3810
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526631'
---
## ブランチの作成
{% data variables.product.product_name %} で、さまざまな方法でブランチを作成できます。

{% note %}

**注:** プッシュ アクセス権のあるリポジトリでのみ、ブランチを作成できます。

{% endnote %}

{% ifversion create-branch-from-overview %}
### ブランチ経由のブランチ作成の概要
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. **[新しいブランチ]** をクリックします。
   ![[ブランチの概要] ページのスクリーンショット。[新しいブランチ] ボタンが強調表示されています](/assets/images/help/branches/new-branch-button.png)
2. ダイアログ ボックスにブランチ名を入力し、必要に応じてブランチ ソースを変更します。  
   リポジトリがフォークの場合、ブランチ ソースとしてアップストリーム リポジトリを選択することもできます。
   ![フォークのブランチ作成モーダルのスクリーンショット。ブランチ ソースが強調表示されています](/assets/images/help/branches/branch-creation-popup-branch-source.png)
3. **[ブランチの作成]** をクリックします。
   ![ブランチ作成モーダルのスクリーンショット。[ブランチの作成] ボタンが強調表示されています](/assets/images/help/branches/branch-creation-popup-button.png) {% endif %}

### ブランチ ドロップダウンを使用してブランチを作成する
{% data reusables.repositories.navigate-to-repo %}
1. 必要に応じて、リポジトリの既定のブランチ以外のブランチから新しいブランチを作成する場合、{% octicon "git-branch" aria-label="The branch icon" %} **[ブランチ]** をクリックし、別のブランチを選択します。
    ![概要ページのブランチのリンク](/assets/images/help/branches/branches-overview-link.png)
1. ブランチセレクタメニューをクリックします。
    ![ブランチ セレクター メニュー](/assets/images/help/branch/branch-selection-dropdown.png)
1. 新しいブランチの一意の名前を入力して、 **[ブランチの作成]** を選択します。
    ![ブランチ作成のテキスト ボックス](/assets/images/help/branch/branch-creation-text-box.png)
    
{% ifversion fpt or ghec or ghes > 3.4 %}
### Issueのためのブランチの作成
直接Issueのページから作業のためのブランチを作成し、すぐに作業を開始できます。 詳細については、「[Issue の作業のためのブランチの作成](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue)」を参照してください。
{% endif %}

## ブランチの削除

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**注:** 削除するブランチがリポジトリの既定のブランチである場合は、そのブランチを削除する前に新しい既定のブランチを選択する必要があります。 詳細については、「[既定のブランチを変更する](/github/administering-a-repository/changing-the-default-branch)」を参照してください。

{% endnote %}

削除するブランチがオープンなプルリクエストに関連付けられている場合は、ブランチを削除する前にプルリクエストをマージまたはクローズする必要があります。 詳細については、「[pull request のマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)」と「[pull request のクローズ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. 削除するブランチまでスクロールし、{% octicon "trash" aria-label="The trash icon to delete the branch" %} をクリックします。
    ![ブランチの削除](/assets/images/help/branches/branches-delete.png) {% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. 少なくとも 1 つのオープンの pull request に関連付けられているブランチを削除する場合は、その pull request をクローズするつもりであることを確認する必要があります。
   
   ![ブランチの削除を確認する](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %} 詳細については、[ブランチの概要](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)に関するページを参照してください。

## 参考資料

- [ブランチについて](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [リポジトリ内のブランチを表示する](/github/administering-a-repository/viewing-branches-in-your-repository)
- [pull request 内のブランチの削除と復元](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)
