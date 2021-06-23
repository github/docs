---
title: 使用工作流程运行日志
intro: 您可以查看、搜索和下载工作流程运行中每个作业的日志。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

您可以从工作流程运行页面查看工作流程运行是在进行中，还是已完成。 您必须登录到 {% data variables.product.prodname_dotcom %} 帐户才能查看工作流程运行信息，包括公共仓库。 更多信息请参阅“[GitHub 上的访问权限](/articles/access-permissions-on-github)”。

如果运行已完成，则可查看运行结果是成功、失败、已取消还是中性。 如果运行失败，您可以查看并搜索构建日志，来诊断失败原因并重新运行工作流程。 您也可以查看可计费作业执行分钟数，或下载日志和创建构件。

{% data variables.product.prodname_actions %} 使用 Checks API 来输出工作流程的状态、结果和日志。 {% data variables.product.prodname_dotcom %} 对每个工作流程创建新检查套件。 检查套件包含检查工作流程中每项作业的运行，而每项作业包含步骤。 {% data variables.product.prodname_actions %} 作为工作流程中的一个步骤运行。 有关检查 API 的详细信息，请参阅“[检查](/rest/reference/checks)”。

{% data reusables.github-actions.invalid-workflow-files %}

### 查看日志以诊断故障

如果工作流程运行失败，您可以查看是哪个步骤导致了失败，然后审查失败步骤的创建日志进行故障排除。 您可以查看每个步骤运行的时长。 也可以将永久链接复制到日志文件中的特定行，与您的团队分享。 {% data reusables.repositories.permissions-statement-read %}

除了工作流程文件中配置的步骤外，{% data variables.product.prodname_dotcom %} 为每个作业添加了另外两个步骤，以设置和完成作业的执行。 这些步骤以名称"设置作业"和"完成作业"记录在工作流程运行中。

对于在 {% data variables.product.prodname_dotcom %} 托管的运行器上运行的作业，“设置作业”记录运行器虚拟环境的详细信息。 并包含一个链接，可链接到运行器机器上的预安装工具列表。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% data reusables.repositories.view-failed-job-results-superlinter %}
{% data reusables.repositories.view-specific-line-superlinter %}

### 搜索日志

您可以搜索特定步骤的创建日志。 在搜索日志时，只有展开的步骤会包含在结果中。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
1. 在日志输出的右上角，在 **Search logs（搜索日志）**搜索框中输入搜索查询。
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
  ![搜索日志的搜索框](/assets/images/help/repository/search-log-box-updated-2.png)
{% else %}
  ![搜索日志的搜索框](/assets/images/help/repository/search-log-box-updated.png)
{% endif %}
{% else %}
1. 要展开想包含在搜索中的每个步骤，请单击该步骤。 ![步骤名称](/assets/images/help/repository/failed-check-step.png)
1. 在日志输出的右上角，在 **Search logs（搜索日志）**搜索框中输入搜索查询。 ![搜索日志的搜索框](/assets/images/help/repository/search-log-box.png)
{% endif %}

### 下载日志

您可以从工作流程运行中下载日志文件。 您也可以下载工作流程的构件。 更多信息请参阅“[使用构件持久化工作流程](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。 {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% data reusables.repositories.navigate-to-job-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
1. 在右上角单击
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}{% octicon "gear" aria-label="The gear icon" %}{% else %}{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}{% endif %} 并选择 **Download log archive（下载日志存档）**。
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
  ![下载日志下拉菜单](/assets/images/help/repository/download-logs-drop-down-updated-2.png)
  {% else %}
  ![下载日志下拉菜单](/assets/images/help/repository/download-logs-drop-down-updated.png)
  {% endif %}
{% else %}
1. 在右上角单击
{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 并选择 **Download log archive（下载日志存档）**。
  ![下载日志下拉菜单](/assets/images/help/repository/download-logs-drop-down.png)
{% endif %}

### 删除日志

您可以从工作流程运行中删除日志文件。 {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow-superlinter %}
{% data reusables.repositories.view-run-superlinter %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
1. 在右上角单击
{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
    {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
 ![烤肉串水平图标](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)
    {% else %}
    ![烤肉串水平图标](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated.png)
    {% endif %}
2. 要删除日志文件，单击 **Delete all logs（删除所有日志）**按钮并审查确认提示。
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
  ![删除所有日志](/assets/images/help/repository/delete-all-logs-updated-2.png)
  {% else %}
  ![删除所有日志](/assets/images/help/repository/delete-all-logs-updated.png)
  {% endif %}
删除日志后，**Delete all logs（删除所有日志）** 按钮将会移除，以表示在工作流程运行中没有日志文件。
{% else %}
1. 在右上角，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。 ![烤肉串水平图标](/assets/images/help/repository/workflow-run-kebab-horizontal-icon.png)
2. 要删除日志文件，单击 **Delete all logs（删除所有日志）**按钮并审查确认提示。 ![Delete all logs](/assets/images/help/repository/delete-all-logs.png) 删除日志后，**Delete all logs（删除所有日志）**按钮将被删除，以表明工作流程运行中未剩下任何日志文件。
{% endif %}

### 使用 {% data variables.product.prodname_cli %} 查看日志

{% data reusables.actions.actions-cli %}

要查看特定作业的日志，请使用 `run view` 子命令。 将 `run-id` 替换为您想要查看其日志的运行的 ID。 {% data variables.product.prodname_cli %} 将返回一个交互式菜单，供您从运行中选择作业。 如果您没有指定 `run-id`，{% data variables.product.prodname_cli %} 将返回一个交互式菜单，让您选择最近的运行，然后返回另一个交互式菜单，让您从运行中选择作业。

```shell
gh run view <em>run-id</em> --log
```

您也可以使用 `--bob` 标记来指定作业 ID。 将 `job-id` 替换为您想要查看其日志的作业的 ID。

```shell
gh run view --job <em>job-id</em> --log
```

您可以使用 `grep` 来搜索日志。 例如，此命令将返回所有包含单词 `error` 的日志条目。

```shell
gh run view --job <em>job-id</em> --log | grep error
```

要过滤日志中任何失败的步骤，请使用 `--log-fail` 而不是 `--log`。

```shell
gh run view --job <em>job-id</em> --log-failed
```
