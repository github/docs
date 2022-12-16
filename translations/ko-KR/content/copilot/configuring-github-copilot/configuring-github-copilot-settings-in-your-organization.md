---
title: 조직에서 GitHub Copilot 설정 구성
intro: '개인 및 팀에 대한 액세스 권한 부여 및 취소, 공개 코드와 일치하는 제안을 차단할지 여부를 결정하는 등 조직에서 {% data variables.product.prodname_copilot %}을(를) 구성할 수 있습니다.'
product: '{% data reusables.gated-features.copilot %}'
miniTocMaxHeadingLevel: 3
permissions: 'Organization owners and members with admin permissions can configure {% data variables.product.prodname_copilot %} in their organization.'
versions:
  ghec: '*'
topics:
  - Copilot
shortTitle: Organization settings
ms.openlocfilehash: 345d0a48aa3f48e453fd8455027f683ee78a7640
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193566'
---
## 조직의 {% data variables.product.prodname_copilot %} 설정 정보

{% data reusables.copilot.about-copilot %}

조직에서 {% data variables.product.prodname_copilot %} 사용을 구성하려면 조직이 {% data variables.product.prodname_ghe_cloud %} 계정으로 소유되어야 하며 엔터프라이즈 관리자는 먼저 조직에 대해 {% data variables.product.prodname_copilot_business_short %}를 사용하도록 설정해야 합니다. 그러면 조직 관리자는 조직 내에서 사용자 할당을 관리할 수 있습니다. 

엔터프라이즈 수준에서 구성된 정책 설정에 따라 조직 관리자는 공용 코드와 일치하는 {% data variables.product.prodname_copilot %} 제안을 허용할지 아니면 차단할지 결정할 수도 있습니다. 자세한 내용은 "[엔터프라이즈에서 {% data variables.product.prodname_copilot %}에 대한 정책 적용"을 참조하세요](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise).

## 조직에서 {% data variables.product.prodname_copilot %}에 대한 액세스 구성

{% data variables.product.prodname_ghe_cloud %} 관리자가 조직에서 {% data variables.product.prodname_copilot_business_short %} 구독을 사용하도록 설정하면 조직의 개인 및 팀에 {% 데이터 variables.product.prodname_copilot %} 좌석을 할당할 수 있습니다.

### 조직의 모든 현재 및 미래 사용자에 대해 {% data variables.product.prodname_copilot %}에 대한 액세스 사용

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 사이드바의 "코드 계획 및 자동화" 섹션에서 **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}****을 클릭한** 다음 액세스를 클릭합니다.
1. "사용자 권한"에서 조직의 모든 현재 및 미래 사용자에 대해 {% data variables.product.prodname_copilot %}를 사용하도록 설정하려면 **모든 멤버에 대해 허용을** 선택합니다.

   ![{% data variables.product.prodname_copilot %} 사용자 권한 스크린샷](/assets/images/help/copilot/allow-all-members.png)

1. "사용자 할당 확인" 대화 상자에서 조직의 모든 현재 및 미래 사용자에 대해 {% data variables.product.prodname_copilot %}을(를) 사용하도록 설정하려는지 **확인하려면 확인을** 클릭합니다.

   ![좌석 배정 확인 대화 상자의 스크린샷](/assets/images/help/copilot/confirm-seat-assignment.png)

1. 변경 내용을 저장하려면 **Save**(저장)를 클릭합니다.

   ![{% data variables.product.prodname_copilot %} 사용자 권한 저장 단추 스크린샷](/assets/images/help/copilot/user-permissions-save.png)

### 조직의 특정 사용자에 대해 {% data variables.product.prodname_copilot %}에 대한 액세스 사용

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 사이드바의 "코드 계획 및 자동화" 섹션에서 **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}****을 클릭한** 다음 액세스를 클릭합니다.
1. "사용자 권한"에서 조직에서 선택한 팀 또는 사용자에 대해 {% data variables.product.prodname_copilot %}를 사용하도록 설정하려면 **선택한 팀/사용자를** 선택하고 **저장** 을 클릭합니다.

   ![{% data variables.product.prodname_copilot %} 선택한 사용자/팀 권한 스크린샷](/assets/images/help/copilot/selected-users-teams.png)

