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

* Trust {% data variables.product.github %}'s SSH key fingerprints
* Have access to {% data variables.product.github %}'s hostnames and IP addresses

## {% data variables.product.github %}'s SSH key fingerprints

To find these details, use the `/meta` API endpoint for your instance. For example, using the {% data variables.product.prodname_cli %}:

```shell
gh api /meta --hostname octocorp.ghe.com
```

For more information, see [AUTOTITLE](/rest/meta/meta).

## {% data variables.product.github %}'s hostnames

* `*.{% data variables.enterprise.data_residency_domain %}`, where SUBDOMAIN is your enterprise's dedicated subdomain on {% data variables.enterprise.data_residency_site %}
* `*.pages.{% data variables.enterprise.data_residency_domain %}`
* `*.actions.{% data variables.enterprise.data_residency_domain %}`
* `*.githubassets.com`
* `*.githubusercontent.com`
* `*.blob.core.windows.net`
* `auth.ghe.com`

## {% data variables.product.github %}'s IP addresses

{% data variables.product.company_short %}'s IP address ranges for enterprises on {% data variables.enterprise.data_residency_site %} depend on your chosen region.

### The EU

| Ranges for egress traffic | Ranges for ingress traffic |
|--------------------------|---------------------------|
| 108.143.221.96/28        | 108.143.197.176/28        |
| 20.61.46.32/28           | 20.123.213.96/28          |
| 20.224.62.160/28         | 20.224.46.144/28          |
| 51.12.252.16/28          | 20.240.194.240/28         |
| 74.241.131.48/28         | 20.240.220.192/28         |
| 20.240.211.176/28        | 20.240.211.208/28         |

### Australia

| Ranges for egress traffic | Ranges for ingress traffic |
|--------------------------|---------------------------|
| 20.5.34.240/28           | 4.237.73.192/28           |
| 20.5.146.128/28          | 20.5.226.112/28           |
| 68.218.155.16/28         | 20.248.163.176/28         |

### US

| Ranges for egress traffic | Ranges for ingress traffic |
|--------------------------|---------------------------|
| 20.221.76.128/28         | 74.249.180.192/28         |
| 135.233.115.208/28       | 48.214.149.96/28          |
| 20.118.27.192/28         | 172.202.123.176/28        |

### Japan

| Ranges for egress traffic | Ranges for ingress traffic |
|--------------------------|-----------------------------|
| 74.226.88.192/28         | 74.226.88.240/28            |
| 40.81.180.112/28         | 40.81.176.224/28            |
| 4.190.169.192/28         | 4.190.169.240/28            |

## Supported regions for Azure private networking

If you use Azure private networking for {% data variables.product.company_short %}-hosted runners, the supported Azure regions on {% data variables.enterprise.data_residency_site %} differ from those on {% data variables.product.prodname_dotcom_the_website %}.

### Supported regions in the EU

| Runner type | Supported regions |
| ----------- | ----------------- |
| x64 | `francecentral`, `swedencentral`, `germanywestcentral`, `northeurope` |
| arm64 | `francecentral`, `northeurope`, `germanywestcentral` |
| GPU | `italynorth`, `swedencentral` |

### Supported regions in Australia

| Runner type | Supported regions |
| ----------- | ----------------- |
| x64 | `australiaeast`, `australiacentral` |
| arm64 | `australiaeast`, `australiacentral` |
| GPU | `australiaeast`, `australiacentral` |

### Supported regions in the US

| Runner type | Supported regions |
| ----------- | ----------------- |
| x64 | `centralus`, `eastus2`, `westus3` |
| arm64 | `centralus`, `eastus2`, `westus3` |
| GPU | `centralus`, `eastus2`, `westus3` |

### Supported regions in Japan

| Runner type | Supported regions |
| ----------- | ----------------- |
| x64 | `japaneast`, `japanwest` |
| arm64 | `japaneast`, `japanwest` |
| GPU | `japaneast` |

### IP ranges for Azure private networking

#### EU

Actions IPs:
* 74.241.192.231
* 20.4.161.108
* 74.241.204.117
* 20.31.193.160

EU region:
* 108.143.197.176/28
* 20.123.213.96/28
* 20.224.46.144/28
* 20.240.194.240/28
* 20.240.220.192/28
* 20.240.211.208/28

#### Australia

Actions IPs:
* 4.147.140.77
* 20.53.114.78

Australia region:
* 4.237.73.192/28
* 20.5.226.112/28
* 20.248.163.176/28

#### Japan

Actions IPs:

* 20.63.233.164
* 172.192.153.164

Japan region:

74.226.88.241
40.81.176.225
4.190.169.240

#### Required for all regions

* `Storage` service tag
* Communication requirements for github.com
  * 192.30.252.0/22
  * 185.199.108.0/22
  * 140.82.112.0/20
  * 143.55.64.0/20
  * 20.201.28.151/32
  * 20.205.243.166/32
  * 20.87.245.0/32
  * 4.237.22.38/32
  * 20.207.73.82/32
  * 20.27.177.113/32
  * 20.200.245.247/32
  * 20.175.192.147/32
  * 20.233.83.145/32
  * 20.29.134.23/32
  * 20.199.39.232/32
  * 20.217.135.5/32
  * 4.225.11.198/32
  * 4.208.26.197/32
  * 20.26.156.215/32

### Domains for Azure private networking

#### Required for all regions

* `*.<TENANT>.ghe.com`
* `<TENANT>.ghe.com`
* `github.com`
* `*.githubusercontent.com`
* `*.blob.core.windows.net` (can be further restricted by region, see below)
* `*.web.core.windows.net`

#### EU

`*.blob.core.windows.net` can be replaced with:
* `prodsdc01resultssa0.blob.core.windows.net`
* `prodsdc01resultssa1.blob.core.windows.net`
* `prodsdc01resultssa2.blob.core.windows.net`
* `prodsdc01resultssa3.blob.core.windows.net`
* `prodweu01resultssa0.blob.core.windows.net`
* `prodweu01resultssa1.blob.core.windows.net`
* `prodweu01resultssa2.blob.core.windows.net`
* `prodweu01resultssa3.blob.core.windows.net` 

#### Australia

`*.blob.core.windows.net` can be replaced with:
* `prodae01resultssa0.blob.core.windows.net`
* `prodae01resultssa1.blob.core.windows.net`
* `prodae01resultssa2.blob.core.windows.net`
* `prodae01resultssa3.blob.core.windows.net`

#### Japan

`*.blob.core.windows.net` can be replaced with:
* `prodjpw01resultssa0.blob.core.windows.net`
* `prodjpw01resultssa1.blob.core.windows.net`
* `prodjpw01resultssa2.blob.core.windows.net`
* `prodjpw01resultssa3.blob.core.windows.net`

## IP ranges for {% data variables.product.prodname_importer_proper_name %}

If you're running a migration to your enterprise with {% data variables.product.prodname_importer_proper_name %}, you may need to add certain ranges to an IP allow list. See [AUTOTITLE](/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products#configuring-ip-allow-lists-for-migrations).
