---
title: Configuring SCIM provisioning with Okta
shortTitle: SCIM using Okta
intro: "If you use Okta as an identity provider (IdP), you can manage the lifecycle of your enterprise's user accounts on {% data variables.location.product_location %} using System for Cross-domain Identity Management (SCIM)."
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
  - /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

## About provisioning with Okta

If you use Okta as an IdP, you can use Okta's application to provision user accounts, manage enterprise membership, and manage team memberships for organizations in your enterprise. Okta is a partner IdP, so you can simplify your authentication and provisioning configuration by using the Okta application for {% data variables.product.prodname_emus %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#about-authentication-and-user-provisioning)."

{% ifversion emu-public-scim-schema %}

Alternatively, if you only intend to use Okta for SAML authentication and you want to use a different IdP for provisioning, you can integrate with {% data variables.product.prodname_dotcom %}'s REST API for SCIM. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-with-scim-using-the-rest-api)."

{% endif %}

For more information about provisioning for {% data variables.product.prodname_emus %}, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users)."

## Supported features

{% data variables.product.prodname_emus %} supports the following provisioning features for Okta.

| Feature | Description |
| --- | --- |
| Push New Users | Users that are assigned to the {% data variables.product.prodname_emu_idp_application %} application in Okta are automatically created in the enterprise on {% data variables.product.product_name %}. |
| Push Profile Update | Updates made to the user's profile in Okta will be pushed to {% data variables.product.product_name %}. |
| Push Groups | Groups in Okta that are assigned to the {% data variables.product.prodname_emu_idp_application %} application as Push Groups are automatically created in the enterprise on {% data variables.product.product_name %}. |
| Push User Deactivation | Unassigning the user from the {% data variables.product.prodname_emu_idp_application %} application in Okta will disable the user on {% data variables.product.product_name %}. The user will not be able to sign in, but the user's information is maintained. |
| Reactivate Users | Users in Okta whose Okta accounts are reactivated and who are assigned back to the {% data variables.product.prodname_emu_idp_application %} application will be enabled. |

{% note %}

**Note:** {% data variables.product.prodname_emus %} does not support modifications to usernames.

{% endnote %}

## Prerequisites

{%- ifversion emu-public-scim-schema %}

- You must use Okta's application for both authentication and provisioning.

{%- endif %}
- {% data reusables.scim.your-okta-product-must-support-scim %}

- {% data reusables.scim.use-pat-from-setup-user %}

## Setting your enterprise name

After your {% data variables.enterprise.prodname_emu_enterprise %} has been created, you can begin to configure provisioning by setting your enterprise name in Okta.

1. Navigate to your {% data variables.product.prodname_emu_idp_application %} application on Okta.
1. Click the **Sign On** tab.
1. To make changes, click **Edit**.
1. Under "Advanced Sign-on Settings", in the "Enterprise Name" text box, type your enterprise name. For example, if you access your enterprise at `https://github.com/enterprises/octoinc`, your enterprise name would be "octoinc".
1. To save your enterprise name, click **Save**.

## Configuring provisioning

After setting your enterprise name, you can proceed to configure provisioning settings.

To configure provisioning, the setup user with the **@<em>SHORT-CODE</em>_admin** username will need to provide a {% data variables.product.pat_v1 %} with the **admin:enterprise** scope. For more information on creating a new token, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)."

1. Navigate to your {% data variables.product.prodname_emu_idp_application %} application on Okta.
1. Click the **Provisioning** tab.
1. In the settings menu, click **Integration**.
1. To make changes, click **Edit**.
1. Select **Enable API integration**.
1. In the "API Token" field, enter the {% data variables.product.pat_v1 %} with the **admin:enterprise** scope belonging to the setup user.

   {% data reusables.scim.import-groups-unsupported %}

1. Click **Test API Credentials**. If the test is successful, a verification message will appear at the top of the screen.
1. To save the token, click **Save**.
1. In the settings menu, click **To App**.
1. To the right of "Provisioning to App", to allow changes to be made, click **Edit**.
1. Select **Enable** to the right of **Create Users**, **Update User Attributes**, and **Deactivate Users**.
1. To finish configuring provisioning, click **Save**.

## Assigning users and groups

{% data reusables.enterprise-managed.assigning-users %}

{% data reusables.scim.emu-scim-rate-limit %}

You can also automatically manage organization membership by adding groups to the "Push Groups" tab in Okta. When the group is provisioned successfully, it will be available to connect to teams in the enterprise's organizations. For more information about managing teams, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."

{% data reusables.enterprise-managed.assigning-roles %}

{% note %}

**Note:** You can only set the "Roles" attribute for an individual user, not a group. If you want to set roles for everyone in a group that's assigned to the {% data variables.product.prodname_emu_idp_application %} application, you must use the "Roles" attribute for each group member, individually.

{% endnote %}

## Deprovisioning users and groups

To remove a user or group from {% data variables.product.product_name %}, remove the user or group from both the "Assignments" tab and the "Push groups" tab in Okta. For users, make sure the user is removed from all groups in the "Push Groups" tab.
