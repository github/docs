---
title: Enabling subdomain isolation
intro: 'You can set up subdomain isolation to securely separate user-supplied content from other portions of your {% data variables.product.prodname_ghe_server %} appliance.'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
  - /admin/configuration/enabling-subdomain-isolation
  - /admin/configuration/configuring-network-settings/enabling-subdomain-isolation
  - /admin/configuration/hardening-security-for-your-enterprise/enabling-subdomain-isolation
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
shortTitle: Enable subdomain isolation
---
## About subdomain isolation

Subdomain isolation mitigates cross-site scripting and other related vulnerabilities. For more information, see [Cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) on Wikipedia. We highly recommend that you enable subdomain isolation on {% data variables.location.product_location %}.

When subdomain isolation is enabled, {% data variables.product.prodname_ghe_server %} replaces several paths with subdomains. After enabling subdomain isolation, attempts to access the previous paths for some user-supplied content, such as `http(s)://HOSTNAME/raw/`, may return `404` errors.

| Path without subdomain isolation  | Path with subdomain isolation   |
| --- | --- |
| `http(s)://HOSTNAME/` | `http(s)://docker.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/npm/` | `https://npm.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/rubygems/` | `https://rubygems.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/maven/` | `https://maven.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/nuget/` | `https://nuget.HOSTNAME/` |
| `http(s)://HOSTNAME/assets/` | `http(s)://assets.HOSTNAME/` |
| `http(s)://HOSTNAME/avatars/` | `http(s)://avatars.HOSTNAME/` |
| `http(s)://HOSTNAME/codeload/` | `http(s)://codeload.HOSTNAME/` |
| `http(s)://HOSTNAME/gist/` | `http(s)://gist.HOSTNAME/` |
| `http(s)://HOSTNAME/media/` | `http(s)://media.HOSTNAME/` |
| `http(s)://HOSTNAME/notebooks/` | `http(s)://notebooks.HOSTNAME/` |
| `http(s)://HOSTNAME/pages/` | `http(s)://pages.HOSTNAME/` |
| `http(s)://HOSTNAME/raw/` | `http(s)://raw.HOSTNAME/` |
| `http(s)://HOSTNAME/reply/` | `http(s)://reply.HOSTNAME/` |
| `http(s)://HOSTNAME/uploads/` | `http(s)://uploads.HOSTNAME/` |
| `http(s)://HOSTNAME/viewscreen/` | `http(s)://viewscreen.HOSTNAME/` |
| {%- ifversion ghes %} |
| Not supported | `https://containers.HOSTNAME/` |
| {%- endif %} |

## Prerequisites

{% data reusables.enterprise_installation.disable-github-pages-warning %}

Before you enable subdomain isolation, you must configure your network settings for your new domain.

* Specify a valid domain name as your hostname, instead of an IP address. For more information, see [AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-a-hostname).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

* Set up a wildcard Domain Name System (DNS) record or individual DNS records for the subdomains listed above. We recommend creating an A record for `*.HOSTNAME` that points to your server's IP address so you don't have to create multiple records for each subdomain.
* Get a wildcard Transport Layer Security (TLS) certificate for `*.HOSTNAME` with a Subject Alternative Name (SAN) for both `HOSTNAME` and the wildcard domain `*.HOSTNAME`. For example, if your hostname is `github.octoinc.com`, get a certificate with the Common Name value set to `*.github.octoinc.com` and a SAN value set to both `github.octoinc.com` and `*.github.octoinc.com`.
* Enable TLS on your appliance. For more information, see [AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-tls).

## Enabling subdomain isolation

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
1. Select **Subdomain isolation (recommended)**.
{% data reusables.enterprise_management_console.save-settings %}
