---
title: 为设备配置代码扫描
shortTitle: Configuring code scanning
intro: '你可以为 {% data variables.location.product_location %} 启用、配置和禁用 {% data variables.product.prodname_code_scanning %}。 {% data variables.product.prodname_code_scanning_capc %} 允许用户扫描代码以发现漏洞和错误。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/advanced-security/configuring-code-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
ms.openlocfilehash: 11ad9bfe108d339af3992277cab0918998eb54fb
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161084'
---
{% data reusables.code-scanning.beta %}

## 关于 {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

您可以配置 {% data variables.product.prodname_code_scanning %} 以运行 {% data variables.product.prodname_codeql %} 分析和第三方分析。 {% data variables.product.prodname_code_scanning_capc %} 还支持使用 {% data variables.product.prodname_actions %} 在本地运行分析，或使用现有 CI/CD 基础架构在外部运行分析。 下表总结了在配置 {% data variables.location.product_location %} 以允许使用操作进行 {% data variables.product.prodname_code_scanning %} 时用户可用的所有选项。

{% data reusables.code-scanning.enabling-options %}

## 检查您的许可是否包含 {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## {% data variables.product.prodname_code_scanning %} 的前提条件

- {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} 的许可证（请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %} 的计费](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)”）{% endif %}

- 在管理控制台中启用的 {% data variables.product.prodname_code_scanning_capc %}（请参阅“[为企业启用 {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)”）

- 用于运行 {% data variables.product.prodname_code_scanning %} 分析的 VM 或容器。

## 使用 {% data variables.product.prodname_actions %} 运行 {% data variables.product.prodname_code_scanning %}

### 设置自托管运行器

{% data variables.product.prodname_ghe_server %} 可以使用 {% data variables.product.prodname_actions %} 工作流程运行 {% data variables.product.prodname_code_scanning %}。 首先，您需要在环境中预配一个或多个自托管的 {% data variables.product.prodname_actions %} 运行器。 您可以在仓库、组织或企业帐户级别预配自托管运行器。 有关详细信息，请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”和“[添加自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)。”

您必须确保 Git 在用于运行 {% data variables.product.prodname_codeql %} 操作的任何自托管运行器上的 PATH 变量中。

{% ifversion ghes > 3.7 or ghae > 3.7 %} {% note %}

如果在企业中使用 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 分析用 Python 编写的代码，则必须确保自托管运行器已安装 Python 3。

{% endnote %} {% endif %}

### 预配 {% data variables.product.prodname_code_scanning %} 的操作

{% ifversion ghes %} 如果想使用操作在 {% data variables.product.prodname_ghe_server %} 上运行 {% data variables.product.prodname_code_scanning %}，则这些操作必须在设备上可用。

{% data variables.product.prodname_codeql %} 操作包含在您安装的 {% data variables.product.prodname_ghe_server %} 中。 如果 {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }} 和 {% data variables.product.prodname_actions %} 运行器均可访问 Internet，则操作将自动下载执行分析所需的 {% data variables.product.prodname_codeql %} {% data variables.product.codeql_cli_ghes_recommended_version %} 捆绑包。 或者，你也可以使用同步工具使最新发布版本的 {% data variables.product.prodname_codeql %} 分析包在本地可用。 有关详细信息，请参阅下面的“[在没有 Internet 访问的服务器上配置 {% data variables.product.prodname_codeql %} 分析](#configuring-codeql-analysis-on-a-server-without-internet-access)”。

您也可以通过设置 {% data variables.product.prodname_github_connect %}，使第三方操作可供 {% data variables.product.prodname_code_scanning %} 的用户使用。 有关详细信息，请参阅下面的“[配置 {% data variables.product.prodname_github_connect %} 以同步 {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions)”。

### 在没有互联网接入的服务器上配置 {% data variables.product.prodname_codeql %} 分析
如果您在上面运行 {% data variables.product.prodname_ghe_server %} 的服务器未连接到互联网，但您要允许用户对其仓库启用 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}，则您必须使用 {% data variables.product.prodname_codeql %} 操作同步工具将 {% data variables.product.prodname_codeql %} 分析包从 {% data variables.product.prodname_dotcom_the_website %} 复制到您的服务器。 该工具及其用法的详细信息在 [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/) 提供。

如果您设置了 {% data variables.product.prodname_codeql %} 操作同步工具，您可以使用它来同步最新发布的 {% data variables.product.prodname_codeql %} 操作和相关的 {% data variables.product.prodname_codeql %} 分析包。 这些兼容 {% data variables.product.prodname_ghe_server %}。

{% endif %}

### 配置 {% data variables.product.prodname_github_connect %} 以同步 {% data variables.product.prodname_actions %}
1. 如果要从 {% data variables.product.prodname_dotcom_the_website %} 下载按需操作工作流程，则需要启用 {% data variables.product.prodname_github_connect %}。 有关详细信息，请参阅“[启用 {% data variables.product.prodname_github_connect %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud#enabling-github-connect)。”
2. 还需要为 {% data variables.location.product_location %} 启用 {% data variables.product.prodname_actions %}。 有关详细信息，请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)。”
3. 下一步是使用 {% data variables.product.prodname_github_connect %} 配置对 {% data variables.product.prodname_dotcom_the_website %} 上的操作的访问权限。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_github_connect %} 启用对 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)。”
4. 将自托管运行器添加到仓库、组织或企业帐户。 有关详细信息，请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)。”

## 使用 {% data variables.product.prodname_codeql_cli %} 运行代码扫描

如果不想使用 {% data variables.product.prodname_actions %}，应该使用 {% data variables.product.prodname_codeql_cli %} 运行 {% data variables.product.prodname_code_scanning %}。 

{% data variables.product.prodname_codeql_cli %} 是一个命令行工具，可用于分析任何计算机上的代码库，包括第三方 CI/CD 系统。 有关详细信息，请参阅“[在 CI 系统中安装 CodeQL CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)。”

{% ifversion codeql-runner-supported %}

## 使用 {% data variables.code-scanning.codeql_runner %} 运行 {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

如果不想使用 {% data variables.product.prodname_actions %}，可以使用 {% data variables.code-scanning.codeql_runner %} 运行 {% data variables.product.prodname_code_scanning %}。 

{% data variables.code-scanning.codeql_runner %} 是一个命令行工具，可将其添加到第三方 CI/CD 系统中。 该工具在 {% data variables.product.prodname_dotcom %} 仓库检出时运行 {% data variables.product.prodname_codeql %} 分析。 有关详细信息，请参阅“[在 CI 系统中运行 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)。”

{% endif %}
