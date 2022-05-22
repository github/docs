---
title: Customizing GitHub-hosted runners
intro: You can install additional software on GitHub-hosted runners as a part of your workflow.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
topics:
  - Workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

If you require additional software packages on {% data variables.product.prodname_dotcom %}-hosted runners, you can create a job that installs the packages as part of your workflow.

To see which packages are already installed by default, see "[Preinstalled software](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)."

This guide demonstrates how to create a job that installs additional software on a {% data variables.product.prodname_dotcom %}-hosted runner.

### Installing software on Ubuntu runners

The following example demonstrates how to install an `apt` package as part of a job.

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
