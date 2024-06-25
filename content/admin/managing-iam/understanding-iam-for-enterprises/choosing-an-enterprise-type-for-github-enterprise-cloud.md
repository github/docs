---
title: Choosing an enterprise type for GitHub Enterprise Cloud
shortTitle: Choosing an enterprise type
intro: 'Decide whether {% data variables.product.prodname_emus %} is right for your enterprise by asking yourself some questions.'
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/identity-and-access-management/understanding-iam-for-enterprises/identifying-the-best-authentication-method-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/identifying-the-best-authentication-method-for-your-enterprise
  - /admin/identity-and-access-management/understanding-iam-for-enterprises/choosing-an-enterprise-type-for-github-enterprise-cloud
---

**Before** you create your enterprise account, you must choose an enterprise type:

* Enterprise with personal accounts
* Enterprise with managed users

To decide which is best for your enterprise, ask yourself the following questions.

## Do you want to control users' accounts?

{% data variables.product.prodname_emus %} may be right for your enterprise if you **don't want enterprise members to use their own personal accounts** to access your enterprise's resources.

### Managed users

{% data variables.product.prodname_emus %} provides a true SSO experience for users:
* You provision the accounts for your users.
* You ensure that user accounts conform with your company identity, by controlling usernames and email addresses.
* Users must authenticate with your identity management system, using SAML or OIDC.

If you currently require your users to create a new personal account on {% data variables.product.prodname_dotcom_the_website %} to contribute to your company's resources, {% data variables.product.prodname_emus %} might be a better alternative.

### Personal accounts

If you do not choose {% data variables.product.prodname_emus %}:
* Each user must create, manage, and sign in to a **personal account** on {% data variables.product.prodname_dotcom_the_website %}.
* You can configure SAML authentication so that users must **also** authenticate to your external identity management system. {% data variables.product.prodname_dotcom %} links the user's personal account to an external identity on the identity management system.
* User provisioning is not available. You can use System for Cross-domain Identity Management (SCIM) to provision **access** to individual organizations.

Consider personal accounts if using your external identity management system as the source of truth for user and access management would add too much complexity. For example, you do not have an established process for onboarding new users in the system.

## Is your external identity management system supported?

Consider whether you already use, or can adopt, a supported identity management system.

### Managed users

{% data variables.product.company_short %} partners with some developers of identity management systems to provide a "paved-path" integration with {% data variables.product.prodname_emus %}, which includes both authentication and provisioning.

If you cannot use a paved-path integration, you can use another identity management system that **meets our guidelines**.

For full details, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#identity-management-systems)."

### Personal accounts

You can use any external identity management system that adheres to the **SAML 2.0** standard.

{% data variables.product.company_short %} officially supports and tests some systems. See "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#supported-identity-providers)."

## Do you need public repositories, gists, or {% data variables.product.prodname_pages %} sites?

To prevent enterprise members from accidentally leaking corporate-owned content to the public, {% data variables.product.prodname_emus %} imposes **strong restrictions** on what users can do.
* {% data variables.enterprise.prodname_managed_users_caps %} cannot create public repositories, gists of any visibility, or {% data variables.product.prodname_pages %} sites that are visible outside the enterprise.
* For a full list of restrictions, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts)."

Review the restrictions with your users, and confirm whether they will hinder your existing workflows. If so, an enterprise with personal accounts may be a better choice.

## Do you require collaboration outside of your enterprise?

{% data variables.enterprise.prodname_managed_users_caps %} can only contribute to repositories within your enterprise. If your developers must contribute to repositories outside of your enterprise (including private repositories), {% data variables.product.prodname_emus %} may not be right for you.

For a managed user to collaborate outside your enterprise, they must also maintain a separate, personal account. The complexity of regularly switching between accounts can increase the risk of mistakenly leaking internal code to the public. For details of the required workflow, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users#support-developers-with-multiple-user-accounts)."

## Can your enterprise tolerate migration costs?

If you already have an enterprise that uses personal accounts on {% data variables.product.prodname_dotcom_the_website %}, adoption of {% data variables.product.prodname_emus %} requires **migration to a new enterprise account**. To discuss this process, contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

The migration process may require time or cost from your team. Confirm that this migration process is acceptable to your business and your users. If not, an enterprise with personal accounts may be the better choice.

## Further reading

* "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/deciding-whether-to-configure-saml-for-your-enterprise-or-your-organizations)"
