---
title: About support for your IdP's Conditional Access Policy
shortTitle: Conditional access policy
intro: 'When your enterprise uses OIDC SSO, {% data variables.product.prodname_dotcom %} can validate access to your enterprise and its resources using your IdP''s Conditional Access Policy (CAP).'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## About support for Conditional Access Policies

{% data reusables.enterprise-accounts.emu-cap-validates %}

{% data variables.product.product_name %} supports CAP for any {% data variables.enterprise.prodname_emu_enterprise %} where OIDC SSO is enabled. {% data variables.product.product_name %} enforces your IdP's IP conditions but cannot enforce your device compliance conditions. Enterprise owners can choose to use this IP allow list configuration instead of {% data variables.product.product_name %}'s IP allow list, and can do so once OIDC SSO is configured. For more information about IP allow lists, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" and "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)."

For more information about using OIDC with {% data variables.product.prodname_emus %}, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)" and "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)."

## Considerations for integrations and automations

{% data variables.product.prodname_dotcom %} sends the originating IP address to your IdP for validation against your CAP. To make sure  actions and apps are not blocked by your IdP's CAP, you will need to make changes to your configuration.

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

Actions that use a {% data variables.product.pat_generic %} will likely be blocked by your IdP's CAP. We recommend that {% data variables.product.pat_generic %}s are created by a service account which is then exempted from IP controls in your IdP's CAP.

If you're unable to use a service account, another option for unblocking actions that use {% data variables.product.pat_generic %}s is to allow the IP ranges used by {% data variables.product.prodname_actions %}. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)."

### {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} may not be available if your enterprise uses OIDC SSO with CAP to restrict access by IP addresses. This is because codespaces are created with dynamic IP addresses which it's likely your IdP’s CAP will block. Other CAP policies may also affect {% data variables.product.prodname_github_codespaces %}'s availability, depending on the policy's specific setup.

### {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}

When {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} sign a user in and make requests on that user's behalf, {% data variables.product.prodname_dotcom %} will send the IP address of the app's server to your IdP for validation. If the IP address of the app's server is not validated by your IdP's CAP, the request will fail.

When {% data variables.product.prodname_github_apps %} call {% data variables.product.prodname_dotcom %} APIs acting either as the app itself or as an installation, these calls are not performed on behalf of a user. Since your IdP's CAP executes and applies policies to user accounts, these application requests cannot be validated against CAP and are always allowed through. For more information on {% data variables.product.prodname_github_apps %} authenticating as themselves or as an installation, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)".

You can contact the owners of the apps you want to use, ask for their IP ranges, and configure your IdP's CAP to allow access from those IP ranges. If you're unable to contact the owners, you can review your IdP sign-in logs to review the IP addresses seen in the requests, then allow-list those addresses.

If you do not wish to allow all of the IP ranges for all of your enterprise's apps, you can also exempt installed {% data variables.product.prodname_github_apps %} and authorized {% data variables.product.prodname_oauth_apps %} from the IdP allow list. If you do so, these apps will continue working regardless of the originating IP address. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps)."
