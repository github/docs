---
title: Managing GitHub Connect
shortTitle: Manage GitHub Connect
intro: 'You can enable {% data variables.product.prodname_github_connect %} to access additional features and workflows for {% data variables.location.product_location %}.'
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
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---

## About {% data variables.product.prodname_github_connect %}

You can access additional features and workflows on {% data variables.location.product_location %} by enabling {% data variables.product.prodname_github_connect %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/about-github-connect)."

When you enable {% data variables.product.prodname_github_connect %}, you configure a connection between {% data variables.location.product_location %} and an enterprise account on {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %}

Enabling {% data variables.product.prodname_github_connect %} creates a {% data variables.product.prodname_github_app %} owned by the enterprise account on {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.product_name %} uses the {% data variables.product.prodname_github_app %}'s credentials to make requests to {% data variables.product.prodname_ghe_cloud %}.

{% ifversion ghes %}
{% data variables.product.prodname_ghe_server %} stores credentials from the {% data variables.product.prodname_github_app %}. The following credentials will be replicated to all nodes in a high availability or cluster environment, and stored in any backups, including snapshots created by {% data variables.product.prodname_enterprise_backup_utilities %}.
* An authentication token, which is valid for one hour
* A private key, which is used to generate a new authentication token
{% endif %}

## Prerequisites

To use {% data variables.product.prodname_github_connect %}, you must have an enterprise account on {% data variables.product.prodname_dotcom_the_website %} that uses {% data variables.product.prodname_ghe_cloud %}. You may already have {% data variables.product.prodname_ghe_cloud %} included in your plan.

{% note %}

**Note:** Your enterprise account on {% data variables.product.prodname_dotcom_the_website %} must be invoiced. Enterprise accounts on the free trial of {% data variables.product.prodname_ghe_cloud %} or that pay by credit card cannot be connected to {% data variables.location.product_location %}.

{% endnote %}

{% ifversion ghes %}
If your enterprise account on {% data variables.product.prodname_dotcom_the_website %} uses IP allow lists, you must add the IP address or network for {% data variables.location.product_location %} to your IP allow list on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

To configure a connection, your proxy configuration must allow connectivity to `github.com`, `api.github.com`, and `uploads.github.com`. For more information, see "[AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server)."
{% endif %}

## Enabling {% data variables.product.prodname_github_connect %}

To enable {% data variables.product.prodname_github_connect %}, you must be an enterprise owner on both {% data variables.product.product_name %} and {% data variables.product.prodname_ghe_cloud %}.

{% ifversion ghes %}
1. Sign in to {% data variables.location.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Sign in to {% data variables.location.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Under "{% data variables.product.prodname_github_connect %} is not enabled yet", click **Enable {% data variables.product.prodname_github_connect %}**. By clicking **Enable {% data variables.product.prodname_github_connect %}**, you agree to the "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#connect)."
1. To the right of the enterprise account you'd like to connect, click **Connect**.

## Disabling {% data variables.product.prodname_github_connect %}

Enterprise owners can disable {% data variables.product.prodname_github_connect %}.

When you disconnect from {% data variables.product.prodname_ghe_cloud %}, the {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} is deleted from your enterprise account and credentials stored on {% data variables.location.product_location %} are deleted.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "{% data variables.product.prodname_github_connect %}", to the right of the enterprise account you'd like to disconnect, click **Disable {% data variables.product.prodname_github_connect %}**.
1. Read the information about disconnection, then click **Disable {% data variables.product.prodname_github_connect %}**.
