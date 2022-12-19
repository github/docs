---
title: 애플리케이션 구성
intro: '{% 데이터 variables.location.product_location %}에 대한 내부 애플리케이션 설정을 구성할 수 있습니다.'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
  - /admin/configuration/configuring-applications
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 166206b891f1137e4b69fed702f5b6f1a1bb7a9e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098058'
---
## 이미지 캐싱 조정

{% 데이터 variables.location.product_location %}에서 아바타를 캐시하는 시간을 선택할 수 있습니다. 캐시 시간을 늘리면 사용자의 아바타가 로드하는 데 걸리는 시간이 늘어나게 됩니다. 값이 너무 낮은 캐시 시간을 구성하면 {% 데이터 variables.location.product_location %} 작업 프로세스를 오버로드할 수 있습니다. 

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. 왼쪽 사이드바에서 **애플리케이션** 을 클릭합니다.
![설정 사이드바의 애플리케이션 탭](/assets/images/enterprise/management-console/sidebar-applications.png)
4. "아바타 이미지 캐시 시간(초)"에서 {% 데이터 variables.location.product_location %}에서 아바타 이미지를 캐시할 시간(초)을 입력합니다.
![아바타 이미지 캐시 양식 필드](/assets/images/enterprise/management-console/add-image-caching-value-field.png) {% data reusables.enterprise_management_console.save-settings %}
