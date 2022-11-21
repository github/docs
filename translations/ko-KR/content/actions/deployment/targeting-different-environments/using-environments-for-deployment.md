---
title: 배포에 환경 사용
shortTitle: Use environments for deployment
intro: 보호 규칙 및 비밀을 사용하여 환경을 구성할 수 있습니다. 환경을 참조하는 워크플로 작업은 환경에 대한 모든 보호 규칙을 따라야 환경의 비밀을 실행하거나 액세스할 수 있습니다.
product: '{% data reusables.gated-features.environments %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/reference/environments
  - /actions/deployment/environments
  - /actions/deployment/using-environments-for-deployment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 21163a759cfd7eab3b197aeb4bb9283e1ccb90a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572305'
---
## 환경 정보

환경은 일반적인 배포 대상(예: `production`, `staging` 또는 `development`)을 설명하는 데 사용됩니다. {% data variables.product.prodname_actions %} 워크플로가 환경에 배포되면 환경이 리포지토리의 기본 페이지에 표시됩니다. 환경에 대한 배포 보기에 대한 자세한 내용은 “[배포 기록 보기](/developers/overview/viewing-deployment-history)”를 참조하세요.

보호 규칙 및 비밀을 사용하여 환경을 구성할 수 있습니다. 워크플로 작업이 환경을 참조하는 경우 환경의 모든 보호 규칙이 통과될 때까지 작업이 시작되지 않습니다. 또한 작업은 모든 환경 보호 규칙이 통과될 때까지 환경에 정의된 비밀에 액세스할 수 없습니다.

{% ifversion fpt %} {% note %}

**참고:** 퍼블릭 리포지토리에 대한 환경만 구성할 수 있습니다. 리포지토리를 퍼블릭에서 프라이빗으로 변환하는 경우 구성된 보호 규칙 또는 환경 비밀은 무시되며 환경을 구성할 수 없습니다. 리포지토리를 다시 퍼블릭으로 변환하는 경우 이전에 구성된 보호 규칙 및 환경 비밀에 액세스할 수 있습니다.

{% data variables.product.prodname_team %}이 있는 조직과 {% data variables.product.prodname_pro %}가 있는 사용자는 프라이빗 리포지토리에 대한 환경을 구성할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 제품](/get-started/learning-about-github/githubs-products)”을 참조하세요.

{% endnote %} {% endif %}

## 환경 보호 규칙

환경 보호 규칙에는 환경을 참조하는 작업이 계속 진행되기 전에 전달해야 하는 특정 조건이 필요합니다. 환경 보호 규칙을 사용하여 수동 승인을 요구하거나, 작업을 지연시키거나, 환경을 특정 분기로 제한할 수 있습니다.

### 필수 검토자

필수 검토자를 사용하여 특정 사용자 또는 팀이 환경을 참조하는 워크플로 작업을 승인하도록 요구합니다. 최대 6명의 사용자 또는 팀을 검토자로 나열할 수 있습니다. 검토자는 적어도 리포지토리에 대한 읽기 권한이 있어야 합니다. 작업을 계속하려면 필수 검토자 중 한 명만 작업을 승인하면 됩니다.

필수 검토자가 있는 환경을 참조하는 작업을 검토하는 방법에 대한 자세한 내용은 “[배포 검토](/actions/managing-workflow-runs/reviewing-deployments)”를 참조하세요.

### 대기 타이머

대기 타이머를 사용하여 작업이 처음 트리거된 후 특정 시간 동안 작업을 지연시킵니다. 시간(분)은 0에서 43,200(30일) 사이의 정수여야 합니다.

### 배포 분기

배포 분기를 사용하여 환경에 배포할 수 있는 분기를 제한합니다. 환경에 대한 배포 분기에 대한 옵션은 다음과 같습니다.

* **모든 분기**: 리포지토리의 모든 분기가 환경에 배포할 수 있습니다.
* **보호된 분기**: 분기 보호 규칙이 설정된 분기만 환경에 배포할 수 있습니다. 리포지토리의 모든 분기에 정의된 분기 보호 규칙이 없는 경우 모든 분기를 배포할 수 있습니다. 분기 보호 규칙에 대한 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches)”를 참조하세요.
* **선택한 분기**: 지정된 이름 패턴과 일치하는 분기만 환경에 배포할 수 있습니다.

  예를 들어 `releases/*`를 배포 분기 규칙으로 지정하는 경우 이름이 `releases/`로 시작되는 분기만 환경에 배포할 수 있습니다. (와일드카드 문자가 `/`와 일치하지 않습니다. `release/`로 시작되고 추가 단일 슬래시를 포함하는 분기를 일치시키려면 `release/*/*`를 사용합니다.) `main`을 배포 분기 규칙으로 추가하는 경우 `main`으로 명명된 분기도 환경에 배포할 수 있습니다. 배포 분기에 대한 구문 옵션에 대한 자세한 내용은 [Ruby File.fnmatch 설명서](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)를 참조하세요.
## 환경 비밀

환경에 저장된 비밀은 환경을 참조하는 워크플로 작업에서만 사용할 수 있습니다. 환경에 승인이 필요한 경우 필수 검토자 중 한 명이 승인할 때까지 작업에서 환경 비밀에 액세스할 수 없습니다. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/reference/encrypted-secrets)”을 참조하세요.

