---
title: Enabling encrypted assertions
shortTitle: Enable encrypted assertions
intro: 'You can improve {% data variables.location.product_location %}''s security with SAML single sign-on (SSO) by encrypting the messages that your SAML identity provider (IdP) sends.'
permissions: 'Site administrators can configure encrypted assertions for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '> 3.3'
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

If your IdP support encryption of assertions, you can configure encrypted assertions on {% data variables.product.product_name %} for increased security during the authentication process.

## Prerequisites

To enable encrypted assertions for authentication to {% data variables.product.product_name %}, you must configure SAML authentication, and your IdP must support encrypted assertions.

## Enabling encrypted assertions

To enable encrypted assertions, you must provide {% data variables.location.product_location %}'s public certificate to your IdP, and configure encryption settings that match your IdP.

{% note %}

**Note**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. Optionally, enable SAML debugging. SAML debugging records verbose entries in {% data variables.product.product_name %}'s authentication log, and may help you troubleshoot failed authentication attempts. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)."
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

If you enabled SAML debugging to test authentication with encrypted assertions, disable SAML debugging when you're done testing. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)."
