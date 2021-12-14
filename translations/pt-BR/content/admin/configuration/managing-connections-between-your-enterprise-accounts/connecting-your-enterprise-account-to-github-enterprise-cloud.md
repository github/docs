---
title: Connecting your enterprise account to GitHub Enterprise Cloud
shortTitle: Connect enterprise accounts
intro: 'After you enable {% data variables.product.prodname_github_connect %}, you can share specific features and workflows between {% data variables.product.product_location %} and {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: 'Enterprise owners who are also owners of a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% data variables.product.prodname_github_connect %}.'
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

To enable {% data variables.product.prodname_github_connect %}, you must configure the connection in both {% data variables.product.product_location %} and in your {% data variables.product.prodname_ghe_cloud %} organization or enterprise account.

{% ifversion ghes %}
To configure a connection, your proxy configuration must allow connectivity to `github.com` and `api.github.com`. For more information, see "[Configuring an outbound web proxy server](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)."
{% endif %}

After enabling {% data variables.product.prodname_github_connect %}, you will be able to enable features such as unified search and unified contributions. For more information about all of the features available, see "[Managing connections between your enterprise accounts](/admin/configuration/managing-connections-between-your-enterprise-accounts)."

When you connect {% data variables.product.product_location %} to {% data variables.product.prodname_ghe_cloud %}, a record on {% data variables.product.prodname_dotcom_the_website %} stores information about the connection:
{% ifversion ghes %}
- The public key portion of your {% data variables.product.prodname_ghe_server %} license
- A hash of your {% data variables.product.prodname_ghe_server %} license
- The customer name on your {% data variables.product.prodname_ghe_server %} license
- The version of {% data variables.product.product_location_enterprise %}{% endif %}
- The hostname of your {% data variables.product.product_name %} instance
- The organization or enterprise account on {% data variables.product.prodname_dotcom_the_website %} that's connected to {% data variables.product.product_location %}
- The authentication token that's used by {% data variables.product.product_location %} to make requests to {% data variables.product.prodname_dotcom_the_website %}

Enabling {% data variables.product.prodname_github_connect %} also creates a {% data variables.product.prodname_github_app %} owned by your {% data variables.product.prodname_ghe_cloud %} organization or enterprise account. {% data variables.product.product_name %} uses the {% data variables.product.prodname_github_app %}'s credentials to make requests to {% data variables.product.prodname_dotcom_the_website %}.
{% ifversion ghes %}
{% data variables.product.prodname_ghe_server %} stores credentials from the {% data variables.product.prodname_github_app %}. These credentials will be replicated to any high availability or clustering environments, and stored in any backups, including snapshots created by {% data variables.product.prodname_enterprise_backup_utilities %}.
- An authentication token, which is valid for one hour
- A private key, which is used to generate a new authentication token
{% endif %}

Enabling {% data variables.product.prodname_github_connect %} will not allow {% data variables.product.prodname_dotcom_the_website %} users to make changes to {% data variables.product.product_name %}.

For more information about managing enterprise accounts using the GraphQL API, see "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)."
## Enabling {% data variables.product.prodname_github_connect %}

{% ifversion ghes %}
1. Sign in to {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Sign in to {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Under "{% data variables.product.prodname_github_connect %} is not enabled yet", click **Enable {% data variables.product.prodname_github_connect %}**. By clicking **Enable {% data variables.product.prodname_github_connect %}**, you agree to the "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %} Terms for Additional Products and Features</a>."
{% ifversion ghes %}
  ![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %}
  ![Enable GitHub Connect button](/assets/images/enterprise/github-ae/enable-github-connect-button.png)
{% endif %}
1. Next to the enterprise account or organization you'd like to connect, click **Connect**.
  ![Connect button next to an enterprise account or business](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Disconnecting a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account from your enterprise account

When you disconnect from {% data variables.product.prodname_ghe_cloud %}, the {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} is deleted from your enterprise account or organization and credentials stored on {% data variables.product.product_location %} are deleted.

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
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
