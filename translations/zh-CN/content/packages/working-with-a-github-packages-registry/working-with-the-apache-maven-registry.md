---
title: 使用 Apache Maven 注册表
intro: '您可以配置 Apache Maven 以将包发布到 {% data variables.product.prodname_registry %} 并将存储在 {% data variables.product.prodname_registry %} 上的包用作 Java 项目中的依赖项。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-apache-maven-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages
  - /packages/guides/configuring-apache-maven-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Apache Maven registry
ms.openlocfilehash: 0d2fafd69ac870a521fee8c7105b79bf8839d62c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061704'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## 向 {% data variables.product.prodname_registry %} 验证

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### 使用个人访问令牌进行身份验证

{% data reusables.package_registry.required-scopes %}

通过编辑 ~/.m2/settings.xml 文件以包含个人访问令牌，可以使用 Apache Maven 向 {% data variables.product.prodname_registry %} 进行身份验证。 如果 ~/.m2/settings.xml 文件不存在，请新建该文件。

在 `servers` 标记中，添加一个带有 `id` 的子 `server` 标记，将“USERNAME”替换为 {% data variables.product.prodname_dotcom %} 用户名，并将“TOKEN”替换为个人访问令牌。

在 `repositories` 标记中，通过将存储库的 `id` 映射到在包含凭据的 `server` 标记中添加的 `id` 来对该存储库进行配置。 将 {% ifversion ghes or ghae %}HOSTNAME 替换为 {% data variables.product.product_location %} 的主机名，并将{% endif %} OWNER 替换为拥有该存储库的用户或组织帐户的名称。 由于不支持大写字母，因此，即使您的 {% data variables.product.prodname_dotcom %} 用户或组织名称中包含大写字母，也必须对仓库所有者使用小写字母。

如果要与多个存储库交互，可以将每个存储库添加到 `repositories` 标记中独立的子 `repository`，将每个存储库的
`id` 映射到 `servers` 标记中的凭据。

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% ifversion ghes %} 如果实例启用了子域隔离：{% endif %}

```xml
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
        </repository>
        <repository>
          <id>github</id>
          <url>https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
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

{% ifversion ghes %} 如果实例禁用了子域隔离：

```xml
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
        </repository>
        <repository>
          <id>github</id>
          <url>HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
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

## 发布包

{% data reusables.package_registry.default-name %} 例如，{% data variables.product.prodname_dotcom %} 会将名为
`com.example:test` 的包发布到名为
`OWNER/test` 的存储库中。

如果要将多个包发布到同一存储库，可以在 pom.xml 文件的 `<distributionManagement>` 元素中包含该存储库的 URL。 {% data variables.product.prodname_dotcom %} 将根据该字段匹配仓库。 由于存储库名称也是 `distributionManagement` 元素的一部分，因此将多个包发布到同一存储库无需额外步骤。

有关创建包的详细信息，请参阅 [maven.apache.org 文档](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)。

1. 编辑位于包目录中的 pom.xml 文件的 `distributionManagement` 元素，将 {% ifversion ghes or ghae %}HOSTNAME 替换为 {% data variables.product.product_location %} 的主机名，将 {% endif %}`OWNER` 替换为拥有该存储库的用户或组织帐户的名称，并将 `REPOSITORY` 替换为包含项目的存储库的名称。{% ifversion ghes %} 

  如果您的实例启用了子域隔离功能：{% endif %}
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```{% ifversion ghes %}
  If your instance has subdomain isolation disabled:
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```{% endif %}
{% data reusables.package_registry.checksum-maven-plugin %}
1. Publish the package.
   ```shell
   $ mvn deploy
  ```

{% data reusables.package_registry.viewing-packages %}

## 安装包

要从 {% data variables.product.prodname_registry %} 安装 Apache Maven 包，请编辑 pom.xml 文件以包含该包作为依赖项。 如果要从多个存储库安装包，请为每个存储库添加 `repository` 标记。 有关在项目中使用 pom.xml 文件的详细信息，请参阅 Apache Maven 文档中的“[POM 简介](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)”。

{% data reusables.package_registry.authenticate-step %}
2. 将包依赖项添加到项目 pom.xml 文件的 `dependencies` 元素，将 `com.example:test` 替换为包。

  ```xml
  <dependencies>
    <dependency>
      <groupId>com.example</groupId>
      <artifactId>test</artifactId>
      <version>1.0.0-SNAPSHOT</version>
    </dependency>
  </dependencies>
  ```
{% data reusables.package_registry.checksum-maven-plugin %}
3. 安装此包。

  ```shell
  $ mvn install
  ```

## 延伸阅读

- “[使用 Gradle 注册表](/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry)”
- [删除和恢复包](/packages/learn-github-packages/deleting-and-restoring-a-package)
