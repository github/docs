---
title: 第 1 阶段：根据部署策略和目标保持一致
intro: '在启用 {% data variables.product.prodname_code_scanning %} 和 {% data variables.product.prodname_secret_scanning %}之前，请计划如何在整个企业中推广 GHAS。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 1. 与策略一致
miniTocMaxHeadingLevel: 3
---

{% note %}

本文是关于大规模采用 {% data variables.product.prodname_GH_advanced_security %} 系列文章的一部分。 有关本系列的介绍，请参阅“[大规模采用 {% data variables.product.prodname_GH_advanced_security %} 简介](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)”。

{% endnote %}

### 为公司的部署设定明确的目标

要为贵公司的部署方向奠定基础，请概述贵公司内部的 GHAS 目标，并将这些目标传达给您的团队。 你的目标可以是简单的，也可以是复杂的，只要您的团队保持一致。 如果您在实现目标方面需要帮助， {% data variables.product.prodname_professional_services %} 可以根据我们对贵公司和其他客户的经验提供建议。

以下是一些简要示例，说明部署 GHAS 的目标可能是什么样子：

  - **减少漏洞数量：** 这可能是一般目标，或者因为您的公司最近受到重大漏洞的影响，您认为可以通过 GHAS 等工具阻止这些漏洞。
  - **识别高风险存储库**：一些公司只想针对包含最多风险的存储库，从而通过修复漏洞来降低风险。
  -  **提高修复率**：为了防止安全债务的积累，您可能希望推动开发人员采用调查结果并确保及时修复这些漏洞。
  - **满足合规要求**：例如，许多医疗保健公司使用 GHAS 来防止 PHI（个人健康信息）的暴露。
  - **防止机密泄露**：许多公司希望防止关键信息泄露，例如软件密钥或财务数据。

### 与安全和开发组一起领导您的部署

让安全和开发团队参与其 GHAS 推出的公司往往比仅涉及其安全团队的公司更成功，等待在试点结束后包括开发团队。

GHAS 采用以开发人员为中心的软件安全方法，无缝集成到开发人员工作流程中。 在流程的早期让开发团队拥有关键代表可以降低推出的风险，并鼓励组织支持。

尽早让开发团队参与进来，最好从购买之时开始，有助于公司利用 GHAS 在开发过程的早期解决安全问题。 当两个小组一起工作时，他们在流程的早期就实现了一致，消除了数据孤岛，建立并加强了他们的工作关系，并对推出承担更多责任。


### 了解 GHAS

要为推广设定切合实际的期望，请确保所有利益相关者了解以下有关 GHAS 如何运作的关键事实。

#### 1. GHAS 是一套安全工具，需要采取措施来保护您的代码。

GHAS 是一套工具，在配置、维护、日常工作流程中使用以及与其他工具结合使用时，其价值会随之增加。

#### 2. GHAS 需要开箱即用的调整。

在您的仓库上设置 GHAS 后，您需要配置 GHAS 以满足您公司的需求。 代码扫描尤其需要进一步的定制，例如评估初始结果并为将来的扫描进行调整。 许多客户发现，在根据应用程序的威胁模型调整代码扫描之前，初始扫描返回的结果有限或不相关。

#### 3. GHAS 工具一起使用并集成到您的应用安全程序中时最有效

当所有工具一起使用时，GHAS 最有效。 通过将 GHAS 与其他工具和活动（如渗透测试和动态扫描）集成，可以进一步提高应用程序安全程序的有效性。 我们建议始终使用多层保护。

#### 4. 一些公司使用自定义 {% data variables.product.prodname_codeql %} 查询来自定义和定位扫描结果

代码扫描由 {% data variables.product.prodname_codeql %} 提供支持，是世界上最强大的代码分析引擎。 对于我们的许多客户来说，社区中提供的基本查询集和其他查询已经绰绰有余。 但是，其他公司可能需要自定义 {% data variables.product.prodname_codeql %} 查询，以针对不同的结果或减少误报。

如果您的公司对定制 {% data variables.product.prodname_codeql %} 查询感兴趣，我们建议您先完成 GHAS 的推出和实施。 然后，当您的公司准备就绪时，{% data variables.product.prodname_professional_services %} 可以帮助您浏览要求，并确保您的公司需要自定义查询。

#### 5. {% data variables.product.prodname_codeql %} 扫描整个代码库，而不仅仅是在拉取请求中所做的更改

当从拉取请求运行代码扫描时，扫描将包括完整的代码库，而不仅仅是在拉取请求中所做的更改。 扫描整个代码库是确保已针对代码库中的所有交互检查更改的重要步骤。

{% note %}

有关本系列的下一篇文章，请参阅“[阶段 2：准备大规模启用](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)”。

{% endnote %}
