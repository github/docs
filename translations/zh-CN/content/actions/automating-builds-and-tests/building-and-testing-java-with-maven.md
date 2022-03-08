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
shortTitle: 使用 Maven 构建和测试 Java
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

本指南介绍如何使用 Maven 软件项目管理工具为 Java 项目创建执行持续集成 (CI) 的工作流程。 您创建的工作流程将允许您查看拉取请求提交何时会在默认分支上导致构建或测试失败； 这个方法可帮助确保您的代码始终是健康的。 您可以扩展 CI 工作流程以缓存文件并且从工作流程运行上传构件。

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}
{% data variables.product.prodname_dotcom %} 托管的运行器有工具缓存预安装的软件，包括 Java Development Kits (JDKs) 和 Maven。 有关软件以及 JDK 和 Maven 预安装版本的列表，请参阅 [{% data variables.product.prodname_dotcom %} 托管的运行器的规格](/actions/reference/specifications-for-github-hosted-runners/#supported-software)。
{% endif %}

## 基本要求

您应该熟悉 YAML 和 {% data variables.product.prodname_actions %} 的语法。 更多信息请参阅：
- "[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

建议您对 Java 和 Maven 框架有个基本的了解。 更多信息请参阅 Maven 文档中的 [Maven 入门指南](http://maven.apache.org/guides/getting-started/index.html)。

{% data reusables.actions.enterprise-setup-prereq %}

## Using the Maven starter workflow

{% data variables.product.prodname_dotcom %} provides a Maven starter workflow that will work for most Maven-based Java projects. For more information, see the [Maven starter workflow](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml).

To get started quickly, you can choose the preconfigured Maven starter workflow when you create a new workflow. 更多信息请参阅“[{% data variables.product.prodname_actions %} 快速入门](/actions/quickstart)”。

您也可以通过在仓库的 `.github/workflow` 目录中创建新文件来手动添加此工作流程。

{% raw %}
```yaml{:copy}
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK 11
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots verify
```
{% endraw %}

此工作流程执行以下步骤：

1. `checkout` 步骤在运行器上下载仓库的副本。
2. `setup-java` 步骤配置 Adoptium 的 Java 11 JDK。
3. “使用 Maven 构建”步骤以非交互模式运行 Maven `package` 目标，以确保创建代码版本、测试通行证和软件包。

The default starter workflows are excellent starting points when creating your build and test workflow, and you can customize the starter workflow to suit your project’s needs.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## 构建和测试代码

您可以使用与本地相同的命令来构建和测试代码。

初学者工作流程默认将运行 `package` 目标。 在默认的 Maven 配置中，此命令将下载依赖项、构建类别、运行测试并将类别打包为可分发格式，如 JAR 文件。

如果使用不同的命令来构建项目，或者想要使用不同的目标，则可以指定这些命令。 例如，您可能想要运行在 _pom-ci.xml_ 文件中配置的 `verify` 目标。

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Maven verify phase
    run: mvn --batch-mode --update-snapshots verify
```
{% endraw %}

## 缓存依赖项

使用 {% data variables.product.prodname_dotcom %} 托管的运行器时，您可以缓存依赖项以加速工作流程运行。 运行成功后，您的本地 Maven 仓库将存储在 GitHub Actions 基础架构中。 在未来的工作流程运行中，缓存将会恢复，因此不需要从远程 Maven 仓库下载依赖项。 您可以简单地使用 [`setup-java` 操作](https://github.com/marketplace/actions/setup-java-jdk)缓存依赖项，也可使用 [`cache` 操作](https://github.com/actions/cache)进行自定义和更高级的配置。

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 11
    uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'
      cache: maven
  - name: Build with Maven
    run: mvn --batch-mode --update-snapshots verify
```
{% endraw %}

此工作流程将保存本地 Maven 存储库的内容，位于运行器主目录的 `.m2` 目录。 缓存密钥是 _pom.xml_ 的哈希内容，因此更改 _pom.xml_ 将使缓存失效。

## 将工作流数据打包为构件

构建成功且测试通过后，您可能想要上传生成的 Java 包作为构件。 这会将构建的包存储为工作流程运行的一部分，并允许您下载它们。 构件可帮助您在拉取请求合并之前在本地环境中测试并调试它们。 更多信息请参阅“[使用构件持久化工作流程](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

Maven 通常会在 `target` 目录中创建 JAR、EAR 或 WAR 等输出文件。 要将这些项目上传为构件，可以将它们复制到包含要上传的构件的新目录中。 例如，您可以创建一个名为 `staging` 的目录。 然后您可以使用 `upload-artifact` 操作上传该目录的内容。

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v2
    with:
      java-version: '11'
      distribution: 'adopt'
  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging
  - uses: actions/upload-artifact@v3
    with:
      name: Package
      path: staging
```
{% endraw %}
