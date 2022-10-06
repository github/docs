---
title: ユーザあるいはOrganizationへの訴訟ホールドの配置
intro: ユーザまたは Organization を法的に保留して、それらが所有するリポジトリを Enterprise から完全に削除できないようにすることができます。
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
  - /admin/user-management/placing-a-legal-hold-on-a-user-or-organization
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Auditing
  - Enterprise
  - Organizations
  - User account
shortTitle: Place a legal hold
ms.openlocfilehash: 5837bfcd05867ed5be7e298996bb0de2680b4921
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199946'
---
通常は、誰かがリポジトリを削除するとそのリポジトリは90日間はディスク上にあり、サイト管理ダッシュボード経由でリストアできます。 90日を過ぎると、そのリポジトリはパージされ、恒久的に削除されます。 ユーザあるいはOrganizationに訴訟ホールドを配置すると、所有しているリポジトリは無期限にリストアできるようになります。

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. **[訴訟ホールドの配置]** をクリックします。
![訴訟ホールドの配置ボタン](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
