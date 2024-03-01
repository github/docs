---
title: Configuring user provisioning with SCIM for your enterprise
shortTitle: Configure SCIM user provisioning
intro: 'You can configure System for Cross-domain Identity Management (SCIM) for {% ifversion scim-for-ghes %}{% data variables.location.product_location %}{% endif %}, which automatically provisions user accounts when you assign the application for {% ifversion scim-for-ghes %}your instance{% endif %} to a user on your identity provider (IdP).'
permissions: '{% ifversion scim-for-ghes %}Site administrators{% endif %} can configure user provisioning for {% ifversion scim-for-ghes %}a {% data variables.product.product_name %} instance{% endif %}.'
versions:
  feature: scim-for-ghes
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
---

{% data reusables.scim.ghes-beta-note %}

## About user provisioning for {% data variables.product.product_name %}

{% ifversion scim-for-ghes %}If you use SAML single sign-on (SSO) for {% data variables.location.product_location %}, you{% endif %} can configure SCIM to automatically create or suspend user accounts and grant access{% ifversion scim-for-ghes %} to your instance{% endif %} when you assign or unassign the application on your IdP. For more information about SCIM, see [System for Cross-domain Identity Management: Protocol (RFC 7644)](https://tools.ietf.org/html/rfc7644) on the IETF website.

If you do not configure user provisioning with SCIM, your IdP will not communicate with {% data variables.product.product_name %} automatically when you assign or unassign the application to a user. Without SCIM, {% data variables.product.product_name %} creates a user account using SAML Just-in-Time (JIT) provisioning the first time someone navigates to {% data variables.product.product_name %} and signs in by authenticating through your IdP.

Configuring provisioning allows your IdP to communicate with {% data variables.location.product_location %} when you assign or unassign the application for {% data variables.product.product_name %} to a user on your IdP. When you assign the application, your IdP will prompt {% data variables.location.product_location %} to create an account and send an onboarding email to the user. When you unassign the application, your IdP will communicate with {% data variables.product.product_name %} to invalidate any SAML sessions and disable the member's account.

To configure provisioning for your enterprise, you must enable provisioning on {% data variables.product.product_name %}, then install and configure a provisioning application on your IdP.

{% ifversion scim-for-ghes %}

The provisioning application on your IdP communicates with {% data variables.product.product_name %} using the SCIM API. For more information, see "[AUTOTITLE](/rest/enterprise-admin/scim)."

{% endif %}

## About identities and claims

After an IdP administrator grants a person access to {% data variables.location.product_location %}, the user can authenticate through the IdP to access {% data variables.product.product_name %} using SAML SSO.

During authentication, {% ifversion scim-for-ghes %}the instance{% endif %} attempts to associate the user with a SAML identity. By default, {% ifversion scim-for-ghes %}the instance{% endif %} compares the `NameID` claim from the IdP to the account's username. {% data variables.product.product_name %} normalizes the value of `NameID` for the comparison. For more information about username normalization, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization)."

If there is no existing account with a matching username on the instance, the user will fail to sign in.{% ifversion scim-for-ghes %} To make this match, {% data variables.product.product_name %} compares the SAML `NameId` claim from the IdP to the `username` claim for each user account provisioned by SCIM on the instance.{% endif %}

{% ifversion scim-for-ghes %}

During SAML authentication, some environments may use a value other than `NameID` as the unique identifying claim. If your environment does not use `NameID` to identify users, a site administrator can configure custom user attributes for the instance. {% data variables.product.product_name %} will respect this mapping when SCIM is configured. For more information about mapping user attributes, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso)."

{% endif %}

If {% data variables.product.product_name %} successfully identifies a user from the IdP, but account details such as email address, first name, or last name don't match, the instance overwrites the details with values from the IdP. Any email addresses other than the primary email provisioned by SCIM will also be deleted from the user account.

## Supported identity providers

{% ifversion ghes %}

During the private beta, your account team will provide documentation for the configuration of SCIM for {% data variables.product.product_name %} on a supported IdP.

{% endif %}

## Prerequisites

{% ifversion scim-for-ghes %}

- {% data reusables.saml.ghes-you-must-configure-saml-sso %}

- You must allow built-in authentication for users who don't have an account on your IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)."

- Your IdP must support making SCIM calls to a Service Provider (SP).

{% endif %}

- You must have administrative access on your IdP to configure the application for user provisioning for {% data variables.product.product_name %}.

## Enabling user provisioning for your enterprise

{% ifversion scim-for-ghes %}

To perform provisioning actions on your instance, you will create a built-in user account and promote the account to an enterprise owner.

After you enable SCIM on a {% data variables.product.product_name %} instance, all user accounts are suspended. The built-in user account will continue to perform provisioning actions. After you grant a user access to your instance from your IdP, the IdP will communicate with the instance using SCIM to unsuspend the user's account.

{% endif %}

{%- ifversion scim-for-ghes %}
1. Create a built-in user account to perform provisioning actions on your instance. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance)."
1. Promote the dedicated user account to an enterprise owner. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#adding-an-enterprise-administrator-to-your-enterprise-account)."
1. Sign into your instance as the new enterprise owner.
1. Create a {% data variables.product.pat_v1 %} with **admin:enterprise** scope. Do not specify an expiration date for the {% data variables.product.pat_v1 %}. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

   {% warning %}

   **Warning**: Ensure that you don't specify an expiration date for the {% data variables.product.pat_v1 %}. If you specify an expiration date, SCIM will no longer function after the expiration date passes.

   {% endwarning %}
   {% note %}

   **Note**: You'll need this {% data variables.product.pat_generic %} to test the SCIM configuration, and to configure the application for SCIM on your IdP. Store the token securely in a password manager until you need the token again later in these instructions.

   {% endnote %}
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
{%- endif %}
1. Configure user provisioning in the application for {% data variables.product.product_name %} on your IdP.{% ifversion scim-for-ghes %} To request documentation for a supported IdP, contact your account manager on {% data variables.contact.contact_enterprise_sales %}. If your IdP is unsupported, you must create the application and configure SCIM manually.{% endif %}
