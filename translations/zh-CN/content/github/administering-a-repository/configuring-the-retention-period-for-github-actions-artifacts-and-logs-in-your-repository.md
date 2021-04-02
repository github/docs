---
title: 为仓库中的 GitHub Actions 构件和日志配置保留期
intro: '您可以为仓库中的 {% data variables.product.prodname_actions %} 构件和日志配置保留期。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
topics:
  - 仓库
---

{% data reusables.actions.about-artifact-log-retention %}

您还可以为工作流程创建的特定构件自定义保留期。 更多信息请参阅“[设置构件的保留期](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)”。

## 设置仓库的保留期

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
