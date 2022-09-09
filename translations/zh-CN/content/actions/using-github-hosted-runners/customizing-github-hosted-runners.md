---
title: 自定义 GitHub 托管的运行器
intro: 您可以在 GitHub 托管的运行器上安装其他软件作为工作流程的一部分。
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
shortTitle: Customize runners
ms.openlocfilehash: d6793216b099fe3dcec44572da0b3d65cbb13fd9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145100164'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

如果 {% data variables.product.prodname_dotcom %} 托管的运行器上需要其他软件包，您可以创建一个作业，将包的安装作为工作流程的一部分。 

若要查看默认已安装的包，请参阅“[预安装的软件](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)”。

本指南演示了如何创建在 {% data variables.product.prodname_dotcom %} 托管运行器上安装额外软件的作业。

## 在 Ubuntu 运行器上安装软件

以下示例演示如何在作业中安装 `apt` 包。

```yaml
name: Build on Ubuntu
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install jq tool
        run: |
          sudo apt-get update
          sudo apt-get install jq
```

{% note %}

注意：安装包之前始终运行 `sudo apt-get update`。 如果 `apt` 索引已经过时，此命令将获取并重新索引任何可用的包，这有助于防止包安装失败。 

{% endnote %}

## 在 macOS 运行器上安装软件

以下示例演示如何将 Brew 包和桶安装为作业的一部分。

```yaml
name: Build on macOS
on: push

jobs:
  build:
    runs-on: macos-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install GitHub CLI
        run: |
          brew update
          brew install gh
      - name: Install Microsoft Edge
        run: |
          brew update
          brew install --cask microsoft-edge
```

## 在 Windows 运行器上安装软件

以下示例演示如何使用 [Chocolatey](https://community.chocolatey.org/packages) 将 {% data variables.product.prodname_dotcom %} CLI 安装为作业的一部分。

{% raw %}
```yaml
name: Build on Windows
on: push
jobs:
  build:
    runs-on: windows-latest
    steps:
      - run: choco install gh
      - run: gh version
```
{% endraw %}
