---
title: 鉴定拉取请求中的代码扫描警报
shortTitle: 分类拉取请求中的警报
intro: '当 {% data variables.product.prodname_code_scanning %} 在拉取请求中发现问题时，您可以审查高亮的代码并解决警报。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
versions:
  fpt: '*'
  ghes: '>=3.0'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

## 关于拉取请求上的 {% data variables.product.prodname_code_scanning %} 结果

在仓库中，如果 {% data variables.product.prodname_code_scanning %} 被配置为拉取请求检查，则 {% data variables.product.prodname_code_scanning %} 将检查拉取请求中的代码。 默认情况下，这仅限于针对默认分支的拉取请求，但是您可以在 {% data variables.product.prodname_actions %} 或第三方 CI/CD 系统中更改此配置。 如果合并分支给目标分支带来新的 {% data variables.product.prodname_code_scanning %} 警报，这些警报将在拉取请求中被报告为检查结果。 警报还将在拉取请求的 **Files changed（文件已更改）**选项卡中显示为注释。 如果您拥有仓库的写入权限，您可以在 **Security（安全）**选项卡中查看任何现有的 {% data variables.product.prodname_code_scanning %} 警报。 有关仓库警报的更多信息，请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”。

If your pull request targets a protected branch that uses {% data variables.product.prodname_code_scanning %}, and the repository owner has configured required status checks, then the "{% data variables.product.prodname_code_scanning_capc %} results" check must pass before you can merge the pull request. 更多信息请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)”。

## 关于 {% data variables.product.prodname_code_scanning %} 作为拉取请求检查

有许多选项可将 {% data variables.product.prodname_code_scanning %} 配置为拉取请求检查，因此每个仓库的确切设置会有所不同，有些仓库还会有多个检查。

### {% data variables.product.prodname_code_scanning_capc %} results check

For all configurations of {% data variables.product.prodname_code_scanning %}, the check that contains the results of {% data variables.product.prodname_code_scanning %} is: **{% data variables.product.prodname_code_scanning_capc %} results**. The results for each analysis tool used are shown separately. Any new alerts caused by changes in the pull request are shown as annotations.

{% ifversion fpt or ghes > 3.2 or ghae-issue-4902 %} To see the full set of alerts for the analyzed branch, click **View all branch alerts**. This opens the full alert view where you can filter all the alerts on the branch by type, severity, tag, etc. 更多信息请参阅“[管理仓库的代码扫描警报](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts)”。

![{% data variables.product.prodname_code_scanning_capc %} results check on a pull request](/assets/images/help/repository/code-scanning-results-check.png)
{% endif %}

### {% data variables.product.prodname_code_scanning_capc %} results check failures

If the {% data variables.product.prodname_code_scanning %} results check finds any problems with a severity of `error`{% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %}, `critical`, or `high`,{% endif %} the check fails and the error is reported in the check results. If all the results found by {% data variables.product.prodname_code_scanning %} have lower severities, the alerts are treated as warnings or notes and the check succeeds.

![拉取请求上失败的 {% data variables.product.prodname_code_scanning %} 检查](/assets/images/help/repository/code-scanning-check-failure.png)

{% ifversion fpt or ghes > 3.1 or ghae-next %}You can override the default behavior in your repository settings, by specifying the level of severities {% ifversion fpt or ghes > 3.1  or ghae-issue-4697 %}and security severities {% endif %}that will cause a pull request check failure. For more information, see "[Defining the severities causing pull request check failure](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".
{% endif %}

### Other {% data variables.product.prodname_code_scanning %} checks

Depending on your configuration, you may see additional checks running on pull requests with {% data variables.product.prodname_code_scanning %} configured. These are usually workflows that analyze the code or that upload {% data variables.product.prodname_code_scanning %} results. These checks are useful for troubleshooting when there are problems with the analysis.

For example, if the repository uses the {% data variables.product.prodname_codeql_workflow %} a **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)** check is run for each language before the results check runs. 如果存在配置问题，或者拉取请求中断了分析需要编译的语言（例如 C/C ++、C# 或 Java）的构建，则分析检查可能会失败。

与其他拉取请求检查一样，您可以在 **Checks（检查）**选项卡上查看检查失败的完整细节。 有关配置和故障排除的详细信息，请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning)”或“[排查 {% data variables.product.prodname_codeql %} 工作流程故障](/code-security/secure-coding/troubleshooting-the-codeql-workflow)”。

## Viewing an alert on your pull request

You can see any {% data variables.product.prodname_code_scanning %} alerts introduced in a pull request by displaying the **Files changed** tab. Each alert is shown as an annotation on the lines of code that triggered the alert. The severity of the alert is displayed in the annotation.

![拉取请求差异中的警报注释](/assets/images/help/repository/code-scanning-pr-annotation.png)

如果您拥有仓库的写入权限，则某些注释将包含警报额外上下文的链接。 在上例中，您可以在 {% data variables.product.prodname_codeql %} 分析中单击 **user-provided value（用户提供的值）**，以查看不受信任的数据进入数据流的位置（这被称为源）。 在此例中，您还可以通过单击 **Show paths（显示路径）**来查看从源到使用数据的代码（池）的完整路径。 这样就很容易检查数据是否不受信任，或者分析是否无法识别源与池之间的数据净化步骤。 有关使用 {% data variables.product.prodname_codeql %} 分析数据流的信息，请参阅“[关于数据流分析](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)”。

要查看有关警报的更多信息，拥有写入权限的用户可单击注释中所示的 **Show more details（显示更多详情）**链接。 这允许您在警报视图中查看工具提供的所有上下文和元数据。 在下例中，您可以查看显示问题的严重性、类型和相关通用缺陷枚举 (CWE) 的标记。 该视图还显示哪个提交引入了问题。

在警报的详细视图中，有些 {% data variables.product.prodname_code_scanning %} 工具，例如 {% data variables.product.prodname_codeql %} 分析，还包括问题描述和 **Show more（显示更多）**链接以指导您如何修复代码。

![显示更多信息的警报说明和链接](/assets/images/help/repository/code-scanning-pr-alert.png)

## 修复拉取请求上的警报

任何对拉取请求具有推送权限的人都可以修复在该拉取请求上已识别的 {% data variables.product.prodname_code_scanning %} 警报。 如果将更改提交到拉取请求，这将触发拉取请求检查的新运行。 如果您的更改修复了问题，则警报将被关闭，注释将被删除。

## 忽略拉取请求上的警报

关闭警报的另一种办法是忽略它。 您可以忽略您认为不需要修复的警报。 {% data reusables.code-scanning.close-alert-examples %} 如果您对仓库有写入权限，则 **Dismiss（忽略）**按钮在代码注释和警报摘要中可用。 单击 **Dismiss（忽略）**时，您将被提示选择关闭警报的原因。

![选择忽略警报的原因](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

有关忽略警报的更多信息，请参阅“[管理仓库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)”。
