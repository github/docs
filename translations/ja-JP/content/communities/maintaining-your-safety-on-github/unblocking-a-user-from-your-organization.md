---
title: Organization からユーザのブロックを解除する
intro: Organization のオーナーとモデレーターは、以前にブロックしたユーザーのブロックを解除し、Organization のリポジトリへのアクセスを回復できます。
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
  - /github/building-a-strong-community/unblocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Unblock from your org
ms.openlocfilehash: 0c7099c21e3342717605f59a94e0025a7949b1cc
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117662'
---
Organization からユーザのブロックを解除すると、そのユーザは Organization のリポジトリにコントリビュートできるようになります。

特定の時間だけユーザをブロックした場合、その時間が終われば自動的にブロックが解除されます。 詳細については、「[Organization からのユーザーのブロック](/articles/blocking-a-user-from-your-organization)」を参照してください。

{% tip %}

**ヒント**: コラボレーター ステータスや Star、Watch など、組織からユーザーをブロックした時に削除された設定については、そのユーザーのブロックを解除しても復元されません。

{% endtip %}

## コメントでユーザのブロックを解除する

1. 作者のブロックを解除したいコメントに移動します。
2. コメントの右上隅で {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、次に **[ユーザーのブロックを解除]** をクリックします。
![ユーザーのブロック解除オプションを表示する水平のケバブ アイコンとコメント調整メニュー](/assets/images/help/repository/comment-menu-unblock-user.png)
3. ユーザーのブロック解除を確認するには **[OK]** をクリックします。

## Organization 設定でユーザのブロックを解除する


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
1. [ブロックされたユーザー] の下で、ブロックを解除したいユーザーの横にある **[ブロック解除]** をクリックします。
![ユーザー ブロックの解除ボタン](/assets/images/help/organizations/org-unblock-user-button.png)

## 参考資料

- 「[組織からのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)」
- "[個人アカウントからのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)"
- "[個人アカウントからユーザーのブロックを解除する](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)"
- "[悪用あるいはスパムをレポートする](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
