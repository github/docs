---
title: GitHub Codespaces 청구 관련 정보
shortTitle: About billing
intro: '{% data variables.product.prodname_github_codespaces %}을(를) 사용하는 비용과 {% data variables.product.prodname_dotcom %} 개인 계정에 포함된 월별 사용 할당량에 대해 알아봅니다.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
  - /github/developing-online-with-codespaces/about-billing-for-codespaces
  - /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
  - /codespaces/codespaces-reference/about-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-codespaces
  - /codespaces/codespaces-reference/understanding-billing-for-github-codespaces.md
ms.openlocfilehash: 24410721878cd77d2528a4d9e8c91633725ce661
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179550'
---
## {% data variables.product.prodname_github_codespaces %} 가격 책정

{% data reusables.codespaces.codespaces-free-for-personal-intro %}

다음이 모두 충족되면 조직 또는 엔터프라이즈에 요금이 청구됩니다.

- codespace가 시작되는 리포지토리(또는 포크된 리포지토리의 경우 부모 리포지토리)는 조직이 소유합니다.
- 조직은 리포지토리 또는 리포지토리의 포크에서 만든 codespace에 대해 요금이 청구되도록 구성됩니다.
- codespace를 만드는 사용자는 조직에 속하거나 조직과 관련된 외부 협력자이며 조직은 이 사용자의 조직 소유 codespace 사용에 대한 비용을 지불하기로 결정했습니다.

그렇지 않으면 {% data variables.product.prodname_github_codespaces %}의 사용은 codespace를 만든 사람의 개인 계정에 적용되며, 개인 계정에 대해 월별 포함된 사용량의 일부를 사용하거나 해당 계정에 포함된 할당량을 초과하는 사용량에 따라 요금이 청구됩니다. 

codespace 사용량에 대한 요금이 청구되도록 조직을 구성하는 방법에 대한 자세한 내용은 "[조직에 대해 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)"을 참조하세요. 조직 및 엔터프라이즈 계정에 대한 무료, 팀 및 엔터프라이즈 요금제에는 {% data variables.product.prodname_github_codespaces %}의 무료 사용이 포함되지 않습니다. 

### 개인 계정의 월별 포함된 스토리지 및 코어 시간

개인 계정에 대해 다음과 같은 스토리지 및 코어 사용 시간이 무료로 포함됩니다.

| 계정 요금제 | 매월 스토리지 | 월별 코어 시간 |
| ------------ | ----------------- | -------------------- |
| {% data variables.product.prodname_dotcom %} 개인 계정 무료 | 15GB 월 | 120 |
| {% data variables.product.prodname_dotcom %} 프로                        | 20GB 월 | 180 |

{% note %}

**참고**:
- 스토리지의 GB 월 단위는 시간 기반 측정이며, 1GB 월은 한 달 동안 1GB의 스토리지 사용량입니다. 모든 codespace 및 사전 빌드에서 사용하는 디스크 공간은 한 시간에 한 번 평가되며 현재 GB 월 사용량이 다시 계산됩니다. 따라서 codespace 및 사전 빌드가 있는 동안 GB 월 사용량은 한 달 내내 증가합니다. 예를 들어 스토리지가 총 15GB이고 월별 청구 주기 동안 변경되지 않은 상태로 유지되는 경우 월 중간에는 7.5GB, 월말에는 15GB를 사용하게 됩니다. 자세한 내용은 아래의 "[스토리지 사용량 청구](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage)"를 참조하세요.
- "코어 시간"은 포함된 컴퓨팅 사용에 사용되는 측정값입니다. 코어 시간을 계산하려면 codespace가 활성화된 시간 수를 아래 가격 표의 승수로 곱합니다. 기본 컴퓨터 유형의 경우 승수는 codespace를 호스트하는 컴퓨터의 프로세서 코어 수입니다. 예를 들어 codespace에 2코어 컴퓨터를 사용하고 1시간 동안 활성화된 경우 2코어 시간을 사용했습니다. 한 시간 동안 8코어 컴퓨터를 사용하는 경우 8코어 시간을 사용했습니다. 8코어 컴퓨터를 2시간 동안 사용하는 경우 16코어 시간을 사용했습니다.

{% endnote %}

