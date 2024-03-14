---
title: Disabling webhooks
shortTitle: Disable webhooks
intro: 'You can disable a webhook to unsubscribe from events that occur on {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Webhooks
---

## About disabling webhooks

{% ifversion fpt %}You can disable a webhook that was previously enabled for a repository, organization, {% data variables.product.prodname_marketplace %} account, {% data variables.product.prodname_sponsors %} account, or {% data variables.product.prodname_github_app %}.{% endif %}

{% ifversion ghec %}You can disable a webhook that was previously enabled for a repository, organization, {% data variables.product.prodname_enterprise %}, {% data variables.product.prodname_marketplace %} account, {% data variables.product.prodname_sponsors %} account, or {% data variables.product.prodname_github_app %}.{% endif %}

{% ifversion ghes %}You can disable a webhook that was previously enabled for a repository, organization, {% data variables.product.prodname_enterprise %}, or {% data variables.product.prodname_github_app %}.{% endif %}

To disable a webhook, you can choose to deactivate or delete it. When you deactivate a webhook, the webhook deliveries will stop, and you can choose to reactivate the webhook at a later time. When you delete a webhook, it cannot be restored.

For more information, see "[AUTOTITLE](/webhooks/about-webhooks)" and "[AUTOTITLE](/webhooks/using-webhooks/creating-webhooks)."

## Disabling a repository webhook

To disable a repository webhook, you can deactivate or delete it. You must be a repository owner, or have admin access in the repository, to disable webhooks.

You can use the {% data variables.product.prodname_dotcom %} web interface or the REST API to delete a webhook for a repository. For more information about using the REST API to delete a repository webhook, see "[AUTOTITLE](/rest/webhooks/repos#delete-a-repository-webhook)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.webhooks.sidebar_webhooks %}
{% data reusables.webhooks.disable_webhook %}

## Disabling an organization webhook

To disable an organization webhook, you can deactivate or delete it. Only organization owners can disable webhooks in an organization.

You can use the {% data variables.product.prodname_dotcom %} web interface or the REST API to delete an organization webhook. For more information about using the REST API to delete an organization webhook, see "[AUTOTITLE](/rest/orgs/webhooks#delete-an-organization-webhook)."

1. In the upper-right corner of any page on {% data variables.location.product_location %}, click your profile photo.
1. Click **Your organizations**.
1. To the right of the organization, click **Settings**.
{% data reusables.webhooks.sidebar_webhooks %}
{% data reusables.webhooks.disable_webhook %}

{% ifversion ghec or ghes %}

## Disabling a global webhook for a {% data variables.product.prodname_enterprise %}

Enterprise owners can disable a global webhook in an {% data variables.product.prodname_enterprise %}.

{% ifversion ghes %}

You can use the {% data variables.product.company_short %} web interface or the REST API to disable a global webhook. For more information about using the REST API to disable a global webhook, see "[AUTOTITLE](/rest/enterprise-admin/global-webhooks)."

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
{% data reusables.webhooks.disable_webhook %}

{% endif %}

{% ifversion fpt or ghec %}

## Disabling a {% data variables.product.prodname_marketplace %} webhook

You can deactivate a webhook that was previously enabled for events relating to an app that you published on {% data variables.product.prodname_marketplace %}. You cannot delete the webhook. Only the owner of the app can deactivate the {% data variables.product.prodname_marketplace %} webhook for the app. If an organization has designated any app managers for a {% data variables.product.prodname_github_app %} owned by the organization, the app managers can also deactivate the {% data variables.product.prodname_marketplace %} webhook.

1. Navigate to your [{% data variables.product.prodname_marketplace %} listing page](https://github.com/marketplace/manage).
1. Next to the {% data variables.product.prodname_marketplace %} listing that you want to view webhook deliveries for, click **Manage listing**.
1. In the sidebar, click **Webhook**.
1. Deselect **Active**.
1. Click **Update webhook**.

## Disabling a {% data variables.product.prodname_sponsors %} webhook

You can disable webhooks that were previously enabled for events relating to {% data variables.product.prodname_sponsors %}. Only the owner of the sponsored account can disable sponsorship webhooks for that account.

1. In the upper-right corner of any page, click your profile photo, then click **Your sponsors**.
1. Next to the account you want to edit a webhook for, click **Dashboard**.
1. In the left sidebar, click **Webhooks**.
{% data reusables.webhooks.disable_webhook %}

{% endif %}

## Disabling webhooks for a {% data variables.product.prodname_github_app %}

Each {% data variables.product.prodname_github_app %} has one webhook. You cannot delete the webhook, but you can deactivate the webhook. The owner of a {% data variables.product.prodname_github_app %} can deactivate the webhook the app. If an organization has designated any app managers for a {% data variables.product.prodname_github_app %} owned by the organization, the app managers can also deactivate the webhook for the app.

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Next to the {% data variables.product.prodname_github_app %} that you want to deactivate the webhook for, click **Edit**.
1. Under "Webhook," deselect **Active** to disable the webhook.
1. Click **Save changes**.
