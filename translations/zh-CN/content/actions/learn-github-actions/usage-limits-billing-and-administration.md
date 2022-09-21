---
title: 使用限制、计费和管理
intro: '{% data variables.product.prodname_actions %} 工作流程有使用限制。 使用费适用于超出仓库免费分钟数和存储空间量的仓库。'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
ms.openlocfilehash: f457af5e458f54c699578a8a288dd1d64b674c36
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681003'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 {% data variables.product.prodname_actions %} 的计费

{% data reusables.repositories.about-github-actions %} 有关详细信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}."{% elsif ghes or ghec %}”和“[关于适用于企业的 {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)”。{% endif %}

{% ifversion fpt or ghec %} {% data reusables.actions.actions-billing %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。
{% else %} 对于使用自托管运行器的 {% data variables.product.prodname_ghe_server %} 实例，GitHub Actions 的使用是免费的。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)。
{% endif %}


{% ifversion fpt or ghec %}

## 可用性

{% data variables.product.prodname_actions %} 适用于所有 {% data variables.product.prodname_dotcom %} 产品，但 {% data variables.product.prodname_actions %} 不适用于使用旧版每存储库计划的帐户拥有的私有存储库。 {% data reusables.gated-features.more-info %}

{% endif %}

## 使用限制

{% ifversion fpt or ghec %} 使用 {% data variables.product.prodname_dotcom %} 托管的运行器时，{% data variables.product.prodname_actions %} 的使用存在一些限制。 这些限制可能会有变动。

{% note %}

注意：对于自托管的运行器，会应用不同的使用限制。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)。

{% endnote %}

- 作业执行时间 - 工作流中每个作业的最长执行时间为 6 小时。 如果作业达到此限制，该作业将会终止而无法完成。
{% data reusables.actions.usage-workflow-run-time %} {% data reusables.actions.usage-api-requests %}
- 并发作业 - 帐户中可以运行的并发作业数量，具体视 GitHub 计划而定，如下表所示。 如果超出，任何额外的作业都会排队。

  | GitHub 计划 | 同时运行的作业总数 | MacOS 作业同时运行的最大数量 |
  |---|---|---|
  | 免费 | 20 | 5 |
  | Pro | 40 | 5 |
  | 组 | 60 | 5 |
  | Enterprise | 180 | 50 |

  {% note %}

  注意：如果需要，使用企业计划的客户可请求更高的并发作业限制。 有关详细信息，请联系 {% data variables.contact.contact_ent_support %} 或销售代表。

  {% endnote %}
- 作业矩阵 - {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

{% else %} 使用限制适用于自托管运行器。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)。
{% endif %}

{% ifversion fpt or ghec %}
## 使用策略

除了使用限制外，还必须确保在 [GitHub 服务条款](/free-pro-team@latest/github/site-policy/github-terms-of-service/)规定的范围内使用 {% data variables.product.prodname_actions %}。 有关 {% data variables.product.prodname_actions %} 特定条款的详细信息，请参阅 [GitHub 附加产品条款](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage)。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## 可重复使用的工作流程的计费

{% data reusables.actions.reusable-workflows-ghes-beta %}

如果重复使用工作流，则计费始终与调用方工作流程相关联。 始终仅使用调用方的上下文来评估 {% data variables.product.prodname_dotcom %} 托管的运行器的分配。 调用方不能使用被调用存储库中 {% data variables.product.prodname_dotcom %} 托管的运行器。 

有关详细信息，请参阅“[重用工作流](/actions/learn-github-actions/reusing-workflows)”。
{% endif %}

## 项目和日志保留策略

您可以为仓库、组织或企业帐户配置构件和日志保留期。

{% data reusables.actions.about-artifact-log-retention %}

有关详细信息，请参阅：

- [管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)
- [为组织中的 {% data variables.product.prodname_actions %} 工件和日志配置保留期](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)
- [在企业中强制实施 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)

## 禁用或限制仓库或组织的 {% data variables.product.prodname_actions %}

{% data reusables.actions.disabling-github-actions %}

有关详细信息，请参阅：
- [管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)
- [为组织禁用或限制 {% data variables.product.prodname_actions %}](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)
- [在企业中强制实施 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)

## 禁用和启用工作流程

您可以在 {% data variables.product.prodname_dotcom %} 上启用和禁用仓库中的个别工作流程。

{% data reusables.actions.scheduled-workflows-disabled %}

有关详细信息，请参阅“[禁用和启用工作流](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)”。
