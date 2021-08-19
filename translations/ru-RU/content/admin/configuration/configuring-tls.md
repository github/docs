---
title: Configuring TLS
intro: 'You can configure Transport Layer Security (TLS) on {% data variables.product.product_location %} so that you can use a certificate that is signed by a trusted certificate authority.'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration/
  - /enterprise/admin/guides/installation/about-tls/
  - /enterprise/admin/installation/configuring-tls
  - /enterprise/admin/configuration/configuring-tls
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
---

### About Transport Layer Security

TLS, which replaced SSL, is enabled and configured with a self-signed certificate when {% data variables.product.prodname_ghe_server %} is started for the first time. As self-signed certificates are not trusted by web browsers and Git clients, these clients will report certificate warnings until you disable TLS or upload a certificate signed by a trusted authority, such as Let's Encrypt.

The {% data variables.product.prodname_ghe_server %} appliance will send HTTP Strict Transport Security headers when SSL is enabled. Disabling TLS will cause users to lose access to the appliance, because their browsers will not allow a protocol downgrade to HTTP. For more information, see "[HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)" on Wikipedia.

{% data reusables.enterprise_installation.terminating-tls %}

To allow users to use FIDO U2F for two-factor authentication, you must enable TLS for your instance. For more information, see "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication)."

### Требования

To use TLS in production, you must have a certificate in an unencrypted PEM format signed by a trusted certificate authority.

Your certificate will also need Subject Alternative Names configured for the subdomains listed in "[Enabling subdomain isolation](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)" and will need to include the full certificate chain if it has been signed by an intermediate certificate authority. For more information, see "[Subject Alternative Name](http://en.wikipedia.org/wiki/SubjectAltName)" on Wikipedia.

You can generate a certificate signing request (CSR) for your instance using the `ghe-ssl-generate-csr` command. For more information, see "[Command-line utilities](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr)."

### Uploading a custom TLS certificate

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
4. Under "TLS Protocol support", select the protocols you want to allow. ![Radio buttons with options to choose TLS protocols](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. Under "Certificate", click **Choose File** to choose a TLS certificate or certificate chain (in PEM format) to install. This file will usually have a *.pem*, *.crt*, or *.cer* extension. ![Button to find TLS certificate file](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. Under "Unencrypted key", click **Choose File** to choose a TLS key (in PEM format) to install. This file will usually have a *.key* extension. ![Button to find TLS key file](/assets/images/enterprise/management-console/install-tls-key.png)

  {% warning %}

  **Warning**: Your TLS key must not have a passphrase. For more information, see "[Removing the passphrase from your key file](/enterprise/{{ currentVersion }}/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file)".

  {% endwarning %}
{% data reusables.enterprise_management_console.save-settings %}

### About Let's Encrypt support

Let's Encrypt is a public certificate authority that issues free, automated TLS certificates that are trusted by browsers using the ACME protocol. You can automatically obtain and renew Let's Encrypt certificates on your appliance without any required manual maintenance.

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

When you enable automation of TLS certificate management using Let's Encrypt, {% data variables.product.product_location %} will contact the Let's Encrypt servers to obtain a certificate. To renew a certificate, Let's Encrypt servers must validate control of the configured domain name with inbound HTTP requests.

You can also use the `ghe-ssl-acme` command line utility on {% data variables.product.product_location %} to automatically generate a Let's Encrypt certificate. For more information, see "[Command-line utilities](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-ssl-acme)."

### Configuring TLS using Let's Encrypt

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
5. Select **Enable automation of TLS certificate management using Let's Encrypt**. ![Checkbox to enable Let's Encrypt](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
{% data reusables.enterprise_management_console.privacy %}
7. Click **Request TLS certificate**. ![Request TLS certificate button](/assets/images/enterprise/management-console/request-tls-button.png)
8. Click **Save configuration**.
