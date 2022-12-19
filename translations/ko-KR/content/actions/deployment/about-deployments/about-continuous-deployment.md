---
title: 지속적인 배포 정보
intro: '{% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.prodname_dotcom %} 리포지토리에서 직접 사용자 지정 CD(지속적인 배포) 워크플로를 만들 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/about-continuous-deployment
topics:
  - CD
shortTitle: About continuous deployment
ms.openlocfilehash: 379afa0088f7f10302f5bf8202f5259ac4777bec
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147060140'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 지속적인 배포 정보

CD(_지속적인 배포_)는 자동화를 사용하여 소프트웨어 업데이트를 게시하고 배포하는 방법입니다. 일반적인 CD 프로세스의 일부로 코드는 배포 전에 자동으로 빌드되고 테스트됩니다.

지속적인 배포는 종종 연속 통합과 관련됩니다. 연속 통합에 대한 자세한 내용은 “[연속 통합 정보](/actions/guides/about-continuous-integration)”를 참조하세요.

## {% data variables.product.prodname_actions %}를 사용하는 연속 통합 정보

{% data variables.product.prodname_actions %} 워크플로를 설정하여 소프트웨어 제품을 배포할 수 있습니다. 워크플로는 리포지토리에서 코드를 빌드하고 배포하기 전에 제품이 예상대로 작동하는지 확인하기 위해 테스트를 실행할 수 있습니다.

{% data variables.product.product_name %} 이벤트가 발생할 때(예: 새 코드가 리포지토리의 기본 분기에 푸시될 때) 설정된 일정에 따라 수동으로 또는 외부 이벤트가 리포지토리 디스패치 웹후크를 사용하여 발생할 때 실행되도록 CD 워크플로를 구성할 수 있습니다. 워크플로를 실행할 수 있는 시기에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows)”를 참조하세요.

{% data variables.product.prodname_actions %}는 배포를 더 잘 제어할 수 있는 기능을 제공합니다. 예를 들어 환경을 사용하여 작업을 진행하기 위한 승인을 요구하거나, 워크플로를 트리거할 수 있는 분기를 제한하거나, 비밀에 대한 액세스를 제한할 수 있습니다. 동시성을 사용하여 CD 파이프라인을 최대 1개의 진행 중인 배포와 1개의 보류 중인 배포로 제한할 수 있습니다. 이러한 기능에 대한 자세한 내용은 “[GitHub Actions를 사용하여 배포](/actions/deployment/deploying-with-github-actions)” 및 “[배포를 위한 환경 사용](/actions/deployment/using-environments-for-deployment)”을 참조하세요.

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## OpenID Connect를 사용하여 클라우드 리소스에 액세스

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## 시작 워크플로 및 타사 작업

{% data reusables.actions.cd-templates-actions %}

## 추가 참고 자료

- [GitHub Actions를 사용하여 배포](/actions/deployment/deploying-with-github-actions)
- [배포에 환경 사용](/actions/deployment/using-environments-for-deployment){% ifversion fpt or ghec %}
- “[{% data variables.product.prodname_actions %}에 대한 청구 관리](/billing/managing-billing-for-github-actions)”{% endif %}

