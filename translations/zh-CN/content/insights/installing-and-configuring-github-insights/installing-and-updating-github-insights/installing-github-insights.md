---
title: 安装 GitHub Insights
intro: '您可以安装 {% data variables.product.prodname_insights %} 并将独立应用程序连接到 {% data variables.product.prodname_ghe_server %}。'
redirect_from:
  - /github/installing-and-configuring-github-insights/installing-github-insights
  - /insights/installing-and-configuring-github-insights/installing-github-insights
permissions: 'Organization owners in {% data variables.product.prodname_enterprise %} with read permissions to the `github/insights-releases` repository and administrative access to the application server can install {% data variables.product.prodname_insights %}.'
versions:
  enterprise-server: '*'
---

### 基本要求

- 您必须拥有包含 {% data variables.product.prodname_insights %} 的 {% data variables.product.prodname_enterprise %} 许可文件。 在购买 {% data variables.product.prodname_insights %} 后，您可以在 [{% data variables.product.prodname_enterprise %} 网站门户](https://enterprise.github.com/download)中下载更新的许可文件。
- {% data reusables.github-insights.requires-machine %} 更多信息请参阅“[{% data variables.product.prodname_insights %} 的系统概述](/github/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)”。
- 您必须在应用程序服务器上安装依赖项。
  - [Docker](https://docs.docker.com/install/) 1.13.0+
  - [Docker Compose](https://docs.docker.com/compose/install/) v1.17.0+
  - [netcat](http://netcat.sourceforge.net/)，通过 apt 用于 [Debian](https://packages.debian.org/search?keywords=netcat) 和 [Ubuntu](https://packages.ubuntu.com/search?keywords=netcat&searchon=names)

  {% note %}

  **注意：** {% data reusables.github-insights.docker-requirements %}

  {% endnote %}

### 创建 {% data variables.product.prodname_github_app %}

要将 {% data variables.product.prodname_insights %} 连接到 {% data variables.product.prodname_enterprise %}，您必须在 {% data variables.product.prodname_enterprise %} 上的组织中创建 {% data variables.product.prodname_github_app %}。 当您的集成执行操作时，应用程序名称的缓存版本将显示在 {% data variables.product.prodname_enterprise %} 上。

{% data reusables.enterprise_site_admin_settings.sign-in %}
2. 导航至要连接到 {% data variables.product.prodname_insights %} 的组织。
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
5. 单击**新建 {% data variables.product.prodname_github_app %}**。 ![新建 GitHub 应用程序按钮](/assets/images/github-apps/github_apps_new.png)
6. 在“{% data variables.product.prodname_github_app %} 名称”下，输入应用程序的名称。 您的应用程序不能与现有用户或组织同名，除非该名称是您自己拥有的用户或组织名称。 ![GitHub 应用程序名称字段](/assets/images/github-apps/github_apps_app_name.png)
7. 在“Homepage URL（主页 URL）”下，输入用于 {% data variables.product.prodname_insights %} 的应用程序服务器的 URL。 更多信息请参阅“[{% data variables.product.prodname_insights %} 的系统概述](/insights/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)”。 ![主页 URL 字段](/assets/images/github-apps/github_apps_homepage_url.png)
8. 在“User authorization callback URL（用户授权回调 URL）”下，输入以下内容，将 `<application-server-url>` 替换为应用程序服务器的 URL。
   ```
   <application-server-url>/public/applogin
   ```
   ![用户授权回调字段](/assets/images/github-apps/github_apps_user_authorization.png)
9. 在“Setup URL（设置 URL）”下，输入 `<application-server-url>/public/setup`。 ![设置 URL 字段](/assets/images/help/apps/github-apps-setup-url.png)
9. 在“Webhook URL（Web 挂钩 URL）”，输入 `<application-server-url>/webhooks`。 ![Web 挂钩 URL 字段](/assets/images/github-apps/github_apps_webhook_url.png)
10. 在“Webhook secret（Web 挂钩密码）”下，输入密码，然后记录该密码供以后参考。 ![Web 挂钩密码字段](/assets/images/github-apps/github_apps_webhook_secret.png)
11. 在“Permissions（权限）”下，使用下拉菜单为应用程序配置以下权限。
    - 仓库:
      - 内容：**Read-only（只读）**
      - 元数据：**Read-only（只读）**
      - 拉取请求：**Read-only（只读）**
      - 提交状态：**Read-only（只读）**
    - 组织:
      - 成员：**Read-only（只读）**
      - 项目：**Read-only（只读）**

  ![权限下拉菜单](/assets/images/help/apps/github_apps_new_permissions_post2dot13.png)
12. 在“Subscribe to events（订阅事件）”下，选择：
    - 成员
    - 拉取请求
    - 推送
    - 仓库
    - 团队 ![订阅事件复选框](/assets/images/help/apps/github_apps_subscribe_to_events_pr_push_repository.png)

13. 要启用 {% data variables.product.prodname_github_app %} 访问 {% data variables.product.product_location %} 中任何用户或组织的数据，请在“此 {% data variables.product.prodname_github_app %} 可安装在何处？”下，选择 **Any account（任何帐户）**。 ![启用访问任何帐户的单选按钮](/assets/images/help/apps/github_apps_installation_options_any_account.png)
14. 单击**创建 {% data variables.product.prodname_github_app %}**。 ![创建 GitHub 应用程序按钮](/assets/images/github-apps/github_apps_create_github_app.png)
15. 检查应用程序的配置。
16. 在“Private keys（私钥）”下，单击 **Generate a private key（生成私钥）**。 ![生成私钥按钮](/assets/images/help/apps/generate-private-key.png)
17. 保存生成的 PEM 文件供以后参考。
18. 记录关于应用程序的以下信息，供以后参考。
    - 应用程序 ID
    - 客户端 ID
    - 客户端密钥
    - 私钥
    - Web 挂钩密码

### 安装 {% data variables.product.prodname_insights %}

{% data reusables.github-insights.download-latest-release %}
{% data reusables.github-insights.install-script %}
{% data reusables.github-insights.run-script %}

### 配置 {% data variables.product.prodname_insights %}

要配置 {% data variables.product.prodname_insights %} 连接到 {% data variables.product.prodname_ghe_server %}，您必须提供在前面的步骤中记录的信息。

1. 在浏览器中，导航到 `<application-server-url>/setup`。
{% data reusables.github-insights.enterprise-api-url %}
{% data reusables.github-insights.insights-license %}
{% data reusables.github-insights.app-id %}
{% data reusables.github-insights.client-id %}
{% data reusables.github-insights.client-secret %}
{% data reusables.github-insights.private-key %}
{% data reusables.github-insights.webhook-secret %}
{% data reusables.github-insights.skip-ssl %}
11. 单击 **Submit（提交）**。
12. 单击**使用 {% data variables.product.prodname_dotcom %} 登录**。
13. 要授权 {% data variables.product.prodname_github_app %} 并访问 {% data variables.product.prodname_insights %}，请单击**授权 {% data variables.product.prodname_github_app %}**。

### 延伸阅读

- "[管理仓库](/insights/installing-and-configuring-github-insights/managing-repositories)"
- <a href="/github/site-policy/github-insights-and-data-protection-for-your-organization" class="dotcom-only">{% data variables.product.prodname_insights %} 和组织的数据保护</a>"
