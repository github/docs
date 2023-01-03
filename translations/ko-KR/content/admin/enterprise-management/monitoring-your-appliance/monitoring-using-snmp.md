---
title: SNMP를 사용하여 모니터링
intro: '{% data variables.product.prodname_enterprise %}는 SNMP를 통해 디스크 사용량, CPU 사용률, 메모리 사용량 등에 대한 데이터를 제공합니다.'
redirect_from:
  - /enterprise/admin/installation/monitoring-using-snmp
  - /enterprise/admin/articles/monitoring-using-snmp
  - /enterprise/admin/enterprise-management/monitoring-using-snmp
  - /admin/enterprise-management/monitoring-using-snmp
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: 1afc6d9a34015c0b577fe891caefb5317346ca7a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093801'
---
SNMP는 네트워크를 통해 디바이스를 모니터링하기 위한 일반적인 표준입니다. {% 데이터 variables.location.product_location %}의 상태를 모니터링하고 호스트 컴퓨터에 메모리, 스토리지 또는 프로세서 전원을 추가할 시기를 알 수 있도록 SNMP를 사용하도록 설정하는 것이 좋습니다.

{% data variables.product.prodname_enterprise %}에는 표준 SNMP가 설치되어 있으므로 Nagios 또는 기타 모니터링 시스템에서 사용할 수 있는 [많은 플러그 인](https://www.monitoring-plugins.org/doc/man/check_snmp.html)을 활용할 수 있습니다.

## SNMP v2c 구성

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.access-monitoring %} {% data reusables.enterprise_management_console.enable-snmp %}
4. **커뮤니티 문자열** 필드에 새 커뮤니티 문자열을 입력합니다. 비워 두면 기본값은 `public`입니다.
![커뮤니티 문자열을 추가하는 필드](/assets/images/enterprise/management-console/community-string.png) {% data reusables.enterprise_management_console.save-settings %}
5. 네트워크에서 SNMP 지원을 사용하여 별도의 워크스테이션에서 다음 명령을 실행하고 SNMP 구성을 테스트합니다.
  ```shell
  # community-string is your community string
  # hostname is the IP or domain of your Enterprise instance
  $ snmpget -v 2c -c COMMUNITY-STRING -O e HOSTNAME hrSystemDate.0
  ```

이렇게 하면 {% 데이터 variables.location.product_location %} 호스트의 시스템 시간이 반환됩니다.

## 사용자 기반 보안

SNMP v3를 사용하도록 설정하면 USM(사용자 보안 모델)을 통해 향상된 사용자 기반 보안을 활용할 수 있습니다. 각 고유 사용자에 대해 보안 수준을 지정할 수 있습니다.
- `noAuthNoPriv`: 이 보안 수준은 인증을 제공하지 않으며 개인 정보도 제공하지 않습니다.
- `authNoPriv`: 이 보안 수준은 인증을 제공하지만 개인 정보는 제공하지 않습니다. 어플라이언스 쿼리에는 사용자 이름 및 암호(8자 이상이어야 함)가 필요합니다. SNMPv2와 유사한 암호화 없이 정보가 전송됩니다. 인증 프로토콜은 MD5 또는 SHA일 수 있으며 기본값은 SHA입니다.
- `authPriv`: 이 보안 수준은 인증과 개인 정보를 제공합니다. 8자 이상의 인증 암호를 포함한 인증이 필요하며 응답은 암호화됩니다. 개인 정보 암호는 필요하지 않지만 제공된 경우 8자 이상이어야 합니다. 개인 정보 암호가 제공되지 않으면 인증 암호가 사용됩니다. 개인 정보 프로토콜은 DES 또는 AES일 수 있으며 기본값은 AES입니다.

