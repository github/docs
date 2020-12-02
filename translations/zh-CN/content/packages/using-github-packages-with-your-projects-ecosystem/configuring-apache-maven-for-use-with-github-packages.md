---
title: 配置 Apache Maven 用于 GitHub 包
intro: '您可以配置 Apache Maven 以将包发布到 {% data variables.product.prodname_registry %} 并将存储在 {% data variables.product.prodname_registry %} 上的包用作 Java 项目中的依赖项。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-apache-maven-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

**注：**安装或发布 Docker 映像时，{% data variables.product.prodname_registry %} 当前不支持外部图层，如 Windows 映像。

### 向 {% data variables.product.prodname_registry %} 验证

{% data reusables.package_registry.authenticate-packages %}

#### 使用个人访问令牌进行身份验证

{% data reusables.package_registry.required-scopes %}

通过编辑 *~/.m2/settings.xml* 文件以包含个人访问令牌，您可以使用 Apache Maven 向 {% data variables.product.prodname_registry %} 验证。 如果 *~/.m2/settings.xml* 文件不存在，请新建该文件。

在 `servers` 标记中，添加带 `id` 的子 `server` 标记，将 *USERNAME* 替换为您的 {% data variables.product.prodname_dotcom %} 用户名，将 *TOKEN* 替换为您的个人访问令牌。

在 `repositories` 标记中，通过将仓库的 `id` 映射到您在包含凭据的 `server` 标记中添加的 `id` 来配置仓库。 将 {% if enterpriseServerVersions contains currentVersion %}*HOSTNAME* 替换为 {% data variables.product.prodname_ghe_server %} 实例的主机名称，{% endif %}将 *REPOSITORY* 替换为您要向其发布包或从中安装包的仓库的名称，并将 *OWNER* 替换为拥有仓库的用户或组织帐户的名称。 由于不支持大写字母，因此，即使您的 {% data variables.product.prodname_dotcom %} 用户或组织名称中包含大写字母，也必须对仓库所有者使用小写字母。

如果要与多个仓库交互，您可以将每个仓库添加到 `repository` 标记中独立的子 `repositories`，将每个仓库的 `id` 映射到 `servers` 标记中的凭据。

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% if enterpriseServerVersions contains currentVersion %}
有关创建包的更多信息，请参阅 [maven.apache.org 文档](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)。
{% endif %}

```
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
          <releases><enabled>true</enabled></releases>
          <snapshots><enabled>true</enabled></snapshots>
        </repository>
        <repository>
          <id>github</id>
          <name>GitHub OWNER Apache Maven Packages</name>
          <url>https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```

{% if enterpriseServerVersions contains currentVersion %}
例如，*OctodogApp* 和 *OctocatApp* 项目将发布到同一个仓库：

```
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
          <releases><enabled>true</enabled></releases>
          <snapshots><enabled>true</enabled></snapshots>
        </repository>
        <repository>
          <id>github</id>
          <name>GitHub OWNER Apache Maven Packages</name>
          <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```
{% endif %}

#### 使用 `GITHUB_TOKEN` 进行身份验证

{% data reusables.package_registry.package-registry-with-github-tokens %}

### 发布包

{% data reusables.package_registry.default-name %} 例如，{% data variables.product.prodname_dotcom %} 将名为 `com.example:test` 的包发布到名为 `OWNER/test` 的仓库中。

如果要将多个包发布到同一个仓库，您可以在 `pom.xml` 文件的 `<distributionManagement>` 元素中包含该仓库的 URL。 {% data variables.product.prodname_dotcom %} 将根据该字段匹配仓库。 由于仓库名称也是 `distributionManagement` 元素的一部分，因此将多个包发布到同一个仓库无需额外步骤、

有关创建包的更多信息，请参阅 [maven.apache.org 文档](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)。

1. 编辑包目录中 *pom.xml* 文件的 `distributionManagement` 元素，将 `OWNER` 替换为拥有该仓库的用户或组织帐户的名称，将 `REPOSITORY` 替换为包含项目的仓库的名称。

{% if enterpriseServerVersions contains currentVersion %}将 *HOSTNAME* 替换为您的 {% data variables.product.prodname_ghe_server %} 实例的主机名称， {% endif %}将 `OWNER` 替换为拥有仓库的用户或组织帐户的名称，并将 `REPOSITORY` 替换为包含您项目的仓库的名称。
  {% if enterpriseServerVersions contains currentVersion %}
  有关创建包的更多信息，请参阅 [maven.apache.org 文档](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)。
  {% endif %}
  ```
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```
  {% if enterpriseServerVersions contains currentVersion %}
  例如，*OctodogApp* 和 *OctocatApp* 项目将发布到同一个仓库：
  ```
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```
  {% endif %}
2. 发布包。

   ```shell
   $ mvn deploy
  ```

{% data reusables.package_registry.viewing-packages %}

### 安装包

要从 {% data variables.product.prodname_registry %} 安装 Apache Maven 包，请编辑 *pom.xml* 文件以包含该包作为依赖项。 如果要从多个仓库安装包，请为每个仓库添加 `repository` 标记。 有关在项目中使用 *pom.xml* 文件的更多信息，请参阅 Apache Maven 文档中的“[POM 简介](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)”。

{% data reusables.package_registry.authenticate-step %}
2. 将包依赖项添加到项目 *pom.xml* 文件的 `dependencies` 元素，将 `com.example:test` 替换为您的包。

  ```
  <dependencies>
    <dependency>
      <groupId>com.example</groupId>
      <artifactId>test</artifactId>
      <version>1.0.0-SNAPSHOT</version>
    </dependency>
  </dependencies>
  ```
3. 安装包。

  ```shell
  $ mvn install
  ```

### 延伸阅读

- "[配置 Gradle 用于 {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-gradle-for-use-with-github-packages)"
- “[删除包](/packages/publishing-and-managing-packages/deleting-a-package/)”
