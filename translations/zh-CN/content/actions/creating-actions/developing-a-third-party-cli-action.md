---
title: 开发第三方 CLI 操作
shortTitle: CLI 设置操作
intro: '了解如何开发操作以在 {% data variables.product.prodname_actions %} 运行器上设置 CLI。'
redirect_from: []
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Actions
---

## 简介

您可以编写操作，为用户提供一种通过 {% data variables.product.prodname_actions %} 运行器上配置的 CLI 环境访问服务器的方法。

您的操作应：

- 使用户能够轻松指定要安装的 CLI 版本
- 支持多种操作系统
- 以高效的方式运行，以最大限度地减少运行时间和相关成本
- 跨 {% data variables.product.product_name %} 托管和自托管运行器工作
- 尽可能利用社区工具

本文将演示如何编写一个操作来检索特定版本的 CLI、安装它、将其添加到路径以及（可选）缓存它。 这种类型的操作（设置工具的操作）通常命名为 `setup-$TOOL`。

## 基本要求

您应该了解如何编写自定义操作。 更多信息请参阅“[关于自定义操作](/actions/creating-actions/about-custom-actions)”。 有关如何编写自定义操作的更详细指南，请参阅“[创建 JavaScript 操作](/actions/creating-actions/creating-a-javascript-action)”。

## 示例

以下脚本演示如何获取用户指定的版本作为输入，下载并提取 CLI 的特定版本，然后将 CLI 添加到路径中。

{% data variables.product.prodname_dotcom %} 提供了 [`actions/toolkit`](https://github.com/actions/toolkit)，这是一组可帮助您创建操作的包。 此示例使用 [`actions/core`](https://github.com/actions/toolkit/tree/main/packages/core) 和 [`actions/tool-cache`](https://github.com/actions/toolkit/tree/main/packages/tool-cache) 包。

{% raw %}
```javascript{:copy}
const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function setup() {
  // Get version of tool to be installed
  const version = core.getInput('version');

  // Download the specific version of the tool, e.g. as a tarball
  const pathToTarball = await tc.downloadTool(getDownloadURL());

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the tool by adding it to the PATH
  core.addPath(pathToCLI)
}

module.exports = setup
```
{% endraw %}

要使用此脚本，请将 `getDownloadURL` 替换为下载 CLI 的函数。 您还需要创建接受 `version` 输入并运行此脚本的操作元数据文件 (`action.yml`)。 有关如何创建操作的完整详细信息，请参阅“[创建 JavaScript 操作](/actions/creating-actions/creating-a-javascript-action)”。

有关如何设置此操作的完整示例，请参阅 [example-setup-gh](https://github.com/github-developer/example-setup-gh)。

## 延伸阅读

此模式用于多个操作。 有关更多示例，请参阅：

* [`ruby/setup-ruby`](https://github.com/ruby/setup-ruby)
* [`google-github-actions/setup-gcloud`](https://github.com/google-github-actions/setup-gcloud)
* [`hashicorp/setup-terraform`](https://github.com/hashicorp/setup-terraform)

