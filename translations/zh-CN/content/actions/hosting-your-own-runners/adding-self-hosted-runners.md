---
title: 添加自托管的运行器
intro: '您可以将自托管的运行器添加到 {{ site.data.variables.product.prodname_actions }}。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

您可以将自托管的运行器添加到 {{ site.data.variables.product.prodname_actions }}。

如果您是组织或企业管理员，您可能希望在组织或企业级别添加自托管的运行器。 此方法使运行器可用于组织或企业中的多个仓库，还允许您在一个位置管理运行器。

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
{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
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

#### 让企业运行器可用于仓库

在默认情况下，企业的“默认”自托管运行器组的运行器可用于企业中的所有组织，但不可用于每个组织中的所有仓库。

要让企业级自托管运行器组可用于组织仓库，您可能需要更改组织对运行器组的继承设置，使运行器可用于组织中的仓库。

有关更改运行器组访问设置的更多信息，请参阅“[使用组管理对自托管运行器的访问](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。
