---
title: 管理仓库的代码扫描警报
shortTitle: 管理警报
intro: '从安全视图中，您可以查看、修复、{% if currentVersion == "enterprise-server@2.22" %}或关闭{% else %}忽略或删除{% endif %}项目代码中潜在漏洞或错误的警报。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: '如果您拥有仓库的写入权限，您可以管理该仓库的 {% data variables.product.prodname_code_scanning %} 警报。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
---

{% data reusables.code-scanning.beta %}

### 关于 {% data variables.product.prodname_code_scanning %} 中的警报

您可以设置 {% data variables.product.prodname_code_scanning %}，以使用默认 {% data variables.product.prodname_codeql %} 分析、第三方分析或多种类型的分析来检查仓库中的代码。 分析完成后，生成的警报将并排显示在仓库的安全视图中。 第三方工具或自定义查询的结果可能不包括您在 {% data variables.product.company_short %} 的默认 {% data variables.product.prodname_codeql %} 分析所检测的警报中看到的所有属性。 默认 {% data variables.product.prodname_code_scanning %} 工作流程使用 `on.push` 事件触发代码扫描 - 每次推送到任何包含工作流程文件的分支时触发。

默认情况下， {% data variables.product.prodname_code_scanning %} 定期在默认分支和拉取请求中分析您的代码。 有关管理拉取请求中的警报的更多信息，请参阅“[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)”。

### 关于警报详细信息

每个警报都会高亮显示代码的问题以及识别该问题的工具名称。 您可以看到触发警报的代码行以及警报的属性，例如问题的严重程度和性质。 警报还会告知该问题第一次被引入的时间。 对于由 {% data variables.product.prodname_codeql %} 分析确定的警报，您还会看到如何解决问题的信息。

![来自 {% data variables.product.prodname_code_scanning %} 的警报示例](/assets/images/help/repository/code-scanning-alert.png)

如果使用 {% data variables.product.prodname_codeql %} 启用 {% data variables.product.prodname_code_scanning %}，也可以检测代码中的数据流问题。 数据流分析将查找代码中的潜在安全问题，例如：不安全地使用数据、将危险参数传递给函数以及泄漏敏感信息。

当 {% data variables.product.prodname_code_scanning %} 报告数据流警报时，{% data variables.product.prodname_dotcom %} 将显示数据在代码中如何移动。 {% data variables.product.prodname_code_scanning_capc %} 可用于识别泄露敏感信息的代码区域，以及可能成为恶意用户攻击切入点的代码区域。

### 查看仓库的警报

任何对仓库有读取权限的人都可以查看拉取请求上的 {% data variables.product.prodname_code_scanning %} 注释。 更多信息请参阅“[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)”。

您需要写入权限才能在 **Security（安全）**选项卡上查看仓库所有警报的摘要。 默认情况下，显示默认分支的警报。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
1. 在 "{% data variables.product.prodname_code_scanning_capc %}" 下，单击要探索的警报。 ![警报摘要](/assets/images/help/repository/code-scanning-click-alert.png)
1. （可选）如果警报突出显示数据流的问题，请单击 **Show paths（显示路径）**以显示从数据源到使用它的接收者的路径。 ![警报上的"显示路径"链接](/assets/images/help/repository/code-scanning-show-paths.png)
1. 来自 {% data variables.product.prodname_codeql %} 分析的警报包括对问题的描述。 单击 **Show more（显示更多）**以获取有关如何修复代码的指导。 ![警报的详细信息](/assets/images/help/repository/code-scanning-alert-details.png)

### 修复警报

任何对仓库具有写入权限的人都可以通过提交对代码的更正来修复警报。 如果仓库已安排对拉取请求运行 {% data variables.product.prodname_code_scanning %}，则最好通过拉取请求提交您的更正。 这将触发对更改的 {% data variables.product.prodname_code_scanning %} 分析，并测试您的修复是否会带来任何新的问题。 更多信息请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)”和“[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)”。

