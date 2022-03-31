---
title: 管理企业的 GitHub Mobile
intro: 'You can decide whether people can use {% data variables.product.prodname_mobile %} to connect to {% data variables.product.product_location %}.'
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
shortTitle: 管理 GitHub Mobile
---

## 关于 {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} allows people to triage, collaborate, and manage work on {% data variables.product.product_location %} from a mobile device after successful authentication. {% data reusables.mobile.about-mobile %} 更多信息请参阅“[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)”。

You can allow or disallow people from using {% data variables.product.prodname_mobile %} to authenticate to {% data variables.product.product_location %} and access your instance's data. By default, {% data variables.product.prodname_mobile %} is{% ifversion ghes > 3.3 %} enabled for people who use {% data variables.product.product_location %}.{% else %} not enabled for people who use {% data variables.product.product_location %}. To allow connection to your instance with {% data variables.product.prodname_mobile %}, you must enable the feature for your instance.{% endif %}

{% ifversion ghes < 3.6 and ghes > 3.1 %}
{% note %}

**Note:** If you upgrade to {% data variables.product.prodname_ghe_server %} 3.4.0 or later and have not previously disabled or enabled {% data variables.product.prodname_mobile %}, {% data variables.product.prodname_mobile %} will be enabled by default. If you previously disabled or enabled {% data variables.product.prodname_mobile %} for your instance, your preference will be preserved upon upgrade. For more information about upgrading your instance, see "[Upgrading {% data variables.product.product_name %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)."

{% endnote %}
{% endif %}

## 启用或禁用 {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
1. 在左侧边栏中，单击 **Mobile（移动）**。 ![{% data variables.product.prodname_ghe_server %} 管理控制台左侧边栏中的"Mobile（移动）"](/assets/images/enterprise/management-console/click-mobile.png)
1. 在“GitHub Mobile”下，选择或取消选择 **Enable GitHub Mobile Apps（启用 GitHub Mobile App）**。 ![{% data variables.product.prodname_ghe_server %} 管理控制台中的"Enable GitHub Mobile Apps（启用 GitHub 手机 App）"复选框](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png)
{% data reusables.enterprise_management_console.save-settings %}
