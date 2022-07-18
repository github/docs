---
title: 使用 Gradle 构建和测试 Java
intro: 您可以在 GitHub Actions 中创建持续集成 (CI) 工作流程，以使用 Gradle 构建和测试 Java 项目。
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-gradle
  - /actions/guides/building-and-testing-java-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Gradle
shortTitle: 构建和测试 Java & Gradle
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南介绍如何使用 Gradle 构建系统为 Java 项目创建执行持续集成 (CI) 的工作流程。 您创建的工作流程将允许您查看拉取请求提交何时会在默认分支上导致构建或测试失败； 这个方法可帮助确保您的代码始终是健康的。 您可以扩展 CI 工作流程以{% ifversion actions-caching %}缓存文件并且{% endif %}从工作流程运行上传构件。

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}
{% data variables.product.prodname_dotcom %} 托管的运行器有工具缓存预安装的软件，包括 Java Development Kits (JDKs) 和 Gradle。 有关软件以及 JDK 和 Gradle 预安装版本的列表，请参阅 [{% data variables.product.prodname_dotcom %} 托管的运行器的规格](/actions/reference/specifications-for-github-hosted-runners/#supported-software)。
{% endif %}

## 基本要求

您应该熟悉 YAML 和 {% data variables.product.prodname_actions %} 的语法。 更多信息请参阅：
- "[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

建议您对 Java 和 Gradle 框架有个基本的了解。 更多信息请参阅 Gradle 文档中的[入门指南](https://docs.gradle.org/current/userguide/getting_started.html)。

{% data reusables.actions.enterprise-setup-prereq %}

## 使用 Gradle 入门工作流程

{% data variables.product.prodname_dotcom %} 提供有 Gradle 入门工作流程，适用于大多数基于 Gradle 的 Java 项目。 更多信息请参阅 [Gradle 入门工作流程](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml)。

要快速开始，您可以在创建新工作流程时选择预配置的 Gradle 入门工作流程。 更多信息请参阅“[{% data variables.product.prodname_actions %} 快速入门](/actions/quickstart)”。

您也可以通过在仓库的 `.github/workflow` 目录中创建新文件来手动添加此工作流程。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up JDK 11
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Build with Gradle
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: build
```

此工作流程执行以下步骤：

1. `checkout` 步骤在运行器上下载仓库的副本。
2. `setup-java` 步骤配置 Adoptium 的 Java 11 JDK。
3. “验证 Gradle 包装器”步骤验证源树中存在的 Gradle Wrapper JAR 文件的校验和。
4. “使用 Gradle 构建”步骤使用 Gradle 组织在 {% data variables.product.prodname_dotcom %}上提供的 `gradle/gradle-build-action` 操作进行构建。 该操作负责调用 Gradle、收集结果以及在作业之间缓存状态。 更多信息请参阅 [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action)。

在创建构建和测试工作流程时，默认入门工作流程是很好的起点，然后您可以自定义入门工作流程以满足项目的需求。

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## 构建和测试代码

您可以使用与本地相同的命令来构建和测试代码。

初学者工作流程默认将运行 `build` 任务。 在默认的 Gradle 配置中，此命令将下载依赖项、构建类别、运行测试并将类别打包为可分发格式，如 JAR 文件。

如果使用不同的命令来构建项目，或者想要使用不同的任务，则可以指定这些命令。 例如，您可能想要运行在 _ci.gradle_ 文件中配置的 `package` 任务。

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Run the Gradle package task
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: -b ci.gradle package
```

{% ifversion actions-caching %}

## 缓存依赖项

可以缓存构建依赖项以加快工作流程运行速度。 成功运行后， `gradle/gradle-build-action` 会缓存 Gradle 用户主目录的重要部分。 在将来的作业中，将还原缓存，这样就不需要重新编译构建脚本，也不需要从远程包存储库下载依赖项。

使用 `gradle/gradle-build-action` 操作时，缓存默认启用。 更多信息请参阅 [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action#caching)。

{% endif %}

## 将工作流数据打包为构件

构建成功且测试通过后，您可能想要上传生成的 Java 包作为构件。 这会将构建的包存储为工作流程运行的一部分，并允许您下载它们。 构件可帮助您在拉取请求合并之前在本地环境中测试并调试它们。 更多信息请参阅“[使用构件持久化工作流程](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

Gradle 通常会在 `build/libs` 目录中创建 JAR、EAR 或 WAR 等输出文件。 您可以使用 `upload-artifact` 操作上传该目录的内容。

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Build with Gradle
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: build
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/libs
```
