---
title: Network ports
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls/
  - /enterprise/admin/articles/firewall/
  - /enterprise/admin/guides/installation/network-configuration/
  - /enterprise/admin/guides/installation/network-ports-to-open/
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
intro: 'Open network ports selectively based on the network services you need to expose for administrators, end users, and email support.'
versions:
  enterprise-server: '*'
---

### Administrative ports

Some administrative ports are required to configure {% data variables.product.product_location %} and run certain features. Administrative ports are not required for basic application use by end users.

| Port | Service | Description |
|---|---|---|
| 8443 | HTTPS | Secure web-based {% data variables.enterprise.management_console %}. Required for basic installation and configuration. |
| 8080 | HTTP | Plain-text web-based {% data variables.enterprise.management_console %}. Not required unless SSL is disabled manually. |
| 122 | SSH | Shell access for {% data variables.product.product_location %}. Required to be open to incoming connections from all other nodes in a High Availability configuration. The default SSH port (22) is dedicated to Git and SSH application network traffic. |
| 1194/UDP | VPN | Secure replication network tunnel in High Availability configuration. Required to be open to all other nodes in the configuration.|
| 123/UDP| NTP | Required for time protocol operation. |
| 161/UDP | SNMP | Required for network monitoring protocol operation. |

### Application ports for end users

Application ports provide web application and Git access for end users.

| Port | Service | Description |
|---|---|---|
| 443 | HTTPS | Access to the web application and Git over HTTPS. |
| 80 | HTTP | Access to the web application. All requests are redirected to the HTTPS port when SSL is enabled. |
| 22 | SSH | Access to Git over SSH. Supports clone, fetch, and push operations to public and private repositories. |
| 9418 | Git | Git protocol port supports clone and fetch operations to public repositories with unencrypted network communication. {% data reusables.enterprise_installation.when-9418-necessary %} |

{% data reusables.enterprise_installation.terminating-tls %}

### Email ports

Email ports must be accessible directly or via relay for inbound email support for end users.

| Port | Service | Description |
|---|---|---|
| 25 | SMTP | Support for SMTP with encryption (STARTTLS). |
