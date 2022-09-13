---
title: 管理存储库的代码扫描警报
shortTitle: Manage alerts
intro: '从安全视图中，针对项目代码中的潜在漏洞或错误，{% ifversion delete-code-scanning-alerts %}可查看、修复、关闭或删除警报{% else %}可查看、修复或关闭警报{% endif %}。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
ms.openlocfilehash: b672af79096c1f52a0670cd747ef159f071a3d07
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147693325'
---
{% data reusables.code-scanning.beta %}

## 查看仓库的警报

任何对仓库有读取权限的人都可以查看拉取请求上的 {% data variables.product.prodname_code_scanning %} 注释。 有关详细信息，请参阅“[会审拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”。

你需要写入权限才能在“安全”选项卡上查看存储库所有警报的摘要。

默认情况下，将筛选代码扫描警报页面，以仅显示存储库默认分支的警报。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. （可选）使用自由文本搜索框或下拉菜单来筛选警报。 例如，您可以通过用于识别警报的工具进行过滤。
   ![按工具筛选](/assets/images/help/repository/code-scanning-filter-by-tool.png) {% data reusables.code-scanning.explore-alert %} ![警报摘要](/assets/images/help/repository/code-scanning-click-alert.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} ![警报中“受影响的分支”部分](/assets/images/help/repository/code-scanning-affected-branches.png){% endif %}
1. （可选）如果警报突出显示数据流的问题，请单击“显示路径”以显示从数据源到使用它的接收者的路径。
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![警报上的“显示路径”链接](/assets/images/help/repository/code-scanning-show-paths.png) {% else %} ![警报上的“显示路径”链接](/assets/images/enterprise/3.4/repository/code-scanning-show-paths.png) {% endif %}
2. 来自 {% data variables.product.prodname_codeql %} 分析的警报包括对问题的描述。 单击“显示更多”以获取有关如何修复代码的指导。
   ![警报的详细信息](/assets/images/help/repository/code-scanning-alert-details.png)

有关详细信息，请参阅“[关于 {% data variables.product.prodname_code_scanning %} 警报](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts)”。

{% note %}

注意：对于 {% data variables.product.prodname_codeql %} 的 {% data variables.product.prodname_code_scanning %} 分析，你可以在存储库的 {% data variables.product.prodname_code_scanning %} 警报列表顶部的标头中看到有关最新运行的信息。 

例如，您可以看到上次扫描运行的时间，所分析的代码行数与您仓库中的代码行总数的比较， 以及生成的警报总数。
  ![UI 横幅](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}

## 筛选 {% data variables.product.prodname_code_scanning %} 警报

您可以筛选 {% data variables.product.prodname_code_scanning %} 警报视图中显示的警报。 如果存在许多警报，这将非常有用，因为您可以专注于特定类型的警报。 有一些预定义的筛选器和一系列关键字可用于优化显示的警报列表。 

- 要使用预定义的筛选器，请单击“筛选器”或警报列表标题中显示的筛选器，然后从下拉列表中选择一个筛选器。
  {% ifversion fpt or ghes or ghec %}![预定义的筛选器](/assets/images/help/repository/code-scanning-predefined-filters.png) {% else %}![预定义的筛选器](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- 要使用关键字，请直接在筛选器文本框中键入，或者：
  1. 在筛选器文本框中单击以显示所有可用筛选器关键字的列表。
  2. 单击要使用的关键字，然后从下拉列表中选择值。
  ![关键字筛选器列表](/assets/images/help/repository/code-scanning-filter-keywords.png)

使用关键字筛选器的好处是，下拉列表中仅显示带有结果的值。 这样可以很容易地避免设置没有结果的筛选器。

如果输入多个筛选器，视图将显示与所有这些筛选器匹配的警报。 例如，`is:closed severity:high branch:main` 仅显示 `main` 分支上存在的已关闭高严重性警报。 例外情况是与 refs 相关的筛选器（`ref`、`branch` 和 `pr`）：`is:open branch:main branch:next` 将显示来自 `main` 分支和 `next` 分支的开放式警报。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}

你可以在 `tag` 筛选器前面加上 `-` 以排除带有该标记的结果。 例如，`-tag:style` 仅显示没有 `style` 标记{% ifversion codeql-ml-queries %}的警报，而 `-tag:experimental` 将忽略所有实验性警报。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_code_scanning %} 警报](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)”。{% else %}。{% endif %}

