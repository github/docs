---
title: 유지 관리 모드 사용 설정 및 예약
intro: '{% 데이터 variables.location.product_location %}을(를) 업그레이드하거나 백업을 복원하는 것과 같은 일부 표준 유지 관리 절차에서는 정상적인 사용을 위해 인스턴스를 오프라인으로 전환해야 합니다.'
redirect_from:
  - /enterprise/admin/maintenance-mode
  - /enterprise/admin/categories/maintenance-mode
  - /enterprise/admin/articles/maintenance-mode
  - /enterprise/admin/articles/enabling-maintenance-mode
  - /enterprise/admin/articles/disabling-maintenance-mode
  - /enterprise/admin/guides/installation/maintenance-mode
  - /enterprise/admin/installation/enabling-and-scheduling-maintenance-mode
  - /enterprise/admin/configuration/enabling-and-scheduling-maintenance-mode
  - /admin/configuration/enabling-and-scheduling-maintenance-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Maintenance
  - Upgrades
shortTitle: Configure maintenance mode
ms.openlocfilehash: 6bd4a49f4f1898b16d3fde1585436b3bd5519f30
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094323'
---
## 유지 관리 모드 정보

일부 유형의 작업을 수행하려면 {% 데이터 variables.location.product_location %}을(를) 오프라인으로 전환하고 유지 관리 모드로 전환해야 합니다.
- 새 버전의 {% data variables.product.prodname_ghe_server %}로 업그레이드
- 가상 머신에 할당된 CPU, 메모리 또는 스토리지 리소스 증가
- 한 가상 머신에서 다른 가상 머신으로 데이터 마이그레이션
- {% data variables.product.prodname_enterprise_backup_utilities %} 스냅샷에서 데이터 복원
- 특정 유형의 중요한 애플리케이션 문제 해결

사용자에게 준비 시간을 제공하기 위해 나중에는 최소 30분 동안 유지 관리 기간을 예약하는 것이 좋습니다. 유지 관리 기간이 예약되면 사이트에 액세스할 때 모든 사용자에게 배너가 표시됩니다.



![예약된 유지 관리에 대한 최종 사용자 배너](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

인스턴스가 유지 관리 모드인 경우 모든 일반 HTTP 및 Git 액세스가 거부됩니다. Git 가져오기, 복제 및 푸시 작업도 사이트를 일시적으로 사용할 수 없음을 나타내는 오류 메시지와 함께 거부됩니다. 고가용성 구성에서는 Git 복제가 일시 중지됩니다. GitHub Actions 작업은 실행되지 않습니다. 브라우저에서 사이트를 방문하면 유지 관리 페이지로 이어집니다.

![유지 관리 모드 시작 화면](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

{% ifversion ip-exception-list %}

제공된 IP 주소 및 범위에서만 {% 데이터 variables.location.product_location %}에 액세스할 수 있도록 IP 예외 목록을 구성하여 유지 관리 작업의 초기 유효성 검사를 수행할 수 있습니다. IP 예외 목록에 지정되지 않은 IP 주소에서 {% 데이터 variables.location.product_location %}에 액세스하려는 시도는 인스턴스가 유지 관리 모드에 있을 때 전송된 것과 일치하는 응답을 받습니다. 

{% endif %}

## 유지 관리 모드를 즉시 사용 설정하거나 나중에 유지 관리 기간을 예약합니다.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. {% data variables.enterprise.management_console %}의 상단에서 **유지 관리** 를 클릭합니다.
  ![유지 관리 탭](/assets/images/enterprise/management-console/maintenance-tab.png)
3. “사용 설정 및 예약”에서 유지 관리 모드를 즉시 사용 설정할지 또는 향후에 유지 관리 기간을 예약할지 결정합니다.
    - 유지 관리 모드를 즉시 사용 설정하려면 드롭다운 메뉴에서 **지금** 을 클릭합니다.
    ![현재 유지 관리 모드를 사용 설정하는 옵션이 선택되어 있는 드롭다운 메뉴](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - 나중에 유지 관리 기간을 예약하려면 드롭다운 메뉴를 사용해 시작 시간을 클릭합니다.
    ![2시간 안에 유지 관리 기간을 예약하는 옵션이 선택된 드롭다운 메뉴](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. **유지 관리 모드 사용 설정** 을 선택합니다.
  ![유지 관리 모드를 사용 설정하거나 예약하기 위한 확인란](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ip-exception-list %}

## IP 예외 목록을 사용하여 유지 관리 모드의 변경 내용 유효성 검사

IP 예외 목록은 {% 데이터 variables.location.product_location %}에 대한 제어 및 제한된 액세스를 제공하며, 이는 유지 관리 작업 후 서버 상태의 초기 유효성 검사에 적합합니다. 사용하도록 설정하면 {% 데이터 variables.location.product_location %}이(가) 유지 관리 모드에서 벗어나 구성된 IP 주소에서만 사용할 수 있습니다. 상태 변경을 반영하도록 유지 관리 모드 확인란이 업데이트됩니다.

유지 관리 모드를 다시 사용하도록 설정하면 IP 예외 목록이 비활성화되고 {% 데이터 variables.location.product_location %}이(가) 유지 관리 모드로 돌아갑니다. IP 예외 목록을 사용하지 않도록 설정하면 {% 데이터 variables.location.product_location %}이(가) 정상 작업으로 돌아갑니다.

명령줄 유틸리티를 사용하여 IP 예외 목록을 구성할 수도 있습니다. 자세한 내용은 “[명령줄 유틸리티](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-maintenance)” 및 “[관리 셸(SSH) 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)”를 참조하세요.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. {% data variables.enterprise.management_console %}의 맨 위에서 **유지 관리** 를 클릭하고 유지 관리 모드가 이미 활성화되어 있는지 확인합니다.
  ![유지 관리 탭](/assets/images/enterprise/management-console/maintenance-tab.png)
1. **IP 예외 목록 사용** 을 선택합니다.
 ![IP 예외 목록을 활성화하기 위한 확인란](/assets/images/enterprise/maintenance/enable-ip-exception-list.png)
1. 텍스트 상자에 {% 데이터 variables.location.product_location %}에 액세스할 수 있도록 허용해야 하는 공간으로 구분된 IP 주소 또는 CIDR 블록의 유효한 목록을 입력합니다.
 ![IP 주소에 대한 완료된 필드](/assets/images/enterprise/maintenance/ip-exception-list-ip-addresses.png)
1. **저장** 을 클릭합니다.
![IP 예외 목록이 저장된 후](/assets/images/enterprise/maintenance/ip-exception-save.png)

{% endif %}

## {% 데이터 variables.product.prodname_enterprise_api %}을(를) 사용하여 유지 관리 모드 예약

{% 데이터 variables.product.prodname_enterprise_api %}을(를) 사용하여 다른 시간 또는 날짜에 대한 유지 관리를 예약할 수 있습니다. 자세한 내용은 “[관리 콘솔](/enterprise/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode)”을 참조하세요.

## 클러스터의 모든 노드에 유지 관리 모드 사용 설정 또는 사용 안 함

`ghe-cluster-maintenance` 유틸리티를 사용하면 클러스터의 모든 노드에 유지 관리 모드를 설정하거나 설정 해제할 수 있습니다.

```shell
$ ghe-cluster-maintenance -h
# Shows options
$ ghe-cluster-maintenance -q
# Queries the current mode
$ ghe-cluster-maintenance -s
# Sets maintenance mode
$ ghe-cluster-maintenance -u
# Unsets maintenance mode
```
