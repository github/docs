---
title: 在企业中部署 GitHub Advanced Security
intro: 了解如何在企业中计划、准备和实施分阶段推出 {% data variables.product.prodname_GH_advanced_security %} (GHAS)。
product: '{% data reusables.gated-features.advanced-security %}'
redirect_from:
- /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
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
ms.openlocfilehash: 7990891fd4b90127ae5f32aa262d6c096d23acab
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "147060752"
---
## <a name="overview-of-the-deployment-process"></a>部署过程概述

{% data reusables.security.overview-of-phased-approach-for-ghas-rollout %}

有关这些不同阶段的大致摘要，请参阅“[{% data variables.product.prodname_GH_advanced_security %} 部署概述](/admin/advanced-security/overview-of-github-advanced-security-deployment)”。

在开始部署之前，建议在“[{% data variables.product.prodname_GH_advanced_security %} 部署概述](/admin/advanced-security/overview-of-github-advanced-security-deployment)”中查看安装 GHAS 的先决条件和 GHAS 部署的最佳做法。

## <a name="-octicon-milestone-aria-labelthe-milestone-icon--phase-0-planning--kickoff"></a>{% octicon "milestone" aria-label="The milestone icon" %} 第 0 阶段：规划和启动

{% note %}

{% octicon "clock" aria-label="Clock" %} **预计时间：** 预计第 0 阶段可能会持续约 1 - 4 周。 此范围可能会因发布需求和公司在部署计划中可能需要的任何必要批准而异。

{% endnote %}

规划和启动阶段的目标是确保已设置好所有人员、过程和技术，并准备好实现 GHAS。

为了帮助你获得执行发起人的支持，建议在企业中发布 GHAS 之前准备并调整推出计划及目标。

作为分阶段推出策略的一部分，建议在企业其他团队之前确定应该有针对性地加入 GHAS 的高影响力和关键团队或应用程序。

