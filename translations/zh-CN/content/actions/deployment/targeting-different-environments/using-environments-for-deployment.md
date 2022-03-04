---
title: Using environments for deployment
shortTitle: Use environments for deployment
intro: 您可以使用保护规则和机密配置环境。 A workflow job that references an environment must follow any protection rules for the environment before running or accessing the environment's secrets.
product: '{% data reusables.gated-features.environments %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/reference/environments
  - /actions/deployment/environments
  - /actions/deployment/using-environments-for-deployment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---


## 关于环境

Environments are used to describe a general deployment target like `production`, `staging`, or `development`. When a {% data variables.product.prodname_actions %} workflow deploys to an environment, the environment is displayed on the main page of the repository. For more information about viewing deployments to environments, see "[Viewing deployment history](/developers/overview/viewing-deployment-history)."

您可以使用保护规则和机密配置环境。 当工作流程引用环境时，作业在环境的所有保护规则通过之前不会开始。 在所有环境保护规则通过之前，作业也不能访问在环境中定义的机密。

{% ifversion fpt %}
{% note %}

**Note:** You can only configure environments for public repositories. 如果您将仓库从公开转换为私密，任何配置的保护规则或环境机密将被忽略， 并且您将无法配置任何环境。 如果将仓库转换回公共，您将有权访问以前配置的任何保护规则和环境机密。

Organizations that use {% data variables.product.prodname_ghe_cloud %} can configure environments for private repositories. 更多信息请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/actions/deployment/targeting-different-environments/using-environments-for-deployment)。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

## 环境保护规则

环境保护规则要求通过特定的条件，然后引用环境的作业才能继续。 {% ifversion fpt or ghae or ghes > 3.1 or ghec %}您可以使用环境保护规则来要求手动批准、延迟作业或者将环境限于某些分支。{% else %}您可以使用环境保护规则要求手动批准或延迟作业。{% endif %}

### 需要的审查者

使用所需的审查者要求特定人员或团队批准引用环境的工作流程作业。 您最多可以列出六个用户或团队作为审查者。 审查者必须至少具有对仓库的读取访问权限。 只有一个必需的审查者需要批准该作业才能继续。

有关与必需审查者一起审查引用环境的作业的详细信息，请参阅“[审查部署](/actions/managing-workflow-runs/reviewing-deployments)”。

### 等待计时器

在最初触发作业后，使用等待计时器将作业延迟特定时间。 时间（分钟）必须是 0 至 43,200（30天）之间的整数。

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
### 部署分支

使用部署分支来限制哪些分支可以部署到环境中。 以下是环境部署分支的选项：

* **All branches（所有分支）**：仓库中的所有分支都可以部署到环境。
* **Protected branches（受保护的分支）**：只有启用分支保护规则的分支才能部署到环境。 如果没有为仓库中的任何分支定义分支保护规则，那么所有分支都可以部署。 有关分支保护规则的更多信息，请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches)”。
* **Selected branches（所选分支）**：只有与指定的名称模式匹配的分支才能部署到环境。

  例如，如果您指定 `releases/*` 为部署分支规则，则只有其名称开头为 `releases/` 的分支才能部署到环境。 （通配符字符将不匹配 `/`。 要匹配以 `release/` 开头并且包含额外单一斜杠的分支，请使用 `release/*/*`）。 如果您添加 `main` 作为部署分支规则，则名为 `main` 的分支也可以部署到环境。 有关部署分支的语法选项的更多信息，请参阅 [Ruby File.fnmatch 文档](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)。
{% endif %}
## 环境机密

存储在环境中的机密仅可用于引用环境的工作流程作业。 如果环境需要批准，作业在所需的审查者批准之前不能访问环境机密。 有关机密的更多信息，请参阅“[加密密码](/actions/reference/encrypted-secrets)”。

{% note %}

**注意：** 在自托管运行器上运行的工作流程不会在一个孤立的容器中运行，即使它们使用环境。 Environment secrets should be treated with the same level of security as repository and organization secrets. 更多信息请参阅“[GitHub Actions 的安全性增强](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners)”。

{% endnote %}

## 创建环境

{% data reusables.actions.permissions-statement-environment %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
{% data reusables.actions.new-environment %}
{% data reusables.actions.name-environment %}
1. Optionally, specify people or teams that must approve workflow jobs that use this environment.
   1. Select **Required reviewers**.
   1. Enter up to 6 people or teams. 只有一个必需的审查者需要批准该作业才能继续。
   1. Click **Save protection rules**.
2. Optionally, specify the amount of time to wait before allowing workflow jobs that use this environment to proceed.
   1. Select **Wait timer**.
   1. Enter the number of minutes to wait.
   1. Click **Save protection rules**.
3. Optionally, specify what branches can deploy to this environment. For more information about the possible values, see "[Deployment branches](#deployment-branches)."
   1. Select the desired option in the **Deployment branches** dropdown.
   1. If you chose **Selected branches**, enter the branch name patterns that you want to allow.
4. Optionally, add environment secrets. These secrets are only available to workflow jobs that use the environment. Additionally, workflow jobs that use this environment can only access these secrets after any configured rules (for example, required reviewers) pass. 有关机密的更多信息，请参阅“[加密密码](/actions/reference/encrypted-secrets)”。
   1. Under **Environment secrets**, click **Add Secret**.
   1. Enter the secret name.
   1. Enter the secret value.
   1. 单击 **Add secret（添加密码）**。

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}您也可以通过 REST API 创建和配置环境。 更多信息请参阅“[环境](/rest/reference/repos#environments)”和“[密码](/rest/reference/actions#secrets)”。{% endif %}

运行引用不存在的环境的工作流程将使用引用的名称创建环境。 新创建的环境将不配置任何保护规则或机密。 可在仓库中编辑工作流程的任何人都可以通过工作流程文件创建环境，但只有仓库管理员才能配置环境。

## Using an environment

工作流程中的每个作业都可以引用单个环境。 在将引用环境的作业发送到运行器之前，必须通过为环境配置的任何保护规则。 The job can access the environment's secrets only after the job is sent to a runner.

当工作流程引用环境时，环境将显示在仓库的部署中。 有关查看当前和以前的部署的详细信息，请参阅“[查看部署历史记录](/developers/overview/viewing-deployment-history)”。

{% data reusables.actions.environment-example %}

## 删除环境

{% data reusables.actions.permissions-statement-environment %}

删除环境将删除与环境关联的所有机密和保护规则。 由于已删除环境的保护规则而正在等待的任何作业将自动失败。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
1. 在要删除的环境旁边，单击 {% octicon "trash" aria-label="The trash icon" %}。
2. 单击 **I understand, delete this environment（我了解，删除此环境）**。

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}您也可以通过 REST API 删除环境。 更多信息请参阅“[环境](/rest/reference/repos#environments)”。{% endif %}

## How environments relate to deployments

{% data reusables.actions.environment-deployment-event %}

You can access these objects through the REST API or GraphQL API. You can also subscribe to these webhook events. For more information, see "[Repositories](/rest/reference/repos#deployments)" (REST API), "[Objects]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/reference/objects#deployment)" (GraphQL API), or "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)."

## 后续步骤

{% data variables.product.prodname_actions %} provides several features for managing your deployments. For more information, see "[Deploying with GitHub Actions](/actions/deployment/deploying-with-github-actions)."
