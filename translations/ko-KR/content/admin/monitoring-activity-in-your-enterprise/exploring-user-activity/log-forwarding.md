---
title: 로그 전달
intro: '{% data variables.product.product_name %}는 `syslog-ng`를 사용하여 {% ifversion ghes %}시스템{% elsif ghae %}Git{% endif %} 및 애플리케이션 로그를 지정한 서버로 전달합니다.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
  - /admin/user-management/log-forwarding
  - /admin/user-management/monitoring-activity-in-your-enterprise/log-forwarding
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 935c8f0221c4541d2801a5e705779efff3d34370
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145115220'
---
## 로그 전달 정보

syslog 스타일의 로그 스트림을 지원하는 모든 로그 수집 시스템(예: [Logstash](http://logstash.net/) 및 [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports))을 지원합니다.

로그 전달을 사용하도록 설정하면 syslog 엔드포인트 간 통신을 암호화하는 CA 인증서를 업로드해야 합니다. 어플라이언스와 원격 syslog 서버는 양방향 SSL을 수행하며 각각 서로 인증서를 제공하고 수신한 인증서의 유효성을 검사합니다.

## 로그 전달 사용

{% ifversion ghes %}
1. {% data variables.enterprise.management_console %} 설정 페이지의 왼쪽 사이드바에서 **모니터링** 을 클릭합니다.
1. **로그 전달 사용** 을 선택합니다.
1. **서버 주소** 필드에 로그를 전달하려는 서버의 주소를 입력합니다. 쉼표로 구분된 목록으로 여러 주소를 지정할 수 있습니다.
1. 프로토콜 드롭다운 메뉴에서 로그 서버와 통신하는 데 사용할 프로토콜을 선택합니다. 프로토콜은 지정된 로그 대상 모두에 적용됩니다.
1. 필요에 따라 **TLS 사용** 을 선택합니다. 특히 어플라이언스와 원격 로그 서버 간에 신뢰할 수 없는 네트워크가 있는 경우 로컬 보안 정책에 따라 TLS를 사용하도록 설정하는 것이 좋습니다. 
1. syslog 엔드포인트 간 통신을 암호화하려면 **파일 선택** 을 클릭하고 원격 syslog 서버에 대한 CA 인증서를 선택합니다. 원격 로그 서버 인증서 서명과 관련된 CA 인증서의 연결을 포함하는 CA 번들을 업로드해야 합니다. 전체 인증서 체인의 유효성을 검사하고 루트 인증서에서 종료해야 합니다. 자세한 내용은 [syslog-ng 설명서의 TLS 옵션](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599)을 참조하세요.
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. {% octicon "gear" aria-label="The Settings gear" %} **설정** 에서 **로그 전달** 을 클릭합니다.
  ![로그 전달 탭](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. “로그 전달”에서 **로그 전달 사용** 을 선택합니다.
  ![로그 전달을 사용하도록 설정하는 확인란](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. “서버 주소”에서 로그를 전달하려는 서버의 주소를 입력합니다.
  ![서버 주소 필드](/assets/images/enterprise/business-accounts/server-address-field.png)
1. “프로토콜” 드롭다운 메뉴를 사용하여 프로토콜을 선택합니다.
  ![프로토콜 드롭다운 메뉴](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. 필요에 따라 syslog 엔드포인트 간에 TLS 암호화 통신을 사용하도록 설정하려면 **TLS 사용** 을 선택합니다.
  ![TLS를 사용하도록 설정하는 확인란](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. “퍼블릭 인증서”에 x509 인증서를 붙여넣습니다.
  ![퍼블릭 인증서를 위한 텍스트 상자](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. **저장** 을 클릭합니다.
  ![로그 전달을 위한 저장 단추](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png) {% endif %}

{% ifversion ghes %}
## 문제 해결

로그 전달에 문제가 있는 경우 {% data variables.contact.contact_ent_support %}에 문의하고 `http(s)://[hostname]/setup/diagnostics`의 출력 파일을 메일에 첨부하세요.
{% endif %}
