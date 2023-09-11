---
title: Configuring user provisioning with SCIM for your enterprise
shortTitle: Configure SCIM user provisioning
intro: 'You can configure System for Cross-domain Identity Management (SCIM) for {% ifversion scim-for-ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}, which automatically provisions user accounts when you assign the application for {% ifversion scim-for-ghes %}your instance{% elsif ghae %}{% data variables.product.product_name %}{% endif %} to a user on your identity provider (IdP).'
permissions: '{% ifversion scim-for-ghes %}Site administrators{% elsif ghae %}Enterprise owners{% endif %} can configure user provisioning for {% ifversion scim-for-ghes %}a {% data variables.product.product_name %} instance{% elsif ghae %}an enterprise on {% data variables.product.product_name %}{% endif %}.'
versions:
  ghae: '*'
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

{% ifversion ghae %}

{% data reusables.saml.ae-uses-saml-sso %} For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."

{% endif %}

{% ifversion scim-for-ghes %}If you use SAML single sign-on (SSO) for {% data variables.location.product_location %}, you{% elsif ghae %}You{% endif %} can configure SCIM to automatically create or suspend user accounts and grant access{% ifversion scim-for-ghes %} to your instance{% elsif ghae %} for {% data variables.product.product_name %}{% endif %} when you assign or unassign the application on your IdP. For more information about SCIM, see [System for Cross-domain Identity Management: Protocol (RFC 7644)](https://tools.ietf.org/html/rfc7644) on the IETF website.

If you do not configure user provisioning with SCIM, your IdP will not communicate with {% data variables.product.product_name %} automatically when you assign or unassign the application to a user. Without SCIM, {% data variables.product.product_name %} creates a user account using SAML Just-in-Time (JIT) provisioning the first time someone navigates to {% data variables.product.product_name %} and signs in by authenticating through your IdP.

Configuring provisioning allows your IdP to communicate with {% data variables.location.product_location %} when you assign or unassign the application for {% data variables.product.product_name %} to a user on your IdP. When you assign the application, your IdP will prompt {% data variables.location.product_location %} to create an account and send an onboarding email to the user. When you unassign the application, your IdP will communicate with {% data variables.product.product_name %} to invalidate any SAML sessions and disable the member's account.

To configure provisioning for your enterprise, you must enable provisioning on {% data variables.product.product_name %}, then install and configure a provisioning application on your IdP.

{% ifversion scim-for-ghes %}

The provisioning application on your IdP communicates with {% data variables.product.product_name %} using the SCIM API. For more information, see "[AUTOTITLE](/rest/enterprise-admin/scim)" in the REST API documentation.

{% endif %}

## About identities and claims

After an IdP administrator grants a person access to {% data variables.location.product_location %}, the user can authenticate through the IdP to access {% data variables.product.product_name %} using SAML SSO.

During authentication, {% ifversion scim-for-ghes %}the instance{% elsif ghae %}{% data variables.product.product_name %}{% endif %} attempts to associate the user with a SAML identity. By default, {% ifversion scim-for-ghes %}the instance{% elsif ghae %}{% data variables.product.product_name %}{% endif %} compares the `NameID` claim from the IdP to the account's username. {% data variables.product.product_name %} normalizes the value of `NameID` for the comparison. For more information about username normalization, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization)."

If there is no existing account with a matching username on the instance, the user will fail to sign in.{% ifversion scim-for-ghes %} To make this match, {% data variables.product.product_name %} compares the SAML `NameId` claim from the IdP to the `username` claim for each user account provisioned by SCIM on the instance.{% endif %}

{% ifversion scim-for-ghes %}

During SAML authentication, some environments may use a value other than `NameID` as the unique identifying claim. If your environment does not use `NameID` to identify users, a site administrator can configure custom user attributes for the instance. {% data variables.product.product_name %} will respect this mapping when SCIM is configured. {% ifversion ghes = 3.6 or ghes = 3.7 %} Custom mappings are supported in {% data variables.product.product_name %} 3.6.5 or 3.7.2 and later.{% endif %} For more information about mapping user attributes, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso)."

