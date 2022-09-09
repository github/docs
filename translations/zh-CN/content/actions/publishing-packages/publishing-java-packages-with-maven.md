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
shortTitle: Java packages with Maven
ms.openlocfilehash: e5a1c9ad670bef2e059f5808fa41e1fcbe5848af
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147717915'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 简介

{% data reusables.actions.publishing-java-packages-intro %}

## 先决条件

建议对工作流程文件和配置选项有一个基本了解。 有关详细信息，请参阅“[了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

有关使用 Maven 为 Java 项目创建 CI 工作流的详细信息，请参阅“[使用 Maven 构建和测试用 Java](/actions/language-and-framework-guides/building-and-testing-java-with-maven)”。

您可能还发现基本了解以下内容是有帮助的：

- “[使用 npm 注册表](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)”
- “[环境变量](/actions/reference/environment-variables)”
- [加密机密](/actions/reference/encrypted-secrets)
- “[工作流中的身份验证](/actions/reference/authentication-in-a-workflow)”

## 关于包配置

pom.xml 文件中的 `groupId` 和 `artifactId` 字段为包创建唯一标识符，注册表使用该标识符将包链接到注册表。  有关详细信息，请参阅 Apache Maven 文档中的[将项目上传到中央存储库的指南](http://maven.apache.org/repository/guide-central-repository-upload.html)。

pom.xml 文件还包含 Maven 将在其中部署包的分发管理存储库的配置。 每个仓库都必须有名称和部署 URL。 可在运行 Maven 的用户主目录中的 .m2/settings.xml 文件中配置这些存储库的身份验证。

可以使用 `setup-java` 操作配置部署存储库以及该存储库的身份验证。 有关详细信息，请参阅 [`setup-java`](https://github.com/actions/setup-java)。

## 将包发布到 Maven 中心仓库

每次创建新版本时，都可以触发工作流程来发布包。 以下示例中的工作流在类型为 `created` 的 `release` 事件触发时运行。 如果 CI 测试通过，工作流程将包发布到 Maven 中心仓库。 有关 `release` 事件的详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows#release)”。

在此工作流中，可以使用 `setup-java` 操作。 此操作将给定版本的 JDK 安装到 `PATH` 中，但同时会配置 Maven settings.xml 以发布包。 默认情况下，设置文件将配置用于 {% data variables.product.prodname_registry %}，但可以将其配置为部署到另一个包注册表，如 Maven 中心仓库。 如果已在 pom.xml 中配置了分发管理存储库，则可在 `setup-java` 操作调用期间指定该 `id`。

例如，如果通过 OSSRH 托管项目部署到 Maven 中央存储库，则 pom.xml 可以指定 `id` 为 `ossrh` 的分发管理存储库。

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

使用此配置，可通过将存储库管理 `id` 指定到 `setup-java` 操作，创建一个将包发布到 Maven 中央存储库的工作流。 您还需要提供包含用户名和密码的环境变量向仓库验证。

在部署步骤中，您需要将环境变量设置为向仓库验证的用户名，以及用密码或令牌配置为进行身份验证的密钥。  有关详细信息，请参阅“[创建和使用加密机密](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

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
1. 设置 Java JDK，并使用 `MAVEN_USERNAME` 和 `MAVEN_PASSWORD` 环境变量配置 Maven settings.xml 文件，为 `ossrh` 存储库添加身份验证。
1. {% data reusables.actions.publish-to-maven-workflow-step %}

   有关在工作流中使用机密的详细信息，请参阅“[创建和使用加密机密](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

## 发布包到 {% data variables.product.prodname_registry %}

每次创建新版本时，都可以触发工作流程来发布包。 以下示例中的工作流在类型为 `created` 的 `release` 事件触发时运行。 如果 CI 测试通过，工作流程会将包发布到 {% data variables.product.prodname_registry %}。 有关 `release` 事件的详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows#release)”。

在此工作流中，可以使用 `setup-java` 操作。 此操作将给定版本的 JDK 安装到 `PATH` 中，并设置 Maven settings.xml 以将包发布到 {% data variables.product.prodname_registry %}。 生成的 settings.xml 为服务器定义身份验证，该服务器的 `id` 为 `github`，使用 `GITHUB_ACTOR` 环境变量作为用户名，使用 `GITHUB_TOKEN` 环境变量作为密码。 `GITHUB_TOKEN` 环境变量被分配了特殊 `GITHUB_TOKEN` 机密的值。

{% data reusables.actions.github-token-permissions %}

对于基于 Maven 的项目，可通过在 pom.xml 文件中创建分发存储库来使用这些设置，该文件的 `id` 为 `github`，指向 {% data variables.product.prodname_registry %} 终结点。

例如，如果组织名为“octocat”而存储库名为“hello-world”，则 pom.xml 中的 {% data variables.product.prodname_registry %} 配置将类似于下面的例子。

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

使用此配置，你可以创建一个工作流，利用自动生成的 settings.xml 将包发布到 {% data variables.product.prodname_registry %}。

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
1. 设置 Java JDK，并自动配置 Maven settings.xml 文件，为 `github` Maven 存储库添加身份验证以使用 `GITHUB_TOKEN` 环境变量。
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   有关在工作流中使用机密的详细信息，请参阅“[创建和使用加密机密](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

## 发布包到 Maven 中心仓库和 {% data variables.product.prodname_registry %}

可以通过对每个注册表使用 `setup-java` 操作将包发布到 Maven 中央存储库和 {% data variables.product.prodname_registry %}。

确保 pom.xml 文件包含用于 {% data variables.product.prodname_dotcom %} 存储库和 Maven 中央存储库提供程序的分发管理存储库。 例如，如果通过 OSSRH 托管项目部署到中央存储库，你可以通过将 `id` 设置为 `ossrh` 在分发管理存储库中指定该 OSSRH 托管项目，并且可以通过将 `id` 设置为 `github` 在分发管理存储库中指定 {% data variables.product.prodname_registry %}。

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

此工作流调用 `setup-java` 操作两次。  每次 `setup-java` 操作运行时，都会覆盖 Maven settings.xml 文件以发布包。  为向存储库进行身份验证，settings.xml 文件引用分发管理存储库 `id` 以及用户名和密码。

此工作流程执行以下步骤：

1. 检出项目仓库的副本。
1. 第一次调用 `setup-java`。 这将为 `ossrh` 存储库配置 Maven settings.xml 文件，并将身份验证选项设置为在下一步中定义的环境变量。
1. {% data reusables.actions.publish-to-maven-workflow-step %}
1. 第二次调用 `setup-java`。 这将自动为 {% data variables.product.prodname_registry %} 配置 Maven settings.xml 文件。
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   有关在工作流中使用机密的详细信息，请参阅“[创建和使用加密机密](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。
