---
title: Configuring SCIM provisioning for Enterprise Managed Users with Okta
shortTitle: Set up provisioning with Okta
intro: You can provision new users and manage their membership of your enterprise and teams using Okta as your identity provider.
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
  - /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

## About provisioning with Okta

You can use {% data variables.product.prodname_emus %} with Okta as your identity provider to provision new accounts, manage enterprise membership, and manage team memberships for organizations in your enterprise. For more information about provisioning for {% data variables.product.prodname_emus %}, see "[Configuring SCIM provisioning for enterprise managed users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)."

Before you can configure provisioning with Okta, you must configure SAML single-sign on. For more information, see "[Configuring SAML single sign-on for Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."

To configure provisioning with Okta, you must set your enterprise's name in the {% data variables.product.prodname_emu_idp_application %} application and enter your setup user's {% data variables.product.pat_generic %}. You can then start provisioning users in Okta.

## Supported features

{% data variables.product.prodname_emus %} supports many provisioning features in Okta.

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

## Setting your enterprise name

After your {% data variables.enterprise.prodname_emu_enterprise %} has been created, you can begin to configure provisioning by setting your enterprise name in Okta.

1. Navigate to your {% data variables.product.prodname_emu_idp_application %} application on Okta.
1. Click the **Sign On** tab.
1. To make changes, click **Edit**.
1. Under "Advanced Sign-on Settings", in the "Enterprise Name" text box, type your enterprise name. For example, if you access your enterprise at `https://github.com/enterprises/octoinc`, your enterprise name would be "octoinc".
![Screenshot of the Enterprise Name field on Okta](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. To save your enterprise name, click **Save**.

## Configuring provisioning

After setting your enterprise name, you can proceed to configure provisioning settings.

To configure provisioning, the setup user with the **@<em>SHORT-CODE</em>_admin** username will need to provide a {% data variables.product.pat_v1 %} with the **admin:enterprise** scope. For more information on creating a new token, see "[Creating a {% data variables.product.pat_generic %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)."

1. Navigate to your {% data variables.product.prodname_emu_idp_application %} application on Okta.
1. Click the **Provisioning** tab.
1. In the settings menu, click **Integration**.
1. To make changes, click **Edit**.
1. Select **Enable API integration**.
1. In the "API Token" field, enter the {% data variables.product.pat_v1 %} with the **admin:enterprise** scope belonging to the setup user.
![Screenshot showing the API Token field on Okta](/assets/images/help/enterprises/okta-emu-token.png)
1. Click **Test API Credentials**. If the test is successful, a verification message will appear at the top of the screen.
1. To save the token, click **Save**.
1. In the settings menu, click **To App**.
![Screenshot showing the To App menu item on Okta](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. To the right of "Provisioning to App", to allow changes to be made, click **Edit**.
1. Select **Enable** for **Create Users**, **Update User Attributes**, and **Deactivate Users**.
![Screenshot showing provisioning options on Okta](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. To finish configuring provisioning, click **Save**.

## Assigning users and groups

After you have configured SAML SSO and provisioning, you will be able provision new users on {% data variables.product.prodname_dotcom_the_website %} by assigning users to the {% data variables.product.prodname_emu_idp_application %} application. 

{% data reusables.scim.emu-scim-rate-limit %}

You can also automatically manage organization membership by assigning groups to the application and adding them to the "Push Groups" tab in Okta. When the group is provisioned successfully, it will be available to connect to teams in the enterprise's organizations. For more information about managing teams, see "[Managing team memberships with identity provider groups](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)."

When assigning users, you can use the "Roles" attribute in the {% data variables.product.prodname_emu_idp_application %} application to set a user's role in your enterprise on {% data variables.product.product_name %}. For more information on roles, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)."

![Screenshot showing the role options for provisioned user on Okta](/assets/images/help/enterprises/okta-emu-user-role.png)

## Deprovisioning users and groups

To remove a user or group from {% data variables.product.product_name %}, remove the user or group from both the "Assignments" tab and the "Push groups" tab in Okta. For users, make sure the user is removed from all groups in the "Push Groups" tab.


