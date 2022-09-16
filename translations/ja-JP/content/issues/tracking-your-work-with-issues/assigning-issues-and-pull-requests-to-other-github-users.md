---
title: GitHub の他のユーザに Issue およびプルリクエストをアサインする
intro: アサインされた人によって、誰が特定の Issue やPull Requestで作業しているかが明確になります。
permissions: 'Anyone with write access to a repository can assign issues and pull requests. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/assigning-issues-and-pull-requests-to-other-github-users
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
  - /github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users
  - /issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Assign issues & PRs
ms.openlocfilehash: 0e1f4029ddcd180e892e43257ae3a75d0046ce1d
ms.sourcegitcommit: 219fb805abddaef3e5547638bd798da890020bfd
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878455'
---
## Issue およびPull Requestをアサインされた人について

自分自身、該当する issue または pull request にコメントした任意の人、リポジトリへの書き込みアクセス許可を持つ任意の人、リポジトリの読み取りアクセス許可を持つ Organization メンバーを含む複数の人を各 issue または pull request に割り当てることができます。 詳細については、「[{% data variables.product.prodname_dotcom %} 上のアクセス権限](/articles/access-permissions-on-github)」を参照してください。

パブリック リポジトリと有料アカウントのプライベート リポジトリ内にある issue と pull request には、最大 10 人を割り当てることができます。 無料プランのプライベート リポジトリは、issue また pull request ごとに 1 人に制限されます。

## 個別の Issue またはPull Requestを割り当てる

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. ユーザに割り当てる Issue またはPull Requestを開きます。
4. issue または pull request に誰も割り当てられていない場合は、 **[自分自身を割り当てる]** をクリックして自分を割り当てます。
  ![[自分自身に割り当てる] 項目](/assets/images/help/issues/assign_yourself.png)
5. 右側のメニューで **[担当者]** をクリックします。
   ![[担当者] メニュー項目](/assets/images/help/issues/assignee_menu.png)
6. Issue またはPull Requestをユーザに割り当てるには、ユーザ名を入力し、表示された名前をクリックします。 Issue またはPull Requestには、最大で 10 人を選択してアサインできます。
  ![issue の割り当てドロップダウン メニュー](/assets/images/help/issues/issues_assigning_dropdown.png)

## 複数の Issue またはPull Requestを割り当てる

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. 誰かにアサインしたいアイテムの隣のチェックボックスを選択してください。
  ![問題のメタデータ チェックボックス](/assets/images/help/issues/issues_assign_checkbox.png)
4. 右上隅の **[割り当て]** をクリックします。
5. アイテムをユーザにアサインするには、その人のユーザ名を入力し始め、その名前が表示されたらクリックします。 Issue またはPull Requestには、最大で 10 人を選択してアサインできます。
  ![issue の割り当てドロップダウン メニュー](/assets/images/help/issues/issues_assigning_dropdown.png)

## 参考資料

* [issue および pull request を担当者でフィルタリングする](/articles/filtering-issues-and-pull-requests-by-assignees)
