---
title: 使用 Maven 发布 Java 包
intro: 您可以使用 Maven 将 Java 包发布到注册表，作为持续集成 (CI) 工作流程的一部分。
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-maven
  - /actions/guides/publishing-java-packages-with-maven
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
  - Maven
shortTitle: 带有 Maven 的 Java 包
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

{% data reusables.actions.publishing-java-packages-intro %}

## 基本要求

建议对工作流程文件和配置选项有一个基本了解。 更多信息请参阅“[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

有关为使用 Maven 为 Java 项目创建 CI 工作流程的详细信息，请参阅“[使用 Maven 构建和测试用 Java](/actions/language-and-framework-guides/building-and-testing-java-with-maven)”。

您可能还发现基本了解以下内容是有帮助的：

- “[使用 npm 注册表](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)”
- "[环境变量](/actions/reference/environment-variables)"
- [加密的密码](/actions/reference/encrypted-secrets)"
- "[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow)"

## 关于包配置

_pom.xml_ 文件中的 `groupId` 和 `artifactId` 字段为包创建唯一标识符，供注册表用来将包链接到注册表。  更多信息请参阅 Apache Maven 文档中的[将构件上传到中心仓库的指南](http://maven.apache.org/repository/guide-central-repository-upload.html)。

_pom.xml_ 文件还包含 Maven 将在其中部署包的分配管理仓库的配置。 每个仓库都必须有名称和部署 URL。 这些仓库的身份验证可在运行 Maven 的用户主目录下的 _.m2/settings.xml_ 文件中配置。

您可以使用 `setup-java` 操作配置部署仓库以及该仓库的身份验证。 更多信息请参阅 [`setup-java`](https://github.com/actions/setup-java)。

## 将包发布到 Maven 中心仓库

每次创建新版本时，都可以触发工作流程来发布包。 以下示例中的工作流程在类型为 `created` 的 `release` 事件触发时运行。 如果 CI 测试通过，工作流程将包发布到 Maven 中心仓库。 有关 `release` 事件的更多信息，请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows#release)”。

在此工作流程中，您可以使用 `setup-java` 操作。 此操作将 JDK 的给定版本安装到 `PATH`，但同时会配置 Maven _settings.xml_ 以发布包。 默认情况下，设置文件将配置用于 {% data variables.product.prodname_registry %}，但可以将其配置为部署到另一个包注册表，如 Maven 中心仓库。 如果您已经在 _pom.xml_ 配置分配管理仓库，则可在 `setup-java` 操作调用期间指定该 `id`。

例如，如果您通过 OSSRH 托管项目部署到 Maven 中心仓库，则 _pom.xml_ 可以指定 `id` 为 `ossrh` 的分发管理仓库。

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>ossrh</id>
      <name>Central Repository OSSRH</name>
      <url>https://oss.sonatype.org/service/local/staging/deploy/maven2/</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

使用此配置，可通过将仓库管理 `id` 指定到 `setup-java` 操作，创建一个将包发布到 Maven 中心仓库的工作流程。 您还需要提供包含用户名和密码的环境变量向仓库验证。

在部署步骤中，您需要将环境变量设置为向仓库验证的用户名，以及用密码或令牌配置为进行身份验证的密钥。  更多信息请参阅“[创建和使用加密密码](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

```yaml{:copy}
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

此工作流程执行以下步骤：

1. 检出项目仓库的副本。
1. 设置 Java JDK，同时使用 `MAVEN_USERNAME` 和 `MAVEN_PASSWORD` 环境变量配置 Maven _settings.xml_ 文件为 `ossrh` 仓库添加身份验证。
1. {% data reusables.actions.publish-to-maven-workflow-step %}

   有关在工作流程中使用密码的更多信息，请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

## 发布包到 {% data variables.product.prodname_registry %}

每次创建新版本时，都可以触发工作流程来发布包。 以下示例中的工作流程在类型为 `created` 的 `release` 事件触发时运行。 如果 CI 测试通过，工作流程会将包发布到 {% data variables.product.prodname_registry %}。 有关 `release` 事件的更多信息，请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows#release)”。

在此工作流程中，您可以使用 `setup-java` 操作。 此操作将给定版本的 JDK 安装到 `PATH`，并且设置 Maven _settings.xml_ 以将包发布到 {% data variables.product.prodname_registry %}。 生成的 _settings.xml_ 定义使用 `github` 的 `id` 向服务器验证，使用 `GITHUB_ACTOR` 环境变量作为用户名，`GITHUB_TOKEN` 环境变量作为密码。 `GITHUB_TOKEN` 环境变量将获分配特殊 `GITHUB_TOKEN` 密钥的值。

{% data reusables.actions.github-token-permissions %}

对于基于 Maven的项目，您可以通过在 _pom.xml_ 文件中创建分发仓库来使用这些设置，该文件以 `github` 的 `id` 指向 {% data variables.product.prodname_registry %} 端点。

例如，如果组织名为“octocat”且仓库名为“hello-world”，则 _pom.xml_ 中的 {% data variables.product.prodname_registry %} 配置看起来类似于以下示例。

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>github</id>
      <name>GitHub Packages</name>
      <url>https://maven.pkg.github.com/octocat/hello-world</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

通过此配置，您可以创建一个工作流程，以使用自动生成的 _settings.xml_ 将包发布到 {% data variables.product.prodname_registry %}。

```yaml{:copy}
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
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

此工作流程执行以下步骤：

1. 检出项目仓库的副本。
1. 设置 Java JDK，同时自动配置 Maven _settings.xml_ 文件为 `github` Maven 仓库添加身份验证，以使用 `GITHUB_TOKEN` 环境变量。
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   有关在工作流程中使用密码的更多信息，请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

## 发布包到 Maven 中心仓库和 {% data variables.product.prodname_registry %}

您可以使用每个注册表的 `setup-node` 操作将包发布到 Maven 中心仓库和 {% data variables.product.prodname_registry %}。

确保 _pom.xml_ 文件包含用于 {% data variables.product.prodname_dotcom %} 仓库和 Maven 中心仓库提供商的分发管理仓库。 例如，如果您通过 OSSRH 托管项目部署到中心仓库，您可能想通过将 `id` 设置为 `ossrh` 在分发管理仓库中指定它，并且想通过将 `id` 设置为 `github` 在分发管理仓库中指定 {% data variables.product.prodname_registry %}。

```yaml{:copy}
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
      - name: Set up Java for publishing to Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
      - name: Set up Java for publishing to GitHub Packages
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish to GitHub Packages
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

此工作流程将调用 `setup-java` 操作两次。  每次运行 `setup-java` 操作时，都会覆盖 Maven _settings.xml_ 文件以发布包。  为向仓库验证，_settings.xml_ 文件引用分发管理仓库 `id` 以及用户名和密码。

此工作流程执行以下步骤：

1. 检出项目仓库的副本。
1. 第一次调用 `setup-java`。 这将为 `ossrh` 仓库配置 Maven _settings.xml_ 文件，并将身份验证选项设置为下一步定义的环境变量。
1. {% data reusables.actions.publish-to-maven-workflow-step %}
1. 第二次调用 `setup-java`。 这将自动为 {% data variables.product.prodname_registry %} 配置 Maven _settings.xml_ 文件。
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   有关在工作流程中使用密码的更多信息，请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。