1. **모든 구성원에 대해 허용** 설정에서 사용자 액세스를 업데이트하는 경우 "좌석 할당 확인" 대화 상자에서 액세스 할당을 시작하는 방법을 선택합니다.
    - 모든 멤버의 할당을 취소한 다음 액세스 권한이 있어야 하는 구성원을 선택하려면 **처음부터 시작을** 선택합니다.
    - 현재 액세스 권한이 있는 모든 멤버를 유지하고 액세스 권한이 없어야 하는 구성원을 선택하려면 **모든 사용자 유지** 를 선택합니다.

      ![좌석 배정 확인 대화 상자의 스크린샷](/assets/images/help/copilot/confirm-seat-assignment-selected.png)

1. **처음부터 시작을** 선택한 경우 **사용자 추가** 또는 **팀 추가** 를 클릭하여 개별 사용자 또는 전체 팀을 추가합니다.

   ![사용자 추가 또는 팀 추가 단추의 스크린샷](/assets/images/help/copilot/add-people-add-teams.png)

1. **사용자 추가** 를 선택한 경우 "선택한 조직 구성원에 대해 GitHub Copilot 액세스 사용" 대화 상자에서 개별 멤버를 검색하거나 CSV 파일을 업로드하여 멤버를 대량으로 추가할 수 있습니다.
 
   ![선택한 멤버에 대한 액세스 사용 대화 상자의 스크린샷](/assets/images/help/copilot/enable-access-for-selected-members.png)

    - 구성원을 검색하려면 검색 창에 멤버의 사용자 이름, 전체 이름 또는 전자 메일 주소를 입력합니다.
    - 멤버를 대량으로 추가하려면 **CSV 업로드** 를 클릭한 다음 추가하려는 각 멤버의 사용자 이름 또는 이메일 주소를 포함하여 CSV 파일을 쉼표로 구분하여 업로드합니다.

        {% warning %}

      **경고:** CSV 파일을 업로드할 때 {% data variables.product.prodname_copilot %}는 {% data variables.product.prodname_dotcom_the_website %}의 모든 사용자를 검색하여 일치 항목을 검색합니다. CSV에 조직의 구성원이 아닌 사용자가 포함된 경우 **XX 멤버 추가** 를 클릭하면 조직에 참여하도록 초대됩니다.

      {% endwarning %}

    - CSV 파일에서 생성된 사용자 목록을 검토합니다. 나열된 사용자에게 액세스 권한을 부여할 것인지 확인하려면 **XX 멤버 추가를 클릭하여 목록에 액세스하거나 목록을** 거부하려면 **취소** 를 클릭합니다.

     ![csv 목록 결과의 스크린샷](/assets/images/help/copilot/csv-results.png)

1. **팀 추가** 를 선택한 경우 "선택한 조직 팀에 GitHub Copilot 액세스 사용" 대화 상자에서 검색 창에 팀 이름을 입력하기 시작하고 추가하려는 팀을 선택하고 **위의 팀 선택을** 클릭합니다.

   ![선택한 팀에 대한 액세스 사용 대화 상자의 스크린샷](/assets/images/help/copilot/add-teams.png)

1. **모든 사용자 유지** 를 선택한 경우 조직 구성원의 전체 목록을 검토하고 취소할 {% data variables.product.prodname_copilot %} 액세스 권한이 있는 개인을 선택합니다.

   ![모든 사용자 유지 목록의 스크린샷](/assets/images/help/copilot/access-removal-list.png)

1. **선택한 XX 멤버** 드롭다운을 클릭한 다음 **제거** 를 클릭합니다.

   ![액세스 제거 단추의 스크린샷](/assets/images/help/copilot/remove-access.png)

