---
title: GitHub 高级安全功能部署概述
intro: 通过查看和了解这些最佳做法、推出示例和经企业测试的分阶段方法，帮助公司成功准备采用 {% data variables.product.prodname_GH_advanced_security %} (GHAS)。
product: '{% data variables.product.prodname_GH_advanced_security %} is a set of security features designed to make enterprise code more secure. It is available for {% data variables.product.prodname_ghe_server %} 3.0 or higher, {% data variables.product.prodname_ghe_cloud %}, and open source repositories. To learn more about the features, included in {% data variables.product.prodname_GH_advanced_security %}, see "[About GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)."'
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
ms.openlocfilehash: 9c58cc8cca76a19ccc1aa36770e4cafcf4c9fcc7
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145100106"
---
{% data variables.product.prodname_GH_advanced_security %} (GHAS) 使用 CodeQL（世界上最先进的语义代码分析引擎）等集成工具帮助团队更快地构建更安全的代码。 GHAS 是一套工具，需要整个企业的开发人员积极参与。 若要实现最佳投资回报，你必须了解如何使用、应用和维护 GHAS 来真正保护代码。

在处理公司新软件时面临的最大挑战之一可能是推出和实现过程，以及引起文化变革，以推动成功推出所需的组织支持。

为了帮助公司更好地了解和准备使用 GHAS 的此过程，本概述旨在：
  - 概述针对公司的 GHAS 推出的外观。
  - 帮助你为公司的推出做好准备。
  - 分享关键的最佳做法，以便帮助提高公司的推出成功率。

若要了解通过 {% data variables.product.prodname_GH_advanced_security %} 提供的安全功能，请参阅“[{% data variables.product.prodname_dotcom %} 安全功能](/code-security/getting-started/github-security-features)”。

## <a name="recommended-phased-approach-for-ghas-rollouts"></a>针对 GHAS 推出的推荐分阶段方法

我们已创建针对通过行业和 GitHub 最佳做法开发的 GHAS 推出的分阶段方法。 你可以与 {% data variables.product.prodname_professional_services %} 合作或独立使用此方法进行推出。

虽然建议采用分阶段方法，但可以根据公司的需求进行调整。 我们还建议创建并遵守推出和实现的时间线。 在你开始规划时，我们可以共同确定最适合你的公司的理想方法和时间线。

![该图显示了 GitHub 高级安全功能推出和部署的三个阶段，包括第 0 阶段：规划和启动，第 1 阶段：试点项目，第 2 阶段：面向早期采用者的组织支持和推出，以及第 3 阶段：完整的组织推出和变更管理](/assets/images/enterprise/security/advanced-security-phased-approach-diagram.png)


根据我们帮助客户成功部署 {% data variables.product.prodname_GH_advanced_security %} 的经验，预计大多数客户都需要遵循这些阶段。 根据公司的需要，可能需要修改此方法并更改或删除某些阶段或步骤。

