---
title: 将 Jira 与个人项目集成
intro: 可以将 Jira Cloud 与你的个人帐户合并，以扫描提交和拉取请求，在任何提及的 Jira 问题中创建相关的元数据和超链接。
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
ms.openlocfilehash: bc88d865cd9c1c88caf5498eab330b6f11cd2ec0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164729'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
1. 单击“注册新应用程序”。
2. 在“应用程序名称”下，键入“Jira”。
3. 在“主页 URL”下，键入 Jira 实例的完整 URL。
4. 在“授权回叫 URL”下，键入 Jira 实例的完整 URL。
5. 单击“注册应用程序”。
![“注册应用程序”按钮](/assets/images/help/oauth/register-application-button.png)
8. 在“开发人员应用程序”下，记下“客户端 ID”和“客户端机密”值。
![客户端 ID 和客户端机密](/assets/images/help/oauth/client-id-and-secret.png){% data reusables.user-settings.jira_help_docs %}

## 延伸阅读

- [集成 Jira 与组织项目板](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>将 Jira Cloud 连接到 GitHub</a>（Atlassian 文档）
