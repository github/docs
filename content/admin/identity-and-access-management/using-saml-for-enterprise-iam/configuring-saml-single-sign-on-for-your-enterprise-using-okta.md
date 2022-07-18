---
title: Configuring SAML single sign-on for your enterprise using Okta
intro: 'You can use Security Assertion Markup Language (SAML) single sign-on (SSO) with Okta to automatically manage access to your enterprise account on {% data variables.product.product_name %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configure SAML SSO with Okta
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## About SAML with Okta

You can control access to your enterprise account in {% data variables.product.product_name %} and other web applications from one central interface by configuring the enterprise account to use SAML SSO with Okta, an Identity Provider (IdP).

SAML SSO controls and secures access to enterprise account resources like organizations, repositories, issues, and pull requests. For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)."

{% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."

Alternatively, you can also configure SAML SSO using Okta for an organization that uses {% data variables.product.prodname_ghe_cloud %}. For more information, see "[Configuring SAML single sign-on and SCIM using Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)."

## Adding the {% data variables.product.prodname_ghe_cloud %} application in Okta

{% data reusables.saml.okta-sign-into-your-account %}
1. Navigate to the [{% data variables.product.prodname_ghe_cloud %} - Enterprise Accounts](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) application in the Okta Integration Network and click **Add Integration**.
{% data reusables.saml.okta-dashboard-click-applications %}
1. Optionally, to the right of "Application label", type a descriptive name for the application.
1. To the right of "{% data variables.product.prodname_dotcom %} Enterprises", type the name of your enterprise account. For example, if your enterprise account's URL is `https://github.com/enterprises/octo-corp`, type `octo-corp`.
1. Click **Done**.

## Enabling and testing SAML SSO

{% data reusables.saml.okta-sign-into-your-account %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
1. To the right of Settings, click **Edit**.
1. Under "Configured SAML Attributes", to the right of "groups", use the drop-down menu and select **Matches regex**.
1. To the right of the drop-down menu, type `.*.*`.
1. Click **Save**.
{% data reusables.saml.okta-view-setup-instructions %}
1. Enable SAML for your enterprise account using the information in the setup instructions. For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)."