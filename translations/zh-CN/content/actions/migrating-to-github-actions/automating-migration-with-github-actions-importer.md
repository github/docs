---
title: 使用 GitHub Actions 导入工具自动迁移
intro: '使用 {% data variables.product.prodname_actions_importer %} 规划和自动迁移到 {% data variables.product.prodname_actions %}。'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Migration
  - CI
  - CD
shortTitle: 'Automate migration with {% data variables.product.prodname_actions_importer %}'
ms.openlocfilehash: 391455eb90a3a71ab0e0cb5a1573a0ee48527d8e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159480'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

[法律通告](#legal-notice)

{% note %}

注意：{% data variables.product.prodname_actions_importer %} 目前以公共预览版的形式提供。 若要请求访问预览版，请访问[注册页](https://github.com/features/actions-importer/signup)。 授予访问权限后，你将能够使用 `gh-actions-importer` CLI 扩展

{% endnote %}

## 关于 {% data variables.product.prodname_actions_importer %}

可以使用 {% data variables.product.prodname_actions_importer %} 来规划 CI/CD 管道并将其从 Azure DevOps、CircleCI、GitLab、Jenkins 和 Travis CI 自动迁移到 {% data variables.product.prodname_actions %}。

{% data variables.product.prodname_actions_importer %} 以 Docker 容器形式分发，并使用 [{% data variables.product.prodname_dotcom %} CLI](https://cli.github.com) 扩展与容器交互。

应先检查 {% data variables.product.prodname_actions_importer %} 转换的任何工作流的正确性，然后才能将其用作生产工作负载。 目标是为每个工作流实现 80% 的转换率，但是，实际转换率将取决于转换的每个单独管道的构成。

## 支持的 CI 平台

可以使用 {% data variables.product.prodname_actions_importer %} 从以下平台进行迁移：

- Azure DevOps
- CircleCI
- GitLab
- Jenkins
- Travis CI

获得预览版访问权限后，你将能够访问每个受支持平台的更多参考文档。

## 先决条件

{% data variables.product.prodname_actions_importer %} 具有以下要求：

- 须具有 {% data variables.product.prodname_actions_importer %} 公共预览版的访问权限。
{%- ifversion ghes < 3.5 or ghae %}
- 使用启用了 `read:packages` 范围的 {% data variables.product.pat_generic %}。
{%- else %}
- 须具有进行 {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} 身份验证时所需的凭据。 有关详细信息，请参阅“[使用容器注册表](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry)”。
{% endif %}
- 一个可在其中运行基于 Linux 的容器并可安装所需工具的环境。
  - Docker 已[安装](https://docs.docker.com/get-docker/)并正在运行。
  - 已安装 [{% data variables.product.prodname_dotcom %} CLI](https://cli.github.com)。

  {% note %}

  注意：{% data variables.product.prodname_actions_importer %} 容器和 CLI 不需要安装在 CI 平台所在的同一服务器上。

  {% endnote %}

### 安装 {% data variables.product.prodname_actions_importer %} CLI 扩展

1. 安装 {% data variables.product.prodname_actions_importer %} CLI 扩展：

   ```bash
   $ gh extension install github/gh-actions-importer
   ```
1. 验证是否已安装扩展：

   ```bash
   $ gh actions-importer -h
   Options:
     -?, -h, --help  Show help and usage information

   Commands:
     update     Update to the latest version of the GitHub Actions Importer.
     version    Display the version of the GitHub Actions Importer.
     configure  Start an interactive prompt to configure credentials used to authenticate with your CI server(s).
     audit      Plan your CI/CD migration by analyzing your current CI/CD footprint.
     forecast   Forecast GitHub Actions usage from historical pipeline utilization.
     dry-run    Convert a pipeline to a GitHub Actions workflow and output its yaml file.
     migrate    Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.
   ```

### 更新 {% data variables.product.prodname_actions_importer %} CLI

若要确保运行最新版本的 {% data variables.product.prodname_actions_importer %}，应定期运行 `update` 命令：

```bash
$ gh actions-importer update
```

必须通过 {% data variables.product.prodname_container_registry %} 进行身份验证，此命令才能成功。 或者，可以使用 `--username` 和 `--password-stdin` 参数提供凭据：

```bash
$ echo $GITHUB_TOKEN | gh actions-importer update --username $GITHUB_HANDLE --password-stdin
```

### 在命令行进行身份验证

必须配置可支持 {% data variables.product.prodname_actions_importer %} 与 {% data variables.product.prodname_dotcom %} 及当前 CI 服务器进行通信的凭据。 可以使用环境变量或 `.env.local` 文件配置这些凭据。 可以通过运行以下命令在交互式提示中配置环境变量：

```bash
$ gh actions-importer configure
```

获得预览版访问权限后，你将能够访问有关使用环境变量的进一步参考文档。

## 使用 {% data variables.product.prodname_actions_importer %} CLI

使用 `gh actions-importer` 的子命令开始迁移到 {% data variables.product.prodname_actions %}，包括 `audit`、`forecast`、`dry-run` 和 `migrate`。

### 审核现有 CI 管道

`audit` 子命令可用于通过分析当前的 CI/CD 内存占用情况来规划 CI/CD 迁移。 此分析可用于规划迁移到 {% data variables.product.prodname_actions %} 的时间线。

若要运行审核，请使用以下命令确定可用选项：

```bash
$ gh actions-importer audit -h
Description:
  Plan your CI/CD migration by analyzing your current CI/CD footprint.

[...]

Commands:
  azure-devops  An audit will output a list of data used in an Azure DevOps instance.
  circle-ci     An audit will output a list of data used in a CircleCI instance.
  gitlab        An audit will output a list of data used in a GitLab instance.
  jenkins       An audit will output a list of data used in a Jenkins instance.
  travis-ci     An audit will output a list of data used in a Travis CI instance.
```

获得预览版访问权限后，你将能够访问有关运行审核的进一步参考文档。

### 预测使用情况

`forecast` 子命令查看历史管道使用情况，以创建 {% data variables.product.prodname_actions %} 使用情况的预测。

若要运行预测，请使用以下命令确定可用选项：

```bash
$ gh actions-importer forecast -h
Description:
  Forecasts GitHub Actions usage from historical pipeline utilization.

[...]

Commands:
  azure-devops  Forecasts GitHub Actions usage from historical Azure DevOps pipeline utilization.
  jenkins       Forecasts GitHub Actions usage from historical Jenkins pipeline utilization.
  gitlab        Forecasts GitHub Actions usage from historical GitLab pipeline utilization.
  circle-ci     Forecasts GitHub Actions usage from historical CircleCI pipeline utilization.
  travis-ci     Forecasts GitHub Actions usage from historical Travis CI pipeline utilization.
  github        Forecasts GitHub Actions usage from historical GitHub pipeline utilization.
```

获得预览版访问权限后，你将能够访问有关运行预测的进一步参考文档。

### 测试迁移过程

`dry-run` 子命令可用于将管道转换为其 {% data variables.product.prodname_actions %} 等效项，然后将工作流写入本地文件系统。

若要执行试运行，请使用以下命令确定可用选项：

```bash
$ gh actions-importer dry-run -h
Description:
  Convert a pipeline to a GitHub Actions workflow and output its yaml file.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and output its yaml file.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and output the yaml file(s).
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and output the yaml file.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and output its yaml file.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and output its yaml file.
```

获得预览版访问权限后，你将能够访问有关运行试运行的进一步参考文档。

### 将管道迁移到 {% data variables.product.prodname_actions %}

`migrate` 子命令可用于将管道转换为其 GitHub Actions 等效项，然后使用内容创建拉取请求。

若要运行迁移，请使用以下命令确定可用选项：

```bash
$ gh actions-importer migrate -h
Description:
  Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and open a pull request with the changes.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and open a pull request with the changes.
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and open a pull request with the changes.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and open a pull request with the changes.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and and open a pull request with the changes.
```

获得预览版访问权限后，你将能够访问有关运行迁移的进一步参考文档。

## 法律通告

部分内容改编自 MIT 许可证下的 https://github.com/github/gh-actions-importer/ ：

```
MIT License

Copyright (c) 2022 GitHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
