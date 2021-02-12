---
title: 鉴定拉取请求中的代码扫描警报
shortTitle: 鉴定拉取请求中的警报
intro: '当 {% data variables.product.prodname_code_scanning %} 在拉取请求中发现问题时，您可以审查高亮的代码并解决警报。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: '如果您拥有仓库的读取权限，您可以查看对拉取请求的注释。 如果拥有写入权限，您可以查看详细信息并解决该仓库的 {% data variables.product.prodname_code_scanning %} 警报。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

### 关于拉取请求上的 {% data variables.product.prodname_code_scanning %} 结果

在仓库中，如果 {% data variables.product.prodname_code_scanning %} 被配置为拉取请求检查，则 {% data variables.product.prodname_code_scanning %} 将检查拉取请求中的代码。 默认情况下，这仅限于针对默认分支的拉取请求，但是您可以在 {% data variables.product.prodname_actions %} 或第三方 CI/CD 系统中更改此配置。 如果合并分支给目标分支带来新的 {% data variables.product.prodname_code_scanning %} 警报，这些警报将在拉取请求中被报告为检查结果。 警报还将在拉取请求的 **Files changed（文件已更改）**选项卡中显示为注释。 如果您拥有仓库的写入权限，您可以在 **Security（安全）**选项卡中查看任何现有的 {% data variables.product.prodname_code_scanning %} 警报。 有关仓库警报的更多信息，请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)”。

如果 {% data variables.product.prodname_code_scanning %} 有任何严重性为 `error` 的结果，则检查失败，错误将报告在检查结果中。 如果 {% data variables.product.prodname_code_scanning %} 发现的所有结果的严重性都较低，则警报将被视为警告或通知，检查成功。 如果拉取请求针对已为 {% data variables.product.prodname_code_scanning %} 启用的受保护分支，并且仓库所有者配置了必需状态检查，则您必须修复或{% if currentVersion == "enterprise-server@2.22" %}关闭{% else %}忽略{% endif %}所有错误警报，然后才能合并拉取请求。 更多信息请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)”。

![拉取请求上失败的 {% data variables.product.prodname_code_scanning %} 检查](/assets/images/help/repository/code-scanning-check-failure.png)

### 关于 {% data variables.product.prodname_code_scanning %} 作为拉取请求检查

有许多选项可将 {% data variables.product.prodname_code_scanning %} 配置为拉取请求检查，因此每个仓库的确切设置会有所不同，有些仓库还会有多个检查。 包含 {% data variables.product.prodname_code_scanning %} 结果的检查为：**代码扫描结果**。

如果仓库使用 {% data variables.product.prodname_codeql_workflow %}，则在结果检查运行之前，将针对每种语言运行 **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** 检查。 如果存在配置问题，或者拉取请求中断了分析需要编译的语言（例如 C/C ++、C# 或 Java）的构建，则分析检查可能会失败。 与其他拉取请求检查一样，您可以在 **Checks（检查）**选项卡上查看检查失败的完整细节。 有关配置和故障排除的详细信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)”或“[排查 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning)”。

### 鉴定拉取请求上的警报

查看拉取请求的 **Files changed（文件已更改）**选项卡时，您会看到任何触发警报的代码行的注释。

![拉取请求差异中的警报注释](/assets/images/help/repository/code-scanning-pr-annotation.png)

如果您拥有仓库的写入权限，则某些注释将包含警报额外上下文的链接。 在上例中，您可以在 {% data variables.product.prodname_codeql %} 分析中单击 **user-provided value（用户提供的值）**，以查看不受信任的数据进入数据流的位置（这被称为源）。 在此例中，您还可以通过单击 **Show paths（显示路径）**来查看从源到使用数据的代码（池）的完整路径。 这样就很容易检查数据是否不受信任，或者分析是否无法识别源与池之间的数据净化步骤。 有关使用 {% data variables.product.prodname_codeql %} 分析数据流的信息，请参阅“[关于数据流分析](https://help.semmle.com/QL/learn-ql/intro-to-data-flow.html)”。

要查看有关警报的更多信息，拥有写入权限的用户可单击注释中所示的 **Show more details（显示更多详情）**链接。 这允许您在警报视图中查看工具提供的所有上下文和元数据。 在下例中，您可以查看显示问题的严重性、类型和相关通用缺陷枚举 (CWE) 的标记。 该视图还显示哪个提交引入了问题。

在警报的详细视图中，有些 {% data variables.product.prodname_code_scanning %} 工具，例如 {% data variables.product.prodname_codeql %} 分析，还包括问题描述和 **Show more（显示更多）**链接以指导您如何修复代码。

![显示更多信息的警报说明和链接](/assets/images/help/repository/code-scanning-pr-alert.png)

### {% if currentVersion == "enterprise-server@2.22" %}解决{% else %}修复{% endif %}拉取请求上的警报

任何对拉取请求具有推送权限的人都可以修复在该拉取请求上已识别的 {% data variables.product.prodname_code_scanning %} 警报。 如果将更改提交到拉取请求，这将触发拉取请求检查的新运行。 如果您的更改修复了问题，则警报将被关闭，注释将被删除。

{% if currentVersion == "enterprise-server@2.22" %}

如果您认为警报不需要修复，则具有写入权限的用户可以手动关闭警报。 {% data reusables.code-scanning.close-alert-examples %} 如果您对仓库有写入权限，则 **Close（关闭）**按钮在注释和警报视图中可用。

{% data reusables.code-scanning.false-positive-fix-codeql %}

{% else %}

### 忽略拉取请求上的警报

关闭警报的另一种办法是忽略它。 您可以忽略您认为不需要修复的警报。 {% data reusables.code-scanning.close-alert-examples %} 如果您对仓库有写入权限，则 **Dismiss（忽略）**按钮在代码注释和警报摘要中可用。 单击 **Dismiss（忽略）**时，您将被提示选择关闭警报的原因。

![选择忽略警报的原因](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

有关忽略警报的更多信息，请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)”。

{% endif %}
