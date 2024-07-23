---
title: Managing allowed IP addresses for a GitHub App
intro: 'You can add an IP allow list to your {% data variables.product.prodname_github_app %} registration to prevent your app from being blocked by an organization''s own allow list.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage allowed IP addresses
redirect_from:
  - /developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app
---

## About IP address allow lists for {% data variables.product.prodname_github_apps %}

Enterprise and organization owners can restrict access to assets by configuring an IP address allow list. This list specifies the IP addresses that are allowed to connect. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)."

When an organization has an allow list, third-party applications that connect via a {% data variables.product.prodname_github_app %} will be denied access unless either of the following condition sets are true:

* The creator of the {% data variables.product.prodname_github_app %} has configured an allow list for the application that specifies the IP addresses at which their application runs. See below for details of how to do this, and
* The organization owner has chosen to permit the addresses in the {% data variables.product.prodname_github_app %}'s allow list to be added to their own allow list. For more information, see "[Managing allowed IP addresses for your organization](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#allowing-access-by-github-apps){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

or

* The organization owner has added an IP allow list entry for the IP addresses from which the application runs. See "[Adding an allowed IP address](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#adding-an-allowed-ip-address){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% data reusables.apps.ip-allow-list-only-apps %}

## Adding an IP address allow list to a {% data variables.product.prodname_github_app %} registration

{% data reusables.identity-and-permissions.ipv6-allow-lists %}
{% data reusables.identity-and-permissions.ip-address-add-or-remove-caching %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
  The description is for your reference and is not used in the allow list of organizations where the {% data variables.product.prodname_github_app %} is installed. Instead, organization allow lists will include "Managed by the NAME GitHub App" as the description.
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}
