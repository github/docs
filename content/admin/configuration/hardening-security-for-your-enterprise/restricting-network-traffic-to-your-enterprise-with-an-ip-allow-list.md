---
title: Restricting network traffic to your enterprise with an IP allow list
shortTitle: Restricting network traffic
intro: You can restrict access to your enterprise and only allow access to your resources from specified IP addresses by using an IP allow list.
permissions: Enterprise owners can configure IP allow lists.
versions:
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Networking
  - Security
redirect_from:
  - /admin/configuration/restricting-network-traffic-to-your-enterprise
  - /admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise
  - /admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list
---

## About network traffic restrictions

By default, authorized users can access your enterprise's resources from any IP address. You can restrict access to your enterprise's private resources by configuring a list that allows or denies access from specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %}

If your enterprise uses {% data variables.product.prodname_emus %} with Azure AD and OIDC, you can choose whether to use {% data variables.product.company_short %}'s IP allow list feature or to use the allow list restrictions for your identity provider (IdP). If your enterprise does not use {% data variables.product.prodname_emus %} with Azure and OIDC, you can use {% data variables.product.company_short %}'s allow list feature.

{% elsif ghae %}

By default, Azure network security group (NSG) rules leave all inbound traffic open on ports 22, 80, 443, and 25. You can contact {% data variables.contact.github_support %} to configure access restrictions for {% data variables.product.product_name %}.

For restrictions using Azure NSGs, contact {% data variables.contact.github_support %} with the IP addresses that should be allowed to access {% data variables.product.product_name %}. Specify address ranges using the standard CIDR (Classless Inter-Domain Routing) format. {% data variables.contact.github_support %} will configure the appropriate firewall rules to restrict network access over HTTP, SSH, HTTPS, and SMTP. For more information, see "[AUTOTITLE](/support/contacting-github-support)."

{% endif %}

{% ifversion ghec %}

## About {% data variables.product.company_short %}'s IP allow list

You can use {% data variables.product.company_short %}'s IP allow list to control access to your enterprise and assets owned by organizations in your enterprise.

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

## About your IdP's allow list

If you are using {% data variables.product.prodname_emus %} with Azure AD and OIDC, you can use your IdP's allow list.

Using your IdP's allow list deactivates the {% data variables.product.company_short %} IP allow list configurations for all organizations in your enterprise and deactivates the GraphQL APIs for enabling and managing IP allow lists.

By default, your IdP runs the CAP on the initial interactive SAML or OIDC sign-in to {% data variables.product.company_short %} for any IP allow list configuration you choose.

The OIDC CAP only applies for requests to the API using a user token, such as an OAuth token for an {% data variables.product.prodname_oauth_app %} or a user access token for a {% data variables.product.prodname_github_app %} acting on behalf of a user. The OIDC CAP does not apply when a {% data variables.product.prodname_github_app %} uses an installation access token. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy#github-apps-and-oauth-apps)."

To ensure seamless use of the OIDC CAP while still applying the policy to OAuth tokens and user access tokens, you must copy all of the IP ranges from each {% data variables.product.prodname_github_app %} that your enterprise uses to your IdP policy.

## Using {% data variables.product.company_short %}'s IP allow list

### Enabling {% data variables.product.company_short %}'s IP allow list

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. If you're using {% data variables.product.prodname_emus %} with OIDC, under "IP allow list", select the **IP allow list configuration** dropdown menu and click **GitHub**.
1. Under "IP allow list", select **Enable IP allow list**.
1. Click **Save**.

### Adding an allowed IP address

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}
{% data reusables.identity-and-permissions.ip-address-add-or-remove-caching %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}
{% data reusables.identity-and-permissions.check-ip-address %}

### Allowing access by {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### Editing an allowed IP address

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Click **Update**.
{% data reusables.identity-and-permissions.check-ip-address %}

### Checking if an IP address is permitted

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.check-ip-address-step %}

### Deleting an allowed IP address

{% data reusables.identity-and-permissions.ip-address-add-or-remove-caching %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Using your identity provider's allow list

{% note %}

**Note:** Using your IdP's allow list is only supported for {% data variables.product.prodname_emus %} with Azure AD and OIDC.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Under "IP allow list", select the **IP allow list configuration** dropdown menu and click **Identity Provider**.
1. Optionally, to allow installed {% data variables.product.company_short %} and {% data variables.product.prodname_oauth_apps %} to access your enterprise from any IP address, select **Skip IdP check for applications**.
1. Click **Save**.

{% endif %}

{% ifversion ghae %}

## Enabling allowed IP addresses

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "IP allow list", select **Enable IP allow list**.
1. Click **Save**.

## Adding an allowed IP address

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}
{% data reusables.identity-and-permissions.check-ip-address %}

## Allowing access by {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

## Editing an allowed IP address

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Click **Update**.
{% data reusables.identity-and-permissions.check-ip-address %}

## Checking if an IP address is permitted

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.check-ip-address-step %}

## Deleting an allowed IP address

{% data reusables.identity-and-permissions.ip-address-add-or-remove-caching %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

{% endif %}

## Using {% data variables.product.prodname_actions %} with an IP allow list

{% data reusables.actions.ip-allow-list-self-hosted-runners %}

{% ifversion not ghae %}

## Using {% data variables.product.prodname_pages %} with an IP allow list

{% data reusables.pages.ip-allow-list-pages %}

{% endif %}
