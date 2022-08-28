---
title: 重新运行工作流程
intro: 您可以重新运行工作流程的实例。 重新运行工作流程使用触发工作流运行的原始事件的相同 `GITHUB_SHA`（提交 SHA）和 `GITHUB_REF` (Git ref)。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 使用 {% data variables.product.prodname_dotcom %} UI 重新运行工作流程

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在工作流程的右上角，使用 **Re-run jobs（重新运行作业）**下拉菜单并选择 **Re-run all jobs（重新运行所有作业）**。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}

### 使用 {% data variables.product.prodname_cli %} 运行工作流程

{% data reusables.actions.actions-cli %}

要重新运行失败的工作流程运行，请使用 `run rerun` 子命令。 将 `run-id` 替换为您想要重新运行的已失败运行的 ID。  如果您没有指定 `run-id`，{% data variables.product.prodname_cli %} 将返回一个交互式菜单，供您选择最近失败的运行。

```shell
gh run rerun <em>run-id</em>
```

要查看工作流程运行的进度，请使用 `run watch` 子命令，并从交互式列表中选择运行。

```shell
gh run watch
```