### 전체 조직에 대해 {% data variables.product.prodname_copilot %}에 대한 액세스 비활성화

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 사이드바의 "코드 계획 및 자동화" 섹션에서 **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}****을 클릭한** 다음 액세스를 클릭합니다.
1. "사용자 권한"에서 조직의 모든 사용자에 대해 {% data variables.product.prodname_copilot %}을(를) 사용하지 않도록 설정하려면 **사용 안** 함을 선택합니다.

   ![{% data variables.product.prodname_copilot %} 사용 안 함 사용자 권한 스크린샷](/assets/images/help/copilot/disable-access.png)

1. 변경 내용을 저장하려면 **Save**(저장)를 클릭합니다.
   
   ![{% data variables.product.prodname_copilot %} 사용자 권한 저장 단추 스크린샷](/assets/images/help/copilot/save-disabled.png)

### 조직의 특정 사용자에 대해 {% data variables.product.prodname_copilot %}에 대한 액세스 사용 안 함

{% data variables.product.prodname_copilot %} 좌석을 할당한 조직에서 사용자를 제거하면 해당 사용자의 좌석이 자동으로 할당 취소됩니다. 또는 멤버 자격을 유지하면서 구성원의 {% 데이터 variables.product.prodname_copilot %} 좌석의 할당을 취소할 수 있습니다. 이러한 변경 내용은 다음 청구 주기의 시작부터 적용됩니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 사이드바의 "코드 계획 및 자동화" 섹션에서 **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}****을 클릭한** 다음 액세스를 클릭합니다.
1. "사용자 권한"에서 **선택한 팀/사용자를 선택한** 다음 **저장** 을 클릭합니다. 

   ![{% data variables.product.prodname_copilot %} 선택한 사용자/팀 권한 스크린샷](/assets/images/help/copilot/selected-users-teams.png)

    - "좌석 할당 확인" 팝업 대화 상자에서 **모든 사용자 유지** 를 선택합니다.

      ![좌석 배정 확인 대화 상자의 스크린샷](/assets/images/help/copilot/confirm-seat-assignment-selected.png)
  
1. 검색 창의 "액세스 관리"에서 멤버의 사용자 이름, 전체 이름 또는 전자 메일 주소를 입력합니다.

   ![검색 창의 스크린샷](/assets/images/help/copilot/manage-access-search.png)

1. {% data variables.product.prodname_copilot %}에 액세스할 수 있는 사용자 목록에서 멤버를 제거하려면 **제거** 를 클릭합니다.

   ![액세스 제거 단추의 스크린샷](/assets/images/help/copilot/remove-access-button.png)

## 조직에서 {% data variables.product.prodname_copilot %}에 대한 제안 일치 정책 구성

{% data variables.product.prodname_copilot %}에는 {% data variables.product.prodname_dotcom %}에서 퍼블릭 코드와 일치하는 코드 제안을 검색하는 필터가 포함되어 있습니다. 필터를 사용하도록 설정하면 {% data variables.product.prodname_copilot %}은 {% data variables.product.prodname_dotcom %}의 퍼블릭 코드에 대해 약 150자의 주변 코드로 코드 제안을 확인합니다. 일치하거나 거의 일치하는 경우 제안이 표시되지 않습니다.

엔터프라이즈 관리자가 엔터프라이즈 수준에서 제안 일치를 위해 **정책 없음(각 조직에서 결정하도록 허용)** 을 선택한 경우 조직에 대한 제안 일치 정책을 설정할 수 있습니다. 조직 구성원이 동일한 엔터프라이즈에서 서로 다른 제안 일치 정책을 가진 여러 조직에서 좌석을 할당받은 경우 {% data variables.product.prodname_copilot %}에서 가장 제한적인 정책을 사용합니다.


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 사이드바의 "코드 계획 및 자동화" 섹션에서 **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}****을 클릭한** 다음 정책을 클릭합니다.
1. "공용 코드와 일치하는 제안" 드롭다운에서 **허용** 또는 **차단** 을 선택하여 공용 코드와 일치하는 제안을 허용하거나 차단합니다.

   ![공용 코드 드롭다운과 일치하는 제안 스크린샷](/assets/images/help/copilot/duplication-detection-org-policy.png)

## 추가 정보

- "[{% data variables.product.prodname_copilot_for_business %} 개인정보처리방침](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)"
