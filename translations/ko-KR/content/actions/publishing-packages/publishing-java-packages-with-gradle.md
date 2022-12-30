---
title: Gradle을 사용하여 Java 패키지 게시
shortTitle: Publish Java packages with Gradle
intro: Gradle을 사용하여 CI(연속 통합) 워크플로의 일부로 Java 패키지를 레지스트리에 게시할 수 있습니다.
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
ms.openlocfilehash: 4627f561ea1a78fff800a7a5d656947e481a2999
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009476'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

{% data reusables.actions.publishing-java-packages-intro %}

## 필수 조건

워크플로 파일 및 구성 옵션을 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”를 참조하세요.

Gradle을 사용하여 Java 프로젝트에 대한 CI 워크플로를 만드는 방법에 대한 자세한 내용은 “[Gradle을 사용하여 Java 빌드 및 테스트](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)”를 참조하세요.

다음과 관련된 기본 지식도 유용할 수 있습니다.

- “[npm 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)”
- “[환경 변수](/actions/reference/environment-variables)”
- “[암호화된 비밀](/actions/reference/encrypted-secrets)”
- “[워크플로의 인증](/actions/reference/authentication-in-a-workflow)”

## 패키지 구성 정보

_build.gradle_ 파일 `MavenPublication` 섹션의 `groupId` 및 `artifactId` 필드는 레지스트리에서 패키지를 특정 레지스트리에 연결하는 데 사용하는 패키지의 고유 식별자를 만듭니다.  Maven _pom.xml_ 파일의 `groupId` 및 `artifactId` 필드와 유사합니다.  자세한 내용은 Gradle 설명서의 “[Maven 게시 플러그 인](https://docs.gradle.org/current/userguide/publishing_maven.html)”을 참조하세요.

_build.gradle_ 파일에는 Gradle에서 패키지를 게시할 배포 관리 리포지토리에 대한 구성도 포함되어 있습니다. 각 리포지토리에는 이름, 배포 URL, 인증을 위한 자격 증명이 있어야 합니다.

## Maven 중앙 리포지토리에 패키지 게시

새 릴리스를 만들 때마다 워크플로를 트리거하여 패키지를 게시할 수 있습니다. 아래 예제의 워크플로는 `release` 이벤트가 `created` 형식으로 트리거될 때 실행됩니다. 이 워크플로는 CI 테스트를 통과할 경우 Maven 중앙 리포지토리에 패키지를 게시합니다. `release` 이벤트에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows#release)”를 참조하세요.

패키지 리포지토리를 가리키는 _build.gradle_ 파일의 게시 블록에서 새 Maven 리포지토리를 정의할 수 있습니다.  예를 들어 OSSRH 호스팅 프로젝트를 통해 Maven 중앙 리포지토리에 배포하는 경우 _build.gradle_ 에서 이름이 `"OSSRH"`인 리포지토리를 지정할 수 있습니다.

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

이 구성을 사용하면 `gradle publish` 명령을 실행하여 Maven 중앙 리포지토리에 패키지를 게시하는 워크플로를 만들 수 있습니다. 배포 단계에서 Maven 리포지토리에 인증하는 데 사용하는 사용자 이름과 암호 또는 토큰의 환경 변수를 설정해야 합니다. 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

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
1. `publish` 인수와 함께 [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) 작업을 실행하여 `OSSRH` Maven 리포지토리에 게시합니다. `MAVEN_USERNAME` 환경 변수는 `OSSRH_USERNAME` 비밀의 내용으로 설정되고, `MAVEN_PASSWORD` 환경 변수는 `OSSRH_TOKEN` 비밀의 내용으로 설정됩니다.

   워크플로에서 비밀을 사용하는 방법에 대한 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

## {% data variables.product.prodname_registry %}에 패키지 게시

새 릴리스를 만들 때마다 워크플로를 트리거하여 패키지를 게시할 수 있습니다. 아래 예제의 워크플로는 `release` 이벤트가 `created` 형식으로 트리거될 때 실행됩니다. 이 워크플로는 CI 테스트를 통과할 경우 {% data variables.product.prodname_registry %}에 패키지를 게시합니다. `release` 이벤트에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows#release)”를 참조하세요.

{% data variables.product.prodname_registry %}를 가리키는 _build.gradle_ 의 게시 블록에서 새 Maven 리포지토리를 정의할 수 있습니다.  해당 리포지토리 구성에서 CI 워크플로 실행에 설정된 환경 변수를 활용할 수도 있습니다.  `GITHUB_ACTOR` 환경 변수를 사용자 이름으로 사용할 수 있으며, `GITHUB_TOKEN` 비밀로 `GITHUB_TOKEN` 환경 변수를 설정할 수 있습니다.

{% data reusables.actions.github-token-permissions %}

예를 들어 조직 이름이 “octocat”이고 리포지토리 이름이 “hello-world”인 경우 _build.gradle_ 의 {% data variables.product.prodname_registry %} 구성은 아래 예제와 유사합니다.

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

이 구성을 사용하면 `gradle publish` 명령을 실행하여 {% data variables.product.prodname_registry %}에 패키지를 게시하는 워크플로를 만들 수 있습니다.

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
1. `publish` 인수와 함께 [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) 작업을 실행하여 {% data variables.product.prodname_registry %}에 게시합니다. `GITHUB_TOKEN` 환경 변수는 `GITHUB_TOKEN` 비밀의 내용으로 설정됩니다. `permissions` 키는 `GITHUB_TOKEN` 비밀이 허용하는 액세스를 지정합니다.

   워크플로에서 비밀을 사용하는 방법에 대한 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

## Maven 중앙 리포지토리 및 {% data variables.product.prodname_registry %}에 패키지 게시

_build.gradle_ 파일에서 각각 구성하여 Maven 중앙 리포지토리와 {% data variables.product.prodname_registry %}에 모두 패키지를 게시할 수 있습니다.

_build.gradle_ 파일에 {% data variables.product.prodname_dotcom %} 리포지토리 및 Maven 중앙 리포지토리 공급자의 리포지토리가 둘 다 포함되어 있는지 확인합니다.

예를 들어 OSSRH 호스팅 프로젝트를 통해 중앙 리포지토리에 배포하는 경우 `name`이 `OSSRH`로 설정된 배포 관리 리포지토리에서 지정하는 것이 좋습니다. {% data variables.product.prodname_registry %}에 배포하는 경우 `name`이 `GitHubPackages`로 설정된 배포 관리 리포지 토리에서 지정하는 것이 좋습니다.

조직 이름이 “octocat”이고 리포지토리 이름이 “hello-world”인 경우 _build.gradle_ 의 구성은 아래 예제와 유사합니다.

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

이 구성을 사용하면 `gradle publish` 명령을 실행하여 Maven 중앙 리포지토리와 {% data variables.product.prodname_registry %}에 모두 패키지를 게시하는 워크플로를 만들 수 있습니다.

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
1. `publish` 인수와 함께 [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) 작업을 실행하여 `OSSRH` Maven 중앙 리포지토리와 {% data variables.product.prodname_registry %}에 게시합니다. `MAVEN_USERNAME` 환경 변수는 `OSSRH_USERNAME` 비밀의 내용으로 설정되고, `MAVEN_PASSWORD` 환경 변수는 `OSSRH_TOKEN` 비밀의 내용으로 설정됩니다. `GITHUB_TOKEN` 환경 변수는 `GITHUB_TOKEN` 비밀의 내용으로 설정됩니다. `permissions` 키는 `GITHUB_TOKEN` 비밀이 허용하는 액세스를 지정합니다.

   워크플로에서 비밀을 사용하는 방법에 대한 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.
