---
title: 关于自托管运行器
intro: '您可以托管自己的运行器，并自定义用于在 {% data variables.product.prodname_actions %} 工作流程中运行作业的环境。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'overview'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于自托管运行器

{% data reusables.github-actions.self-hosted-runner-description %} 自托管的运行器可以是物理、虚拟，在容器中，也可以在本地或云端。

您可以在管理层次结构的各个层级添加自托管运行器：
- 仓库级运行器专用于单个仓库。
- 组织级运行器可以处理组织中多个仓库的作业。
- 企业级运行器可以分配到企业帐户中的多个组织。

运行器机器使用 {% data variables.product.prodname_actions %} 自托管运行器应用程序连接到 {% data variables.product.product_name %}。 {% data reusables.github-actions.runner-app-open-source %} 当发布新版本时，运行器应用程序在作业分配到运行器时或发布后一周内（如果运行器没有被分配任何作业）会自动更新。

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

有关安装和使用自托管运行器的更多信息，请参阅“[添加自托管运行器](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)”和“[在工作流程中使用自托管运行器](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)”。

### {% data variables.product.prodname_dotcom %} 托管的运行器与自托管运行器之间的差异

{% data variables.product.prodname_dotcom %} 托管的运行器提供了一个更快、更简单的工作流程运行方式，而自托管运行器是您的自定义环境中高度可配置的工作流程运行方式。

**{% data variables.product.prodname_dotcom %} 托管的运行器：**
- 接收操作系统、预安装的软件包和工具以及自托管运行器程序应用程序的自动更新。
- 被 {% data variables.product.prodname_dotcom %} 管理和维护。
- 为每个作业执行提供一个干净的实例。
- 使用 {% data variables.product.prodname_dotcom %} 计划设定的免费分钟数，超过免费分钟数后按分钟收费。

**自托管运行器：**
- 仅接收自托管运行器应用程序的自动更新。 您负责更新操作系统和所有其他软件。
- 可使用已付费的云服务或本地计算机。
- 可根据您的硬件、操作系统、软件和安全要求进行自定义。
- 无需为每个作业执行提供一个干净的实例。
- 可免费使用 {% data variables.product.prodname_actions %}，但是您对运行器维护费用负责。

### 自托管运行器机器的要求

只要符合以下要求，便可将任何计算机用作自托管运行器：

* 您可以在机器上安装和运行自托管运行器应用程序。 更多信息请参阅“[自托管运行器支持的操作系统](#supported-operating-systems-for-self-hosted-runners)”。
* 计算机可与 {% data variables.product.prodname_actions %} 通信。 更多信息请参阅“[自托管运行器与 {% data variables.product.prodname_dotcom %} 之间的通信](#communication-between-self-hosted-runners-and-github)”。
* 机器有足够的硬件资源来执行您计划运行的工作流程类型。 自托管运行器应用程序本身只需要很少的资源。
* 如果您想运行使用 Docker 容器操作或服务容器的工作流程，您必须使用 Linux 机器并安装 Docker。

### 使用限制

在使用自托管的运行器时，对 {% data variables.product.prodname_actions %} 的使用有一些限制。 这些限制可能会有变动。

{% data reusables.github-actions.usage-workflow-run-time %}
- **作业排队时间** - 自托管运行器的每个作业最多可排队 24 小时。 如果自托管运行器在此限制内没有开始执行作业，则作业将被终止，并且无法完成。
{% data reusables.github-actions.usage-api-requests %}
- **作业矩阵** - {% data reusables.github-actions.usage-matrix-limits %}

### 自托管运行器支持的操作系统

自托管运行器应用程序支持以下操作系统。

#### Linux

- Red Hat Enterprise Linux 7
- CentOS 7
- Oracle Linux 7
- Fedora 29 或更高版本
- Debian 9 或更高版本
- Ubuntu 16.04 或更高版本
- Linux Mint 18 或更高版本
- openSUSE 15 或更高版本
- SUSE Enterprise Linux (SLES) 12 SP2 或更高版本

#### Windows

- Windows 7 64 位
- Windows 8.1 64 位
- Windows 10 64 位
- Windows Server 2012 R2 64 位
- Windows Server 2016 64 位
- Windows Server 2019 64 位

#### macOS

- macOS 10.13 (High Sierra) 或更高版本

{% if enterpriseServerVersions contains currentVersion %}

### 自托管运行器与 {% data variables.product.prodname_dotcom %} 之间的通信

计算机可与 {% data variables.product.prodname_actions %} 通信。 更多信息请参阅“[自托管运行器与 {% data variables.product.prodname_dotcom %} 之间的通信](#communication-between-self-hosted-runners-and-github)”。

{% endif %}

### 自托管运行器与 {% data variables.product.product_name %} 之间的通信

自托管运行器将调查 {% data variables.product.product_name %} 以检索应用程序更新，并检查是否有作业在排队等待处理。 自托管运行器使用 HTTPS _long poll_ 打开 {% data variables.product.product_name %} 连接 50 秒，如果没有收到任何响应，就会暂停并创建新的长轮询。 应用程序必须在机器上运行才能接受和运行 {% data variables.product.prodname_actions %} 作业。

{% if currentVersion == "free-pro-team@latest" %}

您必须确保机器具有适当的网络访问权限才可与以下列出的 {% data variables.product.prodname_dotcom %} URL 通信。

```
github.com
api.github.com
*.actions.githubusercontent.com
codeload.github.com
```

如果您对 {% data variables.product.prodname_dotcom %} 组织或企业帐户使用 IP 地址允许列表，必须将自托管运行器的 IP 地址添加到允许列表。 更多信息请参阅“[管理组织允许的 IP 地址](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)”或“[在企业帐户中实施安全设置](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#using-github-actions-with-an-ip-allow-list)”。

{% else %}

您必须确保机器具有适当的网络访问权限才可与 {% data variables.product.product_location %} 通信。

{% endif %}

您也可以通过代理服务器使用自托管的运行器。 更多信息请参阅“[将代理服务器与自托管运行器一起使用](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners)”。

### 使用公共仓库的自托管运行器安全性

{% data reusables.github-actions.self-hosted-runner-security %}

这对 {% data variables.product.prodname_dotcom %} 托管的运行器不是问题，因为每个 {% data variables.product.prodname_dotcom %} 托管的运行器始终是一个干净的独立虚拟机， 在作业执行结束时被销毁。

在自托管运行器上运行不受信任的工作流程会给您的机器和网络环境带来严重的安全风险，特别是机器在同一环境下执行不同的作业时。 其中一些风险包括：

* 机器上运行的恶意程序。
* 逃避机器的运行器沙盒。
* 显示对机器网络环境的访问权限。
* 在机器上保持不需要或危险的数据。
