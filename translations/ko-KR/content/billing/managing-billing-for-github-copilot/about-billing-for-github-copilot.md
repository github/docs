---
title: GitHub Copilot 청구 정보
intro: '{% data variables.product.prodname_copilot %}을(를) 사용하려면 개인 계정에서 {% data variables.product.prodname_copilot_for_individuals %}에 대한 구독이 필요하거나 {% data variables.product.prodname_ghe_cloud %}의 조직에서 {% data variables.product.prodname_copilot_for_business %}에 대한 구독이 있는 좌석을 할당해야 합니다.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Billing for GitHub Copilot
ms.openlocfilehash: f82f284ac2bdb8a4bc56587ff17826ae7ca96585
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193437'
---
## {% data variables.product.prodname_copilot %} 청구 정보

{% data variables.product.prodname_copilot %}를 사용하려면 {% data variables.product.prodname_dotcom %} 개인 계정에 대한 구독이 필요하거나 {% data variables.product.prodname_ghe_cloud %} 구독이 있는 {% data variables.product.prodname_copilot_business_short variables.product.prodname_ghe_cloud %} 조직의 구성원인 경우 조직 관리자가 좌석을 할당해야 합니다. {% data variables.product.prodname_copilot %}에 대한 자세한 내용은 "[{% data variables.product.prodname_copilot %}](/en/copilot/overview-of-github-copilot/about-github-copilot)정보"를 참조하세요. 

{% data variables.product.prodname_ghe_cloud %}를 통해 {% data variables.product.prodname_copilot %}를 관리하는 방법에 대한 자세한 내용은 "[엔터프라이즈에서 {% data variables.product.prodname_copilot %}에 대한 정책 적용](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise){% ifversion ghec %}을(를) 참조하세요. {% data variables.product.prodname_ghe_cloud %} 설명서의 {% endif %}"{% ifversion fpt %} {% endif %}

개인 계정에 대한 유료 구독을 시작하기 전에 {% data variables.product.prodname_copilot %}을 평가하도록 1회 60일 평가판을 설정할 수 있습니다. 평가판을 시작하려면 월별 또는 연간 청구 주기를 선택하고 결제 방법을 제공해야 합니다. 60일이 끝나기 전에 평가판을 취소하지 않으면 평가판이 자동으로 유료 구독으로 변환됩니다. 60일 동안 언제든지 {% data variables.product.prodname_copilot %} 평가판을 취소할 수 있으며 요금은 청구되지 않습니다. 평가판이 끝나기 전에 취소하는 경우 60일 평가 기간이 끝날 때까지 {% data variables.product.prodname_copilot %}에 계속 액세스할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_copilot_for_individuals %} 구독 관리"를 참조하세요](/en/billing/managing-billing-for-github-copilot/managing-your-github-copilot-for-individuals-subscription).

## {% data variables.product.prodname_copilot_for_individuals %}에 대한 가격 책정


{% data variables.product.prodname_copilot %} 구독은 월별 또는 연간 주기로 사용할 수 있습니다. 월별 청구 주기를 선택하면 월별 $10의 요금이 청구됩니다. 연간 청구 주기를 선택하면 연간 $100의 요금이 청구됩니다. 언제든지 청구 주기를 수정할 수 있으며, 수정 사항은 다음 청구 주기가 시작될 때 반영됩니다.

활성 {% data variables.product.prodname_copilot %} 구독이 있고 {% data variables.product.prodname_ghe_cloud %}에서 {% data variables.product.prodname_copilot_for_business %} 구독의 일부로 좌석이 할당되면 개인 {% data variables.product.prodname_copilot %} 구독이 자동으로 취소됩니다. 개인 구독의 현재 청구 주기의 나머지 부분에 대해 비례 배분된 환불을 받게 됩니다. 그러면 엔터프라이즈 또는 조직 수준에서 설정된 정책에 따라 {% data variables.product.prodname_copilot %}을(를) 계속 사용할 수 있습니다.

{% data variables.product.prodname_copilot %}에 대한 무료 구독은 {% data variables.product.company_short %}에서 인기 있는 오픈 소스 리포지토리의 확인된 학생, 교사 및 유지 관리자에게 제공됩니다. 오픈 소스 유지 관리자를 위한 조건을 충족하는 경우 {% data variables.product.prodname_copilot %} 구독 페이지를 방문하면 자동으로 알림이 표시됩니다. 학생 자격으로 현재 {% data variables.product.prodname_student_pack %}을 받으면 {% data variables.product.prodname_copilot %} 구독 페이지를 방문할 때 무료 구독도 제공됩니다. {% data variables.product.prodname_student_pack %}에 대한 자세한 내용은 “[학생으로 {% data variables.product.prodname_global_campus %}에 신청](/free-pro-team@latest/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)”을 참조하세요.

{% ifversion ghec %}
## {% data variables.product.prodname_copilot_for_business %}에 대한 가격 책정

{% data variables.product.prodname_copilot_for_business %} 구독은 월별 주기에 사용할 수 있으며 매월 사용자당 $19의 요금이 청구됩니다. {% data variables.product.prodname_ghe_cloud %}의 {% data variables.product.prodname_copilot %}에 대한 청구는 각 청구 주기가 끝날 때 처리됩니다. 

청구된 사용자는 청구 주기의 시작 부분에 할당되거나 청구 주기 동안 할당된 {% 데이터 variables.product.prodname_copilot %} 사용자 수를 기준으로 계산됩니다. 청구 주기를 통해 부분적으로 할당된 모든 좌석은 주기에 남은 일 수에 따라 비례 배분됩니다. 청구 주기 동안 제거된 모든 좌석 할당은 다음 주기의 시작부터 적용됩니다.

{% data variables.product.prodname_ghe_cloud %}의 {% data variables.product.prodname_copilot %}에 대한 사용자 할당은 엔터프라이즈 수준에서 {% data variables.product.prodname_copilot %}에 대한 액세스 권한이 부여된 조직의 관리자가 관리합니다. 동일한 엔터프라이즈에 있는 여러 조직의 구성원인 경우 둘 이상의 조직에서 {% data variables.product.prodname_copilot %} 좌석을 할당받을 수 있지만 엔터프라이즈는 한 번만 청구됩니다. 자세한 내용은 "[조직에서 {% data variables.product.prodname_copilot %} 설정 구성"을 참조하세요](/enterprise-cloud@latest/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization).

{% data variables.product.prodname_ghe_cloud %}의 {% data variables.product.prodname_copilot %}에 대한 정책 설정 및 사용 개요는 엔터프라이즈 수준에서 사용할 수 있습니다. 자세한 내용은 "[엔터프라이즈에서 {% data variables.product.prodname_copilot %}에 대한 정책 적용](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)" 및 "[{% data variables.product.prodname_copilot %} 사용량 보기"를 참조하세요](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage).

{% endif %}
