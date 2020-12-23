---
title: 为设备配置代码扫描
shortTitle: 配置代码扫描
intro: '您可以为 {% data variables.product.product_location %} 启用、配置和禁用 {% data variables.product.prodname_code_scanning %}。 {% data variables.product.prodname_code_scanning_capc %} 允许用户扫描代码以发现漏洞和错误。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

### 关于 {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

下表概括了 {% data variables.product.prodname_code_scanning %} 的可用分析类型，并提供了为单个仓库启用功能的链接。

{% data reusables.code-scanning.enabling-options %}

为使用户 {% data variables.product.product_location %} 在仓库中启用 {% data variables.product.prodname_code_scanning %}，您需要作为站点管理员为整个设备启用此功能。

### 如何知道我的设备是否启用 {% data variables.product.prodname_code_scanning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. 检查左侧边栏中是否有 **{% data variables.product.prodname_advanced_security %}** 条目。 ![高级安全侧边栏](/assets/images/enterprise/management-console/sidebar-advanced-security.png)

如果您在侧边栏中看不到 **{% data variables.product.prodname_advanced_security %}**，这意味着您的许可不支持 {% data variables.product.prodname_advanced_security %} 功能，包括 {% data variables.product.prodname_code_scanning %}。 {% data variables.product.prodname_advanced_security %} 的许可使您和您的用户能够访问那些有助于提高仓库和代码安全性的功能。

### 启用 {% data variables.product.prodname_code_scanning %}

{% data reusables.enterprise_management_console.enable-disable-code-scanning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. 在“
{% data variables.product.prodname_advanced_security %}”下，单击 **{% data variables.product.prodname_code_scanning_capc %}**。
![用于启用或禁用 {% data variables.product.prodname_code_scanning %} 的复选框](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}


### 使用 {% data variables.product.prodname_actions %} 运行 {% data variables.product.prodname_code_scanning %}

#### 设置自托管运行器

如果您参加 {% data variables.product.prodname_actions %} 公测，则 {% data variables.product.prodname_ghe_server %} 可以使用 {% data variables.product.prodname_actions %} 工作流程运行 {% data variables.product.prodname_code_scanning %}。 首先，您需要在环境中预配一个或多个自托管的 {% data variables.product.prodname_actions %} 运行器。 您可以在仓库、组织或企业帐户级别预配自托管运行器。 更多信息请参阅“[关于自托管的运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”和“[添加自托管的运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

您必须确保 Git 在用于运行 {% data variables.product.prodname_codeql %} 操作的任何自托管运行器上的 PATH 变量中。

#### 预配操作
要在 {% data variables.product.prodname_ghe_server %} 上使用 {% data variables.product.prodname_actions %} 运行 {% data variables.product.prodname_code_scanning %}，必须在本地可以进行适当的操作。 您可以通过三种方式使操作可用。

- **推荐** 您可以使用 [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) 自动从 {% data variables.product.prodname_dotcom_the_website %} 下载操作。 托管实例的机器必须能够访问 {% data variables.product.prodname_dotcom_the_website %}。 此方法可确保自动获取最新软件。 更多信息请参阅“[配置 {% data variables.product.prodname_github_connect %} 以同步 {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)”。
- 如果要使用 {% data variables.product.prodname_codeql_workflow %}，可以使用 [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/) 上的 {% data variables.product.prodname_codeql %} 操作同步工具将仓库从 {% data variables.product.prodname_dotcom_the_website %} 同步到 {% data variables.product.prodname_ghe_server %}。 无论您的 {% data variables.product.product_location %} 或 {% data variables.product.prodname_actions %} 运行器是否可以访问互联网， 只要您可以同时在计算机上访问 {% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}，您都可以使用此工具。
- 您可以通过使用操作克隆仓库，在服务器上创建 {% data variables.product.prodname_dotcom_the_website %} 仓库的本地副本。 例如，如果要使用 {% data variables.product.prodname_codeql %} 操作，可以在实例中创建一个名为 `github/codeql-action` 的仓库，然后从 {% data variables.product.prodname_dotcom_the_website %} 克隆[仓库](https://github.com/github/codeql-action)，再将该仓库推送到实例的 `github/codeql-action` 仓库。 您还需要从 {% data variables.product.prodname_dotcom_the_website %} 上的仓库下载任何发行版，并将它们作为发行版上传到实例的 `github/codeql-action` 仓库。


##### 配置 {% data variables.product.prodname_github_connect %} 以同步 {% data variables.product.prodname_actions %}

1. 如果要从 {% data variables.product.prodname_dotcom_the_website %} 下载按需操作工作流程，则需要启用 {% data variables.product.prodname_github_connect %}。 更多信息请参阅“[启用 {% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)”。
2. 您还需要为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_actions %}。 更多信息请参阅“[启用 {% data variables.product.prodname_actions %} 和配置存储](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)”。
3. 下一步是使用 {% data variables.product.prodname_github_connect %} 配置对 {% data variables.product.prodname_dotcom_the_website %} 上的操作的访问权限。 更多信息请参阅“[启用使用 {% data variables.product.prodname_github_connect %} 自动访问 {% data variables.product.prodname_dotcom_the_website %} 操作](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。
4. 将自托管运行器添加到仓库、组织或企业帐户。 更多信息请参阅“[添加自托管的运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

在配置自托管运行器后，用户可以对 {% data variables.product.prodname_code_scanning %} 上的单个仓库启用 {% data variables.product.product_location %}。 默认 {% data variables.product.prodname_code_scanning %} 工作流程使用 `on.push` 事件触发代码扫描 - 每次推送到任何包含工作流程文件的分支时触发。

### 使用 {% data variables.product.prodname_codeql_runner %} 运行 {% data variables.product.prodname_code_scanning %}
如果您的组织未参加 {% data variables.product.prodname_actions %} 的测试版，或者您不想使用 {% data variables.product.prodname_actions %}，则可以使用 {% data variables.product.prodname_codeql_runner %} 运行 {% data variables.product.prodname_code_scanning %}。

该 {% data variables.product.prodname_codeql_runner %} 是一个命令行工具，您可以将其添加到第三方 CI/CD 系统中。 该工具在 {% data variables.product.prodname_dotcom %} 仓库检出时运行 {% data variables.product.prodname_codeql %} 分析。 更多信息请参阅“[在 CI 系统中运行 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)”。

### 禁用 {% data variables.product.prodname_code_scanning %}

{% data reusables.enterprise_management_console.enable-disable-code-scanning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. 在“
{% data variables.product.prodname_advanced_security %}”下，取消选择 **{% data variables.product.prodname_code_scanning_capc %}**。
![用于启用或禁用 {% data variables.product.prodname_code_scanning %} 的复选框](/assets/images/enterprise/management-console/code-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}
