---
title: GitHub 托管的运行器的虚拟环境
intro: '{% data variables.product.prodname_dotcom %} 提供托管的虚拟机来运行工作流程。 虚拟机包含可供 {% data variables.product.prodname_actions %} 使用的工具、包和设置。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
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

{% data variables.product.prodname_dotcom %} 在 Microsoft Azure 中安装了 {% data variables.product.prodname_actions %} 运行器应用程序的 Standard_DS2_v2 虚拟机上托管 Linux 和 Windows 运行器。 {% data variables.product.prodname_dotcom %} 托管的运行器应用程序是 Azure Pipelines Agent 的复刻。 入站 ICMP 数据包被阻止用于所有 Azure 虚拟机，因此 ping 或 traceroute 命令可能无效。 有关 Standard_DS2_v2 机器资源的更多信息，请参阅 Microsoft Azure 文档中的“[Dv2 和 DSv2 系列](https://docs.microsoft.com/en-us/azure/virtual-machines/dv2-dsv2-series#dsv2-series)”。

{% data variables.product.prodname_dotcom %} 使用 [MacStadium](https://www.macstadium.com/) 托管 macOS 运行器。

#### {% data variables.product.prodname_dotcom %} 托管的运行器的管理权限

Linux 和 macOS 虚拟机都使用无密码的 `sudo` 运行。 在需要比当前用户更多的权限才能执行命令或安装工具时，您可以使用无需提供密码的 `sudo`。 更多信息请参阅“[Sudo 手册](https://www.sudo.ws/man/1.8.27/sudo.man.html)”。

Windows 虚拟机配置为以禁用了用户帐户控制 (UAC) 的管理员身份运行。 更多信息请参阅 Windows 文档中的“[用户帐户控制工作原理](https://docs.microsoft.com/en-us/windows/security/identity-protection/user-account-control/how-user-account-control-works)”。

### 支持的运行器和硬件资源

每台虚拟机都有相同的硬件资源。

- 2 核 CPU
- 7 GB RAM 内存
- 14 GB SSD 硬盘空间

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.ubuntu-runner-preview %}

有关各运行器支持的软件、工具和包的列表，请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器上安装的软件](/actions/reference/software-installed-on-github-hosted-runners)”。

您可以查看工作流程运行的日志，以查看用于作业的确切运行器环境， 以及连接到运行器上预安装工具的链接。 更多信息请参阅“[管理工作流程运行](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-your-workflow-history)”。


#### {% data variables.product.prodname_dotcom %} 托管的运行器的 IP 地址

{% note %}

**注意：**如果使用 {% data variables.product.prodname_dotcom %} 组织或企业帐户的 IP 地址允许列表，则无法使用 {% data variables.product.prodname_dotcom %} 托管的运行器，而必须使用自托管的运行器。 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。

{% endnote %}

Windows 和 Ubuntu 运行程序托管在 Azure 中，具有与 Azure 数据中心相同的 IP 地址范围。 目前，所有 Windows 和 Ubuntu {% data variables.product.prodname_dotcom %} 托管的运行器都在以下 Azure 地区：

- 美国东部 (`eastus`)
- 美国东部 2 (`eastus2`)
- 美国西部 2 (`westus2`)
- 美国中部 (`centralus`)
- 美国中南部 (`southcentralus`)

Microsoft 每周通过 JSON 文件更新 Azure IP 地址范围，您可以从 [Azure IP 范围和服务标签 - 公共云](https://www.microsoft.com/en-us/download/details.aspx?id=56519)网站下载该文件。 如果需要一个允许列表来阻止未经授权访问您的内部资源，您可以使用此 IP 地址范围。

JSON 文件包含一个名为 `values` 的数组。 例如，在该数组内，您可以通过包含 `"AzureCloud.eastus2"` 的 `name` 和 `id` 的对象找到支持的 IP 地址。

您可以在 `"addressPrefixes"` 对象中找到支持的 IP 地址范围。 这是 JSON 文件的精简示例。

```json
{
  "changeNumber": 84,
  "cloud": "Public",
  "values": [
    {
      "name": "AzureCloud.eastus2",
      "id": "AzureCloud.eastus2",
      "properties": {
        "changeNumber": 33,
        "region": "eastus2",
        "platform": "Azure",
        "systemService": "",
        "addressPrefixes": [
          "13.68.0.0/17",
          "13.77.64.0/18",
          "13.104.147.0/25",
          ...
        ]
      }
    }
  ]
}
```

### {% data variables.product.prodname_dotcom %} 托管的运行器上的文件系统

{% data variables.product.prodname_dotcom %} 在虚拟机上的特定目录中执行操作和 shell 命令。 虚拟机上的文件路径不是静态的。 使用环境变量 {% data variables.product.prodname_dotcom %} 提供 `home`、`workspace` 和 `workflow` 目录的构建文件路径。

| 目录                    | 环境变量                | 描述                                                                                                             |
| --------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------- |
| `home`                | `HOME`              | 包含用户相关的数据。 例如，此目录可能包含登录凭据。                                                                                     |
| `workspace`           | `GITHUB_WORKSPACE`  | 在此目录中执行操作和 shell 命令。 操作可以修改此目录的内容，后续操作可以访问这些修改。                                                                |
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
- [[管理帐户的 {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"

{% endif %}
