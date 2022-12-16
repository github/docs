---
title: GitHub Enterprise의 라이선스 사용량 문제 해결
intro: 라이선스 보고서를 감사하여 엔터프라이즈의 라이선스 사용량 문제를 해결할 수 있습니다.
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Troubleshoot license usage
ms.openlocfilehash: 8595aaad929e534ebbd474270f3e01f87113b5ec
ms.sourcegitcommit: aded2711e14a0c2473049d3d7e05c82a74e4c634
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179943'
---
## 예기치 않은 라이선스 사용량 정보

엔터프라이즈에 대해 사용된 라이선스 수가 예상과 다른 경우 사용된 라이선스 보고서를 검토하여 모든 엔터프라이즈 배포 및 구독의 라이선스 사용량을 감사할 수 있습니다. 자세한 내용은 “[GitHub Enterprise의 라이선스 사용량 보기](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)” 및 “[엔터프라이즈 계정의 구독 및 사용량 보기](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)”를 참조하세요.

오류가 발견되면 문제 해결 단계를 시도할 수 있습니다.

개인 정보 보호를 위해 엔터프라이즈 소유자는 {% data variables.product.prodname_emus %}를 사용하지 않는 한 사용자 계정의 세부 정보에 직접 액세스할 수 없습니다.

## 사용된 라이선스 계산 정보

사용자가 다음 조건 중 하나 이상을 충족하는 경우 {% data variables.product.company_short %}은(는) 사용자에게 요금을 청구합니다.

- 사용자는 {% data variables.product.prodname_ghe_server %}의 배포를 활용합니다.
- 사용자는 {% data variables.product.prodname_ghe_cloud %}에 있는 조직 중 하나의 구성원입니다.
- 사용자는 조직의 프라이빗 리포지토리 중 하나에 대한 쓰기 권한이 있습니다.
- 사용자는 {% data variables.visual_studio.prodname_vs_subscriber %}입니다.

이러한 역할에 대한 초대는 초대가 수락되거나 만료될 때까지 라이선스를 사용합니다. 라이선스를 사용하는 엔터프라이즈 사용자에 대한 자세한 내용은 “[사용자별 가격 책정 정보](/billing/managing-billing-for-your-github-account/about-per-user-pricing)”를 참조하세요.

