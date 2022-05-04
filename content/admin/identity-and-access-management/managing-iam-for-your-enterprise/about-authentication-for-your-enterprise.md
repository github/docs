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

Enterprise owners on {% data variables.product.product_name %} can control the requirements for authentication and access to the enterprise's resources. You can choose to allow members create and manage user accounts, or your enterprise can create and manage accounts for members. If you allow members to manage their own accounts, you can also configure SAML authentication to both increase security and centralize identity and access for the web applications that your team uses. If you choose to manage your members' user accounts, you must configure SAML authentication.

## Authentication methods for {% data variables.product.product_name %}

The following options are available for account management and authentication on {% data variables.product.product_name %}.

- [Authentication through {% data variables.product.product_location %}](#authentication-through-githubcom)
- [Authentication through {% data variables.product.product_location %} with additional SAML access restriction](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Authentication with {% data variables.product.prodname_emus %} and SAML SSO](#authentication-with-enterprise-managed-users-and-saml-sso)

### Authentication through {% data variables.product.product_location %}

By default, each member must create a personal account on {% data variables.product.product_location %}. You grant access to your enterprise, and the member can access your enterprise's resources after signing into the account on {% data variables.product.product_location %}. The member manages the account, and can contribute to other enterprises, organizations, and repositories on {% data variables.product.product_location %}.

### Authentication through {% data variables.product.product_location %} with additional SAML access restriction

If you configure additional SAML access restriction, each member must create and manage a personal account on {% data variables.product.product_location %}. You grant access to your enterprise, and the member can access your enterprise's resources after both signing into the account on {% data variables.product.product_location %} and successfully authenticating with your SAML identity provider (IdP). The member can contribute to other enterprises, organizations, and repositories on {% data variables.product.product_location %} using their personal account. For more information about requiring SAML authentication for all access your enterprise's resources, see "[About SAML for enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)."

If you use a standalone organization with {% data variables.product.product_name %}, or if you don't want to use SAML authentication for every organization in your enterprise, you can configure SAML for an individual organization. For more information, see "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)."

### Authentication with {% data variables.product.prodname_emus %} and SAML SSO

If you need more control of the accounts for your enterprise members on {% data variables.product.product_location %}, you can use {% data variables.product.prodname_emus %}. With {% data variables.product.prodname_emus %}, you provision and manage accounts for your enterprise members on {% data variables.product.product_location %} using your IdP. Each member signs into an account that you create, and your enterprise manages the account. Contributions to the rest of {% data variables.product.prodname_dotcom_the_website %} are restricted. For more information, see "[About {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)."

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

## About access control

{% ifversion ghec or ghae %}Members of your enterprise{% elsif ghes %}People with access to {% data variables.product.product_location %}{% endif %} can manage access to {% ifversion ghec %}your enterprise's resources{% elsif ghae %}your enterprise{% elsif ghes %}resources on your instance{% endif %} by using organization membership, teams, and roles. For more information, see the following.

{%- ifversion ghec %}
- "[Inviting users to join your organization](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"
{%- elsif ghes or ghae %}
- "[Adding people to your organization](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)"
{%- endif %}
- "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[About teams](/organizations/organizing-members-into-teams/about-teams)"
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Permission levels for a user account repository](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository)"

## Further reading

- "[Types of {% data variables.product.company_short %} accounts](/get-started/learning-about-github/types-of-github-accounts)"
- "[About enterprise accounts](/admin/overview/about-enterprise-accounts)"
{%- ifversion ghec %}
- "[Can I create accounts for people in my organization?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)"
{% endif %}