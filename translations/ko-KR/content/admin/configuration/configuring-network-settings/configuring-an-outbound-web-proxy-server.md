---
title: 아웃바운드 웹 프록시 서버 구성
intro: '프록시 서버는 {% 데이터 variables.location.product_location %}에 대한 추가 보안 수준을 제공합니다.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
  - /admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure an outbound proxy
ms.openlocfilehash: 6b40ceaefa91210000122ede73263e93df481631
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098328'
---
## {% data variables.product.product_name %}를 사용하는 프록시 정보

{% 데이터 variables.location.product_location %}에 프록시 서버를 사용하도록 설정하면 대상 호스트가 HTTP 프록시 제외로 추가되지 않는 한 {% 데이터 variables.product.prodname_ghe_server %}에서 보낸 아웃바운드 메시지가 먼저 프록시 서버를 통해 전송됩니다. 아웃바운드 메시지 유형에는 보내는 웹후크, 번들 업로드 및 레거시 아바타 가져오기가 포함됩니다. 프록시 서버의 URL은 프로토콜, 도메인 또는 IP 주소와 포트 번호로, 예를 들면 `http://127.0.0.1:8123`으로 표시됩니다.

{% note %}

**참고:**  {% 데이터 variables.location.product_location %}을(를) {% 데이터 variables.product.prodname_dotcom_the_website %}에 연결하려면 프록시 구성에서 연결을 `github.com` `api.github.com`허용해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom_the_website %} 에 엔터프라이즈 계정 연결](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)”을 참조하세요.

{% endnote %}

{% data reusables.actions.proxy-considerations %} {% data variables.product.prodname_ghe_server %}를 통한 {% data variables.product.prodname_actions %}를 사용하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}의 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)”을 참조하세요.

## 아웃바운드 웹 프록시 서버 구성

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
1. **HTTP 프록시 서버** 에서 프록시 서버의 URL을 입력합니다.
  ![HTTP 프록시 서버 URL을 입력할 필드](/assets/images/enterprise/management-console/http-proxy-field.png)
  
5. 필요에 따라 **HTTP 프록시 제외** 에서 프록시 액세스가 필요하지 않은 호스트를 입력하고 호스트를 쉼표로 구분합니다. 도메인의 모든 호스트를 프록시 액세스 요구에서 제외하려면 와일드카드 접두사로 `.`를 사용할 수 있습니다.  예: `.octo-org.tentacle`
  ![HTTP 프록시 제외를 입력하기 위한 필드](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