{% note %}

**참고:** 자체 호스팅 실행기에서 실행되는 워크플로는 환경을 사용하는 경우에도 격리된 컨테이너에서 실행되지 않습니다. 환경 비밀을 리포지토리 및 조직 비밀과 동일한 수준의 보안으로 취급해야 합니다. 자세한 내용은 “[GitHub Actions의 보안 강화](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners)”를 참조하세요.

{% endnote %}

## 환경 생성

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt or ghec %} {% note %}

**참고:** 프라이빗 리포지토리에서 환경 만들기는 {% data variables.product.prodname_team %}가 있는 조직 및 {% data variables.product.prodname_pro %}가 있는 사용자에게 제공됩니다.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %} {% data reusables.actions.new-environment %} {% data reusables.actions.name-environment %}
1. 필요에 따라 이 환경을 사용하는 워크플로 작업을 승인해야 하는 사용자 또는 팀을 지정합니다.
   1. **필수 검토자** 를 선택합니다.
   1. 최대 6명 또는 팀을 입력합니다. 작업을 계속하려면 필수 검토자 중 한 명만 작업을 승인하면 됩니다.
   1. **보호 규칙 저장** 을 클릭합니다.
2. 필요에 따라 이 환경을 사용하는 워크플로 작업을 계속 진행하도록 허용하기 전에 대기할 시간을 지정합니다.
   1. **대기 타이머** 를 선택합니다.
   1. 대기할 시간(분)을 입력합니다.
   1. **보호 규칙 저장** 을 클릭합니다.
3. 필요에 따라 이 환경에 배포할 수 있는 분기를 지정합니다. 가능한 값에 대한 자세한 내용은 “[배포 분기](#deployment-branches)”를 참조하세요.
   1. **배포 분기** 드롭다운에서 원하는 옵션을 선택합니다.
   1. **선택한 분기** 를 선택한 경우 허용하려는 분기 이름 패턴을 입력합니다.
4. 필요에 따라 환경 비밀을 추가합니다. 해당 비밀은 환경을 사용하는 워크플로 작업에서만 사용할 수 있습니다. 또한 이 환경을 사용하는 워크플로 작업은 구성된 규칙(예: 필수 검토자)이 통과한 후에만 해당 비밀에 액세스할 수 있습니다. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/reference/encrypted-secrets)”을 참조하세요.
   1. **환경 비밀** 에서 **비밀 추가** 를 클릭합니다.
   1. 비밀 이름을 입력합니다.
   1. 비밀 값을 입력합니다.
   1. **비밀 추가** 를 클릭합니다.

REST API를 통해 환경을 만들고 구성할 수도 있습니다. 자세한 내용은 “[배포 환경](/rest/deployments/environments)”, “[GitHub Actions 비밀](/rest/actions/secrets)” 및 “[배포 분기 정책](/rest/deployments/branch-policies)”을 참조하세요.

존재하지 않는 환경을 참조하는 워크플로를 실행하면 참조된 이름을 가진 환경이 생성됩니다. 새로 만든 환경에는 보호 규칙이나 비밀이 구성되지 않습니다. 리포지토리에서 워크플로를 편집할 수 있는 사람은 누구나 워크플로 파일을 통해 환경을 만들 수 있지만 리포지토리 관리자만 환경을 구성할 수 있습니다.

## 환경 사용

워크플로의 각 작업은 단일 환경을 참조할 수 있습니다. 환경을 참조하는 작업이 실행기에 전송되기 전에 환경에 대해 구성된 모든 보호 규칙이 전달되어야 합니다. 실행기에 작업이 전송된 후에만 작업이 환경의 비밀에 액세스할 수 있습니다.

워크플로가 환경을 참조하면 환경이 리포지토리의 배포에 표시됩니다. 현재 및 이전 배포 보기에 대한 자세한 내용은 “[배포 기록 보기](/developers/overview/viewing-deployment-history)”를 참조하세요.

{% data reusables.actions.environment-example %}

## 환경 삭제

{% data reusables.actions.permissions-statement-environment %}

환경을 삭제하면 환경과 연결된 모든 비밀 및 보호 규칙이 삭제됩니다. 삭제된 환경의 보호 규칙으로 인해 현재 대기 중인 모든 작업은 자동으로 실패합니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. 삭제하려는 환경 옆에 있는 {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다.
2. **이해했습니다. 이 환경을 삭제합니다** 를 클릭합니다.

REST API를 통해 환경을 삭제할 수도 있습니다. 자세한 정보는 “[환경](/rest/reference/repos#environments)”을 참조하세요.

## 환경과 배포 간의 관계

{% data reusables.actions.environment-deployment-event %}

REST API 또는 GraphQL API를 통해 해당 개체에 액세스할 수 있습니다. 해당 웹후크 이벤트를 구독할 수도 있습니다. 자세한 내용은 “[리포지토리](/rest/reference/repos#deployments)”(REST API), “[개체](/graphql/reference/objects#deployment)”(GraphQL API) 또는 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)”를 참조하세요.

## 다음 단계

{% data variables.product.prodname_actions %}는 배포를 관리하기 위한 몇 가지 기능을 제공합니다. 자세한 내용은 “[GitHub Actions를 사용하여 배포](/actions/deployment/deploying-with-github-actions)”를 참조하세요.