포함된 할당량의 75%, 90%, 100%를 사용한 경우 이메일로 알림을 받게 됩니다. 알림은 {% data variables.product.prodname_vscode_shortname %} 및 {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트 내의 "알림 메시지"에도 표시됩니다. 필요한 경우 이메일 알림을 끌 수 있습니다. 자세한 내용은 "[GitHub Codespaces에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces#managing-usage-and-spending-limit-email-notifications)"를 참조하세요.

개인 계정이 포함된 스토리지 또는 컴퓨팅 사용량(먼저 도달한 스토리지)을 모두 사용하고 지출 한도를 구성하지 않은 경우 {% data variables.product.prodname_github_codespaces %}의 사용이 차단됩니다. 현재 청구 월 동안 {% data variables.product.prodname_github_codespaces %}을(를) 계속 사용하려면 결제 방법 및 지출 한도를 설정해야 합니다. 다음 월별 청구 주기가 시작될 때 포함된 사용량이 다시 설정됩니다. {% data variables.product.prodname_github_codespaces %}의 사용이 차단되는 동안에는 스토리지 요금이 청구되지 않습니다. 

언제든지 현재 월의 사용량에 대한 세부 정보를 볼 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 사용량 보기](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”를 참조하세요.

codespace 다시 시작을 차단하고 codespace에서 변경한 내용을 계속 작업하려는 경우 다음 중 원하는 작업을 수행할 수 있습니다.

- 결제 방법 및 $0 USD보다 큰 지출 한도를 추가합니다.
- codespace에서 분기로 변경 내용을 내보냅니다. 자세한 내용은 “[분기로 변경 내용 내보내기](/codespaces/troubleshooting/exporting-changes-to-a-branch)”를 참조하세요.
- 다음 월별 청구 주기가 시작될 때 월별 포함된 사용량이 다시 설정되기를 기다립니다. 

포함된 스토리지 사용량 또는 포함된 컴퓨팅 사용량을 모두 사용하고 결제 방법 및 지출 한도를 설정한 경우 개인 계정이 소유한 codespace를 추가로 사용하면 남은 할당량이 없는 사용 유형에 대한 요금이 부과됩니다. 포함된 할당량을 모두 사용할 때까지 다른 유형의 사용량에 대한 요금이 청구되지 않습니다.

### 유료 사용량에 대한 가격 책정

{% data variables.product.prodname_github_codespaces %} 인스턴스("codespace")는 컴퓨팅 시간이 활성 상태인 동안 및 codespace가 차지하는 디스크 공간의 양에 대한 요금이 발생합니다. 컴퓨팅 비용은 아래 표와 같이 codespace에 대해 선택한 머신 유형의 프로세서 코어 수에 비례합니다. 예를 들어 16코어 컴퓨터에서 1시간 동안 codespace를 사용하는 컴퓨팅 비용은 2코어 컴퓨터보다 8배 더 큽니다.

| 구성 요소           | 머신 형식 | 측정 단위 | 포함된 사용량 승수 | 가격 |
| ------------------- | ------------ | --------------- | ------------------------- | ----- |
| Codespaces 컴퓨팅  |  2 코어      | 1시간          | 2                         | $0.18 |
|                     |  4 코어      | 1시간          | 4                         | $0.36 |
|                     |  8 코어      | 1시간          | 8                         | $0.72 |
|                     |  16 코어     | 1시간          | 16                        | $1.44 |
|                     |  32 코어     | 1시간          | 32                        | $2.88 |
| Codespaces 스토리지  |  스토리지     | 1GB 월<sup>*</sup> | N/A                | $0.07 |

<sup>*</sup> GB 월 단위에 대한 자세한 내용은 아래의 "[스토리지 사용량 청구](#billing-for-storage-usage)"를 참조하세요.

codespace 사전 빌드를 사용하도록 설정하면 추가 요금이 발생합니다. 자세한 내용은 "[{% data variables.product.prodname_codespaces %} 사전 빌드에 대한 청구"를 참조하세요.](#billing-for-codespaces-prebuilds)

## {% data variables.product.prodname_github_codespaces %}에 대한 청구 정보

{% data variables.product.prodname_github_codespaces %}은(는) codespace에서 사용하는 컴퓨팅 시간 및 스토리지 공간의 양에 따라 USD(USD)로 청구됩니다. {% data reusables.codespaces.codespaces-monthly-billing %}

{% data variables.product.prodname_github_codespaces %}에 대한 청구는 계정의 기존 결제 방법과 영수증을 공유합니다. 자세한 내용은 "[구독 및 청구 날짜 보기"를 참조하세요](/articles/viewing-your-subscriptions-and-billing-date).

