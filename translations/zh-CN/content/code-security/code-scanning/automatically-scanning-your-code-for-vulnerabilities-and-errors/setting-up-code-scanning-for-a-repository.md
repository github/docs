---
title: 为仓库设置代码扫描
shortTitle: Set up code scanning
intro: '您可以通过添加工作流程到仓库来设置 {% data variables.product.prodname_code_scanning %}。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
ms.openlocfilehash: 8abfb992c3369242501350be20cf8e465ce090fa
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161132'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## 设置 {% data variables.product.prodname_code_scanning %} 的选项

在仓库级别决定如何生成 {% data variables.product.prodname_code_scanning %} 警报，以及使用哪些工具。 {% data variables.product.product_name %} 对 {% data variables.product.prodname_codeql %} 分析提供完全集成的支持，还支持使用第三方工具进行分析。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning#about-tools-for-code-scanning)”。

{% data reusables.code-scanning.enabling-options %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% ifversion ghes or ghae %} {% note %}

注意：如果要使用 CodeQL 分析，请注意本文介绍了此版 {% data variables.product.product_name %} 的初始发行版中包含的 CodeQL 操作版本和相关 CodeQL CLI 捆绑包中可用的功能。 如果企业使用较新版本的 CodeQL 操作，请参阅 [{% data variables.product.prodname_ghe_cloud %} 一文](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)，了解有关最新功能的信息。 {% ifversion not ghae %}有关使用最新版本的信息，请参阅“[为设备配置代码扫描](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)”。{% endif %}

{% endnote %} {% endif %}

{% ifversion ghae %}
## 先决条件

在为存储库设置 {% data variables.product.prodname_code_scanning %} 之前，必须确保存储库至少有一个自托管 {% data variables.product.prodname_actions %} 运行器可用。