{% endif %}

If {% data variables.product.product_name %} successfully identifies a user from the IdP, but account details such as email address, first name, or last name don't match, the instance overwrites the details with values from the IdP. Any email addresses other than the primary email provisioned by SCIM will also be deleted from the user account.

## Supported identity providers

{% ifversion ghes %}

During the private beta, your account team will provide documentation for the configuration of SCIM for {% data variables.product.product_name %} on a supported IdP.

{% elsif ghae %}

The following IdPs support user provisioning with SCIM for {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% data reusables.scim.ghes-scim-beta-note %}

{% data reusables.scim.ghes-scim-idp-table %}

For IdPs that support team mapping, you can assign or unassign the application for {% data variables.product.product_name %} to groups of users in your IdP. These groups are then available to organization owners and team maintainers in {% data variables.location.product_location %} to map to {% data variables.product.product_name %} teams. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/mapping-okta-groups-to-teams)."

{% endif %}

## Prerequisites

{% ifversion ghae %}

- You must configure SAML SSO when you initialize {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/initializing-github-ae)."

{% elsif scim-for-ghes %}

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

{%- ifversion ghae %}
1. While signed into {% data variables.location.product_location %} as an enterprise owner, create a {% data variables.product.pat_v1 %} with **admin:enterprise** scope. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
   {% note %}

   **Notes**:
   - To create the {% data variables.product.pat_generic %}, we recommend using the account for the first enterprise owner that you created during initialization. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/initializing-github-ae)."
   - You'll need this {% data variables.product.pat_generic %} to configure the application for SCIM on your IdP. Store the token securely in a password manager until you need the token again later in these instructions.

   {% endnote %}
   {% warning %}

   **Warning**: If the user account for the enterprise owner who creates the {% data variables.product.pat_generic %} is deactivated or deprovisioned, your IdP will no longer provision and deprovision user accounts for your enterprise automatically. Another enterprise owner must create a new {% data variables.product.pat_generic %} and reconfigure provisioning on the IdP.

   {% endwarning %}
{%- elsif scim-for-ghes %}
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
{%- ifversion ghae %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "SCIM User Provisioning", select **Require SCIM user provisioning**.
1. Click **Save**.
{%- endif %}
1. Configure user provisioning in the application for {% data variables.product.product_name %} on your IdP.{% ifversion scim-for-ghes %} To request documentation for a supported IdP, contact your account manager on {% data variables.contact.contact_enterprise_sales %}. If your IdP is unsupported, you must create the application and configure SCIM manually.{% elsif ghae %}

   The following IdPs provide documentation about configuring provisioning for {% data variables.product.product_name %}. If your IdP isn't listed, please contact your IdP to request support for {% data variables.product.product_name %}.

   | IdP | More information |
   | :- | :- |
   | Azure AD | [Tutorial: Configure {% data variables.product.prodname_ghe_managed %} for automatic user provisioning](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) in the Microsoft Docs. To configure Azure AD for {% data variables.product.product_name %}, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)." |
   | Okta | (beta) To configure Okta for {% data variables.product.product_name %}, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)." |

   The application on your IdP requires two values to provision or deprovision user accounts on {% data variables.location.product_location %}.

   | Value | Other names | Description | Example |
   | :- | :- | :- | :- |
   | URL | Tenant URL | URL to the SCIM provisioning API for your enterprise on {% data variables.product.product_name %} | <code><span style="white-space: nowrap;">{% data variables.product.api_url_pre %}/scim/v2</span></code> |
   | Shared secret | {% data variables.product.pat_generic_caps %}, secret token | Token for application on your IdP to perform provisioning tasks on behalf of an enterprise owner | {% data variables.product.pat_generic_caps %} you created in step 1 |
   {%- endif %}