{% ifversion ghec %} Microsoft 기업계약 통해 {% data variables.product.prodname_enterprise %}을(를) 구매한 경우 엔터프라이즈 계정에 Azure 구독 ID를 연결하여 {% data variables.product.prodname_github_codespaces %} 사용량을 사용하도록 설정하고 비용을 지불할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 Azure 구독 연결](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)”을 참조하세요.
{% endif %}

### 컴퓨팅 사용량 청구
codespace의 컴퓨팅 사용량은 해당 codespace가 활성 상태인 시간에 codespace의 컴퓨터 유형에 대한 가격 책정 테이블의 승수를 곱한 시간입니다. 총 컴퓨팅 사용량은 특정 계정에 청구할 수 있는 모든 codespace에서 사용하는 시간을 합산하여 계산됩니다. 이러한 합계는 매시간 청구 서비스에 보고되며 매월 청구됩니다.

예를 들어 codespace가 1시간 15분 동안 활성화된 경우 컴퓨팅 비용은 컴퓨터 유형에 따라 결정되는 codespace의 시간당 비용이 1.25를 곱한 것입니다.

codespaces를 중지하여 컴퓨팅 사용을 제어할 수 있습니다. 자세한 내용은 "[codespace 중지 및 시작"을 참조하세요](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace). Codespace는 구성 가능한 비활성 기간 후에 자동으로 중지됩니다. 시간 제한 기간은 사용자 또는 조직 수준에서 구성할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 시간 제한 기간 설정](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)" 및 "[유휴 시간 제한 기간 제한"을](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period) 참조하세요.

### 스토리지 사용량에 대한 청구
{% data variables.product.prodname_github_codespaces %} 청구를 위해 스토리지는 계정의 모든 codespace 및 사전 빌드에서 사용하는 디스크 공간으로 구성됩니다. 여기에는 복제된 리포지토리, 구성 파일, codespace에 로드된 데이터(예: 리포지토리에서 실행되는 소프트웨어의 입력 또는 출력) 및 확장과 같은 codespace에서 사용하는 모든 파일이 포함됩니다. 스토리지는 포함된 사용 할당량이 소진되거나 지출 한도에 도달하여 차단된 사용량을 제외하고 활성 또는 비활성 상태인지 여부에 관계없이 모든 기존 codespace에 대해 요금이 청구됩니다. codespace에 대한 스토리지 청구는 삭제되면 종료됩니다.

{% note %}

**참고**: 

- 기본 개발 컨테이너 구성("[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)"참조)을 사용하는 경우 기본 컨테이너는 사용된 스토리지로 계산되지 않습니다. 다른 기본 이미지로 개발 컨테이너 구성을 사용하여 사용자 지정 컨테이너를 만들 때 컨테이너를 사용된 스토리지로 계산합니다.
- 기본 이미지에서 컨테이너를 다시 빌드하는 경우 기본 컨테이너는 사용된 스토리지로 계산되지 않습니다. 다른 기본 이미지의 경우 기본 컨테이너를 포함하여 codespace에서 사용하는 모든 스토리지가 사용된 스토리지로 계산됩니다.

{% endnote %}

Codespace 스토리지는 GB 개월 단위로 보고됩니다. 청구 월은 한 달의 고정일부터 다음 달의 같은 날까지 실행됩니다. 대부분의 경우 월의 날짜는 현재 {% data variables.product.prodname_dotcom %} 계획에서 시작한 날짜에 따라 결정됩니다. GB 월 스토리지는 다음과 같이 계산됩니다. 매시간 한 번씩 현재 활성 및 중지된 모든 codespace에서 사용하는 스토리지가 평가됩니다. 이 수치는 현재 청구 월 `total storage size / hours this month`의 시간()으로 나뉩니다. 결과는 해당 월의 codespace 스토리지에 대한 실행 합계에 추가됩니다.

예를 들어 100GB의 스토리지를 사용하고 1시간 동안 존재하는 하나의 codespace가 있는 경우 30일 달에 GB 개월의 스토리지를 사용 `100 / (24 * 30) = 0.1388` 하게 됩니다. 30일 동안 {% data variables.product.prodname_github_codespaces %}을(를) 사용하는 경우 둘 다 3일 동안 존재했던 100GB 코드스페이스 2개로 구성된 경우 이러한 codespace의 스토리지에 대한 시간별 보고서가 있으며 `24 * 3` 총 `(24 * 3) * 200 / (24 * 30) = 20` GB 개월을 제공합니다.

각 시간별 보고서에 대해 이전 시간의 스토리지 사용량은 초 단위로 계산됩니다. 따라서 codespace가 전체 60분 동안 존재하지 않는 경우 전체 스토리지 시간 동안 요금이 청구되지 않습니다. 월말에 {% data variables.product.prodname_dotcom %}는 스토리지를 가장 가까운 MB로 올림합니다.

조직 소유자는 다음을 수행할 수 있습니다.
- 조직의 현재 활성 및 중지된 codespace를 나열합니다. 자세한 내용은 "[조직의 codespace 나열"을 참조하세요](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization). 이러한 codespace의 비용 외에도 현재 월의 {% data variables.product.prodname_github_codespaces %}의 비용에는 현재 달 초에 존재했지만 이후 삭제된 codespace에 대한 비용이 포함될 수 있습니다. 
- 현재까지 조직의 총 {% 데이터 variables.product.prodname_github_codespaces %} 컴퓨팅 및 스토리지 사용량을 참조하세요. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 사용량 보기](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”를 참조하세요.
- {% data variables.product.prodname_github_codespaces %}의 비용을 관리하도록 조직 설정을 구성합니다. 자세한 내용은 "[조직에서 {% data variables.product.prodname_github_codespaces %}의 비용 관리"를 참조하세요](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization).

