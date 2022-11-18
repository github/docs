---
title: Maven을 사용하여 Java 패키지 게시
shortTitle: Publish Java packages with Maven
intro: Maven을 사용하여 CI(연속 통합) 워크플로의 일부로 Java 패키지를 레지스트리에 게시할 수 있습니다.
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
ms.openlocfilehash: 550a9f52a8471ccd939e98675544f0991bae5f34
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009539'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

{% data reusables.actions.publishing-java-packages-intro %}

## 필수 조건

워크플로 파일 및 구성 옵션을 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”를 참조하세요.

Maven을 사용하여 Java 프로젝트에 대한 CI 워크플로를 만드는 방법에 대한 자세한 내용은 “[을 사용하여 Java 빌드 및 테스트](/actions/language-and-framework-guides/building-and-testing-java-with-maven)”를 참조하세요.

또한 다음 사항을 기본적으로 이해하는 것이 유용할 수 있습니다.

- “[npm 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)”
- “[환경 변수](/actions/reference/environment-variables)”
- “[암호화된 비밀](/actions/reference/encrypted-secrets)”
- “[워크플로의 인증](/actions/reference/authentication-in-a-workflow)”

## 패키지 구성 정보

_pom.xml_ 파일의 `groupId` 및 `artifactId` 필드는 레지스트리에서 패키지를 레지스트리에 연결하는 데 사용하는 패키지의 고유 식별자를 만듭니다.  자세한 내용은 Apache Maven 문서에서 [중앙 리포지토리에 아티팩트 업로드 가이드](http://maven.apache.org/repository/guide-central-repository-upload.html)를 참조하세요.

_pom.xml_ 파일에는 Maven에서 패키지를 배포할 배포 관리 리포지토리에 대한 구성도 포함되어 있습니다. 각 리포지토리에는 이름과 배포 URL이 있어야 합니다. 이러한 리포지토리에 대한 인증은 Maven을 실행하는 사용자의 홈 디렉터리에 있는 _.m2/settings.xml_ 파일에서 구성할 수 있습니다.

이 `setup-java` 작업을 사용하여 해당 리포지토리에 대한 인증뿐만 아니라 배포 리포지토리를 구성할 수 있습니다. 자세한 내용은 [`setup-java`](https://github.com/actions/setup-java)를 참조하세요.

## Maven 중앙 리포지토리에 패키지 게시

새 릴리스를 만들 때마다 워크플로를 트리거하여 패키지를 게시할 수 있습니다. 아래 예제의 워크플로는 `release` 이벤트가 `created` 형식으로 트리거될 때 실행됩니다. 이 워크플로는 CI 테스트를 통과할 경우 Maven 중앙 리포지토리에 패키지를 게시합니다. `release` 이벤트에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows#release)”를 참조하세요.

이 워크플로에서는 `setup-java` 작업을 사용할 수 있습니다. 이 작업은 지정된 버전의 JDK를 `PATH`에 설치하지만 패키지 게시를 위한 Maven _settings.xml_ 도 구성합니다. 기본적으로 설정 파일은 {% data variables.product.prodname_registry %}에 대해 구성되지만 Maven 중앙 리포지토리와 같은 다른 패키지 레지스트리에 배포하도록 구성할 수도 있습니다. 이미 _pom.xml_ 에 배포 관리 리포지토리가 구성된 경우 `setup-java` 작업 호출 중에 해당 `id`를 지정할 수 있습니다.

예를 들어 OSSRH 호스팅 프로젝트를 통해 Maven 중앙 리포지토리에 배포하는 경우 _pom.xml_ 은 `id`가 `ossrh`인 배포 관리 리포지토리를 지정할 수 있습니다.

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

이 구성을 사용하면 `setup-java` 작업에 리포지토리 관리 `id`를 지정하여 Maven 중앙 리포지토리에 패키지를 게시하는 워크플로를 만들 수 있습니다. 또한 리포지토리에 인증하기 위해 사용자 이름 및 암호를 포함하는 환경 변수를 제공해야 합니다.

배포 단계에서는 환경 변수를 리포지토리에 인증하는 사용자 이름 및 인증할 암호 또는 토큰으로 구성한 비밀로 설정해야 합니다.  자세한 내용은 “[암호화된 비밀 만들기 및 사용](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

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

워크플로는 다음 단계를 수행합니다.

1. 프로젝트 리포지토리의 복사본을 체크 아웃합니다.
1. Java JDK를 설정하고 `MAVEN_USERNAME` 및 `MAVEN_PASSWORD` 환경 변수를 사용하여 `ossrh` 리포지토리에 대한 인증을 추가하도록 Maven _settings.xml_ 파일도 구성합니다.
1. {% data reusables.actions.publish-to-maven-workflow-step %}

   워크플로에서 비밀을 사용하는 방법에 대한 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

## {% data variables.product.prodname_registry %}에 패키지 게시

새 릴리스를 만들 때마다 워크플로를 트리거하여 패키지를 게시할 수 있습니다. 아래 예제의 워크플로는 `release` 이벤트가 `created` 형식으로 트리거될 때 실행됩니다. 이 워크플로는 CI 테스트를 통과할 경우 {% data variables.product.prodname_registry %}에 패키지를 게시합니다. `release` 이벤트에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows#release)”를 참조하세요.

이 워크플로에서는 `setup-java` 작업을 사용할 수 있습니다. 이 작업은 지정된 버전의 JDK를 `PATH`에 설치하고 패키지를 {% data variables.product.prodname_registry %}에 게시하기 위한 Maven _settings.xml_ 도 설정합니다. 생성된 _settings.xml_ 은 `GITHUB_ACTOR` 환경 변수를 사용자 이름으로 사용하고 `GITHUB_TOKEN` 환경 변수를 암호로 사용하여 `id`가 `github`인 서버에 대한 인증을 정의합니다. `GITHUB_TOKEN` 환경 변수에는 특수 `GITHUB_TOKEN` 비밀 값이 할당됩니다.

{% data reusables.actions.github-token-permissions %}

Maven 기반 프로젝트의 경우 {% data variables.product.prodname_registry %} 엔드포인트를 가리키는 `github`의 `id`로 _pom.xml_ 파일에 배포 리포지토리를 만들면 이러한 설정을 사용할 수 있습니다.

예를 들어 조직 이름이 “octocat”이고 리포지토리 이름이 “hello-world”인 경우 _pom.xml_ 의 {% data variables.product.prodname_registry %} 구성은 아래 예제와 유사합니다.

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

이 구성을 사용하면 자동으로 생성된 _settings.xml_ 을 사용하여 {% data variables.product.prodname_registry %}에 패키지를 게시하는 워크플로를 만들 수 있습니다.

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

워크플로는 다음 단계를 수행합니다.

1. 프로젝트 리포지토리의 복사본을 체크 아웃합니다.
1. Java JDK를 설정하고 Maven _settings.xml_ 파일을 자동으로 구성하여 `GITHUB_TOKEN` 환경 변수를 사용하도록 `github` Maven 리포지토리에 대한 인증을 추가합니다.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   워크플로에서 비밀을 사용하는 방법에 대한 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

## Maven 중앙 리포지토리 및 {% data variables.product.prodname_registry %}에 패키지 게시

각 레지스트리에 대해 `setup-java` 작업을 사용하여 Maven 중앙 리포지토리 및 {% data variables.product.prodname_registry %} 모두에 패키지를 게시할 수 있습니다.

_pom.xml_ 파일에 {% data variables.product.prodname_dotcom %} 리포지토리 및 Maven 중앙 리포지토리 공급자 모두에 대한 배포 관리 리포지토리가 포함되어 있는지 확인합니다. 예를 들어 OSSRH 호스팅 프로젝트를 통해 중앙 리포지토리에 배포하는 경우 `id`을 `ossrh`로 설정하여 배포 관리 리포지토리에 지정하고 {% data variables.product.prodname_registry %}는 `id`가 `github`로 설정된 배포 관리 리포지토리에 있습니다.

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

이 워크플로는 `setup-java` 작업을 두 번 호출합니다.  `setup-java` 작업이 실행될 때마다 패키지 게시를 위해 Maven _settings.xml_ 파일을 덮어씁니다.  리포지토리 인증을 위해 _settings.xml_ 파일은 리포지토리 관리 리포지토리 `id`, 사용자 이름, 암호를 참조합니다.

워크플로는 다음 단계를 수행합니다.

1. 프로젝트 리포지토리의 복사본을 체크 아웃합니다.
1. 처음으로 `setup-java`를 호출합니다. 이렇게 하면 `ossrh` 리포지토리에 대한 Maven _settings.xml_ 파일이 구성되고 인증 옵션이 다음 단계에서 정의되는 환경 변수로 설정됩니다.
1. {% data reusables.actions.publish-to-maven-workflow-step %}
1. 두 번째로 `setup-java`를 호출합니다. 그러면 {% data variables.product.prodname_registry %}에 대한 Maven _settings.xml_ 파일이 자동으로 구성됩니다.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   워크플로에서 비밀을 사용하는 방법에 대한 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.
