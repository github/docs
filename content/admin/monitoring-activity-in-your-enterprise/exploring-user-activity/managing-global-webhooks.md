---
title: Managing global webhooks
shortTitle: Manage global webhooks
intro: You can configure global webhooks to notify external web servers when events occur within your enterprise.
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /admin/user-management/monitoring-activity-in-your-enterprise/managing-global-webhooks
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
---

## About global webhooks

You can use global webhooks to notify an external web server when events occur within your enterprise. You can configure the server to receive the webhook's payload, then run an application or code that monitors, responds to, or enforces rules for user and organization management for your enterprise. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks)."

For example, you can configure {% data variables.location.product_location %} to send a webhook when someone creates, deletes, or modifies a repository or organization within your enterprise. You can configure the server to automatically perform a task after receiving the webhook.

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## Adding a global webhook

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. Click **Add webhook**.
1. In the "Payload URL" field, type the URL where you'd like to receive payloads.
1. Optionally, select the **Content type** drop-down menu, and click a data format to receive the webhook payload in.
1. Optionally, in the **Secret** field, type a string to use as a `secret` key.
1. Optionally, if your payload URL is HTTPS and you would not like {% data variables.product.prodname_ghe_server %} to verify SSL certificates when delivering payloads, under "SSL verification", select **Disable**. Read the information about SSL verification, then click **Disable, I understand my webhooks may not be secure**.

  {% warning %}

  **Warning:** SSL verification helps ensure that hook payloads are delivered securely. We do not recommend disabling SSL verification.

  {% endwarning %}
1. Under "Which events would you like to trigger this webhook?", select if you'd like this webhook to trigger for every event or for selected events.
    - For every event, select **Send me everything**.
    - To choose specific events, select **Let me select individual events**.
1. If you chose to select individual events, select the events that will trigger the webhook.
1. To make the webhook active immediately after adding the configuration, select **Active**.
1. Click **Add webhook**.

## Editing a global webhook

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Next to the webhook you'd like to edit, click **Edit**.

  ![Screenshot of the "Webhooks" page. To the right of a webhook, the "Edit" button is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Update the webhook's settings.
7. Click **Update webhook**.

## Deleting a global webhook

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
1. Next to the webhook you'd like to delete, click **Delete**.
   ![Screenshot of the "Webhooks" page. To the right of a webhook, the "Delete" button is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
1. Read the information about deleting a webhook, then click **Yes, delete webhook**.

## Viewing recent deliveries and responses

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. In the list of webhooks, click the URL of the webhook for which you'd like to see deliveries.

  ![Screenshot of a list of global webhooks. The URL link to view a webhook is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. Under "Recent deliveries", click a delivery GUID to view details.

  ![Screenshot of the "Recent deliveries" list for a global webhook. A delivery GUID in the list of deliveries is highlighted with an orange outline.](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
