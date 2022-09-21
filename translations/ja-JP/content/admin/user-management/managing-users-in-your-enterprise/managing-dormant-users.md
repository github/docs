---
title: 休眠ユーザの管理
redirect_from:
  - /enterprise/admin/articles/dormant-users
  - /enterprise/admin/articles/viewing-dormant-users
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant
  - /enterprise/admin/user-management/managing-dormant-users
  - /admin/user-management/managing-dormant-users
intro: '{% data reusables.enterprise-accounts.dormant-user-activity-threshold %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Licensing
ms.openlocfilehash: 7594a0fc22bef10e84334727ad9e79aa02cd1da6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146680926'
---
{% ifversion ghec %} {% data reusables.enterprise-accounts.dormant-user-release-phase %} {% endif %}

## 休眠ユーザーについて

{% data reusables.enterprise-accounts.dormant-user-activity %}

{% ifversion ghes or ghae%}
## 休眠ユーザの表示

{% data reusables.enterprise-accounts.viewing-dormant-users %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 左サイドバーで、 **[Dormant users]\(休眠ユーザー\)** をクリックします。
![[Dormant users]\(休眠ユーザー\) タブ](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png){% ifversion ghes %}
4. この一覧にあるすべての休眠ユーザーを一時停止するには、ページの上部にある **[Suspend all]\(全員をサスペンド\)** をクリックします。
![[Suspend all]\(全員をサスペンド\) ボタン](/assets/images/enterprise/site-admin-settings/suspend-all.png){% endif %}

## ユーザアカウントが休眠状態かの判断

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %}
5. **[User info]\(ユーザー情報\)** セクションで "Dormant" (休眠) という語の付いた赤い点は、そのユーザー アカウントが休眠状態であることを示し、"Active" (アクティブ) という語の付いた緑の点はそのユーザー アカウントがアクティブであることを示します。
![休眠中のユーザー アカウント](/assets/images/enterprise/stafftools/dormant-user.png)
![アクティブなユーザー アカウント](/assets/images/enterprise/stafftools/active-user.png)

## 休眠の閾値の設定

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. [Dormancy threshold] の下で、ドロップダウンメニューを使って、希望する休眠閾値をクリックします。
![休眠のしきい値のドロップダウン メニュー](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)

{% endif %}

{% ifversion ghec %}
## エンタープライズ アカウントから休眠ユーザー レポートをダウンロードする

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.enterprise-accounts-compliance-tab %}
1. 休眠ユーザー (ベータ) レポートを CSV ファイルとしてダウンロードするには、[その他] の下にある {% octicon "download" aria-label="The Download icon" %} **[ダウンロード]** をクリックします。
  ![[コンプライアンス] ページの [その他] の下にある [ダウンロード] ボタン](/assets/images/help/business-accounts/dormant-users-download-button.png)

{% tip %}

**ヒント:** ユーザーの休眠状態を評価するために、ユーザー アクティビティのスコープは、エンタープライズに関連付けられている組織、リポジトリ、またはサインオン イベントに関するユーザー アクティビティのみを含むように設定されています。 たとえば、ユーザーが最近、エンタープライズに関連付けられていないパブリック リポジトリの問題についてコメントした場合は、休眠状態と見なされる可能性があります。 ただし、エンタープライズ内の組織に関連付けられているパブリック リポジトリの問題について最近コメントした場合は、休眠状態と見なされることはなく、休眠ユーザー レポートには表示されません。

Web サインオン イベントの場合、エンタープライズに関連付けられている SSO ドメイン経由のサインオン イベントのみが、エンタープライズに関連付けられたユーザー アクティビティと見なされます。

{% endtip %}

{% endif %}
