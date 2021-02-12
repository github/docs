---
title: 重新运行工作流程
intro: 您可以重新运行工作流程的实例。 重新运行工作流程使用触发工作流运行的原始事件的相同 `GITHUB_SHA`（提交 SHA）和 `GITHUB_REF` (Git ref)。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. 在工作流程的右上角，使用 **Re-run jobs（重新运行作业）**下拉菜单并选择 **Re-run all jobs（重新运行所有作业）**。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}
