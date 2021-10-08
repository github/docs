---
title: Connecting your enterprise account to GitHub Enterprise Cloud
shortTitle: Connect enterprise accounts
intro: '启用 {% data variables.product.prodname_github_connect %} 后，您可以在 {% data variables.product.product_location %} 与 {% data variables.product.prodname_ghe_cloud %} 之间共用特定的功能和工作流程。'
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
  ghae: next
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---

{% data reusables.github-connect.beta %}

## 关于 {% data variables.product.prodname_github_connect %}

要启用 {% data variables.product.prodname_github_connect %}，必须在 {% data variables.product.product_location %} 和 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户中配置连接。

{% ifversion ghes %}
要配置连接，您的代理配置必须允许连接到 `github.com` 和 `api.github.com`。 更多信息请参阅“[配置出站 Web 代理服务器](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)”。
{% endif %}

启用 {% data variables.product.prodname_github_connect %} 后，您将能够启用统一搜索和统一贡献等功能。 For more information about all of the features available, see "[Managing connections between your enterprise accounts](/admin/configuration/managing-connections-between-your-enterprise-accounts)."

将 {% data variables.product.product_location %} 连接到 {% data variables.product.prodname_ghe_cloud %} 时，{% data variables.product.prodname_dotcom_the_website %} 上会有一条记录存储连接的相关信息：
{% ifversion ghes %}
- {% data variables.product.prodname_ghe_server %} 许可的公钥部分
- {% data variables.product.prodname_ghe_server %} 许可的哈希
- {% data variables.product.prodname_ghe_server %} 许可上的客户名称
- The version of {% data variables.product.product_location_enterprise %}{% endif %}
- The hostname of your {% data variables.product.product_name %} instance
- 连接至 {% data variables.product.product_location %} 的 {% data variables.product.prodname_dotcom_the_website %} 上的组织或企业帐户
- {% data variables.product.product_location %} 用于向 {% data variables.product.prodname_dotcom_the_website %} 发送请求的身份验证令牌

启用 {% data variables.product.prodname_github_connect %} 也可以创建由您的 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户所拥有的 {% data variables.product.prodname_github_app %}。 {% data variables.product.product_name %} 使用 {% data variables.product.prodname_github_app %} 的凭据向 {% data variables.product.prodname_dotcom_the_website %} 发送请求。
{% ifversion ghes %}
{% data variables.product.prodname_ghe_server %} 会存储来自 {% data variables.product.prodname_github_app %} 的凭据。 这些凭据将复制到任何高可用性或集群环境，并存储在任何备份中，包括由 {% data variables.product.prodname_enterprise_backup_utilities %} 创建的快照。
- 有效期为一小时的身份验证令牌
- 用于生成新的身份验证令牌的私钥
{% endif %}

启用 {% data variables.product.prodname_github_connect %} 将不允许 {% data variables.product.prodname_dotcom_the_website %} 用户对 {% data variables.product.product_name %} 进行更改。

有关使用 GraphQL API 管理企业帐户的信息，请参阅“[企业帐户](/graphql/guides/managing-enterprise-accounts)”。
## 启用 {% data variables.product.prodname_github_connect %}

{% ifversion ghes %}
1. 登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. 登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. 在“{% data variables.product.prodname_github_connect %} is not enabled yet”下，单击 **Enable {% data variables.product.prodname_github_connect %}**。 By clicking **Enable {% data variables.product.prodname_github_connect %}**, you agree to the "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %} Terms for Additional Products and Features</a>."
{% ifversion ghes %}
![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %}
![Enable GitHub Connect button](/assets/images/enterprise/github-ae/enable-github-connect-button.png)
{% endif %}
1. 在要连接的企业帐户或组织旁，单击 **Connect**。 ![企业帐户或企业旁边的连接按钮](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Disconnecting a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account from your enterprise account

与 {% data variables.product.prodname_ghe_cloud %} 断开连接后，{% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} 会从企业帐户或组织中删除，{% data variables.product.product_location %} 上存储的凭据也会删除。

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. 在要断开连接的企业帐户或组织旁，单击 **Disable {% data variables.product.prodname_github_connect %}**。
{% ifversion ghes %}
  ![企业帐户或组织名称旁的 Disable GitHub Connect 按钮](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. 阅读有关断开连接的信息，并单击 **Disable {% data variables.product.prodname_github_connect %}**。 ![包含关于断开连接的警告信息和确认按钮的模式窗口](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)
{% else %}
  ![企业帐户或组织名称旁的 Disable GitHub Connect 按钮](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. 阅读有关断开连接的信息，并单击 **Disable {% data variables.product.prodname_github_connect %}**。 ![包含关于断开连接的警告信息和确认按钮的模式窗口](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png)
{% endif %} 
