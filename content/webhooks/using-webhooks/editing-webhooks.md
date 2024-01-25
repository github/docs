---
title: Editing webhooks
shortTitle: Edit webhooks
intro: 'After creating a webhook, you can make changes to it.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Webhooks
---

## About editing webhooks

You can edit a webhook to change any of the settings that were selected when the webhook was initially created. For more information about the settings you can select while creating a webhook, see "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks)."

## Editing a repository webhook

You can edit a webhook that was created in a specific repository. You must be a repository owner or have admin access in the repository to edit webhooks in that repository.

You can use the {% data variables.product.prodname_dotcom %} web interface or the REST API to edit a repository webhook. For more information about using the REST API to edit a repository webhook, see "[AUTOTITLE](/rest/webhooks/repos#update-a-repository-webhook)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.webhooks.sidebar_webhooks %}
{% data reusables.webhooks.edit_webhook %}
{% data reusables.webhooks.edit_webhook_make_changes %}
{% data reusables.webhooks.update_webhook %}

## Editing an organization webhook

You can edit a webhook that was created in a specific organization. You must be an organization owner to edit webhooks in that organization.

You can use the {% data variables.product.prodname_dotcom %} web interface or the REST API to edit an organization webhook. For more information about using the REST API to create an organization webhook, see "[AUTOTITLE](/rest/orgs/webhooks#update-an-organization-webhook)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.webhooks.sidebar_webhooks %}
{% data reusables.webhooks.edit_webhook %}
{% data reusables.webhooks.edit_webhook_make_changes %}
{% data reusables.webhooks.update_webhook %}

{% ifversion ghes or ghec %}

## Editing a global webhook for a {% data variables.product.prodname_enterprise %}

Enterprise owners can edit a global webhook to change any of the settings that were selected when the webhook was initially created.

{% ifversion ghes %}

You can use the {% data variables.product.company_short %} web interface or the REST API to edit a global webhook. For more information about using the REST API to edit a global webhook, see "[AUTOTITLE](/rest/enterprise-admin/global-webhooks)."

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
{% data reusables.webhooks.edit_webhook %}
{% data reusables.webhooks.edit_webhook_make_changes %}
{% data reusables.webhooks.update_webhook %}

{% endif %}

{% ifversion fpt or ghec %}

## Editing a {% data variables.product.prodname_marketplace %} webhook

You can edit a webhook that was created for an app that you published in {% data variables.product.prodname_marketplace %}. Only the owner of the app, or an app manager for the organization that owns the app, can edit a {% data variables.product.prodname_marketplace %} webhook. For more information, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/using-the-github-marketplace-api-in-your-app/webhook-events-for-the-github-marketplace-api)."

1. Navigate to your [{% data variables.product.prodname_marketplace %} listing page](https://github.com/marketplace/manage).
1. Next to the {% data variables.product.prodname_marketplace %} listing that you want to view webhook deliveries for, click **Manage listing**.
1. In the sidebar, click **Webhook**.
{% data reusables.webhooks.edit_webhook_make_changes %}
{% data reusables.webhooks.update_webhook %}

## Editing a {% data variables.product.prodname_sponsors %} webhook

You can edit a webhook that was created for a {% data variables.product.prodname_sponsors %} account. Only the owner of the sponsored account can edit sponsorship webhooks for that account.

1. In the upper-right corner of any page, click your profile photo, then click **Your sponsors**.
1. Next to the account you want to edit a webhook for, click **Dashboard**.
1. In the left sidebar, click **Webhooks**.
{% data reusables.webhooks.edit_webhook %}
{% data reusables.webhooks.edit_webhook_make_changes %}
{% data reusables.webhooks.update_webhook %}

{% endif %}

## Editing webhooks for a {% data variables.product.prodname_github_app %}

Each {% data variables.product.prodname_github_app %} has one webhook. You cannot delete the webhook, but you can activate or deactivate the webhook, change the webhook events that the webhook subscribes to, or make changes to other basic settings for the webhook.

The owner of a {% data variables.product.prodname_github_app %} can edit the webhook configuration for the app. If an organization has designated any app managers for a {% data variables.product.prodname_github_app %} owned by the organization, the app managers can also edit the webhook configuration. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/using-webhooks-with-github-apps)."

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Next to the {% data variables.product.prodname_github_app %} that you want to update the webhook configuration for, click **Edit**.
1. To edit the basic webhook settings:
   1. Under "Webhook", any desired changes to the webhook settings.
   1. Click **Save changes**.
1. To make changes to the events that the webhook is subscribed to:
   1. In the sidebar, click **Permissions & events**.
   1. {% data reusables.apps.webhooks-and-apps %}

      Under the sections "Repository permissions," "Organization permissions," and "Account permissions," select the permissions that are required for the events your app will subscribe to. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/choosing-permissions-for-a-github-app)." For more information about things to consider when changing the permissions, see "[Modifying a {% data variables.product.prodname_github_app %} registration](/apps/maintaining-github-apps/modifying-a-github-app-registration#changing-the-permissions-of-a-github-app)."
   1. Under "Subscribe to Events," select the webhook events you would like your {% data variables.product.prodname_github_app %} to receive.
   1. Click **Save changes**.

You can use the REST API to edit the webhook configuration for a {% data variables.product.prodname_github_app %}. For more information about using the REST API to view recent deliveries, see "[AUTOTITLE](/rest/apps/webhooks)."
