---
title: プルリクエストでフィードバックをする
intro: 各課題のリポジトリ内の、特別なプルリクエストで学生にフィードバックをすることができます。
permissions: People with read permissions to a repository can leave feedback in a pull request for the repository.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
  - /education/manage-coursework-with-github-classroom/leave-feedback-with-pull-requests
shortTitle: Pull requests
ms.openlocfilehash: 6315904aaaa02acc66249039e99a402b455a8871
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119533'
---
## 課題へのフィードバック用プルリクエストについて

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

課題へのフィードバック用 pull request を有効にすると、{% data variables.product.prodname_classroom %} は各学生またはチームの課題リポジトリ内に、「**Feedback**」というタイトルの特別な pull request を作成します。 このプルリクエストは、課題リポジトリのデフォルトブランチに学生がプッシュした各コミットに自動的に表示されます。

## 前提条件

フィードバック用プルリクエストを作成してアクセスすするには、課題の作成時にフィードバック用プリルクエストを有効にする必要があります。 {% data reusables.classroom.for-more-information-about-assignment-creation %}

## 課題のプルリクエストにフィードバックを行う

{% data reusables.classroom.sign-into-github-classroom %}
1. クラスルームのリストで、レビューする課題のあるクラスルームをクリックします。
  ![組織のクラスルームのリスト内のクラスルーム](/assets/images/help/classroom/click-classroom-in-list.png) {% data reusables.classroom.click-assignment-in-list %}
1. 提出の右側にある **[レビュー]** をクリックします。
  ![提出した課題のリストにある、課題の [レビュー] ボタン](/assets/images/help/classroom/assignments-click-review-button.png)
1. pull request をレビューします。 詳細については、「[pull request へコメントする](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)」を参照してください。

## 参考資料

- 「[{% data variables.product.prodname_classroom %} と IDE の統合](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)」
