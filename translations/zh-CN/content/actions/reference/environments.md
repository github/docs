---
title: 环境
intro: 您可以使用保护规则和机密配置环境。 工作流程作业可以引用环境来使用环境的保护规则和机密。
product: '{% data reusables.gated-features.environments %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.actions.environments-beta %}

### 关于环境

您可以使用保护规则和机密配置环境。 当工作流程引用环境时，作业在环境的所有保护规则通过之前不会开始。 在所有环境保护规则通过之前，作业也不能访问在环境中定义的机密。

{% if currentVersion == "free-pro-team@latest" %}
环境保护规则和环境机密只能在公共仓库中使用。 如果您将仓库从公开转换为私密，任何配置的保护规则或环境机密将被忽略， 并且您将无法配置任何环境。 如果将仓库转换回公共，您将有权访问以前配置的任何保护规则和环境机密。
{% endif %}

#### 环境保护规则

环境保护规则要求通过特定的条件，然后引用环境的作业才能继续。 您可以使用环境保护规则要求手动批准或延迟作业。

##### 需要的审查者

使用所需的审查者要求特定人员或团队批准引用环境的工作流程作业。 您最多可以列出六个用户或团队作为审查者。 审查者必须至少具有对仓库的读取访问权限。 只有一个必需的审查者需要批准该作业才能继续。

有关与必需审查者一起审查引用环境的作业的详细信息，请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。

##### 等待计时器

在最初触发作业后，使用等待计时器将作业延迟特定时间。 时间（分钟）必须是 0 至 43,200（30天）之间的整数。

#### 环境机密

存储在环境中的机密仅可用于引用环境的工作流程作业。 如果环境需要批准，作业在所需的审查者批准之前不能访问环境机密。 有关机密的更多信息，请参阅“[加密密码](/actions/reference/encrypted-secrets)”。

### 创建环境

{% data reusables.github-actions.permissions-statement-environment %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. 单击 **New environment（新环境）**。
1. 为环境输入一个名称, 然后单击 **Configure environment（配置环境）**。 环境名称不区分大小写。 环境名称不能超过 255 个字符，且必须在仓库中唯一。
1. 配置任何环境保护规则或环境机密。

运行引用不存在的环境的工作流程将使用引用的名称创建环境。 新创建的环境将不配置任何保护规则或机密。 可在仓库中编辑工作流程的任何人都可以通过工作流程文件创建环境，但只有仓库管理员才能配置环境。

### 引用环境

工作流程中的每个作业都可以引用单个环境。 在将引用环境的作业发送到运行器之前，必须通过为环境配置的任何保护规则。 将作业发送到运行器时，作业可以访问环境的机密。

有关工作流程中引用环境的语法的更多信息，请参阅“[GitHub Actions 的工作流程语法](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idenvironment)”。 有关与必需审查者一起审查引用环境的作业的详细信息，请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。

当工作流程引用环境时，环境将显示在仓库的部署中。 有关查看当前和以前的部署的详细信息，请参阅“[查看部署历史记录](/developers/overview/viewing-deployment-history)”。

### 删除环境

{% data reusables.github-actions.permissions-statement-environment %}

删除环境将删除与环境关联的所有机密和保护规则。 由于已删除环境的保护规则而正在等待的任何作业将自动失败。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. 在要删除的环境旁边，单击 {% octicon "trashcan" aria-label="The trashcan icon" %}。
2. 单击 **I understand, delete this environment（我了解，删除此环境）**。
