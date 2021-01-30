---
title: 删除自托管的运行器
intro: '您可以从 {{ site.data.variables.product.prodname_actions }} 永久删除自托管的运行器。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 从仓库中删除运行器

{% note %}

**注意：** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

要从用户仓库删除自托管的运行器，您必须是仓库所有者。 对于组织仓库，您必须是组织所有者或拥有该仓库管理员的权限。 建议您也访问自托管的运行器机器。

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}

### 从组织中删除运行器

{% note %}

**注意：** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

要从组织删除自托管的运行器，您必须是组织所有者。 建议您也访问自托管的运行器机器。

{% data reusables.github-actions.self-hosted-runner-reusing %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}

### 从企业中删除运行器

{% note %}

**注意：** {% data reusables.github-actions.self-hosted-runner-removal-impact %}

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}
要从企业帐户删除自托管运行器，您必须是组织所有者。 建议您也访问自托管的运行器机器。
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21"%}
要在
{% data variables.product.product_location %} 的企业级删除自托管运行器，您必须是网站管理员。 建议您也访问自托管的运行器机器。
{% endif %}

{% data reusables.github-actions.self-hosted-runner-reusing %}


{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.self-hosted-runner-removing-a-runner %}
