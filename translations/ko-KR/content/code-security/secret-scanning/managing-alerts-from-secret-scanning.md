---
title: 비밀 검사에서 경고 관리
intro: 리포지토리에 체크 인된 비밀에 대한 경고를 보고 닫을 수 있습니다.
permissions: People with admin access to a repository can view and dismiss alerts.
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Manage secret alerts
ms.openlocfilehash: f7c92b975d5bf8646b25d817564bff32ffc94e1c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158671'
---
{% data reusables.secret-scanning.beta %}

## {% data variables.product.prodname_secret_scanning %} 경고 관리

{% ifversion ghec %} {% note %}

**참고:** 경고는 {% data variables.product.prodname_secret_scanning_GHAS %}가 활성화된 리포지토리에 대해서만 생성됩니다. 무료 {% data variables.product.prodname_secret_scanning_partner%} 서비스를 사용하여 공용 리포지토리에 있는 비밀은 경고를 만들지 않고 파트너에게 직접 보고됩니다.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. 왼쪽 사이드바에서 **비밀 검사 경고** 를 클릭합니다.
   {% ifversion ghes or ghec %} ![" 비밀 검사 경고" 탭](/assets/images/help/repository/sidebar-secrets.png) {% endif %} {% ifversion ghae %} !["비밀 검사 경고" 탭](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png) {% endif %}
1. "비밀 검사"에서 보려는 경고를 클릭합니다.
   {% ifversion ghec %} ![ 비밀 검사](/assets/images/help/repository/secret-scanning-click-alert.png) {% endif %} {% ifversion ghes %} ![비밀 검사](/assets/images/help/repository/secret-scanning-click-alert-ghe.png) 의 경고 목록 {% endif %} {% ifversion ghae %} ![비밀 검사](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png) 의 경고 목록 {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. 경고를 해제하려면 "경고 해제" 드롭다운 메뉴를 선택하고 경고 해결 이유를 클릭합니다.

   ![비밀 검사에서 경고를 해제하기 위한 드롭다운 메뉴의 스크린샷](/assets/images/help/repository/secret-scanning-dismiss-alert.png){% else %}
1. 경고를 해제하려면 "다른 것으로 표시" 드롭다운 메뉴를 선택하고 경고 해결 이유를 클릭합니다. 
  
   ![비밀 검사에서 경고를 해결하기 위한 드롭다운 메뉴의 스크린샷](/assets/images/enterprise/3.2/repository/secret-scanning-resolve-alert-ghe.png)

   {% endif %} {% ifversion secret-scanning-dismissal-comment %}
1. 필요에 따라 해제 설명을 추가합니다. 해제 설명은 경고 타임라인에 추가되며 감사 및 보고 중에 근거로 사용할 수 있습니다. 경고 타임라인에서 해제된 모든 경고 및 해제 주석의 기록을 볼 수 있습니다. {% data variables.product.prodname_secret_scanning_caps %} API를 사용하여 주석을 검색하거나 설정할 수도 있습니다. 설명은 `resolution_comment` 필드에 포함됩니다. 자세한 내용은 REST API 설명서의 "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/secret-scanning#update-a-secret-scanning-alert)"를 참조하세요.

  ![해제 주석을 추가하는 옵션과 함께 "경고 해제" 드롭다운을 통해 경고를 해제하는 방법을 보여 주는 스크린샷](/assets/images/help/repository/secret-scanning-dismissal-comment.png)

1. **경고 해제** 를 클릭합니다.
{% endif %}

## 손상된 비밀 보안

비밀이 리포지토리에 커밋되면 보안이 손상된 것으로 간주해야 합니다. {% data variables.product.prodname_dotcom %}에서는 손상된 비밀에 대해 다음 작업을 권장합니다.

- 손상된 {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %}의 경우 손상된 토큰을 삭제하고, 새 토큰을 만들고, 이전 토큰을 사용하는 모든 서비스를 업데이트합니다. 자세한 내용은 "[명령줄에 대한 {% 데이터 variables.product.pat_generic %} 만들기](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)"를 참조하세요.
{%- ifversion token-audit-log %}
  - {% ifversion ghec %} 조직이 엔터프라이즈 계정이 소유한 경우{% else %}식별{% endif %} 엔터프라이즈 리소스의 손상된 토큰에 의해 수행된 모든 작업을 식별합니다. 자세한 내용은 "[액세스 토큰에서 수행하는 감사 로그 이벤트 식별"을 참조하세요](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token).
{%- endif %}
- 다른 모든 비밀의 경우 먼저 {% data variables.product.product_name %}에 커밋된 비밀이 유효한지 확인합니다. 그렇다면 새 비밀을 만들고 이전 비밀을 사용하는 모든 서비스를 업데이트한 후 이전 비밀을 삭제합니다.

{% ifversion ghec %} {% note %}

**참고:** {% data variables.product.prodname_dotcom_the_website %}의 공용 리포지토리에서 비밀이 검색되고 비밀도 파트너 패턴과 일치하는 경우 경고가 생성되고 잠재적 비밀이 서비스 공급자에게 보고됩니다. 파트너 패턴에 대한 자세한 내용은 “[파트너 패턴에 지원되는 비밀](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)”을 참조하세요.

{% endnote %} {% endif %}

## {% data variables.product.prodname_secret_scanning %} 경고에 대한 알림 구성

새 비밀이 검색되면 {% data variables.product.product_name %}은 알림 기본 설정에 따라 리포지토리에 대한 보안 경고에 액세스할 수 있는 모든 사용자에게 알릴 수 있습니다. 리포지토리를 보고 있거나, 보안 경고 또는 리포지토리의 모든 활동에 대한 알림을 사용하도록 설정했으며, 비밀을 포함하고 리포지토리를 무시하지 않는 커밋의 작성자인 경우 메일 알림을 받게 됩니다.

자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)” 및 "[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)"을 참조하세요.
