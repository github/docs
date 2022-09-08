---
title: Enterprise 向けの GitHub Mobile を管理する
intro: 'ユーザーが {% data variables.product.prodname_mobile %} を使って {% data variables.product.product_location %} に接続できるかどうかを決定できます。'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Mobile
redirect_from:
  - /admin/configuration/configuring-your-enterprise/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/managing-github-for-mobile-for-your-enterprise
shortTitle: Manage GitHub Mobile
ms.openlocfilehash: f46673c16611a7f1ced6d0476c6ad3d79807f6d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062268'
---
## {% data variables.product.prodname_mobile %} について

{% data variables.product.prodname_mobile %} を使うと、認証の成功後、モバイルデバイスから {% data variables.product.product_location %} での作業をトリアージ、コラボレーション、管理できます。 {% data reusables.mobile.about-mobile %} 詳しくは、「[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)」を参照してください。

{% data variables.product.prodname_mobile %} を使用して {% data variables.product.product_location %} を認証し、インスタンスのデータにアクセスすることを許可または禁止できます。 既定では、{% data variables.product.prodname_mobile %} は {% ifversion ghes > 3.3 %} {% data variables.product.product_location %} を使うユーザーに対して有効になります。{% else %} {% data variables.product.product_location %} を使うユーザーに対して有効になりません。 {% data variables.product.prodname_mobile %} を使ってインスタンスへの接続を許可するには、インスタンスの機能を有効にする必要があります。{% endif %}

{% ifversion ghes < 3.6 %} {% note %}

**注:** {% data variables.product.prodname_ghe_server %} 3.4.0 以降にアップグレードするとき、{% data variables.product.prodname_mobile %} を以前に無効または有効にしていない場合、{% data variables.product.prodname_mobile %} は既定で有効になります。 インスタンスの {% data variables.product.prodname_mobile %} を前に無効または有効にしている場合、アップグレード時にユーザー設定が保持されます。 インスタンスのアップグレードについて詳しくは、「[{% data variables.product.product_name %} のアップグレード](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)」を参照してください。

{% endnote %} {% endif %}

## {% data variables.product.prodname_mobile %} の有効化または無効化

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}
1. 左側のサイドバーで、 **[モバイル]** をクリックします。
  ![{% data variables.product.prodname_ghe_server %} 管理コンソールの左サイドバーの "モバイル"](/assets/images/enterprise/management-console/click-mobile.png)
1. [GitHub Mobile] で **[GitHub Mobile アプリを有効にする]** を選択するか、選択解除します。
  ![{% data variables.product.prodname_ghe_server %} 管理コンソールの "GitHub Mobile アプリを有効にする" のチェックボックス](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png) {% data reusables.enterprise_management_console.save-settings %}
