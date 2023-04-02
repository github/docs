---
title: Configuring applications
intro: 'You can configure internal application settings for {% data variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
  - /admin/configuration/configuring-applications
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
---
## Adjusting image caching

You can choose the amount of time that {% data variables.location.product_location %} caches avatars. When you increase the cache time, you increase the amount of time a user's avatar will take to load. Configuring the cache time with too low a value can overload {% data variables.location.product_location %} work processes.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
3. In the "Settings" sidebar, click **Applications**.
4. Under "Avatar image cache time (seconds)", type the number of seconds that you would like {% data variables.location.product_location %} to cache avatar images.
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion status-check-retention %}
## Enabling retention policy for checks
You can enable a retention policy for checks, actions, and associated data by setting thresholds for archival and deletion. For more information about configuring actions, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. In the "Settings" sidebar, click **Checks**.
2. Select **Enable archiving of Checks-related data**.
3. Under "Archive threshold (days)", type the number of days for the archival threshold. Checks older than this number of days will be archived. 
4. Under "Delete threshold (days)", type the number of days for the deletion threshold. Archived checks older than this number of days will be permanently deleted. 
{% data reusables.enterprise_management_console.save-settings %}
{% endif %}
