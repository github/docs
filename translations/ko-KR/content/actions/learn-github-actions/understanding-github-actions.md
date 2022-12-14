---
title: GitHub Actions 이해
shortTitle: Understand GitHub Actions
intro: '핵심 개념 및 필수 용어를 포함하여 {% data variables.product.prodname_actions %}의 기본 사항을 알아봅니다.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: f2937ba88b4e47f59e9b845c7c87b7de9f4cc2f3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093651'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

{% data reusables.actions.about-actions %} 리포지토리에 대한 모든 끌어오기 요청을 빌드 및 테스트하거나 병합된 끌어오기 요청을 프로덕션에 배포하는 워크플로를 만들 수 있습니다.

{% data variables.product.prodname_actions %}는 단순한 DevOps 수준을 넘어 리포지토리에서 다른 이벤트가 발생할 때 워크플로를 실행할 수 있도록 합니다. 예를 들어 누군가가 리포지토리에서 새 이슈를 만들 때마다 워크플로를 실행하여 적절한 레이블을 자동으로 추가할 수 있습니다.

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %}에서 워크플로를 실행할 Linux, Windows, macOS 가상 머신을 제공하거나, 사용자 고유의 데이터 센터 또는 클라우드 인프라에서 자체 호스팅 실행기를 호스트할 수 있습니다.

{% elsif ghes or ghae %}

{% 데이터 variables.location.product_location %}에 대한 워크플로를 실행하려면 사용자 고유의 Linux, Windows 또는 macOS 가상 머신을 호스트해야 합니다. {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

엔터프라이즈에 {% data variables.product.prodname_actions %}를 도입하는 방법에 대한 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_actions %} 도입](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)”을 참조하세요.

{% endif %}

## {% data variables.product.prodname_actions %}의 구성 요소

끌어오기 요청이 열리거나 이슈가 생성되는 것과 같은 ‘이벤트’가 리포지토리에서 발생할 때 트리거되도록 {% data variables.product.prodname_actions %} ‘워크플로’를 구성할 수 있습니다.   워크플로는 순차적 또는 병렬로 실행될 수 있는 ‘작업’을 하나 이상 포함합니다.  각 작업은 자체 가상 머신 ‘실행기’ 또는 컨테이너 내에서 실행되며, 정의한 스크립트를 실행하거나 워크플로를 간소화할 수 있는 재사용 가능한 확장인 ‘작업’을 실행하는 ‘단계’를 하나 이상 포함합니다.  

![워크플로 개요](/assets/images/help/images/overview-actions-simple.png)

### 워크플로

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt 또는 ghes > 3.3 또는 ghae > 3.3 또는 ghec %} 다른 워크플로 내에서 워크플로를 참조할 수 있습니다. "[워크플로 다시 사용"을 참조하세요.](/actions/learn-github-actions/reusing-workflows) {% endif %}

워크플로에 대한 자세한 내용은 “[워크플로 사용](/actions/using-workflows)”을 참조하세요.

### 이벤트

이벤트는 워크플로 실행을 트리거하는 리포지토리의 특정 활동입니다. 예를 들어 누군가가 끌어오기 요청을 만들거나, 이슈를 열거나, 리포지토리에 커밋을 푸시할 때 {% data variables.product.prodname_dotcom %}에서 활동이 시작될 수 있습니다.  일정에 따라, [REST API에 게시](/rest/reference/repos#create-a-repository-dispatch-event)하여 또는 수동으로 워크플로 실행을 트리거할 수도 있습니다.

워크플로를 트리거하는 데 사용할 수 있는 이벤트의 전체 목록은 [워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows)를 참조하세요.

### 작업

작업은 동일한 실행기에서 실행되는 워크플로의 ‘단계’ 집합입니다.  각 단계는 실행되는 셸 스크립트 또는 실행되는 ‘작업’입니다.  단계는 순서대로 실행되며 서로 종속됩니다.  각 단계가 동일한 실행기에서 실행되므로 단계 간에 데이터를 공유할 수 있습니다.  예를 들어 애플리케이션을 빌드하는 단계 뒤에 빌드된 애플리케이션을 테스트하는 단계가 있을 수 있습니다.

작업 간 종속성을 구성할 수 있습니다. 기본적으로 작업은 종속성이 없으며 서로 병렬로 실행됩니다.  다른 작업에 대한 종속성이 있는 작업은 종속 작업이 완료될 때까지 기다렸다가 실행될 수 있습니다.  예를 들어 종속성이 없는 서로 다른 아키텍처에 대한 여러 빌드 작업과 해당 작업에 종속된 패키징 작업이 있을 수 있습니다.  빌드 작업은 병렬로 실행되며, 모두 성공적으로 완료되면 패키징 작업이 실행됩니다.

작업에 대한 자세한 내용은 “[작업 사용](/actions/using-jobs)”을 참조하세요.

### 동작

‘작업’은 복잡하지만 자주 반복되는 태스크를 수행하는 {% data variables.product.prodname_actions %} 플랫폼용 사용자 지정 애플리케이션입니다.  작업을 사용하여 워크플로 파일에 작성하는 반복 코드의 양을 줄일 수 있습니다.  작업은 {% data variables.product.prodname_dotcom %}에서 git 리포지토리를 풀하거나, 빌드 환경에 맞는 도구 체인을 설정하거나, 클라우드 공급자에 대한 인증을 설정할 수 있습니다.

사용자 고유의 작업을 작성하거나, {% data variables.product.prodname_marketplace %}에서 워크플로에 사용할 작업을 찾을 수 있습니다.

{% data reusables.actions.internal-actions-summary %}

자세한 내용은 “[작업 만들기](/actions/creating-actions)”를 참조하세요.

### 실행기

{% data reusables.actions.about-runners %} 각 실행기는 한 번에 하나의 작업을 실행할 수 있습니다. {% ifversion ghes or ghae %} 사용자 고유의 {% data variables.product.product_name %}용 실행기를 호스트해야 합니다. {% elsif fpt or ghec %}{% data variables.product.company_short %}은(는) 워크플로를 실행할 Ubuntu Linux, Microsoft Windows, macOS 실행기를 제공합니다. 각 워크플로 실행은 새로 프로비저닝된 가상 머신에서 실행됩니다. {% ifversion actions-hosted-runners %} 또한 {% data variables.product.prodname_dotcom %}에서는 더 큰 구성에서 사용할 수 있는 {% data variables.actions.hosted_runner %}를 제공합니다. 자세한 내용은 “[{% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners) 사용”을 참조하세요. {% endif %}다른 운영 체제가 필요하거나 특정 하드웨어 구성이 필요한 경우 사용자 고유의 실행기를 호스트할 수 있습니다.{% endif %} {% ifversion fpt or ghec %}자체 호스팅 실행기에 대한 {% endif %}자세한 내용은 “[사용자 고유의 실행기 호스트](/actions/hosting-your-own-runners)”를 참조하세요.

{% data reusables.actions.workflow-basic-example-and-explanation %}

## 다음 단계

{% data reusables.actions.onboarding-next-steps %}

## 고객 지원팀에 연락

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## 추가 참고 자료

- “[엔터프라이즈용 {% data variables.product.prodname_actions %} 정보](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)” {% endif %}
