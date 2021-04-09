---
title: 使用工作流程模板设置持续集成
shortTitle: 使用模板设置 CI
intro: 您可以使用与您要用的语言和工具匹配的工作流程模板为项目设置持续集成。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/setting-up-continuous-integration-using-github-actions
  - /github/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/automating-your-workflow-with-github-actions/setting-up-continuous-integration-using-github-actions
  - /actions/building-and-testing-code-with-continuous-integration/setting-up-continuous-integration-using-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - 工作流程
  - CI
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

对仓库具有写入权限的任何人都可以使用 {% data variables.product.prodname_actions %} 设置持续集成 (CI)。

在设置 CI 后，可以根据您的需求自定义工作流程。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 找到与您要用的语言和工具匹配的模板，然后单击 **Set up this workflow（设置此工作流程）**。 ![设置工作流程按钮](/assets/images/help/repository/setup-workflow-button.png)
5. 单击 **Start commit（开始提交）**。 ![开始提交按钮](/assets/images/help/repository/start-commit.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

在推送到仓库后，您可以在 {% data variables.product.prodname_dotcom %} 上跟踪持续集成工作流程运行的状态和详细日志，并接收自定义的通知。 更多信息请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)”和“[管理工作流程运行](/articles/managing-a-workflow-run)”。

{% data reusables.repositories.actions-workflow-status-badge-into %}

更多信息请参阅“[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

### 延伸阅读

- "[关于持续集成](/articles/about-continuous-integration)"
- "[管理工作流程运行](/articles/managing-a-workflow-run)"
{% if currentVersion == "free-pro-team@latest" %}
- "[管理 {% data variables.product.prodname_actions %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
{% endif %}
