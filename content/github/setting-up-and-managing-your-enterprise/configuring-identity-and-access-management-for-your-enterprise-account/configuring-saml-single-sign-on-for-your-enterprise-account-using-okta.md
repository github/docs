---
title: Configuring SAML single sign-on for your enterprise account using Okta
intro: 'You can use Security Assertion Markup Language (SAML) single sign-on (SSO) with Okta to automatically manage access to your enterprise account on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
versions:
  fpt: '*'
topics:
  - Enterprise
shortTitle: Configure SAML SSO
---
{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

## About SAML with Okta

You can control access to your enterprise account in {% data variables.product.product_name %} and other web applications from one central interface by configuring the enterprise account to use SAML SSO with Okta, an Identity Provider (IdP).

SAML SSO controls and secures access to enterprise account resources like organizations, repositories, issues, and pull requests. For more information, see "[Enforcing SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

## Prerequisites

{% data reusables.saml.use-classic-ui %}

## Adding the {% data variables.product.prodname_ghe_cloud %} application in Okta

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
1. Click "{% data variables.product.prodname_ghe_cloud %} - Enterprise Accounts".
1. Click **Add**.
1. Optionally, to the right of "Application label", type a descriptive name for the application.
  ![Application label field](/assets/images/help/saml/okta-application-label.png)
1. To the right of "{% data variables.product.prodname_dotcom %} Enterprises", type the name of your enterprise account. For example, if your enterprise account's URL is `https://github.com/enterprises/octo-corp`, type `octo-corp`.
  ![GitHub Enterprises field](/assets/images/help/saml/okta-github-enterprises.png)
1. Click **Done**.

## Enabling and testing SAML SSO

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
1. To the right of Settings, click **Edit**.
1. Under "Configured SAML Attributes", to the right of "groups", use the drop-down menu and select **Matches regex**.
1. To the right of the drop-down menu, type `.*.*`.
1. Click **Save**.
{% data reusables.saml.okta-view-setup-instructions %}
1. Enable SAML for your enterprise account using the information in the setup instructions. For more information, see "[Enforcing SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

## Creating groups in Okta

1. In Okta, create a group to match each organization owned by your enterprise account. The name of each group must match the account name of the organization (not the organization's display name). For example, if the URL of the organization is `https://github.com/octo-org`, name the group `octo-org`.
1. Assign the application you created for your enterprise account to each group. {% data variables.product.prodname_dotcom %} will receive all `groups` data for each user.
1. Add users to groups based on the organizations you'd like users to belong to.

## Enabling SAML user provisioning

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "SAML User Provisioning", select **Enable SAML user provisioning**.
  ![Checkbox to enable user provisioning with SAML](/assets/images/help/business-accounts/user-provisioning.png)
1. Click **Save**.
1. Optionally, enable SAML user deprovisioning.
   - Select **Enable SAML user deprovisioning**, then click **Save**.
     ![Checkbox to enable user deprovisioning with SAML](/assets/images/help/business-accounts/saml-deprovisioning.png)
   - Read the warning, then click **Enable SAML deprovisioning**.
       ![Enable SAML deprovisioning button](/assets/images/help/business-accounts/saml-deprovisioning-confirm.png)
