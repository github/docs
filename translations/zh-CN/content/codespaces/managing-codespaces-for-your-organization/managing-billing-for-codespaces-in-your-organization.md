---
title: 管理组织中代码空间的计费
shortTitle: 管理计费
intro: '您可以检查 {% data variables.product.prodname_codespaces %} 使用情况并设置使用限制。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
---

## 概览

要了解 {% data variables.product.prodname_codespaces %} 的定价，请参阅“[{% data variables.product.prodname_codespaces %} 定价](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)”。

{% data reusables.codespaces.codespaces-billing %}

- 作为组织所有者或帐单管理员，您可以管理组织的 {% data variables.product.prodname_codespaces %} 帐单：[“关于 Codespaces 的计费”](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- 对于用户，有一个指南解释了计费的工作原理：[“了解 Codespaces 的计费”](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## 使用限制

您可以为组织或存储库中的代码空间设置使用限制。 此限制适用于 {% data variables.product.prodname_codespaces %} 的计算和存储使用情况：

- **计算分钟数：**计算使用率是按所有 {% data variables.product.prodname_codespaces %} 实例在活动期间使用的实际分钟数计算的。 这些总计每天报告给计费服务，并按月计费。 您可以为组织中 {% data variables.product.prodname_codespaces %} 使用设置支出限制。 更多信息请参阅“[管理代码空间的支出限额](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。

- **存储使用情况：**  出于 {% data variables.product.prodname_codespaces %} 计费目的，这包括您帐户中所有代码空间使用的所有存储空间。 这包括代码空间使用的所有内容，例如克隆的存储库、配置文件和扩展等。 这些总计每天报告给计费服务，并按月计费。 到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。 要检查 {% data variables.product.prodname_codespaces %} 已使用多少计算分钟数和存储 GB，请参阅“[查看代码空间使用情况](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)”。

## 禁用或限制 {% data variables.product.prodname_codespaces %}

您可以在组织或存储库中禁用 {% data variables.product.prodname_codespaces %}。 更多信息请参阅“[管理组织的代码空间的存储库访问](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)”。

您还可以限制可以使用 {% data variables.product.prodname_codespaces %} 的单个用户。 更多信息请参阅“[管理组织的用户权限](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)”。

您可以限制可用于组织拥有的存储库的计算机类型选择。 这使您可以防止人们使用资源过多的计算机作为其代码空间。 更多信息请参阅“[限制对机器类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”。

## 删除未使用的代码空间

您的用户可以在 https://github.com/codespaces 和 Visual Studio Code 中删除其代码空间。 要减小代码空间的大小，用户可以使用终端或从 Visual Studio Code 中手动删除文件。

{% note %}

**注意：**只有创建代码空间的人才能将其删除。 目前，组织所有者无法删除其组织内创建的代码空间。

{% endnote %}