如果分阶段推出不适合你的企业，可以跳到[试点项目阶段](#--phase-1-pilot-projects)。

如果使用的是 {% data variables.product.prodname_professional_services %}，在此阶段中，你还将为团队在整个推出和实现过程中如何协作制定计划。 {% data variables.product.prodname_professional_services_team %} 团队可以按需为创建分阶段的推出计划和目标提供支持。

### <a name="step-1-kickoff-meeting-with--data-variablesproductprodname_professional_services--optional"></a>步骤 1：与 {% data variables.product.prodname_professional_services %} 开会（可选）

如果注册了 {% data variables.product.prodname_professional_services %}，你将通过与该服务代表会面来开始推出和实现过程。

如果尚未注册 {% data variables.product.prodname_professional_services %}，则可以跳到下一步。

该会议的目标是使两个团队在必要的信息方面保持一致，以便开始制定一个最适合你公司的推出和实现计划。 为了准备该会议，我们创建了一项调查，该调查将帮助我们更好地为讨论做准备。 你的服务代表会将此调查结果发送给你。

为了帮助你准备该初次会议，请查看以下主题。

-  协调你的公司与 {% data variables.product.prodname_professional_services %} 进行协作的最佳方式
  - 设定对利用所购买的服务小时/天数的最佳方式的期望
  - 沟通计划/会议频率
  - 角色和职责
- 查看 GHAS 在软件开发生命周期 (SDLC) 中的工作原理。 你的 {% data variables.product.prodname_professional_services %} 代表将解释 GHAS 的工作原理。
- 查看有关部署 GHAS 的最佳做法。 如果团队认为它很有价值，或者企业没有参与概念证明 (POC) 练习，这可以作为复习。 该复习包括对现有应用程序安全计划以及及针对 DevSecOps 成熟度模型等的成熟度级别的讨论。
-  与 GHAS 部署的后续步骤保持一致。 {% data variables.product.prodname_professional_services %} 代表将概述后续步骤和可从合作伙伴关系中获得的支持。

若要帮助规划推出策略，还可以讨论以下问题：
  - 将启用多少个团队？
  - 团队存储库的解剖结构是什么？ （技术堆栈、当前工具等）
    - 如果你的公司参与，在概念证明练习中，其中一些内容可能已经涵盖。 如果没有涵盖，这将是讨论该问题的关键时刻。
   - 我们所需的采用级别是有机的、辅助的还是无机的？
   - 从资源和文档的角度来看，辅助采用是什么样的？
   - 你将如何完全管理无机采用？ （例如，使用策略强制实施或集中管理的工作流。）

### <a name="step-2-internal-kickoff-at-your-company"></a>步骤 2：在公司内部启动

无论你的公司是否选择与 {% data variables.product.prodname_professional_services %} 合作，我们始终建议你举行自己的启动会议以符合你自己的团队。

在该启动会议期间，重要的是要确保对目标、期望有一个清晰的了解，并确保制定了如何推进推出和实现的计划。

此外，现在是开始考虑为团队进行培训和准备的好时机，以确保他们拥有正确的工具和专业知识来支持 GHAS 的推出和实现。

#### <a name="topics-for-your-internal-kickoff-meeting"></a>内部启动会议的主题

如果尚未在与 {% data variables.product.prodname_professional_services %} 的启动会议中与同一组包含这些主题，建议在公司的内部启动会议中涵盖这些主题。

- 业务成功指标是什么？你打算如何衡量和报告这些指标？
  - 如果这些内容尚未定义，请定义它们。 如果这些内容已定义，请与他们沟通并讨论你打算如何提供数据驱动的进度更新。
- 了解 GHAS 在 SDLC（软件开发生命周期）中的工作原理以及它应如何为你的公司工作。
- 如果你的公司没有参与概念证明练习，则查看最佳做法（如果团队在此查看中发现价值，则进行复习）
  - 这与现有的应用程序安全计划相比如何？
- 讨论并确定内部团队将如何在整个推出和实现过程中实现最佳协作。
  - 与内部团队的沟通计划和会议频率保持一致
  - 查看用于完成推出和实现的任务，并定义角色和职责。 我们已经在本文中概述了大部分任务，但可能还有你的公司需要的未包括在内的其他任务。
  - 请考虑建立一个用于实现规模化启用的“冠军计划”
  - 开始讨论完成任务所需的时间
- 开始研究最适合你的公司的理想推出方法。 这将包括理解一些重要的项：
  - 将启用多少个团队？ 如果你的公司参与，在概念证明 (POC) 练习中，其中一些内容可能已经涵盖。 如果没有涵盖，这将是讨论该问题的关键时刻。
  - 在为最初推出而确定的关键应用程序中，有多少是基于由 GHAS 支持的技术而构建的？
  - 组织需要哪些准备工作？ 若要了解详细信息，请参阅“[第 2 阶段](#--phase-2-organizational-buy-in--rollout-preparation)”。

### <a name="step-3-prepare-your-rollout--implementation-plan-and-goals"></a>步骤 3：准备推出和实现计划及目标

在针对推出的第 1 阶段推进试点项目之前，确保为公司计划如何继续制定推出计划和业务目标至关重要。

如果使用的是 {% data variables.product.prodname_professional_services %}，它们可以在创建此计划中发挥重要作用。

如果你是独立工作的，本部分概述了一些内容，用于确保在准备推进时将其包含在计划中。

按需为团队成员制定过程更改计划（如果需要）和培训：
  - 记录了有关角色和职责的团队分配。 有关每个功能所需权限的详细信息，请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)”。
  - 尽可能地记录任务计划和时间线/时间范围。 这应包括基础结构更改、过程更改/培训以及启用 GHAS 的所有后续阶段，并根据需要为修正和配置调整提供时间范围。 有关详细信息，请参阅下面的“[第 1 阶段：试点项目](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise#--phase-1-pilot-projects)”。
  - 哪些项目/团队将首先启用 GHAS 的优先计划，以及哪些项目/团队将在后续阶段启用的后续计划
  - 基于业务目标的成功指标。 这将是继试点项目之后的一个关键参考点，用于获得全面推出支持。

{% note %}

注意：若要确保认知、支持和采用均来自你公司中的所有组，需围绕推出时间和对公司的基础结构、过程和一般日常开发工作流的影响设定实际期望，这一点很重要。 为了更顺利和更成功地推出，请确保安全和开发团队了解 GHAS 的影响。

{% endnote %}

{% ifversion ghes %}

对于 {% data variables.product.prodname_ghe_server %} 客户，为帮助确保实例能够支持 GHAS 的推出和实现，请查看以下内容：

- 虽然无需升级到 GHES 3.0，但必须升级到 GHES 3.0 或更高版本才能利用代码扫描和 {% data variables.product.prodname_actions %} 等功能组合。 有关详细信息，请参阅“[升级 {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)”。

- 在高性能配置中，完全冗余的次级 {% data variables.product.prodname_ghe_server %} 设备通过复制所有主要数据存储与主设备保持同步。 有关设置高可用性的详细信息，请参阅“[配置高可用性](/admin/enterprise-management/configuring-high-availability)”。

- 若要帮助支持任何关于公司设置的潜在更改的讨论，可以查看 {% data variables.product.prodname_ghe_server %} 系统概述。 有关详细信息，请参阅“[系统概述](/admin/overview/system-overview)”。

{% endif %}

### <a name="step-4-establish-a-baseline-of-organizational-insights"></a>步骤 4：建立组织见解的基线

当你的公司准备开始试点项目时，确保已经为企业目前所处的位置设定了一个基线，并定义了明确的成功指标来度量试点项目的进展情况，这一点至关重要。

你的公司可能有一些关键业务目标需要进行度量，但我们可以确定其他指标来帮助度量试点成功与否。

作为起点，其中一些指标可能包括：
  - 修正 GHAS 漏洞的平均时间与试点项目/团队之前使用的工具和做法。
  - 代码扫描集成对前 X 个最关键应用程序的发现结果。
  - 集成了 SAST（静态应用程序安全测试）的应用程序数量与参与前的应用程序数量。

如果你在购买 GHAS 之前参与了 POC 练习，那么这些目标可能看起来很熟悉。 此成功标准包括以下高级角色的几个目标：
  - 实现和管理团队
  - 安全/CISO（首席信息安全官）
  - 应用程序开发团队

如果你想进一步了解，可以考虑利用 OWASP 的 DevSecOps 成熟度模型 (DSOMM) 努力达到 1 级成熟度。 DSOMM 中有四个主要的评估标准：

- **静态深度：** 在 AppSec CI 管道中执行的静态代码扫描的覆盖面
- **动态深度：** 在 AppSec CI 管道中运行的动态扫描的覆盖面
- **强度：** 在 AppSec CI 管道中运行的安全扫描的计划频率
- **合并：** 用于处理调查结果和过程完整性的修正工作流

若要详细了解此方法以及如何在 GHAS 中实现该方法，可以下载白皮书“[使用 GitHub 实现 DevSecOps 成熟度](https://resources.github.com/whitepapers/achieving-devsecops-maturity-github/)”。

基于更广泛的公司目标和当前的 DevSecOps 成熟度级别，我们可以帮助你确定用于度量试点进度和成功与否的最佳方法。

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-1-pilot-projects"></a>{% octicon "milestone" aria-label="The milestone icon" %} 第 1 阶段：试点项目

{% note %}

{% octicon "clock" aria-label="Clock" %} **预计时间：** 预计第 1 阶段可能会持续约 2 周 - 3 个月以上。 此范围可能主要取决于公司的基础结构或系统的复杂性、用于管理/审批这些更改的内部流程，以及是否需要更大的组织流程更改来推进 GHAS。

{% endnote %}

若要开始在公司中启用 GHAS，建议从一些具有较大影响力的项目或团队开始，以便进行试点初始推出。 这将使公司内的初始组能够熟悉 GHAS，并基于 GHAS 打好坚实的基础，然后再推出到公司的其他团队。

在开始试点项目之前，建议为团队安排一些检查点会议，例如初始会议、中期审查和试点完成后的总结会议。 这些检查点会议将帮助你根据需要进行调整，并确保团队做好准备并获得支持，以成功完成试点。

这些步骤将帮助你在你的企业中启用 GHAS、开始使用其功能并查看结果。

如果你使用的是 {% data variables.product.prodname_professional_services %}，他们可以根据需要通过入职会议、GHAS 研讨会和故障排除在此过程中提供额外帮助。

### <a name="step-1-ghas-set-up--installation"></a>步骤 1：GHAS 设置和安装

{% ifversion ghes %}

如果尚未为 {% data variables.product.prodname_ghe_server %} 实例启用 GHAS，请参阅“[为企业启用 GitHub 高级安全功能](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)”。

{% endif %}

你需要通过为每个存储库或参与该项目的任何组织中的所有存储库启用 GHAS 功能，来为每个试点项目启用 GHAS。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”或“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”

绝大多数 GHAS 设置和安装都关于在企业和存储库中启用和配置代码扫描。

代码扫描可让你分析 {% data variables.product.prodname_dotcom %} 存储库中的代码，以查找安全漏洞和编码错误。 代码扫描可用于查找、会审代码中的现有问题并确定修补程序的优先级，以及帮助防止开发人员引入可能会影响生产的新问题。 有关详细信息，请参阅“[关于代码扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)”。

### <a name="step-2-set-up--data-variablesproductprodname_code_scanning_capc-"></a>步骤 2：设置 {% data variables.product.prodname_code_scanning_capc %}

{% ifversion ghes %}

若要在 {% data variables.product.prodname_ghe_server %} 实例上启用 {% data variables.product.prodname_code_scanning %}，请参阅“[为设备配置代码扫描](/admin/advanced-security/configuring-code-scanning-for-your-appliance)”。

{% endif %}

若要设置代码扫描，你必须决定是使用 [{% data variables.product.prodname_actions %}](#using-github-actions-for-code-scanning) 还是自己的[第三方 CI 系统](#using-a-third-party-ci-system-with-the-codeql-cli-for-code-scanning)运行代码扫描。

#### <a name="using--data-variablesproductprodname_actions--for--data-variablesproductprodname_code_scanning-"></a>使用 {% data variables.product.prodname_actions %} 进行 {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

若要使用适用于 {% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 设置代码扫描，需在环境中提供一个或多个自托管的 {% data variables.product.prodname_actions %} 运行器。 有关详细信息，请参阅“[设置自托管运行器](/admin/advanced-security/configuring-code-scanning-for-your-appliance#running-code-scanning-using-github-actions)”。

{% endif %}

对于 {% data variables.product.prodname_ghe_cloud %}，可以使用 [CodeQL 操作](https://github.com/github/codeql-action/)开始创建 {% data variables.product.prodname_actions %} 工作流，以在存储库上运行代码扫描。 {% data variables.product.prodname_code_scanning_capc %} 默认使用 [GitHub 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners)，但如果你打算使用自己的硬件规格托管自己的运行器，则可以自定义此设置。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners)。

有关 {% data variables.product.prodname_actions %} 的详细信息，请参阅：
  - [了解 GitHub Actions](/actions/learn-github-actions)
  - [了解 GitHub Actions](/actions/learn-github-actions/understanding-github-actions)
  - [触发工作流的事件](/actions/learn-github-actions/events-that-trigger-workflows)
  - [筛选器模式速查表](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

#### <a name="using-a-third-party-ci-system-with-the-codeql-cli-for--data-variablesproductprodname_code_scanning-"></a>结合使用第三方 CI 系统与 CodeQL CLI 以进行 {% data variables.product.prodname_code_scanning %}

如果不使用 {% data variables.product.prodname_actions %} 并且拥有自己的持续集成系统，则可以使用 CodeQL CLI 在第三方 CI 系统中执行 CodeQL 代码扫描。

有关详细信息，请参阅：
  - [关于 CI 系统中的 CodeQL 代码扫描](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)

### <a name="step-3-enable--data-variablesproductprodname_code_scanning_capc--in-repositories"></a>步骤 3：在存储库中启用 {% data variables.product.prodname_code_scanning_capc %}

如果使用分阶段方法来推出 GHAS，建议在推出计划中逐个存储库启用 {% data variables.product.prodname_code_scanning %}。 有关详细信息，请参阅“[为存储库设置代码扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)”。

如果不打算采用分阶段推出方法并希望对许多存储库启用代码扫描，可能需要为该过程编写脚本。

有关打开拉取请求以将 {% data variables.product.prodname_actions %} 工作流添加到多个存储库的脚本示例，请参阅 [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) 存储库。有关使用 PowerShell 的示例，或者对于没有 PowerShell 但希望改用 NodeJS 的团队，请参阅 [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement)。

### <a name="step-4-run-code-scans-and-review-your-results"></a>步骤 4：运行代码扫描并查看结果

在必要的存储库中启用代码扫描后，你就就可以帮助开发团队了解如何运行代码扫描和报告、查看报告以及处理结果。

#### <a name="-data-variablesproductprodname_code_scanning_capc-"></a>{% data variables.product.prodname_code_scanning_capc %}

通过代码扫描，可以在 GitHub 上找到项目代码中的漏洞和错误，以及查看、会审、了解和解决相关的 {% data variables.product.prodname_code_scanning %} 警报。

如果代码扫描在拉取请求中发现问题，你可以查看突出显示的代码并解决警报。 有关详细信息，请参阅“[会审拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)”。

如果你对存储库具有写入权限，则可以管理该存储库的代码扫描警报。 在对存储库具有写入权限的情况下，{% ifversion delete-code-scanning-alerts %}你可以查看、修复、解除或删除警报{% else %}你可以查看、修复或解除警报{% endif %}以便从容处理存储库代码中的潜在漏洞或错误。 有关详细信息，请参阅“[管理存储库的代码扫描警报](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)”。

#### <a name="generate-reports-of--data-variablesproductprodname_code_scanning--alerts"></a>生成 {% data variables.product.prodname_code_scanning %} 警报的报告

如果想要创建代码扫描警报报告，可以使用 {% data variables.product.prodname_code_scanning_capc %} API。 有关详细信息，请参阅“[{% data variables.product.prodname_code_scanning_capc %} API](/rest/reference/code-scanning)”。

有关如何使用 {% data variables.product.prodname_code_scanning_capc %} API 的示例，请参阅 [`get-code-scanning-alerts-in-org-sample`](https://github.com/jhutchings1/get-code-scanning-alerts-in-org-sample) 存储库。

### <a name="step-5-configure--data-variablesproductprodname_code_scanning_capc--to-fine-tune-your-results"></a>步骤 5：配置 {% data variables.product.prodname_code_scanning_capc %} 以微调结果

运行初始代码扫描时，你可能会发现未找到任何结果或返回的结果数量异常。 建议调整在将来扫描中标记的内容。

有关详细信息，请参阅“[配置代码扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)”。

如果你的公司想要将其他第三方代码分析工具用于 GitHub 代码扫描，可使用操作在 GitHub 中运行这些工具。 你也可以将由第三方工具生成的结果作为 SARIF 文件上传到代码扫描。 有关详细信息，请参阅“[与代码扫描集成](/code-security/code-scanning/integrating-with-code-scanning)”。

### <a name="step-6-set-up-secret-scanning"></a>步骤 6：设置机密扫描

GitHub 扫描存储库以查找已知类型的机密，以防止欺诈性地使用意外提交的机密。

{% ifversion ghes %}

若要为 {% data variables.product.prodname_ghe_server %} 实例启用机密扫描，请参阅“[为设备配置机密扫描](/admin/advanced-security/configuring-secret-scanning-for-your-appliance)”。

{% endif %}

你需要通过为每个存储库或参与该项目的任何组织中的所有存储库启用机密扫描，来为每个试点项目启用该功能。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”或“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”

若要了解如何查看和关闭已签入存储库的机密警报，请参阅“[管理来自机密扫描的警报](/code-security/secret-scanning/managing-alerts-from-secret-scanning)”。

### <a name="step-7-set-up-dependency-management"></a>步骤 7：设置依赖项管理

GitHub 可帮助你避免使用包含已知漏洞的第三方软件。 我们提供了以下工具来更新易受攻击的依赖项{% ifversion GH-advisory-db-supports-malware %}并删除恶意软件{% endif %}。

| 依赖项管理工具 | 说明 |
|----|----|
| Dependabot 警报 | 当企业检测到不安全的依赖项时，你可以跟踪存储库的依赖项并接收 Dependabot 警报。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)”。 |
| 依赖项关系图 | 依赖项图是存储在仓库中的清单和锁定文件的摘要。 它显示您的代码库所依赖的生态系统和软件包（其依赖项）以及依赖于您的项目的仓库和包（其从属项）。 有关详细信息，请参阅“[关于依赖项关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”。 |{% ifversion ghes or ghec %}
| 依赖项审查 | 如果拉取请求包含对依赖项的更改，您可以查看已更改内容摘要以及任何依赖项中是否存在已知漏洞。 有关详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”或“[拉取请求中的依赖项更改](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。 | {% endif %} {% ifversion ghec or ghes > 3.2 %}
| Dependabot 安全更新 | Dependabot 可以通过使用安全更新提出拉取请求来修复易受攻击的依赖项。 有关详细信息，请参阅“[关于 Dependabot 安全更新](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)”。 |
| Dependabot 版本更新 | 可使用 Dependabot 将所用的包更新到最新版本。 有关详细信息，请参阅“[关于 Dependabot 版本更新](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)”。 | {% endif %}

{% data reusables.dependabot.beta-security-and-version-updates-onboarding %}

### <a name="step-8-establish-a-remediation-process"></a>步骤 8：建立修正过程

一旦团队能够运行扫描、识别漏洞和依赖项并可使用每个安全功能的结果，下一步就是确保他们可以在不涉及安全团队的情况下修复在正常开发过程中发现的漏洞。

这意味着开发团队了解如何在整个开发过程中利用 GHAS 功能，且可在其正常开发工作流中运行扫描、读取报告、使用结果以及修复漏洞，而无需在开发结束时设置单独的安全阶段或让安全团队参与以了解报告/结果。

### <a name="step-9-set-up-custom-analysis-if-needed"></a>步骤 9：根据需要设置自定义分析

当所需的自定义 CodeQL 查询超出可用的默认（和社区）查询集时，自定义分析是对代码扫描的一种可选的、更深入的使用。 很少需要自定义查询。

自定义查询用于识别自定义安全警报，或通过检测某些代码模式来帮助开发人员遵循编码标准。

如果你的公司对编写自定义 CodeQL 查询感兴趣，则你的公司应满足某些要求。

如果你的团队可以提供一些你想要通过 CodeQL 找到的现有漏洞的示例，请告知 GitHub 团队，我们可以安排一个介绍性会议以回顾该语言的基础知识并讨论如何解决你的问题。 如果你想更深入地了解 CodeQL，那么我们会提供额外的参与选项来涵盖更多主题，从而使你的团队能够生成自己的查询。

你可以在 [CodeQL 文档](https://codeql.github.com/docs/codeql-overview/)中详细了解 [CodeQL 查询](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/)，也可以联系 {% data variables.product.prodname_professional_services %} 团队或销售代表。

### <a name="step-10-create--maintain-documentation"></a>步骤 10：创建并维护文档

在整个试点阶段，必须要创建和维护在公司内部进行的基础结构和过程更改的高质量内部文档，以及团队在整个推出和实现过程进展中从试点过程和配置更改中吸取的经验教训。

如果你拥有全面且完整的文档，这有助于使推出的其余阶段更像是一个可重复的过程。
出色的文档还可以确保新团队可以在整个推出过程中始终如一地加入进来，并且随着新的团队成员加入你的团队。

当推出和实现完成时，出色的文档并不会结束。 最有用的文档会随着团队增长他们使用 GHAS 的经验及其需求增长而积极地更新和发展。

除了文档之外，建议公司为团队提供明确的通道，以便在整个推出、实现和其他过程中获得支持和指导。 根据公司为支持 GHAS 的推出和实现而需要进行的更改级别，拥有得到良好支持的团队将有助于确保成功地采用开发团队的日常工作流。

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-2-organizational-buy-in--rollout-preparation"></a>{% octicon "milestone" aria-label="The milestone icon" %} 第 2 阶段：组织支持和推出准备

{% note %}

{% octicon "clock" aria-label="Clock" %} **预计时间：** 预计第 2 阶段可能会持续约 1 周 - 1 个月以上。 此范围可能主要取决于公司的内部审批流程。

{% endnote %}

此阶段的主要目标之一是确保具有组织的支持，以使 GHAS 的全面部署获得成功。

在此阶段，你的公司会审查试点项目的结果，以确定试点是否成功、可能需要做出哪些调整以及公司是否已准备好继续推出。

根据你公司的审批过程，可能需要来自执行发起人的组织支持才能继续推进。 在大多数情况下，必须要有来自团队的组织支持才能开始为公司利用 GHAS 的价值。

在进入在公司中更广泛地推出 GHAS 这一下一阶段之前，通常会根据从试点得到的经验对最初的推出计划进行修改。

还应进行任何可能影响文档的更改，以确保它是最新的，以便继续推出。

另外建议考虑培训将在推出的下一阶段引入 GHAS 的任何团队或团队成员的计划（如果尚未推出）。

### <a name="step-1-organize-results"></a>步骤 1：组织结果

在第 1 阶段完成时，团队应已在 {% data variables.product.prodname_ghe_server %} 实例上启用了 {% ifversion ghes %} GHAS 并且 {% endif %} 能够成功利用 GHAS 的所有关键功能，这可能会通过一些配置更改来优化结果。 如果你的公司在第 0 阶段明确定义了成功指标，你应能够根据这些指标进行度量，以确定试点是否成功。

在准备结果时，必须要重新审视基准指标，以确保可以根据从试点收集到的指标与原始业务目标演示增量式进度。 如需有关此信息的帮助，GitHub 可有助于确保你的公司拥有用于度量进度的正确指标。 有关可用帮助的详细信息，请参阅“[GitHub 服务和支持](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)”。

### <a name="step-2-secure-organizational-buy-in"></a>步骤 2：保护组织支持

组织支持会因各种因素而异，包括公司的规模、审批过程，甚至是推出 GHAS 所需的更改级别等等。

对于一些公司来说，获得支持是一个一次性的会议，但对于其他公司来说，该过程可能需要相当长的一段时间（可能是几周或几个月）。 支持可能需要来自执行发起人的批准，或者可能需要在团队的日常工作流中采用 GHAS。

此阶段的持续时间完全取决于公司和所需的进展速度。 建议尽可能从 GitHub 获取支持或服务，以帮助回答问题并提供任何可能需要的建议来帮助支持此过程。 有关可用帮助的详细信息，请参阅“[GitHub 服务和支持](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)”。

### <a name="step-3-revise-and-update-documentation"></a>步骤 3：修订和更新文档

查看试点项目的结果和发现以及公司其他团队的需求。 根据发现和需求分析，更新/修订文档。

我们发现，在继续向公司的其他团队推出之前，必须确保文档是最新文档。

### <a name="step-4-prepare-a-full-rollout-plan-for-your-company"></a>步骤 4：为你的公司准备全面推出计划

根据从试点项目中学到的经验教训，更新在第 0 阶段设计的推出计划。 若要准备向公司推出，请考虑团队需要的任何培训，例如使用 GHAS 提供培训、过程更改或迁移培训（如果企业正在迁移到 GitHub）。

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-3-full-organizational-rollout--change-management"></a>{% octicon "milestone" aria-label="The milestone icon" %} 第 3 阶段：完整的组织推出和变更管理

{% note %}

{% octicon "clock" aria-label="Clock" %} **预计时间：** 预计第 3 阶段可能会持续约 2 周到数月不等。 此范围可能主要取决于公司的规模、存储库/团队的数量、GHAS 推出对公司的更改级别等。

{% endnote %}

一旦公司与试点项目的结果和发现保持一致，并且第 2 阶段的所有推出准备步骤均已完成，就可以根据计划向公司进行全面推出了。

### <a name="step-1-evaluate-your-rollout-as-you-go"></a>步骤 1：在推出时评估推出

如果使用的是分阶段方法来推出 GHAS，建议在将 GHAS 推出到公司的其他团队后稍作停顿并完成简短的评估，以确保推出顺利进行。 评估可以确保团队得到适当的启用和培训，满足任何独特的 GHAS 配置需求，并且可以根据需要调整计划和文档。

### <a name="step-2-set-up-any-needed-training"></a>步骤 2：设置任何所需的训练

当将 GHAS 推出到试点项目团队以外的任何团队时，务必要确保团队接受过培训或拥有可用的培训资源，以便在需要时提供额外的支持。

以下是我们认为公司需要进一步支持的主要领域：
  - 针对 GHAS 提供培训
  - 针对不熟悉 GitHub 的客户提供培训
  - 关于如何迁移到 GitHub 的培训

{% data variables.product.prodname_professional_services_team %} 团队提供了各种培训服务、集训营和一般性建议，以帮助在整个推出和实现过程中为你的团队提供支持。 有关详细信息，请参阅“[GitHub 服务和支持](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support)”。

为了帮助为你的团队提供支持，以下是相关 GitHub 文档的概述。

有关如何启用 GHAS 的文档，请参阅：
  - [启用高级安全功能](/get-started/learning-about-github/about-github-advanced-security)
  - [管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)
  - [管理存储库的安全和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)

有关如何迁移到 GitHub 的文档，请参阅：
  - [将源代码导入 GitHub](/github/importing-your-projects-to-github/importing-source-code-to-github)

有关 GitHub 入门的文档，请参阅：
  - [入门](/get-started)

### <a name="step-3-help-your-company-manage-change"></a>步骤 3：帮助公司管理更改

在第 2 阶段的步骤 4 中，建议根据从试点项目中获得的经验教训来更新初始推出计划。 确保在实现任何必要的组织更改时继续更新计划，以便成功地将 GHAS 推出到公司。

成功的 GHAS 推出和在日常工作流中采用最佳做法取决于确保团队了解必须在其工作中包含安全性的原因。

### <a name="step-4-continued-customization"></a>步骤 4：继续自定义

GHAS 的配置和自定义在公司的企业中推出后并不完整。 随着时间的推移，应继续进行进一步的自定义配置更改，以确保 GHAS 继续支持公司不断变化的需求。

随着时间的推移，团队在 GHAS 方面变得更有经验和熟练，这将为进一步自定义创造更多机会。
