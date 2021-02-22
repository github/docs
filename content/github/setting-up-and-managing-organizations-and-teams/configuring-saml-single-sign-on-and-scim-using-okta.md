---
title: Configuring SAML single sign-on and SCIM using Okta
intro: 'You can use Security Assertion Markup Language (SAML) single sign-on (SSO) and System for Cross-domain Identity Management (SCIM) with Okta to automatically manage access to your organization on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.saml-sso %}'
permissions: Organization owners can configure SAML SSO and SCIM using Okta for an organization.
versions:
  free-pro-team: '*'
---

### About SAML and SCIM with Okta

You can control access to your {% data variables.product.prodname_dotcom %} organization and other web applications from one central interface by configuring the organization to use SAML SSO and SCIM with Okta, an Identity Provider (IdP).

SAML SSO controls and secures access to organization resources like repositories, issues, and pull requests. SCIM automatically adds, manages, and removes members' access to your {% data variables.product.prodname_dotcom %} organization when you make changes in Okta. For more information, see "[About identity and access management with SAML single sign-on](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)" and "[About SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)."

After you enable SCIM, the following provisioning features are available for any users that you assign your {% data variables.product.prodname_ghe_cloud %} application to in Okta.

| Feature | Description |
| --- | --- |
| Push New Users | When you create a new user in Okta, the user will receive an email to join your {% data variables.product.prodname_dotcom %} organization. |
| Push User Deactivation | When you deactivate a user in Okta, Okta will remove the user from your {% data variables.product.prodname_dotcom %} organization. |
| Push Profile Updates | When you update a user's profile in Okta, Okta will update the metadata for the user's membership in your {% data variables.product.prodname_dotcom %} organization. |
| Reactivate Users | When you reactivate a user in Okta, Okta will send an email invitation for the user to rejoin your {% data variables.product.prodname_dotcom %} organization. |

### Prerequisites

{% data reusables.saml.use-classic-ui %}

### Adding the {% data variables.product.prodname_ghe_cloud %} application in Okta

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
4. To the right of "Github Enterprise Cloud - Organization", click **Add**.
  ![Clicking "Add" for the {% data variables.product.prodname_ghe_cloud %} application](/assets/images/help/saml/okta-add-ghec-application.png)

5. In the **GitHub Organization** field, type the name of your {% data variables.product.prodname_dotcom %} organization. For example, if your organization's URL is https://github.com/octo-org, the organization name would be `octo-org`.
  ![Type GitHub organization name](/assets/images/help/saml/okta-github-organization-name.png)

6. Click **Done**.

### Enabling and testing SAML SSO

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
6. Enable and test SAML SSO on {% data variables.product.prodname_dotcom %} using the sign on URL, issuer URL, and public certificates from the "How to Configure SAML 2.0" guide. For more information, see "[Enabling and testing SAML single sign-on for your organization](/github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization)."

### Configuring access provisioning with SCIM in Okta

{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}


6. Click **Authenticate with Github Enterprise Cloud - Organization**.
  !["Authenticate with Github Enterprise Cloud - Organization" button for Okta application](/assets/images/help/saml/okta-authenticate-with-ghec-organization.png)

7. To the right of your organization's name, click **Grant**.
  !["Grant" button for authorizing Okta SCIM integration to access organization](/assets/images/help/saml/okta-scim-integration-grant-organization-access.png)

  {% note %}

  **Note**: If you don't see your organization in the list, go to `https://github.com/orgs/ORGANIZATION-NAME/sso` in your browser and authenticate with your organization via SAML SSO using your administrator account on the IdP. For example, if your organization's name is `octo-org`, the URL would be `https://github.com/orgs/octo-org/sso`. For more information, see "[About authentication with SAML single sign-on](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)."

  {% endnote %}
1. Click **Authorize OktaOAN**.
  !["Authorize OktaOAN" button for authorizing Okta SCIM integration to access organization](/assets/images/help/saml/okta-scim-integration-authorize-oktaoan.png)
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

### Further reading

- "[Configuring SAML single sign-on and SCIM for your enterprise account using Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)"
- "[Managing team synchronization for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization#enabling-team-synchronization-for-okta)"
- [Understanding SAML](https://developer.okta.com/docs/concepts/saml/) in the Okta documentation
- [Understanding SCIM](https://developer.okta.com/docs/concepts/scim/) in the Okta documentation
