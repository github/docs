---
title: デプロイ キーをレビューする
intro: デプロイ キーをレビューして、許可されていない (あるいは侵害された可能性のある) キーがないことを確認してください。 有効な既存のデプロイ キーを承認することもできます。
redirect_from:
  - /articles/reviewing-your-deploy-keys
  - /github/authenticating-to-github/reviewing-your-deploy-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-deploy-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Deploy keys
ms.openlocfilehash: 964ec4cbc91745c041dd973e4e950b605c5c0233
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088409'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
3. サイドバーの [Security]\(セキュリティ\) セクションで、 **[{% octicon "key" aria-label="The key icon" %} Deploy keys]\(キーのデプロイ\)** をクリックします。
{% else %}
3. 左サイドバーにある **[Deploy keys]\(キーのデプロイ\)** をクリックします。
![[Deploy keys]\(キーのデプロイ\) 設定](/assets/images/help/settings/settings-sidebar-deploy-keys.png) {% endif %}
4. [Deploy keys] ページで、自分のアカウントに関連付けられているデプロイ キーを書き留めます。 認識していないもの、または古いものについては、 **[Delete]\(削除\)** をクリックします。 残しておきたい有効なデプロイ キーがある場合は、 **[Approve]\(承認\)** をクリックします。
    ![デプロイ キー リスト](/assets/images/help/settings/settings-deploy-key-review.png)

詳細については、「[デプロイ キーの管理](/guides/managing-deploy-keys)」を参照してください。

## 参考資料
- [通知の構成](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
