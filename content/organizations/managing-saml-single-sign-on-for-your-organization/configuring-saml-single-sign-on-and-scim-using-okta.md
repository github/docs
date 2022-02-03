---
title: Configuring SAML single sign-on and SCIM using Okta
intro: 'You can use Security Assertion Markup Language (SAML) single sign-on (SSO) and System for Cross-domain Identity Management (SCIM) with Okta to automatically manage access to your organization on {% data variables.product.product_location %}.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/configuring-saml-single-sign-on-and-scim-using-okta
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configure SAML & SCIM with Okta
---

## About SAML and SCIM with Okta

You can control access to your organization on {% data variables.product.product_location %} and other web applications from one central interface by configuring the organization to use SAML SSO and SCIM with Okta, an Identity Provider (IdP).

SAML SSO controls and secures access to organization resources like repositories, issues, and pull requests. SCIM automatically adds, manages, and removes members' access to your organization on {% data variables.product.product_location %} when you make changes in Okta. For more information, see "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)" and "[About SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim)."

After you enable SCIM, the following provisioning features are available for any users that you assign your {% data variables.product.prodname_ghe_cloud %} application to in Okta.

| Feature | Description |
| --- | --- |
| Push New Users | When you create a new user in Okta, the user will receive an email to join your organization on {% data variables.product.product_location %}. |
| Push User Deactivation | When you deactivate a user in Okta, Okta will remove the user from your organization on {% data variables.product.product_location %}. |
| Push Profile Updates | When you update a user's profile in Okta, Okta will update the metadata for the user's membership in your organization on {% data variables.product.product_location %}. |
| Reactivate Users | When you reactivate a user in Okta, Okta will send an email invitation for the user to rejoin your organization on {% data variables.product.product_location %}. |

Alternatively, you can configure SAML SSO for an enterprise using Okta. SCIM for enterprise accounts is only available with Enterprise Managed Users. For more information, see "[Configuring SAML single sign-on for your enterprise using Okta](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)" and "[Configuring SCIM provisioning for Enterprise Managed Users with Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)."

## Adding the {% data variables.product.prodname_ghe_cloud %} application in Okta

{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
1. Enable and test SAML SSO on {% data variables.product.prodname_dotcom %} using the sign on URL, issuer URL, and public certificates from the "How to Configure SAML 2.0" guide. For more information, see "[Enabling and testing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization)."

## Configuring access provisioning with SCIM in Okta
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. Click **Authenticate with Github Enterprise Cloud - Organization**.
1. To the right of your organization's name, click **Grant**.

  !["Grant" button for authorizing Okta SCIM integration to access organization](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)

  {% note %}

  **Note**: If you don't see your organization in the list, go to `https://github.com/orgs/ORGANIZATION-NAME/sso` in your browser and authenticate with your organization via SAML SSO using your administrator account on the IdP. For example, if your organization's name is `octo-org`, the URL would be `https://github.com/orgs/octo-org/sso`. For more information, see "[About authentication with SAML single sign-on](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)."

  {% endnote %}
1. Click **Authorize OktaOAN**.
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

## Further reading

- "[Configuring SAML single sign-on for your enterprise account using Okta](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)"
- "[Managing team synchronization for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization#enabling-team-synchronization-for-okta)"
- [Understanding SAML](https://developer.okta.com/docs/concepts/saml/) in the Okta documentation
- [Understanding SCIM](https://developer.okta.com/docs/concepts/scim/) in the Okta documentation