## SNMP v3에 대한 사용자 구성

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.access-monitoring %} {% data reusables.enterprise_management_console.enable-snmp %}
4. **SNMP v3** 를 선택합니다.
![SNMP v3를 사용하도록 설정하는 단추](/assets/images/enterprise/management-console/enable-snmpv3.png)
5. “사용자 이름”에 SNMP v3 사용자의 고유한 사용자 이름을 입력합니다.
![SNMP v3 사용자 이름을 입력할 필드](/assets/images/enterprise/management-console/snmpv3-username.png)
6. **보안 수준** 드롭다운 메뉴에서 SNMP v3 사용자의 보안 수준을 클릭합니다.
![SNMP v3 사용자의 보안 수준에 대한 드롭다운 메뉴](/assets/images/enterprise/management-console/snmpv3-securitylevel.png)
7. 보안 수준이 `authnopriv`인 SNMP v3 사용자의 경우: ![authnopriv 보안 수준 설정](/assets/images/enterprise/management-console/snmpv3-authnopriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
8. 보안 수준이 `authpriv`인 SNMP v3 사용자의 경우: ![authpriv 보안 수준 설정](/assets/images/enterprise/management-console/snmpv3-authpriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
    - 필요에 따라 “개인 정보 암호”에 개인 정보 암호를 입력합니다.
    - “개인 정보 암호”의 오른쪽에 있는 **프로토콜** 드롭다운 메뉴에서 사용하려는 개인 정보 프로토콜 메서드를 클릭합니다.
9. **사용자 추가** 를 클릭합니다.
![SNMP v3 사용자 추가 버튼](/assets/images/enterprise/management-console/snmpv3-adduser.png) {% data reusables.enterprise_management_console.save-settings %}

#### SNMP 데이터 쿼리

어플라이언스 관련 하드웨어 및 소프트웨어 수준 정보는 SNMP v3에서 사용할 수 있습니다. `noAuthNoPriv` 및 `authNoPriv` 보안 수준에 대한 암호화 및 개인 정보 보호 기능이 없으므로 그에 따라 SNMP 보고서에서 `hrSWRun` 테이블(1.3.6.1.2.1.25.4)을 제외합니다. `authPriv` 보안 수준을 사용하는 경우 이 테이블이 포함됩니다. 자세한 내용은 “[OID 참조 설명서](https://oidref.com/1.3.6.1.2.1.25.4)”를 참조하세요. 

SNMP v2c를 사용하면 어플라이언스 관련 하드웨어 수준 정보만 사용할 수 있습니다. {% data variables.product.prodname_enterprise %} 내의 애플리케이션 및 서비스에는 메트릭을 보고하도록 구성된 OID가 없습니다. 네트워크에서 SNMP를 지원하는 별도의 워크스테이션에서 `snmpwalk`를 실행하여 볼 수 있는 여러 MIB를 사용할 수 있습니다.

```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
$ snmpwalk -v 2c -c COMMUNITY-STRING -O e HOSTNAME
```

SNMP에 사용 가능한 MIB 중에서 가장 유용한 것은 `HOST-RESOURCES-MIB`(1.3.6.1.2.1.25)입니다. 이 MIB의 몇 가지 중요한 개체는 아래 테이블을 참조하세요.

| Name | OID | 설명 |
| ---- | --- | ----------- |
| hrSystemDate.2 | 1.3.6.1.2.1.25.1.2 | 현지 날짜 및 시간의 호스트 개념. |
| hrSystemUptime.0 | 1.3.6.1.2.1.25.1.1.0 | 호스트가 마지막으로 초기화된 이후의 기간. |
| hrMemorySize.0 | 1.3.6.1.2.1.25.2.2.0 | 호스트의 RAM 크기. |
| hrSystemProcesses.0 | 1.3.6.1.2.1.25.1.6.0 | 현재 호스트에서 로드되거나 실행 중인 프로세스 컨텍스트의 수. |
| hrStorageUsed.1 | 1.3.6.1.2.1.25.2.3.1.6.1 | 호스트에서 사용된 스토리지 공간의 양(hrStorageAllocationUnits). |
| hrStorageAllocationUnits.1 | 1.3.6.1.2.1.25.2.3.1.4.1 | hrStorageAllocationUnit의 크기(바이트). |

예를 들어 SNMP v3로 `hrMemorySize`를 쿼리하려면 네트워크에서 SNMP를 지원하는 별도의 워크스테이션에서 다음 명령을 실행합니다.
```shell
# username is the unique username of your SNMP v3 user
# auth password is the authentication password
# privacy password is the privacy password
# hostname is the IP or domain of your Enterprise instance
$ snmpget -v 3 -u USERNAME -l authPriv \
  -A "AUTH PASSWORD" -a SHA \
  -X "PRIVACY PASSWORD" -x AES \
  -O e HOSTNAME HOST-RESOURCES-MIB::hrMemorySize.0
```

SNMP v2로 `hrMemorySize`를 쿼리하려면 네트워크에서 SNMP를 지원하는 별도의 워크스테이션에서 다음 명령을 실행합니다.
```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
snmpget -v 2c -c COMMUNITY-STRING HOSTNAME HOST-RESOURCES-MIB::hrMemorySize.0
```

{% tip %}

**참고:**  어플라이언스에서 실행되는 서비스에 대한 정보 유출을 방지하기 위해 SNMP v3에서 `authPriv` 보안 수준을 사용하지 않는 한 결과 SNMP 보고서에서 `hrSWRun` 테이블(1.3.6.1.2.1.25.4)을 제외합니다. `authPriv` 보안 수준을 사용하는 경우 `hrSWRun` 테이블이 포함됩니다.

{% endtip %}

SNMP의 일반적인 시스템 특성에 대한 OID 매핑 관련 자세한 내용은 “[Linux SNMP OID의 CPU, 메모리, 디스크 통계](http://www.linux-admins.net/2012/02/linux-snmp-oids-for-cpumemory-and-disk.html)”를 참조하세요.
