---
title: 自定义 GitHub 托管的运行器
intro: 您可以在 GitHub 托管的运行器上安装其他软件作为工作流程的一部分。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
topics:
  - Workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

如果 {% data variables.product.prodname_dotcom %} 托管的运行器上需要其他软件包，您可以创建一个作业，将包的安装作为工作流程的一部分。

要查看默认情况下已经安装了哪些包，请参阅“[预装软件](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)”。

本指南演示了如何创建在 {% data variables.product.prodname_dotcom %} 托管运行器上安装额外软件的作业。

### 在 Ubuntu 运行器上安装软件

以下示例演示如何在作业中安装 `apt` 包。

{% raw %}
```yaml
name: Build on Ubuntu
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
      - name: Install jq tool
        run: |
          sudo apt-get update
          sudo apt-get install jq
```
{% endraw %}

{% note %}

**注意：** 在安装软件包之前务必运行 `sudo apt-get update`。 如果 `apt` 索引已经过时，此命令将获取并重新索引任何可用的软件包，这有助于防止软件包安装失败。

{% endnote %}

### 在 macOS 运行器上安装软件

以下示例演示如何将 Brew 包和桶安装为作业的一部分。

{% raw %}
```yaml
name: Build on macOS
on: push

jobs:
  build:
    runs-on: macos-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
      - name: Install GitHub CLI
        run: |
          brew update
          brew install gh
      - name: Install Microsoft Edge
        run: |
          brew update
          brew install --cask microsoft-edge
```
{% endraw %}

### 在 Windows 运行器上安装软件

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
