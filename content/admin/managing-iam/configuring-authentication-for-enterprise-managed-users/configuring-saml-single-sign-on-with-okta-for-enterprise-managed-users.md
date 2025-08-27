---
title: Configuring SAML single sign-on with Okta for Enterprise Managed Users
shortTitle: Configure SAML on Okta
intro: 'Learn how to configure Okta for {% data variables.product.prodname_emus %} on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %}.'
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-with-okta-for-enterprise-managed-users
---

>[!WARNING]
>Enabling SAML affects all members of your enterprise.
>
>{% data variables.product.prodname_emus %} doesn't provide a backup sign in URL where members of your enterprise can sign in using their regular username and password.
>If you are unable to sign in, contact {% data variables.contact.enterprise_support %} via the {% data variables.contact.contact_enterprise_portal %} for assistance.

## Supported features

The {% data variables.product.prodname_emu_idp_application %} application on Okta supports **SP-initiated SSO** and **IdP-initiated SSO**.

## Configuring Okta

1. Install the Okta application for your environment.

   * For **{% data variables.product.prodname_dotcom_the_website %}**, install the [{% data variables.product.prodname_emu_idp_application %} application](https://www.okta.com/integrations/github-enterprise-managed-user).
   * For **{% data variables.enterprise.data_residency_site %}**, install the [{% data variables.product.prodname_emu_idp_application %} - {% data variables.enterprise.data_residency_site %} application](https://www.okta.com/integrations/github-enterprise-managed-user-ghe-com/).

1. In the application on Okta, click the **Assignments** tab and assign the application to your Okta account.
1. Click the **Sign on** tab.
1. Next to "Enterprise Name," type the name of your {% data variables.enterprise.prodname_emu_enterprise %}.

   >[!NOTE]
   >For example, if you sign in to `github.com/enterprises/octocorp` or `{% data variables.enterprise.data_residency_example_domain %}`, your enterprise name is `octocorp`.

1. On the "Sign on" tab, under "SAML 2.0," click **More details**.
1. In order to configure your enterprise on {% data variables.product.github %} later, note down the following items:

   * "Sign on URL"
   * "Issuer"
   * "Signing certificate"

## Configuring your enterprise

1. Sign in to your {% data variables.enterprise.prodname_emu_enterprise %}.
1. Using the details you noted from Okta, follow the steps in [AUTOTITLE](/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users#configure-your-enterprise).

## Enabling provisioning

After you enable SAML SSO, enable provisioning. For more information, see [AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-with-okta).
