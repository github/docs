---
title: 查看和更新 Dependabot 警报
intro: '如果 {% data variables.product.product_name %} 发现项目中存在不安全的依赖项，你可以在存储库的 Dependabot 警报选项卡中查看详细信息。 然后，你可以更新项目以解决或忽略警报。'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 8bf53452bd6518f5525d67994f3e6711ef33de0d
ms.sourcegitcommit: 7e2b5213fd15d91222725ecab5ee28cef378d3ad
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185549'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

存储库的 {% data variables.product.prodname_dependabot_alerts %} 选项卡列出所有打开和关闭的 {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes %} 以及对应的 {% data variables.product.prodname_dependabot_security_updates %}{% endif %}。 你可以{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}按包、生态系统或清单筛选警报。 你还可以 {% endif %} 对警报列表进行排序，单击特定警报以获取更多详细信息。 {% ifversion dependabot-bulk-alerts %}你还可以逐个或通过一次选择多个警报来消除或重新打开警报。{% else %}你还可以消除或重新打开警报。 {% endif %}有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。 

{% ifversion fpt or ghec or ghes %} 你可以为任何使用 {% data variables.product.prodname_dependabot_alerts %} 和依赖项关系图的存储库启用自动安全更新程序。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)”。
{% endif %}

{% ifversion fpt or ghec or ghes %}
## 关于仓库中有漏洞的依赖项的更新

在我们检测到你的代码库正在使用具有已知安全风险的依赖项时，{% data variables.product.product_name %} 会生成 {% data variables.product.prodname_dependabot_alerts %}。 对于启用了 {% data variables.product.prodname_dependabot_security_updates %} 的仓库，当 {% data variables.product.product_name %} 在默认分支中检测到有漏洞的依赖项时，{% data variables.product.prodname_dependabot %} 会创建拉取请求来修复它。 拉取请求会将依赖项升级到避免漏洞所需的最低安全版本。

每个 {% data variables.product.prodname_dependabot %} 警报都有一个唯一的数字标识符，{% data variables.product.prodname_dependabot_alerts %} 选项卡列出了每个检测到的漏洞的警报。 旧版 {% data variables.product.prodname_dependabot_alerts %} 按依赖项对漏洞进行分组，并为每个依赖项生成一个警报。 如果导航到旧版 {% data variables.product.prodname_dependabot %} 警报，则会将您重定向到为该包筛选的 {% data variables.product.prodname_dependabot_alerts %} 选项卡。 {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} 可以使用用户界面上提供的各种筛选器和排序选项对 {% data variables.product.prodname_dependabot_alerts %} 进行筛选和排序。 有关详细信息，请参阅下面的“[确定 {% data variables.product.prodname_dependabot_alerts %} 优先级](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)”。

## 确定 {% data variables.product.prodname_dependabot_alerts %} 优先级

{% data variables.product.company_short %} 可帮助确定修复 {% data variables.product.prodname_dependabot_alerts %} 的优先级。 {% ifversion dependabot-most-important-sort-option %}默认情况下，{% data variables.product.prodname_dependabot_alerts %} 按重要性进行排序。 “最重要”排序顺序有助于确定需首先处理的 {% data variables.product.prodname_dependabot_alerts %}。 警报根据其潜在影响、可操作性和相关性进行排序。 优先级计算正在逐步完善，包括 CVSS 分数、依赖范围以及是否为警报找到易受攻击的函数调用等因素。

![“排序”下拉列表的屏幕截图，显示了“最重要”排序](/assets/images/help/dependabot/dependabot-alerts-sort-dropdown.png) {% endif %}

{% data reusables.dependabot.dependabot-alerts-filters %}

