---
title: 조직에 청구 관리자 추가
intro: 청구 관리자는 결제 정보 업데이트와 같은 조직의 청구 설정을 관리하는 사용자입니다. 이는 조직의 일반 구성원이 청구 리소스에 액세스할 수 없는 경우에 유용한 옵션입니다.
redirect_from:
  - /articles/adding-a-billing-manager-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-a-billing-manager-to-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Billing
shortTitle: Add a billing manager
ms.openlocfilehash: f7b4e6d17ff0e6680fdf9509b467f314b1a9e4ec
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119228'
---
조직의 소유자 팀 구성원은 사용자에게 청구 관리자 권한을 부여할 수 있습니다. 조직의 청구 관리자가 되어 달라는 초대를 수락한 사용자는 추가 사용자를 청구 관리자로 초대할 수 있습니다.

{% note %}

**참고:** 청구 관리자는 조직의 구독에서 유료 라이선스를 사용하지 않습니다.

{% endnote %}

## 청구 관리자의 권한

청구 관리자는 다음을 수행할 수 있습니다.

- 계정 업그레이드 또는 다운그레이드
- 결제 방법 업데이트, 변경 또는 제거
- 결제 기록 보기
- 영수증 다운로드
- 청구 관리자 보기, 초대 및 제거
- 스폰서쉽 시작, 수정 또는 취소

또한 모든 청구 관리자는 조직의 청구 날짜에 이메일로 청구 영수증을 받게 됩니다.

청구 관리자는 다음을 수행할 수 **없습니다**.

- 조직에서 리포지토리 만들기 또는 액세스
- 조직의 비공개 구성원 확인
- 조직 구성원 목록에 표시
- {% data variables.product.prodname_marketplace %} 앱에 대한 구독 구매, 편집 또는 취소

{% tip %}

**팁:**  조직에서 [구성원, 청구 관리자 및 외부 협력자에게 2단계 인증을 사용하도록 요구하는 경우](/articles/requiring-two-factor-authentication-in-your-organization), 사용자는 2단계 인증을 사용하도록 설정해야 초대를 수락하여 조직의 청구 관리자가 될 수 있습니다.

{% endtip %}

## 청구 관리자 초대

{% ifversion ghec %} {% note %}

**참고:** 엔터프라이즈 계정에서 조직을 소유한 경우 조직 수준에서 청구 관리자를 초대할 수 없습니다. 자세한 내용은 “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”를 참조하세요.

{% endnote %} {% endif %}

초대된 사용자는 조직의 청구 관리자가 되어 달라고 요청하는 초대 이메일을 받게 됩니다. 초대 이메일에 있는 수락 링크를 클릭하면 초대된 사용자는 자동으로 청구 관리자로 조직에 추가됩니다. 아직 GitHub 계정이 없다면 계정을 등록하라는 메시지가 표시되고, 계정을 만들면 자동으로 청구 관리자로 조직에 추가됩니다.

{% data reusables.organizations.billing-settings %}
1. "청구 관리"의 "청구 관리자" 옆에 있는 **추가** 를 클릭합니다.
  ![청구 관리자 초대](/assets/images/help/billing/settings_billing_managers_list.png)
6. 추가할 구성원의 사용자 이름 또는 이메일 주소를 입력하고 **초대 보내기** 를 클릭합니다.
  ![청구 관리자 초대 페이지](/assets/images/help/billing/billing_manager_invite.png)

## 추가 참고 자료

- {% data variables.product.prodname_ghe_cloud %} 설명서의 "[엔터프라이즈를 관리하도록 초대](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)"{% ifversion fpt %}{% endif %}
