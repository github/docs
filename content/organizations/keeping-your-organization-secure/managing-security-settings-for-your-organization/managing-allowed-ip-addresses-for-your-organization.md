---
title: Managing allowed IP addresses for your organization
intro: You can restrict access to your organization's private assets by configuring a list of IP addresses that are allowed to connect.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage allowed IP addresses
permissions: Organization owners can manage allowed IP addresses for an organization.
---

## About allowed IP addresses

By default, authorized users can access your organization's resources from any IP address. You can restrict access to your organization's private resources by configuring a list that allows or denies access from specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% ifversion ghec %}
{% note %}

**Notes:**

* Only organizations that use {% data variables.product.prodname_ghe_cloud %} can use IP allow lists. {% data reusables.enterprise.link-to-ghec-trial %}
* If you configure an IP allow list for your organization you won't be able to use {% data variables.product.prodname_github_codespaces %} for repositories owned by the organization.

{% endnote %}
{% endif %}

{% data reusables.identity-and-permissions.ip-allow-lists-which-resources-are-protected %}

## About IP allow list management

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

If you set up an allow list you can also choose to automatically add to your allow list any IP addresses configured for {% data variables.product.prodname_github_apps %} that you install in your organization. The creator of a {% data variables.product.prodname_github_app %} can configure an allow list for their application, specifying the IP addresses at which the application runs. By inheriting their allow list into yours, you avoid connection requests from the application being refused. For more information, see "[Allowing access by {% data variables.product.prodname_github_apps %}](#allowing-access-by-github-apps)."

You can also configure allowed IP addresses at the enterprise account level, and the entries in the enterprise account's allow list are inherited by all the organizations owned by the enterprise. {% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)."

{% warning %}

**Warning:** Losing access to the IP addresses in your IP allow list could result in unintended consequences, such as getting locked out of your enterprise or organization.

{% endwarning %}

As a best practice, to ensure both secure and reliable access to your enterprise and organization resources when creating an IP allow list, consider the following:

* Maintaining more than one owner of the enterprise account or organization that the IP allow list will be enforced for.
* Using CIDR notation to specify a range of IP addresses that will include dynamically assigned addresses, to minimize the number of allow list entries.
* Including a static network in your allowed IP addresses, for backup access in case of problems.

## Adding an allowed IP address

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}
{% data reusables.identity-and-permissions.ip-address-add-or-remove-caching %}

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
1. Click **Save**.

## Allowing access by {% data variables.product.prodname_github_apps %}

If you're using an allow list, you can also choose to automatically add to your allow list any IP addresses configured for {% data variables.product.prodname_github_apps %} that you install in your organization.

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

For more information about how to create an allow list for a {% data variables.product.prodname_github_app %} you have created, see "[AUTOTITLE](/apps/maintaining-github-apps/managing-allowed-ip-addresses-for-a-github-app)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Under "IP allow list", select **Enable IP allow list configuration for installed GitHub Apps**.
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

{% data reusables.identity-and-permissions.ip-address-add-or-remove-caching %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Using {% data variables.product.prodname_actions %} with an IP allow list

{% data reusables.actions.ip-allow-list-self-hosted-runners %}

## Using {% data variables.product.prodname_pages %} with an IP allow list

{% data reusables.pages.ip-allow-list-pages %}
