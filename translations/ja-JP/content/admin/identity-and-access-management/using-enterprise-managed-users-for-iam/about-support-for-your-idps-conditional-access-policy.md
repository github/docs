---
title: About support for your IdP's Conditional Access Policy
shortTitle: Conditional access policy
intro: 'When your enterprise uses OIDC SSO, {% data variables.product.prodname_dotcom %} will validate access to your enterprise and its resources using your IdP''s Conditional Access Policy (CAP).'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

{% data reusables.enterprise-accounts.oidc-beta-notice %}

## About support for Conditional Access Policies

{% data reusables.enterprise-accounts.emu-cap-validates %}

CAP support is enabled automatically for any {% data variables.enterprise.prodname_emu_enterprise %} that enables OIDC SSO and cannot be disabled. {% data variables.product.prodname_dotcom %} enforces your IdP's IP conditions but not device compliance conditions.

For more information about using OIDC with {% data variables.product.prodname_emus %}, see "[Configuring OIDC for Enterprise Managed Users](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)" and "[Migrating from SAML to OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)."

{% note %}

**Note:** If you use Conditional Access (CA) network location policies in your Azure AD tenant, do not use the IP allow list feature on {% data variables.product.prodname_dotcom_the_website %}, with your enterprise account or with any of the organizations owned by the enterprise. Using both is unsupported and can result in the wrong policy applying. For more information about IP allow lists, see "[Enforcing security settings in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" and "[Managing allowed IP addresses for your organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)."

{% endnote %}

## Considerations for integrations and automations

{% data variables.product.prodname_dotcom %} sends the originating IP address to your IdP for validation against your CAP. To make sure  actions and apps are not blocked by your IdP's CAP, you will need to make changes to your configuration.

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

Actions that use a {% data variables.product.pat_generic %} will likely be blocked by your IdP's CAP. We recommend that {% data variables.product.pat_generic %}s are created by a service account which is then exempted from IP controls in your IdP's CAP. 

If you're unable to use a service account, another option for unblocking actions that use {% data variables.product.pat_generic %}s is to allow the IP ranges used by {% data variables.product.prodname_actions %}. For more information, see "[About GitHub's IP addresses](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)."

### {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} 

When {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} make requests on a member's behalf, {% data variables.product.prodname_dotcom %} will send the IP address of the app's server to your IdP for validation. If the IP address of the app's server is not validated by your IdP's CAP, the request will fail.

You can contact the owners of the apps you want to use, ask for their IP ranges, and configure your IdP's CAP to allow access from those IP ranges. If you're unable to contact the owners, you can review your IdP sign-in logs to review the IP addresses seen in the requests, then allow-list those addresses. 

You can also enable IP allow list configuration for installed {% data variables.product.prodname_github_apps %}. When enabled, all {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} will continue working regardless of the originating IP address. For more information, see "[Enforcing policies for security settings in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps)."
