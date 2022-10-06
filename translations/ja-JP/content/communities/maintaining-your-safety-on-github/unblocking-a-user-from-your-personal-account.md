---
title: 個人アカウントからユーザのブロックを解除する
intro: 'ブロックした {% data variables.product.prodname_dotcom %} ユーザとの問題が解決した場合、そのユーザのアカウントのブロックを解除できます。'
redirect_from:
  - /articles/unblocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/unblocking-a-user-from-your-personal-account
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Unblock from your account
ms.openlocfilehash: a88a8613a8d787ee7e42ea9f6f5ef994353aedc8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090273'
---
ユーザのブロックを解除した場合、そのユーザはあなたをリポジトリのコラボレーターに招待できます。 GitHub 上の任意の場所で彼らが[あなたについて@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) した場合、通知を受け取ります。

お客様が所有しているリポジトリで、そのユーザは通常通りにコラボレートできるようになります。

アカウント設定、もしくはユーザのプロフィールページからユーザのブロックを解除できます。

## アカウント設定でのユーザのブロックの解除

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.blocked_users %}
3. [ブロックされたユーザー] の下で、ブロックを解除するユーザーの横にある **[ブロック解除]** をクリックします。
![ユーザー ブロックの解除ボタン](/assets/images/help/organizations/org-unblock-user-button.png)

## プロフィールページからのユーザのブロックの解除

{% data reusables.profile.user_profile_page_navigation %}
2. 左のサイドバーのユーザのプロフィール写真の下にある [{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}] をクリックしてから、 **[ユーザーのブロックの解除または報告]** をクリックします。
![ユーザーのブロックの解除または報告のリンク](/assets/images/help/profile/profile-unblock-or-report-user.png)
3. **[ブロックの解除]** をクリックします。
  ![ユーザーのブロックの解除または不正報告のオプションがあるモーダル ボックス](/assets/images/help/profile/profile-unblockuser.png)

{% tip %}

**ヒント**: コラボレーター ステータス、Star やフォローなど、ユーザをブロックした時に削除した設定については、そのユーザのブロックを解除しても回復しません。

{% endtip %}

## 参考資料

- "[個人アカウントからのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)"
- 「[組織からのユーザーのブロック](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)」
- "[組織からユーザーのブロックを解除する](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)"
- "[悪用あるいはスパムをレポートする](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)"
