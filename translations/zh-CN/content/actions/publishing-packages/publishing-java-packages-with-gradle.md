---
title: 使用 Gradle 发布 Java 包
intro: 您可以使用 Gradle 将 Java 包发布到注册表，作为持续集成 (CI) 工作流程的一部分。
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
  - /actions/guides/publishing-java-packages-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Gradle
shortTitle: Java packages with Gradle
ms.openlocfilehash: 58bb9f872dbb136624c82ab7ae073d9b670e98e3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410281'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

{% data reusables.actions.publishing-java-packages-intro %}

## 先决条件

建议对工作流程文件和配置选项有一个基本了解。 有关详细信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

有关使用 Gradle 为 Java 项目创建 CI 工作流的更多信息，请参阅“[使用 Gradle 构建和测试 Java](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)”。

您可能还发现基本了解以下内容是有帮助的：

- “[使用 npm 注册表](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)”
- “[环境变量](/actions/reference/environment-variables)”
- [加密机密](/actions/reference/encrypted-secrets)
- “[工作流中的身份验证](/actions/reference/authentication-in-a-workflow)”

## 关于包配置

build.gradle 文件 `MavenPublication` 部分中的 `groupId` 和 `artifactId` 字段为包创建唯一标识符，注册表使用该标识符将包链接到注册表。  这类似于 Maven pom.xml 文件的 `groupId` 和 `artifactId` 字段。  有关详细信息，请参阅 Gradle 文档中的“[Maven 发布插件](https://docs.gradle.org/current/userguide/publishing_maven.html)”。

build.gradle 文件还包含 Gradle 将向其发布包的分发管理存储库的配置。 每个仓库必须有名称、部署 URL 和验证凭据。

## 将包发布到 Maven 中心仓库

每次创建新版本时，都可以触发工作流程来发布包。 以下示例中的工作流在类型为 `created` 的 `release` 事件触发时运行。 如果 CI 测试通过，工作流程将包发布到 Maven 中心仓库。 有关 `release` 事件的详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows#release)”。

你可以在指向包存储库的 build.gradle 文件的发布块中定义一个新的 Maven 存储库。  例如，如果通过 OSSRH 托管项目部署到 Maven 中央存储库，则 build.gradle 可以指定名称为 `"OSSRH"` 的存储库。

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
  }
}
```
{% endraw %}

使用此配置，可以创建一个工作流，通过运行 `gradle publish` 命令将包发布到 Maven 中央存储库。 在部署步骤中，您需要为用于向 Maven 仓库验证身份的用户名和密码或令牌设置环境变量。 有关详细信息，请参阅“[创建和使用加密机密](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. 使用 `publish` 参数运行 [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) 操作以发布到 `OSSRH` Maven 存储库。 `MAVEN_USERNAME` 环境变量将使用 `OSSRH_USERNAME` 机密的内容进行设置，`MAVEN_PASSWORD` 环境变量将使用 `OSSRH_TOKEN` 机密的内容进行设置。

   有关在工作流中使用机密的详细信息，请参阅“[创建和使用加密机密](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

## 发布包到 {% data variables.product.prodname_registry %}

每次创建新版本时，都可以触发工作流程来发布包。 以下示例中的工作流在类型为 `created` 的 `release` 事件触发时运行。 如果 CI 测试通过，工作流程会将包发布到 {% data variables.product.prodname_registry %}。 有关 `release` 事件的详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows#release)”。

可以在指向 {% data variables.product.prodname_registry %} 的 build.gradle 的发布块中定义一个新的 Maven 存储库。  在仓库配置中，您也可以利用在 CI 工作流程运行中设置的环境变量。  可以使用 `GITHUB_ACTOR` 环境变量作为用户名，并且可以使用 `GITHUB_TOKEN` 机密设置 `GITHUB_TOKEN` 环境变量。

{% data reusables.actions.github-token-permissions %}

例如，如果组织名为“octocat”，存储库名为“hello-world”，则 build.gradle 中的 {% data variables.product.prodname_registry %} 配置类似于以下示例。

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

使用此配置，可以创建一个工作流，通过运行 `gradle publish` 命令将包发布到 {% data variables.product.prodname_registry %}。

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. 使用 `publish` 参数运行 [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) 操作以发布到 {% data variables.product.prodname_registry %}。 `GITHUB_TOKEN` 环境变量将使用 `GITHUB_TOKEN` 机密的内容进行设置。 `permissions` 密钥指定 `GITHUB_TOKEN` 机密允许的访问。

   有关在工作流中使用机密的详细信息，请参阅“[创建和使用加密机密](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

## 发布包到 Maven 中心仓库和 {% data variables.product.prodname_registry %}

可以通过在 build.gradle 文件中配置每个包来将包发布到 Maven 中央存储库和 {% data variables.product.prodname_registry %}。

确保 build.gradle 文件包含 {% data variables.product.prodname_dotcom %} 存储库和 Maven 中央存储库提供程序的存储库。

例如，如果通过 OSSRH 托管项目部署到中央存储库，可能希望在分发管理存储库中指定它，并将 `name` 设置为 `OSSRH`。 如果部署到 {% data variables.product.prodname_registry %}，可能希望在分发管理存储库中指定它，并将 `name` 设置为 `GitHubPackages`。

如果组织名为“octocat”，存储库名为“hello-world”，则 build.gradle 中的配置类似于以下示例。

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

使用此配置，可以创建一个工作流，通过运行 `gradle publish` 命令将包发布到 Maven 中央存储库和 {% data variables.product.prodname_registry %}。

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env: {% raw %}
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. 使用 `publish` 参数运行 [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) 操作以发布到 `OSSRH` Maven 存储库和 {% data variables.product.prodname_registry %}。 `MAVEN_USERNAME` 环境变量将使用 `OSSRH_USERNAME` 机密的内容进行设置，`MAVEN_PASSWORD` 环境变量将使用 `OSSRH_TOKEN` 机密的内容进行设置。 `GITHUB_TOKEN` 环境变量将使用 `GITHUB_TOKEN` 机密的内容进行设置。 `permissions` 密钥指定 `GITHUB_TOKEN` 机密允许的访问。

   有关在工作流中使用机密的详细信息，请参阅“[创建和使用加密机密](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。
