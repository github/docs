---
title: Configuring OIDC for Enterprise Managed Users
shortTitle: Configure OIDC
intro: 'Learn how to automatically manage access to your enterprise account on {% data variables.product.prodname_dotcom %} by configuring OpenID Connect (OIDC) single sign-on (SSO) and enabling support for your IdP''s Conditional Access Policy (CAP).'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users
---

{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## About OIDC for Enterprise Managed Users

With {% data variables.product.prodname_emus %}, your enterprise uses your identity provider (IdP) to authenticate all members. You can use OpenID Connect (OIDC) to manage authentication for your {% data variables.enterprise.prodname_emu_enterprise %}. Enabling OIDC SSO is a one-click setup process with certificates managed by {% data variables.product.prodname_dotcom %} and your IdP.

{% data reusables.enterprise-accounts.emu-cap-validates %} See "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)."

You can adjust the lifetime of a session, and how often a {% data variables.enterprise.prodname_managed_user %} needs to reauthenticate with your IdP, by changing the lifetime policy property of the ID tokens issued for {% data variables.product.prodname_dotcom %} from your IdP. The default lifetime is one hour. See "[Configure token lifetime policies](https://learn.microsoft.com/en-us/entra/identity-platform/configure-token-lifetimes#create-a-policy-and-assign-it-to-a-service-principal)" in the Microsoft documentation.

To change the lifetime policy property, you will need the object ID associated with your {% data variables.product.prodname_emus %} OIDC. See "[AUTOTITLE](/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/finding-the-object-id-for-your-entra-oidc-application)."

>[!NOTE] If you need assistance configuring the OIDC session lifetime, contact [Microsoft Support](https://support.microsoft.com).

{% data reusables.enterprise_user_management.SAML-to-OIDC-migration-for-EMU %}

{% data reusables.enterprise-accounts.oidc-gei-warning %}

## Identity provider support

Support for OIDC is available for customers using Entra ID.

Each Entra ID tenant can support only one OIDC integration with {% data variables.product.prodname_emus %}. If you want to connect Entra ID to more than one enterprise on {% data variables.product.prodname_dotcom %}, use SAML instead. See "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users)."

OIDC does not support IdP-initiated authentication.

## Configuring OIDC for Enterprise Managed Users

1. Sign into {% data variables.product.prodname_dotcom %} as the setup user for your new enterprise with the username **@SHORT-CODE_admin**.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "OpenID Connect single sign-on", select **Require OIDC single sign-on**.
1. To continue setup and be redirected to Entra ID, click **Save**.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
{% data reusables.enterprise-accounts.download-recovery-codes %}
1. Click **Enable OIDC Authentication**.

## Enabling provisioning

After you enable OIDC SSO, enable provisioning. See "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users)."

## Enabling guest collaborators

You can use the role of guest collaborator to grant limited access to vendors and contractors in your enterprise. Unlike enterprise members, guest collaborators only have access to internal repositories within organizations where they are a member.

To use guest collaborators with OIDC authentication, you may need to update your settings in Entra ID. See "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators)."
