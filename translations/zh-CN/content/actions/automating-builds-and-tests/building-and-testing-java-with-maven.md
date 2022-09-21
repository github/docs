---
title: 使用 Maven 构建和测试 Java
intro: 您可以在 GitHub Actions 中创建持续集成 (CI) 工作流程，以使用 Maven 构建和测试 Java 项目。
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-maven
  - /actions/guides/building-and-testing-java-with-maven
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Maven
shortTitle: Build & test Java with Maven
ms.openlocfilehash: 59d8961a7fdd1d8b84a05b8762bb09be3d2ab01c
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '146179805'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南介绍如何使用 Maven 软件项目管理工具为 Java 项目创建执行持续集成 (CI) 的工作流程。 您创建的工作流程将允许您查看拉取请求提交何时会在默认分支上导致构建或测试失败； 这个方法可帮助确保您的代码始终是健康的。 你可以将 CI 工作流扩展到{% ifversion actions-caching %}缓存文件并且{% endif %}从工作流运行上传项目。

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} 托管的运行器有一个带有预安装软件的工具缓存，其中包括 Java 开发工具包 (JDK) 和 Maven。 有关软件以及 JDK 和 Maven 的预安装版本的列表，请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器规范](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”。
{% endif %}

## 先决条件

您应该熟悉 YAML 和 {% data variables.product.prodname_actions %} 的语法。 有关详细信息，请参阅：
- “[{% data variables.product.prodname_actions %} 工作流语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)”
- [了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)

建议您对 Java 和 Maven 框架有个基本的了解。 有关详细信息，请参阅 Maven 文档中的 [Maven 入门指南](http://maven.apache.org/guides/getting-started/index.html)。

{% data reusables.actions.enterprise-setup-prereq %}

## 使用 Maven 入门工作流程

{% data variables.product.prodname_dotcom %} 提供有 Maven 入门工作流程，适用于大多数基于 Maven 的 Java 项目。 有关详细信息，请参阅 [Maven 入门工作流](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml)。

要快速开始，您可以在创建新工作流程时选择预配置的 Maven 入门工作流程。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 快速入门](/actions/quickstart)”。

也可以通过在存储库的 `.github/workflows` 目录中创建新文件来手动添加此工作流。

```yaml{:copy}
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
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots package
```

此工作流程执行以下步骤：

1. `checkout` 步骤在运行器上下载存储库的副本。
2. `setup-java` 步骤通过 Adoptium 配置 Java 11 JDK。
3. “使用 Maven 构建”步骤以非交互模式运行 Maven `package` 目标，以确保生成代码、通过测试以及可创建包。

在创建构建和测试工作流程时，默认入门工作流程是很好的起点，然后您可以自定义入门工作流程以满足项目的需求。

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## 构建和测试代码

您可以使用与本地相同的命令来构建和测试代码。

默认情况下，入门工作流将运行 `package` 目标。 在默认的 Maven 配置中，此命令将下载依赖项、构建类别、运行测试并将类别打包为可分发格式，如 JAR 文件。

如果使用不同的命令来构建项目，或者想要使用不同的目标，则可以指定这些命令。 例如，你可能想要运行在 pom-ci.xml 文件中配置的 `verify` 目标。

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Maven verify phase
    run: mvn --batch-mode --update-snapshots verify
```

{% ifversion actions-caching %}

## 缓存依赖项

您可以缓存依赖项来加快工作流程运行。 成功运行后，本地 Maven 存储库将存储在缓存中。 在未来的工作流程运行中，缓存将会恢复，因此不需要从远程 Maven 仓库下载依赖项。 可以简单地使用 [`setup-java` 操作](https://github.com/marketplace/actions/setup-java-jdk)缓存依赖项，也 可以使用 [`cache` 操作](https://github.com/actions/cache)进行自定义和更高级的配置。

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      cache: maven
  - name: Build with Maven
    run: mvn --batch-mode --update-snapshots verify
```

此工作流程将保存本地 Maven 存储库的内容，该存储库位于运行器主目录的 `.m2` 目录。 缓存密钥将是 pom.xml 的哈希内容，因此更改 pom.xml 会使缓存失效 。

{% endif %}

## 将工作流数据打包为构件

构建成功且测试通过后，您可能想要上传生成的 Java 包作为构件。 这会将构建的包存储为工作流程运行的一部分，并允许您下载它们。 构件可帮助您在拉取请求合并之前在本地环境中测试并调试它们。 有关详细信息，请参阅“[使用工件持久保存工作流数据](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

Maven 通常会在 `target` 目录中创建 JAR、EAR 或 WAR 等输出文件。 要将这些项目上传为构件，可以将它们复制到包含要上传的构件的新目录中。 例如，可创建一个名为 `staging` 的目录。 然后，可以使用 `upload-artifact` 操作上传该目录的内容。

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: staging
```
