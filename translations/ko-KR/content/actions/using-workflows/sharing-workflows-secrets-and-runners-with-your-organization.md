---
title: '조직과 워크플로, 비밀 및 실행기 공유'
shortTitle: Share workflows with your organization
intro: '시작 워크플로, 비밀, 자체 호스팅 실행기를 공유하여 조직 기능을 사용하여 팀과 협업하는 방법을 알아봅니다.'
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
  - /actions/learn-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: 6b78eca0b38270fee40bdcba5606bf80843da206
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009548'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 개요

워크플로 및 기타 {% data variables.product.prodname_actions %} 기능을 팀과 공유해야 하는 경우 {% data variables.product.prodname_dotcom %} 조직 내에서 공동 작업하는 것이 좋습니다. 조직에서는 비밀, 아티팩트 및 자체 호스팅 실행기를 중앙에서 저장하고 관리할 수 있습니다. `.github` 리포지토리에서 시작 워크플로를 만들고 조직의 다른 사용자와 공유할 수도 있습니다.

## {% ifversion internal-actions %}작업 및 {% endif %}워크플로 공유

{% ifversion internal-actions %} 작업 또는 워크플로를 공개적으로 게시하거나 게시하지 않고 개별 작업 및 전체 워크플로를 조직과 공유할 수 있습니다. 작업 및 워크플로를 워크플로 파일에서 정확하게 참조하여 다시 사용할 수 있으며 새 워크플로에 대한 템플릿을 제공하는 시작 워크플로를 만들 수 있습니다.
{% else %} 조직에서는 워크플로를 정확하게 재사용하거나 새 워크플로에 대한 템플릿을 제공하는 시작 워크플로를 만들어 워크플로를 공유할 수 있습니다.
{% endif %}

{% ifversion internal-actions %}
### 엔터프라이즈와 작업 공유

{% data reusables.actions.internal-actions-summary %} {% endif %}

{% ifversion fpt 또는 ghes > 3.3 또는 ghae > 3.3 또는 ghec %}
### 워크플로 다시 사용

{% data reusables.actions.reusable-workflows %} {% endif %}

### 시작 워크플로 사용

{% data reusables.actions.workflow-organization-templates %} 자세한 내용은 “[조직의 시작 워크플로 만들기](/actions/using-workflows/creating-starter-workflows-for-your-organization)”를 참조하세요.

## 조직 내에서 비밀 공유

조직 내에서 비밀을 중앙에서 관리한 다음 선택한 리포지토리에 사용할 수 있도록 할 수 있습니다. 즉, 한 위치에서 비밀을 업데이트하고 비밀을 사용하는 모든 리포지토리 워크플로에 변경 내용이 적용되도록 할 수 있습니다.

조직에서 비밀을 만들 때 정책을 사용하여 해당 비밀에 액세스할 수 있는 리포지토리를 제한할 수 있습니다. 예를 들어 모든 리포지토리에 대한 액세스 권한을 부여하거나 프라이빗 리포지토리 또는 지정된 리포지토리 목록에 대해서만 액세스를 제한할 수 있습니다.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. **New secret**(새 비밀)을 클릭합니다.
1. **Name**(이름) 입력 상자에 비밀의 이름을 입력합니다.
1. **값** 필드에 비밀 값을 입력합니다.
1. **리포지토리 액세스** 드롭다운 목록에서 액세스 정책을 선택합니다.
1. **Add secret**(비밀 추가)을 클릭합니다.

## 조직 내에서 자체 호스팅 실행기 공유

조직 관리자는 자체 호스팅 실행기를 그룹에 추가한 다음 그룹에 액세스할 수 있는 리포지토리를 제어하는 정책을 만들 수 있습니다.

자세한 내용은 “[그룹을 사용하여 자체 호스팅 실행기에 대한 액세스 관리](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”를 참조하세요.


## 다음 단계

{% data variables.product.prodname_actions %}에 대해 계속 알아보려면 “[조직의 시작 워크플로 만들기](/actions/using-workflows/creating-starter-workflows-for-your-organization)”를 참조하세요.
