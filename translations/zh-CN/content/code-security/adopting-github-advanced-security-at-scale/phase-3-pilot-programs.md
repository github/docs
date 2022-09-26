---
title: 第 3 阶段：试点计划
intro: 开始针对一些非常重要的项目和团队试点初步推出，你可能会从中获益。 这将使公司内的初始组能够熟悉 GHAS，了解如何启用和配置 GHAS，并基于 GHAS 打好坚实的基础，然后再推出到公司的其他团队。
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Pilot programs
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3df893158c402b9180260ddd1c82c96f62b84717
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147145334'
---
{% note %}

本文是大规模采用 {% data variables.product.prodname_GH_advanced_security %} 系列的一部分。 有关本系列的上一篇文章，请参阅“[第 2 阶段：准备大规模启用](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)”。

{% endnote %}

## 关于试点计划

建议确定一些非常重要的项目或团队，以用于 GHAS 的试点推广。 这将使公司内的初始组能够熟悉 GHAS，并为 GHAS 打好坚实的基础，然后再推出到公司的其他团队。

本阶段的这些步骤将帮助你在你的企业中启用 GHAS、开始使用其功能并查看结果。 如果你使用的是 {% data variables.product.prodname_professional_services %}，他们可以根据需要通过入职会议、GHAS 研讨会和故障排除在此过程中提供额外帮助。

在开始试点项目之前，建议为团队安排一些会议，例如初始会议、中期审查和试点完成后的总结会议。 这些会议将帮助你根据需要进行调整，并确保团队做好准备并获得支持，以成功完成试点。

{% ifversion ghes %}

如果尚未为 {% data variables.product.prodname_ghe_server %} 实例启用 GHAS，请参阅“[为企业启用 GitHub 高级安全功能](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)”。

{% endif %}

你需要通过为每个存储库或参与该试点的任何组织中的所有存储库启用 GHAS 功能，来为每个试点项目启用 GHAS。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”或“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”

## 试点 {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

若要在 {% data variables.product.prodname_ghe_server %} 实例上启用 {% data variables.product.prodname_code_scanning %}，请参阅“[为设备配置代码扫描](/admin/advanced-security/configuring-code-scanning-for-your-appliance)”。

{% elsif ghae %}

要使用 {% data variables.product.prodname_actions %} 启用 {% data variables.product.prodname_code_scanning %}，必须使运行器可用于在 {% data variables.product.prodname_ghe_managed %} 中运行工作流，请参阅“[开始使用 {% data variables.product.prodname_ghe_managed %} 的 {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)”。

{% endif %}

可以创建 {% data variables.product.prodname_actions %} 工作流来运行 [CodeQL 操作](https://github.com/github/codeql-action/)，以对存储库运行代码扫描。 {% ifversion ghec %}{% data variables.product.prodname_code_scanning_capc %} 默认使用 [GitHub 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners)，但如果你打算使用自己的硬件规格托管自己的运行器，则可以自定义此设置。 有关详细信息，请参阅“[关于子托管运行器](/actions/hosting-your-own-runners)”。{% endif %}

有关 {% data variables.product.prodname_actions %} 的详细信息，请参阅：
  - [了解 GitHub Actions](/actions/learn-github-actions)
  - [了解 GitHub Actions](/actions/learn-github-actions/understanding-github-actions)
  - [触发工作流的事件](/actions/learn-github-actions/events-that-trigger-workflows)
  - [筛选器模式速查表](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

建议在试点计划中逐个存储库启用 {% data variables.product.prodname_code_scanning %}。 有关详细信息，请参阅“[为存储库设置代码扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)”。

如果希望对许多存储库启用代码扫描，可能需要为该过程编写脚本。

有关打开拉取请求以将 {% data variables.product.prodname_actions %} 工作流添加到多个存储库的脚本示例，请参阅 [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) 存储库。有关使用 PowerShell 的示例，或者对于没有 PowerShell 但希望改用 NodeJS 的团队，请参阅 [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement)。

运行初始代码扫描时，你可能会发现未找到任何结果或返回的结果数量异常。 建议调整在将来扫描中标记的内容。 有关详细信息，请参阅“[配置代码扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)”。

如果你的公司想要将其他第三方代码分析工具用于 GitHub 代码扫描，可使用操作在 GitHub 中运行这些工具。 你也可以将由第三方工具生成的结果作为 SARIF 文件上传到代码扫描。 有关详细信息，请参阅“[与代码扫描集成](/code-security/code-scanning/integrating-with-code-scanning)”。

## 试点 {% data variables.product.prodname_secret_scanning %}

GitHub 扫描存储库以查找已知类型的机密，以防止欺诈性地使用意外提交的机密。

{% ifversion ghes %}

若要为 {% data variables.product.prodname_ghe_server %} 实例启用机密扫描，请参阅“[为设备配置机密扫描](/admin/advanced-security/configuring-secret-scanning-for-your-appliance)”。

{% endif %}

你需要通过为每个存储库或参与该项目的任何组织中的所有存储库启用机密扫描，来为每个试点项目启用该功能。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”或“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

如果整理了所有特定于贵公司的自定义模式，尤其是与试点 {% data variables.product.prodname_secret_scanning %} 的项目相关的任意自定义模式，你可以配置这些模式。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”。

若要了解如何查看和关闭已签入存储库的机密警报，请参阅“[管理来自机密扫描的警报](/code-security/secret-scanning/managing-alerts-from-secret-scanning)”。

{% note %}

有关本系列的下一篇文章，请参阅“[第 4 阶段：创建内部文档](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)”。

{% endnote %}