요금제 서비스에 대한 비용을 예측하려면 {% data variables.product.prodname_dotcom %} [가격 계산기를](https://github.com/pricing/calculator?feature=codespaces) 사용할 수 있습니다.

### {% data variables.product.prodname_codespaces %} 사전 빌드 요금 청구

{% data reusables.codespaces.prebuilds-definition %} 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %} 사전 빌드 정보"를 참조하세요.](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)

#### 사전 빌드에 대한 {% 데이터 variables.product.prodname_actions %} 비용

{% data variables.product.prodname_dotcom %}호스팅 실행기에서 {% data variables.product.prodname_actions %} 워크플로를 실행하여 사전 빌드를 만들고 업데이트합니다. 사전 빌드 업데이트를 자동으로 트리거하는 방법을 구성할 수 있습니다. 자세한 내용은 "[사전 빌드 구성"을 참조하세요.](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)

다른 워크플로와 마찬가지로 사전 빌드 워크플로가 실행되는 동안 계정에 포함된 {% 데이터 variables.product.prodname_actions %} 분이 사용되거나 {% data variables.product.prodname_actions %} 분 요금이 부과됩니다. {% data variables.product.prodname_actions %} 분 가격 책정에 대한 자세한 내용은 "[{% data variables.product.prodname_actions %}에 대한 청구 정보"를 참조하세요](/billing/managing-billing-for-github-actions/about-billing-for-github-actions). 사전 빌드를 만들거나 업데이트하기 위한 연결된 {% 데이터 variables.product.prodname_codespaces %} 컴퓨팅 비용이 없습니다.

