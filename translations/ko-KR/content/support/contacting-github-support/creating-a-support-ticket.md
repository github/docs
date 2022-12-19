---
title: 지원 티켓 만들기
intro: '{% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %}dmf 사용하여 지원 티켓을 만들고 {% data variables.contact.github_support %}에 문의할 수 있습니다.'
shortTitle: Creating a ticket
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/preparing-to-submit-a-ticket
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support
  - /enterprise/admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/reaching-github-support
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/submitting-a-ticket
  - /articles/submitting-a-ticket
  - /github/working-with-github-support/submitting-a-ticket
topics:
  - Support
ms.openlocfilehash: 4be0e3be4154354bbc8ea592c9c13af4c0e217b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145140136'
---
{% ifversion fpt or ghec or ghes %}

## 지원 티켓 정보

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %} {% endif %}

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

{% ifversion ghes %} {% data variables.contact.support_portal %}을(를) 사용하여 티켓을 만들거나 지원 티켓에 진단을 포함하려면 GitHub Enterprise 서버 관리 콘솔을 사용할 수 있습니다.
{% endif %}

티켓을 만든 후에는 {% data variables.contact.contact_landing_page_portal %}에서 {% data variables.contact.github_support %}의 티켓 및 응답을 볼 수 있습니다. 자세한 내용은 “[지원 티켓 보기 및 업데이트](/support/contacting-github-support/viewing-and-updating-support-tickets)”를 참조하세요. 

## 지원 티켓에 포함할 내용

{% data variables.contact.github_support %}에 문제를 이해하고, 찾고, 재현하는 데 필요한 모든 정보를 제공하면 문제를 더 빨리 해결하고 사용자와 지원 팀 간에 덜 오락가락할 수 있습니다. {% data variables.contact.github_support %}이(가) 사용자를 지원할 수 있도록 티켓을 작성할 때 다음 사항을 고려하세요.

- {% data variables.contact.github_support %}이(가) 문제를 추적, 우선 순위 지정, 재현 또는 조사하는 데 도움이 되는 정보를 가져옵니다.
- 가능한 경우 전체 URL, 리포지토리 이름, 사용자 이름을 포함합니다.
- 해당하는 경우 문제를 재현하고 단계를 공유할 준비를 합니다.
- 문제 및 예상 결과에 대한 전체 설명을 제공할 준비를 합니다.
- 문제와 관련된 모든 오류 메시지의 정확한 표현을 복사합니다.
- {% data variables.contact.github_support %}와(과)의 지속적인 통신에 기존 티켓 번호가 있는지 확인합니다.
- 관련 로그를 포함하고 문제를 보여 주는 스크린샷을 첨부합니다.

{% ifversion ghes %}
## 대화 상대 선택

특히 {% data variables.product.support_ticket_priority_urgent %} 우선 순위가 있는 티켓의 경우 {% data variables.contact.github_support %}에 연락하는 사람은 다음을 수행해야 합니다.

 - 내부 시스템, 도구, 정책, 사례에 대해 지식이 있어야 합니다.
 - {% data variables.product.product_name %}의 능숙한 사용자여야 합니다.
 - 문제를 해결하는 데 필요한 모든 서비스에 대한 모든 액세스 및 권한을 갖습니다.
 - 네트워크 및 해당 제품에 대해 권장 사항을 변경할 수 있는 권한을 부여받습니다.

{% endif %}

## 지원 포털{% endif %}을(를) 사용하여 지원 티켓{% ifversion ghes %} 만들기

1. {% data variables.contact.contact_support_portal %}(으)로 이동합니다.
{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## GitHub Enterprise 서버 관리 콘솔을 사용하여 티켓 만들기

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
1. 지원 티켓에 진단을 포함하려면 “진단” 아래에서 **진단 정보 다운로드** 를 클릭하고 파일을 로컬로 저장합니다. 이 파일은 나중에 지원 티켓에 첨부합니다.
  ![관리 콘솔 지원 페이지에서 “진단 정보 다운로드”라는 레이블이 지정된 단추의 스크린샷](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. 티켓을 완료하고 {% data variables.contact.enterprise_portal %}을(를) 표시하려면 “지원 요청 열기”에서 **새 지원 요청** 을 클릭합니다.
  ![관리 콘솔 지원 페이지의 “새 지원 요청”이라는 레이블이 지정된 단추의 스크린샷](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% elsif ghae %}

{% data variables.contact.ae_azure_portal %}에서 {% data variables.product.prodname_ghe_managed %}을(를) 지원하는 티켓을 제출할 수 있습니다.

## 필수 조건

{% data variables.contact.ae_azure_portal %}에서 {% data variables.product.prodname_ghe_managed %}에 대한 티켓을 제출하려면 Azure의 {% data variables.product.prodname_ghe_managed %} 구독에 대한 ID를 Microsoft의 CSAM(고객 성공 계정 관리자)에 제공해야 합니다.

## {% data variables.contact.ae_azure_portal %}을(를) 사용하여 티켓 제출

상용 고객은 {% data variables.contact.contact_ae_portal %}에서 지원 요청을 제출할 수 있습니다. 정부 고객은 [정부 고객용 Azure Portal](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade)을 사용해야 합니다. 자세한 내용은 Microsoft Docs의 [Azure 지원 요청 만들기](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request)를 참조하세요.

## {% data variables.contact.ae_azure_portal %}의 문제 해결

{% data variables.product.company_short %}이(가) Azure Portal의 액세스 및 구독 문제를 해결할 수 없습니다. Azure Portal에 대한 도움말은 Microsoft의 CSAM에 문의하거나 다음 정보를 검토하세요.

- Azure Portal에 로그인할 수 없는 경우 Microsoft Docs의 [Azure 구독 로그인 문제 해결](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue)을 참조하거나 [요청을 직접 제출](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178)하세요.

- Azure Portal에 로그인할 수 있지만 {% data variables.product.prodname_ghe_managed %}에 대한 티켓을 제출할 수 없는 경우 티켓 제출을 위한 필수 구성 요소를 검토합니다. 자세한 내용은 “[필수 구성 요소](#prerequisites)”를 참조하세요.

{% endif %}

## 추가 참고 자료

- “[GitHub 지원 정보](/support/learning-about-github-support/about-github-support)”
