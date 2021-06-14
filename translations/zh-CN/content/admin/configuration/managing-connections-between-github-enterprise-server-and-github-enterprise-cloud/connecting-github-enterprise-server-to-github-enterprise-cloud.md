---
title: 将 GitHub Enterprise Server 连接到 GitHub Enterprise Cloud
intro: '启用 {% data variables.product.prodname_github_connect %} 后，您可以在 {% data variables.product.product_location_enterprise %} 与 {% data variables.product.prodname_ghe_cloud %} 之间共用特定的功能和工作流程。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% data variables.product.prodname_github_connect %}.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---

### 关于 {% data variables.product.prodname_github_connect %}

要启用 {% data variables.product.prodname_github_connect %}，必须在 {% data variables.product.product_location_enterprise %} 和 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户中配置连接。

要配置连接，您的代理配置必须允许连接到 `github.com` 和 `api.github.com`。 更多信息请参阅“[配置出站 Web 代理服务器](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)”。

启用 {% data variables.product.prodname_github_connect %} 后，您将能够启用统一搜索和统一贡献等功能。 有关所有可用功能的更多信息，请参阅“[管理 {% data variables.product.prodname_ghe_server %} 与 {% data variables.product.prodname_ghe_cloud %} 之间的连接](/enterprise/{{ currentVersion }}/admin/installation/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud)”。

将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_ghe_cloud %} 时，{% data variables.product.prodname_dotcom_the_website %} 上会有一条记录存储连接的相关信息：
- {% data variables.product.prodname_ghe_server %} 许可的公钥部分
- {% data variables.product.prodname_ghe_server %} 许可的哈希
- {% data variables.product.prodname_ghe_server %} 许可上的客户名称
- {% data variables.product.product_location_enterprise %} 的主机名
- {% data variables.product.product_location_enterprise %} 的版本
- 连接至 {% data variables.product.product_location_enterprise %} 的 {% data variables.product.prodname_dotcom_the_website %} 上的组织或企业帐户
- {% data variables.product.product_location_enterprise %} 用于向 {% data variables.product.prodname_dotcom_the_website %} 发送请求的身份验证令牌

启用 {% data variables.product.prodname_github_connect %} 也可以创建由您的 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户所拥有的 {% data variables.product.prodname_github_app %}。 {% data variables.product.prodname_ghe_server %} 使用 {% data variables.product.prodname_github_app %} 的凭据向 {% data variables.product.prodname_dotcom_the_website %} 发送请求。

{% data variables.product.prodname_ghe_server %} 会存储来自 {% data variables.product.prodname_github_app %} 的凭据。 这些凭据将复制到任何高可用性或集群环境，并存储在任何备份中，包括由 {% data variables.product.prodname_enterprise_backup_utilities %} 创建的快照。
- 有效期为一小时的身份验证令牌
- 用于生成新的身份验证令牌的私钥

启用 {% data variables.product.prodname_github_connect %} 将不允许 {% data variables.product.prodname_dotcom_the_website %} 用户对 {% data variables.product.prodname_ghe_server %} 进行更改。

有关使用 GraphQL API 管理企业帐户的信息，请参阅“[企业帐户](/graphql/guides/managing-enterprise-accounts)”。
### 启用 {% data variables.product.prodname_github_connect %}

1. 登录到 {% data variables.product.product_location_enterprise %} 和 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. 在“{% data variables.product.prodname_dotcom_the_website %} is not enabled yet”下，单击 **Enable {% data variables.product.prodname_github_connect %}**。 单击 **Enable {% data variables.product.prodname_github_connect %}**，即表明您同意 <a href="/articles/github-connect-addendum-to-the-github-enterprise-license-agreement/" class="dotcom-only">{% data variables.product.prodname_enterprise %} 许可协议的 {% data variables.product.prodname_github_connect %} 附录</a>。 ![Enable GitHub Connect 按钮](/assets/images/enterprise/business-accounts/enable-github-connect-button.png)
6. 在要连接的企业帐户或组织旁，单击 **Connect**。 ![企业帐户或企业旁边的连接按钮](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

### 断开 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户与 {% data variables.product.product_location_enterprise %} 的连接

与 {% data variables.product.prodname_ghe_cloud %} 断开连接后，{% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} 会从企业帐户或组织中删除，{% data variables.product.product_location_enterprise %} 上存储的凭据也会删除。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. 在要断开连接的企业帐户或组织旁，单击 **Disable {% data variables.product.prodname_github_connect %}**。 ![企业帐户或组织名称旁的 Disable GitHub Connect 按钮](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
6. 阅读有关断开连接的信息，并单击 **Disable {% data variables.product.prodname_github_connect %}**。 ![包含关于断开连接的警告信息和确认按钮的模式窗口](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)
