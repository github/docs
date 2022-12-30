---
title: 연속 통합 정보
intro: '{% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.prodname_dotcom %} 리포지토리에서 직접 사용자 지정 CI(연속 통합) 워크플로를 만들 수 있습니다.'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
  - /actions/guides/about-continuous-integration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - CI
shortTitle: Continuous integration
ms.openlocfilehash: d09fcbdb62a07f7c046cdf8f630798d7f15c957f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097968'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 연속 통합 정보

CI(연속 통합)는 공유 리포지토리에 코드를 자주 커밋해야 하는 소프트웨어 방식입니다. 코드를 커밋하면 오류를 더 빨리 감지하고 개발자가 오류의 원인을 찾을 때 디버그해야 하는 코드의 양이 줄어듭니다. 코드를 자주 업데이트하면 소프트웨어 개발 팀의 다른 구성원이 변경 내용을 더 쉽게 병합할 수 있습니다. 이는 코드를 작성하는 데 더 많은 시간을 사용하고 오류를 디버그하거나 병합 충돌을 해결하는 데 더 적은 시간을 사용할 수 있는 개발자에게 유용합니다.

리포지토리에 코드를 커밋할 때 코드를 지속적으로 빌드하고 테스트하여 커밋에 오류가 발생하지 않도록 할 수 있습니다. 테스트에는 코드 Linter(스타일 서식 확인), 보안 검사, 코드 검사, 기능 테스트, 기타 사용자 지정 검사가 포함될 수 있습니다.

코드를 빌드하고 테스트하려면 서버가 필요합니다. 리포지토리에 코드를 푸시하기 전에 로컬에서 업데이트를 빌드하고 테스트하거나 리포지토리에서 새 코드 커밋을 확인하는 CI 서버를 사용할 수 있습니다.

## {% data variables.product.prodname_actions %}을 사용한 연속 통합 정보

{% ifversion ghae %}{% data variables.product.prodname_actions %}를 사용하는 CI는 리포지토리에 코드를 빌드하고 테스트를 실행할 수 있는 워크플로를 제공합니다. 워크플로는 호스트하는 실행기 시스템에서 실행할 수 있습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요.
{% else %} {% data variables.product.prodname_actions %}를 사용하는 CI는 리포지토리에 코드를 빌드하고 테스트를 실행할 수 있는 워크플로를 제공합니다. 워크플로는 {% data variables.product.prodname_dotcom %} 호스트 가상 머신 또는 직접 호스트하는 머신에서 실행할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 호스트되는 실행기 정보](/actions/using-github-hosted-runners/about-github-hosted-runners)” 및 “[자체 호스트 실행기 정보](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)”를 참조하세요.
{% endif %}

{% data variables.product.prodname_dotcom %} 이벤트가 발생할 때(예: 새 코드가 리포지토리에 푸시될 때), 설정된 일정에 따라 또는 리포지토리 디스패치 웹후크를 사용하여 외부 이벤트가 발생할 때 실행되도록 CI 워크플로를 구성할 수 있습니다.

{% data variables.product.product_name %}는 CI 테스트를 실행하고 끌어오기 요청에서 각 테스트의 결과를 제공하므로 분기의 변경으로 인해 오류가 발생하는지 확인할 수 있습니다. 워크플로의 모든 CI 테스트를 통과하면 푸시한 변경 내용을 팀 멤버가 검토하거나 병합할 수 있습니다. 테스트가 실패하면 변경 내용 중 하나로 인해 오류가 발생했을 수 있습니다.

리포지토리에서 CI를 설정할 때 {% data variables.product.product_name %}는 리포지토리의 코드를 분석하고 리포지토리의 언어 및 프레임워크에 따라 CI 워크플로를 권장합니다. 예를 들어 [Node.js](https://nodejs.org/en/)를 사용하는 경우 {% data variables.product.product_name %}는 Node.js 패키지를 설치하고 테스트를 실행하는 시작 워크플로를 제안합니다. {% data variables.product.product_name %}에서 제안하는 CI 시작 워크플로를 사용하거나 제안된 시작 워크플로를 사용자 지정하거나 사용자 지정 워크플로 파일을 만들어 CI 테스트를 실행할 수 있습니다.

![제안된 연속 통합 시작 워크플로의 스크린샷](/assets/images/help/repository/ci-with-actions-template-picker.png)

프로젝트에 대한 CI 워크플로 설정을 지원하는 것 외에도 {% data variables.product.prodname_actions %}를 사용하여 전체 소프트웨어 개발 수명 주기에 걸쳐 워크플로를 만들 수 있습니다. 예를 들어 작업을 사용하여 프로젝트를 배포, 패키지 또는 릴리스할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 정보](/articles/about-github-actions)”를 참조하세요.

일반적인 용어에 대한 정의는 “[{% data variables.product.prodname_actions %}에 대한 핵심 개념](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)”을 참조하세요.

## 시작 워크플로

{% data variables.product.product_name %}는 다양한 언어 및 프레임워크에 대한 CI 시작 워크플로를 제공합니다.

{% 데이터 variables.product.company_short %}에 있는 {% ifversion fpt 또는 ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci) 리포지토리{% else %} `actions/starter-workflows` 리포지토리의 {% 데이터 variables.location.product_location %}{% endif %}에서 제공하는 CI 시작 워크플로의 전체 목록을 찾아봅니다.

## 추가 참고 자료

{% ifversion fpt or ghec %}
- “[{% data variables.product.prodname_actions %}에 대한 청구 관리](/billing/managing-billing-for-github-actions)” {% endif %}
