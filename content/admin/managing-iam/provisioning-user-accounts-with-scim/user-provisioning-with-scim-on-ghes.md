---
title: '{% ifversion scim-for-ghes-public-beta %}About{% else %}Configuring{% endif %} user provisioning with SCIM on GitHub Enterprise Server'
shortTitle: '{% ifversion scim-for-ghes-public-beta %}About SCIM provisioning{% else %}Configure SCIM user provisioning{% endif %}'
intro: '{% ifversion scim-for-ghes-public-beta %}Learn about{% else %}Get started with{% endif %} managing the lifecycle of user accounts with SCIM on {% data variables.location.product_location %}.'
permissions: '{% ifversion scim-for-ghes-public-beta %}{% else %}Site administrators{% endif %}'
versions:
  ghes: '*'
allowTitleToDifferFromFilename: true
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-user-provisioning-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-user-provisioning-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise
  - /admin/managing-iam/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise
---

{% data reusables.scim.ghes-beta-note %}

## About user provisioning for {% data variables.product.prodname_ghe_server %}

If you use SAML single sign-on (SSO) for {% data variables.location.product_location %}, you can configure SCIM to automatically create or suspend user accounts and grant access to your instance when you assign or unassign the application on your IdP. For more information about SCIM, see [System for Cross-domain Identity Management: Protocol (RFC 7644)](https://tools.ietf.org/html/rfc7644) on the IETF website.

If you do not configure user provisioning with SCIM, your IdP will not communicate with {% data variables.product.prodname_ghe_server %} automatically when you assign or unassign the application to a user. Without SCIM, {% data variables.product.prodname_ghe_server %} creates a user account using SAML Just-in-Time (JIT) provisioning the first time someone navigates to {% data variables.product.prodname_ghe_server %} and signs in by authenticating through your IdP.

To configure provisioning for your enterprise, you must enable provisioning on {% data variables.product.prodname_ghe_server %}, then {% ifversion scim-for-ghes-public-beta %}either {% endif %}install and configure a provisioning application on your IdP{% ifversion scim-for-ghes-public-beta %}, or configure SCIM provisioning manually using {% data variables.product.company_short %}'s REST API endpoints for SCIM{% endif %}.

## Supported identity providers

{% ifversion scim-for-ghes-public-beta %}

{% data reusables.enterprise_user_management.emu-paved-path-iam-integrations %}

### Partner identity providers

The following IdPs are partner IdPs. They offer an application that you can use to configure both SAML authentication and SCIM provisioning.

* Microsoft Entra ID
* Okta
* PingFederate (beta)

When you use a single partner IdP for both authentication and provisioning, {% data variables.product.company_short %} provides support for the application on the partner IdP and the IdP's integration with {% data variables.product.prodname_dotcom %}. Support for PingFederate is in {% data variables.release-phases.public_preview %}.

### Other identity management systems

If you cannot use a single partner IdP for both authentication and provisioning, you can use another identity management system or combination of systems. The system must:

* Adhere to **{% data variables.product.company_short %}'s integration guidelines**
* Provide **authentication using SAML**, adhering to SAML 2.0 specification
* Provide **user lifecycle management using SCIM**, adhering to the SCIM 2.0 specification and communicating with {% data variables.product.company_short %}'s REST API (see [AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-with-scim-using-the-rest-api))

{% else %}

During the {% data variables.release-phases.private_preview %}, your account team will provide documentation for the configuration of SCIM for {% data variables.product.prodname_ghe_server %} on a supported IdP.

{% endif %}

## How will I manage user lifecycles with SCIM?

{% data reusables.enterprise_user_management.scim-manages-user-lifecycle %}

When SCIM is enabled, you will no longer be able to delete, suspend, or promote SCIM-provisioned users directly on {% data variables.product.prodname_ghe_server %}. You must manage these processes from your IdP.{% ifversion scim-for-ghes-ga %} If an issue arises with your IdP and you need to manage a user directly, you will need to use the SCIM REST API to manage the user identities on your appliance (see [AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-with-scim-using-the-rest-api)).{% endif %}

To view suspended members, navigate to the "Suspended Members" tab of your enterprise settings.  This page will be present when SCIM is enabled on {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Click **Suspended Members**.

## What happens when I enable SCIM?

If you currently use SAML SSO, and you are enabling SCIM, you should be aware of what happens to existing user accounts on {% data variables.product.prodname_ghe_server %} once SCIM is enabled.

* Existing users with SAML mappings will **not be able to sign in** until their identities have been provisioned by SCIM.
* Existing users created with **Built in authentication** will only be able to sign in if **Built in authentication** is still enabled.
{%- ifversion scim-for-ghes-ga %}
* {% data variables.product.prodname_ghe_server %} will no longer store SAML mappings for users. Instead, SCIM identities will be stored for users when a user is provisioned.
* You will no longer see the "SAML authentication" section on the `https://HOSTNAME/users/USER/security` site admin page for users. It will not be possible to view or update SAML NameID mappings that were previously visible in this section, since these stored SAML mappings are no longer evaluated during SAML authentication when SCIM is enabled.
{%- endif %}
* When your instance receives a SCIM request, SCIM identities are matched to existing users by **comparing the SCIM `userName` attribute value with the {% data variables.product.prodname_ghe_server %} username**. This means that an existing {% data variables.product.prodname_ghe_server %} user account, regardless of whether it was originally created as a local user account or via SAML JIT-provisioning, can be converted into a SCIM-linked user account if these two values match.
  * If a user account with a matching username does exist, {% data variables.product.prodname_ghe_server %} links the SCIM identity to this user account.
  * If a user account with a matching username doesn't exist, {% data variables.product.prodname_ghe_server %} creates a new user account and links it to this SCIM identity.
* If {% data variables.product.prodname_dotcom %} successfully matches a user who is authenticating via SAML with an existing user account, but account details such as email address, first name, or last name don't match, the instance **overwrites the details** with values from the IdP. Any email addresses other than the primary email provisioned by SCIM will also be deleted from the user account.
{% ifversion scim-for-ghes-ga %}* {% data reusables.scim.ghe-scim-identities-csv %}{% endif %}

## What happens during SAML authentication?

After an IdP administrator grants a person access to {% data variables.location.product_location %}, the user can authenticate through the IdP to access {% data variables.product.prodname_ghe_server %} using SAML SSO.

* When a user authenticates through SAML, to associate a user with a SAML identity, {% data variables.product.prodname_dotcom %} compares a normalized `NameID` claim from the IdP (or another value you have configured) to the account's username. For details about normalization, see [AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization).
* If there is no account with a matching username on the instance, the user will fail to sign in.
  * To make this match, {% data variables.product.prodname_ghe_server %} compares the SAML `NameId` claim from the IdP to the SCIM `userName` attribute for each user account provisioned by SCIM on the instance.
  * Additionally, for Entra ID, {% data variables.product.prodname_ghe_server %} compares the object identifier from the SAML request with an existing SCIM external ID.
* If your environment does not use `NameID` to uniquely identify users, a site administrator can configure custom user attributes for the instance. {% data variables.product.prodname_ghe_server %} will respect this mapping when SCIM is configured. For more information about mapping user attributes, see [AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso).

{% ifversion scim-for-ghes-public-beta %}

## How is SCIM disabled?

For more information on the different ways that SCIM can be disabled, see [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/disabling-scim-provisioning-for-users).

## Getting started

To get started with SCIM, you will:

1. Complete initial setup, required regardless of which IdP you will use, in [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).
1. Configure settings in your IdP.
   * If you're using a partner IdP for authentication and provisioning, you'll follow a guide for your IdP.
   * Otherwise, you'll set up a SCIM integration with the REST API, as described in [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api).

{% else %}

## Prerequisites

* {% data reusables.saml.ghes-you-must-configure-saml-sso %}

* You must allow built-in authentication for users who don't have an account on your IdP. For more information, see [AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider).

* Your IdP must support making SCIM calls to a Service Provider (SP).

* You must have administrative access on your IdP to configure the application for user provisioning for {% data variables.product.prodname_ghe_server %}.

## Enabling user provisioning for your enterprise

To perform provisioning actions on your instance, you will create a built-in user account and promote the account to an enterprise owner.

After you enable SCIM on a {% data variables.product.prodname_ghe_server %} instance, all user accounts are suspended. The built-in user account will continue to perform provisioning actions. After you grant a user access to your instance from your IdP, the IdP will communicate with the instance using SCIM to unsuspend the user's account.

1. Create a built-in user account to perform provisioning actions on your instance. For more information, see [AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance).
1. Promote the dedicated user account to an enterprise owner. For more information, see [AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#adding-an-enterprise-administrator-to-your-enterprise-account).
1. Sign into your instance as the new enterprise owner.
1. Create a {% data variables.product.pat_v1 %} with **admin:enterprise** scope. Do not specify an expiration date for the {% data variables.product.pat_v1 %}. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

   > [!WARNING]
   > Ensure that you don't specify an expiration date for the {% data variables.product.pat_v1 %}. If you specify an expiration date, SCIM will no longer function after the expiration date passes.

   > [!NOTE]
   > You'll need this {% data variables.product.pat_generic %} to test the SCIM configuration, and to configure the application for SCIM on your IdP. Store the token securely in a password manager until you need the token again later in these instructions.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. To enable SCIM, run the commands provided to you by your account manager on {% data variables.contact.contact_enterprise_sales %}.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}
1. To validate that SCIM is operational, run the following commands. Replace _PAT FROM STEP 3_ and _YOUR INSTANCE'S HOSTNAME_ with actual values.

   ```shell
   $ GHES_PAT="PAT FROM STEP 3"
   $ GHES_HOSTNAME="YOUR INSTANCE'S HOSTNAME"
   $ curl --location --request GET 'https://$GHES_HOSTNAME/api/v3/scim/v2/Users' \
       --header 'Content-Type: application/scim' \
       --header 'Authorization: Bearer $GHES_PAT'
   ```

   The command should return an empty array.
1. Configure user provisioning in the application for {% data variables.product.prodname_ghe_server %} on your IdP. To request documentation for a supported IdP, contact your account manager on {% data variables.contact.contact_enterprise_sales %}. If your IdP is unsupported, you must create the application and configure SCIM manually.

{% endif %}
