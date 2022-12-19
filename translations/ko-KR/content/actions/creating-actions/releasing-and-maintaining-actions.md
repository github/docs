---
title: 작업 릴리스 및 유지 관리
shortTitle: Release and maintain actions
intro: 자동화 및 오픈 소스 모범 사례를 활용하여 작업을 릴리스하고 유지 관리할 수 있습니다.
type: tutorial
topics:
  - Action development
  - Actions
  - Community
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
ms.openlocfilehash: 49e1da781c5e223e229f097dc04b8bd49bbb64ba
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009452'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

작업을 만든 후에는 커뮤니티 기여와 함께 작업하는 동안 계속해서 새 기능을 릴리스하고 싶을 것입니다. 이 자습서에서는 오픈 소스 작업을 릴리스하고 유지 관리하기 위해 수행할 수 있는 예제 프로세스에 대해 설명합니다. 예:

* 연속 통합, 종속성 업데이트, 릴리스 관리, 작업 자동화를 위해 {% data variables.product.prodname_actions %}를 활용합니다.
* 자동화된 테스트 및 빌드 배지를 통해 자신감을 줍니다.
* 더 광범위한 워크플로의 일부로 작업을 사용하는 방법을 나타냅니다.
* 어떤 유형의 커뮤니티 기여를 환영하는지 알려줍니다. (예: 문제, 끌어오기 요청 또는 취약성 보고서.)

