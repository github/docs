---
title: 为设备配置依赖项评审
shortTitle: Configuring dependency review
intro: '若要帮助用户在评审拉取请求时了解依赖项更改，可以为 {% data variables.location.product_location %} 启用、配置和禁用依赖项评审。'
product: '{% data reusables.gated-features.dependency-review %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: dependency-review-action-ghes
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Dependency review
  - Security
ms.openlocfilehash: 613f2f2bd69a90027533ff063ea0f0a44bc1f5d2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107755'
---
## 关于依赖项评审

{% data reusables.dependency-review.feature-overview %}  

[依赖项评审操作](https://github.com/actions/dependency-review-action)提供了一些附加功能，例如许可证检查、拉取请求阻止和 CI/CD 集成。

## 检查您的许可是否包含 {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## 依赖项评审的先决条件

- {% data variables.product.prodname_GH_advanced_security %} 的许可证{% ifversion ghes %}（请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”）。{% endif %}

- 为实例启用了依赖项关系图。 站点管理员可以通过管理控制台或管理 shell 启用依赖项关系图（请参阅“[为企业启用依赖项关系图](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)”）。
  
- 启用了 {% data variables.product.prodname_github_connect %}，以从 {% data variables.product.prodname_advisory_database %} 下载和同步漏洞。 这通常在设置 {% data variables.product.prodname_dependabot %} 的过程中进行配置（请参阅“[为企业启用 Dependabot](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”）。

## 启用和禁用依赖项评审

若要启用或禁用依赖项评审，需要启用或禁用实例的依赖项关系图。

有关详细信息，请参阅“[为企业启用依赖项关系图](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)”。

## 使用 {% data variables.product.prodname_actions %} 运行依赖项评审

{% data reusables.dependency-review.dependency-review-action-beta-note %}

依赖项评审操作包含在 {% data variables.product.prodname_ghe_server %} 安装中。 它适用于所有启用了 {% data variables.product.prodname_GH_advanced_security %} 和依赖项关系图的存储库。

{% data reusables.dependency-review.dependency-review-action-overview %}  

用户使用 {% data variables.product.prodname_actions %} 工作流运行依赖项评审操作。 如果尚没有为 {% data variables.product.prodname_actions %} 设置运行器，则必须执行此操作才能使用户可运行工作流。 您可以在仓库、组织或企业帐户级别预配自托管运行器。 有关信息，请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”和“[添加自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)。”

