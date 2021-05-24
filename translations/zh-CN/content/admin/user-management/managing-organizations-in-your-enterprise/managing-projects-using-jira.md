---
title: 使用 Jira 管理项目
intro: '您可以将 Jira 与 {% data variables.product.prodname_enterprise %} 集成以进行项目管理。'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira/
  - /enterprise/admin/articles/project-management-using-jira/
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
  - /admin/user-management/managing-projects-using-jira
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Project management
---
### 将 Jira 连接到 {% data variables.product.prodname_enterprise %} 组织

1. 在 http[s]://[hostname]/login 上登录您的 {% data variables.product.prodname_enterprise %} 帐户。 如果已登录，请单击左上角的 {% data variables.product.prodname_dotcom %} 徽标。
2. 单击 {% data variables.product.prodname_dotcom %} 徽标下的个人资料图标，然后选择您希望使用 Jira 连接的组织。

  ![选择组织](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. 单击**编辑_组织名称_设置**链接。

  ![编辑组织设置](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. 在左侧边栏的 **Developer settings（开发者设置）**下，单击 **OAuth Apps（OAuth 应用程序）**。

  ![选择 OAuth 应用程序](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. 单击 **Register new application（注册新应用程序）**按钮。

  ![注册新应用程序按钮](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. 填写应用程序设置：
    - 在 **Application name（应用程序名称）** 字段中，输入 "Jira" 或您想要用来标识 Jira 实例的任何名称。
    - 在 **Homepage URL（主页 URL）**字段中，输入 Jira 实例的完整 URL。
    - 在 **Authorization callback URL（授权回叫 URL）**字段中，输入 Jira 实例的完整 URL。
7. 单击 **Register application（注册应用程序）**。
8. 在页面顶部，记下 **Client ID** 和 **Client Secret**。 您将需要这些信息来配置 Jira 实例。

### Jira 实例配置

1. 在 Jira 实例上，登录具有管理访问权限的帐户。
2. 在页面顶部，单击设置（齿轮）图标，然后选择 **Applications（应用程序）**。

  ![选择 Jira 设置中的应用程序](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. 在左侧边栏的 **Integrations（集成）**下，单击 **DVCS accounts（DVCS 帐户）**。

  ![Jira 集成菜单 - DVCS 帐户](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. 单击**链接 Bitbucket Cloud 或 {% data variables.product.prodname_dotcom %} 帐户**。

  ![将 GitHub 帐户链接到 Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. 在 **Add New Account** 模态中，填写您的 {% data variables.product.prodname_enterprise %} 设置：
    - 从 **Host（主机）**下拉菜单中，选择 **{% data variables.product.prodname_enterprise %}**。
    - 在 **Team or User Account** 字段中，输入 {% data variables.product.prodname_enterprise %} 组织或个人帐户的名称。
    - 在 **OAuth Key** 字段中，输入 {% data variables.product.prodname_enterprise %} 开发者应用程序的客户端 ID。
    - 在 **OAuth Secret** 字段中，输入 {% data variables.product.prodname_enterprise %} 开发者应用程序的客户端密钥。
    - 如果您不想链接 {% data variables.product.prodname_enterprise %} 组织或个人帐户拥有的新仓库，请取消选择 **Auto Link New Repositories（自动链接新仓库）**。
    - 如果您不想启用智能提交，请取消选择 **Enable Smart Commits（启用智能提交）**。
    - 单击 **Add（添加）**。
6. 查看您要授予 {% data variables.product.prodname_enterprise %} 帐户的权限，然后单击 **Authorize application**。
7. 如有必要，请输入密码以继续。