계정에 대한 사용 보고서를 다운로드하여 사전 빌드 워크플로 및 스토리지의 사용량을 추적할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 사용량 보기](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”를 참조하세요.

#### 사전 빌드에 대한 스토리지 비용

{% data variables.product.prodname_actions %} 분 외에도 지정된 리포지토리 및 지역에 대해 각 사전 빌드 구성과 연결된 사전 빌드 스토리지에 대한 요금이 청구됩니다. 사전 빌드의 스토리지는 codespace의 스토리지와 동일한 요율로 청구됩니다.

단일 지역의 사전 빌드에 대한 스토리지 비용은 해당 사전 빌드에서 만든 단일 codespace를 저장하는 데 발생하는 스토리지 비용과 비슷합니다. 생성된 codespace의 스토리지 비용은 예를 들어 `updateContentCommand` codespace를 만드는 동안 및 `postCreateCommand` 명령을 사용하여 개발 컨테이너에 더 많은 파일을 다운로드하는 경우 사전 빌드 비용보다 많을 수 있습니다.

사전 빌드 구성과 관련된 총 스토리지 비용은 다음 요인에 따라 달라집니다.

- GB당 스토리지 가격입니다. 위의 표를 참조하세요.
- 생성된 사전 빌드의 크기(GB)입니다.
- 사전 빌드의 복사본이 각 지역에 저장되므로 사전 빌드를 사용할 수 있는 지역 수입니다.
- 보존되는 사전 빌드의 이전 버전 수입니다.

따라서 사전 빌드 구성에서 생성된 사전 빌드의 스토리지 비용은 로 `price per GB * size (GB) * regions * versions`계산됩니다.

#### 사전 빌드 비용 제어

작업 시간(분)의 소비를 줄이기 위해 개발 컨테이너 구성 파일을 변경할 때만 또는 사용자 지정 일정에 따라 사전 빌드를 업데이트하도록 설정할 수 있습니다. 보존되는 각 사전 빌드의 이전 버전 수를 조정하여 스토리지 사용량을 관리할 수도 있습니다. 자세한 내용은 “[사전 빌드 구성](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”을 참조하세요.

사전 빌드와 관련된 스토리지 비용을 제한하려면 선택한 지역에서만 사전 빌드를 만들도록 선택할 수 있으며 보존할 이전 버전의 사전 빌드 수를 지정할 수 있습니다. 자세한 내용은 “[사전 빌드 구성](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”을 참조하세요.

{% note %}

**참고**: 사전 빌드는 청구 월 동안 여러 번 업데이트될 수 있습니다. 최신 버전의 사전 빌드는 이전 버전보다 크거나 작을 수 있습니다. 이는 스토리지 요금에 영향을 줍니다. 청구 월 동안 스토리지를 계산하는 방법에 대한 자세한 내용은 위의 "[스토리지 사용량 청구"를](#billing-for-storage-usage) 참조하세요.

{% endnote %}

#### 사전 빌드에서 만든 codespace 비용

사전 빌드를 사용하여 만든 codespace의 사용은 일반 codespace와 동일한 요금으로 청구됩니다.

## 지출 한도 설정

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

계정의 지출 한도를 관리하고 변경하는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 관리"를 참조하세요](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces).

{% data reusables.codespaces.exporting-changes %}

## 조직 소유 codespaces에 대한 컴퓨터 유형 제한

기본적으로 codespace를 만들 때 유효한 리소스가 가장 낮은 머신 유형이 사용됩니다. 그러나 사용자는 더 많은 리소스가 있는 머신 유형을 선택할 수 있습니다. codespace를 만들 때 이 작업을 수행하거나 기존 Visual Studio codespace의 머신 유형을 변경할 수 있습니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)" 및 "[codespace에 대한 컴퓨터 유형 변경"을 참조하세요](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace).

더 많은 리소스가 있는 컴퓨터 유형을 선택하는 경우 위에 표시된 것처럼 해당 codespace에 대한 시간당 요금에 영향을 줍니다. 

조직 소유자는 조직 또는 엔터프라이즈 계정에 청구되는 codespace에 대해 사용자가 사용할 수 있는 컴퓨터 유형의 선택을 제한하는 정책을 만들 수 있습니다. 자세한 내용은 “[머신 유형에 대한 액세스 제한](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”을 참조하세요.

## 포크된 리포지토리에 대한 청구 처리 방법

업스트림(또는 부모) 리포지토리가 조직의 구성원 또는 외부 협력자로서 조직의 비용으로 codespace를 사용할 수 있도록 허용한 조직에 있지 않은 한 포크된 리포지토리에서 만든 codespace 사용은 개인 계정에 청구됩니다.

예를 들어 해당 사용자에 대한 codespace에 대한 청구를 허용한 조직의 구성원 또는 외부 협력자를 고려합니다. 사용자가 조직 소유의 프라이빗 리포지토리를 포크할 수 있는 권한이 있는 경우 이후에 조직의 비용으로 새 리포지토리에 대한 codespace를 만들고 사용할 수 있습니다. 이는 조직이 부모 리포지토리의 소유자이기 때문입니다. 조직 소유자는 프라이빗 리포지토리, 포크된 리포지토리 및 codespace에 대한 사용자의 액세스를 제거할 수 있습니다. 조직 소유자는 포크된 리포지토리도 삭제하는 부모 리포지토리를 삭제할 수도 있습니다. 자세한 내용은 “[리포지토리의 포크 정책 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)”를 참조하세요.

{% data reusables.codespaces.codespaces-disabling-org-billing %}

## 리포지토리가 다른 조직으로 전송될 때 청구가 처리되는 방법

사용량은 매시간 계산됩니다. 조직은 조직이 소유한 리포지토리에서 만든 codespace의 사용량에 대해 비용을 지불하며, 여기서 조직 설정은 조직의 요금을 청구할 수 있도록 허용합니다. 자세한 내용은 “[조직에 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)”을 참조하세요. 리포지토리가 조직에서 이전되면 해당 리포지토리와 연결된 모든 codespace에 대한 소유권 및 청구 책임이 그에 따라 변경됩니다.

## 사용자가 제거될 때 발생하는 동작

사용자가 조직 또는 리포지토리에서 제거되면 해당 codespace가 자동으로 삭제됩니다. 
