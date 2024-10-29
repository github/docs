---
title: Configuring applications
intro: 'You can configure internal application settings for {% data variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
  - /admin/configuration/configuring-applications
  - /admin/configuration/configuring-your-enterprise/configuring-applications
  - /admin/configuration/configuring-user-applications-for-your-enterprise/configuring-applications
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
1. In the "Settings" sidebar, click **Applications**.
1. Under "Avatar image cache time (seconds)", type the number of seconds that you would like {% data variables.location.product_location %} to cache avatar images.
{% data reusables.enterprise_management_console.save-settings %}

## Enabling retention policy for checks

You can enable a retention policy for checks, actions, and associated data by setting thresholds for archival and deletion. For more information about configuring actions, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. In the "Settings" sidebar, click **Checks**.
1. Select **Enable archiving of Checks-related data**.
1. Under "Archive threshold (days)", type the number of days for the archival threshold. Checks older than this number of days will be archived before being permanently deleted.
1. Under "Delete threshold (days)", type the number of days for the deletion threshold. An archived check exists in an archived state for the number of days specified here. After this threshold, the check will be permanently deleted.
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion azure-maps %}
{% ifversion ghes < 3.13 %}

## Enabling interactive maps

You can enable the display of interactive maps in the web interface for users of {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-user-applications-for-your-enterprise/configuring-interactive-maps)."

{% endif %}
{% endif %}
