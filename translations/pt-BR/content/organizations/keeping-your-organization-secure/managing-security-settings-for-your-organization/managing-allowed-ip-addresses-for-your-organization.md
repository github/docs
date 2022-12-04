---
title: Managing allowed IP addresses for your organization
intro: You can restrict access to your organization's private assets by configuring a list of IP addresses that are allowed to connect.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization
versions:
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage allowed IP addresses
permissions: Organization owners can manage allowed IP addresses for an organization.
---

## About allowed IP addresses

You can restrict access to private organization assets by configuring an allow list for specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %}
{% note %}

**Note:** Only organizations that use {% data variables.product.prodname_ghe_cloud %} can use IP allow lists. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

If you set up an allow list you can also choose to automatically add to your allow list any IP addresses configured for {% data variables.product.prodname_github_apps %} that you install in your organization. The creator of a {% data variables.product.prodname_github_app %} can configure an allow list for their application, specifying the IP addresses at which the application runs. By inheriting their allow list into yours, you avoid connection requests from the application being refused. For more information, see "[Allowing access by {% data variables.product.prodname_github_apps %}](#allowing-access-by-github-apps)."

You can also configure allowed IP addresses at the enterprise account level, and the entries in the enterprise account's allow list are inherited by all the organizations owned by the enterprise. {% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} For more information, see "[Enforcing policies for security settings in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)."

## Adding an allowed IP address

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}
{% data reusables.identity-and-permissions.check-ip-address %}

## Enabling allowed IP addresses

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

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

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Click **Update**.
{% data reusables.identity-and-permissions.check-ip-address %}

## Checking if an IP address is permitted

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.check-ip-address-step %}

## Deleting an allowed IP address

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Using {% data variables.product.prodname_actions %} with an IP allow list

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
