---
title: Configuring TLS
intro: 'You can configure Transport Layer Security (TLS) on {% data variables.location.product_location %} so that you can use a certificate that is signed by a trusted certificate authority.'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration
  - /enterprise/admin/guides/installation/about-tls
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
  - /admin/configuration/configuring-tls
  - /admin/configuration/configuring-network-settings/configuring-tls
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
---
## About Transport Layer Security

TLS, which replaced SSL, is enabled and configured with a self-signed certificate when {% data variables.product.prodname_ghe_server %} is started for the first time. As self-signed certificates are not trusted by web browsers and Git clients, these clients will report certificate warnings until you disable TLS or upload a certificate signed by a trusted authority, such as Let's Encrypt.

The {% data variables.product.prodname_ghe_server %} appliance will send HTTP Strict Transport Security headers when SSL is enabled. Disabling TLS will cause users to lose access to the appliance, because their browsers will not allow a protocol downgrade to HTTP. For more information, see "[HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)" on Wikipedia.

{% data reusables.enterprise_installation.terminating-tls %}

To allow users to use FIDO U2F for two-factor authentication, you must enable TLS for your instance. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)."

## Prerequisites

To use TLS in production, you must have a certificate in an unencrypted PEM format signed by a trusted certificate authority. To use a certificate signed by an internal certificate authority, you must install the root certificate and any intermediate certificates. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/troubleshooting-tls-errors#installing-self-signed-or-untrusted-certificate-authority-ca-root-certificates)."

Your certificate will also need Subject Alternative Names configured for the subdomains listed in "[AUTOTITLE](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation#about-subdomain-isolation)" and will need to include the full certificate chain if it has been signed by an intermediate certificate authority. For more information, see "[Subject Alternative Name](https://en.wikipedia.org/wiki/SubjectAltName)" on Wikipedia.

You can generate a certificate signing request (CSR) for your instance using the `ghe-ssl-generate-csr` command. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-generate-csr)."

Your key must be an RSA key and must not have a passphrase. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/troubleshooting-tls-errors#removing-the-passphrase-from-your-key-file)".

## Uploading a custom TLS certificate

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
1. Under "TLS Protocol support", select the protocols you want to allow.
1. Under "Certificate", click **Choose File**, then choose a TLS certificate or certificate chain (in PEM format) to install. This file will usually have a _.pem_, _.crt_, or _.cer_ extension.
1. Under "Unencrypted key", click **Choose File**, then choose an RSA key (in PEM format) to install. This file will usually have a _.key_ extension.

{% data reusables.enterprise_management_console.save-settings %}

## About Let's Encrypt support

Let's Encrypt is a public certificate authority that issues free, automated TLS certificates that are trusted by browsers using the ACME protocol. You can automatically obtain and renew Let's Encrypt certificates on your appliance without any required manual maintenance.

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

When you enable automation of TLS certificate management using Let's Encrypt, {% data variables.location.product_location %} will contact the Let's Encrypt servers to obtain a certificate. To renew a certificate, Let's Encrypt servers must validate control of the configured domain name with inbound HTTP requests.

You can also use the `ghe-ssl-acme` command line utility on {% data variables.location.product_location %} to automatically generate a Let's Encrypt certificate. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-acme)."

## Configuring TLS using Let's Encrypt

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.tls-downtime %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
1. Select **Enable automation of TLS certificate management using Let's Encrypt**.
{% data reusables.enterprise_management_console.save-settings %}
{% data reusables.enterprise_management_console.privacy %}
1. Click **Request TLS certificate**.
1. Wait for the "Status" to change from "STARTED" to "DONE".

   ![Screenshot of the "Requesting TLS Certificate" dialog. At the top of the dialog, "STATUS: DONE" is highlighted with an orange outline.](/assets/images/enterprise/management-console/lets-encrypt-status.png)
1. Click **Save configuration**.
