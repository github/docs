---
title: 企业 GitHub Actions 故障排除
intro: '在 {% data variables.product.prodname_ghe_server %} 上使用 {% data variables.product.prodname_actions %} 时的常见问题疑难解答。'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Troubleshooting
redirect_from:
  - /admin/github-actions/troubleshooting-github-actions-for-your-enterprise
shortTitle: Troubleshoot GitHub Actions
ms.openlocfilehash: a0965405e8e37bd75a245738d8d20c91f11ce254
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107299'
---
## 检查 {% data variables.product.prodname_actions %} 的运行状况

可以使用 `ghe-actions-check` 命令行实用工具检查 {% data variables.location.product_location %} 上 {% data variables.product.prodname_actions %} 的运行状况。 有关详细信息，请参阅“[命令行实用工具](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-actions-check)”和“[访问管理 shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)”。

## 使用 {% data variables.product.prodname_ghe_server %} 自签名证书时配置自托管的运行器

{% data reusables.actions.enterprise-self-signed-cert %} 有关详细信息，请参阅“[配置 TLS](/admin/configuration/configuring-tls)”。

### 在运行器上安装证书

为使自托管的运行器使用自签名证书连接到 {% data variables.product.prodname_ghe_server %}，您必须在运行器上安装证书以增强连接安全。

有关安装证书所需的步骤，请参阅运行器操作系统的文件。

### 配置 Node.JS 使用证书

大多数操作都以 JavaScript 编写并使用 Node.js，这不会使用操作系统证书存储。 要使自托管运行器使用证书，你必须在运行器计算机上设置 `NODE_EXTRA_CA_CERTS` 环境变量。

可以将此环境变量设置为系统环境变量，也可以在自托管运行器应用程序目录中名为 .env 的文件中声明此环境变量。

例如：

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

当自托管的运行器应用程序启动时，环境变量将被读取，因此您必须在配置或启动自托管的运行器应用程序之前设置环境变量。 如果您的证书配置更改，您必须重新启动自托管的运行器应用程序。

### 配置 Docker 容器使用证书

如果您在工作流程中使用 Docker 容器操作或服务容器，则除了设置上述环境变量外，您可能还需要在 Docker 映像中安装证书。

## 配置 {% data variables.product.prodname_actions %} 的 HTTP 代理设置

{% data reusables.actions.enterprise-http-proxy %}

如果未正确配置这些设置，你可能会在设置或更改 {% data variables.product.prodname_actions %} 配置时收到错误，例如 `Resource unexpectedly moved to https://<IP_ADDRESS>`。

## 运行器未使用新主机名连接到 {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

如果您在环境中使用新主机名部署 {% data variables.product.prodname_ghe_server %}，并且旧主机名不再解析到您的实例，则自托管运行器将无法连接到旧主机名，并且不会执行任何作业。

需要更新自承载运行器的配置，以便将新的主机名用于 {% data variables.location.product_location %}。 每个自托管运行器将需要以下程序之一：

