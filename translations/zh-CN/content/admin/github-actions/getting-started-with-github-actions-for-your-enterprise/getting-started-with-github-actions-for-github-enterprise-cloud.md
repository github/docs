---
title: GitHub Actions for GitHub Enterprise Cloud 使用入门
shortTitle: Get started
intro: '了解如何在 {% data variables.product.prodname_ghe_cloud %} 上配置 {% data variables.product.prodname_actions %}。'
permissions: 'Enterprise owners can configure {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 088fc1fcce3b44c6db350f744ad13668d04a4bb8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145100002'
---
## 关于 {% data variables.product.prodname_ghe_cloud %} 上的 {% data variables.product.prodname_actions %}

默认情况下，为企业启用 {% data variables.product.prodname_actions %}。 要开始在企业内使用 {% data variables.product.prodname_actions %} ，您可以管理控制企业成员如何使用 {% data variables.product.prodname_actions %} 的策略，以及选择添加自托管运行器来运行工作流程。

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## 管理 {% data variables.product.prodname_actions %} 的策略

您可以使用策略来控制企业成员如何使用 {% data variables.product.prodname_actions %}。 例如，您可以限制允许的操作，并配置项目和日志保留。 有关详细信息，请参阅“[为企业强制实施 GitHub Actions 策略](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)”。

## 添加运行器

要运行 {% data variables.product.prodname_actions %} 工作流程，您需要使用运行器。 {% data reusables.actions.about-runners %} 如果您使用 {% data variables.product.company_short %} 托管的运行器，则在用尽 {% data variables.product.product_name %} 中包含的分钟数后，将根据使用量向您收费，而自托管运行器是免费的。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。

有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)。

如果选择自托管运行器，则可以在企业、组织或存储库级别添加运行器。 有关详细信息，请参阅“[关于自托管运行程序](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

{% data reusables.actions.general-security-hardening %}
