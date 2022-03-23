---
title: Managing GitHub Connect
shortTitle: Manage GitHub Connect
intro: 'You can enable {% data variables.product.prodname_github_connect %} to access additional features and workflows for {% data variables.product.product_location %}.'
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

## 关于 {% data variables.product.prodname_github_connect %}

You can access additional features and workflows on {% data variables.product.product_location %} by enabling {% data variables.product.prodname_github_connect %}. 更多信息请参阅“[关于 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)”。

When you enable {% data variables.product.prodname_github_connect %}, you configure a connection between {% data variables.product.product_location %} and an organization or enterprise account on {% data variables.product.prodname_ghe_cloud %}. Enabling {% data variables.product.prodname_github_connect %} creates a {% data variables.product.prodname_github_app %} owned by the organization or enterprise account on {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.product_name %} 使用 {% data variables.product.prodname_github_app %} 的凭据向 {% data variables.product.prodname_ghe_cloud %} 发送请求。

{% ifversion ghes %}
{% data variables.product.prodname_ghe_server %} 会存储来自 {% data variables.product.prodname_github_app %} 的凭据。 The following credentials will be replicated to all nodes in a high availability or cluster environment, and stored in any backups, including snapshots created by {% data variables.product.prodname_enterprise_backup_utilities %}.
- 有效期为一小时的身份验证令牌
- 用于生成新的身份验证令牌的私钥
{% endif %}

## 基本要求

To use {% data variables.product.prodname_github_connect %}, you must have an organization or enterprise account on {% data variables.product.prodname_dotcom_the_website %} that uses {% data variables.product.prodname_ghe_cloud %}. You may already have {% data variables.product.prodname_ghe_cloud %} included in your plan. {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %}
If your organization or enterprise account on {% data variables.product.prodname_dotcom_the_website %} uses IP allow lists, you must add the IP address or network for {% data variables.product.product_location %} to your IP allow list on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Managing allowed IP addresses for your organization](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)" and "[Enforcing policies for security settings in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

To configure a connection, your proxy configuration must allow connectivity to `github.com`, `api.github.com`, and `uploads.github.com`. For more information, see "[Configuring an outbound web proxy server](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)."
{% endif %}

## 启用 {% data variables.product.prodname_github_connect %}

Enterprise owners who are also owners of an organization or enterprise account that uses {% data variables.product.prodname_ghe_cloud %} can enable {% data variables.product.prodname_github_connect %}.

If you're connecting {% data variables.product.product_location %} to an organization on {% data variables.product.prodname_ghe_cloud %} that is not owned by an enterprise account, you must sign into {% data variables.product.prodname_dotcom_the_website %} as an organization owner.

If you're connecting {% data variables.product.product_location %} to an organization on {% data variables.product.prodname_ghe_cloud %} that is owned by an enterprise account or to an enterprise account itself, you must sign into {% data variables.product.prodname_dotcom_the_website %} as an enterprise owner.

{% ifversion ghes %}
1. 登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. 登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. 在“{% data variables.product.prodname_github_connect %} is not enabled yet”下，单击 **Enable {% data variables.product.prodname_github_connect %}**。 By clicking **Enable {% data variables.product.prodname_github_connect %}**, you agree to the "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %} Terms for Additional Products and Features</a>."
{% ifversion ghes %}
![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %}
![Enable GitHub Connect button](/assets/images/enterprise/github-ae/enable-github-connect-button.png)
{% endif %}
1. 在要连接的企业帐户或组织旁，单击 **Connect**。 ![企业帐户或企业旁边的连接按钮](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## 禁用 {% data variables.product.prodname_github_connect %}

Enterprise owners can disable {% data variables.product.prodname_github_connect %}.

When you disconnect from {% data variables.product.prodname_ghe_cloud %}, the {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} is deleted from your enterprise account or organization and credentials stored on {% data variables.product.product_location %} are deleted.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. 在要断开连接的企业帐户或组织旁，单击 **Disable {% data variables.product.prodname_github_connect %}**。
{% ifversion ghes %}
  ![企业帐户或组织名称旁的 Disable GitHub Connect 按钮](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. 阅读有关断开连接的信息，并单击 **Disable {% data variables.product.prodname_github_connect %}**。 ![包含关于断开连接的警告信息和确认按钮的模式窗口](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)
{% else %}
  ![企业帐户或组织名称旁的 Disable GitHub Connect 按钮](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. 阅读有关断开连接的信息，并单击 **Disable {% data variables.product.prodname_github_connect %}**。 ![包含关于断开连接的警告信息和确认按钮的模式窗口](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png)
{% endif %} 
