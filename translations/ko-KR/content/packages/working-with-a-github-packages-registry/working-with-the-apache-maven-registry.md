---
title: Apache Maven 레지스트리 작업
intro: '패키지를 {% data variables.product.prodname_registry %}에 게시하고 {% data variables.product.prodname_registry %}에 저장된 패키지를 Java 프로젝트의 종속성으로 사용하도록 Apache Maven을 구성할 수 있습니다.'
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
ms.openlocfilehash: 7231e2298c02bcddec875d62ffb334b1d068c1a8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099133'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## {% data variables.product.prodname_registry %} 인증

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### {% 데이터 variables.product.pat_generic %}을(를) 사용하여 인증

{% data reusables.package_registry.required-scopes %}

{% 데이터 variables.product.prodname_registry %}을(를) 포함하도록 *~/.m2/settings.xml* 파일을 편집하여 Apache Maven에서 {% 데이터 variables.product.pat_v1 %}에 인증할 수 있습니다. *~/.m2/settings.xml* 파일이 없으면 새로 만듭니다.

태그에 `servers` 자식 `server` 태그를 `id`추가하고 *USERNAME* 을 {% 데이터 variables.product.prodname_dotcom %} 사용자 이름으로 대체하고 *토큰* 을 {% 데이터 variables.product.pat_generic %}으로 추가합니다.

`repositories` 태그에서 자격 증명을 포함하는 `server` 태그에 추가한 `id`에 리포지토리의 `id`를 자격 증명을 매핑하여 리포지토리를 구성합니다. {% ifversion ghes 또는 ghae %}*HOSTNAME* 을 {% data variables.location.product_location %}의 호스트 이름으로 바꾸고{% endif %} *OWNER* 를 리포지토리를 소유한 사용자 또는 조직 계정의 이름으로 바꿉니다. 대문자는 지원되지 않으므로 {% data variables.product.prodname_dotcom %} 사용자 이름 또는 조직 이름에 대문자가 포함되어 있더라도 리포지토리 소유자에는 소문자를 사용해야 합니다.

여러 리포지토리와 상호 작용하려는 경우 `repositories` 태그의 개별적인 `repository` 자식에 각 리포지토리를 추가하여 `servers` 태그의 자격 증명에 각 리포지토리의 `id`를 매핑할 수 있습니다.

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용된 경우: {% endif %}

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

{% ifversion ghes %} 인스턴스에 하위 도메인 격리가 사용되지 않은 경우:

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

## 패키지 게시

{% data reusables.package_registry.default-name %} 예를 들어 {% data variables.product.prodname_dotcom %}는 `OWNER/test`라는 이름의 리포지토리의 `com.example:test`라는 이름의 패키지를 게시합니다.

여러 패키지를 동일한 리포지토리에 게시하려는 경우 `<distributionManagement>`pom.xml *파일의* 요소에 리포지토리의 URL을 포함할 수 있습니다. {% data variables.product.prodname_dotcom %}은 해당 필드에 따라 리포지토리와 일치시킵니다. 리포지토리 이름도 `distributionManagement` 요소의 일부이므로 동일한 리포지토리에 여러 패키지를 게시하는 추가 단계는 없습니다.

패키지를 만드는 방법에 대한 자세한 내용은 [maven.apache.org 설명서](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)를 참조하세요.

1. `distributionManagement` 패키지 디렉터리에 있는 *pom.xml* 파일의 요소를 편집하여 {% ifversion ghes 또는 ghae %}*HOSTNAME* 을 {% data variables.location.product_location %}의 호스트 이름으로, {% endif %}`OWNER`을(를) 리포지 `REPOSITORY` 토리를 소유하는 사용자 또는 조직 계정의 이름과 프로젝트가 포함된 리포지토리의 이름으로 바꿔야 합니다.{ % ifversion ghes %}

  인스턴스에 하위 도메인 격리가 사용 설정된 경우:{% endif %}
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

## 패키지 설치

{% data variables.product.prodname_registry %}에서 Apache Maven 패키지를 설치하려면 패키지를 종속성으로 포함하도록 *pom.xml* 파일을 편집합니다. 둘 이상의 리포지토리에서 패키지를 설치하려면 각 리포지토리에 대한 `repository` 태그를 추가합니다. 프로젝트에서 *pom.xml* 파일을 사용하는 방법에 대한 자세한 내용은 Apache Maven 설명서의 “[POM 소개](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)”를 참조하세요.

{% data reusables.package_registry.authenticate-step %}
2. 패키지 종속성을 프로젝트 *pom.xml* 파일의 `dependencies` 요소에 패키지 종속성을 추가하고 `com.example:test`를 패키지로 변경합니다.

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
3. 패키지를 설치합니다.

  ```shell
  $ mvn install
  ```

## 추가 참고 자료

- “[Gradle 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry)”
- “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”
