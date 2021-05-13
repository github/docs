---
title: Configuring applications
intro: 'You can configure internal application settings for {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Adjusting image caching

You can choose the amount of time that {% data variables.product.product_location %} caches avatars. When you increase the cache time, you increase the amount of time a user's avatar will take to load. Configuring the cache time with too low a value can overload {% data variables.product.product_location %} work processes.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
3. In the left sidebar, click **Applications**. ![Applications tab in the settings sidebar](/assets/images/enterprise/management-console/sidebar-applications.png)
4. Under "Avatar image cache time (seconds)", type the number of seconds that you would like
{% data variables.product.product_location %} to cache avatar images.
![Avatar image caching form field](/assets/images/enterprise/management-console/add-image-caching-value-field.png)
{% data reusables.enterprise_management_console.save-settings %}
