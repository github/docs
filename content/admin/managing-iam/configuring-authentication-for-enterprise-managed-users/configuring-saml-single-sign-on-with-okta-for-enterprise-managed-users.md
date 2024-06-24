---
title: Configuring SAML single sign-on with Okta for Enterprise Managed Users
shortTitle: Configure SAML on Okta
intro: 'Learn how to configure SAML SSO for {% data variables.product.prodname_emus %} on Okta and {% data variables.product.prodname_ghe_cloud %}.'
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

1. Install the [{% data variables.product.prodname_emu_idp_application %} application](https://www.okta.com/integrations/github-enterprise-managed-user) from Okta's integrations direction.
1. In the {% data variables.product.prodname_emu_idp_application %} application on Okta, click the **Assignments** tab and assign the application to your Okta account.
1. Click the **Sign on** tab.
1. Next to "Enterprise Name," type the name of your  {% data variables.enterprise.prodname_emu_enterprise %}.

   >[!NOTE]
   >For example, if you sign in to `https://github.com/enterprises/octo-enterprise`, your enterprise name is `octo-enterprise`.

1. On the "Sign on" tab, under "SAML 2.0," click **More details**.
1. In order to configure your enterprise on {% data variables.product.product_name %} later, note down the following items:

   * "Sign on URL"
   * "Issuer"
   * "Signing certificate"

## Configuring your enterprise

1. Sign in to your {% data variables.enterprise.prodname_emu_enterprise %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. Under "SAML single sign-on", select **Require SAML authentication**.
1. Under **Sign on URL**, type the "Sign on URL" that you noted down from Okta.
1. Under **Issuer**, type the "Issuer" that you noted down from Okta.
1. Under **Public Certificate**, paste the certificate that you noted from Okta.
1. Before enabling SAML SSO for your enterprise, to ensure that the information you've entered is correct, click **Test SAML configuration**. {% data reusables.saml.test-must-succeed %}
1. Click **Save**.

    {% note %}

    **Note:** After you require SAML SSO for your enterprise, the setup user will no longer have access to the enterprise but will remain signed in to {% data variables.product.prodname_dotcom %}. Only {% data variables.enterprise.prodname_managed_users %} provisioned by your IdP will have access to the enterprise.

    {% endnote %}

{% data reusables.enterprise-accounts.download-recovery-codes %}

## Enabling provisioning

After you enable SAML SSO, enable provisioning. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-with-okta)."
