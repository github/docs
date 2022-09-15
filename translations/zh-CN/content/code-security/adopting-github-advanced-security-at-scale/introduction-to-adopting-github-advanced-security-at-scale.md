---
title: 大规模采用 GitHub 高级安全性简介
intro: '可以使用行业和 GitHub 最佳做法在贵公司大规模采用 {% data variables.product.prodname_GH_advanced_security %}。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: Introduction
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/overview-of-github-advanced-security-deployment
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 2
ms.openlocfilehash: 0993205a2f51262c0766062995caa1c2e2714742
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147145342'
---
## 关于以下文章

{% data variables.product.prodname_GH_advanced_security %} (GHAS) 帮助团队使用集成工具（例如使用 CodeQL 的机密扫描和代码扫描）更快地生成更安全的代码。 要了解通过 {% data variables.product.prodname_GH_advanced_security %} 提供的安全功能，请参阅“[关于 GitHub 高级安全性](/get-started/learning-about-github/about-github-advanced-security)”。

GHAS 是一套工具，需要整个企业的开发人员积极参与。 若要实现最佳投资回报，你必须了解如何使用、应用和维护 GHAS。


我们已创建针对通过行业和 GitHub 最佳做法开发的 GHAS 推出的分阶段方法。 根据我们帮助客户成功部署 {% data variables.product.prodname_GH_advanced_security %} 的经验，我们预计大多数客户都希望遵循这些阶段，但你可能需要修改此方法以满足贵公司的需求。 

在大型组织中启用 GHAS 可以分为六个核心阶段。

1. [**与推出战略和目标保持一致**](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)：思考成功预期，并根据贵公司的 GHAS 实现方式进行调整。 该阶段可能只需要数天或一周，但可为其余推出流程奠定坚实基础。
  
2. [**准备大规模启用**](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)：让开发人员做好准备，收集有关存储库的数据，并确保可以进行下一阶段。
  
3. [**试点计划**](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs)：根据需要对一些影响很大的项目和团队进行试点，执行初步推出。 这将使公司内的初始组能够熟悉 GHAS，然后再推出到公司的其他团队。 
  
4. [**创建内部文档**](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)：为 GHAS 的使用者创建和传达内部文档。 如果没有向开发人员、安全工程师和其他将使用 GHAS 的人员提供适当的文档，则对推出没有任何意义。
  
5. [**推出和缩放 {% data variables.product.prodname_code_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning)：利用可用的 API，使用之前收集的存储库数据，按团队和语言在整个企业中自动推出 {% data variables.product.prodname_code_scanning %}。
  
6. [**推出和缩放 {% data variables.product.prodname_secret_scanning %}**](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning)：推出 {% data variables.product.prodname_secret_scanning %}，它所需的配置更少，因此比 {% data variables.product.prodname_code_scanning %} 更易于采用。 尽管如此，制定处理新旧结果的策略仍然至关重要。

## {% data variables.contact.github_support %} 和 {% data variables.product.prodname_professional_services_team %}

如果在实现过程中遇到任何问题或有任何疑问，可以搜索解决方案文档或联系 {% data variables.contact.github_support %}。 有关详细信息，请参阅“[关于 GitHub 支持](/support/learning-about-github-support/about-github-support)”。

如果希望在整个推出过程中接受指导，{% data variables.product.prodname_professional_services %} 可以与你合作，以成功推出和实现 {% data variables.product.prodname_GH_advanced_security %}。 我们提供了多种指导和支持选项。 我们还提供了培训和集训营，以帮助贵公司优化 {% data variables.product.prodname_GH_advanced_security %} 的价值。

有关所有可用的“专业服务”选项的详细信息，请与你的销售代表联系。 更多信息请联系 {% data variables.contact.contact_enterprise_sales %}。

{% note %}

有关本系列的第一篇文章，请参阅“[第 1 阶段：与推出战略和目标保持一致](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)”。

{% endnote %}
