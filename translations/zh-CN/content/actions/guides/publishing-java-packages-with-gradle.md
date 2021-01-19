---
title: 使用 Gradle 发布 Java 包
intro: 您可以使用 Gradle 将 Java 包发布到注册表，作为持续集成 (CI) 工作流程的一部分。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 简介

{% data reusables.github-actions.publishing-java-packages-intro %}

### 基本要求

建议对工作流程文件和配置选项有一个基本了解。 更多信息请参阅“[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

有关使用 Gradle 为 Java 项目创建 CI 工作流程的详细信息，请参阅“[使用 Gradle 构建和测试用 Java](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)”。

您可能还发现基本了解以下内容是有帮助的：

- "[配置 npm 用于 {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)"
- "[环境变量](/actions/reference/environment-variables)"
- [加密的密码](/actions/reference/encrypted-secrets)"
- "[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow)"

### 关于包配置

_build.gradle_ 文件 `MavenPublication` 部分的 `groupId` 和 `artifactId` 字段为包创建唯一标识符，供注册表用来将包链接到注册表。  这类似于 Maven _pom.xml_ 文件的 `groupId` 和 `artifactId` 字段。  更多信息请参阅 Gradle 文档中的“[Maven 发布插件](https://docs.gradle.org/current/userguide/publishing_maven.html)”。

_build.gradle_ 文件还包含 Gradle 将在其中部署包的分发管理仓库的配置。 每个仓库必须有名称、部署 URL 和验证凭据。

### 将包发布到 Maven 中心仓库

每次创建新版本时，都可以触发工作流程来发布包。 以下示例中的工作流程在类型为 `created` 的 `release` 事件触发时运行。 如果 CI 测试通过，工作流程将包发布到 Maven 中心仓库。 有关 `release` 事件的更多信息，请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows#release)”。

您可以在 _build.gradle_ 文件的发布块中定义指向包仓库的新 Maven 仓库。  例如，如果您通过 OSSRH 托管项目部署到 Maven 中心仓库，则 _build.gradle_ 可以指定名称为 `"OSSRH"` 的仓库。

{% raw %}
```groovy
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

使用此配置可创建一个工作流程，以通过运行 `gradle publish` 命令将包发布到 Maven 中心仓库。 您还需要提供包含用户名和密码的环境变量向仓库验证。

在部署步骤中，您需要为用于向 Maven 仓库验证身份的用户名和密码或令牌设置环境变量。 更多信息请参阅“[创建和使用加密密码](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。


{% raw %}
```yaml
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Publish package
        run: gradle publish
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. 运行 `gradle published` 命令以发布到 `OSSRH` Maven 仓库。 `MAVEN_USERNAME` 环境变量将使用 `OSSRH_USERNAME` 密码的内容设置，而 `MAVEN_PASSWORD` 环境变量将使用 `OSSRH_TOKEN` 密码的内容设置。

   有关在工作流程中使用密码的更多信息，请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

### 发布包到 {% data variables.product.prodname_registry %}

每次创建新版本时，都可以触发工作流程来发布包。 以下示例中的工作流程在类型为 `created` 的 `release` 事件触发时运行。 如果 CI 测试通过，工作流程会将包发布到 {% data variables.product.prodname_registry %}。 有关 `release` 事件的更多信息，请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows#release)”。

您可以在 _build.gradle_ 文件的发布块中定义指向 {% data variables.product.prodname_registry %} 的新 Maven 仓库。  在仓库配置中，您也可以利用在 CI 工作流程运行中设置的环境变量。  您可以使用 `GITHUB_ACTOR` 环境变量作为用户名，并且可以使用 `GITHUB_TOKENN` 密码设置 `GITHUB_TOKEN` 环境变量。

`GITHUB_TOKEN` 默认存在于您的仓库中，并且对工作流程运行的仓库中的包具有读取和写入权限。 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”。

例如，如果组织名为“octocat”且仓库名为“hello-world”，则 _build.gradle_ 中的 {% data variables.product.prodname_registry %} 配置看起来类似于以下示例。

{% raw %}
```groovy
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

使用此配置可创建一个工作流程，以通过运行 `gradle publish` 命令将包发布到 Maven 中心仓库。

{% raw %}
```yaml
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Publish package
        run: gradle publish
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. 运行 `gradle published` 命令以发布到 {% data variables.product.prodname_registry %}。 `GITHUB_TOKEN` 环境变量将使用 `GITHUB_TOKEN` 密码的内容设置。

   有关在工作流程中使用密码的更多信息，请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

### 发布包到 Maven 中心仓库和 {% data variables.product.prodname_registry %}

您可以通过在 _build.gradle_ 文件中配置每项设置，将包发布到 Maven 中心仓库和 {% data variables.product.prodname_registry %}。

确保 _build.gradle_ 文件包含用于 {% data variables.product.prodname_dotcom %} 仓库和 Maven 中心仓库提供商的仓库。

例如，如果您通过 OSSRH 托管项目部署到 Maven 中心仓库，您可能想要在分发管理仓库中指定它，并将 `name` 设置为 `OSSRH`。 如果您部署到 {% data variables.product.prodname_registry %}，您可能想要在分发管理仓库中指定它，并将 `name` 设置为 `GitHubPackages`。

如果组织名为“octocat”且仓库名为“hello-world”，则 _build.gradle_ 中的 {% data variables.product.prodname_registry %} 配置看起来类似于以下示例。

{% raw %}
```groovy
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

使用此配置可创建一个工作流程，以通过运行 `gradle publish` 命令将包发布到 Maven 中心仓库和 {% data variables.product.prodname_registry %}。

{% raw %}
```yaml
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Publish to the Maven Central Repository
        run: gradle publish
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. 运行 `gradle published` 命令以发布到 `OSSRH` Maven 仓库和 {% data variables.product.prodname_registry %}。 `MAVEN_USERNAME` 环境变量将使用 `OSSRH_USERNAME` 密码的内容设置，而 `MAVEN_PASSWORD` 环境变量将使用 `OSSRH_TOKEN` 密码的内容设置。 `GITHUB_TOKEN` 环境变量将使用 `GITHUB_TOKEN` 密码的内容设置。

   有关在工作流程中使用密码的更多信息，请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。
