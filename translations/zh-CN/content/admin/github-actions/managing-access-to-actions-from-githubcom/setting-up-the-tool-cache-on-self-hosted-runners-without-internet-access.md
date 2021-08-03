---
title: 在未接入互联网的自托管运行器上设置工具缓存
intro: 要在没有互联网连接的自托管运行器上使用包含的 ' actions/setup' 操作，您必须先为工作流程填充运行器的工具缓存。
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
  - /admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  enterprise-server: '>=2.22'
  github-ae: next
topics:
  - Enterprise
---
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 关于包含的设置操作和运行器工具缓存

{% data reusables.actions.enterprise-no-internet-actions %}

大多数官方 {% data variables.product.prodname_dotcom %} 编写的操作都会自动与 {% data variables.product.product_name %} 捆绑在一起。 但是，没有接入互联网的自托管运行器需要进行一些配置，然后才能使用包含的 `actions/setup-LANGUAGE` 操作，例如 `setup-node`。

`actions/setup-LANGUAGE` 操作通常需要接入互联网才能将所需的环境二进制文件下载到运行器的工具缓存。 没有互联网连接的自托管运行器无法下载二进制文件，所以您必须手动填充运行器上的工具缓存。

您可以通过在 {% data variables.product.prodname_dotcom_the_website %} 上运行 {% data variables.product.prodname_actions %} 工作流程来填充运行器工具缓存，该工作流程将 {% data variables.product.prodname_dotcom %} 托管的运行器的工具缓存作为项目上传，然后可以在互联网断开的自托管运行器上传输和提取。

{% note %}

**注：**您只能对拥有相同操作系统和架构的自托管运行器使用 {% data variables.product.prodname_dotcom %} 托管的运行器工具缓存。 例如，如果您使用 `ubuntu-18.04` {% data variables.product.prodname_dotcom %} 托管的运行器生成工具缓存，则自托管运行器必须是 64 位 Ubuntu 18.04 计算机。 有关 {% data variables.product.prodname_dotcom %} 托管的运行器的更多信息，请参阅“<a href="/actions/reference/virtual-environments-for-github-hosted-runners#supported-runners-and-hardware-resources" class="dotcom-only">GitHub 托管运行器的虚拟环境</a>”。

{% endnote %}

### 基本要求

* 确定自托管运行器需要哪些开发环境。 下面的示例演示如何使用 Node.js 版本 10 和 12 填充 `setup-node` 操作的工具缓存。
* 访问可用于运行工作流程的 {% data variables.product.prodname_dotcom_the_website %} 上的仓库。
* 访问自托管运行器的文件系统以填充工具缓存文件夹。

### 填充自托管运行器的工具缓存

1. 在 {% data variables.product.prodname_dotcom_the_website %} 上，导航到可用于运行 {% data variables.product.prodname_actions %} 工作流程的仓库。
1. 在仓库的 `.github/workflow` 文件夹中创建一个新的工作流程文件，用于上传包含 {% data variables.product.prodname_dotcom %} 托管的运行器工具缓存的构件。

   下面的示例演示了使用 Node.js 版本 10 和 12 的 `setup-node` 操作为 Ubuntu 18.04 环境上传工具缓存的工作流程。

   {% raw %}
   ```yaml
   name: Upload Node.js 10 and 12 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-18.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"
             mkdir -p "${{ runner.tool_cache }}"
         - name: Setup Node 10
           uses: actions/setup-node@v1
           with:
             node-version: 10.x
         - name: Setup Node 12
           uses: actions/setup-node@v1
           with:
             node-version: 12.x
         - name: Archive tool cache
           run: |
             cd "${{ runner.tool_cache }}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: actions/upload-artifact@v2
           with:
             path: ${{runner.tool_cache}}/tool_cache.tar.gz
   ```
   {% endraw %}
1. 从工作流程运行下载工具缓存构件。 有关下载构件的说明，请参阅“[下载工作流程构件](/actions/managing-workflow-runs/downloading-workflow-artifacts)”。
1. 将工具缓存构件传输到自托管的运行器，并将其提取到本地工具缓存目录。 默认工具缓存目录是 `RUNNER_DIR/_work/_tool`。 如果运行器尚未处理任何任务，您可能需要创建 `_work/_tool` 目录。

    提取上述示例中上传的工具缓存构件后，自托管运行器上应具有类似于以下示例的目录结构：

    ```
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 10.22.0
                │   └── ...
                └── 12.18.3
                    └── ...
    ```

没有互联网接入的自托管运行器现在应该能够使用 `setup-node` 操作。 如果遇到问题，请确保已为工作流程填充了正确的工具缓存。 例如，如果您需要使用 `setup-python` 操作，则需要通过要使用的 Python 环境填充工具缓存。
