---
title: Connecting GitHub Enterprise Server to GitHub Enterprise Cloud
intro: 'After you enable {% data variables.product.prodname_github_connect %}, you can share specific features and workflows between {% data variables.product.product_location_enterprise %} and {% data variables.product.prodname_ghe_cloud %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% data variables.product.prodname_github_connect %}.'
versions:
  enterprise-server: '*'
topics:
  - корпоративный
---

### About {% data variables.product.prodname_github_connect %}

To enable {% data variables.product.prodname_github_connect %}, you must configure the connection in both {% data variables.product.product_location_enterprise %} and in your {% data variables.product.prodname_ghe_cloud %} organization or enterprise account.

To configure a connection, your proxy configuration must allow connectivity to `github.com` and `api.github.com`. For more information, see "[Configuring an outbound web proxy server](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)."

After enabling {% data variables.product.prodname_github_connect %}, you will be able to enable features such as unified search and unified contributions. For more information about all of the features available, see "[Managing connections between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/installation/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud)."

When you connect {% data variables.product.product_location_enterprise %} to {% data variables.product.prodname_ghe_cloud %}, a record on {% data variables.product.prodname_dotcom_the_website %} stores information about the connection:
- The public key portion of your {% data variables.product.prodname_ghe_server %} license
- A hash of your {% data variables.product.prodname_ghe_server %} license
- The customer name on your {% data variables.product.prodname_ghe_server %} license
- The hostname of {% data variables.product.product_location_enterprise %}
- The version of {% data variables.product.product_location_enterprise %}
- The organization or enterprise account on {% data variables.product.prodname_dotcom_the_website %} that's connected to {% data variables.product.product_location_enterprise %}
- The authentication token that's used by {% data variables.product.product_location_enterprise %} to make requests to {% data variables.product.prodname_dotcom_the_website %}

Enabling {% data variables.product.prodname_github_connect %} also creates a {% data variables.product.prodname_github_app %} owned by your {% data variables.product.prodname_ghe_cloud %} organization or enterprise account. {% data variables.product.prodname_ghe_server %} uses the {% data variables.product.prodname_github_app %}'s credentials to make requests to {% data variables.product.prodname_dotcom_the_website %}.

{% data variables.product.prodname_ghe_server %} stores credentials from the {% data variables.product.prodname_github_app %}. These credentials will be replicated to any high availability or clustering environments, and stored in any backups, including snapshots created by {% data variables.product.prodname_enterprise_backup_utilities %}.
- An authentication token, which is valid for one hour
- A private key, which is used to generate a new authentication token

Enabling {% data variables.product.prodname_github_connect %} will not allow {% data variables.product.prodname_dotcom_the_website %} users to make changes to {% data variables.product.prodname_ghe_server %}.

For more information about managing enterprise accounts using the GraphQL API, see "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)."
### Enabling {% data variables.product.prodname_github_connect %}

1. Sign in to

{% data variables.product.product_location_enterprise %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. Under "{% data variables.product.prodname_dotcom_the_website %} is not enabled yet", click **Enable {% data variables.product.prodname_github_connect %}**. By clicking **Enable {% data variables.product.prodname_github_connect %}**, you agree to the  <a href="/articles/github-connect-addendum-to-the-github-enterprise-license-agreement/" class="dotcom-only">{% data variables.product.prodname_github_connect %} Addendum to the {% data variables.product.prodname_enterprise %} License Agreement</a>. ![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png)
6. Next to the enterprise account or organization you'd like to connect, click **Connect**. ![Connect button next to an enterprise account or business](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

### Disconnecting a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account from {% data variables.product.product_location_enterprise %}

When you disconnect from {% data variables.product.prodname_ghe_cloud %}, the {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} is deleted from your enterprise account or organization and credentials stored on {% data variables.product.product_location_enterprise %} are deleted.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. Next to the enterprise account or organization you'd like to disconnect, click **Disable {% data variables.product.prodname_github_connect %}**. ![Disable GitHub Connect button next to an enterprise account or organization name](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
6. Read the information about disconnecting and click **Disable {% data variables.product.prodname_github_connect %}**. ![Modal with warning information about disconnecting and confirmation button](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)

