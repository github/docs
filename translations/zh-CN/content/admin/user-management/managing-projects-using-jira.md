---
title: 使用 JIRA 管理项目
intro: '您可以将 JIRA 与 {% data variables.product.prodname_enterprise %} 集成以进行项目管理。'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira/
  - /enterprise/admin/articles/project-management-using-jira/
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### 将 JIRA 连接到 {% data variables.product.prodname_enterprise %} 组织

1. 在 http[s]://[hostname]/login 上登录您的 {% data variables.product.prodname_enterprise %} 帐户。
1. 在任意页面的右上角，单击帐户设置（齿轮）图标。
1. 在左侧边栏中，单击您组织的名称。
1. 在左侧边栏中，单击 **Applications**。
1. 在 **Organization applications** 框的右上角，单击 **Register new application**。
1. 填写应用程序设置：
    - 在 **Application name** 字段中，输入“JIRA”。
    - 在 **Homepage URL** 字段中，输入 JIRA 实例的完整 URL。
    - 在 **Authorization callback URL** 字段中，输入 JIRA 实例的完整 URL。
1. 单击 **Register application（注册应用程序）**。
1. 在页面顶部，记下 **Client ID** 和 **Client Secret**。 您将需要这些信息来配置 JIRA 实例。

### JIRA 实例配置

1. 在 JIRA 实例上，登录具有管理访问权限的帐户。
1. 在页面顶部，单击设置（齿轮）图标。
1. 在设置下拉列表中，选择 **Add-ons**。
1. 在左侧边栏的 **Source control** 下，单击 **DVCS accounts**。
1. 单击 **Link Bitbucket or GitHub account**。
1. 在 **Add New Account** 模态中，填写您的 {% data variables.product.prodname_enterprise %} 设置：
    - 从 **Host** 下拉菜单中，选择 **GitHub Enterprise**。
    - 在 **Team or User Account** 字段中，输入 {% data variables.product.prodname_enterprise %} 组织或个人帐户的名称。
    - 在 **OAuth Key** 字段中，输入 {% data variables.product.prodname_enterprise %} 开发者应用程序的客户端 ID。
    - 在 **OAuth Secret** 字段中，输入 {% data variables.product.prodname_enterprise %} 开发者应用程序的客户端密钥。
    - 如果您不想链接 {% data variables.product.prodname_enterprise %} 组织或个人帐户拥有的新仓库，请取消选择 **Auto Link New Repositories**。
    - 如果您不想启用智能提交，请取消选择 **Enable Smart Commits**。
    - 单击 **Add（添加）**。
1. 查看您要授予 {% data variables.product.prodname_enterprise %} 帐户的权限，然后单击 **Authorize application**。
1. 如有必要，请输入密码以继续。