이 프로세스가 적용된 예제는 [github-developer/javascript-action](https://github.com/github-developer/javascript-action)을 참조하세요.

## 작업 개발 및 릴리스

이 섹션에서는 작업을 개발하고 릴리스하는 예제 프로세스에 대해 설명하고 {% data variables.product.prodname_actions %}를 사용하여 프로세스를 자동화하는 방법을 보여 줍니다.

### JavaScript 작업 정보

JavaScript 작업은 메타데이터가 있는 Node.js 리포지토리입니다. 그러나 JavaScript 작업에는 기존 Node.js 프로젝트보다 추가된 속성이 있습니다.

* 종속 패키지는 일반적으로 컴파일되고 축소된 형식으로 코드와 함께 커밋됩니다. 이는 자동화된 빌드와 안전한 커뮤니티 기여가 중요하다는 것을 의미합니다.

{% ifversion fpt or ghec %}

* 태그가 지정된 릴리스는 {% data variables.product.prodname_marketplace %}에 직접 게시하고 {% data variables.product.prodname_dotcom %}의 워크플로에서 사용할 수 있습니다.

{% endif %}

* 많은 작업이 {% data variables.product.prodname_dotcom %} API 및 타사 API를 사용하므로 강력한 엔드투엔드 테스트를 권장합니다.

### {% data variables.product.prodname_actions %} 워크플로 설정

다음 섹션에서 개발자 프로세스를 지원하려면 리포지토리에 두 개의 {% data variables.product.prodname_actions %} 작업 워크플로를 추가합니다.

1. 커밋이 기능 분기 또는 `main`으로 푸시될 때 또는 끌어오기 요청이 만들어질 때 트리거되는 워크플로를 추가합니다. 단위 및 통합 테스트를 실행하도록 워크플로를 구성합니다. 예제는 [이 워크플로](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/test.yml)를 참조하세요.
2. 릴리스가 게시되거나 편집될 때 트리거되는 워크플로를 추가합니다. 의미 체계 태그가 제자리에 있도록 워크플로를 구성합니다. [JasonEtco/build-and-tag-action](https://github.com/JasonEtco/build-and-tag-action)과 같은 작업을 사용하여 JavaScript 및 메타데이터 파일을 컴파일하고 함께 묶고 의미 체계 주, 부, 패치 태그를 강제로 푸시할 수 있습니다. 예제는 [이 워크플로](https://github.com/github-developer/javascript-action/blob/963a3b9a9c662fd499419a240ed8c49411ff5add/.github/workflows/publish.yml)를 참조하세요. 의미 체계 태그에 대한 자세한 내용은 “[의미 체계 버전 관리 정보](https://docs.npmjs.com/about-semantic-versioning)”를 참조하세요.

### 예제 개발자 프로세스

다음은 테스트를 자동으로 실행하고, 릴리스{% ifversion fpt or ghec%}를 만들고, {% data variables.product.prodname_marketplace %}{% endif %}에 게시하고, 작업을 게시하기 위해 따를 수 있는 예제 프로세스입니다.

1. GitHub 흐름당 분기에서 기능 작업을 수행합니다. 자세한 내용은 “[GitHub 흐름](/get-started/quickstart/github-flow)”을 참조하세요.
   * 커밋이 기능 분기에 푸시될 때마다 테스트 워크플로가 자동으로 테스트를 실행합니다.

2. 토론 및 검토를 시작하고 준비가 되었을 때 병합하려면 `main` 분기에 대한 끌어오기 요청을 만듭니다.

   * 분기 또는 포크에서 끌어오기 요청을 열면 이번에는 병합 커밋을 사용하여 테스트 워크플로가 테스트를 다시 실행합니다.

   * **참고:** 보안상의 이유로 포크에서 `pull_request`에 의해 트리거된 워크플로에는 제한된 `GITHUB_TOKEN` 권한이 있으며 보안 비밀에 액세스할 수 없습니다. 끌어오기 요청 시 트리거되는 테스트 또는 다른 워크플로에서 비밀에 액세스해야 하는 경우 [수동 트리거](/actions/reference/events-that-trigger-workflows#manual-events) 또는 [`pull_request_target`](/actions/reference/events-that-trigger-workflows#pull_request_target)과 같은 다른 이벤트를 사용하는 것이 좋습니다. 자세한 내용은 [여기](/actions/reference/events-that-trigger-workflows#pull-request-events-for-forked-repositories)를 읽어보세요.

3. 의미 체계로 태그가 지정된 릴리스를 만듭니다. {% ifversion fpt or ghec %} 간단한 확인란을 사용하여 {% data variables.product.prodname_marketplace %}에 게시할 수도 있습니다. {% endif %} 자세한 내용은 “[리포지토리에서 릴리스 관리](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)”{% ifversion fpt or ghec %} 및 “[{% data variables.product.prodname_marketplace %}의 작업 게시](/actions/creating-actions/publishing-actions-in-github-marketplace#publishing-an-action)”{% endif %}를 참조하세요.

   * 릴리스가 게시되거나 편집되면 릴리스 워크플로가 자동으로 컴파일 및 태그 조정을 처리합니다.

   * 의미 체계로 버전이 지정된 태그(예: `v1.1.3`)를 사용하여 릴리스를 만들고 주(`v1`) 및 부(`v1.1`) 태그를 최신의 적절한 커밋으로 유지하는 것이 좋습니다. 자세한 내용은 “[사용자 지정 작업 정보](/actions/creating-actions/about-custom-actions#using-release-management-for-actions)” 및 “[의미 체계 버전 관리 정보](https://docs.npmjs.com/about-semantic-versioning)”를 참조하세요.

### 결과

일부 다른 자동화된 릴리스 관리 전략과 달리 이 프로세스는 의도적으로 `main` 분기에 종속성을 커밋하지 않고 태그가 지정된 릴리스 커밋에만 종속성을 커밋합니다. 이렇게 하면 작업 사용자가 명명된 태그 또는 `sha`를 참조하도록 권장하고 릴리스 중에 직접 빌드를 수행하여 타사 끌어오기 요청의 보안을 보장하는 데 도움이 됩니다.

의미 체계 릴리스를 사용하면 작업 사용자가 워크플로를 버전에 고정하고 편안한 정도에 따라 안정적이고 호환성을 손상하지 않는 최신 기능을 계속 수신할 수 있음을 알 수 있습니다.

## 커뮤니티와 협력

{% data variables.product.product_name %}는 오픈 소스 커뮤니티에서 작업하는 데 도움이 되는 도구와 가이드를 제공합니다. 원활한 양방향 소통을 위해 다음을 설정하는 것이 좋습니다. 커뮤니티에 다음 신호를 제공하면 다른 사용자가 작업을 사용하고 수정하고 참여하도록 권장합니다.

* 많은 사용 예제와 참고 자료로 `README`를 유지 관리합니다. 자세한 내용은 “[추가 정보](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)”를 참조하세요.
* `README` 파일에 워크플로 상태 배지를 포함합니다. 자세한 내용은 “[워크플로 상태 배지 추가](/actions/managing-workflow-runs/adding-a-workflow-status-badge)”를 참조하세요. 또한 추가할 수 있는 다른 배지에 대해 알아보려면 [shields.io](https://shields.io/)를 방문하세요.{% ifversion fpt or ghec %}
* `CODE_OF_CONDUCT`, `CONTRIBUTING`, `SECURITY`와 같은 커뮤니티 상태 파일을 추가합니다. 자세한 내용은 “[기본 커뮤니티 상태 파일 만들기](/github/building-a-strong-community/creating-a-default-community-health-file#supported-file-types)”를 참조하세요.{% endif %}
* [작업/부실](https://github.com/actions/stale)과 같은 작업을 활용하여 문제를 최신 상태로 유지합니다.

## 추가 참고 자료

유사한 패턴을 사용하는 예제는 다음과 같습니다.

* [github/super-linter](https://github.com/github/super-linter)
* [octokit/request-action](https://github.com/octokit/request-action)
* [github-developer/javascript-action](https://github.com/github-developer/javascript-action)
