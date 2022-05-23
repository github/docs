---
title: 将 Jira 与个人项目集成
intro: 您可以将 Jira Cloud 与您的个人帐户集成，以扫描提交和拉取请求，在任何提及的 Jira 议题中创建相关的元数据和超链接。
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: 将 Jira 与项目集成
---

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
1. 单击 **Register a new application（注册新应用程序）**。
2. 在 **Application name（应用程序名称）**下输入 "Jira"。
3. 在 **Homepage URL（主页 URL）**下，输入 Jira 实例的完整 URL。
4. 在 **Authorization callback URL（授权回叫 URL）**下，输入 Jira 实例的完整 URL。
5. 单击 **Register application（注册应用程序）**。 ![注册应用程序按钮](/assets/images/help/oauth/register-application-button.png)
8. 在 **Developer applications（开发者应用程序）**下，记下 "Client ID"（客户 ID）和 "Client Secret"（客户端密钥）值。 ![客户端 ID 和客户端密码](/assets/images/help/oauth/client-id-and-secret.png)
{% data reusables.user-settings.jira_help_docs %}

## 延伸阅读

- ["集成 Jira 与组织项目板"](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>将 Jira Cloud 连接到 GitHub</a>（Atlassian 文档）
