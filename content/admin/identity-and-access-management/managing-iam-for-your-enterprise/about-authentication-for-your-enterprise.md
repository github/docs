---
title: About authentication for your enterprise
shortTitle: About authentication
intro: You {% ifversion ghae %}must configure SAML single sign-on (SSO) so people can{% else %}can choose how people{% endif %} authenticate to access {% ifversion ghec %}your enterprise's resources on {% data variables.product.product_name %}{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}your enterprise on {% data variables.product.product_name %}{% endif %}.
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## About authentication for your enterprise

{% ifversion ghec %}

Enterprise owners on {% data variables.product.product_name %} can control the requirements for authentication and access to the enterprise's resources. 

You can choose to allow members to create and manage user accounts, or your enterprise can create and manage accounts for members with {% data variables.product.prodname_emus %}. If you allow members to manage their own accounts, you can also configure SAML authentication to both increase security and centralize identity and access for the web applications that your team uses.

After learning more about these options, to determine which method is best for your enterprise, see "[Identifying the best authentication method for your enterprise](#identifying-the-best-authentication-method-for-your-enterprise)."

## Authentication methods for {% data variables.product.product_name %}

The following options are available for account management and authentication on {% data variables.product.product_name %}.

- [Authentication through {% data variables.product.product_location %}](#authentication-through-githubcom)
- [Authentication through {% data variables.product.product_location %} with additional SAML access restriction](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Authentication with {% data variables.product.prodname_emus %} and federation](#authentication-with-enterprise-managed-users-and-federation)

### Authentication through {% data variables.product.product_location %}

By default, each member must create a personal account on {% data variables.product.product_location %}. You grant access to your enterprise, and the member can access your enterprise's resources after signing into the account on {% data variables.product.product_location %}. The member manages the account, and can contribute to other enterprises, organizations, and repositories on {% data variables.product.product_location %}.

### Authentication through {% data variables.product.product_location %} with additional SAML access restriction

If you configure additional SAML access restriction, each member must create and manage a personal account on {% data variables.product.product_location %}. You grant access to your enterprise, and the member can access your enterprise's resources after both signing into the account on {% data variables.product.product_location %} and successfully authenticating with your SAML identity provider (IdP). The member can contribute to other enterprises, organizations, and repositories on {% data variables.product.product_location %} using their personal account. For more information about requiring SAML authentication for all access your enterprise's resources, see "[About SAML for enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)."

If you use a standalone organization with {% data variables.product.product_name %}, or if you don't want to use SAML authentication for every organization in your enterprise, you can configure SAML for an individual organization. For more information, see "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)."

### Authentication with {% data variables.product.prodname_emus %} and federation

If you need more control of the accounts for your enterprise members on {% data variables.product.product_location %}, you can use {% data variables.product.prodname_emus %}. With {% data variables.product.prodname_emus %}, you provision and manage accounts for your enterprise members on {% data variables.product.product_location %} using your IdP. Each member signs into an account that you create, and your enterprise manages the account. Contributions to the rest of {% data variables.product.prodname_dotcom_the_website %} are restricted. For more information, see "[About {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)."

## Identifying the best authentication method for your enterprise

Both SAML SSO and {% data variables.product.prodname_emus %} increase security for your enterprise's resources. {% data variables.product.prodname_emus %} additionally allows you to control the user accounts for your enterprise members and restricts what the accounts are able to do. However, those restrictions may be unacceptable for your enterprise if they obstruct your developers' workflows.

To determine whether your enterprise would benefit more from SAML SSO or {% data variables.product.prodname_emus %}, ask yourself these questions.

- [Do you want to control the user accounts for your users?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [Which identity provider does your enterprise use?](#which-identity-provider-does-your-enterprise-use)
- [Do your developers work in public repositories, gists, or {% data variables.product.prodname_pages %} sites?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [Do your developers rely on collaboration outside of your enterprise?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [Does your enterprise rely on outside collaborators?](#does-your-enterprise-rely-on-outside-collaborators)
- [Can your enterprise tolerate migration costs?](#can-your-enterprise-tolerate-migration-costs)

### Do you want to control the user accounts for your users?

{% data variables.product.prodname_emus %} may be right for your enterprise if you don't want enterprise members to use their own personal accounts on {% data variables.product.prodname_dotcom_the_website %} to access your enterprise's resources. 

With SAML SSO, developers create and manage their own personal accounts, and each account is linked to a SAML identity in your IdP. {% data variables.product.prodname_emus %} functions more like other familiar SSO solutions, as you will provision the accounts for your users. You can also ensure user accounts conform with your company identity, by controlling usernames and the email addresses associated with the accounts. 

If you currently require your users to create a new account on {% data variables.product.prodname_dotcom_the_website %} to use with your enterprise only, {% data variables.product.prodname_emus %} might be right for you. However, SAML SSO may be a better option if using your IdP as the source of truth for your user and access management would add too much complexity. For example, perhaps your enterprise does not have an established process for onboarding new users in your IdP.

### Which identity provider does your enterprise use?

{% data variables.product.prodname_emus %} is supported for a limited number of IdPs, while SAML SSO offers full support for a larger number of IdPs, plus limited support for all IdPs that implement the SAML 2.0 standard. For the list of supported IdPs for each option, see "[About {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support)" and "[About SAML for enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps)."

You can use {% data variables.product.prodname_emus %} with an unsupported IdP only if you federate the unsupported IdP to a supported IdP to use as an integration point. If you wish to avoid this extra complexity, SAML SSO may be a better solution for you.

### Do your developers work in public repositories, gists, or {% data variables.product.prodname_pages %} sites?

To prevent enterprise members from accidentally leaking corporate-owned content to the public on {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_emus %} imposes strong restrictions on what users can do. For example, {% data variables.product.prodname_managed_users %} cannot create public repositories, gists of any visibility, or {% data variables.product.prodname_pages %} sites that are visible outside the enterprise. For a full list of restrictions, see "[Abilities and restrictions of {% data variables.product.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users)."

These restrictions are unacceptable for some enterprises. To determine whether {% data variables.product.prodname_emus %} will work for you, review the restrictions with your developers, and confirm whether any of the restrictions will hinder your existing workflows. If so, SAML SSO may be a better choice for your enterprise.

### Do your developers rely on collaboration outside of your enterprise?

{% data variables.product.prodname_managed_users_caps %} can only contribute to repositories within your enterprise. If your developers need to collaborate in repositories outside your enterprise, even private repositories, to complete their work, {% data variables.product.prodname_emus %} may not be right for your enterprise, and SAML SSO may be a better solution.

### Does your enterprise rely on outside collaborators?

With SAML SSO, you can give access to specific repositories to people who are not members of your IdP's directory, by using the outside collaborator role. This can be especially useful for collaborators that are external to your business, such as contractors. For more information, see "[Adding outside collaborators to repositories in your organization](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)."

With {% data variables.product.prodname_emus %}, the outside collaborator role does not exist. Your enterprise's resources can only be accessed by {% data variables.product.prodname_managed_users %}, which are always provisioned by your IdP. To give external collaborators access to your enterprise, you would have to use guest accounts in your IdP. If you're interested in {% data variables.product.prodname_emus %}, confirm with your developers whether this will hinder any of their existing workflows. If so, SAML SSO may be a better solution.

### Can your enterprise tolerate migration costs?

If your enterprise is new to {% data variables.product.prodname_dotcom_the_website %}, SAML SSO and {% data variables.product.prodname_emus %} are equally easy to adopt.

If you're already using {% data variables.product.prodname_dotcom_the_website %} with developers managing their own user accounts, adopting {% data variables.product.prodname_emus %} requires migrating to a new enterprise account. For more information, see "[About enterprises with {% data variables.product.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users)."

Although {% data variables.product.prodname_emus %} is free, the migration process may require time or cost from your team. Confirm that this migration process is acceptable to your business and your developers. If not, SAML SSO may be the better choice for you.

{% elsif ghes %}

Site administrators can decide how people authenticate to access a {% data variables.product.product_name %} instance. You can use {% data variables.product.product_name %}'s built-in authentication, or, if you want to centralize identity and access management for the web applications that your team uses, you can configure an external authentication method.

## Authentication methods for {% data variables.product.product_name %}

The following authentication methods are available for {% data variables.product.product_name %}.

- [Built-in authentication](#built-in-authentication)
- [External authentication](#external-authentication)

### Built-in authentication

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} To access your instance, people authenticate with the credentials for the account. For more information, see "[Configuring built-in authentication](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)."

### External authentication

If you use an external directory or identity provider (IdP) to centralize access to multiple web applications, you may be able to configure external authentication for {% data variables.product.product_location %}. For more information, see the following.

- "[Using CAS for enterprise IAM](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[Using LDAP for enterprise IAM](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[Using SAML for enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"

If you choose to use external authentication, you can also configure fallback authentication for people who don't have an account on your external authentication provider. For example, you may want to grant access to a contractor or machine user. For more information, see "[Allowing built-in authentication for users outside your provider](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)."

{% elsif ghae %}

{% data variables.product.product_name %} uses SAML SSO for authentication. Enterprise owners must configure SAML SSO with a SAML identity provider (IdP) during initialization. For more information, see "[About SAML for enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)."

{% endif %}

## Further reading

- "[Types of {% data variables.product.company_short %} accounts](/get-started/learning-about-github/types-of-github-accounts)"
- "[About enterprise accounts](/admin/overview/about-enterprise-accounts)"
{%- ifversion ghec %}
- "[Can I create accounts for people in my organization?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)"
{% endif %}