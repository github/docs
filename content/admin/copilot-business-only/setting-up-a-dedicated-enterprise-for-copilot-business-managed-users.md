---
title: Setting up a dedicated enterprise for Copilot Business ({% data variables.product.prodname_emus %})
intro: 'Set up your account, provision users, and assign licenses.'
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
  - Fundamentals
shortTitle: Set up with managed users
allowTitleToDifferFromFilename: true
redirect_from:
  - /early-access/copilot/using-copilot-business-without-github-enterprise-managed-users

---

You can use an enterprise account to manage licenses for {% data variables.product.prodname_copilot_for_business %}, without adopting {% data variables.product.prodname_enterprise %}.

This article describes the setup for an **enterprise with managed users**. If you haven't chosen an enterprise type, see "[AUTOTITLE](/admin/copilot-business-only/about-enterprise-accounts-for-copilot-business)."

## Prerequisites

* To provision users, you must connect the enterprise account to an identity management system. {% data variables.product.company_short %} partners with some developers of identity management systems to provide a "paved-path" integration with {% data variables.product.prodname_emus %}. See "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#identity-management-systems)."
{% data reusables.copilot-business-for-non-ghe.prerequisites %}

## Requesting an enterprise account

{% data reusables.copilot-business-for-non-ghe.request-access %}

After we create your enterprise, you will receive an email inviting you to choose a password for the setup user, which is used to configure authentication and provisioning. The username is your enterprise's shortcode suffixed with `_admin`, for example `fabrikam_admin`. Make sure to open the password reset link using an **incognito or private browsing window**. The link can only be opened once and if done incorrectly you will need to contact {% data variables.contact.github_support %} to send you a new link.

>[!NOTE] {% data reusables.enterprise-accounts.emu-password-reset-session %}

## Adding users to the enterprise

To provision user accounts through your IdP, you'll need to **configure your IdP** by completing the following steps.

### Step 1: Configure authentication

To manage single sign-on (SSO) for users, you must connect your IdP to your enterprise account. You can use:
* **SAML** with Entra ID, Okta, or PingFederate. For instructions, see "[AUTOTITLE](/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."
* **OIDC** with Entra ID. For instructions, see "[AUTOTITLE](/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/configuring-oidc-for-enterprise-managed-users)."

### Step 2: Configure SCIM provisioning

To provision accounts from your IdP, you must configure SCIM provisioning. For instructions, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)."

If you want to manage membership of teams from your IdP, you must assign the relevant identity groups to the {% data variables.product.prodname_emu_idp_application %} application on your IdP.

### Step 3: Assign an enterprise owner

After you configure authentication and provisioning with your IdP, grant one or more users the enterprise owner role. Enterprise owners can enable {% data variables.product.prodname_copilot_short %} for the enterprise and manage which users receive licenses. For instructions, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users#assigning-users-and-groups)."

You can also grant the billing manager role. A billing manager can view the assigned licenses for an enterprise, but cannot assign licenses or manage enterprise teams.

## Linking an Azure subscription

{% data reusables.copilot-business-for-non-ghe.link-azure-subscription %}

## Enabling {% data variables.product.prodname_copilot_short %} for the enterprise

{% data reusables.copilot-business-for-non-ghe.enable-copilot %}

## Assigning licenses to users

When {% data variables.product.prodname_copilot_short %} has been enabled for the enterprise, an **enterprise owner** can create teams in the enterprise and assign licenses to a team.

* You will grant or remove licenses for users by managing membership of the teams, either from your IdP, directly in {% data variables.product.prodname_dotcom %}, or with the REST API.
* You cannot assign licenses to individual users or to an entire enterprise.
* To manage membership from your IdP, ensure the relevant identity groups have been assigned to the {% data variables.product.prodname_emu_idp_application %} application in your IdP and pushed to {% data variables.product.prodname_dotcom %} via SCIM.

The same user can be a member of multiple teams. You will only be charged once per user.

### Creating a team

> [!NOTE] You can create teams and manage membership using the REST API. For endpoint documentation, please contact your account manager.

{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Enterprise teams**.
1. Click **New enterprise team**.
1. Enter a name for the team.
1. Optionally, to sync the team with an identity group and manage membership from your IdP, under "Identity Provider Group", select a group from the dropdown menu. If you leave this dropdown menu empty, you will manage membership of the team directly.
1. Click **Create team**.
1. Add users to the team:

   * If you linked the team to an IdP group, add users to the related group in your IdP.
   * If you are managing team membership directly, on the team page, click **Add a member**, then search for and select the user. For information about how {% data variables.product.company_short %} generates usernames for users provisioned from an IdP, see "[AUTOTITLE](/admin/identity-and-access-management/iam-configuration-reference/username-considerations-for-external-authentication#about-usernames-for-managed-user-accounts)."

### Assigning licenses to a team

{% data reusables.copilot-business-for-non-ghe.assign-licenses %}

> [!NOTE] If you manage team membership from Entra ID, addition or removal of a user from a team on {% data variables.product.prodname_dotcom %} may take up to 40 minutes. After Entra ID communicates with {% data variables.product.prodname_dotcom %}, the change will take effect after {% data variables.product.prodname_dotcom %} prompts the user to authenticate.

## Managing your enterprise

{% data reusables.copilot-business-for-non-ghe.manage-your-enterprise %}
