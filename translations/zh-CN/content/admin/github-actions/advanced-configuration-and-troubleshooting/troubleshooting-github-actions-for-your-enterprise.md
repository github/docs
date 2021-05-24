---
title: 企业 GitHub Actions 故障排除
intro: '在 {% data variables.product.prodname_ghe_server %} 上使用 {% data variables.product.prodname_actions %} 时的常见问题疑难解答。'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
redirect_from:
  - /admin/github-actions/troubleshooting-github-actions-for-your-enterprise
---
### 使用 {% data variables.product.prodname_ghe_server %} 自签名证书时配置自托管的运行器

{% data reusables.actions.enterprise-self-signed-cert %} 更多信息请参阅“[配置 TLS](/admin/configuration/configuring-tls)”。

#### 在运行器上安装证书

为使自托管的运行器使用自签名证书连接到 {% data variables.product.prodname_ghe_server %}，您必须在运行器上安装证书以增强连接安全。

有关安装证书所需的步骤，请参阅运行器操作系统的文件。

#### 配置 Node.JS 使用证书

大多数操作都以 JavaScript 编写并使用 Node.js，这不会使用操作系统证书存储。 要使自托管的运行器使用证书，您必须在运行器上设置 `NODE_EXTRA_CA_CERTS` 环境变量。

您可以将环境变量设置为系统环境变量，或在自托管运行器应用程序目录中声明名为 _.env_ 的文件。

例如：

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

当自托管的运行器应用程序启动时，环境变量将被读取，因此您必须在配置或启动自托管的运行器应用程序之前设置环境变量。 如果您的证书配置更改，您必须重新启动自托管的运行器应用程序。

#### 配置 Docker 容器使用证书

如果您在工作流程中使用 Docker 容器操作或服务容器，则除了设置上述环境变量外，您可能还需要在 Docker 映像中安装证书。

### 配置 {% data variables.product.prodname_actions %} 的 HTTP 代理设置

{% data reusables.actions.enterprise-http-proxy %}

如果这些设置未正确配置，则在设置或更改 {% data variables.product.prodname_actions %} 配置时可能会收到诸如 `Resource unexpectedly moved to https://（资源意外移动到 https://）<IP_ADDRESS>`的错误。

### 运行器在更改主机名后未连接到 {% data variables.product.prodname_ghe_server %}

如果更改 {% data variables.product.product_location %} 的主机名，自托管运行器将无法连接到旧主机名，并且不会执行任何作业。

您将需要更新自托管运行器的配置，以对 {% data variables.product.product_location %} 使用新的主机名。 每个自托管运行器将需要以下程序之一：

* 在自托管的运行器应用程序目录中，编辑 `.runner` 和 `. redentials` 文件以将旧主机名替换为新主机名，然后重新启动自托管的运行器应用程序。
* 使用 UI 从 {% data variables.product.prodname_ghe_server %} 移除运行器，并重新添加。 更多信息请参阅“[删除自托管的运行器](/actions/hosting-your-own-runners/removing-self-hosted-runners)”和“[添加自托管的运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

### 作业卡住以及 {% data variables.product.prodname_actions %} 内存和 CPU 限制

{% data variables.product.prodname_actions %} 由运行在 {% data variables.product.product_location %} 上的多项服务组成。 默认情况下，这些服务使用默认的 CPU 和内存限制设置，大多数情况下都适用。 但是，当 {% data variables.product.prodname_actions %} 用户多时，可能需要调整这些设置。

如果您注意到作业未开始，或者任务进度在 UI 中不更新或改变，可能是达到了 CPU 或内存限制（即使有空闲的运行器）。

#### 1. 在管理控制台中检查整体 CPU 和内存使用情况

访问管理控制台并使用监控仪表板来检查“System Health（系统健康）”下的整体 CPU 和内存图。 更多信息请参阅“[访问监控仪表板](/admin/enterprise-management/accessing-the-monitor-dashboard)”。

如果总体“系统健康”CPU 使用接近 100%，或者没有可用的内存，则表示 {% data variables.product.product_location %} 在满负荷运行，需要扩展。 更多信息请参阅“[增加 CPU 或内存资源](/admin/enterprise-management/increasing-cpu-or-memory-resources)”。

#### 2. 在管理控制台中检查 Nomad Jobs CPU 和内存使用情况

如果总体“系统健康”CPU 和内存使用情况正常，请向下滚动监控仪表板页面到“Nomad Jobs”部分，并查看“CPU 百分比值”和“内存使用情况”图。

这些图表中的每幅图都对应于一项服务。 对于 {% data variables.product.prodname_actions %} 服务，请查询：

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

如果其中任何一项服务达到或接近 100% CPU 利用率，或者内存接近其限制（默认情况下为 2 GB），则这些服务的资源配置可能需要增加。 请注意上述服务中哪些已经达到或接近极限。

#### 3. 对达到限制的服务增加资源分配

1. 使用 SSH 登录到管理 shell。 更多信息请参阅“[访问管理 shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)。”
1. 运行以下命令，查看可用于分配的资源：

   ```shell
   nomad node status -self
   ```

   在输出中找到“Allocated Resources（分配的资源）”部分。 它看起来类似于以下示例：

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   对于 CPU 和内存，这会显示**所有**服务**总共**分配了多少资源（左侧值）以及有多少可用资源（右侧值）。 在上面的示例中，总共有 32 GiB 内存，分配 23 GiB。 这意味着有 9 GiB 内存可供分配。

   {% warning %}

   **警告：**小心不要分配超过可用资源总额，否则服务将无法启动。

   {% endwarning %}
1. 将目录更改为 `/etc/consult-templates/etc/nomad-jobs/actions`：

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   在此目录中，有三个文件与上面的 {% data variables.product.prodname_actions %} 服务对应：

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. 对于您确定需要调整的服务，打开相应的文件，并找到看起来如下的 `resources` 组：

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
1. 保存并退出文件。
1. 运行 `ghe-config-apply` 以应用更改。

    运行 `ghe-config-apply` 时，如果你看到类似于 `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'` 的输出，则更改可能分配过多的 CPU 或内存资源。 如果发生这种情况，请再次编辑配置文件并降低分配的 CPU 或内存，然后重新运行 `ghe-config-apply`。
1. 在应用配置后，运行 `ghe-actions-check` 来验证 {% data variables.product.prodname_actions %} 服务是否正常运行。
