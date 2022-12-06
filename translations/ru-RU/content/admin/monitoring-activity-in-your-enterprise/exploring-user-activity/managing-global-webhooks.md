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

You can use global webhooks to notify an external web server when events occur within your enterprise. You can configure the server to receive the webhook's payload, then run an application or code that monitors, responds to, or enforces rules for user and organization management for your enterprise. For more information, see "[Webhooks](/developers/webhooks-and-events/webhooks)."

For example, you can configure {% data variables.location.product_location %} to send a webhook when someone creates, deletes, or modifies a repository or organization within your enterprise. You can configure the server to automatically perform a task after receiving the webhook.

![List of global webhooks](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## Adding a global webhook

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Click **Add webhook**.
  ![Add webhook button on Webhooks page in Admin center](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Type the URL where you'd like to receive payloads.
  ![Field to type a payload URL](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. Optionally, use the **Content type** drop-down menu, and click a payload format.
  ![Drop-down menu listing content type options](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. Optionally, in the **Secret** field, type a string to use as a `secret` key.
  ![Field to type a string to use as a secret key](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. Optionally, if your payload URL is HTTPS and you would not like {% data variables.product.prodname_ghe_server %} to verify SSL certificates when delivering payloads, select **Disable SSL verification**. Read the information about SSL verification, then click **I understand my webhooks may not be secure**.
  ![Checkbox for disabling SSL verification](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Warning:** SSL verification helps ensure that hook payloads are delivered securely. We do not recommend disabling SSL verification.

  {% endwarning %}
10. Decide if you'd like this webhook to trigger for every event or for selected events.
  ![Radio buttons with options to receive payloads for every event or selected events](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - For every event, select **Send me everything**.
    - To choose specific events, select **Let me select individual events**.
11. If you chose to select individual events, select the events that will trigger the webhook.
      {% ifversion ghec %}
      ![Checkboxes for individual global webhook events](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png)
      {% elsif ghes or ghae %}
      ![Checkboxes for individual global webhook events](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png)
      {% endif %}
12. Confirm that the **Active** checkbox is selected.
  ![Selected Active checkbox](/assets/images/help/business-accounts/webhook-active.png)
13. Click **Add webhook**.

## Editing a global webhook

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Next to the webhook you'd like to edit, click **Edit**.
  ![Edit button next to a webhook](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Update the webhook's settings.
7. Click **Update webhook**.

## Deleting a global webhook

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Next to the webhook you'd like to delete, click **Delete**.
  ![Delete button next to a webhook](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Read the information about deleting a webhook, then click **Yes, delete webhook**.
  ![Pop-up box with warning information and button to confirm deleting the webhook](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## Viewing recent deliveries and responses

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. In the list of webhooks, click the webhook for which you'd like to see deliveries.
  ![List of webhooks with links to view each webhook](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. Under "Recent deliveries", click a delivery to view details.
  ![List of the webhook's recent deliveries with links to view details](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
