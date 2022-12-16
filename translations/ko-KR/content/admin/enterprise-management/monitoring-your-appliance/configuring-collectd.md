---
title: collectd 구성
intro: '{% data variables.product.prodname_enterprise %}는 `collectd`를 사용해 데이터를 수집하여 외부 `collectd` 서버로 보낼 수 있습니다. 여러 메트릭 중에서도 CPU 사용률, 메모리 및 디스크 사용량, 네트워크 인터페이스 트래픽 및 오류, VM의 전체 부하와 같은 표준 데이터 집합을 수집합니다.'
redirect_from:
  - /enterprise/admin/installation/configuring-collectd
  - /enterprise/admin/articles/configuring-collectd
  - /enterprise/admin/enterprise-management/configuring-collectd
  - /admin/enterprise-management/configuring-collectd
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: ec2a175f9449f3d6d8d69993e3803e01be41d60c
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097865'
---
## 외부 `collectd` 서버 설정

외부 `collectd` 서버를 아직 설정하지 않은 경우 {% 데이터 variables.location.product_location %}에서 전달을 `collectd` 사용하도록 설정하기 전에 이 작업을 수행해야 합니다. `collectd` 서버는 `collectd` 버전 5.x 이상을 실행해야 합니다.

1. `collectd` 서버에 로그인합니다.
2. `collectd` 구성 파일을 만들거나 편집하여 네트워크 플러그 인을 로드하고 서버 및 포트 지시문을 적절한 값으로 채웁니다. 대부분의 배포에서 이것은 `/etc/collectd/collectd.conf`에 있습니다.

`collectd` 서버를 실행하기 위한 *collectd.conf* 의 예제:

    LoadPlugin network
    ...
    ...
    <Plugin network>
        Listen "0.0.0.0" "25826"
    </Plugin>

## {% data variables.product.prodname_enterprise %}에서 collectd 전달을 사용하도록 설정

기본값으로 {% data variables.product.prodname_enterprise %}에서 `collectd` 전달은 사용하지 않도록 설정되어 있습니다. `collectd` 전달을 사용하도록 설정하고 구성하려면 아래 단계를 따르세요.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. 로그 전달 설정 아래에서 **collectd 전달 사용** 을 선택합니다.
1. **서버 주소** 필드에 {% data variables.product.prodname_enterprise %} 어플라이언스 통계를 전달할 `collectd` 서버의 주소를 입력합니다.
1. **포트** 필드에 `collectd` 서버에 연결하는 데 사용되는 포트를 입력합니다. (기본값은 25826)
1. **암호화 설정** 드롭다운 메뉴에서 `collectd` 서버와의 통신 보안 수준을 선택합니다. (없음, 서명된 패킷 또는 암호화된 패킷.) {% data reusables.enterprise_management_console.save-settings %}

## `ghe-export-graphs`를 사용하여 collectd 데이터 내보내기

명령줄 도구 `ghe-export-graphs`는 `collectd`가 RRD 데이터베이스에 저장하는 데이터를 내보냅니다. 이 명령은 데이터를 XML로 변환하고 단일 tarball(`.tgz`)로 내보냅니다.

주요 용도는 전체 지원 번들을 다운로드할 필요 없이 {% data variables.contact.contact_ent_support %} 팀에 VM 성능에 대한 데이터를 제공하는 것입니다. 일반 백업 내보내기는 포함되지 않아야 하며 가져오기에 해당되는 항목이 없습니다. {% data variables.contact.contact_ent_support %}에 문의하는 경우 문제 해결에 도움이 되도록 이 데이터를 요청할 수 있습니다.

### 사용량

```shell
ssh -p 122 admin@[hostname] -- 'ghe-export-graphs' && scp -P 122 admin@[hostname]:~/graphs.tar.gz .
```

## 문제 해결

### 중앙 collectd 서버는 데이터를 수신하지 않습니다.

{% data variables.product.prodname_enterprise %}는 `collectd` 버전 5.x와 함께 제공됩니다. `collectd` 5.x는 4.x 릴리스 시리즈 이하 버전과 호환되지 않습니다. {% 데이터 variables.location.product_location %}에서 보낸 데이터를 허용하려면 중앙 `collectd` 서버가 버전 5.x 이상이어야 합니다.

추가 질문 또는 문제에 대한 도움말은 {% data variables.contact.contact_ent_support %}에 문의하세요.
