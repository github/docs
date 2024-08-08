---
title: About identity and access management
shortTitle: About IAM
intro: 'Administrators for {% ifversion ghec %}{% data variables.product.product_name %}{% elsif ghes %}a {% data variables.product.product_name %} instance{% endif %} must decide how users will access {% ifversion ghec %}the enterprise''s resources{% ifversion ghec %} on {% data variables.product.prodname_dotcom_the_website %}{% endif %}{% elsif ghes %} the instance{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
redirect_from:
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management
  - /admin/identity-and-access-management/understanding-iam-for-enterprises/about-identity-and-access-management
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## About IAM for {% data variables.product.product_name %}

{% ifversion ghec %}

{% data reusables.enterprise-accounts.about-enterprise-types %}

After learning more about authentication and provisioning for each of these options, to determine which method is best for your enterprise, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/identifying-the-best-authentication-method-for-your-enterprise)."

{% elsif ghes %}

Administrators who configure a {% data variables.product.product_name %} instance can use local accounts and built-in authentication on the instance. Alternatively, to centralize identity and access for an enterprise's web applications, administrators can configure an external authentication method. If you use SAML, you can optionally provision user accounts on the instance from your identity provider (IdP) using System for Cross-domain Identity Management (SCIM).

{% endif %}

{% ifversion ghec or ghes %}

## Authentication methods

{% endif %}

{% ifversion ghec %}

When you create an enterprise on {% data variables.product.product_name %}, you can decide how people authenticate to access your resources on {% data variables.product.prodname_dotcom_the_website %}, and who controls the user accounts.

* [Authentication through {% data variables.location.product_location %}](#authentication-through-githubcom)
* [Authentication through {% data variables.location.product_location %} with additional SAML access restriction](#authentication-through-githubcom-with-additional-saml-access-restriction)
* [Authentication with {% data variables.product.prodname_emus %} and federation](#authentication-with-enterprise-managed-users-and-federation)

### Authentication through {% data variables.location.product_location %}

With authentication solely through {% data variables.location.product_location %}, each person you want to grant access to your enterprise must create and manage a personal account on {% data variables.location.product_location %}. After you grant access to your enterprise, the member can access your enterprise's resources after signing into the account on {% data variables.location.product_location %}. The member manages the account, and can contribute to other enterprises, organizations, and repositories on {% data variables.location.product_location %}. For more information about personal accounts, see "[AUTOTITLE](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)."

### Authentication through {% data variables.location.product_location %} with additional SAML access restriction

If you configure additional SAML access restriction, each person you want to grant access to your enterprise must create and manage a personal account on {% data variables.location.product_location %}. After you grant access to your enterprise, the member can access your enterprise's resources only after authenticating successfully for both the account on {% data variables.location.product_location %} and for an account on your SAML identity provider (IdP). The member can contribute to other enterprises, organizations, and repositories on {% data variables.location.product_location %} using their personal account. For more information about requiring SAML authentication for all access your enterprise's resources, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)."

You can choose between configuring SAML at the enterprise level, which applies the same SAML configuration to all organizations within the enterprise, and configuring SAML separately for individual organizations. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/deciding-whether-to-configure-saml-for-your-enterprise-or-your-organizations)."

### Authentication with {% data variables.product.prodname_emus %} and federation

If you need more control of the accounts for your enterprise members on {% data variables.location.product_location %}, you can use {% data variables.product.prodname_emus %}. With {% data variables.product.prodname_emus %}, you provision and manage accounts for your enterprise members on {% data variables.location.product_location %} using your IdP. Each member signs into an account that you create, and your enterprise manages the account. Contributions to the rest of {% data variables.product.prodname_dotcom_the_website %} are restricted. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."

{% elsif ghes %}

The following authentication methods are available for {% data variables.product.product_name %}.

* [Built-in authentication](#built-in-authentication)
* [External authentication](#external-authentication)

### Built-in authentication

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} To access your instance, people authenticate with the credentials for the account. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)."

### External authentication

If you use an external directory or identity provider (IdP) to centralize access to multiple web applications, you may be able to configure external authentication for {% data variables.location.product_location %}. For more information, see the following articles.

* "[AUTOTITLE](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
* "[AUTOTITLE](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
* "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"

{% data reusables.enterprise.saml-or-ldap %}

If you choose to use external authentication, you can also configure fallback authentication for people who don't have an account on your external authentication provider. For example, you may want to grant access to a contractor or machine user. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)."

{% endif %}

{% ifversion ghec or ghes %}

## About provisioning

{% endif %}

{% ifversion ghec %}

If you use [authentication through {% data variables.location.product_location %} with additional SAML access restriction](#authentication-through-githubcom-with-additional-saml-access-restriction), people create personal accounts on {% data variables.product.prodname_dotcom_the_website %}, and you can grant those personal accounts access to resources in your enterprise. You do not provision accounts.

Alternatively, if you use [{% data variables.product.prodname_emus %}](#authentication-with-enterprise-managed-users-and-federation), you must configure your IdP to provision user accounts within your enterprise on {% data variables.location.product_location %} using System for Cross-domain Identity Management (SCIM). For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users)."

{% elsif ghes %}

If you configure built-in authentication, CAS, LDAP, or SAML, {% data variables.product.product_name %} creates a user account when an authorized person signs into the instance, or "just in time" (JIT). Optionally, if you use SAML, you can provision user accounts from your identity provider (IdP) using SCIM. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)."

{% endif %}

{% ifversion emu-public-scim-schema %}

## About supported IdPs

{% data reusables.enterprise_user_management.ghec-supported-idps %}

{% endif %}

## Further reading

* "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)"
* "[AUTOTITLE](/admin/overview/about-enterprise-accounts)"
{%- ifversion ghec %}
* "[AUTOTITLE](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)"
* "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)"
{%- endif %}
