---
title: 将企业迁移到 GitHub Actions
shortTitle: Migrate to Actions
intro: '了解如何规划从其他提供商迁移到企业的 {% data variables.product.prodname_actions %}。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: db41434eae8bd3cf9036510705ee996f365f3fa1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099064'
---
## 关于企业迁移到 {% data variables.product.prodname_actions %}

要将企业从现有系统迁移到 {% data variables.product.prodname_actions %}，您可以规划迁移、完成迁移和停用现有系统。

本指南介绍了迁移的具体注意事项。 有关向企业介绍 {% data variables.product.prodname_actions %} 的其他信息，请参阅“[向企业介绍 {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)”。

## 规划迁移

在开始将企业迁移到 {% data variables.product.prodname_actions %} 之前，应确定将迁移哪些工作流程以及这些迁移将如何影响您的团队，然后规划如何以及何时完成迁移。

### 利用迁移专家

{% data variables.product.company_short %} 可以帮助您进行迁移，并且您也可以购买 {% data variables.product.prodname_professional_services %}。 更多信息请联系您的专属代表或 {% data variables.contact.contact_enterprise_sales %}。

### 确定和清点迁移目标

在迁移到 {% data variables.product.prodname_actions %} 之前，您需要全面了解企业在现有系统中使用的工作流程。

首先，创建企业内现有构建和发布工作流的清单，收集有关哪些工作流程正被使用但需要迁移以及哪些工作流程留在后面迁移的信息。

接下来，了解当前提供商与 {% data variables.product.prodname_actions %} 之间的区别。 这将帮助您评估迁移每个工作流程时遇到的任何困难，以及您的企业在哪些方面可能会遇到功能差异。 有关详细信息，请参阅“[迁移到 {% data variables.product.prodname_actions %}](/actions/migrating-to-github-actions)”。

使用此信息，您将能够确定哪些工作流程要迁移到 {% data variables.product.prodname_actions %}。

### 确定迁移对团队的影响

当您更改企业中使用的工具时，会影响团队的工作方式。 您需要考虑将工作流从现有系统迁移到 {% data variables.product.prodname_actions %} 将如何影响开发人员的日常工作。

确定将受迁移影响的任何流程、集成和第三方工具，并为需要进行的任何更新制定计划。

请考虑迁移可能会如何影响您的合规性问题。 例如，您现有的凭据扫描和安全分析工具是与 {% data variables.product.prodname_actions %} 一起使用，还是需要使用新工具？

识别现有系统中的网关和检查，并验证是否可以使用 {% data variables.product.prodname_actions %} 实施它们。

### 识别和验证迁移工具

自动迁移工具可以将企业的工作流程从现有系统的语法转换为 {% data variables.product.prodname_actions %} 所需的语法。 确定第三方工具或者联系您的专业代表或 {% data variables.contact.contact_enterprise_sales %}，询问 {% data variables.product.company_short %} 可以提供的工具。

确定用于自动执行迁移的工具后，请通过在某些测试工作流程上运行该工具并验证结果是否符合预期来验证该工具。

自动化工具应该能够迁移大部分工作流程，但您可能需要手动重写至少一小部分。 估计您需要完成的手动工作量。

### 确定迁移方法

确定最适合您的企业的迁移方法。 较小的团队可以使用“淘汰和替换”方法一次迁移所有工作流程。 对于大型企业，迭代方法可能更现实。 您可以选择让中央机构管理整个迁移过程，也可以要求各个团队通过迁移自己的工作流程进行自助服务。

我们建议采用将主动管理与自助服务相结合的迭代方法。 从一小群早期采用者开始，他们可以充当您的内部拥护者。 确定一些足够全面的工作流程，以代表您的业务广度。 与早期采用者合作，将这些工作流程迁移到 {% data variables.product.prodname_actions %}，根据需要进行迭代。 这将让其他团队相信他们的工作流程也可以迁移。

然后，使 {% data variables.product.prodname_actions %} 可供您的大型组织使用。 提供资源以帮助这些团队将自己的工作流程迁移到 {% data variables.product.prodname_actions %}，并在现有系统将要停用时通知团队。 

最后，通知仍在使用旧系统的任何团队，以便在特定时间范围内完成迁移。 您可以指出其他团队的成功案例，以向他们保证迁移是可能的，也是可取的。

### 定义迁移计划

确定迁移方法后，请制定一个计划，说明每个团队何时将其工作流程迁移到 {% data variables.product.prodname_actions %}。

首先，确定您希望迁移完成的日期。 例如，您可以计划在与当前提供商的合同结束时完成迁移。

然后，与您的团队合作，创建一个符合最后期限又不会牺牲团队目标的时间表。 查看业务的节奏以及您要求迁移的每个团队的工作负载。 与每个团队协调，了解他们的交付时间表，并制定一个计划，允许团队在不影响其交付能力的时间迁移其工作流程。

## 迁移到 {% data variables.product.prodname_actions %}

当您准备好开始迁移时，请使用上面计划的自动化工具和手动重写将现有工作流程转换为 {% data variables.product.prodname_actions %}。

您可能还希望维护现有系统中的旧构件，也许是通过编写脚本化进程来存档构件。

## 停用现有系统

迁移完成后，可以考虑停用现有系统。

您可能希望在一段时间内并行运行这两个系统，同时验证 {% data variables.product.prodname_actions %} 配置是否稳定，而不会降低开发人员的体验。

最终，停用并关闭旧系统，并确保企业内没有人可以重新打开旧系统。
