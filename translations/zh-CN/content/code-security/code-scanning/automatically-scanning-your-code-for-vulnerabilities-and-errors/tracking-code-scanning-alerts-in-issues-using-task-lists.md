---
title: 使用任务列表跟踪问题中的代码扫描警报
shortTitle: Track alerts in issues
intro: 您可以使用任务列表将代码扫描警报添加到议题中。 这样可以轻松创建包括修复警报在内的开发工作计划。
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can track {% data variables.product.prodname_code_scanning %} alerts in issues using task lists.'
versions:
  feature: code-scanning-task-lists
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
  - Issues
ms.openlocfilehash: a5112bc5982415865a47d752af4e980a2e3d12ea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099102'
---
{% data reusables.code-scanning.beta-alert-tracking-in-issues %}

## 关于跟踪议题中的 {% data variables.product.prodname_code_scanning %} 警报

{% data reusables.code-scanning.github-issues-integration %}

您还可以创建新议题来跟踪警报：
- 从 {% data variables.product.prodname_code_scanning %} 警报创建，这会自动将代码扫描警报添加到新议题的任务列表中。 有关详细信息，请参阅下面的“[从 {% data variables.product.prodname_code_scanning %} 警报创建跟踪问题](#creating-a-tracking-issue-from-a-code-scanning-alert)”。

- 像往常一样通过 API 创建，然后在议题正文中提供代码扫描链接。 您必须使用任务列表语法来创建跟踪关系： 
   - `- [ ] <full-URL- to-the-code-scanning-alert>`
   - 例如，如果将 `- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17` 添加到问题，该问题将在 `octocat-org` 组织的 `octocat-repo` 存储库的“安全性”选项卡中跟踪 ID 号为 17 的代码扫描警报。

您可以使用多个议题来跟踪同一 {% data variables.product.prodname_code_scanning %} 警报，并且议题可属于找到 {% data variables.product.prodname_code_scanning %} 警报的存储库中的不同存储库。


{% data variables.product.product_name %} 在用户界面的不同位置提供视觉提示，以指示何时跟踪议题中的 {% data variables.product.prodname_code_scanning %} 警报。

- 代码扫描警报列表页将显示在议题中跟踪的警报，以便您可以一目了然地查看哪些警报仍需要处理。

  ![代码扫描警报页面上的跟踪片](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- “tracked in（跟踪）”部分也会显示在相应的警报页面中。 

  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![代码扫描警报页面上的跟踪部分](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png) {% else %} ![代码扫描警报页面上的跟踪部分](/assets/images/enterprise/3.4/repository/code-scanning-alert-tracked-in-pill.png) {% endif %}

- 在跟踪议题上，{% data variables.product.prodname_dotcom %} 会在任务列表和悬停卡上显示安全徽章图标。 
  
  {% note %}

  只有对存储库具有写入权限的用户才能看到议题中警报的展开 URL 以及悬停卡片。 对于对存储库具有读取权限或根本没有权限的用户，警报将显示为纯 URL。

  {% endnote %}
  
  图标的颜色为灰色，因为警报在每个分支上的状态为“打开”或“关闭”。 议题跟踪警报，因此警报在议题中不能具有单个打开/关闭状态。 如果一个分支上的警报已关闭，则图标颜色不变。

  ![跟踪议题中的悬停卡](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

如果更改议题中相应任务列表项的复选框状态（选中/未选中），则跟踪的警报状态不会更改。

## 从代码扫描警报创建跟踪议题

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %} {% ifversion fpt or ghes or ghae %} {% data reusables.code-scanning.explore-alert %}
1. （可选）若要查找要跟踪的警报，可以使用自由文本搜索或下拉菜单来筛选和定位警报。 有关详细信息，请参阅“[管理存储库的代码扫描警报](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts)”。
{% endif %}
1. 在页面顶部的右侧，单击“创建问题”。 
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![为代码扫描警报创建跟踪问题](/assets/images/help/repository/code-scanning-create-issue-for-alert.png) {% else %} ![为代码扫描警报创建跟踪问题](/assets/images/enterprise/3.4/repository/code-scanning-create-issue-for-alert.png) {% endif %} {% data variables.product.prodname_dotcom %} 自动创建问题以跟踪警报并将警报添加为任务列表项。
   {% data variables.product.prodname_dotcom %} 会预填议题：
   - 标题包含 {% data variables.product.prodname_code_scanning %} 警报的名称。
   - 正文包含任务列表项，其中包含 {% data variables.product.prodname_code_scanning %} 警报的完整 URL。 
2. （可选）编辑议题的标题和正文。
   {% warning %}

    警告：你可能需要编辑问题的标题，因为它可能会暴露安全信息。 您还可以编辑议题的正文，但不要编辑任务列表项，否则议题将不再跟踪警报。
   {% endwarning %}

   ![代码扫描警报的新跟踪议题](/assets/images/help/repository/code-scanning-new-tracking-issue.png)
3. 单击“提交新问题”。
