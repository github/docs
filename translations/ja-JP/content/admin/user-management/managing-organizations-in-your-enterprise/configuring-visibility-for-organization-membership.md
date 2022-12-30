---
title: Organizationのメンバーシップの可視性の設定
intro: Enterprise 全体の新しい Organization メンバーの可視性をパブリックまたはプライベートに設定できます。 また、メンバーが自分の可視性をデフォルトから変更できないようにすることもできます。
redirect_from:
  - /enterprise/admin/user-management/configuring-visibility-for-organization-membership
  - /admin/user-management/configuring-visibility-for-organization-membership
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Organizations
  - User account
shortTitle: Set membership visibility
ms.openlocfilehash: e628fab4f8aa77579e0ce89f18a70813274928b6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332345'
---
{% ifversion ghes %} コマンドライン ユーティリティを使用して、インスタンス内の現在のすべての Organization メンバーに既定の設定を適用することもできます。 たとえばすべてのOrganizationのメンバーの可視性をパブリックにしたい場合、管理設定でデフォルトをパブリックにしてすべての新しいメンバーにデフォルトを適用し、それからコマンドラインユーティリティを使ってパブリック設定を既存のメンバーに適用できます。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
3. [既定の Organization メンバーシップの表示] でドロップダウン メニューを使用して、 **[プライベート]** または **[パブリック]** をクリックします。
  ![[既定の Organization メンバーシップの表示] をパブリックまたはプライベートに設定するオプションがあるドロップダウン メニュー](/assets/images/enterprise/site-admin-settings/default-organization-membership-visibility-drop-down-menu.png)
4. 必要に応じて、メンバーが自分のメンバーシップの表示を既定値から変更できないようにするには、 **[Organization のメンバーに適用]** を選択します。
  ![すべてのメンバーに既定の設定を適用するチェックボックス](/assets/images/enterprise/site-admin-settings/enforce-default-org-membership-visibility-setting.png){% ifversion ghes %}
5. 既存のすべてのメンバーに新しい表示設定を適用する場合は、`ghe-org-membership-update` コマンドライン ユーティリティを使用します。 詳細については、「[コマンド ライン ユーティリティ](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-membership-update)」を参照してください。{% endif %}