{% endif %}

### 将结果限制为仅应用程序代码

可以使用“仅应用程序代码中的警报”筛选器或 `autofilter:true` 关键字和值，将结果限于应用程序代码中的警报。 有关不是应用程序代码的代码类型的详细信息，请参阅上面的[关于不在应用程序代码中的警报的标签](#about-labels-for-alerts-that-are-not-found-in-application-code)。

{% ifversion fpt or ghes or ghec %}

## 搜索 {% data variables.product.prodname_code_scanning %} 警报

您可以搜索警报列表。 如果仓库中存在大量警报，或者您不知道警报的确切名称，这很有用。 {% data variables.product.product_name %} 可执行以下自由文本搜索：
- 警报的名称
- 警报详细信息（这也包括默认情况下在“显示更多”可折叠部分中隐藏的信息）{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![搜索中使用的警报信息](/assets/images/help/repository/code-scanning-free-text-search-areas.png) {% else %} ![搜索中使用的警报信息](/assets/images/enterprise/3.4/repository/code-scanning-free-text-search-areas.png) {% endif %}

| 支持的搜索 | 语法示例 | 结果 |
| ---- | ---- | ---- |
| 单字搜索 | `injection` | 返回包含单词 `injection` 的所有警报 |
| 多字词搜索 | `sql injection` | 返回包含 `sql` 或 `injection` 的所有警报 |
| 精确匹配搜索</br>（使用双引号） |  `"sql injection"` | 返回包含确切短语 `sql injection` 的所有警报 |
| OR 搜索 | `sql OR injection` | 返回包含 `sql` 或 `injection` 的所有警报 |
| AND 搜索 | `sql AND injection` | 返回包含单词 `sql` 和 `injection` 的所有警报 | 

{% tip %}

**提示：** 
- 多字词搜索等同于 OR 搜索。
- AND 搜索将返回以任何顺序在警报名称或详细信息中的“任意位置”找到搜索词的结果。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. 在“筛选器”下拉菜单右侧，在自由文本搜索框中键入关键字以进行搜索。
  ![自由文本搜索框](/assets/images/help/repository/code-scanning-search-alerts.png)
2. 按 <kbd>return</kbd>。 警报列表将包含与搜索条件匹配的未处理 {% data variables.product.prodname_code_scanning %} 警报。

{% endif %}

{% ifversion code-scanning-task-lists %}
## 跟踪议题中的 {% data variables.product.prodname_code_scanning %} 警报

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} {% data reusables.code-scanning.github-issues-integration %} {% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## 修复警报

任何对仓库具有写入权限的人都可以通过提交对代码的更正来修复警报。 如果仓库已安排对拉取请求运行 {% data variables.product.prodname_code_scanning %}，则最好通过拉取请求提交您的更正。 这将触发对更改的 {% data variables.product.prodname_code_scanning %} 分析，并测试您的修复是否会带来任何新的问题。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)”和“[会审拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”。

如果你有存储库的写入权限，则可以通过查看警报摘要并单击“已关闭”来查看已修复的警报。 有关详细信息，请参阅“[查看存储库的警报](#viewing-the-alerts-for-a-repository)”。 “Closed（已关闭）”列表显示已修复的警报和用户已忽略的警报。

可使用自由文本搜索或筛选器显示警报子集，然后依次将所有匹配的警报标记为已关闭。 

警报只能在一个分支中修复。 您可以在警报摘要上使用“Branch（分支）”过滤器检查警报是否是在特定分支中修复的。

![按分支过滤警报](/assets/images/help/repository/code-scanning-branch-filter.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% note %}

注意：如果使用多个配置运行代码扫描，则有时警报会有多个分析源。 除非定期运行所有配置，否则可能会看到在一个分析源中已修复但在另一个分析源中未修复的警报。 有关详细信息，请参阅[关于分析源](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-analysis-origins)。

{% endnote %} {% endif %}
## 关闭{% ifversion delete-code-scanning-alerts %}或删除{% endif %}警报

有两种方法可以关闭警报。 您可以修复代码中的问题，也可以忽略警报。 {% ifversion delete-code-scanning-alerts %}或者，如果你拥有存储库的管理员权限，则可删除警报。 删除警报适用于以下情况：您设置了 {% data variables.product.prodname_code_scanning %} 工具，然后决定删除它，或者您配置了 {% data variables.product.prodname_codeql %} 分析，但查询集超出您的需求，于是您从工具中删除了某些查询。 在这两种情况下，删除警报允许您清理 {% data variables.product.prodname_code_scanning %} 结果。 可以从“安全性”选项卡中的摘要列表中删除警报。{% endif %}

取消显示警报是关闭你认为不需要修复的警报的一种方法。 {% data reusables.code-scanning.close-alert-examples %} 你可以从代码中的 {% data variables.product.prodname_code_scanning %} 注释取消显示警报，或者从“安全”选项卡中的摘要列表取消显示警报。

当您忽略警报时：

- 它在所有分支中被忽略。
- 警报将从项目的当前警报数中删除。
- 警报被移动到警报摘要中的“Closed（已关闭）”列表，需要时您可以在其中重新打开它。
- 会记录关闭警报的原因。{% ifversion comment-dismissed-code-scanning-alert %} 
- （可选）可对关闭操作进行注释以记录警报关闭操作的上下文。{% endif %}
- {% data variables.product.prodname_code_scanning %} 下次运行时，相同的代码将不会生成警报。

{% ifversion delete-code-scanning-alerts %}删除警报时：

- 它在所有分支中被删除。
- 警报将从项目的当前警报数中删除。
- 它不会添加到警报摘要中的“已关闭”列表。
- 如果生成警报的代码保持不变，并且相同的 {% data variables.product.prodname_code_scanning %} 工具在不更改任何配置的情况下再次运行，则该警报将再次显示在你的分析结果中。{% endif %}

若要关闭{% ifversion delete-code-scanning-alerts %}或删除{% endif %}警报：

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}{% ifversion delete-code-scanning-alerts %}
1. 如果你拥有存储库管理员权限，并且想要删除此 {% data variables.product.prodname_code_scanning %} 工具的警报，请选中部分或全部复选框，然后单击“删除”。

   ![删除警报](/assets/images/help/repository/code-scanning-delete-alerts.png)

   （可选）可使用自由文本搜索或筛选器显示警报子集，然后一次删除所有匹配的警报。 例如，如果您从 {% data variables.product.prodname_codeql %} 分析中删除了查询，您可以使用“Rule（规则）”过滤器仅列出该查询的警报，然后选择并删除所有这些警报。

{% ifversion ghes or ghae %} ![按规则筛选警报](/assets/images/help/repository/code-scanning-filter-by-rule.png) {% else %} ![按规则筛选警报](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png) {% endif %}{% endif %}
1. 如果要忽略警报，请务必先了解警报，以便选择正确的忽略原因。 单击要了解的警报。
![从摘要列表中打开警报](/assets/images/help/repository/code-scanning-click-alert.png) {%- ifversion comment-dismissed-code-scanning-alert %}
1. 查看警报，然后单击“消除警报”并选择或键入关闭警报的原因。 
  ![代码扫描警报的屏幕截图，其中突出显示了用于选择关闭原因的下拉列表](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {%- else %}
1. 查看警报，然后单击“取消显示”并选择取消显示警报的原因。
  ![选择消除警报的原因](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {%- endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### 一次忽略多个警报

如果项目有多个由于相同原因要忽略的警报，您可以从警报摘要中批量忽略它们。 通常，您需要过滤列表，然后忽略所有匹配的警报。 例如，您可能想要忽略项目中所有已标记为特定通用缺陷枚举 (CWE) 漏洞的当前警报。

## 延伸阅读

- [会审拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)
- [为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)
- [关于与 {% data variables.product.prodname_code_scanning %} 的集成](/code-security/secure-coding/about-integration-with-code-scanning)
