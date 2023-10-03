---
title: Editing webhooks
intro: 'After creating a webhook, you can make changes to it.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
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

{% ifversion ghes or ghae or ghec %}

## Editing a global webhook for a {% data variables.product.prodname_enterprise %}

Enterprise owners can edit a global webhook to change any of the settings that were selected when the webhook was initially created. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity-in-your-enterprise/managing-global-webhooks#editing-a-global-webhook)."

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

You can edit a webhook that was created for a {% data variables.product.prodname_sponsors %} account. Only the owner of the sponsored account can edit sponsorship webhooks for that account. For more information, see "[AUTOTITLE](/sponsors/integrating-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)."

{% endif %}

## Editing webhooks for a {% data variables.product.prodname_github_app %}

You can activate or deactivate a {% data variables.product.prodname_github_app %} webhook, change the webhook events that a {% data variables.product.prodname_github_app %} subscribes to, or make changes to other basic settings of a {% data variables.product.prodname_github_app %}'s webhook. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app-registration)."
