---
title: 더 큰 실행기 액세스 제어
shortTitle: 'Control access to {% data variables.actions.hosted_runner %}s'
intro: '정책을 사용하여 조직 또는 엔터프라이즈에 추가된 {% data variables.actions.hosted_runner %}에 대한 액세스를 제한하는 정책을 사용할 수 있습니다.'
product: '{% data reusables.gated-features.hosted-runners %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: actions-hosted-runners
type: tutorial
ms.openlocfilehash: d19e875ae8ee4556e635540f47625fa5a9874918
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189907'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 실행기 그룹 정보

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners)를 참조하세요.{% endif %}

### {% data variables.actions.hosted_runner %}s에 대한 기본 그룹

{% data variables.actions.hosted_runner %}s에 액세스할 수 있는 조직과 기업은 다양한 크기의 4명의 실행기를 포함하는 "기본 큰 실행기"라는 기본 실행기 그룹을 자동으로 받습니다. 이 그룹의 실행기는 미리 구성되어 즉시 사용할 준비가 되어 있습니다. 이 그룹의 실행기를 사용하려면 선택한 실행기에 해당하는 레이블을 워크플로 파일에 추가해야 합니다. 레이블은 아래 표를 참조하세요. 레이블을 사용하는 방법에 대한 자세한 내용은 "[실행기에서 작업 실행"을 참조하세요](/actions/using-github-hosted-runners/using-larger-runners#running-jobs-on-your-runner).


#### 기본 실행기

|설명 | 레이블 | 이미지 |
| ------- | ------- | ------ |
| 4코어 Ubuntu Runner | `ubuntu-latest-4-cores` | Ubuntu - 최신 |
| 8코어 Ubuntu Runner | `ubuntu-latest-8-cores` | Ubuntu - 최신 |
| 16코어 Ubuntu Runner | `ubuntu-latest-16-cores` | Ubuntu - 최신 |
| 8코어 Windows Runner | `windows-latest-8-cores` | Windows Server - 최신 |

기본 {% data variables.actions.hosted_runner %} 그룹은 청구 엔터티 수준에서 만들어집니다. 조직이 엔터프라이즈 계정의 일부인 경우 그룹은 엔터프라이즈 수준에서 관리됩니다. 조직이 엔터프라이즈에 속하지 않는 경우 그룹은 조직 수준에서 관리됩니다. 

워크플로에서 사용할 때까지 이러한 실행기에 대한 요금이 청구되지 않습니다. 이러한 실행기를 사용하면 청구가 정상적으로 작동합니다. 청구에 대한 자세한 내용은 "[{% data variables.actions.hosted_runner %}s 사용](/actions/using-github-hosted-runners/using-larger-runners#understanding-billing)"을 참조하세요.

엔터프라이즈 수준의 {% data variables.actions.hosted_runner %} 그룹에 대한 기본 액세스는 엔터프라이즈의 모든 조직과 자동으로 공유되도록 설정되지만 모든 리포지토리는 공유하지 않습니다. 조직 관리자는 기본 {% data variables.actions.hosted_runner %} 그룹을 각 리포지토리와 별도로 공유해야 합니다. 조직 수준에서 {% data variables.actions.hosted_runner %} 그룹의 경우 모든 리포지토리와 그룹을 자동으로 공유하도록 기본 액세스가 설정됩니다. 액세스 정책을 변경하는 방법 및 기본 {% data variables.actions.hosted_runner %} 그룹을 볼 수 있는 위치에 대한 자세한 내용은 "[실행기 그룹의 액세스 정책 변경"을 참조하세요](#changing-the-access-policy-of-a-runner-group).

{% ifversion ghec or ghes or ghae %}

## 조직에 대한 실행기 그룹 만들기

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-organization %}

## 엔터프라이즈에 대한 실행기 그룹 만들기

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## 실행기 그룹의 액세스 정책 변경

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## 실행기 그룹의 이름 변경

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## 실행기를 그룹으로 이동

{% data reusables.actions.moving-a-runner-to-a-group %}

## 실행기 그룹 제거

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
