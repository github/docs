---
title: Troubleshooting service hooks
intro: 'If payloads aren''t being delivered, check for these common problems.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
  - /admin/user-management/troubleshooting-service-hooks
  - /admin/user-management/managing-repositories-in-your-enterprise/troubleshooting-service-hooks
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Troubleshoot service hooks
---
## Getting information on deliveries

You can find information for the last response of all service hooks deliveries on any repository.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_user_management.service-hooks-sidebar-navigation %}
1. Under the service hook having problems, click **Latest Delivery**.
1. Under **Remote Calls**, you'll see the headers that were used when POSTing to the remote server along with the response that the remote server sent back to your installation.

## Viewing the payload

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_user_management.service-hooks-sidebar-navigation %}
1. Under the service hook having problems, click the **Latest Delivery** link.
1. Click **Delivery**.

## Viewing past deliveries

Deliveries are stored for 15 days.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_user_management.service-hooks-sidebar-navigation %}
1. Under the service hook having problems, click the **Latest Delivery** link.
1. To view other deliveries to that specific hook, click **More for this Hook ID**.
