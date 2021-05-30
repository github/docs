---
title: 关于 GitHub 托管的运行器
intro: '{% data variables.product.prodname_dotcom %} 提供托管的虚拟机来运行工作流程。 虚拟机包含可供 {% data variables.product.prodname_actions %} 使用的工具、包和设置。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于 {% data variables.product.prodname_dotcom %} 托管的运行器

{% data variables.product.prodname_dotcom %} 托管的运行器是由安装了 {% data variables.product.prodname_actions %} 运行器应用程序的 {% data variables.product.prodname_dotcom %} 托管的虚拟机。 {% data variables.product.prodname_dotcom %} 提供使用 Linux、Windows 和 macOS 操作系统的运行器。

使用 {% data variables.product.prodname_dotcom %} 托管的运行器时，设备维护和升级由您负责。 您可以直接在虚拟机上或 Docker 容器中运行工作流程。

可以为工作流程中的每项作业指定运行器类型。 工作流程中的每项作业都在全新的虚拟机实例中执行。 作业中的所有步骤在同一虚拟机实例中执行，让该作业中的操作使用文件系统共享信息。

{% data reusables.github-actions.runner-app-open-source %}

#### {% data variables.product.prodname_dotcom %} 托管的运行器的云主机

{% data variables.product.prodname_dotcom %} 在 Microsoft Azure 中安装了 {% data variables.product.prodname_actions %} 运行器应用程序的 Standard_DS2_v2 虚拟机上托管 Linux 和 Windows 运行器。 {% data variables.product.prodname_dotcom %} 托管的运行器应用程序是 Azure Pipelines Agent 的复刻。 入站 ICMP 数据包被阻止用于所有 Azure 虚拟机，因此 ping 或 traceroute 命令可能无效。 有关 Standard_DS2_v2 机器资源的更多信息，请参阅 Microsoft Azure 文档中的“[Dv2 和 DSv2 系列](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series)”。

{% data variables.product.prodname_dotcom %} 在 {% data variables.product.prodname_dotcom %} 自己的 macOS Cloud 中托管 macOS 运行器。

#### {% data variables.product.prodname_dotcom %} 托管的运行器的工作流程连续性

{% data reusables.github-actions.runner-workflow-continuity %}

此外，如果工作流程运行已成功排队，但未在 45 分钟内由 {% data variables.product.prodname_dotcom %} 托管的运行器处理，则会丢弃排队的工作流程运行。

#### {% data variables.product.prodname_dotcom %} 托管的运行器的管理权限

Linux 和 macOS 虚拟机都使用无密码的 `sudo` 运行。 在需要比当前用户更多的权限才能执行命令或安装工具时，您可以使用无需提供密码的 `sudo`。 更多信息请参阅“[Sudo 手册](https://www.sudo.ws/man/1.8.27/sudo.man.html)”。

Windows 虚拟机配置为以禁用了用户帐户控制 (UAC) 的管理员身份运行。 更多信息请参阅 Windows 文档中的“[用户帐户控制工作原理](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)”。

### 支持的运行器和硬件资源

Windows 和 Linux 虚拟机的硬件规格：
- 2 核 CPU
- 7 GB RAM 内存
- 14 GB SSD 硬盘空间

MacOS 虚拟机的硬件规格：
- 3 核 CPU
- 14 GB RAM 内存
- 14 GB SSD 硬盘空间

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.macos-runner-preview %}

工作流程日志列出用于运行作业的运行器。 更多信息请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。

### 支持的软件

{% data variables.product.prodname_dotcom %} 托管的运行器中包含的软件工具每周更新。 更新过程需要几天时间，整个部署结束后，`主`分支上的预装软件列表将进行更新。
#### 预安装的软件

工作流程日志包括指向准确运行器上预安装的工具的链接。 要在工作流程日志中查找此信息，请扩展 `Set up job` 部分。 在该部分下，展开 `Virtual Environment` 部分。 `Included Software` 后面的链接将告知您运行器上运行该工作流程的预安装工具。 ![Installed software link](/assets/images/actions-runner-installed-software-link.png) 更多信息请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。