企业所有者、组织和存储库管理员可以添加自托管运行器。 有关自托管运行器的信息，请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”和“[添加自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。
{% endif %}

{% ifversion fpt or ghec %}
## 使用入门工作流设置 {% data variables.product.prodname_code_scanning %}

{% data reusables.advanced-security.starter-workflows-beta %}

{% ifversion ghes or ghae %} {% note %}

注意：本文介绍了此版 {% data variables.product.product_name %} 的初始发行版中包含的 CodeQL 操作版本和相关 CodeQL CLI 捆绑包中可用的功能。 如果企业使用较新版本的 CodeQL 操作，请参阅 [{% data variables.product.prodname_ghe_cloud %} 一文](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)，了解有关最新功能的信息。 {% ifversion not ghae %}有关使用最新版本的信息，请参阅“[为设备配置代码扫描](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)”。{% endif %}

{% endnote %} {% endif %}

{% data reusables.advanced-security.starter-workflow-overview %} {% data variables.product.prodname_code_scanning_capc %} 入门工作流仅在启用了 {% data variables.product.prodname_code_scanning %} 时才可用于您的存储库。

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 如果存储库已设置并运行至少一个工作流，请单击“新建工作流”，然后转到步骤 5。 如果当前没有为存储库配置工作流程，请转到下一步。
   ![“新建工作流”按钮的屏幕截图](/assets/images/help/security/actions-new-workflow-button.png)
1. 向下滚动到“安全性”类别，然后在要配置的工作流下单击“配置”，或单击“查看全部”以查看所有可用的安全工作流 。
   ![Actions 工作流安全性部分的屏幕截图](/assets/images/help/security/actions-workflows-security-section.png)
1. 在工作流页面的右窗格中，单击“文档”，然后根据需要按屏幕上的说明定制工作流。
   ![初学者工作流的“文档”选项卡的屏幕截图](/assets/images/help/security/actions-workflows-documentation.png) 有关详细信息，请参阅“[使用初学者工作流](/actions/using-workflows/using-starter-workflows#using-starter-workflows)”和“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)”。

{% endif %}

## 手动设置 {% data variables.product.prodname_code_scanning %}

{% ifversion fpt %}

可以在具有写入权限的任何公共存储库中设置 {% data variables.product.prodname_code_scanning %}。

{% endif %}

{% data reusables.code-scanning.billing %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. 在“{% data variables.product.prodname_code_scanning_capc %} 警报”右侧，单击“设置 {% data variables.product.prodname_code_scanning %}”。{% ifversion ghec or ghes or ghae %}如果 {% data variables.product.prodname_code_scanning %} 缺失，则需要让组织所有者或存储库管理员启用 {% data variables.product.prodname_GH_advanced_security %}。{% endif %}有关详细信息，请参阅“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”或“[管理存储库的安全性和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。
 ![安全概览中“{% data variables.product.prodname_code_scanning_capc %}”右侧的“设置 {% data variables.product.prodname_code_scanning %}”按钮](/assets/images/help/security/overview-set-up-code-scanning.png)
4. 在“开始使用 {% data variables.product.prodname_code_scanning %}”下，单击 {% data variables.code-scanning.codeql_workflow %} 或第三方工作流上的“设置此工作流”。
 ![“开始使用 {% data variables.product.prodname_code_scanning %}”标题下的“设置此工作流”按钮](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)只有在工作流与在存储库中检测到的编程语言相关时，才会显示工作流。 {% data variables.code-scanning.codeql_workflow %} 始终显示，但仅在 {% data variables.product.prodname_codeql %} 分析支持存储库中存在的语言时才启用“设置此工作流”按钮。
5. 要自定义 {% data variables.product.prodname_code_scanning %} 扫描代码的方式，请编辑工作流程。

   通常，可以提交 {% data variables.code-scanning.codeql_workflow %} 而无需对其进行任何更改。 但是，许多第三方工作流需要额外的配置，因此请在提交之前读取工作流中的注释。

   有关详细信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)”。
6. 使用“开始提交”下拉列表，然后键入提交消息。
 ![开始提交](/assets/images/help/repository/start-commit-commit-new-file.png)
7. 选择是直接提交到默认分支，还是创建新分支并启动拉取请求。
 ![选择提交位置](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. 单击“提交新文件”或“建议新文件”。

在默认 {% data variables.code-scanning.codeql_workflow %} 中，{% data variables.product.prodname_code_scanning %} 配置为在每次将更改推送到默认分支或任何受保护分支或者对默认分支提出拉取请求时分析代码。 因此，{% data variables.product.prodname_code_scanning %} 将立即开始。

用于代码扫描的 `on:pull_request` 和 `on:push` 触发器各自用于不同的目的。 有关详细信息，请参阅“[扫描拉取请求](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-pull-requests)”和“[推送时扫描](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)”。
## 批量设置 {% data variables.product.prodname_code_scanning %}

您可以使用脚本在多个仓库中一次设置 {% data variables.product.prodname_code_scanning %}。 如果要使用脚本发起将 {% data variables.product.prodname_actions %} 工作流添加到多个存储库的拉取请求，请参阅 [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) 存储库，了解使用 PowerShell 的示例，或者对于没有 PowerShell 但希望改用 NodeJS 的团队，请参阅 [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement)。

## 查看来自 {% data variables.product.prodname_code_scanning %} 的日志记录输出

为仓库设置 {% data variables.product.prodname_code_scanning %} 后，您可以关注操作运行时的输出。

{% data reusables.repositories.actions-tab %}

  You can view the run status of {% data variables.product.prodname_code_scanning %} and get notifications for completed runs. For more information, see "<a href="/actions/configuring-and-managing-workflows/managing-a-workflow-run">Managing a workflow run</a>" and "<a href="/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options">Configuring notifications</a>." 条目的文本是提交消息的标题。

  ![显示 {% data variables.product.prodname_code_scanning %} 工作流的操作列表](/assets/images/help/repository/code-scanning-actions-list.png)

1. 单击 {% data variables.product.prodname_code_scanning %} 工作流程的项目。

1. 单击左侧的作业名称。 例如，“分析(语言)”。

  ![{% data variables.product.prodname_code_scanning %} 工作流程的日志输出](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. 查看此工作流运行时操作的日志记录输出。

1. 在所有作业完成后，您可以查看已识别的任何 {% data variables.product.prodname_code_scanning %} 警报的详细信息。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)”。

{% note %}

注意：如果发起将 {% data variables.product.prodname_code_scanning %} 工作流添加到存储库的拉取请求，则在合并拉取请求之前，来自该拉取请求的警报不会直接显示在 {% data variables.product.prodname_code_scanning_capc %} 页面上。 如果发现任何警报，你可以在合并拉取请求之前查看这些警报，方法是在 {% data variables.product.prodname_code_scanning_capc %} 页面的横幅中单击“发现 n 条警报”的链接。

![单击“发现的 n 条警报”链接](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

## 了解拉取请求检查

设置在拉取请求上运行的每个 {% data variables.product.prodname_code_scanning %} 工作流程始终有至少两个条目列在拉取请求的检查部分中。 工作流程中每个分析作业有一个条目，最后还有一个对应于分析结果的条目。

{% data variables.product.prodname_code_scanning %} 分析检查的名称采用形式："TOOL NAME / JOB NAME (TRIGGER)"。 例如，对于 {% data variables.product.prodname_codeql %}，C++ 代码的分析有条目 "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)"。 可单击 {% data variables.product.prodname_code_scanning %} 分析条目上的“详细信息”来查看日志记录数据。 这允许您在分析作业失败时调试问题。 例如，对于编译的语言的 {% data variables.product.prodname_code_scanning %} 分析，如果操作无法生成代码，则可能会发生这种情况。

  ![{% data variables.product.prodname_code_scanning %} 拉取请求检查](/assets/images/help/repository/code-scanning-pr-checks.png)

当 {% data variables.product.prodname_code_scanning %} 作业完成后， {% data variables.product.prodname_dotcom %} 检查拉取请求是否添加了任何警报，并将“{% data variables.product.prodname_code_scanning_capc %} 结果/工具名称”条目添加到检查列表中。 在执行至少一次 {% data variables.product.prodname_code_scanning %} 后，可单击“详细信息”查看分析结果。

{% ifversion ghes < 3.5 or ghae %} 如果使用拉取请求将 {% data variables.product.prodname_code_scanning %} 添加到存储库，则单击“{% data variables.product.prodname_code_scanning_capc %} 结果/工具名称”检查中的“详细信息”时，最初会看到“找不到分析”消息。

  ![找不到提交消息的分析](/assets/images/enterprise/3.4/repository/code-scanning-analysis-not-found.png)

该表列出了一个或多个类别。 每个类别都与针对相同工具和提交的特定分析相关，这些分析在不同的语言或代码的不同部分上执行。 对于每个类别，该表显示了 {% data variables.product.prodname_code_scanning %} 尝试比较以确定在拉取请求中引入或修复了哪些警报的两个分析。

例如，在上面的屏幕截图中，{% data variables.product.prodname_code_scanning %} 找到了针对拉取请求的合并提交的分析，但没有针对主分支头部的分析。

### “未找到分析”消息出现的原因


在 {% data variables.product.prodname_code_scanning %} 分析拉取请求中的代码后，它需要将主题分支（用于创建拉取请求的分支）的分析与基本分支（要合并拉取请求的分支）的分析进行比较。 这允许 {% data variables.product.prodname_code_scanning %} 计算哪些警报是拉取请求新近引入的，哪些是基础分支中已经存在的，以及是否有任何现有的警报通过拉取请求中的更改来修复。 最初，如果使用拉取请求将 {% data variables.product.prodname_code_scanning %} 添加到仓库，则尚未分析基础分支，因此无法计算这些详细信息。 在这种情况下，单击拉取请求的结果检查时，你将看到“找不到分析”消息。

在其他情况下，可能没有分析对拉取请求的基础分支的最新提交。 其中包括：

* 已针对默认分支以外的分支提出拉取请求，并且尚未分析此分支。

  若要检查是否扫描了分支，请转到 {% data variables.product.prodname_code_scanning_capc %} 页面，单击“分支”下拉菜单并选择相关分支。

  ![从 Branch（分支）下拉菜单中选择一个分支](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  在这种情况下，解决方案是将基本分支的名称添加到该分支上 {% data variables.product.prodname_code_scanning %} 工作流的 `on:push` 和 `on:pull_request` 规格中，然后进行更改以更新要扫描的开放拉取请求。

* 目前正在分析拉取请求的基础分支上的最新提交，分析尚未提供。

  等待几分钟，然后将更改推送到拉取请求以重新触发 {% data variables.product.prodname_code_scanning %}。

* 在分析基础分支上的最新提交时发生了错误，且该提交的分析不可用。

  将一个微小的更改合并到基础分支以触发此最新提交的 {% data variables.product.prodname_code_scanning %}，然后将更改推送到拉取请求以重新触发 {% data variables.product.prodname_code_scanning %}。

{% endif %}

## 后续步骤

设置 {% data variables.product.prodname_code_scanning %} 并允许其操作完成后，您可以：

- 查看为此仓库生成的所有 {% data variables.product.prodname_code_scanning %} 警报。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。
- 查看在设置 {% data variables.product.prodname_code_scanning %} 后提交的拉取请求生成的任何警报。 有关详细信息，请参阅“[会审拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”。
- 为已完成的运行设置通知。 有关详细信息，请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)”。
- 查看由 {% data variables.product.prodname_code_scanning %} 分析生成的日志。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_code_scanning %} 日志](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs)”。
- 调查初始设置 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 时发生的任何问题。 有关详细信息，请参阅“[排查 {% data variables.product.prodname_codeql %} 工作流的问题](/code-security/secure-coding/troubleshooting-the-codeql-workflow)”。
- 自定义 {% data variables.product.prodname_code_scanning %} 如何扫描您的仓库中的代码。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)”。
