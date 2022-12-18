---
title: 시간 동기화 구성
intro: '{% data variables.product.prodname_ghe_server %}는 NTP 서버에 연결하여 시계를 자동으로 동기화합니다. 시계를 동기화하는 데 사용되는 NTP 서버를 설정하거나 기본 NTP 서버를 사용할 수 있습니다.'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings
  - /enterprise/admin/articles/setting-ntp-servers
  - /enterprise/admin/categories/time
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
  - /admin/configuration/configuring-time-synchronization
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure time settings
ms.openlocfilehash: 34ab851e50467a06eb0003d32306d1cd26e9a2d8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112836'
---
## 기본 NTP 서버 구성

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. 왼쪽 사이드바에서 **시간** 을 클릭합니다.
    ![{% data variables.enterprise.management_console %} 사이드바의 시간 단추](/assets/images/enterprise/management-console/sidebar-time.png)
3. “기본 NTP 서버”에 기본 NTP 서버의 호스트 이름을 입력합니다. “보조 NTP 서버”에 보조 NTP 서버의 호스트 이름을 입력합니다.
    ![{% data variables.enterprise.management_console %}의 기본 및 보조 NTP 서버 필드](/assets/images/enterprise/management-console/ntp-servers.png)
4. 페이지 맨 아래에서 **설정 저장** 을 클릭합니다.
    ![{% data variables.enterprise.management_console %}의 설정 저장 단추](/assets/images/enterprise/management-console/save-settings.png)
5. 구성 실행이 완료될 때까지 기다립니다.

## 대규모 시간 드리프트 수정

NTP 프로토콜은 소규모 시간 동기화 불일치를 지속적으로 수정합니다. 관리 셸을 사용하여 시간을 즉시 동기화할 수 있습니다.

{% note %}

**참고:**
 - UTC(협정 세계시) 영역은 수정할 수 없습니다.
 - 하이퍼바이저가 가상 머신의 시계를 설정하지 못하도록 해야 합니다. 자세한 내용은 가상화 공급 기업이 제공한 설명서를 참조하세요.

{% endnote %}

- 이 `chronyc` 명령을 사용하여 구성된 NTP 서버와 서버를 동기화합니다. 예를 들어:

```shell
$ sudo chronyc -a makestep
```
