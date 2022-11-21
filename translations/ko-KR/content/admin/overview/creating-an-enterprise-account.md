---
title: 엔터프라이즈 계정 만들기
intro: '현재 단일 조직에서 {% data variables.product.prodname_ghe_cloud %}를 사용하는 경우 엔터프라이즈 계정을 만들어 여러 조직을 중앙에서 관리할 수 있습니다.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners can create an enterprise account.
shortTitle: Create enterprise account
ms.openlocfilehash: a264a5a1ca3e7461c8e05fc02e93064737d79940
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573403'
---
## 엔터프라이즈 계정 만들기 정보

{% data variables.product.prodname_ghe_cloud %}에는 여러 조직 간 협업을 가능하게 하고 관리자에게 단일 표시 여부 및 관리 지점을 제공하는 엔터프라이즈 계정을 만드는 옵션이 포함되어 있습니다. 자세한 내용은 “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”를 참조하세요.

{% data reusables.enterprise.create-an-enterprise-account %} 청구서로 결제하는 경우 {% data variables.product.prodname_dotcom %}에서 직접 엔터프라이즈 계정을 만들 수 있습니다. 그렇지 않은 경우 [영업 팀에 문의](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards)하여 엔터프라이즈 계정을 만들 수 있습니다.

엔터프라이즈 계정은 {% data variables.product.prodname_ghe_cloud %}에 포함됩니다. 엔터프라이즈 계정을 만들어도 청구서에 추가 요금이 부과되지 않습니다.

{% data variables.product.product_name %}에서 기존 조직을 소유하는 엔터프라이즈 계정을 만들 때 동일한 URL의 구성원은 조직의 리소스에 계속 액세스할 수 있습니다. 엔터프라이즈 계정에 조직을 추가한 후에는 조직에 다음과 같은 변경 내용이 적용됩니다.

- 기존 조직이 자동으로 엔터프라이즈 계정의 소유가 됩니다.
- {% data variables.product.company_short %}는 엔터프라이즈가 소유한 모든 조직 내의 사용량에 대해 엔터프라이즈 계정에 요금을 청구합니다. 조직의 청구 메일 주소를 포함한 조직의 현재 청구 세부 정보는 새 엔터프라이즈 계정의 청구 세부 정보가 됩니다. 자세한 내용은 “[엔터프라이즈에 대한 청구 정보](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”를 참조하세요.
- 조직의 모든 현재 소유자는 엔터프라이즈 계정의 소유자가 되며 조직의 모든 현재 청구 관리자는 새 엔터프라이즈 계정의 청구 관리자가 됩니다. 자세한 내용은 “[엔터프라이즈의 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”을 참조하세요.

엔터프라이즈에 조직을 추가한 후 조직에 적용되는 변경에 대한 자세한 내용은 “[엔터프라이즈에 조직 추가](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account)”를 참조하세요.

## {% data variables.product.prodname_dotcom %}에 엔터프라이즈 계정 만들기

엔터프라이즈 계정을 만들려면 조직이 {% data variables.product.prodname_ghe_cloud %}를 사용 중이어야 합니다.

청구서로 지불하는 경우 {% data variables.product.prodname_dotcom %}를 통해 직접 엔터프라이즈 계정을 만들 수 있습니다. 현재 청구서로 지불하지 않는 경우 [영업 팀에 문의](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards)하여 엔터프라이즈 계정을 만들 수 있습니다.


{% data reusables.organizations.billing-settings %}
1. **엔터프라이즈 계정으로 업그레이드** 를 클릭합니다.

   ![“엔터프라이즈 계정으로 업그레이드” 단추의 스크린샷](/assets/images/help/business-accounts/upgrade-to-enterprise-account.png)
1. “엔터프라이즈 이름”에서 엔터프라이즈 계정의 이름을 입력합니다.

   ![“엔터프라이즈 이름” 필드의 스크린샷](/assets/images/help/business-accounts/enterprise-name-field.png)
1. “엔터프라이즈 URL 슬러그”에서 엔터프라이즈 계정의 슬러그를 입력합니다. 해당 슬러그는 엔터프라이즈의 URL에 사용됩니다. 예를 들어 `octo-enterprise`를 선택하면 엔터프라이즈의 URL은 `https://github.com/enterprises/octo-enterprise`가 됩니다.

   ![“엔터프라이즈 URL 슬러그” 필드의 스크린샷](/assets/images/help/business-accounts/enterprise-slug-field.png)
1. **확인 및 업그레이드** 를 클릭합니다.

   ![“확인 및 업그레이드” 단추의 스크린샷](/assets/images/help/business-accounts/confirm-and-upgrade-button.png)
1. 경고를 읽은 다음 **엔터프라이즈 계정 만들기** 를 클릭합니다.

   ![“엔터프라이즈 계정 만들기” 단추의 스크린샷](/assets/images/help/business-accounts/create-enterprise-account-button.png)

## 다음 단계

엔터프라이즈 계정을 만든 후에는 엔터프라이즈 계정이 작동하는 방식에 대해 자세히 알아보고 설정 및 정책을 구성하는 것이 좋습니다. 자세한 내용은 “[엔터프라이즈 계정 시작하기](/admin/guides#get-started-with-your-enterprise-account)” 학습 경로를 따르세요.
