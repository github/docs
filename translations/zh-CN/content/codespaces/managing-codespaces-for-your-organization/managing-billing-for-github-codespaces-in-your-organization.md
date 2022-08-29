---
title: 管理组织中 GitHub Codespaces 的计费
shortTitle: 管理计费
intro: '您可以检查 {% data variables.product.prodname_github_codespaces %} 使用情况并设置使用限制。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
---

## 概览

要了解 {% data variables.product.prodname_github_codespaces %} 的定价，请参阅“[{% data variables.product.prodname_codespaces %} 定价](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”。

{% data reusables.codespaces.codespaces-billing %}

- 作为组织所有者或帐单管理员，您可以管理组织的 {% data variables.product.prodname_codespaces %} 帐单：[“关于 Codespaces 的计费”](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- 对于用户，有一个指南解释了计费的工作原理：[“了解 Codespaces 的计费”](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## 使用限制

您可以为组织或存储库中的代码空间设置使用限制。 此限制适用于 {% data variables.product.prodname_github_codespaces %} 的计算和存储使用情况：

- **计算分钟数：**计算使用率是按所有 {% data variables.product.prodname_codespaces %} 实例在活动期间使用的实际分钟数计算的。 这些总计每天报告给计费服务，并按月计费。 您可以为组织中 {% data variables.product.prodname_codespaces %} 使用设置支出限制。 更多信息请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)”。

- **存储使用情况：**  出于 {% data variables.product.prodname_codespaces %} 计费目的，这包括您帐户中所有代码空间使用的所有存储空间。 这包括代码空间使用的所有内容，例如克隆的存储库、配置文件和扩展等。 这些总计每天报告给计费服务，并按月计费。 到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。 要检查 {% data variables.product.prodname_codespaces %} 已使用多少计算分钟数和存储 GB，请参阅“[查看 {% data variables.product.prodname_github_codespaces %} 使用情况](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”。

## 禁用或限制 {% data variables.product.prodname_codespaces %}

You can disable all use of {% data variables.product.prodname_github_codespaces %} that would be billed to your organization. Alternatively, you can specify which organization members or collaborators can use {% data variables.product.prodname_codespaces %} at your organization's expense. 更多信息请参阅“[为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”。

{% data reusables.codespaces.codespaces-disabling-org-billing %}

You can configure which repositories can be accessed from codespaces created for a particular repository. 更多信息请参阅“[管理代码空间中对其他存储库的访问](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”。

You can limit the choice of types of machine that are available for codespaces created from repositories owned by your organization. This allows you to prevent people using overly resourced machines for their codespaces, and incurring unnecessary charges. 更多信息请参阅“[限制对机器类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”。

You can also restrict how long a codespace can remain unused before it is automatically deleted. This can help to reduce storage costs for {% data variables.product.prodname_codespaces %}. 更多信息请参阅“[限制代码空间的保留期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”。

## 删除未使用的代码空间

您的用户可以在 https://github.com/codespaces 中以及从 {% data variables.product.prodname_vscode %} 中删除代码空间。 要减小代码空间的大小，用户可以使用终端或从 {% data variables.product.prodname_vscode_shortname %} 中手动删除文件。

{% note %}

**Note:** Codespaces are automatically deleted after they have been stopped and have remained inactive for a defined number of days. 更多信息请参阅“[限制代码空间的保留期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”。 A codespace can only be manually deleted by the person who created the codespace.

{% endnote %}
