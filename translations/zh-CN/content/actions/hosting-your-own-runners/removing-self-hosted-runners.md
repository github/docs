---
title: 删除自托管的运行器
intro: '您可以从 {{ site.data.variables.product.prodname_actions }} 永久删除自托管的运行器。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/removing-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.actions.enterprise-beta }}
{{ site.data.reusables.actions.enterprise-github-hosted-runners }}

### 从仓库中删除运行器

{% note %}

**注意：** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

要从用户仓库删除自托管的运行器，您必须是仓库所有者。 对于组织仓库，您必须是组织所有者或拥有该仓库管理员的权限。 建议您也访问自托管的运行器机器。

{{ site.data.reusables.github-actions.self-hosted-runner-reusing }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.self-hosted-runner-removing-a-runner }}

### 从组织中删除运行器

{% note %}

**注意：** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

要从组织删除自托管的运行器，您必须是组织所有者。 建议您也访问自托管的运行器机器。

{{ site.data.reusables.github-actions.self-hosted-runner-reusing }}

{{ site.data.reusables.organizations.navigate-to-org }}
{{ site.data.reusables.organizations.org_settings}}
{{ site.data.reusables.repositories.settings-sidebar-actions }}
{{ site.data.reusables.github-actions.self-hosted-runner-removing-a-runner }}

### 从企业中删除运行器

{% note %}

**注意：** {{ site.data.reusables.github-actions.self-hosted-runner-removal-impact }}

{{ site.data.reusables.github-actions.self-hosted-runner-auto-removal }}

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}
要从企业帐户删除自托管运行器，您必须是组织所有者。 建议您也访问自托管的运行器机器。
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
要从组织删除自托管的运行器，您必须是组织所有者。 建议您也访问自托管的运行器机器。
{% endif %}

{{ site.data.reusables.github-actions.self-hosted-runner-reusing }}

{% if currentVersion == "free-pro-team@latest" %}
{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{% endif %}
{{ site.data.reusables.enterprise-accounts.policies-tab }}
{{ site.data.reusables.enterprise-accounts.actions-tab }}
{{ site.data.reusables.github-actions.self-hosted-runner-removing-a-runner }}
