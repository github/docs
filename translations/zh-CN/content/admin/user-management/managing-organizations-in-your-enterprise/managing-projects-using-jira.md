---
title: 使用 Jira 管理项目
intro: '可以将 Jira 与 {% data variables.product.product_name %} 集成以进行项目管理。'
redirect_from:
  - /enterprise/admin/guides/installation/project-management-using-jira
  - /enterprise/admin/articles/project-management-using-jira
  - /enterprise/admin/developer-workflow/managing-projects-using-jira
  - /enterprise/admin/developer-workflow/customizing-your-instance-with-integrations
  - /enterprise/admin/user-management/managing-projects-using-jira
  - /admin/user-management/managing-projects-using-jira
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Project management
shortTitle: Project management with Jira
ms.openlocfilehash: da1a02894bf8c916089de94a8642396ba7ceabe4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145098678'
---
## 将 Jira 连接到 {% data variables.product.prodname_enterprise %} 组织

1. 在 http[s]://[hostname]/login 上登录您的 {% data variables.product.prodname_enterprise %} 帐户。 如果已登录，请单击左上角的 {% data variables.product.prodname_dotcom %} 徽标。
2. 单击 {% data variables.product.prodname_dotcom %} 徽标下的个人资料图标，然后选择您希望使用 Jira 连接的组织。

  ![选择组织](/assets/images/enterprise/orgs-and-teams/profile-select-organization.png)

3. 单击“编辑组织名称设置”链接。

  ![编辑组织设置](/assets/images/enterprise/orgs-and-teams/edit-organization-settings.png)

4. 在左边栏中的“开发人员设置”下，单击“OAuth 应用” 。

  ![选择 OAuth 应用程序](/assets/images/enterprise/orgs-and-teams/organization-dev-settings-oauth-apps.png)

5. 单击“注册新应用程序”按钮。

  ![注册新应用程序按钮](/assets/images/enterprise/orgs-and-teams/register-oauth-application-button.png)

6. 填写应用程序设置：
    - 在“应用程序名称”字段中，键入“Jira”或想用来标识 Jira 实例的任何名称。
    - 在“主页 URL”字段中，键入你的 Jira 实例的完整 URL。
    - 在“授权回调 URL”字段中，键入 Jira 实例的完整 URL。
7. 单击“注册应用程序”。
8. 在页面顶部，记下客户端 ID 和客户端密码 。 您将需要这些信息来配置 Jira 实例。

## Jira 实例配置

1. 在 Jira 实例上，登录具有管理访问权限的帐户。
2. 在页面顶部，单击“设置”（齿轮）图标并选择“应用程序”。

  ![选择 Jira 设置中的应用程序](/assets/images/enterprise/orgs-and-teams/jira/jira-applications.png)

3. 在左边栏中的“集成”下，单击“DVCS 帐户” 。

  ![Jira 集成菜单 - DVCS 帐户](/assets/images/enterprise/orgs-and-teams/jira/jira-integrations-dvcs.png)

4. 单击“链接 Bitbucket Cloud 或 {% data variables.product.prodname_dotcom %} 帐户”。

  ![将 GitHub 帐户链接到 Jira](/assets/images/enterprise/orgs-and-teams/jira/jira-link-github-account.png)

5. 在“添加新帐户”模式中，填写 {% data variables.product.prodname_enterprise %} 设置：
    - 从“主机”下拉菜单中，选择“{% data variables.product.prodname_enterprise %}” 。
    - 在“团队或用户帐户”字段中，键入 {% data variables.product.prodname_enterprise %} 组织或用户帐户的名称。
    - 在“OAuth 密钥”字段中，键入 {% data variables.product.prodname_enterprise %} 开发人员应用程序的客户端 ID。
    - 在“OAuth 机密”字段中，键入 {% data variables.product.prodname_enterprise %} 开发人员应用程序的客户端密码。
    - 如果你不想链接 {% data variables.product.prodname_enterprise %} 组织或用户帐户拥有的新存储库，请取消选择“自动链接新存储库”。
    - 如果不想启用智能提交，请取消选择“启用智能提交”。
    - 单击“添加”。
6. 查看要授予 {% data variables.product.prodname_enterprise %} 帐户的权限，然后单击“授权应用程序”。
7. 如有必要，请输入密码以继续。
