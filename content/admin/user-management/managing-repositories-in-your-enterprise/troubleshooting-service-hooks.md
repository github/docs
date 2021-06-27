---
title: Troubleshooting service hooks
intro: 'If payloads aren''t being delivered, check for these common problems.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks/
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
  - /admin/user-management/troubleshooting-service-hooks
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
2. Browse to the repository you're investigating.
3. Click on the **Hooks** link in the navigation sidebar.
  ![Hooks Sidebar](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Click on the **Latest Delivery** link under the service hook having problems.
  ![Hook Details](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. Under **Remote Calls**, you'll see the headers that were used when POSTing to the remote server along with the response that the remote server sent back to your installation.

## Viewing the payload

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Browse to the repository you're investigating.
3. Click on the **Hooks** link in the navigation sidebar.
  ![Hooks Sidebar](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Click on the **Latest Delivery** link under the service hook having problems.
5. Click **Delivery**.
  ![Viewing the payload](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

## Viewing past deliveries

Deliveries are stored for 15 days.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Browse to the repository you're investigating.
3. Click on the **Hooks** link in the navigation sidebar.
  ![Hooks Sidebar](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Click on the **Latest Delivery** link under the service hook having problems.
5. To view other deliveries to that specific hook, click **More for this Hook ID**:
  ![Viewing more deliveries](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
