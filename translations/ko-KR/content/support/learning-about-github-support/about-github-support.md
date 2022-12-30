---
title: GitHub 지원 정보
intro: GitHub를 사용하는 동안 발생하는 문제 해결 지원을 받기 위해 GitHub 지원에 문의할 수 있습니다.
shortTitle: About GitHub Support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/overview/about-github-enterprise-support
  - /articles/about-github-support
  - /github/working-with-github-support/about-github-support
  - /articles/github-enterprise-cloud-support
  - /github/working-with-github-support/github-enterprise-cloud-support
  - /articles/business-plan-support
  - /articles/github-business-cloud-support
  - /admin/enterprise-support/about-support-for-advanced-security
  - /enterprise-server/admin/enterprise-support/about-support-for-advanced-security
topics:
  - Support
ms.openlocfilehash: aa2b407b96cc7ee2ecc20fee9782e3084b3627db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192915'
---
## {% data variables.contact.github_support %} 정보

{% data variables.product.prodname_dotcom %} 사용자에게 제공되는 지원 옵션은 개인 계정, 사용자가 멤버인 조직이나 엔터프라이즈, 사용자가 관리하는 {% data variables.product.prodname_ghe_server %} 인스턴스에서 사용되는 제품에 따라 달라집니다. 각 제품에는 기본 수준의 지원이 포함되며 {% data variables.product.prodname_enterprise %}를 사용하는 계정은 {% data variables.contact.premium_support %}을 구매할 수 있습니다.

{% ifversion fpt %} {% data variables.product.prodname_enterprise %}를 사용하는 조직의 멤버인 경우 {% data variables.product.prodname_docs %}의 오른쪽 위에 있는 드롭다운 메뉴를 사용하여 제품에 해당하는 문서 버전을 볼 수 있습니다. 자세한 내용은 “[GitHub Docs 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs)”를 참조하세요.
{% endif %}

{% ifversion not ghae %}