除了通过搜索栏提供的筛选器之外，还可以使用警报列表顶部的下拉菜单对 {% data variables.product.prodname_dependabot_alerts %} 进行排序和筛选。 搜索栏还允许对警报和相关安全公告进行全文搜索。 可以搜索安全公告名称或说明的一部分，以返回存储库中与该安全公告相关的警报。 例如，搜索 `yaml.load() API could execute arbitrary code` 会返回链接到“[PyYAML 未安全地反序列化 YAML 字符串，导致任意代码执行](https://github.com/advisories/GHSA-rprw-h62v-c2w7)”的 {% data variables.product.prodname_dependabot_alerts %}，因为该搜索字符串出现在公告说明中。

{% endif %}

{% ifversion dependabot-bulk-alerts %}![{% data variables.product.prodname_dependabot_alerts %} 选项卡中筛选器和排序菜单的屏幕截图](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% elsif ghes = 3.5 %} 可以在列表顶部的下拉菜单中选择筛选器，然后单击要应用的筛选器。
   ![{% data variables.product.prodname_dependabot_alerts %} 选项卡中筛选器和排序菜单的屏幕截图](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}

{% ifversion dependabot-alerts-development-label %}
## 依赖项范围的受支持生态系统和清单

{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

作为开发依赖项列出的包的警报在 {% data variables.product.prodname_dependabot_alerts %} 页上用 `Development` 标签标记，还可以通过 `scope` 筛选器进行筛选。

![显示警报列表中的“开发”标签的屏幕截图](/assets/images/help/repository/dependabot-alerts-development-label.png)

开发范围包警报的警报详细信息页显示包含 `Development` 标签的“标记”部分。

![显示警报详细信息页中的“标记”部分的屏幕截图](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## 关于检测对易受攻击函数的调用

{% data reusables.dependabot.vulnerable-calls-beta %}

当 {% data variables.product.prodname_dependabot %} 告知存储库使用易受攻击的依赖项时，需要确定易受攻击的函数，并检查是否正在使用它们。 获取此信息后，可以确定升级到依赖项的安全版本的紧迫程度。 

对于支持的语言，{% data variables.product.prodname_dependabot %} 会自动检测你是否使用易受攻击的函数，并将标签“易受攻击的调用”添加到受影响的警报。 可以在 {% data variables.product.prodname_dependabot_alerts %} 视图中使用此信息来更有效地对修正工作进行会审和确定优先级。

{% note %}

注意：在 beta 版本中，此功能仅适用于在 2022 年 4 月 14 日之后创建的新 Python 公告，以及一部分历史 Python 公告。 {% data variables.product.prodname_dotcom %} 正在努力在滚动添加的其他历史 Python 公告中回填数据。 易受攻击的调用仅在 {% data variables.product.prodname_dependabot_alerts %} 页上突出显示。

{% endnote %}

![屏幕截图显示带有“易受攻击的调用”标签的警报](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

可以在搜索字段中使用 `has:vulnerable-calls` 筛选器进行筛选，以仅显示 {% data variables.product.prodname_dependabot %} 检测到至少一次对易受攻击的函数的调用的警报。

对于检测到易受攻击的调用的警报，警报详细信息页显示其他信息：

- 显示函数使用位置的一个或多个代码块。
- 列出函数本身的注释，其中包含指向调用函数的行的链接。

![屏幕截图显示带有“易受攻击的调用”标签的警报的警报详细信息页](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

有关详细信息，请参阅下面的“[查看和修复警报](#reviewing-and-fixing-alerts)”。

{% endif %}

## 查看 {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. （可选）若要筛选警报，请在下拉菜单中选择筛选器，然后单击要应用的筛选器。 您还可以在搜索栏中键入过滤条件。 有关对警报进行筛选和排序的详细信息，请参阅“[确定 {% data variables.product.prodname_dependabot_alerts %} 优先级](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-)”。
{%- ifversion dependabot-bulk-alerts %}![{% data variables.product.prodname_dependabot_alerts %} 选项卡中筛选器和排序菜单的屏幕截图](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %}![{% data variables.product.prodname_dependabot_alerts %} 选项卡中筛选器和排序菜单的屏幕截图](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. 单击要查看的警报。{% ifversion dependabot-bulk-alerts %}![在警报列表中选择的警报](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %}![在警报列表中选择的警报](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. 单击您想要查看的警报。
  ![在警报列表中选择的警报](/assets/images/help/graphs/click-alert-in-alerts-list.png) {% endif %}

## 查看和修复警报

请务必确保所有依赖项都没有任何安全弱点。 当 {% data variables.product.prodname_dependabot %} 在依赖项中发现漏洞{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}时，应评估项目的暴露级别并确定保护应用程序的修正步骤。

如果依赖项的修补版本可用，则可以生成 {% data variables.product.prodname_dependabot %} 拉取请求，以直接从 {% data variables.product.prodname_dependabot %} 警报更新此依赖项。 如果启用了 {% data variables.product.prodname_dependabot_security_updates %}，拉取请求可能会链接到 Dependabot 警报。 

如果修补版本不可用，或者无法更新到安全版本，{% data variables.product.prodname_dependabot %} 会共享其他信息，以帮助确定后续步骤。 单击查看 {% data variables.product.prodname_dependabot %} 警报时，可以看到依赖项的安全公告的完整详细信息，包括受影响的函数。 然后，可以检查代码是否调用受影响的函数。 此信息可以帮助你进一步评估风险级别，并确定解决方法，或者是否能够接受安全咨询所代表的风险。

{% ifversion dependabot-alerts-vulnerable-calls %}

对于支持的语言，{% data variables.product.prodname_dependabot %} 可检测对易受攻击函数的调用。 查看标记为“易受攻击的调用”的警报时，详细信息包括函数的名称和调用它的代码的链接。 通常，无需进一步探索即可基于此信息做出决策。

{% endif %}

### 修复易受攻击的依赖项

1. 查看警报的详细信息。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts)”（上文）。
{% ifversion fpt or ghec or ghes %}
1. 如果启用了 {% data variables.product.prodname_dependabot_security_updates %}，则可能会有一个指向可修复依赖项的拉取请求的链接。 或者，可以单击警报详细信息页顶部的“创建 {% data variables.product.prodname_dependabot %} 安全更新”以创建拉取请求。
  ![“创建 {% data variables.product.prodname_dependabot %} 安全更新程序”按钮](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. （可选）如果不使用 {% data variables.product.prodname_dependabot_security_updates %}，可以使用页面上的信息来确定要升级到哪个版本的依赖项，并创建拉取请求以将依赖项更新到安全版本。
{% elsif ghae %}
1. 可以使用页面上的信息来确定要升级到哪个版本的依赖项，并创建对清单的拉取请求或将文件锁定到安全版本。
{% endif %}
1. 当您准备好更新依赖项并解决漏洞时，合并拉取请求。 

{% ifversion fpt or ghec or ghes %} {% data variables.product.prodname_dependabot %} 提出的每个拉取请求都包含可用于控制 {% data variables.product.prodname_dependabot %} 的命令的信息。 有关详细信息，请参阅“[管理依赖项更新的拉取请求](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)”。
{% endif %}

## 消除 {% data variables.product.prodname_dependabot_alerts %}

{% tip %}

提示：你只能消除打开的警报。
{% endtip %}

如果你安排大量工作来升级依赖项，或者决定不需要修复警报，则可以消除警报。 消除已评估的警报可以更轻松地在新警报出现时对其进行会审。

1. 查看警报的详细信息。 有关详细信息，请参阅上面的“[查看易受攻击的依赖项](#viewing-dependabot-alerts)”。
1. 选择“消除”下拉菜单，并单击消除警报的原因。{% ifversion reopen-dependabot-alerts %}之后可以重新打开未修复且已消除的警报。{% endif %}{% ifversion dependabot-alerts-dismissal-comment %}1. （可选）添加消除注释。 消除操作注释将添加到警报时间线，可在审核和报告期间用作理由。 可使用 GraphQL API 检索或设置注释。 注释包含在 `dismissComment` 字段中。 有关详细信息，请参阅 GraphQL API 文档中的“[{% data variables.product.prodname_dependabot_alerts %}](/graphql/reference/objects#repositoryvulnerabilityalert)”。
![显示如何通过“消除”下拉列表消除警报的屏幕截图，该下拉列表中包含用于添加消除注释的选项](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)
1. 单击“消除警报”。
{% else %}![选择通过“消除”下拉菜单消除警报的原因](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png){% endif %} {% ifversion dependabot-bulk-alerts %}

### 一次忽略多个警报

1. 查看打开的 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_dependabot_alerts %}](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)”。
2. （可选）通过选择下拉菜单筛选警报列表，然后单击要应用的筛选器。 您还可以在搜索栏中键入过滤条件。
3. 在每个警报标题的左侧，选择要消除的警报。
   ![突出显示复选框的打开警报的屏幕截图](/assets/images/help/graphs/select-multiple-alerts.png)
4. （可选）在警报列表顶部，选择页面上的所有警报。
   ![已选择的所有打开警报的屏幕截图](/assets/images/help/graphs/select-all-alerts.png)
5. 选择“消除警报”下拉列表，然后单击消除警报的原因。
   ![突出显示“消除警报”下拉列表的“打开警报”页的屏幕截图](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## 查看和更新已关闭的警报

可以查看所有打开的警报，并且可以重新打开之前消除的警报。 已修复的已关闭警报无法重新打开。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. 若要仅查看已关闭的警报，请单击“已关闭”。

   {%- ifversion dependabot-bulk-alerts %} ![显示“已关闭”选项的屏幕截图](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png) {%- else %} ![显示“已关闭”选项的屏幕截图](/assets/images/help/repository/dependabot-alerts-closed.png) {%- endif %}
1. 单击要查看或更新的警报。

   {%- ifversion dependabot-bulk-alerts %} ![显示突出显示的 dependabot 警报的屏幕截图](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png) {%- else %} ![显示突出显示的 dependabot 警报的屏幕截图](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)   {%- endif %}
2. （可选）如果警报已关闭，并且想要重新打开警报，请单击“重新打开”。 已修复的警报无法重新打开。

   {% indented_data_reference reusables.enterprise.3-5-missing-feature spaces=3 %} ![显示“重新打开”按钮的屏幕截图](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### 一次重新打开多个警报

1. 查看已关闭的 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[查看和更新已关闭的警报](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)”（上文）。
2. 在每个警报标题的左侧，选择要重新打开的警报。
   ![突出显示复选框的已关闭警报的屏幕截图](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. （可选）在警报列表顶部，选择页面上的所有已关闭的警报。
   ![已关闭警报的屏幕截图，其中选择了所有警报](/assets/images/help/graphs/select-all-closed-alerts.png)
4. 单击“重新打开”以重新打开警报。 已修复的警报无法重新打开。
   ![突出显示了“重新打开”按钮的已关闭警报的屏幕截图](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}

 
## 查看 {% data variables.product.prodname_dependabot_alerts %} 的审核日志

当组织{% ifversion not fpt %}或企业{% endif %}成员执行与 {% data variables.product.prodname_dependabot_alerts %} 相关的操作时，你可以在审核日志中查看这些操作。 有关访问日志的详细信息，请参阅“[查看组织审核日志](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log){% ifversion not fpt %}”和“[访问企业审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)”。{% else %}."{% endif %} {% ifversion dependabot-alerts-audit-log %}

![显示 Dependabot 警报的审核日志的屏幕截图](/assets/images/help/dependabot/audit-log-UI-dependabot-alert.png){% endif %}

{% data variables.product.prodname_dependabot_alerts %} 审核日志中的事件包括详细信息，例如执行操作的人员、操作内容以及操作执行时间。 {% ifversion dependabot-alerts-audit-log %}该事件还包括指向警报本身的链接。 当组织成员消除警报时，事件会显示消除原因和注释。{% endif %}有关 {% data variables.product.prodname_dependabot_alerts %} 操作的信息，请参阅“[查看组织审核日志](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions){% ifversion not fpt %}”和“[审核企业日志事件](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#repository_vulnerability_alert-category-actions)”中的 `repository_vulnerability_alert` 类别。{% else %}”。{% endif %}