각 사용자가 사용하는 배포 수에 관계없이 단일 사용자를 사용하려면 {% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %} 간에 라이선스 사용량을 동기화해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %} 간에 라이선스 사용량 동기화](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”를 참조하세요.

라이선스 사용량을 동기화한 후 {% data variables.product.prodname_dotcom %}는 메일 주소별로 {% data variables.product.prodname_ghe_server %}의 사용자 계정과 {% data variables.product.prodname_ghe_cloud %}의 사용자 계정을 일치시킵니다.

먼저 {% data variables.product.prodname_ghe_server %}에서 각 사용자의 기본 메일 주소를 확인합니다. 그런 다음 이 주소를 {% data variables.product.prodname_ghe_cloud %}의 사용자 계정 메일 주소와 일치시키려고 시도합니다. 엔터프라이즈에서 SAML SSO를 사용하는 경우 먼저 메일 주소에 대해 다음 SAML 특성을 확인합니다.

- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- `username`
- `NameID`
- `emails`

이러한 특성에 있는 메일 주소 중에 {% data variables.product.prodname_ghe_server %}의 기본 메일 주소와 일치하는 주소가 없거나 엔터프라이즈에서 SAML SSO를 사용하지 않는 경우 {% data variables.product.prodname_ghe_cloud %}에서 사용자의 확인된 각 메일 주소를 확인합니다. {% data variables.product.prodname_dotcom_the_website %}에서 메일 주소 확인에 대한 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서에서 “[메일 주소 확인](/enterprise-cloud@latest/get-started/signing-up-for-github/verifying-your-email-address){% ifversion not ghec %}”을 참조하세요.{% else %}.” {% endif %}

## 사용된 라이선스 파일의 필드

{% data variables.product.prodname_dotcom_the_website %} 라이선스 사용량 보고서 및 {% data variables.product.prodname_ghe_server %} 내보낸 라이선스 사용량 파일에는 엔터프라이즈의 라이선스 사용량 문제를 해결하는 데 도움이 되는 다양한 필드가 포함되어 있습니다. 

### {% data variables.product.prodname_dotcom_the_website %} 라이선스 사용 현황 보고서(CSV 파일)

엔터프라이즈의 라이선스 사용량 보고서는 엔터프라이즈 멤버에 대한 다음 정보가 포함된 CSV 파일입니다. 일부 필드는 {% data variables.product.prodname_ghe_cloud %}(GHEC) 배포, {% data variables.product.prodname_ghe_server %}(GHES) 연결 환경 또는 GitHub Enterprise를 사용한 {% data variables.product.prodname_vs %} 구독(VSS)과 관련이 있습니다.

| 필드 | Description
| ----- | -----------
| github_com_login | 사용자의 GHEC 계정에 대한 사용자 이름
| github_com_name | 사용자의 GHEC 계정에 대한 표시 이름
| github_com_profile | GHEC의 사용자 프로필 페이지에 대한 URL
| github_com_user   | 사용자가 GHEC에 계정이 있는지 여부 |
| github_com_member_roles | GHEC에서 사용자가 속한 각 조직에 대해 조직 이름 및 해당 조직에서의 사용자 역할(`Owner` 또는 `Member`)(콜론으로 구분)입니다.<br><br>쉼표로 구분된 조직 |
| github_com_enterprise_role | `Owner`, `Member` 또는 `Outside collaborator` 중 하나일 수 있습니다.
| github_com_verified_domain_emails | 엔터프라이즈의 확인된 도메인과 일치하는 사용자의 GHEC 계정과 연결된 모든 메일 주소 |
| github_com_saml_name_id | SAML 사용자 이름 |
| github_com_orgs_with_pending_invites | 엔터프라이즈 내 조직에 가입하기 위해 사용자의 GHEC 계정에 대해 보류 중인 모든 초대 |
| license_type | `Visual Studio subscription` 또는 `Enterprise` 중 하나일 수 있습니다.
| enterprise_server_user| 사용자에게 GHES에 하나 이상의 계정이 있는지 여부 |
| enterprise_server_primary_emails | 각 사용자의 GHES 계정과 연결된 기본 메일 주소 |
| enterprise_server_user_ids | 각 사용자의 GHES 계정에 대한 계정의 사용자 ID
| total_user_accounts | GHEC 및 GHES 모두에서 사용자가 가지고 있는 총 계정 수
| visual_studio_subscription_user | 사용자가 {% data variables.visual_studio.prodname_vs_subscriber %}인지 여부 |
| visual_studio_subscription_email | 사용자의 VSS와 연결된 메일 주소 |
| visual_studio_license_status | Visual Studio 라이선스가 {% data variables.product.company_short %} 사용자와 일치했는지 여부 |

엔터프라이즈에서 아직 하나 이상의 조직의 구성원이 아닌 {% data variables.visual_studio.prodname_vs_subscriber %}는 보류 중인 초대 상태의 보고서에 포함되며 "이름" 또는 "프로필 링크" 필드에 대한 값이 누락됩니다.

### {% data variables.product.prodname_ghe_server %} 내보낸 라이선스 사용량(JSON 파일)

{% data variables.product.prodname_ghe_server %} 라이선스 사용량은 {% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %} 배포 간에 사용자 라이선스의 수동 동기화를 수행할 때 일반적으로 사용되는 JSON 파일입니다. 파일에는 {% data variables.product.prodname_ghe_server %} 환경과 관련된 다음 정보가 포함되어 있습니다.

| 필드 | Description
| ----- | -----------
| 기능 | {% data variables.product.prodname_ghe_server %} 인스턴스에서 사용하도록 설정된 {% data variables.product.prodname_github_connect %} 기능 및 활성화 날짜와 시간입니다.
| 호스트 이름 | {% data variables.product.prodname_ghe_server %} 라이선스의 호스트 이름입니다.
| HTTP 전용 | {% data variables.product.prodname_ghe_server %} 인스턴스에서 TLS(전송 계층 보안)를 사용하도록 설정하고 구성했는지 여부입니다. `True` 또는 `False` 중 하나일 수 있습니다. 
| 라이선스 | {% data variables.product.prodname_ghe_server %} 라이선스의 해시입니다.
| 공개 키 | {% data variables.product.prodname_ghe_server %} 라이선스의 퍼블릭 키 부분입니다.
| 서버 ID입니다. | {% data variables.product.prodname_ghe_server %} 인스턴스에 대해 생성된 UUID입니다.
| 버전 | {% data variables.product.prodname_ghe_server %} 인스턴스의 버전입니다.

## 사용된 라이선스 문제 해결

각 사용자가 서로 다른 배포 및 구독에 단일 사용자만 사용되도록 하려면 다음 문제 해결 단계를 수행합니다.

1. 여러 개의 사용자 수를 사용 중인 사용자를 식별하려면 엔터프라이즈에서 {% data variables.product.prodname_ghe_cloud %}에 대해 확인된 도메인을 사용하는 경우 {% data variables.product.prodname_dotcom_the_website %}의 계정과 연결된 확인된 도메인의 메일 주소가 없는 엔터프라이즈 구성원 목록을 검토합니다. 종종 이러한 사용자는 둘 이상의 사용자 라이선스를 잘못 사용하는 사용자입니다. 자세한 내용은 “[확인된 도메인에서 메일 주소가 없는 멤버 보기](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)”를 참조하세요.

   {% note %}

  **참고:** 문제 해결을 쉽게 하려면 {% data variables.product.prodname_dotcom_the_website %}에서 엔터프라이즈 계정으로 확인된 도메인을 사용하는 것이 좋습니다. 자세한 내용은 “[엔터프라이즈의 도메인 확인 또는 승인](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”을 참조하세요.

  {% endnote %}
1. 여러 개의 사용자 수를 사용하는 사용자를 식별한 후 동일한 메일 주소가 사용자의 모든 계정과 연결되어 있는지 확인합니다. 일치해야 하는 메일 주소에 대한 자세한 내용은 “[사용된 라이선스 계산 정보](#about-the-calculation-of-consumed-licenses)”를 참조하세요.
1. 메일 주소가 최근에 업데이트되었거나 불일치 수정이 확인된 경우 마지막 라이선스 동기화 작업의 타임스탬프를 확인합니다. 수정한 이후 작업이 실행되지 않은 경우 새 작업을 수동으로 트리거합니다. 자세한 내용은 “[GitHub Enterprise Server와 GitHub Enterprise Cloud 간의 라이선스 사용량 동기화](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”을 참조하세요.

위의 문제 해결 정보를 검토한 후에도 사용된 라이선스에 대한 질문이 있는 경우 {% data variables.contact.contact_enterprise_portal %}을 통해 {% data variables.contact.github_support %}에 문의할 수 있습니다.
