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
topics:
  - 企业
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

{% data reusables.enterprise_management_console.advanced-security-license %}

### 启用 {% data variables.product.prodname_code_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. 在“
{% data variables.product.prodname_advanced_security %}”下，单击 **{% data variables.product.prodname_code_scanning_capc %}**。
![用于启用或禁用 {% data variables.product.prodname_code_scanning %} 的复选框](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

### 使用 {% data variables.product.prodname_actions %} 运行 {% data variables.product.prodname_code_scanning %}

#### 设置自托管运行器

{% data variables.product.prodname_ghe_server %} 可以使用 {% data variables.product.prodname_actions %} 工作流程运行 {% data variables.product.prodname_code_scanning %}。 首先，您需要在环境中预配一个或多个自托管的 {% data variables.product.prodname_actions %} 运行器。 您可以在仓库、组织或企业帐户级别预配自托管运行器。 更多信息请参阅“[关于自托管的运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”和“[添加自托管的运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

您必须确保 Git 在用于运行 {% data variables.product.prodname_codeql %} 操作的任何自托管运行器上的 PATH 变量中。

#### 预配操作

{% if currentVersion ver_gt "enterprise-server@2.22" %}
如果您想使用操作在
{% data variables.product.prodname_ghe_server %} 上运行 {% data variables.product.prodname_code_scanning %}，操作必须在您的设备上可用。

{% data variables.product.prodname_codeql %} 操作包含在您安装的 {% data variables.product.prodname_ghe_server %} 中。 如果 {% data variables.product.prodname_ghe_server %} 可以访问互联网，操作将自动下载进行分析所需的 {% data variables.product.prodname_codeql %} 包。 或者，您也可以使用同步工具使 {% data variables.product.prodname_codeql %} 分析包在本地可用。 更多信息请参阅下面的“[在没有互联网接入的服务器上配置 {% data variables.product.prodname_codeql %} 分析](#configuring-codeql-analysis-on-a-server-without-internet-access)”。

您也可以通过设置 {% data variables.product.prodname_github_connect %}，使第三方操作可供 {% data variables.product.prodname_code_scanning %} 的用户使用。 更多信息请参阅下面的“[配置 {% data variables.product.prodname_github_connect %} 以同步 {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)”。

#### 在没有互联网接入的服务器上配置 {% data variables.product.prodname_codeql %} 分析
如果您在上面运行 {% data variables.product.prodname_ghe_server %} 的服务器未连接到互联网，但您要允许用户对其仓库启用 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}，则您必须使用 {% data variables.product.prodname_codeql %} 操作同步工具将 {% data variables.product.prodname_codeql %} 分析包从 {% data variables.product.prodname_dotcom_the_website %} 复制到您的服务器。 有关该工具及其使用方法，请参阅 [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/)。

如果您设置了 {% data variables.product.prodname_codeql %} 操作同步工具，您可以使用它来同步最新发布的 {% data variables.product.prodname_codeql %} 操作和相关的 {% data variables.product.prodname_codeql %} 分析包。 这些兼容 {% data variables.product.prodname_ghe_server %}。

{% endif %}

{% if currentVersion == "enterprise-server@2.22" %}
要
在 {% data variables.product.prodname_ghe_server %} 上使用 {% data variables.product.prodname_actions %} 运行 {% data variables.product.prodname_code_scanning %}，必须在本地可以进行适当的操作。 您可以通过三种方式使操作可用。

- **推荐**：您可以使用 [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) 自动从 {% data variables.product.prodname_dotcom_the_website %} 下载操作。 托管实例的机器必须能够访问 {% data variables.product.prodname_dotcom_the_website %}。 此方法可确保自动获取最新软件。 更多信息请参阅“[配置 {% data variables.product.prodname_github_connect %} 以同步 {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)”。
- 如果要使用 {% data variables.product.prodname_codeql_workflow %}，可以使用 [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/) 上的 {% data variables.product.prodname_codeql %} 操作同步工具将仓库从 {% data variables.product.prodname_dotcom_the_website %} 同步到 {% data variables.product.prodname_ghe_server %}。 无论您的 {% data variables.product.product_location %} 或 {% data variables.product.prodname_actions %} 运行器是否可以访问互联网， 只要您可以同时在计算机上访问 {% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}，您都可以使用此工具。
- 您可以通过克隆包含操作的 {% data variables.product.prodname_dotcom_the_website %} 仓库，在服务器上创建操作仓库的本地副本。 例如，如果要使用 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 操作，可以在实例中创建一个名为 `github/codeql-action` 的仓库，然后从 {% data variables.product.prodname_dotcom_the_website %} 克隆[仓库](https://github.com/github/codeql-action)，再将该仓库推送到实例的 `github/codeql-action` 仓库。 您还需要从 {% data variables.product.prodname_dotcom_the_website %} 上的仓库下载任何发行版，并将它们作为发行版上传到实例的 `github/codeql-action` 仓库。
{% endif %}

#### 配置 {% data variables.product.prodname_github_connect %} 以同步 {% data variables.product.prodname_actions %}
1. 如果要从 {% data variables.product.prodname_dotcom_the_website %} 下载按需操作工作流程，则需要启用 {% data variables.product.prodname_github_connect %}。 更多信息请参阅“[启用 {% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)”。
2. 您还需要为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_actions %}。 更多信息请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)”。
3. 下一步是使用 {% data variables.product.prodname_github_connect %} 配置对 {% data variables.product.prodname_dotcom_the_website %} 上的操作的访问权限。 更多信息请参阅“[启用使用 {% data variables.product.prodname_github_connect %} 自动访问 {% data variables.product.prodname_dotcom_the_website %} 操作](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。
4. 将自托管运行器添加到仓库、组织或企业帐户。 更多信息请参阅“[添加自托管的运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

#### 对单个仓库启用代码扫描
在配置自托管运行器{% if currentVersion == "enterprise-server@2.22" %}并预配操作后，{% endif %}用户可以对 {% data variables.product.product_location %} 上的单个仓库启用 {% data variables.product.prodname_code_scanning %}。 更多信息请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)”。

### 使用 {% data variables.product.prodname_codeql_runner %} 运行 {% data variables.product.prodname_code_scanning %}
如果您不想使用 {% data variables.product.prodname_actions %}，您可以使用 {% data variables.product.prodname_codeql_runner %} 运行 {% data variables.product.prodname_code_scanning %}。

该 {% data variables.product.prodname_codeql_runner %} 是一个命令行工具，您可以将其添加到第三方 CI/CD 系统中。 该工具在 {% data variables.product.prodname_dotcom %} 仓库检出时运行 {% data variables.product.prodname_codeql %} 分析。 更多信息请参阅“[在 CI 系统中运行 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)”。

### 禁用 {% data variables.product.prodname_code_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. 在“
{% data variables.product.prodname_advanced_security %}”下，取消选择 **{% data variables.product.prodname_code_scanning_capc %}**。
![用于启用或禁用 {% data variables.product.prodname_code_scanning %} 的复选框](/assets/images/enterprise/management-console/code-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}

### 通过管理 shell (SSH) 启用或禁用 {% data variables.product.prodname_code_scanning %}

您可以在 {% data variables.product.product_location %} 上程序化启用或禁用 {% data variables.product.prodname_code_scanning %}。 例如，当您部署用于暂存或灾难恢复的实例时，可以使用基础架构即代码工具启用 {% data variables.product.prodname_code_scanning %}。

有关 {% data variables.product.prodname_ghe_server %} 的管理 shell 和命令行实用程序的更多信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”和“[命令行实用程序](/admin/configuration/command-line-utilities#ghe-config)”。

1. SSH 连接到 {% data variables.product.product_location %}。
1. 启用 {% data variables.product.prodname_code_scanning %}。
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
2. （可选）禁用 {% data variables.product.prodname_code_scanning %}。
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
3. 应用配置。
    ```shell
  ghe-config-apply
  ```