|  | {% data variables.product.prodname_gcf %} | 표준 지원 | 프리미엄 지원 |
|----|---------------|-------|---------------|
| {% data variables.product.prodname_free_user %} | {% octicon "check" aria-label="Check" %}  |  |  |  
| {% data variables.product.prodname_pro %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |  
| {% data variables.product.prodname_team %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |
| {% data variables.product.prodname_ghe_cloud %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | 구매할 수 있음 |
| {% data variables.product.prodname_ghe_server %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | 구매할 수 있음 |

{% endif %}

{% ifversion ghes %}

다음에 대한 도움이 필요한 경우 {% data variables.contact.contact_enterprise_portal %}을 통해 {% data variables.contact.enterprise_support %}에 문의할 수 있습니다.
 - {% data variables.product.product_name %} 설치 및 사용
 - 의심되는 오류의 원인 식별 및 확인
 - {% data variables.product.prodname_advanced_security %} 설치 및 사용

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.support.premium-support-features %}

자세한 내용은 “[GitHub 프리미엄 지원 정보](/support/about-github-support/about-github-premium-support)”를 참조하세요.

{% endif %}

{% ifversion fpt or ghec or ghae %}

{% data variables.contact.github_support %}에 연결하기 전에 현재 {%- ifversion fpt or ghec %} [{% data variables.product.prodname_dotcom %} 상태](https://githubstatus.com/) {%- elsif ghae %} [{% data variables.product.product_name %} 상태](https://ghestatus.com/) {%- endif %}의 {% data variables.product.product_name %}에서 서비스에 영향을 주는 인시던트가 있는지 확인합니다. 자세한 내용은 “[GitHub 상태 정보](#about-github-status)”를 참조하세요.

{% endif %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %}

계정, 보안 및 남용 문제를 보고하거나 유료 계정에 대한 지원을 받으려면 {% data variables.contact.contact_support_portal %}을 방문하세요. 자세한 내용은 “[지원 티켓 만들기](/support/contacting-github-support/creating-a-support-ticket)”를 참조하세요.
{% endif %}

{% ifversion fpt %} 유료 제품을 사용하거나 유료 제품을 사용하는 조직의 멤버인 경우 영어로 {% data variables.contact.github_support %}에 문의할 수 있습니다.
{% else %} {% data variables.product.product_name %}를 사용하면 영어와 일본어로 지원을 이용할 수 있습니다.
{% endif %}

{% ifversion fpt or ghec or ghes %} {% data reusables.support.support-ticket-translation-option %} {% endif %}

{% ifversion ghes or ghec %}

{% data variables.contact.github_support %}에 문의하려면 {% data variables.contact.contact_support_portal %}을 방문하세요. 자세한 내용은 “[지원 티켓 만들기](/support/contacting-github-support/creating-a-support-ticket)”를 참조하세요.

{% elsif ghae %}

{% data variables.contact.ae_azure_portal %}을 통해 {% data variables.contact.enterprise_support %}에 문의하여 서면으로 문제를 보고할 수 있습니다. 자세한 내용은 “[지원 티켓 만들기](/support/contacting-github-support/creating-a-support-ticket)”를 참조하세요.

{% endif %}

{% ifversion not ghae %} GitHub 지원의 메일 통신은 항상 `github.com` 또는 `githubsupport.com` 주소에서 전송됩니다.
{% endif %}

## 지원 범위

{% data reusables.support.scope-of-support %}

{% ifversion ghec or fpt or ghae %}
## GitHub 상태 정보

현재 {% data variables.product.product_name %} 서비스에 영향을 주는 인시던트를 확인하고 {% data variables.product.prodname_dotcom %}의 [상태 페이지]({% ifversion fpt or ghec %}https://githubstatus.com{% elsif ghae %}https://ghestatus.com{% endif %})에서 과거 인시던트에 관한 정보를 볼 수 있습니다.

{% data variables.product.product_name %}에 영향을 주는 인시던트가 있을 때마다 메일, 문자 메시지, 웹후크를 통해 구독하고 경고를 받을 수도 있습니다.

{% endif %}

{% ifversion ghec or ghes %}
## 지원 자격 정보

엔터프라이즈 소유자와 청구 관리자는 자동으로 지원 자격을 가집니다. 이를 통해 엔터프라이즈 계정과 연결된 지원 티켓을 만들고, 보고, 의견을 달 수 있습니다.

엔터프라이즈 소유자는 엔터프라이즈 계정이 소유한 조직의 멤버에게 지원 자격을 추가하여 해당 멤버가 지원 티켓을 만들고, 보고, 의견을 달도록 할 수도 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 지원 자격 관리](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)”를 참조하세요.

{% endif %}

{% ifversion fpt or ghec %}
## {% data variables.contact.github_support %}에 프라이빗 리포지토리에 대한 임시 액세스 권한 부여

{% data variables.contact.github_support %}이 지원 요청을 처리하기 위해 프라이빗 리포지토리에 액세스해야 하는 경우 리포지토리 소유자는 임시 액세스를 수락하거나 거부할 수 있는 링크가 포함된 메일을 받게 됩니다. 소유자는 20일 동안 요청이 만료되기 전에 요청을 수락하거나 거절할 수 있습니다. 소유자가 요청을 수락하면 {% data variables.contact.github_support %}은 5일 동안 리포지토리에 액세스할 수 있습니다. 이 기간 동안 필요한 권한이 있는 {% data variables.contact.github_support %} 직원은 한 번에 최대 2시간 동안 리포지토리의 잠금을 해제할 수 있으며, 작업이 일찍 완료되면 리포지토리를 다시 차단합니다. 모든 {% data variables.contact.github_support %} 직원 액세스는 감사 로그 이벤트를 생성하며 리포지토리의 표시 유형은 언제든지 영향을 받지 않습니다.

{% data variables.contact.github_support %}은 명시적 동의 없이는 프라이빗 리포지토리에 액세스하지 않습니다. 자세한 내용은 [서비스 약관](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access)을 참조하세요.
{% endif %}

{% ifversion ghec or ghes %}
## GitHub 영업 및 GitHub 학습에 문의

가격 책정, 라이선스, 갱신, 견적, 결제 및 기타 관련 질문은 {% data variables.contact.contact_enterprise_sales %}에 문의하거나 [+1 (877) 448-4820](tel:+1-877-448-4820)으로 전화로 문의하세요.

사용자 지정된 학습을 비롯한 학습 옵션에 관한 자세한 내용은 [{% data variables.product.company_short %}의 학습 사이트](https://services.github.com/)를 참조하세요.

{% note %}

**참고:** 학습은 {% data variables.product.premium_plus_support_plan %}에 포함됩니다. 자세한 내용은 “[GitHub 프리미엄 지원 정보](/support/about-github-support/about-github-premium-support)”를 참조하세요.

{% endnote %}

{% endif %}

{% ifversion ghes or ghec %}
## 운영 시간

### 영어 지원

표준 긴급하지 않은 문제의 경우 주말 및 미국 공휴일을 제외하고 하루 24시간, 주 5일 동안 영어 지원을 제공합니다. 표준 응답 시간은 24시간입니다.

{% ifversion ghes %} 긴급한 문제의 경우 미국 공휴일에도 하루 24시간, 주 7일 동안 지원을 사용할 수 있습니다.
{% endif %}

### 일본어 지원

표준 긴급하지 않은 문제의 경우 일본 공휴일을 제외하고 월요일~금요일, 오전 9시~오후 5시 JST 동안 일본어 지원을 사용할 수 있습니다. 

{% ifversion ghes %} 긴급한 문제의 경우 미국 공휴일에도 하루 24시간, 주 7일 동안 영어 지원을 제공합니다.
{% endif %}

{% data variables.contact.enterprise_support %}에서 확인한 미국 및 일본 공휴일의 전체 목록은 “[휴일 일정](#holiday-schedules)”을 참조하세요.

## 휴일 일정

긴급한 문제의 경우 미국 및 일본 휴일을 포함하여 하루 24시간, 주 7일 동안 영어 지원을 사용할 수 있습니다.

### 미국 휴일

글로벌 지원 팀이 긴급 티켓에 응답할 수 있더라도 {% data variables.contact.enterprise_support %}이 이러한 미국 휴일을 확인합니다.

{% data reusables.enterprise_enterprise_support.support-holiday-availability %}

### 일본 휴일

{% data variables.contact.enterprise_support %}은 [国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html)에 나열된 휴일뿐 아니라 12월 28일~1월 3일에는 일본어 지원을 제공하지 않습니다.

{% data reusables.enterprise_enterprise_support.installing-releases %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

## 지원 티켓 해결 및 닫기

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

{% endif %}

## 추가 참고 자료

{%- ifversion ghes %}
- “[{% data variables.product.prodname_ghe_server %} 사용권 계약](https://enterprise.github.com/license)”의 지원 관련 섹션 10 {%- endif %}
- “[지원 티켓 만들기](/support/contacting-github-support/creating-a-support-ticket)” {%- ifversion not ghae %}
- “[지원 티켓 보기 및 업데이트](/support/contacting-github-support/viewing-and-updating-support-tickets)” {%- endif %}
