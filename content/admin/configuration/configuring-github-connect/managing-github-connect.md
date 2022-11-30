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
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---

{% data reusables.github-connect.beta %}

## About {% data variables.product.prodname_github_connect %}

You can access additional features and workflows on {% data variables.location.product_location %} by enabling {% data variables.product.prodname_github_connect %}. For more information, see "[About {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)."

When you enable {% data variables.product.prodname_github_connect %}, you configure a connection between {% data variables.location.product_location %} and an organization or enterprise account on {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %}

Enabling {% data variables.product.prodname_github_connect %} creates a {% data variables.product.prodname_github_app %} owned by the organization or enterprise account on {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.product_name %} uses the {% data variables.product.prodname_github_app %}'s credentials to make requests to {% data variables.product.prodname_ghe_cloud %}.

{% ifversion ghes %}
{% data variables.product.prodname_ghe_server %} stores credentials from the {% data variables.product.prodname_github_app %}. The following credentials will be replicated to all nodes in a high availability or cluster environment, and stored in any backups, including snapshots created by {% data variables.product.prodname_enterprise_backup_utilities %}.
- An authentication token, which is valid for one hour
- A private key, which is used to generate a new authentication token
{% endif %}

## Prerequisites

To use {% data variables.product.prodname_github_connect %}, you must have an organization or enterprise account on {% data variables.product.prodname_dotcom_the_website %} that uses {% data variables.product.prodname_ghe_cloud %}. You may already have {% data variables.product.prodname_ghe_cloud %} included in your plan. {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %}
If your organization or enterprise account on {% data variables.product.prodname_dotcom_the_website %} uses IP allow lists, you must add the IP address or network for {% data variables.location.product_location %} to your IP allow list on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Managing allowed IP addresses for your organization](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)" and "[Enforcing policies for security settings in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

To configure a connection, your proxy configuration must allow connectivity to `github.com`, `api.github.com`, and `uploads.github.com`. For more information, see "[Configuring an outbound web proxy server](/enterprise/admin/guides/installation/configuring-an-outbound-web-proxy-server)."
{% endif %}

## Enabling {% data variables.product.prodname_github_connect %}

Enterprise owners who are also owners of an organization or enterprise account that uses {% data variables.product.prodname_ghe_cloud %} can enable {% data variables.product.prodname_github_connect %}.

If you're connecting {% data variables.location.product_location %} to an organization on {% data variables.product.prodname_ghe_cloud %} that is not owned by an enterprise account, you must sign into {% data variables.product.prodname_dotcom_the_website %} as an organization owner.

If you're connecting {% data variables.location.product_location %} to an organization on {% data variables.product.prodname_ghe_cloud %} that is owned by an enterprise account or to an enterprise account itself, you must sign into {% data variables.product.prodname_dotcom_the_website %} as an enterprise owner.

{% ifversion ghes %}
1. Sign in to {% data variables.location.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Sign in to {% data variables.location.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Under "{% data variables.product.prodname_github_connect %} is not enabled yet", click **Enable {% data variables.product.prodname_github_connect %}**. By clicking **Enable {% data variables.product.prodname_github_connect %}**, you agree to the "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %} Terms for Additional Products and Features</a>."
{% ifversion ghes %}
  ![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %}
  ![Enable GitHub Connect button](/assets/images/enterprise/github-ae/enable-github-connect-button.png)
{% endif %}
1. Next to the enterprise account or organization you'd like to connect, click **Connect**.
  ![Connect button next to an enterprise account or business](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Disabling {% data variables.product.prodname_github_connect %}

Enterprise owners can disable {% data variables.product.prodname_github_connect %}.

When you disconnect from {% data variables.product.prodname_ghe_cloud %}, the {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} is deleted from your enterprise account or organization and credentials stored on {% data variables.location.product_location %} are deleted.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Next to the enterprise account or organization you'd like to disconnect, click **Disable {% data variables.product.prodname_github_connect %}**.
{% ifversion ghes %}
  ![Disable GitHub Connect button next to an enterprise account or organization name](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. Read the information about disconnecting and click **Disable {% data variables.product.prodname_github_connect %}**.
  ![Modal with warning information about disconnecting and confirmation button](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)  
{% else %}
  ![Disable GitHub Connect button next to an enterprise account or organization name](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. Read the information about disconnecting and click **Disable {% data variables.product.prodname_github_connect %}**.
  ![Modal with warning information about disconnecting and confirmation button](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png)
{% endif %} 
