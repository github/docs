---
title: Maven을 사용하여 Java 빌드 및 테스트
intro: GitHub Actions CI(연속 통합) 워크플로를 만들어 Maven을 사용하여 Java 프로젝트를 빌드하고 테스트할 수 있습니다.
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
shortTitle: Build & test Java with Maven
ms.openlocfilehash: 59d8961a7fdd1d8b84a05b8762bb09be3d2ab01c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179809'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 Maven 소프트웨어 프로젝트 관리 도구를 사용하여 Java 프로젝트에 대한 CI(연속 통합)를 수행하는 워크플로를 만드는 방법을 보여 줍니다. 만든 워크플로를 사용하면 끌어오기 요청에 커밋할 때 기본 분기에 대한 빌드 또는 테스트 오류가 발생하는 경우를 확인할 수 있습니다. 이 방법은 코드가 항상 정상인지 확인하는 데 도움이 될 수 있습니다. CI 워크플로를 {% ifversion actions-caching %}캐시 파일로 확장하고{% endif %} 워크플로 실행에서 아티팩트를 업로드할 수 있습니다.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} 호스트 실행기에는 소프트웨어가 사전 설치된 도구 캐시가 있습니다. 여기에는 JDK(Java Development Kit) 및 Maven이 포함되어 있습니다. 소프트웨어 및 사전 설치된 JDK 및 Maven 버전 목록은 “[{% data variables.product.prodname_dotcom %} 호스트 실행기 사양](/actions/reference/specifications-for-github-hosted-runners/#supported-software)”을 참조하세요.
{% endif %}

## 필수 조건

YAML 및 {% data variables.product.prodname_actions %}의 구문에 대해 잘 알고 있어야 합니다. 자세한 내용은 다음을 참조하세요.
- “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)”
- “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”

Java 및 Maven 프레임워크를 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 Maven 설명서의 [Maven 시작 가이드](http://maven.apache.org/guides/getting-started/index.html)를 참조하세요.

{% data reusables.actions.enterprise-setup-prereq %}

## Maven 시작 워크플로 사용

{% data variables.product.prodname_dotcom %}는 대부분의 Maven 기반 Java 프로젝트에서 작동하는 Maven 시작 워크플로를 제공합니다. 자세한 내용은 [Maven 시작 워크플로](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml)를 참조하세요.

빠르게 시작하려면 새 워크플로를 만들 때 사전 구성된 Maven 시작 워크플로를 선택할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 빠른 시작](/actions/quickstart)”을 참조하세요.

리포지토리의 `.github/workflows` 디렉터리에 새 파일을 만들어 이 워크플로를 수동으로 추가할 수도 있습니다.

```yaml{:copy}
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up JDK 11
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots package
```

워크플로는 다음 단계를 수행합니다.

1. `checkout` 단계는 실행기에서 리포지토리 사본을 다운로드합니다.
2. `setup-java` 단계는 Adoptium에서 Java 11 JDK를 구성합니다.
3. “Maven을 사용하여 빌드” 단계는 비대화형 모드에서 Maven `package` 대상을 실행하여 코드 빌드, 테스트 통과 및 패키지를 만들 수 있도록 합니다.

기본 시작 워크플로는 빌드 및 테스트 워크플로를 만들 때 매우 유용한 시작점이며 프로젝트의 요구 사항에 맞게 시작 워크플로를 사용자 지정할 수 있습니다.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## 코드 빌드 및 테스트

코드를 빌드하고 테스트하기 위해 로컬에서 사용하는 것과 동일한 명령을 사용할 수 있습니다.

시작 워크플로는 기본값으로 `package` 대상을 실행합니다. 기본 Maven 구성에서 이 명령은 종속성을 다운로드하고, 클래스를 빌드하고, 테스트를 실행하고, 클래스를 배포 가능한 형식(예: JAR 파일)으로 패키지합니다.

다른 명령을 사용하여 프로젝트를 빌드하거나 다른 대상을 사용하려는 경우 이를 지정할 수 있습니다. 예를 들어 _pom-ci.xml_ 파일에 구성된 `verify` 대상을 실행할 수 있습니다.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Maven verify phase
    run: mvn --batch-mode --update-snapshots verify
```

{% ifversion actions-caching %}

## 종속성 캐싱

종속성을 캐시하여 워크플로 실행 속도를 향상할 수 있습니다. 성공적으로 실행되면 로컬 Maven 리포지토리가 캐시에 저장됩니다. 이후 워크플로 실행에서는 캐시가 복원되어 원격 Maven 리포지토리에서 종속성을 다운로드할 필요가 없습니다. [`setup-java` 작업](https://github.com/marketplace/actions/setup-java-jdk)을 사용하여 종속성을 캐시하거나 사용자 지정 및 고급 구성을 위해 [`cache` 작업](https://github.com/actions/cache)을 사용할 수 있습니다.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      cache: maven
  - name: Build with Maven
    run: mvn --batch-mode --update-snapshots verify
```

이 워크플로는 실행기 홈 디렉터리의 `.m2` 디렉터리에 있는 로컬 Maven 리포지토리의 콘텐츠를 저장합니다. 캐시 키는 _pom.xml_ 해시된 콘텐츠이므로 _pom.xml_ 을 변경하면 캐시가 유효하지 않게 됩니다.

{% endif %}

## 워크플로 데이터를 아티팩트로 패키지

빌드에 성공하고 테스트를 통과한 후에는 그에 따른 Java 패키지를 빌드 아티팩트로 업로드할 수 있습니다. 그러면 워크플로 실행의 일부로 빌드된 패키지를 저장하고 다운로드할 수 있습니다. 아티팩트는 병합되기 전에 로컬 환경에서 끌어오기 요청을 테스트하고 디버그하는 데 도움이 될 수 있습니다. 자세한 내용은 “[아티팩트를 사용하여 워크플로 데이터 유지](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”를 참조하세요.

Maven은 일반적으로 `target` 디렉터리에 JAR, EAR 또는 WAR과 같은 출력 파일을 생성합니다. 이를 아티팩트로 업로드하려면 업로드할 아티팩트가 포함된 새 디렉터리에 복사하면 됩니다. `staging`터 그런 다음 `upload-artifact` 작업을 사용하여 해당 디렉터리의 콘텐츠를 업로드할 수 있습니다.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: staging
```
