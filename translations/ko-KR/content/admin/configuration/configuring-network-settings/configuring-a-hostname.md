---
title: 호스트 이름 구성
intro: 하드 코딩된 IP 주소를 사용하는 대신 어플라이언스의 호스트 이름을 설정하는 것이 좋습니다.
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: 7c18fcf9e768e6c1639004ad8f85ca60f7c98f49
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098333'
---
하드 코딩된 IP 주소 대신 호스트 이름을 구성하는 경우 사용자 또는 클라이언트 소프트웨어에 영향을 주지 않고 {% 데이터 variables.location.product_location %}이(가) 실행되는 실제 하드웨어를 변경할 수 있습니다.

{% data variables.enterprise.management_console %}의 호스트 이름 설정은 인터넷 또는 내부 네트워크 내에서 확인할 수 있는 적절한 FQDN(정규화된 도메인 이름)으로 설정해야 합니다. 예를 들어 호스트 이름 설정은 `github.companyname.com.`일 수 있습니다. 웹 및 API 요청은 {% data variables.enterprise.management_console %}에 구성된 호스트 이름으로 자동으로 리디렉션됩니다. `localhost`는 유효한 호스트 이름 설정이 아닙니다. 

호스트 이름의 길이는 [도메인 이름 사양 RFC의 섹션 2.3.4](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4)에 따라 63자 미만이어야 합니다.

호스트 이름을 구성한 후 하위 도메인 격리를 사용하도록 설정하여 {% 데이터 variables.location.product_location %}의 보안을 더욱 강화할 수 있습니다. 자세한 내용은 “[하위 도메인 격리 사용](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)”을 참조하세요.

지원되는 호스트 이름 형식에 대한 자세한 내용은 [HTTP RFC 섹션 2.1](https://tools.ietf.org/html/rfc1123#section-2)을 참조하세요.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. {% 데이터 variables.location.product_location %}에 대해 설정할 호스트 이름을 입력합니다.
  ![](/assets/images/enterprise/management-console/hostname-field.png)
5. 새 호스트 이름에 대한 DNS 및 SSL 설정을 테스트하려면 **도메인 설정 테스트** 를 클릭합니다.
  ![도메인 설정 테스트 단추](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}

다양한 사이트 간 스크립팅 취약성을 완화하려면 호스트 이름을 구성한 후 {% 데이터 variables.location.product_location %}에 하위 도메인 격리를 사용하도록 설정하는 것이 좋습니다. 자세한 내용은 “[하위 도메인 격리 사용](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)”을 참조하세요.
