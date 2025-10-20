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
  - /admin/configuration/hardening-security-for-your-enterprise/configuring-tls
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

The {% data variables.product.prodname_ghe_server %} appliance will send HTTP Strict Transport Security headers when SSL is enabled. Disabling TLS will cause users to lose access to the appliance, because their browsers will not allow a protocol downgrade to HTTP. For more information, see [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) on Wikipedia.

{% data reusables.enterprise_installation.terminating-tls %}

To allow users to use FIDO U2F for two-factor authentication or deploy {% data variables.product.prodname_pages %} sites with {% data variables.product.prodname_actions %}, you must enable TLS for your instance. For more information, see [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

## Prerequisites

To use TLS in production, you must have a certificate in an unencrypted PEM format signed by a trusted certificate authority. To use a certificate signed by an internal certificate authority, you must install the root certificate and any intermediate certificates. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/troubleshooting-tls-errors#installing-self-signed-or-untrusted-certificate-authority-ca-root-certificates).

Your certificate will also need Subject Alternative Names configured for the subdomains listed in [AUTOTITLE](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation#about-subdomain-isolation) and will need to include the full certificate chain if it has been signed by an intermediate certificate authority. For more information, see [Subject Alternative Name](https://en.wikipedia.org/wiki/SubjectAltName) on Wikipedia.

You can generate a certificate signing request (CSR) for your instance using the `ghe-ssl-generate-csr` command. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-generate-csr).

Your key must be an RSA key and must not have a passphrase. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/troubleshooting-tls-errors#removing-the-passphrase-from-your-key-file).

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

You can also use the `ghe-ssl-acme` command line utility on {% data variables.location.product_location %} to automatically generate a Let's Encrypt certificate. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-acme).

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

### Troubleshooting TLS with Let's Encrypt

You can troubleshoot issues that affect your TLS certificate from Let's Encrypt.

#### Error: "Security error prevented the resource from being loaded"

In some cases, end users may report that pages for services on {% data variables.location.product_location %} respond with the following error in a browser's developer tools.

```text
Security error prevented the resource from being loaded
```

To resolve these errors, you must update the Subject Alternative Names (SANs) your Let's Encrypt certificate by reissuing the certificate. Replacement of an instance's certificate requires user-facing downtime.

1. Communicate the upcoming downtime to your users, and consider enabling maintenance mode. For more information, see the following articles.

   * [AUTOTITLE](/admin/managing-accounts-and-repositories/communicating-information-to-users-in-your-enterprise/customizing-user-messages-for-your-enterprise#creating-a-mandatory-message)
   * [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode)
{% data reusables.enterprise_installation.ssh-into-instance %}
1. To disable Let's Encrypt, run the following command.

   ```shell copy
   ghe-ssl-acme -d
   ```

1. To clear the existing settings for Let's Encrypt, run the following command.

   ```shell copy
   ghe-ssl-acme -x
   ```

1. To request and install a new certificate from Let's Encrypt, run the following command.

   ```shell copy
   ghe-ssl-acme -e
   ```

{% data reusables.enterprise.apply-configuration %}

1. If you configured a user message or maintenance mode, remove the message and disable maintenance mode.

{% ifversion ghes > 3.18 %}

## Configuring cipher suites and cryptographic algorithms

You can configure the cipher suites and cryptographic algorithms that {% data variables.product.prodname_ghe_server %} uses for TLS connections and SSH connections.

### About cipher suite and algorithm configuration

{% data variables.product.prodname_ghe_server %} allows you to configure which cipher suites and cryptographic algorithms to use for:

* **TLS connections** on ports 443 (HTTPS web interface) and 8443 (HTTPS management console)
* **SSH connections** on port 22 (Git operations via SSH) and port 122 (administrative shell access)

The default secure cipher suites are based on industry-standard TLS hardening recommendations and modern security best practices. Most organizations should use these defaults unless specific compliance or security requirements dictate otherwise.

Organizations may need to customize cipher suites and cryptographic algorithms to meet specific organizational security policies, industry standards, or regulatory requirements.

Starting in {% data variables.product.prodname_ghe_server %} 3.19, TLS ciphers are configurable and the web gateway uses more secure cipher defaults. To maintain backwards compatibility with existing instances, newly provisioned instances will use these new defaults.

> [!WARNING]
> Configuring overly restrictive cipher suites may prevent clients from connecting to your instance. Always test changes in a non-production environment first, ensure at least one cipher suite is compatible with your clients, and verify connectivity after applying configuration changes.

> [!NOTE]
> When configuring TLS cipher suites, use comma-separated values in your configuration commands. {% data variables.product.prodname_ghe_server %} automatically converts comma delimiters to colons for the HAProxy configuration. Cipher suites are evaluated in the order specified, so list your preferred ciphers first.

### Configuring TLS cipher suites

You can configure the cipher suites used for TLS 1.2 and TLS 1.3 connections.

#### Listing available TLS cipher suites

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. To view the default secure cipher suites for TLS 1.2, run the following command.

   ```shell copy
   ghe-crypto list tlsv12-ciphersuites
   ```

1. To view the default secure cipher suites for TLS 1.3, run the following command.

   ```shell copy
   ghe-crypto list tlsv13-ciphersuites
   ```

#### Viewing current cipher configuration

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. To view the configured TLS 1.2 cipher suites, run the following command.

   ```shell copy
   ghe-config github-ssl.tlsv12-ciphersuites
   ```

1. To view the configured TLS 1.3 cipher suites, run the following command.

   ```shell copy
   ghe-config github-ssl.tlsv13-ciphersuites
   ```

   If these commands return empty values, the instance is using the secure defaults.

#### Setting TLS 1.2 cipher suites

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. Check your desired TLS 1.2 cipher suites using the `ghe-crypto check` command. Replace `CIPHER1,CIPHER2,CIPHER3` with a comma-separated list of cipher suites.

   ```shell copy
   ghe-crypto check tlsv12-ciphersuites CIPHER1,CIPHER2,CIPHER3
   ```

   For example:

   ```shell
   ghe-crypto check tlsv12-ciphersuites ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384
   ```

1. If the cipher string is valid, set the TLS 1.2 cipher suites. Replace `CIPHER1,CIPHER2,CIPHER3` with your comma-separated list.

   ```shell copy
   ghe-config github-ssl.tlsv12-ciphersuites 'CIPHER1,CIPHER2,CIPHER3'
   ```

   For example:

   ```shell
   ghe-config github-ssl.tlsv12-ciphersuites 'ECDHE-ECDSA-AES128-GCM-SHA256,ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384'
   ```

1. Check the configuration.

   ```shell copy
   ghe-config-check
   ```

{% data reusables.enterprise.apply-configuration %}

1. If you configured a user message or maintenance mode, remove the message and disable maintenance mode.

#### Setting TLS 1.3 cipher suites

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. Check your desired TLS 1.3 cipher suites using the `ghe-crypto check` command. Replace `CIPHER1,CIPHER2,CIPHER3` with a comma-separated list of cipher suites.

   ```shell copy
   ghe-crypto check tlsv13-ciphersuites CIPHER1,CIPHER2,CIPHER3
   ```

   For example:

   ```shell
   ghe-crypto check tlsv13-ciphersuites TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256
   ```

1. If the cipher string is valid, set the TLS 1.3 cipher suites. Replace `CIPHER1,CIPHER2,CIPHER3` with your comma-separated list.

   ```shell copy
   ghe-config github-ssl.tlsv13-ciphersuites 'CIPHER1,CIPHER2,CIPHER3'
   ```

   For example:

   ```shell
   ghe-config github-ssl.tlsv13-ciphersuites 'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,TLS_CHACHA20_POLY1305_SHA256'
   ```

1. Check the configuration.

   ```shell copy
   ghe-config-check
   ```

{% data reusables.enterprise.apply-configuration %}

1. If you configured a user message or maintenance mode, remove the message and disable maintenance mode.

### Configuring SSH cryptographic algorithms

You can configure the cryptographic algorithms used for SSH connections on port 22 (Git operations) and port 122 (administrative shell access).

#### Listing available SSH algorithms

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. To view the default secure SSH ciphers, run the following command.

   ```shell copy
   ghe-crypto list ssh-ciphers
   ```

1. To view the default secure SSH MAC algorithms, run the following command.

   ```shell copy
   ghe-crypto list ssh-mac-algorithms
   ```

1. To view the default secure SSH key exchange algorithms, run the following command.

   ```shell copy
   ghe-crypto list ssh-kex-algorithms
   ```

1. To view the default secure SSH signature types, run the following command.

   ```shell copy
   ghe-crypto list ssh-signature-types
   ```

#### Viewing current SSH configuration

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. To view the configured SSH ciphers, run the following command.

   ```shell copy
   ghe-config github-ssl.ssh-ciphers
   ```

1. To view the configured SSH MAC algorithms, run the following command.

   ```shell copy
   ghe-config github-ssl.ssh-mac-algorithms
   ```

1. To view the configured SSH key exchange algorithms, run the following command.

   ```shell copy
   ghe-config github-ssl.ssh-kex-algorithms
   ```

1. To view the configured SSH signature types, run the following command.

   ```shell copy
   ghe-config github-ssl.ssh-signature-types
   ```

   If these commands return empty values, the instance is using the secure defaults.

#### Setting SSH ciphers

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. Check your desired SSH ciphers using the `ghe-crypto check` command. Replace `cipher1,cipher2,cipher3` with a comma-separated list of ciphers.

   ```shell copy
   ghe-crypto check ssh-ciphers cipher1,cipher2,cipher3
   ```

   For example:

   ```shell
   ghe-crypto check ssh-ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com
   ```

1. If the cipher string is valid, set the SSH ciphers. Replace `cipher1,cipher2,cipher3` with your comma-separated list.

   ```shell copy
   ghe-config github-ssl.ssh-ciphers 'cipher1,cipher2,cipher3'
   ```

   For example:

   ```shell
   ghe-config github-ssl.ssh-ciphers 'chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com'
   ```

1. Check the configuration.

   ```shell copy
   ghe-config-check
   ```

{% data reusables.enterprise.apply-configuration %}

1. If you configured a user message or maintenance mode, remove the message and disable maintenance mode.

#### Setting SSH MAC algorithms

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. Check your desired SSH MAC algorithms using the `ghe-crypto check` command. Replace `mac1,mac2,mac3` with a comma-separated list of MAC algorithms.

   ```shell copy
   ghe-crypto check ssh-mac-algorithms mac1,mac2,mac3
   ```

   For example:

   ```shell
   ghe-crypto check ssh-mac-algorithms hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com
   ```

1. If the MAC algorithm string is valid, set the SSH MAC algorithms. Replace `mac1,mac2,mac3` with your comma-separated list.

   ```shell copy
   ghe-config github-ssl.ssh-mac-algorithms 'mac1,mac2,mac3'
   ```

   For example:

   ```shell
   ghe-config github-ssl.ssh-mac-algorithms 'hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com'
   ```

1. Check the configuration.

   ```shell copy
   ghe-config-check
   ```

{% data reusables.enterprise.apply-configuration %}

1. If you configured a user message or maintenance mode, remove the message and disable maintenance mode.

#### Setting SSH key exchange algorithms

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. Check your desired SSH key exchange algorithms using the `ghe-crypto check` command. Replace `kex1,kex2,kex3` with a comma-separated list of key exchange algorithms.

   ```shell copy
   ghe-crypto check ssh-kex-algorithms kex1,kex2,kex3
   ```

   For example:

   ```shell
   ghe-crypto check ssh-kex-algorithms curve25519-sha256,curve25519-sha256@libssh.org,ecdh-sha2-nistp521
   ```

1. If the key exchange algorithm string is valid, set the SSH key exchange algorithms. Replace `kex1,kex2,kex3` with your comma-separated list.

   ```shell copy
   ghe-config github-ssl.ssh-kex-algorithms 'kex1,kex2,kex3'
   ```

   For example:

   ```shell
   ghe-config github-ssl.ssh-kex-algorithms 'curve25519-sha256,curve25519-sha256@libssh.org,ecdh-sha2-nistp521'
   ```

1. Check the configuration.

   ```shell copy
   ghe-config-check
   ```

{% data reusables.enterprise.apply-configuration %}

1. If you configured a user message or maintenance mode, remove the message and disable maintenance mode.

#### Setting SSH signature types

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. Check your desired SSH signature types using the `ghe-crypto check` command. Replace `sig1,sig2,sig3` with a comma-separated list of signature types.

   ```shell copy
   ghe-crypto check ssh-signature-types sig1,sig2,sig3
   ```

   For example:

   ```shell
   ghe-crypto check ssh-signature-types ssh-ed25519,ecdsa-sha2-nistp521,ecdsa-sha2-nistp384
   ```

1. If the signature type string is valid, set the SSH signature types. Replace `sig1,sig2,sig3` with your comma-separated list.

   ```shell copy
   ghe-config github-ssl.ssh-signature-types 'sig1,sig2,sig3'
   ```

   For example:

   ```shell
   ghe-config github-ssl.ssh-signature-types 'ssh-ed25519,ecdsa-sha2-nistp521,ecdsa-sha2-nistp384'
   ```

1. Check the configuration.

   ```shell copy
   ghe-config-check
   ```

{% data reusables.enterprise.apply-configuration %}

1. If you configured a user message or maintenance mode, remove the message and disable maintenance mode.

### Troubleshooting cipher configuration

If clients cannot connect to {% data variables.location.product_location %} after changing cipher configuration, you can troubleshoot the issue.

1. Check that your clients support the configured TLS or SSH protocol versions.
1. Verify that at least one configured cipher suite is compatible with your clients.
1. Review the instance logs for TLS handshake failures or SSH connection errors. For more information about accessing logs, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs).
1. Temporarily restore the default settings to verify the issue is cipher-related. For more information, see [Restoring default cipher suite and algorithm settings](#restoring-default-cipher-suite-and-algorithm-settings).
1. If the issue persists after restoring defaults, contact {% data variables.contact.contact_ent_support %}.

### Restoring default cipher suite and algorithm settings

To restore the default secure cipher suites or algorithms, unset the configuration value.

{% data reusables.enterprise_installation.ssh-into-target-instance %}

1. Unset the configuration setting. Replace `SETTING` with the name of the setting you want to restore to defaults.

   ```shell copy
   ghe-config --unset github-ssl.SETTING
   ```

   For example, to restore default TLS 1.2 cipher suites:

   ```shell
   ghe-config --unset github-ssl.tlsv12-ciphersuites
   ```

{% data reusables.enterprise.apply-configuration %}

1. If you configured a user message or maintenance mode, remove the message and disable maintenance mode.

{% endif %}
