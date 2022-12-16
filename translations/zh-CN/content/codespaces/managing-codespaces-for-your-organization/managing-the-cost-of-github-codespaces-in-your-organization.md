---
title: 管理组织中的 GitHub Codespaces 成本
shortTitle: Manage Codespaces costs
intro: '你可以检查 {% data variables.product.prodname_github_codespaces %} 使用情况并设置使用限制。'
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
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization
ms.openlocfilehash: f11c6e22fa8a233fd4429b91390d25471ad17e6d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158707'
---
## 概述

组织将根据其 {% data variables.product.prodname_github_codespaces %} 的计算和存储使用情况计费。 本文介绍组织所有者管理这些成本的方式。

要了解 {% data variables.product.prodname_github_codespaces %} 定价，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)”。

## 支出限制

可以为组织的 {% data variables.product.prodname_github_codespaces %} 设置支出限制。 此限制适用于 {% data variables.product.prodname_github_codespaces %} 的总计算和存储成本。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)”。
 
- 计算使用情况： 这是所有 {% data variables.product.prodname_github_codespaces %} 实例（“codespaces”）在计费月份处于活动状态的总时间。 

- 存储使用情况：出于 {% data variables.product.prodname_github_codespaces %} 计费目的，这包括你帐户中所有 codespace 和预生成使用的所有文件。 这包括克隆的存储库、配置文件和扩展等资源。 

可以检查当前计费月份的 {% data variables.product.prodname_github_codespaces %} 的计算和存储使用情况。 有关信息，请参阅“[查看 {% data variables.product.prodname_github_codespaces %} 使用情况](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”。

{% note %}

注意：{% data variables.product.prodname_github_codespaces %} 预生成是使用 {% data variables.product.prodname_actions %} 创建和更新的。 这可能会给 {% data variables.product.prodname_actions %} 带来可计费成本。 可以为 {% data variables.product.prodname_actions %} 设置支出限额。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)”和“[管理 {% data variables.product.prodname_actions %} 的支出限制](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)”。 生成的预生成存储的费率与 codespace 相同，并包含在 {% data variables.product.prodname_github_codespaces %} 支出限制中。

{% endnote %}

## 禁用或限制 {% data variables.product.prodname_codespaces %}

你可以禁用会对组织进行计费的所有 {% data variables.product.prodname_github_codespaces %} 使用。 或者，你可以指定哪些组织成员或协作者可以使用 {% data variables.product.prodname_codespaces %}（费用由组织承担）。 有关详细信息，请参阅“[为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”。

{% data reusables.codespaces.codespaces-disabling-org-billing %}

可以配置可从为特定存储库创建的 codespace 访问哪些存储库。 有关详细信息，请参阅“[管理对 codespace 内其他存储库的访问权限](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)”。

可以限制可用于从组织拥有的存储库创建的 codespace 的计算机类型选择。 这使你可以防止人们使用资源过多的计算机作为其 codespace，产生不必要的费用。 有关详细信息，请参阅“[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”。

可以设置最大空闲超时约束，以限制人们为可对你的组织计费的 codespace 设置的最大超时。 通过在较短的超时期后停止活动 codespace，可以减少以空闲状态运行的 codespace 生成的计算使用费用。 有关详细信息，请参阅“[限制空闲超时期限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)”。

还可以限制停止的 codespace 在自动删除之前可以保持未使用状态的时间长度。 这可帮助降低 {% data variables.product.prodname_codespaces %} 的存储成本。 有关详细信息，请参阅“[限制 codespace 的保持期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”。

为存储库设置预生成的存储库所有者可以通过将预生成配置为仅在选定区域中创建来降低预生成存储成本。 有关详细信息，请参阅“[配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”。

## 删除未使用的代码空间

你的用户可以在 https://github.com/codespaces 中以及从 {% data variables.product.prodname_vscode %} 中删除他们自己的 codespace。 要减小 codespace 的大小，用户可以使用终端或从 {% data variables.product.prodname_vscode_shortname %} 中手动删除文件。 

作为组织所有者，可以删除组织中的任何 codespace。 有关详细信息，请参阅“[删除 codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)”。

{% note %}

注意：Codespace 在停止后会自动删除，并在用户自定义天数内保持非活动状态。 有关详细信息，请参阅“[配置 codespace 的自动删除](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)”。 作为组织所有者，你可以为组织拥有的 codespace 设置最大保持期。 这将替代用户的个人保持期设置。 有关详细信息，请参阅“[限制 codespace 的保持期](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)”。

{% endnote %}

## 延伸阅读

- “[列出组织中的 codespace](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)”
