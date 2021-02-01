---
title: 添加自托管的运行器
intro: '您可以将自托管的运行器添加到 {{ site.data.variables.product.prodname_actions }}。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

您可以将自托管的运行器添加到 {{ site.data.variables.product.prodname_actions }}。

If you are an organization or enterprise administrator, you might want to add your self-hosted runners at the organization or enterprise level. This approach makes the runner available to multiple repositories in your organization or enterprise, and also lets you to manage your runners in one place.

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

{% data reusables.github-actions.self-hosted-runner-public-repo-access %}

### 添加自托管运行器到企业

您可以将自托管运行器添加到企业，在该企业中可以将它们分配给多个组织。 然后，组织管理员能够控制哪些仓库可以使用它。

{% if currentVersion == "free-pro-team@latest" %}
要将自托管的运行器添加到企业帐户，您必须是组织所有者。
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21"%}
要在
{% data variables.product.product_location %} 的企业级删除自托管运行器，您必须是网站管理员。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. 单击 **Self-hosted runners（自托管运行器）**选项卡。
1. 单击 **Add new（新增）**，然后单击 **New runner（新运行器）**。 新运行器被分配到默认组。 您可以在注册运行器后修改运行器组。 更多信息请参阅“[管理对自托管运行器的访问](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”。
{% data reusables.github-actions.self-hosted-runner-configure %}
{% data reusables.github-actions.self-hosted-runner-check-installation-success %}

{% data reusables.github-actions.self-hosted-runner-public-repo-access %}

#### Making enterprise runners available to repositories

By default, runners in an enterprise's "Default" self-hosted runner group are available to all organizations in the enterprise, but are not available to all repositories in each organization.

To make an enterprise-level self-hosted runner group available to an organization repository, you might need to change the organization's inherited settings for the runner group to make the runner available to repositories in the organization.

For more information on changing runner group access settings, see "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
