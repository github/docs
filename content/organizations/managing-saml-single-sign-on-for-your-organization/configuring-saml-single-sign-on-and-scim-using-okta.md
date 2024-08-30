---
title: Configuring SAML single sign-on and SCIM using Okta
intro: 'You can use Security Assertion Markup Language (SAML) single sign-on (SSO) and System for Cross-domain Identity Management (SCIM) with Okta to automatically manage access to your organization on {% data variables.product.prodname_dotcom %}.'
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

You can control access to your organization on {% data variables.product.prodname_dotcom %} and other web applications from one central interface by configuring the organization to use SAML SSO and SCIM with Okta, an Identity Provider (IdP).

{% data reusables.saml.ghec-only %}

SAML SSO controls and secures access to organization resources like repositories, issues, and pull requests. SCIM automatically adds, manages, and removes members' access to your organization on {% data variables.product.prodname_dotcom %} when you make changes in Okta. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)" and "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)."

After you enable SCIM, the following provisioning features are available for any users that you assign your {% data variables.product.prodname_ghe_cloud %} application to in Okta.

| Feature | Description |
| --- | --- |
| Push New Users | When you create a new user in Okta, the user will receive an email to join your organization on {% data variables.product.prodname_dotcom %}. |
| Push User Deactivation | When you deactivate a user in Okta, Okta will remove the user from your organization on {% data variables.product.prodname_dotcom %}. |
| Push Profile Updates | When you update a user's profile in Okta, Okta will update the metadata for the user's membership in your organization on {% data variables.product.prodname_dotcom %}. |
| Reactivate Users | When you reactivate a user in Okta, Okta will send an email invitation for the user to rejoin your organization on {% data variables.product.prodname_dotcom %}. |

Alternatively, you can configure SAML SSO for an enterprise using Okta. SCIM for enterprise accounts is only available with Enterprise Managed Users. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise-using-okta)" and "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)."

## Configuring SAML in Okta

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-browse-app-catalog %}
{% data reusables.saml.okta-add-ghec-org-integration %}
1. Fill out the form, providing the name of your organization on {% data variables.product.prodname_dotcom %} and a unique name in the "Application Label" field.
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
1. Enable and test SAML SSO on {% data variables.product.prodname_dotcom %} using the sign on URL, issuer URL, and public certificates from the "How to Configure SAML 2.0" guide. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization)."

## Configuring access provisioning with SCIM in Okta

{% data reusables.scim.dedicated-configuration-account %}

1. Sign into {% data variables.product.prodname_dotcom_the_website %} using an account that is an organization owner and is ideally used only for SCIM configuration.
1. To create an active SAML session for your organization, navigate to `https://github.com/orgs/ORGANIZATION-NAME/sso`. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)."
1. Navigate to Okta.
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.okta-applications-click-ghec-application-label %}
{% data reusables.saml.okta-provisioning-tab %}
{% data reusables.saml.okta-configure-api-integration %}
{% data reusables.saml.okta-enable-api-integration %}
1. Click **Authenticate with {% data variables.product.prodname_ghe_cloud %} - Organization**.
1. To the right of your organization's name, click **Grant**.

   {% note %}

   **Note:** If you cannot see your organization, this may be because {% data variables.product.prodname_oauth_app %} access restrictions are enabled for the organization. To continue, you will need to approve the "OKTA SCIM Integration" app for the organization. For more information, see "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization)."

   {% endnote %}

1. Click **Authorize OktaOAN**.
{% data reusables.saml.okta-save-provisioning %}
{% data reusables.saml.okta-edit-provisioning %}

## Further reading

* "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise-using-okta)"
* [Understanding SAML](https://developer.okta.com/docs/concepts/saml/) in the Okta documentation
* [Understanding SCIM](https://developer.okta.com/docs/concepts/scim/) in the Okta documentation
