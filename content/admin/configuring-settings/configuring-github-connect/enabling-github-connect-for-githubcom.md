---
title: Enabling GitHub Connect for GitHub.com
shortTitle: Enable for GitHub.com
intro: 'Enable {% data variables.product.prodname_github_connect %} to access additional features and workflows from {% data variables.product.prodname_dotcom_the_website %} on {% data variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud
  - /admin/configuration/configuring-github-connect/managing-github-connect
  - /admin/configuring-settings/configuring-github-connect/managing-github-connect
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---

You can access additional features and workflows on {% data variables.location.product_location %} by enabling {% data variables.product.prodname_github_connect %}. See [AUTOTITLE](/admin/configuration/configuring-github-connect/about-github-connect).

## What happens when {% data variables.product.prodname_github_connect %} is enabled?

{% data reusables.github-connect.what-happens-when-enabled %}

## Prerequisites

* You must have an enterprise account on {% data variables.product.prodname_dotcom_the_website %} that uses {% data variables.product.prodname_ghe_cloud %}.
* Your enterprise account on {% data variables.product.prodname_dotcom_the_website %} must be invoiced. Enterprise accounts on the free trial of {% data variables.product.prodname_ghe_cloud %} or that pay by credit card cannot be connected to {% data variables.location.product_location %}.
* If your enterprise account on {% data variables.product.prodname_dotcom_the_website %} uses IP allow lists, you must add the IP address or network for {% data variables.location.product_location %} to your IP allow list. See [AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise) in the {% data variables.product.prodname_ghe_cloud %} documentation.
* To configure a connection, your proxy configuration must allow connectivity to `github.com`, `api.github.com`, and `uploads.github.com`. For more information, see [AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server).
{%- ifversion ghecom-github-connect %}
* If you have previously enabled {% data variables.product.prodname_github_connect %} for an enterprise on {% data variables.enterprise.data_residency_site %}, you must change your configuration to allow connections to {% data variables.product.prodname_dotcom_the_website %}. See [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom#reenabling-connections-to-githubcom).
{%- endif %}

## Enabling {% data variables.product.prodname_github_connect %}

To enable {% data variables.product.prodname_github_connect %}, you must be an enterprise owner on both {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.

1. Sign in to {% data variables.location.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.github-connect.enable-github-connect %}