* 在自托管运行器应用程序目录中，编辑 `.runner` 和 `.credentials` 文件以将所有提及的旧主机名均替换为新主机名，然后重启自托管运行器应用程序。
* 使用 UI 从 {% data variables.product.prodname_ghe_server %} 移除运行器，并重新添加。 有关详细信息，请参阅“[删除自托管运行器](/actions/hosting-your-own-runners/removing-self-hosted-runners)”和“[添加自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

## 作业卡住以及 {% data variables.product.prodname_actions %} 内存和 CPU 限制

{% data variables.product.prodname_actions %} 由在 {% data variables.location.product_location %} 上运行的多个服务组成。 默认情况下，这些服务使用默认的 CPU 和内存限制设置，大多数情况下都适用。 但是，当 {% data variables.product.prodname_actions %} 用户多时，可能需要调整这些设置。

如果您注意到作业未开始，或者任务进度在 UI 中不更新或改变，可能是达到了 CPU 或内存限制（即使有空闲的运行器）。

### 1. 在管理控制台中检查整体 CPU 和内存使用情况

访问管理控制台并使用监控仪表板来检查“System Health（系统健康）”下的整体 CPU 和内存图。 有关详细信息，请参阅“[访问监视仪表板](/admin/enterprise-management/accessing-the-monitor-dashboard)”。

如果整体“系统健康”CPU 使用情况接近 100%，或者没有剩余可用内存，{% data variables.location.product_location %} 就会满负荷运行且需要纵向扩展。 有关详细信息，请参阅“[增加 CPU 或内存资源](/admin/enterprise-management/increasing-cpu-or-memory-resources)”。

### 2. 在管理控制台中检查 Nomad Jobs CPU 和内存使用情况

如果总体“系统健康”CPU 和内存使用情况正常，请向下滚动监控仪表板页面到“Nomad Jobs”部分，并查看“CPU 百分比值”和“内存使用情况”图。

这些图表中的每幅图都对应于一项服务。 对于 {% data variables.product.prodname_actions %} 服务，请查询：

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

如果其中任何一项服务达到或接近 100% CPU 利用率，或者内存接近其限制（默认情况下为 2 GB），则这些服务的资源配置可能需要增加。 请注意上述服务中哪些已经达到或接近极限。

### 3. 对达到限制的服务增加资源分配

1. 使用 SSH 登录到管理 shell。 有关详细信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”。
1. 运行以下命令，查看可用于分配的资源：

   ```shell
   nomad node status -self
   ```

   在输出中找到“Allocated Resources（分配的资源）”部分。 这类似于以下示例：

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   对于 CPU 和内存，这显示了分配给所有服务的量（左侧值）以及可用量（右侧值） 。 在上面的示例中，总共有 32 GiB 内存，分配 23 GiB。 这意味着有 9 GiB 内存可供分配。

   {% warning %}

   警告：请注意不要分配超过可用资源总量，否则服务将无法启动。

   {% endwarning %}
1. 将目录更改为 `/etc/consul-templates/etc/nomad-jobs/actions`：

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   在此目录中，有三个文件与上面的 {% data variables.product.prodname_actions %} 服务对应：

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. 对于确定需要调整的服务，请打开相应的文件，并找到如下所示的 `resources` 组：

   ```
   resources {
     cpu = 512
     memory = 2048
     network {
       port "http" { }
     }
   }
   ```

   CPU 资源的值以 MHz 为单位，而内存资源以 MB 为单位。

   例如，要将上述示例中的资源限制增加到 1 GHz 的 CPU 和 4 GB 的内存，则将其更改为：

   ```
   resources {
     cpu = 1024
     memory = 4096
     network {
       port "http" { }
     }
   }
   ```
1. 保存并退出该文件。
1. 运行 `ghe-config-apply` 来应用更改。

    运行 `ghe-config-apply` 时，如果输出类似于 `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'`，则说明在更改时可能过度了分配 CPU 或内存资源。 如果发生这种情况，请再次编辑配置文件，并降低分配的 CPU 或内存，然后重新运行 `ghe-config-apply`。
1. 应用配置后，运行 `ghe-actions-check` 以验证 {% data variables.product.prodname_actions %} 服务是否正常运行。

{% ifversion fpt or ghec or ghes %}
## {% data variables.product.prodname_dependabot %} 触发现有工作流程时的故障疑难解答

{% data reusables.dependabot.beta-security-and-version-updates %}

为 {% data variables.location.product_location %} 设置 {% data variables.product.prodname_dependabot %} 更新后，当现有工作流由 {% data variables.product.prodname_dependabot %} 事件触发时，你可能会看到失败。

默认情况下，由 {% data variables.product.prodname_dependabot %} 从 `push`、`pull_request`、`pull_request_review` 或 `pull_request_review_comment` 事件中触发的 {% data variables.product.prodname_actions %} 工作流运行被视为从存储库分支中打开。 与其他参与者触发的工作流不同，这意味着它们会接收一个只读 `GITHUB_TOKEN`，并且无权访问任何通常可用的机密。 这将导致尝试写入仓库的任何工作流程在由 {% data variables.product.prodname_dependabot %} 触发时失败。

有三种方法可以解决此问题：

1. 可以更新工作流，使其不再由 {% data variables.product.prodname_dependabot %} 使用如下表达式触发：`if: github.actor != 'dependabot[bot]'`。 有关详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。
2. 可以修改工作流以使用包含 `pull_request_target` 的两步过程，该过程没有这些限制。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_actions %} 自动化 {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions#responding-to-events)”。
3. 可为由 {% data variables.product.prodname_dependabot %} 触发的工作流提供对机密的访问权限，并允许 `permissions` 术语增加 `GITHUB_TOKEN` 的默认范围。 有关详细信息，请参阅下面的“[为由 {% data variables.product.prodname_dependabot %} 触发的工作流提供对机密的访问权限和增加的权限](#providing-workflows-triggered-by-dependabot-access-to-secrets-and-increased-permissions)”。

### 提供由 {% data variables.product.prodname_dependabot %} 机密访问权限和增加权限触发的工作流程

1. 使用 SSH 登录到管理 shell。 有关详细信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”。
1. 若要删除 {% data variables.product.prodname_dependabot %} 在 {% data variables.location.product_location %} 上触发的工作流限制，请使用以下命令。
    ``` shell
    $ ghe-config app.actions.disable-dependabot-enforcement true
    ```
1. 应用配置。
    ```shell
    $ ghe-config-apply
    ```
1. 返回到 {% data variables.product.prodname_ghe_server %}。

{% endif %}

{% ifversion ghes > 3.3 %}

<a name="bundled-actions"></a>

## {% data variables.product.prodname_actions %} 中的捆绑操作疑难解答

如果在 {% data variables.product.prodname_ghe_server %} 中安装 {% data variables.product.prodname_actions %} 时收到以下错误，则可以通过安装官方捆绑的操作和入门工作流程来解决此问题。

```shell
A part of the Actions setup had problems and needs an administrator to resolve.
```

要在 {% data variables.product.prodname_ghe_server %} 的指定组织内安装官方捆绑操作和启动工作流程，请按照以下步骤操作。

1. 确定将要存储官方捆绑操作和入门工作流程的组织。 您可以创建新组织或重新使用现有组织。 
    - 要创建新组织，请参阅“[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”。 
    - 若在为此组织选择名称时需要帮助，请参阅“[保留名称](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#reserved-names)”。 

1. 使用 SSH 登录到管理 shell。 有关详细信息，请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)”。
1. 要将组织指定为存储捆绑操作的位置，请使用 `ghe-config` 命令，将 `ORGANIZATION` 替换为组织的名称。
    ```shell
    $ ghe-config app.actions.actions-org ORGANIZATION
    ```
    and：
    ```shell
    $ ghe-config app.actions.github-org ORGANIZATION
    ```
1.  要将捆绑操作添加到您的组织，请取消设置 SHA。
    ```shell
    $ ghe-config --unset 'app.actions.actions-repos-sha1sum'
    ```
1. 应用配置。
    ```shell
    $ ghe-config-apply
    ```

完成这些步骤后，你可以在“[管理企业中 GitHub Actions 的访问权限](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#managing-access-permissions-for-github-actions-in-your-enterprise)”中继续配置 {% data variables.product.prodname_actions %}。

{% endif %}
