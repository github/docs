---
title: Enabling encrypted assertions
shortTitle: Enable encrypted assertions
intro: 'You can improve {% data variables.location.product_location %}''s security with SAML single sign-on (SSO) by encrypting the messages that your SAML identity provider (IdP) sends.'
permissions: Site administrators
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
redirect_from:
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/enabling-encrypted-assertions
---

## About encrypted assertions

If your IdP support encryption of assertions, you can configure encrypted assertions on {% data variables.product.prodname_ghe_server %} for increased security during the authentication process.

## Prerequisites

To enable encrypted assertions for authentication to {% data variables.product.prodname_ghe_server %}, you must configure SAML authentication, and your IdP must support encrypted assertions.

## Enabling encrypted assertions

To enable encrypted assertions, you must provide {% data variables.location.product_location %}'s public certificate to your IdP, and configure encryption settings that match your IdP.

> [!NOTE]
> {% data reusables.enterprise.test-in-staging %}

1. Optionally, enable SAML debugging. SAML debugging records verbose entries in {% data variables.product.prodname_ghe_server %}'s authentication log, and may help you troubleshoot failed authentication attempts. For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging).
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Select **Require encrypted assertions**.
1. To the right of "Encryption Certificate", to save a copy of {% data variables.location.product_location %}'s public certificate on your local machine, click **Download**.
1. Sign into your SAML IdP as an administrator.
1. In the application for {% data variables.location.product_location %}, enable encrypted assertions.
   * Note the encryption method and key transport method.
   * Provide the public certificate you downloaded in step 7.
1. Return to the management console on {% data variables.location.product_location %}.
1. To the right of "Encryption Method", select the encryption method for your IdP from step 9.
1. To the right of "Key Transport Method", select the key transport method for your IdP from step 9.
1. Click **Save settings**.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

If you enabled SAML debugging to test authentication with encrypted assertions, disable SAML debugging when you're done testing. For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging).

## SAML signing certificate for AuthnRequests

With encrypted assertions, {% data variables.product.prodname_ghe_server %} relies on the SAML signing certificate private key to decrypt assertions. This certificate is automatically generated when {% data variables.product.prodname_ghe_server %} is set up, and it is valid for 10 years.

You can find more details about the SAML signing certificate, how long it is valid for, and how to regenerate it if needed in [AUTOTITLE](/admin/managing-iam/iam-configuration-reference/saml-configuration-reference#saml-signing-certificate-for-authnrequests).
