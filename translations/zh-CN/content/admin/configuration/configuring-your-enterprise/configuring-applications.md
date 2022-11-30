---
title: 配置应用程序
intro: '您可以为 {% data variables.product.product_location %} 配置内部应用程序设置。'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
  - /admin/configuration/configuring-applications
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
---
### 调整图像缓存

您可以选择 {% data variables.product.product_location %} 缓存头像的时长。 如果您增加缓存时间，则会增加加载用户头像所需的时长。 将缓存时间值配置为过小的值会导致 {% data variables.product.product_location %} 工作进程过载。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
3. 在左侧边栏中，单击 **Applications**。 ![设置侧边栏中的 Applications 选项卡](/assets/images/enterprise/management-console/sidebar-applications.png)
4. 在“Avatar image cache time (seconds)（头像缓存时间[秒]）”下，输入您希望
{% data variables.product.product_location %} 缓存头像的秒数。
![头像图像缓存表单字段](/assets/images/enterprise/management-console/add-image-caching-value-field.png)
{% data reusables.enterprise_management_console.save-settings %}
