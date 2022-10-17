---
title: Enterprise 向けの GitHub Pages を設定する
intro: 'Enterprise の {% data variables.product.prodname_pages %} を有効または無効に{% ifversion ghes %}して、サイトを公開するかどうかを選択{% endif %}することができます。'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-github-pages-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Pages
shortTitle: Configure GitHub Pages
ms.openlocfilehash: 1cb2bd78f006bfd86a3f0a2e42db4fcf2cea3b73
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112878'
---
{% ifversion ghes %}

## {% data variables.product.prodname_pages %} の公開サイトを有効にする

エンタープライズでプライベート モードが有効になっている場合、公開サイトを有効にしない限り、エンタープライズがホストする {% data variables.product.prodname_pages %} サイトにアクセスできません。

{% warning %}

**警告:** {% data variables.product.prodname_pages %} の公開サイトを有効にすると、エンタープライズのすべてのリポジトリ内のすべてのサイトに一般ユーザーがアクセスできるようになります。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
4. **[パブリック ページ]** を選択します。
  ![[パブリック ページ] を有効にするチェックボックス](/assets/images/enterprise/management-console/public-pages-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## Enterprise 向けの {% data variables.product.prodname_pages %} を無効にする

エンタープライズでサブドメインの分離が無効化されているなら、{% data variables.product.prodname_pages %} も無効化し、潜在的なセキュリティの脆弱性から身を守るべきです。 詳細については、「[サブドメイン分離の有効化](/admin/configuration/enabling-subdomain-isolation)」を参照してください。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. **[ページの有効化]** の選択を解除します。
  ![{% data variables.product.prodname_pages %} を無効にするチェックボックス](/assets/images/enterprise/management-console/pages-select-button.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.pages-tab %}
1. [ページ ポリシー] で **[{% data variables.product.prodname_pages %} を有効にする]** の選択を解除します。
  ![{% data variables.product.prodname_pages %} を無効にするチェックボックス](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png) {% data reusables.enterprise-accounts.pages-policies-save %}

{% endif %}

{% ifversion ghes > 3.4 %}

## エンタープライズの {% data variables.product.prodname_pages %} 応答ヘッダーの構成

{% data variables.product.product_location %} でホストされている {% data variables.product.prodname_pages %} サイトの応答ヘッダーを追加またはオーバーライドできます。

{% warning %}

**警告:** 保存する前に、応答ヘッダーが正しく構成されていることを確認します。 不適切な構成は、{% data variables.product.product_location %} のセキュリティに悪影響を与える可能性があります。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. ヘッダーの設定を入力し、 **[ヘッダーの追加]** をクリックします。
   - **[HTTP ヘッダー名]** フィールドに、ヘッダー名を入力します。 ヘッダー名の長さは 128 文字未満にする必要があります。
   - **[HTTP ヘッダー値]** フィールドに、ヘッダー値を入力します。 ヘッダー値の長さは 300 文字未満にする必要があります。
![{% data variables.product.prodname_pages %} の応答ヘッダー名と、{% data variables.enterprise.management_console %} の値フィールド](/assets/images/enterprise/management-console/pages-override-header-section.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}
## 参考資料

- "[プライベート モードの有効化](/admin/configuration/enabling-private-mode)" {% endif %}
