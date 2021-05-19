---
title: 为设备配置代码扫描
shortTitle: 配置代码扫描
intro: '您可以为 {% data variables.product.product_location %} 启用、配置和禁用 {% data variables.product.prodname_code_scanning %}。 {% data variables.product.prodname_code_scanning_capc %} 允许用户扫描代码以发现漏洞和错误。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
versions:
  enterprise-server: '>=2.22'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
---

{% data reusables.code-scanning.beta %}

### 关于 {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

You can configure {% data variables.product.prodname_code_scanning %} to run {% data variables.product.prodname_codeql %} analysis and third-party analysis. {% data variables.product.prodname_code_scanning_capc %} also supports running analysis natively using {% data variables.product.prodname_actions %} or externally using existing CI/CD infrastructure. The table below summarizes all the options available to users when you configure {% data variables.product.product_location %} to allow {% data variables.product.prodname_code_scanning %} using actions.

{% data reusables.code-scanning.enabling-options %}

### Prerequisites for {% data variables.product.prodname_code_scanning %}

- A license for {% data variables.product.prodname_GH_advanced_security %}{% if currentVersion ver_gt "enterprise-server@3.0" %} (see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/about-licensing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_code_scanning_capc %} enabled in the management console (see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

- A VM or container for {% data variables.product.prodname_code_scanning %} analysis to run in.

### 使用 {% data variables.product.prodname_actions %} 运行 {% data variables.product.prodname_code_scanning %}

#### 设置自托管运行器

{% data variables.product.prodname_ghe_server %} 可以使用 {% data variables.product.prodname_actions %} 工作流程运行 {% data variables.product.prodname_code_scanning %}。 首先，您需要在环境中预配一个或多个自托管的 {% data variables.product.prodname_actions %} 运行器。 您可以在仓库、组织或企业帐户级别预配自托管运行器。 更多信息请参阅“[关于自托管的运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”和“[添加自托管的运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

您必须确保 Git 在用于运行 {% data variables.product.prodname_codeql %} 操作的任何自托管运行器上的 PATH 变量中。

#### Provisioning the actions for {% data variables.product.prodname_code_scanning %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}
If you want to use actions to run {% data variables.product.prodname_code_scanning %} on {% data variables.product.prodname_ghe_server %}, the actions must be available on your appliance.

{% data variables.product.prodname_codeql %} 操作包含在您安装的 {% data variables.product.prodname_ghe_server %} 中。 如果 {% data variables.product.prodname_ghe_server %} 可以访问互联网，操作将自动下载进行分析所需的 {% data variables.product.prodname_codeql %} 包。 或者，您也可以使用同步工具使 {% data variables.product.prodname_codeql %} 分析包在本地可用。 更多信息请参阅下面的“[在没有互联网接入的服务器上配置 {% data variables.product.prodname_codeql %} 分析](#configuring-codeql-analysis-on-a-server-without-internet-access)”。

您也可以通过设置 {% data variables.product.prodname_github_connect %}，使第三方操作可供 {% data variables.product.prodname_code_scanning %} 的用户使用。 更多信息请参阅下面的“[配置 {% data variables.product.prodname_github_connect %} 以同步 {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)”。

#### 在没有互联网接入的服务器上配置 {% data variables.product.prodname_codeql %} 分析
如果您在上面运行 {% data variables.product.prodname_ghe_server %} 的服务器未连接到互联网，但您要允许用户对其仓库启用 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}，则您必须使用 {% data variables.product.prodname_codeql %} 操作同步工具将 {% data variables.product.prodname_codeql %} 分析包从 {% data variables.product.prodname_dotcom_the_website %} 复制到您的服务器。 有关该工具及其使用方法，请参阅 [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/)。

如果您设置了 {% data variables.product.prodname_codeql %} 操作同步工具，您可以使用它来同步最新发布的 {% data variables.product.prodname_codeql %} 操作和相关的 {% data variables.product.prodname_codeql %} 分析包。 这些兼容 {% data variables.product.prodname_ghe_server %}。

{% endif %}

{% if currentVersion == "enterprise-server@2.22" %}
要在 {% data variables.product.prodname_ghe_server %} 上使用 {% data variables.product.prodname_actions %} 运行 {% data variables.product.prodname_code_scanning %}，必须在本地可以进行适当的操作。 您可以通过三种方式使操作可用。

- **推荐**：您可以使用 [{% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud) 自动从 {% data variables.product.prodname_dotcom_the_website %} 下载操作。 托管实例的机器必须能够访问 {% data variables.product.prodname_dotcom_the_website %}。 此方法可确保自动获取最新软件。 更多信息请参阅“[配置 {% data variables.product.prodname_github_connect %} 以同步 {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)”。
- 如果要使用 {% data variables.product.prodname_codeql_workflow %}，可以使用 [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/) 上的 {% data variables.product.prodname_codeql %} 操作同步工具将仓库从 {% data variables.product.prodname_dotcom_the_website %} 同步到 {% data variables.product.prodname_ghe_server %}。 无论您的 {% data variables.product.product_location %} 或 {% data variables.product.prodname_actions %} 运行器是否可以访问互联网， 只要您可以同时在计算机上访问 {% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}，您都可以使用此工具。
- 您可以通过克隆包含操作的 {% data variables.product.prodname_dotcom_the_website %} 仓库，在服务器上创建操作仓库的本地副本。 例如，如果要使用 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 操作，可以在实例中创建一个名为 `github/codeql-action` 的仓库，然后从 {% data variables.product.prodname_dotcom_the_website %} 克隆[仓库](https://github.com/github/codeql-action)，再将该仓库推送到实例的 `github/codeql-action` 仓库。 您还需要从 {% data variables.product.prodname_dotcom_the_website %} 上的仓库下载任何发行版，并将它们作为发行版上传到实例的 `github/codeql-action` 仓库。
{% endif %}

#### 配置 {% data variables.product.prodname_github_connect %} 以同步 {% data variables.product.prodname_actions %}
1. 如果要从 {% data variables.product.prodname_dotcom_the_website %} 下载按需操作工作流程，则需要启用 {% data variables.product.prodname_github_connect %}。 更多信息请参阅“[启用 {% data variables.product.prodname_github_connect %}](/enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud#enabling-github-connect)”。
2. 您还需要为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_actions %}。 更多信息请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)”。
3. 下一步是使用 {% data variables.product.prodname_github_connect %} 配置对 {% data variables.product.prodname_dotcom_the_website %} 上的操作的访问权限。 更多信息请参阅“[启用使用 {% data variables.product.prodname_github_connect %} 自动访问 {% data variables.product.prodname_dotcom_the_website %} 操作](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)”。
4. 将自托管运行器添加到仓库、组织或企业帐户。 更多信息请参阅“[添加自托管的运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

### 使用 {% data variables.product.prodname_codeql_runner %} 运行 {% data variables.product.prodname_code_scanning %}
如果您不想使用 {% data variables.product.prodname_actions %}，您可以使用 {% data variables.product.prodname_codeql_runner %} 运行 {% data variables.product.prodname_code_scanning %}。

该 {% data variables.product.prodname_codeql_runner %} 是一个命令行工具，您可以将其添加到第三方 CI/CD 系统中。 该工具在 {% data variables.product.prodname_dotcom %} 仓库检出时运行 {% data variables.product.prodname_codeql %} 分析。 更多信息请参阅“[在 CI 系统中运行 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)”。
