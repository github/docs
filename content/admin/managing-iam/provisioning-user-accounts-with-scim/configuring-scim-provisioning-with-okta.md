---
title: Configuring {% ifversion ghec %}SCIM{% else %}authentication and{% endif %} provisioning with Okta
shortTitle: Set up Okta
intro: 'Learn how to configure Okta to communicate with your enterprise{% ifversion ghec %} on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %}{% endif %}.'
product: '{% data reusables.gated-features.emus %}'
permissions: '{% ifversion ghes %}Site administrators{% else %}People{% endif %} with admin access to the IdP'
allowTitleToDifferFromFilename: true
versions:
  ghec: '*'
  feature: scim-for-ghes-public-beta
redirect_from:
  - /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-with-okta
  - /admin/managing-iam/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-with-okta
type: tutorial
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

{% data reusables.scim.ghes-beta-note %}

## About provisioning with Okta

If you use Okta as an IdP, you can use Okta's application to provision user accounts, manage enterprise membership, and manage team memberships for organizations in your enterprise. Okta is a partner IdP, so you can simplify your authentication and provisioning configuration by using the Okta application {% ifversion ghec %}for {% data variables.product.prodname_emus %}. For more information, see [AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#about-authentication-and-user-provisioning).{% else %}to manage both SAML single-sign on and SCIM provisioning on {% data variables.product.prodname_ghe_server %}.{% endif %}

Alternatively, if you only intend to use Okta for SAML authentication and you want to use a different IdP for provisioning, you can integrate with {% data variables.product.prodname_dotcom %}'s REST API for SCIM. For more information, see [AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-with-scim-using-the-rest-api).

## Supported features

{% ifversion ghec %}{% data variables.product.prodname_emus %}{% else %}{% data variables.product.prodname_ghe_server %}{% endif %} supports the following provisioning features for Okta.

| Feature | Description |
| --- | --- |
| Push New Users | Users that are assigned to {% ifversion ghec %}the {% data variables.product.prodname_emu_idp_application %}{% else %}{% data variables.product.company_short %}'s{% endif %} application in Okta are automatically created in the enterprise on {% data variables.product.github %}. |
| Push Profile Update | Updates made to the user's profile in Okta will be pushed to {% data variables.product.github %}. |
| Push Groups | Groups in Okta that are assigned to the {% ifversion ghec %}the {% data variables.product.prodname_emu_idp_application %}{% else %}{% data variables.product.company_short %}'s{% endif %} application as Push Groups are automatically created in the enterprise on {% data variables.product.github %}. |
| Push User Deactivation | Unassigning the user from {% ifversion ghec %}the {% data variables.product.prodname_emu_idp_application %}{% else %}{% data variables.product.company_short %}'s{% endif %} application in Okta will disable the user on {% data variables.product.github %}. The user will not be able to sign in, but the user's information is maintained. |
| Reactivate Users | Users in Okta whose Okta accounts are reactivated and who are assigned back to {% ifversion ghec %}the {% data variables.product.prodname_emu_idp_application %}{% else %}{% data variables.product.company_short %}'s{% endif %} application on Okta will be enabled. |

{% ifversion ghec %}

> [!NOTE]
> {% data variables.product.prodname_emus %} does not support modifications to usernames.

{% endif %}

## Prerequisites

{% ifversion ghes %}
The general prerequisites for using SCIM on {% data variables.product.prodname_ghe_server %} apply. See the "Prerequisites" section in [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#prerequisites).

In addition:

* To configure SCIM, you must have completed **steps 1 to 4** in [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).
  * You will need the {% data variables.product.pat_v1 %} created for the setup user to authenticate requests from Okta.
{% else %}
If you're configuring SCIM provisioning for a new enterprise, make sure to complete all previous steps in the initial configuration process. See [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).

In addition:
{% endif %}
* You must use Okta's application for both authentication and provisioning.
* {% data reusables.scim.your-okta-product-must-support-scim %}

{% ifversion ghes %}

## 1. Configure SAML

Before starting this section, ensure you have followed steps **1 and 2** in [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).

### In Okta

1. Go to the [GitHub Enterprise Server](https://www.okta.com/integrations/github-enterprise-server/) application in Okta.
1. Click **Add integration**.
1. In the general settings, for the base URL, enter your {% data variables.product.prodname_ghe_server %} host URL (`https://HOSTNAME.com`).
1. Click the **Sign On** tab.
1. Ensure the "Credential Details" match the following.

   * "Application username format": Okta username
   * "Update application username on": Create and update
   * "Password reveal": Deselected
1. In the "SAML Signing Certificates" section, download your certificate by selecting **Actions**, then clicking **Download certificate**.
1. On the right side of the page, click **View SAML setup instructions**.
1. Make a note of the "Sign on URL" and the "Issuer" URL.

### On {% data variables.product.prodname_ghe_server %}

1. Sign in to {% data variables.location.product_location %} as a user with access to the Management Console.
1. Configure SAML using the information you have gathered. See [AUTOTITLE](/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso).

## 2. Configure SCIM

After configuring your SAML settings, you can proceed to configure provisioning settings.

{% elsif ghec %}

## Configuring SCIM

After you have configured your SAML settings in Okta's app, you can proceed to configure provisioning settings. If you haven't already configured SAML settings, see [AUTOTITLE](/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-with-okta-for-enterprise-managed-users).

{% endif %}

{% ifversion ghec %}
To configure provisioning, the setup user {% ifversion ghec %}with the **@<em>SHORT-CODE</em>_admin** username {% endif %}will need to provide a {% data variables.product.pat_v1 %} with the **scim:enterprise** scope. See [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users#create-a-personal-access-token).
{% else %}
Before starting this section, ensure you have followed steps **1 to 4** in [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users).
{% endif %}

1. Navigate to your {% data variables.product.prodname_emu_idp_application %} application on Okta.
1. Click the **Provisioning** tab.
1. In the settings menu, click **Integration**.
1. To make changes, click **Edit**.
1. Click **Configure API integration**.
1. In the "API Token" field, enter the {% data variables.product.pat_v1 %} belonging to the setup user.

   {% data reusables.scim.import-groups-unsupported %}

1. Click **Test API Credentials**. If the test is successful, a verification message will appear at the top of the screen.
1. To save the token, click **Save**.
1. In the settings menu, click **To App**.
1. To the right of "Provisioning to App", to allow changes to be made, click **Edit**.
1. Select **Enable** to the right of **Create Users**, **Update User Attributes**, and **Deactivate Users**.
1. To finish configuring provisioning, click **Save**.

{% ifversion ghes %}

When you have finished configuring SCIM, you may want to disable some SAML settings you enabled for the configuration process. See [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#6-disable-optional-settings).

{% endif %}

## How do I assign users and groups?

{% data reusables.enterprise-managed.assigning-users %}

{% data reusables.scim.emu-scim-rate-limit %}

You can also automatically manage organization membership by adding groups to the "Push Groups" tab in Okta. When the group is provisioned successfully, it will be available to connect to teams in the enterprise's organizations. For more information about managing teams, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups).

{% data reusables.enterprise-managed.assigning-roles %}

> [!NOTE]
> You can only set the "Roles" attribute for an individual user, not a group. If you want to set roles for everyone in a group that is assigned to the application in Okta, you must use the "Roles" attribute for each group member, individually.

## How do I deprovision users and groups?

To remove a user or group from {% data variables.product.github %}, remove the user or group from both the "Assignments" tab and the "Push groups" tab in Okta. For users, make sure the user is removed from all groups in the "Push Groups" tab.
