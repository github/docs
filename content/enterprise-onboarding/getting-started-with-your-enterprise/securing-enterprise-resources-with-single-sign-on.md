---
title: Securing enterprise resources with single sign-on
intro: 'Learn how to set up secure sign-on for organizations in your enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
shortTitle: Secure sign-on
---

This article applies to enterprises that use **personal accounts**. If you use personal accounts, enabling SSO is an optional step you can take to secure your enterprise's resources.

If your enterprise uses **managed users**, SSO is mandatory, and all managed user accounts must authenticate through your identity provider (IdP) to sign in to {% data variables.product.github %}. See [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users).

{% data reusables.saml.dotcom-saml-explanation %} See [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/about-saml-for-enterprise-iam).

You can configure SAML for your enterprise account to apply the same settings to all organizations, or you can configure settings for individual organizations. See [AUTOTITLE](/admin/managing-iam/using-saml-for-enterprise-iam/deciding-whether-to-configure-saml-for-your-enterprise-or-your-organizations).

You can enable SAML SSO and centralized authentication through a SAML IdP across all organizations owned by your enterprise account. See [AUTOTITLE](/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

## Supported identity providers

{% data reusables.saml.saml-supported-idps %}

For more information about connecting Microsoft Entra ID (previously known as Azure AD) to your enterprise, see [Tutorial: Microsoft Entra SSO integration with GitHub Enterprise Cloud - Enterprise Account](https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-cloud-enterprise-account-tutorial) in Microsoft Docs.

## Next steps

Next, learn how to set up an organization in your enterprise. See [AUTOTITLE](/enterprise-onboarding/setting-up-organizations-and-teams/setting-up-an-organization).
