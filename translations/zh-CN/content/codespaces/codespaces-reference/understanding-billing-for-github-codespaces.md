---
title: Understanding billing for GitHub Codespaces
intro: '了解如何对 {% data variables.product.prodname_github_codespaces %} 的使用进行计费。'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
type: reference
topics:
  - Codespaces
  - Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: 了解计费
---

本文介绍 Codespaces 的计费工作原理，并说明组织的计费管理器如何提供帮助。

## 获取对 {% data variables.product.prodname_github_codespaces %} 的访问

您组织的管理员可能会将 {% data variables.product.prodname_github_codespaces %} 的使用仅限于特定个人帐户。 要获得访问权限，您需要联系您的帐单管理员。 更多信息请参阅“[管理 Codespaces 的访问和安全性](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces)”。

## 使用 {% data variables.product.prodname_codespaces %} 的费用

要查看 {% data variables.product.prodname_codespaces %} 使用的定价，请参阅“[{% data variables.product.prodname_codespaces %} 定价](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”。

## 如何对代码空间的使用计费

代码空间将根据其计算分钟数及其在磁盘上使用的存储量付费。

如果启用代码空间的预构建，则会产生额外费用。 更多信息请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 预构建](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)”。

### 了解什么是计算分钟数
代码空间按其处于活动状态的分钟数计费。 如果代码空间窗口空闲 30 分钟，它将自动关闭，并且代码空间的计算计费将结束，直到您再次启动代码空间。

### 了解代码空间存储是如何计费的
对于 {% data variables.product.prodname_github_codespaces %}，存储定义为包括与代码空间相关的任何文件，例如克隆的存储库、配置文件和扩展等。 此存储在代码空间关闭时计费。 代码空间的存储计费在您从 https://github.com/codespaces 手动删除它时结束。

## 支出限制的工作原理

在组织可以使用 {% data variables.product.prodname_codespaces %} 之前，帐单管理员需要设置支出限制。 更多信息请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)”。

## 在达到支出限制时导出更改

{% data reusables.codespaces.exporting-changes %}

## 检查当前使用情况和限制
如果需要检查当前使用情况或支出限制，请与组织的帐单管理员联系。 更多信息请参阅“[查看 {% data variables.product.prodname_github_codespaces %} 使用情况](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”。

## 代码空间可以自动删除

当您从组织或存储库中删除时，您的代码空间将自动删除。

## 删除未使用的代码空间

您可以手动在 https://github.com/codespaces 中以及从 {% data variables.product.prodname_vscode %} 中删除代码空间。 要减小代码空间的大小，可以使用终端或从 {% data variables.product.prodname_vscode %} 中手动删除文件。

## 延伸阅读

- "[Managing billing for {% data variables.product.prodname_github_codespaces %} in your organization](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)"
