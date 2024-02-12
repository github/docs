---
title: Identifying the best authentication method for your enterprise
shortTitle: Identify the best authentication method
intro: "You can determine whether your enterprise would benefit more from SAML SSO or {% data variables.product.prodname_emus %} by asking yourself some questions about your enterprise's needs and workflows."
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## About authentication methods for your enterprise

{% data reusables.enterprise.ghec-authentication-options %} For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)."

Both SAML SSO and {% data variables.product.prodname_emus %} increase security for your enterprise's resources. {% data variables.product.prodname_emus %} additionally allows you to control the user accounts for your enterprise members and restricts what the accounts are able to do. However, those restrictions may be unacceptable for your enterprise if they obstruct your developers' workflows.

To determine whether your enterprise would benefit more from SAML SSO or {% data variables.product.prodname_emus %}, ask yourself the following questions.

## Do you want to control the user accounts for your users?

{% data variables.product.prodname_emus %} may be right for your enterprise if you don't want enterprise members to use their own personal accounts on {% data variables.product.prodname_dotcom_the_website %} to access your enterprise's resources.

With SAML SSO, developers create and manage their own personal accounts, and each account is linked to a SAML identity in your IdP. {% data variables.product.prodname_emus %} functions more like other familiar SSO solutions, as you will provision the accounts for your users. You can also ensure user accounts conform with your company identity, by controlling usernames and the email addresses associated with the accounts.

If you currently require your users to create a new account on {% data variables.product.prodname_dotcom_the_website %} to use with your enterprise only, {% data variables.product.prodname_emus %} might be right for you. However, SAML SSO may be a better option if using your IdP as the source of truth for your user and access management would add too much complexity. For example, perhaps your enterprise does not have an established process for onboarding new users in your IdP.

## Which identity provider does your enterprise use?

{% data variables.product.prodname_emus %} is supported for a limited number of IdPs and requires SCIM, while SAML SSO offers full support for a larger number of IdPs, plus limited support for all IdPs that implement the SAML 2.0 standard, and does not require SCIM. For the list of supported IdPs for each option, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#identity-provider-support)" and "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps)."

You can use {% data variables.product.prodname_emus %} with an unsupported IdP only if you federate the unsupported IdP to a supported IdP to use as an integration point. If you wish to avoid this extra complexity, SAML SSO may be a better solution for you.

## Do your developers work in public repositories, gists, or {% data variables.product.prodname_pages %} sites?

To prevent enterprise members from accidentally leaking corporate-owned content to the public on {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_emus %} imposes strong restrictions on what users can do. For example, {% data variables.enterprise.prodname_managed_users %} cannot create public repositories, gists of any visibility, or {% data variables.product.prodname_pages %} sites that are visible outside the enterprise. For a full list of restrictions, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users)."

These restrictions are unacceptable for some enterprises. To determine whether {% data variables.product.prodname_emus %} will work for you, review the restrictions with your developers, and confirm whether any of the restrictions will hinder your existing workflows. If so, SAML SSO may be a better choice for your enterprise.

## Do your developers rely on collaboration outside of your enterprise?

{% data variables.enterprise.prodname_managed_users_caps %} can only contribute to repositories within your enterprise. If your developers must contribute to both repositories within and outside of your enterprise, including private repositories, {% data variables.product.prodname_emus %} may not be right for your enterprise. SAML SSO may be a better solution.

Some companies maintain repositories within an existing enterprise using SAML SSO on {% data variables.location.product_location %}, and also create an {% data variables.enterprise.prodname_emu_enterprise %}. Developers who contribute to repositories owned by both enterprises from a single workstation must switch between the accounts on {% data variables.location.product_location %} within a single browser, or use a different browser for each account. The developer may also need to customize the workstation's Git configuration to accommodate the two accounts. The complexity of this workflow can increase the risk of mistakenly leaking internal code to the public.

If you decide to create an {% data variables.enterprise.prodname_emu_enterprise %} but require that developers contribute to resources outside of the enterprise from a single workstation, you can provide support for switching between the accounts in a developer's local Git configuration. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#supporting-developers-with-multiple-user-accounts-on-githubcom)."

## Does your enterprise rely on outside collaborators?

With SAML SSO, you can give access to specific repositories to people who are not members of your IdP's directory, by using the outside collaborator role. This can be especially useful for collaborators that are external to your business, such as contractors. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)."

With {% data variables.product.prodname_emus %}, the outside collaborator role does not exist. Your enterprise's resources can only be accessed by {% data variables.enterprise.prodname_managed_users %}, which are always provisioned by your IdP. To give external collaborators access to your enterprise, you would have to use guest accounts in your IdP. If you're interested in {% data variables.product.prodname_emus %}, confirm with your developers whether this will hinder any of their existing workflows. If so, SAML SSO may be a better solution.

## Can your enterprise tolerate migration costs?

If your enterprise is new to {% data variables.product.prodname_dotcom_the_website %}, SAML SSO and {% data variables.product.prodname_emus %} are equally easy to adopt.

If you're already using {% data variables.product.prodname_dotcom_the_website %} with developers managing their own user accounts, adopting {% data variables.product.prodname_emus %} requires migrating to a new enterprise account. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#getting-started-with-enterprise-managed-users)."

Although {% data variables.product.prodname_emus %} is free, the migration process may require time or cost from your team. Confirm that this migration process is acceptable to your business and your developers. If not, SAML SSO may be the better choice for you.

## Further reading

- "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/deciding-whether-to-configure-saml-for-your-enterprise-or-your-organizations)"
