---
title: 将 GitHub 应用程序设为公共或私有
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps/
  - /apps/building-github-apps/installation-options-for-github-apps/
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option/
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option/
  - /apps/managing-github-apps/making-a-github-app-public-or-private
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

有关身份验证信息，请参阅“[使用 GitHub 应用程序进行身份验证](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)”。

### 公共安装流程

公共安装流程有一个登录页面，可让除应用程序所有者以外的其他人在他们的仓库中安装应用程序。 设置您的 GitHub 应用程序时，在“Public link（公共链接）”字段中提供此链接。 更多信息请参阅“[安装 GitHub 应用程序](/apps/installing-github-apps/)”。

### 私有安装流程

私有安装流程只允许 GitHub 应用程序的所有者安装它。 有关 GitHub 应用程序的有限信息仍将存在于公共页面，但 **Install（安装）**按钮仅对组织管理员或用户帐户（如果 GitHub 应用程序由个人帐户所有）可用。 Private{% if currentVersion ver_lt "enterprise-server@3.2" or currentVersion == "github-ae@latest" %}, or internal,{% endif %} GitHub Apps can only be installed on the user or organization account of the owner.

### 更改 GitHub 应用程序的安装权限

要更改 GitHub 应用程序的安装权限：

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
3. 选择要更改其安装权限选项的 GitHub 应用程序。 ![应用程序选择](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
5. Depending on the installation option of your GitHub App, click either **Make public** or **Make {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}private{% else %}internal{% endif %}**. ![更改 GitHub 应用程序安装选项的按钮](/assets/images/github-apps/github_apps_make_public.png)
6. Depending on the installation option of your GitHub App, click either **Yes, make this GitHub App public** or **Yes, make this GitHub App {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}private{% else %}internal{% endif %}**. ![确认更改安装选项的按钮](/assets/images/github-apps/github_apps_confirm_installation_option.png)
