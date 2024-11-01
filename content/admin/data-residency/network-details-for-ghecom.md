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

These are {% data variables.product.company_short %}'s IP address ranges for enterprises on {% data variables.enterprise.data_residency_site %}.

### Ranges for egress traffic

* 108.143.221.96/28
* 20.61.46.32/28
* 20.224.62.160/28
* 51.12.252.16/28
* 74.241.131.48/28
* 20.240.211.176/28

### Ranges for ingress traffic

* 108.143.197.176/28
* 20.123.213.96/28
* 20.224.46.144/28
* 20.240.194.240/28
* 20.240.220.192/28
* 20.240.211.208/28

## Supported regions for Azure private networking

If you use Azure private networking for {% data variables.product.company_short %}-hosted runners, the supported Azure regions on {% data variables.enterprise.data_residency_site %} differ from those on {% data variables.product.prodname_dotcom_the_website %}.

The following regions are available:

* x64: `francecentral`, `swedencentral`
* arm64: `francecentral`, `northeurope`
* GPU: `italynorth`, `swedencentral`
