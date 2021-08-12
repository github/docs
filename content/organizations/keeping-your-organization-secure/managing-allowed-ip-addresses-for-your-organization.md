---
title: Managing allowed IP addresses for your organization
intro: You can restrict access to your organization's assets by configuring a list of IP addresses that are allowed to connect.
product: '{% data reusables.gated-features.allowed-ip-addresses %}'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
versions:
  fpt: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage allowed IP addresses
---

Organization owners can manage allowed IP addresses for an organization.

## About allowed IP addresses

You can restrict access to organization assets by configuring an allow list for specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

If you set up an allow list you can also choose to automatically add to your allow list any IP addresses configured for {% data variables.product.prodname_github_apps %} that you install in your organization. The creator of a {% data variables.product.prodname_github_app %} can configure an allow list for their application, specifying the IP addresses at which the application runs. By inheriting their allow list into yours, you avoid connection requests from the application being refused. For more information, see "[Allowing access by {% data variables.product.prodname_github_apps %}](#allowing-access-by-github-apps)."

You can also configure allowed IP addresses for the organizations in an enterprise account. For more information, see {% ifversion ghae %}"[Restricting network traffic to your enterprise](/admin/configuration/restricting-network-traffic-to-your-enterprise)." {% else %}"[Enforcing security settings in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)."{% endif %}

## Adding an allowed IP address

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

## Enabling allowed IP addresses

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Under "IP allow list", select **Enable IP allow list**.
  ![Checkbox to allow IP addresses](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. Click **Save**.

## Allowing access by {% data variables.product.prodname_github_apps %}

If you're using an allow list, you can also choose to automatically add to your allow list any IP addresses configured for {% data variables.product.prodname_github_apps %} that you install in your organization. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

For more information about how to create an allow list for a {% data variables.product.prodname_github_app %} you have created, see "[Managing allowed IP addresses for a GitHub App](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Under "IP allow list", select **Enable IP allow list configuration for installed GitHub Apps**.
  ![Checkbox to allow GitHub App IP addresses](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Click **Save**.

## Editing an allowed IP address

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Click **Update**.

## Deleting an allowed IP address

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Using {% data variables.product.prodname_actions %} with an IP allow list

{% ifversion ghae %}

{% data reusables.github-actions.ip-allow-list-hosted-runners %}

{% else %}

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

{% endif %}
