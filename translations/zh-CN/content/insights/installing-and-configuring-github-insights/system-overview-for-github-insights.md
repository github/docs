---
title: GitHub Insights 系统概述
intro: '{% data variables.product.prodname_insights %} 是一款与 {% data variables.product.prodname_enterprise %} 交互的独立应用程序。'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/system-overview-for-github-insights
versions:
  enterprise-server: '*'
---

### 运行 {% data variables.product.prodname_insights %} 的要求

{% data variables.product.prodname_insights %} 需要受支持的 {% data variables.product.prodname_ghe_server %} 版本。

支持 {% data reusables.github-insights.requires-machine %} 标准类型机器，基础操作系统为 Debian Buster、Debian Stretch 或 Ubuntu 16.04+ 的任何 LTS 版本。

要提供 {% data variables.product.prodname_insights %}，应用程序服务器必须能够运行某些依赖项，包括 Docker。 {% data reusables.github-insights.docker-requirements %} 更多信息请参阅“[安装 {% data variables.product.prodname_insights %}](/insights/installing-and-configuring-github-insights/installing-github-insights#prerequisites)”。

应用程序服务器应满足最低规格要求。

| 规格   | 最低    |
| ---- | ----- |
| vCPU | 16    |
| RAM  | 64GB  |
| 磁盘   | 250GB |

如果要使用 {% data variables.product.prodname_insights %} 导入大量数据，我们建议您的配置高于最低规格要求。 更多信息请参阅“[管理仓库](/github/installing-and-configuring-github-insights/managing-repositories#about-import-times)”。

### {% data variables.product.prodname_insights %} 的安全性和身份验证

{% data variables.product.prodname_insights %} 在您的基础架构上运行，并受您现有的信息安全控制措施的约束。 {% data variables.product.prodname_insights %} 使用 {% data variables.product.prodname_enterprise %} 中的现有用户帐户实施身份验证和访问权限控制。

#### 网络安全性

{% data variables.product.prodname_insights %} 的内部防火墙限制对应用程序服务器服务的网络访问。 网络上仅提供应用程序服务器正常运行所需的服务。

{% data variables.product.prodname_insights %} 要求为入站和出站流量开启以下端口。

| 端口  | 服务       | 协议  |
| --- | -------- | --- |
| 22  | SSH 用户   | TCP |
| 80  | HTTP 用户  | TCP |
| 443 | HTTPS 用户 | TCP |

#### 身份验证和访问权限

{% data variables.product.prodname_insights %} 的身份验证是通过 {% data variables.product.prodname_enterprise %} 处理的。 在安装过程中，您将创建一个 {% data variables.product.prodname_github_app %}，它允许 {% data variables.product.prodname_insights %} 授权用户。 {% data variables.product.prodname_github_app %} 也用于在用户和应用程序的权限范围内与 {% data variables.product.prodname_enterprise %} 进行交互。

{% data reusables.github-insights.permissions-levels %}

{% data variables.product.prodname_insights %} 中的数据访问权限受限于 {% data variables.product.prodname_enterprise %} 中每个用户的数据访问权限。 在 {% data variables.product.prodname_enterprise %} 中对仓库没有访问权限的用户，在 {% data variables.product.prodname_insights %} 中也看不到该仓库的数据。

### {% data variables.product.prodname_insights %} 的架构

![系统架构](/assets/images/help/insights/github-isights-system-diagram.png)
