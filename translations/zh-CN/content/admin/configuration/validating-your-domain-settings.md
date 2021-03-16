---
title: 验证域设置
intro: '首次启动 {% data variables.product.product_location %} 之前，请确保域设置已正确配置。'
redirect_from:
  - /enterprise/admin/installation/validating-your-domain-settings
  - /enterprise/admin/configuration/validating-your-domain-settings
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. 要测试设备的 DNS 和 SSL 设置，请单击 **Test domain settings**。 ![测试域设置按钮](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}
