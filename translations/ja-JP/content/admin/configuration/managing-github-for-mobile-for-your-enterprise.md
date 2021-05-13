---
title: Enterprise 向けの GitHub for Mobile を管理する
intro: '認証されたユーザが {% data variables.product.prodname_mobile %} を使用して {% data variables.product.product_location %} に接続できるかどうかを決定できます。'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for an enterprise on {% data variables.product.product_name %}.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### {% data variables.product.prodname_mobile %} について

{% data reusables.mobile.about-mobile %}詳しい情報については、「[GitHub for Mobile](/github/getting-started-with-github/github-for-mobile)」を参照してください。

Enterprise のメンバーは、{% data variables.product.prodname_mobile %} を使用して、モバイルデバイスから {% data variables.product.product_location %} での作業をトリアージ、コラボレーション、管理できます。 デフォルトでは、{% data variables.product.prodname_mobile %} は {% data variables.product.product_location %} に対して有効になっています。 Enterprise メンバーが {% data variables.product.prodname_mobile %} を使用して {% data variables.product.product_location %} を認証し、Enterprise のデータにアクセスすることを許可または禁止できます。

### {% data variables.product.prodname_mobile %} の有効化または無効化

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
1. 左サイドバーで、[**Mobile**] をクリックします。 ![{% data variables.product.prodname_ghe_server %} Management Console の左サイドバーにある [Mobile]](/assets/images/enterprise/management-console/click-mobile.png)
1. [GitHub for mobile] で、[**Enable GitHub Mobile Apps**] を選択または選択解除します。 ![{% data variables.product.prodname_ghe_server %} Management Console の [Enable GitHub Mobile Apps] チェックボックス](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png)
{% data reusables.enterprise_management_console.save-settings %}
