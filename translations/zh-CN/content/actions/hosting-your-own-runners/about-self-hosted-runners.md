---
title: 关于自托管运行程序
intro: '您可以托管自己的运行器，并自定义用于在 {% data variables.product.prodname_actions %} 工作流程中运行作业的环境。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
ms.openlocfilehash: ed4c8b5a113e73c6a78e1bb1f2cd0e2055c9b1bc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '146180205'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于自托管运行程序

自托管运行器是部署并管理以从 {% data variables.product.prodname_actions %} 在 {% ifversion ghae or ghec %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 上执行作业的系统。 有关 {% data variables.product.prodname_actions %} 的详细信息，请参阅[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}。{% elsif ghec or ghes or ghae %} 和[关于企业的 {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)。{% endif %}

{% data reusables.actions.self-hosted-runner-description %} {% data reusables.actions.self-hosted-runner-locations %}

您可以在管理层次结构的各个层级添加自托管运行器：
- 仓库级运行器专用于单个仓库。
- 组织级运行器可以处理组织中多个仓库的作业。
- 企业级运行器可以分配到企业帐户中的多个组织。

{% data reusables.actions.self-hosted-runner-architecture %}{% data reusables.actions.runner-app-open-source %} 当发布新版本时，运行器应用程序在作业分配到运行器时或发布后一周内（如果运行器没有被分配任何作业）会自动更新。

{% ifversion ghes %} {% note %}

注意：{% data reusables.actions.upgrade-runners-before-upgrade-ghes %}

{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

有关安装和使用自托管运行器的详细信息，请参阅[添加自托管运行器](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)和[在工作流中使用自托管运行器](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)。

## {% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dotcom %} 托管与{% elsif ghae %}{% endif %}自托管运行器之间的特点差异

{% ifversion fpt or ghec or ghes %} {% data variables.product.prodname_dotcom %} 托管的运行器提供了一个更快、更简单的工作流程运行方式，而{% elsif ghae %}自托管{% endif %}运行器是你的自定义环境中高度可配置的工作流程运行方式。 {% ifversion ghae %}自托管运行器：{% endif %}

{% ifversion fpt or ghec or ghes %} {% data variables.product.prodname_dotcom %}托管运行器：
- 接收操作系统、预安装包和工具以及自托管运行程序应用程序的自动更新。
- 被 {% data variables.product.prodname_dotcom %} 管理和维护。
- 每次执行作业时提供一个干净的实例。
- 使用 {% data variables.product.prodname_dotcom %} 计划设定的免费分钟数，超过免费分钟数后按分钟收费。

**自托管运行器：** {% endif %}
- 仅接收自托管运行器应用程序的自动更新{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6143 %}，但你可以禁用运行器的自动更新。 有关控制自托管运行器上的运行器软件更新的详细信息，请参阅[使用自托管运行器自动缩放](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#controlling-runner-software-updates-on-self-hosted-runners)。{% else %}。{% endif %} 你负责更新操作系统和所有其他软件。
- 可以使用已付费的云服务或本地计算机。
- 可以根据硬件、操作系统、软件和安全要求进行自定义。
- 无需在每次执行作业时提供一个干净的实例。
- 可免费使用 {% data variables.product.prodname_actions %}，但是您对运行器维护费用负责。{% ifversion ghec or ghes or ghae %}
- 可以组织成组以限制对特定{% ifversion restrict-groups-to-workflows %}工作流、{% endif %}组织和存储库的访问。 有关详细信息，请参阅[使用组管理对自托管运行器的访问权限](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)。{% endif %}

## 自托管运行器机器的要求

只要符合以下要求，便可将任何计算机用作自托管运行器：

* 您可以在机器上安装和运行自托管运行器应用程序。 有关详细信息，请参阅[自托管运行器支持的架构和操作系统](#supported-architectures-and-operating-systems-for-self-hosted-runners)。
* 计算机可与 {% data variables.product.prodname_actions %} 通信。 有关详细信息，请参阅[自托管运行器与 {% data variables.product.product_name %} 之间的通信](#communication-requirements)。
* 机器有足够的硬件资源来执行您计划运行的工作流程类型。 自托管运行器应用程序本身只需要很少的资源。
* 如果您想运行使用 Docker 容器操作或服务容器的工作流程，您必须使用 Linux 机器并安装 Docker。

{% ifversion fpt or ghes > 3.2 or ghec or ghae %}
## 自动缩放自托管运行器

您可以自动增加或减少环境中自托管运行器的数量，以响应您收到的 web 挂钩事件。 有关详细信息，请参阅[使用自托管运行器进行自动缩放](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)。

{% endif %}

## 使用限制

在使用自托管的运行器时，对 {% data variables.product.prodname_actions %} 的使用有一些限制。 这些限制可能会有变动。

{% data reusables.actions.usage-workflow-run-time %}
- **作业排队时间** - 自托管运行器的每个作业最多可排队 24 小时。 如果自托管运行器在此限制内没有开始执行作业，则作业将被终止，并且无法完成。
{% data reusables.actions.usage-api-requests %}
- **作业矩阵** - {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

## 自托管运行器的工作流连续性

{% data reusables.actions.runner-workflow-continuity %}

## 自托管运行器支持的架构和操作系统

自托管运行器应用程序支持以下操作系统。

### Linux

- Red Hat Enterprise Linux 7 或更新版本
- CentOS 7 或更高版本
- Oracle Linux 7
- Fedora 29 或更高版本
- Debian 9 或更高版本
- Ubuntu 16.04 或更高版本
- Linux Mint 18 或更高版本
- openSUSE 15 或更高版本
- SUSE Enterprise Linux (SLES) 12 SP2 或更高版本

### Windows

- Windows 7 64 位
- Windows 8.1 64 位
- Windows 10 64 位
- Windows Server 2012 R2 64 位
- Windows Server 2019 64 位

### macOS

- macOS 10.13 (High Sierra) 或更高版本

### 体系结构

自托管运行器应用程序支持以下处理器架构。

- `x64` - Linux、macOS、Windows。
- `ARM64` - 仅限 Linux。
- `ARM32` - 仅限 Linux。

{% ifversion ghes %}

## 对自承载运行程序的支持操作

可能需要进行额外的配置才可结合使用来自 {% data variables.product.prodname_dotcom_the_website %} 的操作与 {% data variables.product.prodname_ghe_server %}，或者结合使用 `actions/setup-LANGUAGE` 操作与没有互联网连接的自托管运行器。 有关详细信息，请参阅[管理对 {% data variables.product.prodname_dotcom_the_website %} 上操作的访问](/enterprise/admin/github-actions/managing-access-to-actions-from-githubcom)并联系 {% data variables.product.prodname_enterprise %} 站点管理员。

{% endif %}

<a name="communication-requirements"></a>

## 自托管运行器与 {% data variables.product.product_name %} 之间的通信

自托管运行器连接到 {% data variables.product.product_name %} 以接收作业分配并下载新版本的运行器应用程序。 自托管运行器使用 {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} long poll 打开 {% data variables.product.product_name %} 连接 50 秒，如果没有收到任何响应，就会暂停并创建新的长轮询。 应用程序必须在机器上运行才能接受和运行 {% data variables.product.prodname_actions %} 作业。

{% data reusables.actions.self-hosted-runner-ports-protocols %}

{% ifversion fpt or ghec %} 由于自托管运行器会打开与 {% data variables.product.product_location %} 的连接，因此无需允许 {% data variables.product.prodname_dotcom %} 与自托管运行器建立入站连接。
{% elsif ghes or ghae %} 只有从运行器到 {% data variables.product.product_location %} 的出站连接是必需的。 不需要从 {% data variables.product.product_location %} 到运行器的入站连接。
{%- endif %}

{% ifversion ghes %}

{% data variables.product.product_name %} 必须接受来自运行器通过 {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %}、使用 {% data variables.product.product_location %} 的主机名和 API 子域的入站连接，并且您的运行器必须允许通过 {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} 到 {% data variables.product.product_location %} 的主机名和 API 子域的出站连接。

{% elsif ghae %}

您必须确保自托管运行器具有适当的网络访问权限，以便与您的 {% data variables.product.product_name %} URL 及其子域进行通信。 例如，如果 {% data variables.product.product_name %} 的子域是 `octoghae`，则需要允许自托管运行器访问 `octoghae.githubenterprise.com`、`api.octoghae.githubenterprise.com` 和 `codeload.octoghae.githubenterprise.com`。

如果使用 IP 地址允许列表，则必须将自托管运行器的 IP 地址添加到允许列表中。 有关详细信息，请参阅[为组织管理允许的 IP 地址](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)。

{% endif %}

{% ifversion fpt or ghec %}

您必须确保机器具有适当的网络访问权限才可与以下列出的 {% data variables.product.prodname_dotcom %} 主机通信。 某些主机是基本运行器操作所必需的，而其他主机仅针对某些功能是必需的。

{% note %}

注意：下面列出的一些域名使用 `CNAME` 记录。 一些防火墙可能要求你为所有 `CNAME` 记录递归添加规则。 请注意，`CNAME` 记录将来可能会改变，只有下面列出的域名将保持不变。

{% endnote %}

**基本操作所需：**

```
github.com
api.github.com
```

**下载操作时需要：**

```
codeload.github.com
```

**运行器版本更新需要：**

```
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**上传/下载缓存和工作流构件时需要：**    

```
*.blob.core.windows.net
```

**检索 OIDC 令牌时需要：**

```
*.actions.githubusercontent.com
```

此外，您的工作流程可能需要访问其他网络资源。 例如，如果工作流程安装软件包或将容器发布到 {% data variables.product.prodname_dotcom %} Packages，则运行器还需要访问这些网络端点。

如果您对 {% data variables.product.prodname_dotcom %} 组织或企业帐户使用 IP 地址允许列表，必须将自托管运行器的 IP 地址添加到允许列表。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的[管理组织允许的 IP 地址](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)或[为企业中的安全设置实施策略](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise){% ifversion fpt %}”。{% else %}."{% endif %}

{% else %}

{% ifversion ghes %} 自托管运行器不需要接入任何外部互联网即可运行。 因此，您可以使用网络路由在自托管运行器与 {% data variables.product.product_location %} 之间直接通信。 例如，您可以将私有 IP 地址分配给自托管运行器，并配置路由以将流量发送到 {% data variables.product.product_location %}，无需流量便可浏览公用网络。{% endif %}

{% endif %}

{% ifversion ghae %} 如果你对 {% data variables.product.prodname_dotcom %} 组织或企业帐户使用 IP 地址允许列表，必须将自托管运行器的 IP 地址添加到允许列表。 有关详细信息，请参阅[为组织管理允许的 IP 地址](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)。
{% endif %}

您也可以通过代理服务器使用自托管的运行器。 有关详细信息，请参阅[将代理服务器与自托管运行器配合使用](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners)。

有关排查常见网络连接问题的详细信息，请参阅[对自托管运行器进行监视和故障排除](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#troubleshooting-network-connectivity)。

{% ifversion ghes or ghae %}

## 自托管运行器与 {% data variables.product.prodname_dotcom_the_website %} 之间的通信

自托管运行器不需要连接到 {% data variables.product.prodname_dotcom_the_website %}，除非您已启用自动访问 {% data variables.product.product_location %} 的 {% data variables.product.prodname_dotcom_the_website %} 操作。 有关详细信息，请参阅[关于在企业中使用操作](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)。

如果已启用自动访问 {% data variables.product.prodname_dotcom_the_website %} 操作，则自托管运行器将直接连接到 {% data variables.product.prodname_dotcom_the_website %} 以下载操作。 您必须确保机器具有适当的网络访问权限才可与以下列出的 {% data variables.product.prodname_dotcom %} URL 通信。 

```
github.com
api.github.com
codeload.github.com
```

{% note %}

注意：上面列出的一些域名使用 `CNAME` 记录。 一些防火墙可能要求你为所有 `CNAME` 记录递归添加规则。 请注意，`CNAME` 记录将来可能会改变，只有上面列出的域名将保持不变。

{% endnote %}


{% endif %}

## 自托管运行器安全性

{% ifversion fpt or ghec %}

{% data reusables.actions.self-hosted-runner-security %}

{% endif %}

{% ifversion fpt or ghec %}

这对 {% data variables.product.prodname_dotcom %} 托管的运行器不是问题，因为每个 {% data variables.product.prodname_dotcom %} 托管的运行器始终是一个干净的独立虚拟机， 在作业执行结束时被销毁。

{% endif %}

在自托管运行器上运行不受信任的工作流程会给您的机器和网络环境带来严重的安全风险，特别是机器在同一环境下执行不同的作业时。 其中一些风险包括：

* 机器上运行的恶意程序。
* 逃避机器的运行器沙盒。
* 显示对机器网络环境的访问权限。
* 在机器上保持不需要或危险的数据。

有关自托管运行器的安全强化的详细信息，请参阅 [{% data variables.product.prodname_actions %} 的安全强化](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)。

{% ifversion ghec or ghes or ghae %}

## 延伸阅读

- [开始为企业使用自托管运行器](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)

{% endif %}
