---
title: 集成 Jira 与组织项目板
intro: 您可以将 Jira Cloud 与组织帐户集成，以扫描提交和拉取请求，在任何提及的 Jira 议题中创建相关的元数据和超链接。
redirect_from:
  - /articles/integrating-jira-with-your-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/integrating-jira-with-your-organization-project-board
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira
ms.openlocfilehash: 0b773dc865373ab006f7c596b50ac81af5d6636a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109460'
---
{% ifversion ghes > 3.4 or ghae-issue-5658 %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在左侧边栏中，选择“{% octicon "code" aria-label="The code icon" %} 开发人员设置”，然后单击“OAuth 应用” 。
  ![左侧边栏中的 OAuth 应用程序选项卡](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. 单击“新建 OAuth 应用”。
{% else %} {% data reusables.user-settings.access_settings %}
1. 在左侧边栏的“组织设置”下，单击组织的名称。
![侧边栏组织名称](/assets/images/help/settings/organization-settings-from-sidebar.png)
1. 在左侧边栏中的“开发人员设置”下，单击“OAuth 应用程序” 。
  ![左侧边栏中的 OAuth 应用程序选项卡](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. 单击“注册新应用程序”。
{% endif %}
1. 在“应用程序名称”下，键入“Jira”。
2. 在“主页 URL”下，键入 Jira 实例的完整 URL。
3. 在“授权回叫 URL”下，键入 Jira 实例的完整 URL。
4. 单击“注册应用程序”。
![“注册应用程序”按钮](/assets/images/help/oauth/register-application-button.png)
9. 在“组织拥有的应用程序”下，记下“客户端 ID”和“客户端密码”值。
![客户端 ID 和客户端密码](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## 延伸阅读

- [将 Jira 与个人项目集成](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>将 Jira Cloud 连接到 GitHub</a>（Atlassian 文档）
