---
title: 第 1 阶段：与推出策略和目标保持一致
intro: '在启用 {% data variables.product.prodname_code_scanning %} 和 {% data variables.product.prodname_secret_scanning %} 之前，计划应如何在企业中推出 GHAS。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 1. Align on strategy
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b2677cf11c300ad657f9bd6b8862fb1f292c2fb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108718'
---
{% note %}

本文是大规模采用 {% data variables.product.prodname_GH_advanced_security %} 系列的一部分。 有关本系列的介绍，请参阅“[大规模采用 {% data variables.product.prodname_GH_advanced_security %} 简介](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)”。

{% endnote %}

### 为公司的推出设定明确的目标

要为公司的推出方向奠定基础，请在公司内部概述 GHAS 的目标，并将这些目标传达给团队。 目标可以简单也可以复杂，前提是团队与之保持一致。 如果在实现目标方面需要帮助，{% data variables.product.prodname_professional_services %} 可根据公司经验和其他客户的经验提供建议。

以下是一些关于推出 GHAS 的目标的高级示例：

  - **减少漏洞数量**：这可能是一般情况，也可能是因为你的公司最近受到了重大漏洞的影响，你认为该漏洞本可以通过 GHAS 等工具加以阻止。
  - **识别高风险存储库**：一些公司可能只想针对包含最大风险的存储库，从而通过修复漏洞来降低风险。
  -  **提高修正率**：为防止积累安全债务，可以推动开发人员采用调查结果并确保及时修复这些漏洞。  
  - **满足合规性要求**：例如，许多医疗保健公司都使用 GHAS 来防止 PHI（个人健康信息）泄露。
  - **防止机密泄露**：许多公司都希望防止泄露关键信息，例如软件密钥或财务数据。

### 与安全组和开发组共同引导推出

让安全组和开发组同时参与 GHAS 推出的公司往往比只让安全组参与（试点结束后才让开发团队参与）的公司更成功。 

GHAS 通过无缝集成到开发人员工作流中来采用以开发人员为中心的软件安全方法。 在此过程的早期来自开发组的关键表示形式会降低推出的风险，并且促进组织支持。

尽早让开发组参与进来（最好是从购买之日起），这有助于公司利用 GHAS 在开发过程的早期解决安全问题。 两个组共同参与时可在过程的早期达成一致，消除孤岛，建立和加强工作关系，并为推出承担更多责任。 


### 了解 GHAS

要为推出设定切合实际的期望，请确保所有利益干系人都了解以下有关 GHAS 运作原理的关键信息。

#### 1：GHAS 是一套需执行操作来保护代码的安全工具

GHAS 是一套工具，在配置、维护、在日常工作流中使用以及与其他工具结合使用时，价值会增加。 

#### 2：GHAS 需要进行开箱即用的调整

在存储库上设置 GHAS 后，需要配置 GHAS 以满足公司的需求。 代码扫描尤其需要进一步自定义，例如评估初始结果和针对后续扫描进行调整。 许多客户发现初始扫描返回的结果有限或不相关，直到根据应用程序的威胁模型调整了代码扫描。

#### 3. GHAS 工具在集成到应用程序安全程序中结合使用时最有效

当所有工具一起使用时，GHAS 最有效。 通过将 GHAS 与其他工具和活动（例如渗透测试和动态扫描）集成，可进一步提高应用程序安全程序的有效性。 建议始终使用多层保护。

#### 4. 一些公司使用自定义 {% data variables.product.prodname_codeql %} 查询来自定义和锁定扫描结果 

代码扫描由 {% data variables.product.prodname_codeql %}（世界上最强大的代码分析引擎）提供支持。 对于我们的许多客户来说，社区中提供的基本查询集和附加查询绰绰有余。 但其他公司可能需要使用自定义 {% data variables.product.prodname_codeql %} 查询来锁定不同的结果或减少误报。

如果贵公司对自定义 {% data variables.product.prodname_codeql %} 查询感兴趣，建议先完成 GHAS 的推出和实现。 贵公司准备就绪时，{% data variables.product.prodname_professional_services %} 可以帮助你了解自己的需求并确保贵公司需要使用自定义查询。  

#### 5：{% data variables.product.prodname_codeql %} 会扫描整个代码库，而不仅仅是在拉取请求中所做的更改

当从拉取请求运行代码扫描时，扫描将包括完整的代码库，而不仅仅是在拉取请求中所做的更改。 扫描整个代码库是确保更改已针对代码库中的所有交互进行了全面审查的重要步骤。

{% note %}

有关本系列的下一篇文章，请参阅“[第 2 阶段：准备大规模启用](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)”。

{% endnote %}
