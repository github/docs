---
title: 使用 Ant 构建和测试 Java
intro: 您可以在 GitHub 操作中创建持续集成 (CI) 工作流程，以使用 Ant 构建和测试 Java 项目。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 简介

本指南介绍如何使用 Ant 构建系统为 Java 项目创建执行持续集成 (CI) 的工作流程。 您创建的工作流程将允许您查看拉取请求提交何时会在默认分支上导致构建或测试失败； 这个方法可帮助确保您的代码始终是健康的。 您可以扩展 CI 工作流程以从工作流程运行上传构件。

{% data variables.product.prodname_dotcom %} 托管的运行器有工具缓存预安装的软件，包括 Java Development Kits (JDKs) 和 Ant。 有关软件以及 JDK 和 Ant 预安装版本的列表，请参阅 [{% data variables.product.prodname_dotcom %} 自托管运行器上安装的软件](/actions/automating-your-workflow-with-github-actions/software-installed-on-github-hosted-runners)。

### 基本要求

您应该熟悉 YAML 和 {% data variables.product.prodname_actions %} 的语法。 更多信息请参阅：
- "[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[配置工作流程](/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)"

建议您对 Java 和 Ant 框架有个基本的了解。 更多信息请参阅“[Apache Ant 手册](https://ant.apache.org/manual/)”。

{% data reusables.actions.enterprise-setup-prereq %}

### 从 Ant 工作流程模板开始

{% data variables.product.prodname_dotcom %} 提供有 Ant 工作流程模板，应该适用于大多数基于 Ant 的 Java 项目。 更多信息请参阅 [Ant 工作流程模板](https://github.com/actions/starter-workflows/blob/master/ci/ant.yml)。

要快速开始，您可以在创建新工作流程时选择预配置的 Ant 模板。 更多信息请参阅“[从预配置的工作流程模板开始](/actions/automating-your-workflow-with-github-actions/starting-with-preconfigured-workflow-templates)”。

您也可以通过在仓库的 `.github/workflow` 目录中创建新文件来手动添加此工作流程。

{% raw %}
```yaml
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Build with Ant
        run: ant -noinput -buildfile build.xml
```
{% endraw %}

此工作流程执行以下步骤：

1. `checkout` 步骤在运行器上下载仓库的副本。
2. `setup-java` 步骤配置 Java 1.8 JDK。
3. “使用 Ant 构建”步骤以非交互模式运行 `build.xml` 中的默认目标。

在创建构建和测试工作流程时，默认工作流模板是很好的起点，然后您可以自定义模板以满足项目的需求。

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

### 构建和测试代码

您可以使用与本地相同的命令来构建和测试代码。

初学者工作流程将运行 _build.xml_ 文件中指定的默认目标。  默认目标通常设置为将类、运行测试和包类设置为其可分发格式，例如 JAR 文件。

如果使用不同的命令来构建项目，或者想要运行不同的目标，则可以指定这些命令。 例如，您可能想要运行在 _build-ci.xml_ 文件中配置的 `jar` 目标。

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Run the Ant jar target
    run: ant -noinput -buildfile build-ci.xml jar
```
{% endraw %}

### 将工作流数据打包为构件

构建成功且测试通过后，您可能想要上传生成的 Java 包作为构件。 这会将构建的包存储为工作流程运行的一部分，并允许您下载它们。 构件可帮助您在拉取请求合并之前在本地环境中测试并调试它们。 更多信息请参阅“[使用构件持久化工作流程](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

Ant 通常会在 `build/jar` 目录中创建 JAR、EAR 或 WAR 等输出文件。 您可以使用 `upload-artifact` 操作上传该目录的内容。

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
  - run: ant -noinput -buildfile build.xml
  - uses: actions/upload-artifact@v2
    with:
      name: Package
      path: build/jar
```
{% endraw %}
