---
title: 启用代码扫描
intro: '您可以对项目的仓库启用 {% data variables.product.prodname_code_scanning %}。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: '拥有仓库写入权限的人可启用仓库的 {% data variables.product.prodname_code_scanning %}。'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
versions:
  free-pro-team: '*'
---

{% data reusables.code-scanning.beta %}

### 启用 {% data variables.product.prodname_code_scanning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. 在“Code scanning（代码扫描）”右侧，单击 **Set up code scanning（设置代码扫描）**。 ![Security Overview（安全性概述）中"Code scanning（代码扫描）"右侧的"Set up code scanning（设置代码扫描）"按钮](/assets/images/help/security/overview-set-up-code-scanning.png)
4. 在“Get started with code scanning（开始代码扫描）”下，单击 **Set up this workflow（设置此工作流程）**。 !["Get started with code scanning（开始代码扫描）"标题下的"Set up this workflow（设置此工作流程）"按钮](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)
5. （可选）自定义 {% data variables.product.prodname_code_scanning %} 如何扫描您的代码，编辑工作流程。 更多信息请参阅“[配置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)。”
6. 使用 **Start commit（开始提交）**下拉菜单，并键入提交消息。 ![开始提交](/assets/images/help/repository/start-commit-commit-new-file.png)
7. 选择您是想直接提交到默认分支，还是创建新分支并启动拉取请求。 ![选择提交位置](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. 单击 **Commit new file（提交新文件）**或 **Propose new file（提议新文件）**。

在提交工作流程文件或创建拉取请求后，{% data variables.product.prodname_code_scanning %} 将根据您在工作流程文件中指定的频率分析代码。 如果您创建了拉取请求，则在您将拉取请求合并到仓库的默认分支之前，{% data variables.product.prodname_code_scanning %} 只会分析拉取请求主题分支上的代码。

### 后续步骤

在启用 {% data variables.product.prodname_code_scanning %} 后，您可以监控分析，查看结果，并进一步自定义如何扫描您的代码。

- 您可以查看 {% data variables.product.prodname_code_scanning %} 的运行状态并获取已完成运行的通知。 更多信息请参阅“[管理工作流程运行](/actions/configuring-and-managing-workflows/managing-a-workflow-run)”和“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)”。
- 扫描完成后，您可以查看已完成扫描的警报。 更多信息请参阅“[管理来自 {% data variables.product.prodname_code_scanning %} 的警报](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning)”。
- 您可以自定义 {% data variables.product.prodname_code_scanning %} 如何扫描您的仓库中的代码。 更多信息请参阅“[配置代码扫描](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)”。