有关每个运行器操作系统包含的工具整个列表，请参阅以下链接：

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1804-README.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2016-Readme.md)
* [macOS 11.0](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11.0-Readme.md)
* [macOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md)

{% data variables.product.prodname_dotcom %} 托管的运行器除了上述参考中列出的包之外，还包括操作系统的默认内置工具。 例如，Ubuntu 和 macOS 运行器除了其他默认工具之外，还包括 `grep`、`find` 和 `which`。

#### 使用预安装的软件

我们建议使用操作来与运行器上安装的软件进行交互。 此方法有如下优点：
- 通常，操作提供更灵活的功能，如版本选择、传递参数的能力和参数
- 它可确保工作流程中使用的工具版本无论软件更新如何，都将保持不变

如果有您想要请求的工具，请在 [actions/virtual-environments](https://github.com/actions/virtual-environments) 打开一个议题。 此仓库还包含有关运行器上所有主要软件更新的公告。

#### 安装其他软件

您可以在 {% data variables.product.prodname_dotcom %} 托管的运行器上安装其他软件。 更多信息请参阅“[自定义 GitHub 托管的运行器](/actions/using-github-hosted-runners/customizing-github-hosted-runners)”。

### IP 地址

{% note %}

**注意：**如果使用 {% data variables.product.prodname_dotcom %} 组织或企业帐户的 IP 地址允许列表，则无法使用 {% data variables.product.prodname_dotcom %} 托管的运行器，而必须使用自托管的运行器。 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。

{% endnote %}

Windows 和 Ubuntu 运行程序托管在 Azure 中，随后具有与 Azure 数据中心相同的 IP 地址范围。 macOS 运行器托管在 {% data variables.product.prodname_dotcom %} 自己的 macOS 云中。

要获取 {% data variables.product.prodname_actions %} 用于 {% data variables.product.prodname_dotcom %} 托管运行器的 IP 地址范围列表，您可以使用 {% data variables.product.prodname_dotcom %} REST API。 更多信息请参阅“[获取 GitHub 元信息](/rest/reference/meta#get-github-meta-information)”端点响应中的 `actions` 键。 如果需要一个允许列表来阻止未经授权访问您的内部资源，您可以使用此 IP 地址列表。

API 返回的 {% data variables.product.prodname_actions %} IP 地址列表每周更新一次。

### 文件系统

{% data variables.product.prodname_dotcom %} 在虚拟机上的特定目录中执行操作和 shell 命令。 虚拟机上的文件路径不是静态的。 使用环境变量 {% data variables.product.prodname_dotcom %} 提供 `home`、`workspace` 和 `workflow` 目录的构建文件路径。

| 目录                    | 环境变量                | 描述                                                                                                        |
| --------------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| `home`                | `HOME`              | 包含用户相关的数据。 例如，此目录可能包含登录凭据。                                                                                |
| `workspace`           | `GITHUB_WORKSPACE`  | 在此目录中执行操作和 shell 命令。 操作可以修改此目录的内容，后续操作可以访问这些修改。                                                           |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | 触发工作流程的 web 挂钩事件的 `POST` 有效负载。 每当操作执行时，{% data variables.product.prodname_dotcom %} 都会重写此变量，以隔离操作之间的文件内容。 |

有关 {% data variables.product.prodname_dotcom %} 为每个操作创建的环境变量列表，请参阅“[使用环境变量](/github/automating-your-workflow-with-github-actions/using-environment-variables)”。

#### Docker 容器文件系统

在 Docker 容器中运行的操作在 `/github` 路径下有静态目录。 但强烈建议使用默认环境变量在 Docker 容器中构建文件路径。

{% data variables.product.prodname_dotcom %} 保留 `/github` 路径前缀，并为操作创建三个目录。

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

{% if currentVersion == "free-pro-team@latest" %}

### 延伸阅读
- "[管理 {% data variables.product.prodname_actions %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"

{% endif %}
