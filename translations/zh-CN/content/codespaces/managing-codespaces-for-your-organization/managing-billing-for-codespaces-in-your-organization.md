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

- **计算分钟数：**计算使用率是按所有 {% data variables.product.prodname_codespaces %} 实例在活动期间使用的实际分钟数计算的。 这些总计每天报告给计费服务，并按月计费。 You can set a spending limit for {% data variables.product.prodname_codespaces %} usage in your organization. For more information, see "[Managing spending limits for Codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)."

- **Storage usage:**  For {% data variables.product.prodname_codespaces %} billing purposes, this includes all storage used by all codespaces in your account. This includes all used by the codespaces, such as cloned repositories, configuration files, and extensions, among others. 这些总计每天报告给计费服务，并按月计费。 到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。 To check how many compute minutes and storage GB have been used by {% data variables.product.prodname_codespaces %}, see "[Viewing your Codespaces usage"](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)."

## Disabling or limiting {% data variables.product.prodname_codespaces %}

You can disable the use of {% data variables.product.prodname_codespaces %} in your organization or repository. For more information, see "[Managing repository access for your organization's codespaces](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)."

You can also limit the individual users who can use {% data variables.product.prodname_codespaces %}. For more information, see "[Managing user permissions for your organization](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)."

You can limit the choice of machine types that are available for repositories owned by your organization. This allows you to prevent people using overly resourced machines for their codespaces. For more information, see "[Restricting access to machine types](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

## Deleting unused codespaces

Your users can delete their codespaces in https://github.com/codespaces and from within Visual Studio Code. To reduce the size of a codespace, users can manually delete files using the terminal or from within Visual Studio Code.

{% note %}

**注意：**只有创建代码空间的人才能将其删除。 目前，组织所有者无法删除其组织内创建的代码空间。

{% endnote %}
