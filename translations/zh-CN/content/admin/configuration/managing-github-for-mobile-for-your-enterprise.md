---
title: 管理企业的手机版 GitHub
intro: '您可以决定经验证的用户是否可以通过 {% data variables.product.prodname_mobile %} 连接 {% data variables.product.product_location %}。'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for an enterprise on {% data variables.product.product_name %}.'
versions:
  enterprise-server: '>=3.0'
type: how_to
topics:
  - Enterprise
  - Mobile
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### 关于 {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %} 更多信息请参阅“[手机版 GitHub](/github/getting-started-with-github/github-for-mobile)”。

企业成员可以使用 {% data variables.product.prodname_mobile %} 从移动设备分类、协作和管理 {% data variables.product.product_location %} 上的工作。 默认情况下，{% data variables.product.prodname_mobile %} 为 {% data variables.product.product_location %} 启用。 您可以允许或不允许企业成员使用 {% data variables.product.prodname_mobile %} 向 {% data variables.product.product_location %} 验证并访问企业的数据。

### 启用或禁用 {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
1. 在左侧边栏中，单击 **Mobile（移动）**。 ![{% data variables.product.prodname_ghe_server %} 管理控制台左侧边栏中的"Mobile（移动）"](/assets/images/enterprise/management-console/click-mobile.png)
1. 在“GitHub for mobile（手机版 GitHub）”下，选择或取消选择 **Enable GitHub Mobile Apps（启用 GitHub 手机 App）**。 ![{% data variables.product.prodname_ghe_server %} 管理控制台中的"Enable GitHub Mobile Apps（启用 GitHub 手机 App）"复选框](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png)
{% data reusables.enterprise_management_console.save-settings %}
