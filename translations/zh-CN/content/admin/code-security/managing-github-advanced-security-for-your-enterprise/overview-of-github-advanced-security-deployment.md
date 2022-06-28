---
title: GitHub Advanced Security 部署概述
intro: '通过查看和理解这些最佳实践、部署示例以及我们经过企业测试的分阶段方法，帮助您的公司成功准备采用 {% data variables.product.prodname_GH_advanced_security %} (GHAS)。'
product: '{% data variables.product.prodname_GH_advanced_security %} 是一组安全功能，旨在使企业代码更安全。 它可用于 {% data variables.product.prodname_ghe_server %} 3.0 或更高版本、 {% data variables.product.prodname_ghe_cloud %} 和开源存储库。 要了解有关 {% data variables.product.prodname_GH_advanced_security %} 中包含的功能的更多信息，请参阅“[关于GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)”。'
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
---

{% data variables.product.prodname_GH_advanced_security %} (GHAS) 可帮助团队使用集成工具（如 CodeQL，世界上最先进的语义代码分析引擎）更快地构建更安全的代码。 GHAS 是一套工具，需要整个企业的开发人员积极参与。 为了实现最佳的投资回报，您必须学习如何使用、应用和维护 GHAS，以真正保护您的代码。

为公司处理新软件的最大挑战之一可能是部署和实施过程，以及发生文化变革以获得部署成功所需的组织支持。

为帮助贵公司更好地了解和准备使用 GHAS 的这一过程，本概述旨在：
  - 概述 GHAS 部署对您的公司来说可能是什么样子。
  - 帮助您的公司为部署做好准备。
  - 分享关键最佳实践，以帮助提高公司部署的成功率。

要了解 {% data variables.product.prodname_GH_advanced_security %} 提供的安全功能，请参阅“[{% data variables.product.prodname_dotcom %} 安全功能](/code-security/getting-started/github-security-features)”。

## 推荐用于 GHAS 部署的分阶段方法

我们创建了一种分阶段的 GHAS 部署方法，该方法根据行业和 GitHub 最佳实践开发。 您可以利用此方法与 {% data variables.product.prodname_professional_services %} 合作或独立部署。

虽然建议采用分阶段方法，但可以根据公司的需求进行调整。 我们还建议创建并遵守部署和实施的时间表。 当您开始规划时，我们可以一起确定最适合您公司的理想方法和时间表。

![显示 GitHub 高级安全部署和部署的三个阶段的图表，包括阶段 0：规划和 启动、阶段 1：试点项目、阶段 2：早期采用者组织支持和部署，以及阶段 3：全面组织部署和变更管理](/assets/images/enterprise/security/advanced-security-phased-approach-diagram.png)


根据我们帮助客户成功部署 {% data variables.product.prodname_GH_advanced_security %} 的经验，我们预计大多数客户都希望遵循这些阶段。 根据贵公司的需要，您可能需要修改此方法并更改或删除某些阶段或步骤。

