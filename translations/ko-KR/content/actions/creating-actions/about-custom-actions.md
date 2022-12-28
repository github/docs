---
title: 사용자 지정 작업 정보
intro: '작업은 작업(job)을 만들고 워크플로를 사용자 지정하는 데 사용할 수 있는 개별 작업(task)입니다. 사용자 고유의 작업을 만들거나 {% data variables.product.prodname_dotcom %} 커뮤니티에서 공유하는 작업을 사용 및 사용자 지정할 수 있습니다.'
redirect_from:
  - /articles/about-actions
  - /github/automating-your-workflow-with-github-actions/about-actions
  - /actions/automating-your-workflow-with-github-actions/about-actions
  - /actions/building-actions/about-actions
  - /actions/creating-actions/about-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Action development
  - Fundamentals
ms.openlocfilehash: 1e81bea551ceff1980b0bbe96202f60db0d0e7f2
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191950'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 사용자 지정 작업 정보

{% data variables.product.prodname_dotcom %}의 API 및 공개적으로 사용 가능한 타사 API와의 통합을 포함하여 원하는 방식으로 리포지토리와 상호 작용하는 사용자 지정 코드를 써서 작업을 만들 수 있습니다. 예를 들어 작업은 npm 모듈을 게시할 수 있고 긴급한 이슈가 발생할 때 SMS 알림을 보낼 수 있으며 프로덕션 준비 코드를 배포할 수 있습니다.

{% ifversion fpt or ghec %} 워크플로에서 사용할 작업을 직접 쓰거나 빌드한 작업을 {% data variables.product.prodname_dotcom %} 커뮤니티와 공유할 수 있습니다. 빌드한 작업을 모든 사람과 공유하려면 리포지토리가 퍼블릭이어야 합니다. {% ifversion internal-actions %}엔터프라이즈 내에서만 작업을 공유하려면 리포지토리가 내부여야 합니다.{% endif %} {% endif %}

작업은 머신 또는 Docker 컨테이너에서 직접 실행할 수 있습니다. 작업의 입력, 출력, 환경 변수를 정의할 수 있습니다.

## 동작 유형

Docker 컨테이너, JavaScript 및 복합 작업을 빌드할 수 있습니다. 작업에는 작업에 대한 입력, 출력, 기본 진입점을 정의하는 메타데이터 파일이 필요합니다. 메타데이터 파일 이름은 `action.yml` 또는 `action.yaml`이어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 메타데이터 구문](/articles/metadata-syntax-for-github-actions)”을 참조하세요.

| 형식 | 운영 체제 |
| ---- | ------------------- |
| Docker 컨테이너 | Linux |
| JavaScript | Linux, macOS, Windows |
| 복합 작업 | Linux, macOS, Windows |

### Docker 컨테이너 작업

Docker 컨테이너는 {% data variables.product.prodname_actions %} 코드로 환경을 패키지합니다. 이렇게 하면 작업 소비자가 도구 또는 종속성에 대해 걱정할 필요가 없으므로 더 일관되고 안정적인 작업 단위가 만들어집니다.

Docker 컨테이너를 사용하면 운영 체제, 종속성, 도구, 코드의 특정 버전을 사용할 수 있습니다. 특정 환경 구성에서 실행해야 하는 작업의 경우 운영 체제 및 도구를 사용자 지정할 수 있으므로 Docker가 이상적인 옵션입니다. 컨테이너를 빌드하고 검색하는 데 드는 대기 시간으로 인해 Docker 컨테이너 작업이 JavaScript 작업보다 느립니다.

Docker 컨테이너 작업은 Linux 운영 체제를 사용하는 실행기에서만 실행할 수 있습니다. {% data reusables.actions.self-hosted-runner-reqs-docker %}

### JavaScript 작업

JavaScript 작업은 실행기 머신에서 직접 실행할 수 있으며 코드를 실행하는 데 사용되는 환경에서 작업 코드를 분리할 수 있습니다. JavaScript 작업을 사용하면 작업 코드가 간소화되고 Docker 컨테이너 작업보다 빠르게 실행됩니다.

{% data reusables.actions.pure-javascript %}

