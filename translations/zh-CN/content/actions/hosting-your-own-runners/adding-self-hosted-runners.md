---
title: 添加自托管的运行器
intro: '您可以将自托管的运行器添加到 {{ site.data.variables.product.prodname_actions }}。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

如果需要支持自托管运行器的操作系统的信息，或通过代理服务器的自托管运行器，请参阅“[关于自托管运行器](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)”。

{% warning %}

**警告：** {% data reusables.github-actions.self-hosted-runner-security %}

更多信息请参阅“[关于自托管运行器](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)”。

{% endwarning %}

### 添加自托管的运行器到仓库

您可以将自托管的运行器添加到单个仓库中。 要将自托管的运行器添加到用户仓库，您必须是仓库所有者。 对于组织仓库，您必须是组织所有者或拥有该仓库管理员的权限。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. 在“Self-hosted runners（自托管运行器）”下，单击 **Add runner（添加运行器）**。
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

### 添加自托管的运行器到组织

您可以在组织级别添加自托管的运行器，其中它们可被用于处理组织中的多个仓库的作业。 要将自托管的运行器添加到组织，您必须是组织所有者。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. 在“Self-hosted runners（自托管运行器）”下，单击 **Add new（新增）**，然后单击 **New runner（新运行器）**。
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

### 添加自托管运行器到企业

您可以将自托管运行器添加到企业，在该企业中可以将它们分配给多个组织。 然后，组织管理员能够控制哪些仓库可以使用它。

{% if currentVersion == "free-pro-team@latest" %}
要将自托管的运行器添加到企业帐户，您必须是组织所有者。
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
要在
{% data variables.product.product_location %} 的企业级添加自托管运行器，您必须是网站管理员。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% else if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21"%}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% endif %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. 单击 **Self-hosted runners（自托管运行器）**选项卡。
1. 单击 **Add new（新增）**，然后单击 **New runner（新运行器）**。 新运行器被分配到默认组。 您可以在注册运行器后修改运行器组。 更多信息请参阅“[管理对自托管运行器的访问](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”。
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}
