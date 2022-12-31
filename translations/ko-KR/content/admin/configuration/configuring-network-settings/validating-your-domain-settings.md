---
title: 도메인 설정 유효성 검사
intro: '처음으로 {% 데이터 variables.location.product_location %}을(를) 부팅하기 전에 도메인 설정이 올바르게 구성되었는지 확인합니다.'
redirect_from:
  - /enterprise/admin/installation/validating-your-domain-settings
  - /enterprise/admin/configuration/validating-your-domain-settings
  - /admin/configuration/validating-your-domain-settings
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Validate domain settings
ms.openlocfilehash: f1501c196646cc768295e54932eb488725fa0556
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098321'
---
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. 어플라이언스의 DNS 및 SSL 설정을 테스트하려면 **도메인 설정 테스트** 를 클릭합니다.
  ![도메인 설정 테스트 단추](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}