如果您有仓库的写入权限，您可以通过查看警报摘要并单击 **Closed（已关闭）**来查看已修复的警报。 更多信息请参阅“[查看仓库的警报](#viewing-the-alerts-for-a-repository)”。 “Closed（已关闭）”列表显示已修复的警报和用户{% if currentVersion == "enterprise-server@2.22" %}已关闭{% else %}已忽略{% endif %}的警报。

警报只能在一个分支中修复。 您可以在警报摘要上使用“Branch（分支）”下拉菜单检查警报是否是在特定分支中修复的。

![按分支过滤警报](/assets/images/help/repository/code-scanning-branch-filter.png)

{% if currentVersion == "enterprise-server@2.22" %}

### 关闭警报

关闭警报是解决您认为不需要修复的警报的一种方式。 {% data reusables.code-scanning.close-alert-examples %}

{% else %}

### 忽略或删除警报

有两种方法可以关闭警报。 您可以修复代码中的问题，也可以忽略警报。 或者，如果您具有仓库的管理员权限，您可以删除警报。 删除警报适用于以下情况：您启用了 {% data variables.product.prodname_code_scanning %} 工具，然后决定删除它，或者您启用了 {% data variables.product.prodname_codeql %} 分析，但查询集超出您的需求，于是您从工具中删除了某些查询。 在这两种情况下，删除警报允许您清理 {% data variables.product.prodname_code_scanning %} 结果。 您可以在 **Security（安全）**选项卡中从摘要列表删除警报。

忽略警报是关闭您认为不需要修复的警报的一种方式。 {% data reusables.code-scanning.close-alert-examples %} 您可以从代码中的 {% data variables.product.prodname_code_scanning %} 注释忽略警报，或者从 **Security（安全）**选项卡中的摘要列表忽略警报。

当您忽略警报时：

- 它在所有分支中被忽略。
- 警报将从项目的当前警报数中删除。
- 警报被移动到警报摘要中的“Closed（已关闭）”列表，需要时您可以在其中重新打开它。
- 将记录您关闭警报的原因。
- {% data variables.product.prodname_code_scanning %} 下次运行时，相同的代码将不会生成警报。

当您删除警报时：

- 它在所有分支中被删除。
- 警报将从项目的当前警报数中删除。
- 它_不会_添加到警报摘要中的“Closed（已关闭）”列表。
- 如果生成警报的代码保持不变，并且相同的 {% data variables.product.prodname_code_scanning %} 工具在不更改任何配置的情况下再次运行，则该警报将再次显示在您的分析结果中。

要忽略或删除警报：

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% if currentVersion == "enterprise-server@2.22" %}
{% data reusables.code-scanning.click-alert-in-list %}
1. 选择 **Close（关闭）**下拉菜单，然后单击关闭警报的原因。    
   ![通过 Close（关闭）下拉菜单选择关闭警报的原因](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.false-positive-fix-codeql %}

{% else %}

1. 如果您拥有仓库管理员权限，想要删除此 {% data variables.product.prodname_code_scanning %} 工具的警报，请选中部分或全部复选框，然后单击 **Delete（删除）**。

   ![删除警报](/assets/images/help/repository/code-scanning-delete-alerts.png)

   （可选）您可以使用过滤器显示警报子集，然后一次删除所有匹配的警报。 例如，如果您从 {% data variables.product.prodname_codeql %} 分析中删除了查询，您可以使用“Rule（规则）”过滤器仅列出该查询的警报，然后选择并删除所有这些警报。

  ![按规则过滤警报](/assets/images/help/repository/code-scanning-filter-by-rule.png)

1. 如果要忽略警报，请务必先了解警报，以便选择正确的忽略原因。 单击要了解的警报。

   ![从摘要列表中打开警报](/assets/images/help/repository/code-scanning-click-alert.png)

1. 查看警报，然后单击 **Dismiss（忽略）**并选择关闭警报的原因。 ![选择忽略警报的原因](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

   {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

#### 一次忽略多个警报

如果项目有多个由于相同原因要忽略的警报，您可以从警报摘要中批量忽略它们。 通常，您需要过滤列表，然后忽略所有匹配的警报。 例如，您可能想要忽略项目中所有已标记为特定通用缺陷枚举 (CWE) 漏洞的当前警报。

{% endif %}

### 延伸阅读

- “[对拉取请求中的 {% data variables.product.prodname_code_scanning %} 警报分类](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)”
- “[为仓库启用 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository)”
- "[关于与 {% data variables.product.prodname_code_scanning %} 集成](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning)"
