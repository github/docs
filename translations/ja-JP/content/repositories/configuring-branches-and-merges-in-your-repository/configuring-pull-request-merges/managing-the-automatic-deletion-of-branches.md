---
title: ブランチの自動的削除を管理する
intro: プルリクエストがリポジトリにマージされた後、head ブランチを自動的に削除することができます。
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automatic branch deletion
ms.openlocfilehash: feaeb7c2178beab4dc23a310df6924c6e1c52e0f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882458'
---
リポジトリに対する管理者権限があるユーザなら誰でも、ブランチの自動的削除を有効化または無効化できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}[Pull Requests]\(pull request\){% else %}[Merge]\(マージ\) ボタン{% endif %}の下で、 **[Automatically delete head branches]\(head ブランチを自動的に削除する\)** を選択または選択解除します。
  ![ブランチの自動削除を有効または無効にするチェックボックス](/assets/images/help/repository/automatically-delete-branches.png)

## 参考資料
- 「[pull request のマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)」
- 「[リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository)」
