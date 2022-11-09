---
title: Network ports
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls
  - /enterprise/admin/articles/firewall
  - /enterprise/admin/guides/installation/network-configuration
  - /enterprise/admin/guides/installation/network-ports-to-open
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: 'Open network ports selectively based on the network services you need to expose for administrators, end users, and email support.'
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
---
## Administrative ports

Some administrative ports are required to configure {% data variables.location.product_location %} and run certain features. Administrative ports are not required for basic application use by end users.

| Port | Service | Description |
|---|---|---|
| 8443 | HTTPS | Secure web-based {% data variables.enterprise.management_console %}. Required for basic installation and configuration. |
| 8080 | HTTP | Plain-text web-based {% data variables.enterprise.management_console %}. Not required unless TLS is disabled manually. |
| 122 | SSH | Shell access for {% data variables.location.product_location %}. Required to be open to incoming connections between all nodes in a high availability configuration. The default SSH port (22) is dedicated to Git and SSH application network traffic. |
| 1194/UDP | VPN | Secure replication network tunnel in high availability configuration. Required to be open for communication between all nodes in the configuration.|
| 123/UDP| NTP | Required for time protocol operation. |
| 161/UDP | SNMP | Required for network monitoring protocol operation. |

## Application ports for end users

Application ports provide web application and Git access for end users.

| Port | Service | Description |
|---|---|---|
| 443 | HTTPS | Access to the web application and Git over HTTPS. |
| 80 | HTTP | Access to the web application. All requests are redirected to the HTTPS port if TLS is configured. |
| 22 | SSH | Access to Git over SSH. Supports clone, fetch, and push operations to public and private repositories. |
| 9418 | Git | Git protocol port supports clone and fetch operations to public repositories with unencrypted network communication. {% data reusables.enterprise_installation.when-9418-necessary %} |

{% data reusables.enterprise_installation.terminating-tls %}

## Email ports

Email ports must be accessible directly or via relay for inbound email support for end users.

| Port | Service | Description |
|---|---|---|
| 25 | SMTP | Support for SMTP with encryption (STARTTLS). |

## {% data variables.product.prodname_actions %} ports

{% data variables.product.prodname_actions %} ports must be accessible for self-hosted runners to connect to {% data variables.location.product_location %}. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-enterprise-server)."

| Port | Service | Description |
|---|---|---|
| 443 | HTTPS | Self-hosted runners connect to {% data variables.location.product_location %} to receive job assignments and to download new versions of the runner application. Required if TLS is configured.
| 80 | HTTP | Self-hosted runners connect to {% data variables.location.product_location %} to receive job assignments and to download new versions of the runner application. Required if TLS is not configured.

If you enable automatic access to {% data variables.product.prodname_dotcom_the_website %} actions, {% data variables.product.prodname_actions %} will always search for an action on {% data variables.location.product_location %} first, via these ports, before checking {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#about-resolution-for-actions-using-github-connect)."

## Further reading

- "[Configuring TLS](/admin/configuration/configuring-network-settings/configuring-tls)"
