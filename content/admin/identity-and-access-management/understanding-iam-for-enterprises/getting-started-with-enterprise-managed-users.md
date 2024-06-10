---
title: 'Getting started with {% data variables.product.prodname_emus %}'
shortTitle: Get started with managed users
intro: 'Learn how to create and configure an {% data variables.enterprise.prodname_emu_enterprise %}.'
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
allowTitleToDifferFromFilename: true
---

Before your developers can use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}, you must follow a series of configuration steps.

## Create a new enterprise account

To use {% data variables.product.prodname_emus %}, you need a **separate type of enterprise account** with {% data variables.product.prodname_emus %} enabled.

To request a new enterprise account, contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact). You'll discuss options for trialing {% data variables.product.prodname_emus %} or migrating from an existing enterprise.

When you're ready, your contact on the {% data variables.product.prodname_dotcom %} Sales team will create your new {% data variables.enterprise.prodname_emu_enterprise %}. You'll be asked to provide the following information:

- The **email address** for the user who will set up your enterprise.
- A **short code** that will be used as the suffix for your enterprise members' usernames. {% data reusables.enterprise-accounts.emu-shortcode %}

## Create the setup user

After we create your enterprise, you will receive an email inviting you to choose a password for the setup user, which is used to configure authentication and provisioning. The username is your enterprise's shortcode suffixed with `_admin`, for example `fabrikam_admin`.

Using an **incognito or private browsing window**:

1. Set the user's password.
1. Save the user's recovery codes.
1. Enable two-factor authentication. See "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)."

{% data reusables.enterprise-accounts.emu-password-reset-session %}

## Configure authentication

Next, configure how your members will authenticate.

**If you're using Entra ID** as your IdP, you can choose between OpenID Connect (OIDC) and Security Assertion Markup Language (SAML).
- We recommend OIDC, which includes support for Conditional Access Policies (CAP).
- If you require multiple enterprises provisioned from one tenant, you must use SAML for each enterprise after the first.

**If you're using another IdP**, like Okta or PingFederate, you must use SAML to authenticate your members.

To get started, read the guide for your chosen authentication method.

- "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)"
- "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)"

## Configure provisioning

After you configure authentication, you can configure SCIM provisioning, which is how your IdP will create {% data variables.enterprise.prodname_managed_users %} on {% data variables.product.prodname_dotcom %}. See "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users)."

## Manage organization membership

After authentication and provisioning are configured, you can start managing organization membership for your {% data variables.enterprise.prodname_managed_users %} by synchronizing IdP groups with teams. See "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."

## Support developers with multiple user accounts

Developers may need to maintain separate, personal accounts for their work outside of your {% data variables.enterprise.prodname_emu_enterprise %}. You can help them manage multiple accounts by providing the following resources:

- **On the command line**, developers can configure Git to simplify the process of using multiple accounts. See "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)."
- **In the web interface**, developers can switch between accounts without always needing to re-authenticate. See "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/switching-between-accounts)."