Node.js 프로젝트를 개발하는 경우 {% data variables.product.prodname_actions %} 도구 키트는 개발 속도를 높이기 위해 프로젝트에서 사용할 수 있는 패키지를 제공합니다. 자세한 내용은 [actions/toolkit](https://github.com/actions/toolkit) 리포지토리를 참조하세요.

### 복합 작업

복합 작업을 사용하면 하나의 작업 내에서 여러 워크플로 단계를 결합할 수 있습니다. 예를 들어 이 기능을 사용하여 여러 실행 명령을 작업으로 함께 묶은 다음 해당 작업을 사용하여 함께 묶인 명령을 단일 단계로 실행하는 워크플로를 사용할 수 있습니다. 예제를 보려면 “[복합 작업 만들기](/actions/creating-actions/creating-a-composite-action)”를 확인하세요.

## 작업 위치 선택

다른 사람이 사용할 작업을 개발하는 경우 작업을 다른 애플리케이션 코드와 함께 묶는 대신 자체 리포지토리에 유지하는 것이 좋습니다. 이를 통해 다른 소프트웨어처럼 작업을 버전 관리하고, 추적하고, 릴리스할 수 있습니다.

{% ifversion fpt or ghec %} 작업을 자체 리포지토리에 저장하면 {% data variables.product.prodname_dotcom %} 커뮤니티에서 작업을 더 쉽게 검색하고, 개발자가 문제를 수정하고 작업을 확장할 수 있는 코드 베이스의 범위를 좁히며, 작업의 버전 관리와 다른 애플리케이션 코드의 버전 관리가 분리됩니다.
{% endif %}

{% data reusables.actions.internal-actions-summary %}

{% ifversion fpt or ghec %}다른 사람이 사용하도록 할 계획이 없는 작업을 빌드하는 경우 리포지토리의 모든 위치에 작업 파일을 저장할 수 있습니다.{% else %}{% endif %} 단일 리포지토리에서 작업, 워크플로, 애플리케이션 코드를 결합하려는 경우 작업을 `.github` 디렉터리에 저장하는 것이 좋습니다. 예를 들어 `.github/actions/action-a` 및 `.github/actions/action-b`를 지정합니다.

## {% data variables.product.prodname_ghe_server %}와의 호환성

작업이 {% data variables.product.prodname_ghe_server %}와 호환되도록 하려면 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API URL에 대해 하드 코드된 참조를 사용하지 않도록 해야 합니다. 대신 환경 변수를 사용하여 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API를 참조해야 합니다.

- REST API의 경우 `GITHUB_API_URL` 환경 변수를 사용합니다.
- GraphQL의 경우 `GITHUB_GRAPHQL_URL` 환경 변수를 사용합니다.

자세한 내용은 “[기본 환경 변수](/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables)”를 참조하세요.

## 작업에 릴리스 관리 사용

이 섹션에서는 릴리스 관리를 사용하여 예측 가능한 방식으로 작업에 대한 업데이트를 배포하는 방법을 설명합니다.

### 릴리스 관리 모범 사례

다른 사람이 사용할 작업을 개발하는 경우 릴리스 관리를 사용하여 업데이트를 배포하는 방법을 제어하는 것이 좋습니다. 사용자는 작업의 패치 버전에 필요한 중요 수정 사항 및 보안 패치가 포함되어 있으면서도 기존 워크플로와 계속 호환될 것으로 기대할 수 있습니다. 변경 내용이 호환성에 영향을 미칠 때마다 새 주 버전을 릴리스하는 것이 좋습니다.

이 릴리스 관리 접근 방식에서는 사용자가 작업의 기본 분기를 참조해서는 안 됩니다. 최신 코드를 포함할 가능성이 크고 결과적으로 불안정할 수 있기 때문입니다. 대신, 사용자가 작업을 사용할 때 주 버전을 지정하고 문제가 발생하는 경우에만 더 구체적인 버전으로 안내하도록 하는 것이 좋습니다.

특정 작업 버전을 사용하기 위해 사용자는 태그, 커밋의 SHA 또는 릴리스에 대해 명명된 분기를 대상으로 하도록 {% data variables.product.prodname_actions %} 워크플로를 구성할 수 있습니다.

### 릴리스 관리에 태그 사용

작업 릴리스 관리에 태그를 사용하는 것이 좋습니다. 이 방법을 사용하면 사용자가 주 버전과 부 버전을 쉽게 구분할 수 있습니다.

- 릴리스 태그(예: `v1.0.2`)를 만들기 전에 릴리스 분기(예: `release/v1`)에서 릴리스를 만들고 유효성을 검사합니다.
- 의미 체계 버전 관리를 사용하여 릴리스를 만듭니다. 자세한 내용은 “[릴리스 만들기](/articles/creating-releases)”를 참조하세요.
- 주 버전 태그(예: `v1`, `v2`)를 이동하여 현재 릴리스의 Git 참조를 가리킵니다. 자세한 내용은 “[Git 기본 사항 - 태그 지정](https://git-scm.com/book/en/v2/Git-Basics-Tagging)”을 참조하세요.
- 기존 워크플로를 중단하는 변경 내용에 대해 새 주 버전 태그(`v2`)를 도입합니다. 예를 들어 작업의 입력을 변경하는 것은 호환성이 손상되는 변경입니다.
- 주 버전은 처음에 상태를 나타내기 위해 `beta` 태그(예: `v2-beta`)를 사용하여 릴리스될 수 있습니다. `-beta` 태그는 준비가 되면 제거할 수 있습니다.

이 예제에서는 사용자가 주 릴리스 태그를 참조하는 방법을 보여 줍니다.

```yaml
steps:
    - uses: actions/javascript-action@v1
```

이 예제에서는 사용자가 특정 패치 릴리스 태그를 참조하는 방법을 보여 줍니다.

```yaml
steps:
    - uses: actions/javascript-action@v1.0.1
```

### 릴리스 관리에 분기 사용

릴리스 관리에 분기 이름을 사용하려는 경우 이 예제에서는 명명된 분기를 참조하는 방법을 보여 줍니다.

```yaml
steps:
    - uses: actions/javascript-action@v1-beta
```

### 릴리스 관리에 커밋의 SHA 사용

각 Git 커밋은 고유하고 변경할 수 없는 계산된 SHA 값을 수신합니다. 이 방법은 삭제되거나 이동할 수 있는 태그를 지정하는 것보다 더 안정적일 수 있으므로 작업의 사용자는 커밋의 SHA 값에 의존하는 것을 선호할 수 있습니다. 그러나 이는 사용자가 작업에 대한 추가 업데이트를 받지 못한다는 것을 의미합니다. 약식 값이 아닌 커밋의 전체 SHA 값을 사용해야 합니다.

```yaml
steps:
    - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

## 작업에 대한 추가 정보 파일 만들기

사용자가 작업을 사용하는 방법을 배울 수 있도록 추가 정보 파일을 만드는 것이 좋습니다. 이 정보를 `README.md`에 포함할 수 있습니다.

- 작업이 수행하는 작업에 대한 자세한 설명
- 필수 입력 및 출력 인수
- 선택적 입력 및 출력 인수
- 작업에서 사용하는 비밀
- 작업에서 사용하는 환경 변수
- 워크플로에서 작업을 사용하는 방법의 예제

## {% data variables.product.prodname_actions %}를 {% data variables.product.prodname_github_apps %}과 비교

{% data variables.product.prodname_marketplace %}는 워크플로를 개선하는 도구를 제공합니다. 각 도구의 차이점과 이점을 이해하면 작업에 가장 적합한 도구를 선택할 수 있습니다. 앱 빌드에 대한 자세한 내용은 “[앱 정보](/apps/about-apps/)”를 참조하세요.

### GitHub Actions 및 GitHub 앱의 장점

{% data variables.product.prodname_actions %} 및 {% data variables.product.prodname_github_apps %}은 모두 자동화 및 워크플로 도구를 빌드하는 방법을 제공하지만 각기 다른 방식으로 유용한 장점이 있습니다.

{% data variables.product.prodname_github_apps %}:
* 지속적으로 실행하고 이벤트에 신속하게 대응할 수 있습니다.
* 영구 데이터가 필요할 때 제대로 작동합니다.
* 시간이 오래 걸리지 않는 API 요청에 가장 잘 작동합니다.
* 제공하는 서버 또는 컴퓨팅 인프라에서 실행합니다.

{% data variables.product.prodname_actions %}:
* 지속적인 통합 및 배포를 수행할 수 있는 자동화를 제공합니다.
* 실행기 머신 또는 Docker 컨테이너에서 직접 실행할 수 있습니다.
* 배포 및 게시 도구, 코드 포맷터, 명령줄 도구를 사용하여 코드에 액세스할 수 있도록 리포지토리의 복제본에 대한 액세스를 포함할 수 있습니다.
* 코드를 배포하거나 앱을 제공할 필요가 없습니다.
* 작업을 사용하는 사용자의 자격 증명을 저장하지 않고도 작업이 타사 서비스와 상호 작용할 수 있도록 비밀을 만들고 사용하는 간단한 인터페이스가 있습니다.

## 추가 참고 자료

- “[{% data variables.product.prodname_actions %} 개발 도구](/articles/development-tools-for-github-actions)”
