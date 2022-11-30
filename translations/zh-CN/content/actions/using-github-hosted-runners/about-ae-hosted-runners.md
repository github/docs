---
title: 关于 AE 托管的运行器
intro: '{% data variables.product.prodname_ghe_managed %} 提供可定制和安全强化的托管虚拟机，以运行 {% data variables.product.prodname_actions %} 工作流程。 您可以选择硬件，自带机器映像，并启用 IP 地址以与您的 {% data variables.actions.hosted_runner %} 联网。'
product: '{% data reusables.gated-features.actions %}'
versions:
  github-ae: '*'
---




{% data reusables.actions.ae-beta %}

### 关于 {% data variables.actions.hosted_runner %}

{% data variables.actions.hosted_runner %} 是由安装了 {% data variables.product.prodname_dotcom %} 运行器服务的 {% data variables.product.prodname_actions %} 托管的虚拟机。

{% data variables.product.prodname_ghe_managed %} 允许您使用 Ubuntu 或 Windows 映像创建和自定义 {% data variables.actions.hosted_runner %}；您可以选择您想要的机器大小并为其配置安全增强的网络。 {% data variables.actions.hosted_runner %} 由 {% data variables.product.prodname_dotcom %} 全面管理和自动扩展。

每个工作流程作业都是在 {% data variables.actions.hosted_runner %} 的新实例中执行，您可以直接在虚拟机上或 Docker 容器中运行工作流程。 作业中的所有步骤都在同一实例中执行，允许该作业中的操作使用 {% data variables.actions.hosted_runner %} 的文件系统共享信息。

{% note %}
{% data variables.actions.hosted_runner %} 是唯一可用于 {% data variables.product.prodname_ghe_managed %} 的运行器，而自托管的运行器则不可用。
{% endnote %}

要将 {% data variables.actions.hosted_runner %} 添加到您的组织或企业，请参阅[“添加 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/adding-ae-hosted-runners)”。

### {% data variables.actions.hosted_runner %} 的资源池分配

您的 {% data variables.actions.hosted_runner %} 被分配到与您的 {% data variables.product.prodname_ghe_managed %} 实例相同的资源池。 没有其他客户可以访问此资源池，因此 {% data variables.actions.hosted_runner %}s 不与任何其他客户共享。

### 管理 {% data variables.actions.hosted_runner %}

在 {% data variables.actions.hosted_runner %} 测试期间，您可以联系 {% data variables.product.prodname_dotcom %} 支持来管理您的 {% data variables.actions.hosted_runner %}。 例如，{% data variables.product.prodname_dotcom %} 支持可以帮助您新增 {% data variables.actions.hosted_runner %}、分配标签，或者将 {% data variables.actions.hosted_runner %} 移动到另一个组。

### 计费

{% data variables.product.prodname_actions %} 目前正在测试用于 {% data variables.product.prodname_ghe_managed %} 。 在此测试阶段，{% data variables.actions.hosted_runner %} 不会计费，可以免费使用。

测试结束后，计费使用将包括您的 AE 托管运行器集中活动实例的全时运行时间。 这包括：
- 作业时间 - 运行 Actions 作业所用的分钟数。
- 管理 - 重新映像机器所用的分钟数，以及因所需的自动扩展行为而产生的任何空闲时间。

定价将与核心线性扩展。 例如，4 核价格将是 2 核的两倍。 Windows 虚拟机的定价将高于 Linux 虚拟机。

### 硬件规格

{% data variables.actions.hosted_runner %} 可用于 Microsoft Azure 中托管的一系列虚拟机。 根据地区供应情况，您可以从 `Standard_Das_v4`、`Standard_DS_v2`、`Standard_Fs_v2 系列`中选择。 某些地区还包含基于 `Standard_NCs_v3` 的 GPU 运行器。

有关这些 Azure 机器资源的更多信息，请参阅 Microsoft Azure 文档中的“[Azure 中虚拟机的大小](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes)”。

要确定哪个运行器执行了作业，您可以查看工作流程日志。 更多信息请参阅“[查看工作流程运行历史记录](/actions/managing-workflow-runs/viewing-workflow-run-history)”。

### 软件规格

您可以将 {% data variables.actions.hosted_runner %} 与标准操作系统映像一起使用，也可以添加您创建的映像。

#### 默认操作系统映像

这些映像仅包括标准操作系统工具：

- Ubuntu 18.04 LTS (Canonical)
- Ubuntu 16.04 LTS (Canonical)
- Windows Server 2019 (Microsoft)
- Windows Server 2016 (Microsoft)

#### 自定义操作系统映像

您可以在 Azure 中创建自己的操作系统映像，并将它们作为 {% data variables.actions.hosted_runner %} 添加到 {% data variables.product.prodname_ghe_managed %} 中。 更多信息请参阅“[使用自定义映像添加 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/adding-ae-hosted-runners#adding-an-ae-hosted-runner-with-a-custom-image)”。

### 网络规范

您可以选择性为您的 {% data variables.actions.hosted_runner %} 启用固定静态公共 IP 地址。 如果启用，实例中的所有 {% data variables.actions.hosted_runner %} 将共享 2 到 4 个 IP 地址的范围，并将使用这些地址上的端口进行通信。

如果您不启用静态公共 IP 地址，则 {% data variables.actions.hosted_runner %} 随后将与 Azure 数据中心拥有相同的 IP 地址范围。 入站 ICMP 数据包被阻止，因此 `ping` 或 `traceroute` 命令无法按预期工作。

要获取 {% data variables.product.prodname_actions %} 用于 {% data variables.actions.hosted_runner %} 的 IP 地址范围列表，您可以使用 {% data variables.product.prodname_dotcom %} REST API。 更多信息请参阅“[获取 GitHub 元信息](/rest/reference/meta#get-github-meta-information)”端点响应中的 `actions` 键。 如果需要一个允许列表来阻止未经授权访问您的内部资源，您可以使用此 IP 地址列表。

API 返回的 {% data variables.product.prodname_actions %} IP 地址列表每周更新一次。

### {% data variables.actions.hosted_runner %} 的管理权限

Linux 虚拟机使用无密码的 `sudo` 运行。 在需要比当前用户更多的权限才能执行命令或安装工具时，您可以使用无需提供密码的 `sudo`。 更多信息请参阅“[Sudo 手册](https://www.sudo.ws/man/1.8.27/sudo.man.html)”。

Windows 虚拟机配置为以禁用了用户帐户控制 (UAC) 的管理员身份运行。 更多信息请参阅 Windows 文档中的“[用户帐户控制工作原理](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)”。

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