关于执行每个阶段的详细指南，请参阅“[在企业中部署 {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)”。 下一节将为您提供其中每个阶段的高级摘要。

### {% octicon "milestone" aria-label="The milestone icon" %} 第 0 阶段：规划和启动

在此阶段，总体目标是为部署进行规划和准备，确保您拥有适当的人员、流程和技术，并为部署做好准备。 您还应该考虑将使用哪些成功标准来衡量整个团队的 GHAS 采用和使用情况。

### {% octicon "milestone" aria-label="The milestone icon" %}  第 1 阶段：试点项目

要开始实施 GHAS，我们建议从几个影响力大的项目/团队开始，以便进行初始部署的试点。 这将允许您公司内的初始小组熟悉 GHAS，学习如何启用和配置 GHAS，并在部署到公司的其他部门之前在 GHAS 上建立坚实的基础。

### {% octicon "milestone" aria-label="The milestone icon" %}  第 2 阶段：组织支持和部署准备

第 2 阶段是对前几阶段的回顾，并为在公司其余部分进行更大规模的部署做准备。 在此阶段，组织支持是指公司决定在试点项目后继续推进，还是在公司再使用 GHAS 一段时间（这是最常见的）。 如果您的公司决定再使用 GHAS 一段时间，则第 2 阶段可以继续进入第 3 阶段及以后。

### {% octicon "milestone" aria-label="The milestone icon" %}  第 3 阶段：部署和变更管理的全面组织部署

在公司达成一致后，您就可以根据部署计划开始将 GHAS 推广到公司的其他部门。 在此阶段，请务必确保为部署 GHAS 期间可能需要进行的任何组织更改制定计划，并确保团队了解更改对当前工作流程的需求、价值和影响。

## 成功部署 GHAS 的最佳实践

我们发现，已经成功完成 GHAS 部署的公司具有几个类似的特征，这些特征有助于推动其成功。 为了帮助您的公司提高 GHAS 部署的成功率，请查看这些最佳实践。

### {% octicon "checklist" aria-label="The checklist icon" %} 为公司的部署设定明确的目标

设定目标似乎是显而易见的，但我们确实看到一些公司在开始部署 GHAS 时没有明确的目标。 对于这些公司来说，要获得完成部署并在公司内部实现 GHAS 价值所需的真正组织支持，就会更加困难。

当您开始规划部署和实施时，请先概述公司内部 GHAS 的目标，并确保将这些目标传达给您的团队。 目标可以是非常详细，也可以很简单，但必须有起点并达成一致。 这将有助于为公司的部署方向奠定基础，并帮助您制定实现目标的计划。 如果您在实现目标方面需要帮助， {% data variables.product.prodname_professional_services %} 可以根据我们在贵公司的经验以及之前与其他客户的合作情况，为您提供建议。

以下是一些简要示例，说明部署 GHAS 的目标可能是什么样子：
  - **减少漏洞数量：** 这可能是一般目标，或者因为您的公司最近受到重大漏洞的影响，您认为可以通过 GHAS 等工具阻止这些漏洞。
  - **识别高风险存储库：** 一些公司可能只想找到包含最大风险的存储库，以便开始修复漏洞并降低风险。
  -  **提高修复率：** 这可以通过推动开发人员采用调查结果并确保及时修复这些漏洞，防止安全问题累积来实现。
  - **满足合规性要求：** 这可以像创建新的合规性要求或更具体的内容一样简单。 我们发现许多医疗保健公司使用 GHAS 来防止 PHI（个人健康信息）的暴露。
  - **防止机密泄露：** 这通常是已经（或希望防止）关键信息泄露（如软件密钥，客户或财务数据等）的公司的目标。
  - **依赖项管理：** 对于可能由于未修补的依赖项的黑客攻击而成为受害者的公司，或者那些试图通过更新易受攻击的依赖项来防止这类攻击的公司来说，这通常是一个目标。

### {% octicon "checklist" aria-label="The checklist icon" %} 在团队之间建立清晰的沟通和一致性

清晰的沟通和一致性对于任何项目的成功都至关重要，GHAS 的部署也不例外。 我们发现，从购买 GHAS 到部署期间，其安全和开发团队以及其执行发起人（CISO 或 VP）之间具有明确沟通和一致性的公司，部署通常会取得更大的成功。

除了确保这些组在整个 GHAS 部署过程中保持一致之外，我们还建议关注一些特定领域。

#### 部署规划

如何将 GHAS 推广到您的公司？ 可能会有很多想法和意见。 以下是在继续推进之前应考虑回答和调整的一些问题：
  - 哪些团队将包含在试点中？
  - 试点项目重点关注哪些项目？
  - 应如何确定项目部署的优先级？
  - 您计划如何衡量试点及以后的成功？
  - 您的团队将会进行的日常改变程度如何？ 如何沟通这些？
  - 您的部署计划将如何在整个公司内传达？
  - 您计划如何培训您的团队？
  - 您最初计划如何管理扫描结果？ （有关详细信息，请参阅下一节“处理结果”）

#### 处理结果

在向团队推出 GHAS 之前，应明确协调如何随着时间的推移管理结果。 我们建议最初将结果视为信息量更大且非阻塞的结果。 公司可能具有完整的 CI/CD 管道，因此我们建议使用此方法以避免阻止公司的流程。 当您习惯于处理这些结果时，可以逐步将限制级别提高到对您的公司来说更准确的程度。

### {% octicon "checklist" aria-label="The checklist icon" %}  通过安全和开发团队领导您的部署

许多公司通过其安全小组领导其 GHAS 部署工作。 通常，在试点结束之前，开发团队不会参与部署过程。 但是，我们发现，通过安全和开发团队领导其部署的公司往往在部署 GHAS 方面取得更大的成功。

为什么？ GHAS 采用以开发人员为中心的软件安全方法，无缝集成到开发人员工作流程中。 在流程的早期没有来自开发团队的关键代表会增大部署风险，获得组织支持也会更难。

当开发组更早参与时（最好是从购买开始），安全和开发组可以在流程的早期达成一致。 这有助于消除两个群体之间的隔离，建立和加强他们的工作关系，有助于团队摆脱“事不关己，高高挂起”的常见心态。 所有这些事情都有助于支持总体目标，即帮助公司转变并开始利用 GHAS 在开发过程的早期解决安全问题。

#### {% octicon "people" aria-label="The people icon" %} 建议的部署团队关键角色

我们建议您的团队设置几个关键角色，以确保您的团队在部署和实施的整个规划和执行过程中都能合适地代表公司。

我们强烈建议您的部署团队包括以下角色：
- **执行发起人：** 这通常是 CISO、CIO、安全副总裁或工程副总裁。
- **技术安全主管：** 技术安全主管在整个实施过程中代表安全团队提供技术支持。
- **技术开发主管：** 技术开发主管提供技术支持，并可能与开发团队一起领导实施工作。

我们还建议您的部署团队包括以下角色：
- **项目经理：** 我们发现，部署过程越早引入项目经理，成功的可能性就越高。
- **质量保证工程师：** 公司质量保证团队的成员加入有助于确保 QA 团队考虑流程更改。

### {% octicon "checklist" aria-label="The checklist icon" %} 了解 GHAS 的关键事实，防止常见的误解

进入 GHAS 实施，重要的是要了解 GHAS 是什么以及可以做什么等一些关键的基本事实，以防止公司在部署 GHAS 时出现许多常见的误解。

{% note %}

**注意：** 如果您有兴趣继续接受 GHAS 教育，{% data variables.product.prodname_professional_services %} 提供了多种额外的教育和培训选择，包括您的公司需要为 GHAS 做准备的主题。 这些产品可能采取研讨会、演示和训练营的形式。 主题范围可以从部署 GHAS 和 GHAS 的基本用法到更高级的主题，以继续培养团队的技能。 有关与 {% data variables.product.prodname_professional_services_team %} 团队合作的详细信息，请参阅“[{% data variables.product.prodname_professional_services %}](#github-professional-services)”。

{% endnote %}


#### 事实 1：GHAS 是一套安全工具，需要采取措施来保护您的代码。

它不是安装并被遗忘的安全软件 - 仅仅拥有 GHAS 本身并不能保护您的代码。 GHAS 是一套工具，在配置、维护、日常工作流程中使用以及与其他工具结合使用时，其价值会随之增加。

#### 事实 2：GHAS 需要开箱即用的调整。

在存储库上设置 GHAS 后，需要采取其他步骤来确保它符合您公司的需求。 代码扫描尤其需要进一步的配置来微调结果，例如，自定义扫描标记的内容以调整在将来的扫描中提取的内容。 许多客户发现，初始扫描要么没有发现任何结果，要么根据应用程序的威胁模型不相关，需要根据公司的需求进行调整。

#### 事实 3：GHAS 工具在一起使用时最有效，但最有效的 AppSec 程序涉及使用其他工具/活动。

当所有工具一起使用时，GHAS 最有效。 当公司将 GHAS 与其他工具和活动（例如渗透测试和动态扫描）集成时，会进一步提高 AppSec 程序的有效性。 我们建议始终使用多层保护。

#### 事实 4：并非所有公司都会使用/需要自定义 {% data variables.product.prodname_codeql %} 查询，但它们可以帮助您自定义/定位扫描结果。

代码扫描由 {% data variables.product.prodname_codeql %} 提供支持，是世界上最强大的代码分析引擎。 虽然许多公司对能够编写自定义查询的前景感到兴奋，但对于我们的大部分客户来说，社区提供的基本查询集和其他查询通常绰绰有余。 但是，许多公司可能会发现需要自定义 {% data variables.product.prodname_codeql %} 查询，以帮助降低结果中的误报率，或者精心创建新查询以找到公司可能需要的结果。

但是，如果您的公司有兴趣编写自定义 {% data variables.product.prodname_codeql %} 查询，我们建议您在探索自定义查询之前完成 GHAS 的部署和实施。

{% note %}

**注意：** 在深入研究更深层次的安全实践之前，您的公司在GHAS上打下坚实的基础至关重要。

{% endnote %}

当您的公司准备就绪时，我们的客户成功团队可以帮助您了解需要满足的要求，并有助于确保您的公司具有良好的自定义查询用例。

#### 事实 5： {% data variables.product.prodname_codeql %} 会扫描整个代码库，而不仅仅是在拉取请求中所做的更改。

当从拉取请求运行代码扫描时，扫描将包括完整的代码库，而不仅仅是在拉取请求中所做的更改。 虽然这有时似乎没有必要，但这是确保更改已针对代码库中的所有交互进行审查的重要步骤。

## 成功部署 {% data variables.product.prodname_GH_advanced_security %} 的示例

现在，您已经更好地了解了成功部署和实施 GHAS 的一些关键因素，以下是我们的客户如何成功部署的一些示例。 即使您的公司位于不同的地方，{% data variables.product.prodname_dotcom %} 也可以帮助您构建适合您的部署需求的自定义路径。

### 中型医疗保健技术公司的部署示例

一家位于旧金山的中型医疗保健技术公司成功完成了 GHAS 的部署过程。 虽然他们可能没有大量需要启用的存储库，但该公司成功的关键包括拥有一个组织良好且协调一致的部署团队，并有明确的关键联系人，可以与 {% data variables.product.prodname_dotcom %} 合作，以解决过程中的任何问题。 这使他们能够在两个月内完成部署。

此外，拥有一个敬业的开发团队可团队完成部署后在拉取请求级别使用代码扫描。

### 中型数据平台公司的部署示例

时至今天，一家全球性数据平台公司使用 GHAS 取得了巨大成功。 他们已经完成了最初的实施，目前正在通过推进部署过程。 该公司在安全态势和工具方面很成熟，作为一家公司很好地达成了一致。 这使他们能够完全自主运行，并且快速、顺利地完成部署。

该公司强大的一致性、高效的运营和安全工具的成熟度，使他们能够快速实施 GHAS，为 {% data variables.product.prodname_codeql %} 奠定良好的基础。 自实施后，他们现在可以自动启用跨不同存储库的 {% data variables.product.prodname_codeql %}。

除了安全性和技术成熟度之外，该公司成功的另一个关键是拥有项目所有者和团队的单一联系人来推动项目向前发展。 不仅拥有这样一个关键联系人，而且他们非常足智多谋和熟练，直接为部署的成功做出贡献。

## 公司在部署 GHAS 之前需满足的先决条件

{% data variables.product.prodname_professional_services %} 可以帮助提供额外的支持，帮助您的公司细分和了解这些先决条件，并帮助您为 GHAS 实施过程做好准备。

 ### CI/CD 系统和流程

如果您的公司尚未投资或实施持续集成或持续交付 (CI/CD) 系统和流程，我们建议您在继续使用 GHAS 的同时采取此步骤。 这对贵公司来说可能是一个重大转变 - 我们可以与您合作，为实施 CI/CD 系统提供建议和指导，并支持可能需要的任何培训。

### 安装 {% data variables.product.prodname_GH_advanced_security %} 的要求

根据贵公司使用的技术组合，可以采用几种不同的路径进行 GHAS 安装。 本节概述了贵公司可能需要采取的不同路径的快速细分。

{% ifversion ghes %}

#### {% data variables.product.prodname_ghe_server %}

重要的是，您使用的是支持公司需求的 {% data variables.product.prodname_ghe_server %} (GHES) 版本。

如果您使用的是早期版本（3.0 之前）的 GHES 并希望升级，则在升级之前，您需要满足一些要求。 更多信息请参阅：
  - “[升级 {% data variables.product.prodname_ghe_server %}](/enterprise-server@2.22/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)”
  - “[升级要求](/enterprise-server@2.20/admin/enterprise-management/upgrade-requirements)”

如果您使用的是第三方 CI/CD 系统，并且想要使用 {% data variables.product.prodname_code_scanning %}，请确保已下载 {% data variables.product.prodname_codeql_cli %}。 更多信息请参阅“[关于 CI 系统中的 CodeQL 代码扫描](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)”。

如果您与 {% data variables.product.prodname_professional_services %} 合作部署 GHAS ，请准备好在启动会议中详细讨论这些项目。

{% endif %}

{% ifversion ghec %}

#### {% data variables.product.prodname_ghe_cloud %}

如果您是 {% data variables.product.prodname_ghe_cloud %} (GHEC) 客户，则需要满足一些先决条件，具体取决于您计划使用的 CI/CD。

对 CI/CD 使用 {% data variables.product.prodname_actions %} ：
- 为确保可以正确集成和利用 {% data variables.product.prodname_code_scanning %} ，在继续安装之前，您应该对 {% data variables.product.prodname_actions %} 有基本的了解。

对 CI/CD 使用第三方工具：
- 要集成 {% data variables.product.prodname_codeql_cli %}，您应该对 CI/CD 系统以及 *nix 和 Windows 有基本的了解，特别是命令的执行方式以及成功/失败的信号。 有关如何集成第三方工具的更多信息，请参阅“[将 CodeQL 代码扫描与现有 CI 系统结合使用](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system)”。

{% endif %}

## 与 GitHub 合作进行部署

在为实施 GHAS 做准备时，请务必考虑贵公司需要做些什么才能使该项目取得成功。 我们最成功的 GHAS 实施依赖于 GitHub 和客户在整个过程中，与拥有该项目的客户明确确定的利益相关者共同承担责任。

#### 客户和 GitHub 责任的成功模型

**客户责任**
- 完成基础架构和流程先决条件
- 管理部署和实施，包括规划和执行
- 内部培训
- （可选）向 GitHub 社区提供 {% data variables.product.prodname_codeql %} 查询

**GitHub 责任**

- 功能的维护和增强，如 {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% endif %}、{% data variables.product.prodname_actions %}、{% data variables.product.prodname_GH_advanced_security %}
- 提供、维护和交付以下服务： {% data variables.product.prodname_dotcom %} 文档、{% data variables.product.prodname_dotcom %} 社区、{% data variables.product.prodname_dotcom %} 支持

{% note %}

**注意：** {% data variables.product.prodname_professional_services %} 有助于支持履行许多客户职责。 要了解更多信息，请参阅“[GitHub 服务和支持](#github-services-and-support)”。

{% endnote %}

## {% data variables.product.prodname_dotcom %} 服务和支持

### {% data variables.product.prodname_dotcom %} 支持

如果您在实施过程中遇到任何问题，可以搜索我们的深入文档以获取解决方案，或与 {% data variables.product.prodname_dotcom %} 支持部门合作，这是一个由高技术工程师组成的团队，可以在出现问题时为您提供支持。 更多信息请参阅“[GitHub Enterprise 支持](https://enterprise.github.com/support)”。

此外，您还可以尝试我们的 [ {% data variables.product.prodname_gcf %}](https://github.community/)。

如果您购买了高级支持计划，则可以在[高级支持门户](https://enterprise.github.com/support)提交事件单。 如果您不确定购买了哪个支持计划，可以联系您的销售代表或查看计划选项。

有关高级支持计划选项的详细信息，请参阅：
  - “[高级支持](https://github.com/premium-support)” {% ifversion ghec %}
  - “[关于 {% data variables.product.prodname_ghe_cloud %} 的 GitHub 高级支持](/github/working-with-github-support/about-github-premium-support-for-github-enterprise-cloud)”{% endif %}{% ifversion ghes %}
  - “[关于 {% data variables.product.prodname_ghe_server %} 的 GitHub 高级支持](/admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise-server)”{% endif %}

### {% data variables.product.prodname_professional_services %}

我们的 {% data variables.product.prodname_professional_services_team %} 团队可以与您合作，成功部署和实施 {% data variables.product.prodname_GH_advanced_security %}。 我们针对您的实施所需的指导和支持类型提供了多种选项。 我们还提供培训和训练营，帮助您的公司优化 GHAS 的价值。

如果您想与我们的 {% data variables.product.prodname_professional_services_team %} 团队合作进行部署，我们建议您开始考虑您的系统设计和基础架构，以及您希望使用 GHAS 设置的存储库数量，以开始这些对话。 此外，开始考虑您希望通过此部署实现的目标。

实施只是学习如何使用 GHAS 的安全驱动型成功旅程中的一步。 完成实施后，您将进一步了解整个基础架构和代码库中的部署。 请与您的销售代表联系，以获取有关所有可用 {% data variables.product.prodname_professional_services_team %} 选项的更多信息。

如果您最初选择退出其他服务，但在开始实施时发现需要其他支持，请联系您的销售代表，讨论可能需要哪些服务选项来支持您的实施。
