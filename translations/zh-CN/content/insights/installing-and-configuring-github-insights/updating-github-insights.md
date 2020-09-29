---
title: 更新 GitHub Insights
intro: '您可以更新到 {% data variables.product.prodname_insights %} 的最新版本，体验功能改进和漏洞修复的好处。'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/updating-github-insights
permissions: '对 `github/insights-releases` 仓库具有读取权限并对应用程序服务器具有管理权限的人可更新 {% data variables.product.prodname_insights %}。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于 {% data variables.product.prodname_insights %} 更新

在更新 {% data variables.product.prodname_insights %} 之前，您可以在任意页面的右下角查看当前使用的版本。

更新过程最多需要 10 分钟。 在此期间，用户无法访问 {% data variables.product.prodname_insights %}。

### 从 {% data variables.product.prodname_insights %} 0.4.0+ 更新

要从 0.4.0+ 更新 {% data variables.product.prodname_insights %}，您可以安装最新版本。 {% data variables.product.prodname_insights %} 将要求使用先前的安装配置。

{% data reusables.github-insights.download-latest-release %}
4. 运行 shell 脚本 `install.sh`。
5. 如果先前启用了 SSL，{% data variables.product.prodname_insights %} 将查找现有的 SSL 证书。 输入 "Y" 接受或输入 "n" 更改 SSL 证书，或者禁用 SSL。
6. 如果先前启用了 SSL，{% data variables.product.prodname_insights %} 将查找现有的 SSL 密钥。 输入 "Y" 接受或输入 "n" 更改 SSL 密钥。
5. {% data variables.product.prodname_insights %} 将查找现有主机名。 输入 "Y" 接受或输入 "n" 更改主机名。 主机名即创建 {% data variables.product.prodname_github_app %} 时用于应用程序服务器的 URL。
6. 安装的运行需要几分钟。 完成后，您将看到终端上显示一条消息。
  ```
  安装完成
  运行 /opt/insights/scripts/start.sh 以启动 GitHub Insights
  ```
{% data reusables.github-insights.run-script %}

### 从 {% data variables.product.prodname_insights %} 0.3.1 或更低版本更新

{% data variables.product.prodname_insights %} 0.3.1 或更低版本与 0.4.0+ 版本不兼容。 要从 {% data variables.product.prodname_insights %} 0.3.1 或更低版本更新，请在新的应用程序服务器上安装和配置 {% data variables.product.prodname_insights %}。