有关实现每个阶段的详细指南，请参阅“[在企业中部署 {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)”。 下一部分将大致介绍其中每个阶段。

###  <a name="-octicon-milestone-aria-labelthe-milestone-icon--phase-0-planning--kickoff"></a>{% octicon "milestone" aria-label="The milestone icon" %} 第 0 阶段：规划和启动

在此阶段，总体目标是规划和准备推出，确保人员、过程和技术到位并为推出做好准备。 你还应该考虑将使用哪些成功标准来度量团队中的 GHAS 采用和使用情况。

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-1-pilot-projects"></a>{% octicon "milestone" aria-label="The milestone icon" %} 第 1 阶段：试点项目

若要开始实现 GHAS，建议从一些具有较大影响力的项目/团队开始，以便进行试点初始推出。 这将使公司内的初始组能够熟悉 GHAS，了解如何启用和配置 GHAS，并基于 GHAS 打好坚实的基础，然后再推出到公司的其他团队。

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-2-organizational-buy-in--rollout-preparation"></a>{% octicon "milestone" aria-label="The milestone icon" %} 第 2 阶段：组织支持和推出准备

第 2 阶段是对先前各阶段的回顾，并为在公司其他团队进行更大规模的推出做好准备。 在此阶段，组织支持可以指公司在试点项目之后继续前进的决定，或者随着时间的推移公司使用和采用 GHAS 的情况（这是最常见的）。 如果随着时间的推移公司决定采用 GHAS，那么第 2 阶段可以继续到第 3 阶段及后续阶段。

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-3-full-organizational-rollout--change-management"></a>{% octicon "milestone" aria-label="The milestone icon" %} 第 3 阶段：完整的组织推出和变更管理

公司内达成一致后，你就可以基于推出计划开始将 GHAS 推出到公司的其他团队。 在此阶段，确保已针对在 GHAS 推出过程中可能需要进行的任何组织更改制定计划，并确保团队了解更改对当前工作流的需求、价值和影响，这一点至关重要。

## <a name="best-practices-for-a-successful-ghas-rollout"></a>成功推出 GHAS 的最佳做法

我们发现，已经成功推出 GHAS 的公司具有几个有助于推动其成功的相似特征。 若要帮助公司提高 GHAS 推出的成功率，请查看这些最佳做法。

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--set-clear-goals-for-your-companys-rollout"></a>{% octicon "checklist" aria-label="The checklist icon" %} 为公司的推出设定明确目标

设定目标似乎是显而易见的，但我们确实看到一些公司在开始推出 GHAS 时没有考虑到明确的目标。 对于这些公司来说，更难获得真正的组织支持，而这是完成推出过程并在公司内部实现 GHAS 价值所必需的。

当你开始规划推出和实现时，请开始在公司内部概述 GHAS 的目标，并确保将这些目标传达给你的团队。 只要有一个起点且一致，你的目标就可以非常详细，也可以很简单。 这将有助于为公司的推出方向奠定基础，并且可以帮助你制定实现该目标的计划。 如果在实现目标方面需要帮助，{% data variables.product.prodname_professional_services %} 可根据公司经验和之前与其他客户的互动帮助提供建议。

以下是一些关于推出 GHAS 的目标的高级示例：
  - **减少漏洞数量：** 这可能是一般情况，也可能是因为你的公司最近受到了重大漏洞的影响，你认为该漏洞本可以通过 GHAS 等工具加以阻止。
  - **识别高风险存储库：** 一些公司可能只想针对包含最大风险的存储库，准备开始修复漏洞并降低风险。
  -  **提高修正率：** 这可以通过推动开发人员采用调查结果，并确保及时修正这些漏洞，防止安全债务的积累来实现。  
  - **满足合规性要求：** 这可以像创建新的合规性要求或更具体的要求一样简单。 我们发现许多医疗保健公司都使用 GHAS 来防止 PHI（个人健康信息）泄露。
  - **防止机密泄露：** 这通常是那些已经有（或想要防止）关键信息（如软件密钥、客户或财务数据等）泄露的公司的目标。
  - **依赖项管理：** 这通常是那些可能由于未修补依赖项而遭到黑客攻击成为受害者的公司的目标，或者那些试图通过更新易受攻击的依赖项来防止此类攻击的公司的目标。  

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--establish-clear-communication-and-alignment-between-your-teams"></a>{% octicon "checklist" aria-label="The checklist icon" %} 在团队之间进行清晰有效的沟通和达成一致性

对于任何项目的成功，进行清晰有效的沟通和达成一致性至关重要，GHAS 的推出也不例外。 我们发现，从购买 GHAS 到推出这一过程中，在其安全组和开发组以及执行发起人（CISO 或 VP）之间进行清晰有效的沟通和达成一致性的公司，通常会在推出时取得更大的成功。

除了确保这些组在 GHAS 推出过程中保持一致之外，还建议你重点关注一些特定领域。

#### <a name="rollout-planning"></a>推出计划

如何向公司推出 GHAS？ 可能会有很多想法和意见。 在继续之前，你应该考虑回答和调整以下问题：
  - 试点中将包括哪些团队？
  - 试点重点关注哪些项目？
  - 项目应该如何优先推出？
  - 打算如何度量试点及以后是否成功？
  - 团队将进行的每日更改级别是什么？ 这将如何传达？
  - 如何在整个公司内传达推出计划？
  - 你打算如何训练团队？
  - 最初打算如何管理扫描结果？ （有关详细信息，请参阅下一部分“处理结果”）

#### <a name="processing-results"></a>处理结果

在将 GHAS 推出到团队之前，应该对随着时间的推移如何管理结果有明确的一致性。 建议首先将结果视为更具参考性和非阻塞性的结果。 公司很可能拥有完整的 CI/CD 管道，因此建议使用此方法以避免阻止公司的过程。 当你习惯了处理这些结果后，就可以逐步将限制级别提高到对公司感觉更准确的程度。

### <a name="-octicon-checklist-aria-labelthe-checklist-icon---lead-your-rollout-with-both-your-security-and-development-groups"></a>{% octicon "checklist" aria-label="The checklist icon" %} 通过安全组和开发组领导推出

许多公司通过其安全组领导 GHAS 推出工作。 通常，在试点结束之前，开发团队不会被包括在推出过程中。 然而，我们发现，通过安全和开发团队领导推出的公司往往会在 GHAS 推出方面取得更大的成功。

为什么？ GHAS 通过无缝集成到开发人员工作流中来采用以开发人员为中心的软件安全方法。 在此过程的早期没有来自开发组的关键表示形式会增加推出的风险，并且会针对组织支持创建一条艰难的路径。

当开发组较早参与时（最好是从购买开始），安全组和开发组可以在过程的早期实现一致性。 这有助于消除两个组之间的隔阂，建立和加强他们的工作关系，并帮助这两个组摆脱“互相踢皮球”的共同心态。 所有这些都有助于实现帮助公司转变的总体目标，并开始利用 GHAS 来解决开发过程中的早期安全问题。

#### <a name="-octicon-people-aria-labelthe-people-icon--recommended-key-roles-for-your-rollout-team"></a>{% octicon "people" aria-label="The people icon" %} 为推出团队推荐的关键角色

建议在团队中担任一些关键角色，以确保团队在推出和实现的规划和执行过程中得到充分的体现。

强烈建议推出团队包括以下角色：
- **执行发起人：** 这通常是 CISO、CIO、安全副总裁或工程副总裁。
- **技术安全主管：** 技术安全主管在整个实现过程中以安全团队身份提供技术支持。
- **技术开发主管：** 技术开发主管提供技术支持，并且可能会与开发团队一起领导实现工作。  

还建议推出团队包括以下角色：
- **项目经理：** 我们发现，项目经理越早被引入到推出过程中，成功的可能性就越高。  
- **质量保证工程师：** 包括公司质量保证团队的一名成员，有助于确保 QA 团队考虑到过程更改。

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--understand-key-ghas-facts-to-prevent-common-misconceptions"></a>{% octicon "checklist" aria-label="The checklist icon" %} 了解关键的 GHAS 事实，以防止常见的误解

在进行 GHAS 实现时，必须要了解一些关于 GHAS 的含义及其用途的关键基本事实，以防止公司在进行 GHAS 推出时出现许多常见的误解。

{% note %}

注意：如果你有兴趣进一步接受 GHAS 教育，{% data variables.product.prodname_professional_services %} 提供了各种用于额外教育和培训的选项，包括公司需要为 GHAS 做准备的主题。 这些产品/服务可能采取研讨会、演示和集训营的形式。 主题可以从部署 GHAS 和 GHAS 的基本使用到更高级的主题，以继续培养团队的技能。 有关使用 {% data variables.product.prodname_professional_services_team %} 团队的详细信息，请参阅“[{% data variables.product.prodname_professional_services %}](#github-professional-services)”。

{% endnote %}


#### <a name="fact-1-ghas-is-a-suite-of-security-tools-that-require-action-to-protect-your-code"></a>事实 1：GHAS 是一套需执行操作来保护代码的安全工具。

它不是被安装并被遗忘的安全软件，仅拥有 GHAS 并不能保护你的代码。 GHAS 是一套工具，在配置、维护、在日常工作流中使用以及与其他工具结合使用时，价值会增加。

#### <a name="fact-2-ghas-will-require-adjustment-out-of-the-box"></a>事实 2：GHAS 需要进行开箱即用的调整。

在存储库上设置 GHAS 后，需要采取其他步骤来确保其满足公司的需求。 代码扫描尤其需要进一步的配置来微调结果，例如，自定义由扫描标记的内容，以调整在未来的扫描中选取的内容。 许多客户发现，初始扫描要么没有得到任何结果，要么得到与应用程序威胁模型无关的结果，因此需要根据其公司的需求进行调整。

#### <a name="fact-3-ghas-tools-are-most-effective-when-used-together-but-the-most-effective-appsec-programs-involve-the-use-of-additional-toolsactivities"></a>事实 3：GHAS 工具在一起使用时最为有效，但最有效的 AppSec 程序涉及使用其他工具/活动。

当所有工具一起使用时，GHAS 最有效。 当公司将 GHAS 与其他工具和活动（例如渗透测试和动态扫描）集成时，它会进一步提高 AppSec 计划的有效性。 建议始终使用多层保护。

#### <a name="fact-4-not-all-companies-will-useneed-custom--data-variablesproductprodname_codeql--queries-but-they-can--help-you-customizetarget-scan-results"></a>事实 4：并非所有公司都将使用/需要自定义 {% data variables.product.prodname_codeql %} 查询，但这些查询可帮助自定义/查找扫描结果。

代码扫描由 {% data variables.product.prodname_codeql %}（世界上最强大的代码分析引擎）提供支持。 虽然许多公司对能够编写自定义查询的前景感到兴奋，但对于我们的大部分客户而言，基本查询集和社区中可用的其他查询通常就已经足够了。 但是，许多公司可能会发现需要自定义 {% data variables.product.prodname_codeql %} 查询，以帮助减少结果中的误报率或针对公司可能需要的结果创建新查询。

但如果你的公司对编写自定义 {% data variables.product.prodname_codeql %} 查询感兴趣，建议在探索自定义查询之前完成 GHAS 的推出和实现。

{% note %}

注意：在深入研究更深层次的安全做法之前，你的公司必须基于 GHAS 打好坚实的基础。

{% endnote %}

当你的公司准备就绪时，客户成功团队可以帮助你了解需要满足的要求，并可以帮助确保你的公司具有良好的自定义查询用例。  

#### <a name="fact-5--data-variablesproductprodname_codeql--scans-the-whole-code-base-not-just-the-changes-made-in-a-pull-request"></a>事实 5：{% data variables.product.prodname_codeql %} 会扫描整个代码库，而不仅仅是在拉取请求中所做的更改。

当从拉取请求运行代码扫描时，扫描将包括完整的代码库，而不仅仅是在拉取请求中所做的更改。 尽管有时这似乎没有必要，但这是一个重要的步骤，用于确保已针对代码库中的所有交互对更改进行了全面审查。

## <a name="examples-of-successful--data-variablesproductprodname_gh_advanced_security--rollouts"></a>成功的 {% data variables.product.prodname_GH_advanced_security %} 推出示例

现在，你已经对成功推出和实现 GHAS 的一些关键有了更好的理解，下面是我们的客户如何成功推出的一些示例。 即使你的公司位于其他位置，{% data variables.product.prodname_dotcom %} 也可以帮助你构建满足推出需求的自定义路径。

### <a name="example-rollout-for-a-mid-sized-healthcare-technology-company"></a>一家中型医疗保健技术公司的推出示例  

一家总部位于旧金山的中型医疗保健技术公司成功地完成了 GHAS 的推出过程。 虽然他们可能没有大量需要启用的存储库，但该公司成功的关键包括拥有一个组织良好且协调一致的团队以进行推出，并建立一个明确的与 {% data variables.product.prodname_dotcom %} 合作的关键联系人，以便解决在该过程中出现的任何问题。 这使他们能够在两个月内完成推出。

此外，公司拥有一个参与的开发团队，这使其能够让团队在完成推出后在拉取请求级别使用代码扫描。

### <a name="example-rollout-for-a-mid-sized-data-platform-company"></a>一家中型数据平台公司的推出示例

迄今为止，一家全球数据平台公司通过 GHAS 取得了巨大的成功。 他们已经完成了初步实现，目前正在完成推出过程。 这家公司在安全状况和工具方面都很成熟，作为一家公司，该公司关系良好。 这样，他们就可以自给自足地运营，并使他们能够快速顺利地完成推出。

该公司强大的一致性、高效的运营和成熟的安全工具使他们能够快速实现 GHAS 并为 {% data variables.product.prodname_codeql %} 奠定良好的基础。 自实现以来，他们现在可以跨不同的存储库自动启用 {% data variables.product.prodname_codeql %}。

除了安全性和成熟的技术之外，该公司成功的另一个关键因素是拥有项目所有者和团队的单一联系点来推动项目向前发展。 不仅拥有该关键联系人至关重要，而且他们也非常足智多谋和技术娴熟，这直接有助于推出的成功。

## <a name="prerequisites-for-your-company-before-rolling-out-ghas"></a>公司在推出 GHAS 之前的先决条件

{% data variables.product.prodname_professional_services %} 可以帮助提供额外的支持，帮助你的公司细分和了解这些先决条件，并帮助你为 GHAS 实现过程做好准备。

 ### <a name="cicd-systems-and-process"></a>CI/CD 系统和过程

如果你的公司尚未投资或实现持续集成或持续交付 (CI/CD) 系统和过程，建议在推进 GHAS 的同时采取此步骤。 对于你的公司来说，这可能是一个重大转变，我们可以与你合作以提供有关实现 CI/CD 系统的建议和指导，并支持任何可能需要的培训。

### <a name="requirements-to-install--data-variablesproductprodname_gh_advanced_security-"></a>安装 {% data variables.product.prodname_GH_advanced_security %} 的要求

根据你的公司使用的技术组合，GHAS 安装可以采用几种不同的路径。 本部分概述了你的公司可能需要采取的不同路径的大致细分。

{% ifversion ghes %}

#### <a name="-data-variablesproductprodname_ghe_server-"></a>{% data variables.product.prodname_ghe_server %}

重要的是，你使用的 {% data variables.product.prodname_ghe_server %} (GHES) 版本可以支持你公司的需求。

如果使用的是早期版本（低于 3.0）的 GHES 并且想要升级，则在继续升级之前需要满足一些要求。 有关详细信息，请参阅：
  - [升级 {% data variables.product.prodname_ghe_server %}](/enterprise-server@2.22/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)
  - [升级要求](/enterprise-server@2.20/admin/enterprise-management/upgrade-requirements)

如果使用第三方 CI/CD 系统并希望使用 {% data variables.product.prodname_code_scanning %}，请确保已下载 {% data variables.product.prodname_codeql_cli %}。 有关详细信息，请参阅“[关于 CI 系统中的 CodeQL 代码扫描](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)”。

如果要使用 {% data variables.product.prodname_professional_services %} 进行 GHAS 推出，请准备好在启动会议上详细讨论这些项。

{% endif %}

{% ifversion ghec %}

#### <a name="-data-variablesproductprodname_ghe_cloud-"></a>{% data variables.product.prodname_ghe_cloud %}

如果你是 {% data variables.product.prodname_ghe_cloud %} (GHEC) 客户，则需要满足一些先决条件，具体取决于计划使用的 CI/CD。

将 {% data variables.product.prodname_actions %} 用于 CI/CD：
- 若要确保可以正确集成和利用 {% data variables.product.prodname_code_scanning %}，你应在继续安装之前对 {% data variables.product.prodname_actions %} 有基本的了解。

使用 CI/CD 的第三方工具：
- 若要集成 {% data variables.product.prodname_codeql_cli %}，你应对 CI/CD 系统以及 *nix 和 Windows 有基本的了解，特别是如何执行命令以及如何指示成功/失败。 有关如何集成第三方工具的详细信息，请参阅“[在现有 CI 系统上使用 CodeQL 代码扫描](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system)”。

{% endif %}

## <a name="partnering-with-github-for-your-rollout"></a>与 GitHub 合作以实现推出

在准备实现 GHAS 时，重要的是要考虑你的公司要使该项目成功所需的内容。 最成功的 GHAS 实现依赖于 GitHub 和客户在整个过程中的共同责任，以及在拥有该项目的客户中明确标识了利益干系人。

#### <a name="success-model-for-customer-and-github-responsibilities"></a>针对客户和 GitHub 责任的成功模型

**客户责任**
- 完成基础结构和流程先决条件
- 管理推出和实现，包括规划和执行
- 内部培训
- （可选）向 GitHub 社区提供 {% data variables.product.prodname_codeql %} 查询

**GitHub 责任**

- {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% endif %}、{% data variables.product.prodname_actions %}、{% data variables.product.prodname_GH_advanced_security %} 等功能的维护和增强
- 提供、维护和提交以下服务：{% data variables.product.prodname_dotcom %} Docs、{% data variables.product.prodname_dotcom %} Community、{% data variables.product.prodname_dotcom %} 支持

{% note %}

注意：{% data variables.product.prodname_professional_services %} 可以帮助为许多客户的责任提供支持。 要了解详细信息，请参阅“[GitHub 服务和支持](#github-services-and-support)”。

{% endnote %}

## <a name="-data-variablesproductprodname_dotcom--services-and-support"></a>{% data variables.product.prodname_dotcom %} 服务和支持

### <a name="-data-variablesproductprodname_dotcom--support"></a>{% data variables.product.prodname_dotcom %} 支持

如果在实现过程中遇到任何问题，可以搜索深度文档以获取解决方案，或与 {% data variables.product.prodname_dotcom %} 支持（一个技术含量高的工程师团队，它可以在出现问题时提供支持）联系。 有关详细信息，请参阅“[GitHub Enterprise 支持](https://enterprise.github.com/support)”。

此外，你还可以尝试 [ {% data variables.product.prodname_gcf %}](https://github.community/)。

如果你购买了高级支持计划，则可以在[高级支持门户](https://enterprise.github.com/support)中提交工单。 如果不确定所购买的支持计划，则可以联系你的销售代表或查看计划选项。

有关高级支持计划选项的详细信息，请参阅：
  - [高级支持](https://github.com/premium-support) {% ifversion ghec %}
  - [关于对 {% data variables.product.prodname_ghe_cloud %} 的 GitHub 高级支持](/github/working-with-github-support/about-github-premium-support-for-github-enterprise-cloud) {% endif %}{% ifversion ghes %}
  - [关于对 {% data variables.product.prodname_ghe_server %} 的 GitHub 高级支持](/admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise-server) {% endif %}

### <a name="-data-variablesproductprodname_professional_services-"></a>{% data variables.product.prodname_professional_services %}

我们的 {% data variables.product.prodname_professional_services_team %} 团队可以与你合作，以成功推出和实现 {% data variables.product.prodname_GH_advanced_security %}。 我们为你期望的实现所需的指导和支持类型提供了各种选项。 我们还提供了培训和集训营，以帮助你的公司优化 GHAS 的价值。

如果你想要与 {% data variables.product.prodname_professional_services_team %} 团队合作以进行实现，建议开始考虑系统设计和基础结构，以及希望使用 GHAS 设置的存储库数量，以便开始这些对话。 此外，开始考虑你想要通过此推出实现的目标。

实现只是成功的安全驱动之旅中的一步，你将在此过程中了解如何使用 GHAS。 完成实现后，你需要了解更多关于在整个基础结构和代码库中推出的内容。 有关所有可用的 {% data variables.product.prodname_professional_services_team %} 选项的详细信息，请与你的销售代表联系。

如果你最初选择了不提供额外的服务，但在开始实现时发现需要额外的支持，请联系你的销售代表，讨论可能需要哪些服务选项才能支持实现。
