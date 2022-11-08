---
title: Configuring authentication and provisioning for your enterprise using Okta
shortTitle: Configure with Okta
intro: 'You can use Okta as an identity provider (IdP) to centrally manage authentication and user provisioning for {% data variables.location.product_location %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.product_name %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
miniTocMaxHeadingLevel: 3
---

{% data reusables.saml.okta-ae-sso-beta %}

## About authentication and user provisioning with Okta

You can use Okta as an Identity Provider (IdP) for {% data variables.product.product_name %}, which allows your Okta users to sign in to {% data variables.product.product_name %} using their Okta credentials.

To use Okta as your IdP for {% data variables.product.product_name %}, you can add the {% data variables.product.product_name %} app to Okta, configure Okta as your IdP in {% data variables.product.product_name %}, and provision access for your Okta users and groups.

{% data reusables.scim.ghes-beta-note %}

The following provisioning features are available for all Okta users that you assign to your {% data variables.product.product_name %} application.

| Feature | Description |
| --- | --- |
| Push New Users | When you create a new user in Okta, the user is added to {% data variables.product.product_name %}. |
| Push User Deactivation | When you deactivate a user in Okta, it will suspend the user from your enterprise on {% data variables.product.product_name %}. |
| Push Profile Updates | When you update a user's profile in Okta, it will update the metadata for the user's membership in your enterprise on {% data variables.product.product_name %}. |
| Reactivate Users | When you reactivate a user in Okta, it will unsuspend the user in your enterprise on {% data variables.product.product_name %}. |

## Prerequisites

- To configure authentication and user provisioning for {% data variables.product.product_name %} using Okta, you must have an Okta account and tenant.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %}
{%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Adding the {% data variables.product.product_name %} application in Okta


{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-browse-app-catalog %}
{%- ifversion ghae %}
1. In the search field, type "GitHub AE", then click **GitHub AE** in the results.

  !["Search result"](/assets/images/help/saml/okta-ae-search.png)
1. Click **Add**.

  !["Add GitHub AE app"](/assets/images/help/saml/okta-ae-add-github-ae.png)
1. For "Base URL", type the URL of your enterprise on {% data variables.product.product_name %}.

  !["Configure Base URL"](/assets/images/help/saml/okta-ae-configure-base-url.png)
1. Click **Done**.
{%- elsif scim-for-ghes %}
1. In the search field, type "GitHub Enterprise Server", then click **GitHub Enterprise Server** in the results.
1. Click **Add**.
1. For "Base URL", type the URL of {% data variables.location.product_location %}.
1. Click **Done**.
{% endif %}

## Enabling SAML SSO for {% data variables.product.product_name %}

To enable single sign-on (SSO) for {% data variables.product.product_name %}, you must configure {% data variables.product.product_name %} to use the sign-on URL, issuer URL, and public certificate provided by Okta. You can find these details in the Okta app for {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-click-on-the-app %}
{% ifversion ghae %}
{% data reusables.saml.okta-sign-on-tab %}
{% data reusables.saml.okta-view-setup-instructions %}
1. Take note of the "Sign on URL", "Issuer", and "Public certificate" details. 
1. Use the details to enable SAML SSO for your enterprise on {% data variables.product.product_name %}. For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)."
{% elsif scim-for-ghes %}
{% data reusables.saml.okta-sign-on-tab %}
1. Use the details to enable SAML SSO for {% data variables.location.product_location %}. For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)."
{%- endif %}

{% note %}

**Note:** To test your SAML configuration from {% data variables.product.product_name %}, your Okta user account must be assigned to the {% data variables.product.product_name %} app.

{% endnote %}

## Enabling API integration

The Okta app uses the REST API for {% data variables.product.product_name %} for SCIM provisioning. You can enable and test access to the API by configuring Okta with a {% data variables.product.pat_generic %} for {% data variables.product.product_name %}.

1. In {% data variables.product.product_name %}, generate a {% data variables.product.pat_v1 %} with the `admin:enterprise` scope. For more information, see "[Creating a {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)".
{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-click-on-the-app %}
{% data reusables.saml.okta-ae-provisioning-tab %}
1. Click **Configure API Integration**.

1. Select **Enable API integration**.

  ![Enable API integration](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. For "API Token", type the {% data variables.product.product_name %} {% data variables.product.pat_generic %} you generated previously.

1. Click **Test API Credentials**. 

{% note %}

**Note:** If you see `Error authenticating: No results for users returned`, confirm that you have enabled SSO for {% data variables.product.product_name %}. For more information see "[Enabling SAML SSO for {% data variables.product.product_name %}](#enabling-saml-sso-for-github-ae)."

{% endnote %}

## Configuring SCIM provisioning settings

This procedure demonstrates how to configure the SCIM settings for Okta provisioning. These settings define which features will be used when automatically provisioning Okta user accounts to {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-click-on-the-app %}
{% data reusables.saml.okta-ae-provisioning-tab %}
1. Under "Settings", click **To App**.

  !["To App" settings](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. To the right of "Provisioning to App", click **Edit**.
1. To the right of "Create Users", select **Enable**.
1. To the right of "Update User Attributes", select **Enable**.
1. To the right of "Deactivate Users", select **Enable**.
1. Click **Save**.

## Allowing Okta users and groups to access {% data variables.product.product_name %}

You can provision access to {% data variables.product.product_name %} for your individual Okta users, or for entire groups.

### Provisioning access for Okta users

Before your Okta users can use their credentials to sign in to {% data variables.product.product_name %}, you must assign the users to the Okta app for {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-click-on-the-app %}

1. Click **Assignments**.

  ![Assignments tab](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. Select the Assign drop-down menu and click **Assign to People**.

  !["Assign to People" button](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. To the right of the required user account, click **Assign**.

  ![List of users](/assets/images/help/saml/okta-ae-assign-user.png)

1. To the right of "Role", click a role for the user, then click **Save and go back**.

  ![Role selection](/assets/images/help/saml/okta-ae-assign-role.png)

1. Click **Done**.

{% ifversion ghae %}
### Provisioning access for Okta groups

You can map your Okta group to a team in {% data variables.product.product_name %}. Members of the Okta group will then automatically become members of the mapped {% data variables.product.product_name %} team. For more information, see "[Mapping Okta groups to teams](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)."
{% endif %}

## Further reading

- [Understanding SAML](https://developer.okta.com/docs/concepts/saml/) in the Okta documentation
- [Understanding SCIM](https://developer.okta.com/docs/concepts/scim/) in the Okta documentation
