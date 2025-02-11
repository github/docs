---
title: Network details for GHE.com
shortTitle: Network details
intro: 'Ensure client systems can access your resources on {% data variables.enterprise.data_residency_site %}.'
versions:
  ghec: '*'
redirect_from:
  - /early-access/admin/preview-of-data-residency-for-github-enterprise/network-access-to-resources-on-ghecom
  - /early-access/admin/private-ga-of-data-residency-for-github-enterprise-cloud/network-access-to-resources-on-ghecom
  - /early-access/admin/data-residency-for-github-enterprise-cloud/network-access-to-resources-on-ghecom
---

To access your enterprise on {% data variables.enterprise.data_residency_site %}, client systems must:

* Trust the following SSH key fingerprints
* Have access to the following hostnames and IP addresses

## {% data variables.product.github %}'s SSH key fingerprints

* `SHA256:PYES2CtancLX+w0+VvwWRQclfulUkqj6hpZmcKFAO3w` (RSA)
* `SHA256:TKoEXigNsj5b6XaSOSf20L0y3cuNx41WWM+l4AAK9k4` (ECDSA)
* `SHA256:LqPvjvQugr3MmzVYw9M3gT7won8/lUPZCSvmNydl7vU` (Ed25519)

## {% data variables.product.github %}'s hostnames

* `*.{% data variables.enterprise.data_residency_domain %}`, where SUBDOMAIN is your enterprise's dedicated subdomain on {% data variables.enterprise.data_residency_site %}
* `*.githubassets.com`
* `*.githubusercontent.com`
* `*.blob.core.windows.net`

## {% data variables.product.github %}'s IP addresses

{% data variables.product.company_short %}'s IP address ranges for enterprises on {% data variables.enterprise.data_residency_site %} depend on your chosen region.

### The EU

These are {% data variables.product.company_short %}'s IP address ranges for enterprises hosted in the EU.

#### Ranges for egress traffic

* 108.143.221.96/28
* 20.61.46.32/28
* 20.224.62.160/28
* 51.12.252.16/28
* 74.241.131.48/28
* 20.240.211.176/28

#### Ranges for ingress traffic

* 108.143.197.176/28
* 20.123.213.96/28
* 20.224.46.144/28
* 20.240.194.240/28
* 20.240.220.192/28
* 20.240.211.208/28

### Australia

These are {% data variables.product.company_short %}'s IP address ranges for enterprises hosted in Australia.

#### Ranges for egress traffic

* 20.5.34.240/28
* 20.5.146.128/28
* 68.218.155.16/28

#### Ranges for ingress traffic

* 4.237.73.192/28
* 20.5.226.112/28
* 20.248.163.176/28

## Supported regions for Azure private networking

If you use Azure private networking for {% data variables.product.company_short %}-hosted runners, the supported Azure regions on {% data variables.enterprise.data_residency_site %} differ from those on {% data variables.product.prodname_dotcom_the_website %}.

### Supported regions in the EU

| Runner type | Supported regions |
| ----------- | ----------------- |
| x64 | `francecentral`, `swedencentral` |
| arm64 | `francecentral`, `northeurope` |
| GPU | `italynorth`, `swedencentral` |

### Supported regions in Australia

| Runner type | Supported regions |
| ----------- | ----------------- |
| x64 | `australiaeast`, `australiacentral` |
| arm64 | `australiaeast`, `australiacentral` |
| GPU | N/A |

## IP ranges for {% data variables.product.prodname_importer_proper_name %}

If you're running a migration to your enterprise with {% data variables.product.prodname_importer_proper_name %}, you may need to add certain ranges to an IP allow list. See [AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#configuring-ip-allow-lists-for-migrations).

You must allow:

* Ranges required for everyone
* Additional ranges that depend on your data residency region

### Required for everyone

* 192.30.252.0/22
* 185.199.108.0/22
* 140.82.112.0/20
* 143.55.64.0/20
* 2a0a:a440::/29
* 2606:50c0::/32

### Required in the EU

* 4.231.155.80/29
* 4.225.9.96/29
* 51.12.152.184/29
* 20.199.6.80/29
* 51.12.144.32/29
* 20.199.1.232/29
* 51.12.152.240/29
* 20.19.101.136/29
* 74.241.131.48/28
* 51.12.252.16/28
* 20.240.211.176/28
* 108.143.221.96/28
* 20.61.46.32/28
* 20.224.62.160/28

### Required in Australia

* 20.213.236.72/29
* 20.53.178.216/29
* 20.213.241.72/29
* 20.11.90.48/29
* 20.5.34.240/28
* 20.5.146.128/28
* 68.218.155.16/28
