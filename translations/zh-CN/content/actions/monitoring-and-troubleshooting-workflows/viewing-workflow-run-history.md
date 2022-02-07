---
title: 查看工作流程运行历史记录
intro: 您可以查看工作流程每次运行的日志。 日志包括工作流程中每个作业和步骤的状态。
redirect_from:
  - /actions/managing-workflow-runs/viewing-workflow-run-history
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 查看工作流程运行历史记录
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

### 查看最近的工作流程运行

要列出最近的工作流程运行，请使用 `run list` 子命令。

```shell
gh run list
```

要指定返回的最大运行次数，您可以使用 `-L` 或 `--limit` 标记。 默认值为`10`.

```shell
gh run list --limit 5
```

要只返回为指定的工作流程的运行，您可以使用 `-w` 或 `--workflow` 标记。  将 `workflow` 替换为工作流名称、工作流程 ID 或工作流程文件名。 例如 `"Link Checker"`、`1234567` 或 `"link-check-test.yml"`。

```shell
gh run list --workflow <em>workflow</em>
```

### 查看特定工作流程运行的详细信息

要显示特定工作流程运行的详细信息，请使用 `run view` 子命令。 将 `run-id` 替换为您想要查看的运行的 ID。 如果您没有指定 `run-id`，{% data variables.product.prodname_cli %} 将返回一个交互式菜单，供您选择最近的运行。

```shell
gh run view <em>run-id</em>
```

要在输出中包括作业步骤，请使用 `-v` 或 `--verbose` 标记。

```shell
gh run view <em>run-id</em> --verbose
```

要查看运行中特定作业的详细信息，请使用 `-j` 或 `--job` 标记。  将 `job-id` 替换为您想要查看的作业的 ID。

```shell
gh run view --job <em>job-id</em>
```

要查看作业的完整日志，请使用 `--log` 标记。

```shell
gh run view --job <em>job-id</em> --log
```

如果运行失败，请使用 `--exit-status` 标记以非零状态退出。 例如：

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```

{% endcli %}
