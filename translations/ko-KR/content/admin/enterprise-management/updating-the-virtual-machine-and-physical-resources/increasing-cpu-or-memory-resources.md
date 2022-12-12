---
title: CPU 또는 메모리 리소스 늘리기
intro: '{% data variables.product.prodname_ghe_server %} 인스턴스에 대한 CPU 또는 메모리 리소스를 늘릴 수 있습니다.'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
  - /enterprise/admin/enterprise-management/increasing-cpu-or-memory-resources
  - /admin/enterprise-management/increasing-cpu-or-memory-resources
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
shortTitle: Increase CPU or memory
ms.openlocfilehash: 05feac78259f145f72bdcd423eff90c331949cb1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098766'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% note %}

**참고:** CPU 또는 메모리 리소스를 늘리기 전에 인스턴스를 유지 관리 모드로 전환합니다.{% ifversion ip-exception-list %} 지정된 IP 주소의 액세스를 허용하도록 IP 예외 목록을 구성하여 변경 내용의 유효성을 검사할 수 있습니다. {% endif %} 자세한 내용은 “[유지 관리 모드 사용 및 예약](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”을 참조하세요.

{% endnote %}

## AWS용 CPU 또는 메모리 리소스 추가

{% note %}

**참고:** AWS용 CPU 또는 메모리 리소스를 추가하려면 AWS Management Console 또는 `aws ec2` 명령줄 인터페이스를 사용하여 EC2 인스턴스를 관리하는 데 익숙해야 합니다. 선택한 AWS 도구를 사용하여 크기를 조정하는 방법에 대한 배경 및 자세한 내용은 [Amazon EBS 지원 인스턴스 크기 조정](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html)에 대한 AWS 설명서를 참조하세요.

{% endnote %}

### 크기 조정 고려 사항

{% 데이터 variables.location.product_location %}에 대한 CPU 또는 메모리 리소스를 늘리기 전에 다음 권장 사항을 검토합니다.

- **CPU를 사용하여 메모리를 스케일링합니다**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **인스턴스에 탄력적 IP 주소를 할당합니다**. 인스턴스에 탄력적 IP를 할당하지 않은 경우 다시 시작한 후 {% data variables.product.prodname_ghe_server %} 호스트에 대한 DNS A 레코드를 조정하여 퍼블릭 IP 주소의 변경을 고려해야 합니다. 인스턴스가 다시 시작되면 VPC(가상 프라이빗 클라우드)에서 인스턴스를 시작한 경우 인스턴스는 탄력적 IP를 유지합니다. EC2-Classic 네트워크에서 인스턴스를 만드는 경우 탄력적 IP를 인스턴스에 수동으로 다시 할당해야 합니다.

### 지원되는 AWS 인스턴스 유형

CPU/메모리 사양에 따라 업그레이드하려는 인스턴스 유형을 결정해야 합니다.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### AWS의 크기 조정

{% note %}

**참고:** EC2-Classic에서 시작된 인스턴스의 경우 인스턴스와 연결된 탄력적 IP 주소와 인스턴스의 ID를 모두 적어 둡니다. 인스턴스를 다시 시작하면 탄력적 IP 주소를 다시 연결합니다.

{% endnote %}

기존 AWS/EC2 인스턴스에 CPU 또는 메모리 리소스를 추가할 수 없습니다. 대신 다음을 수행해야 합니다.

1. 인스턴스를 중지합니다.
2. 인스턴스 형식을 변경합니다.
3. 인스턴스를 시작합니다.
{% data reusables.enterprise_installation.configuration-recognized %}

## Microsoft Azure에 CPU 또는 메모리 리소스 추가

{% note %}

**참고:** Microsoft Azure에 CPU 또는 메모리 리소스를 추가하려면 Azure Portal, Azure CLI 또는 Azure PowerShell 사용하여 VM 인스턴스를 관리하는 데 익숙해야 합니다. 원하는 Azure 도구를 사용하여 크기를 조정하는 방법에 대한 배경 및 자세한 내용은 [가상 머신의 크기 변경](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm)에 대한 Azure 설명서를 참조하세요.

{% endnote %}

### 크기 조정 고려 사항

{% 데이터 variables.location.product_location %}에 대한 CPU 또는 메모리 리소스를 늘리기 전에 다음 권장 사항을 검토합니다.

- **CPU를 사용하여 메모리를 스케일링합니다**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **인스턴스에 고정 IP 주소를 할당합니다**. 인스턴스에 고정 IP를 할당하지 않은 경우 다시 시작한 후 {% data variables.product.prodname_ghe_server %} 호스트에 대한 DNS A 레코드를 조정하여 IP 주소의 변경을 고려해야 할 수도 있습니다.

### 지원되는 Microsoft Azure 인스턴스 크기

CPU/메모리 사양에 따라 업그레이드하려는 인스턴스 크기를 결정해야 합니다.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

### Microsoft Azure 크기 조정

VM 크기를 변경하여 VM을 스케일링할 수 있습니다. VM의 크기를 변경하면 VM이 다시 시작됩니다. 경우에 따라 먼저 VM의 할당을 취소해야 합니다. 이는 현재 VM을 호스트하는 하드웨어 클러스터에서 새 크기를 사용할 수 없는 경우에 발생할 수 있습니다. 

1. 필요한 단계는 [가상 머신의 크기 변경](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm)에 대한 Azure 설명서를 참조하세요.
{% data reusables.enterprise_installation.configuration-recognized %}

## OpenStack KVM에 CPU 또는 메모리 리소스 추가

기존 OpenStack KVM 인스턴스에 CPU 또는 메모리 리소스를 추가할 수 없습니다. 대신 다음을 수행해야 합니다.

1. 현재 인스턴스의 스냅샷을 만듭니다.
2. 인스턴스를 중지합니다.
3. 원하는 CPU 또는 메모리 리소스가 있는 새 인스턴스 버전을 선택합니다.

## VMware에 CPU 또는 메모리 리소스 추가

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. vSphere 클라이언트를 사용하여 VMware ESXi 호스트에 연결합니다.
2. %}variables.location.product_location {% 데이터를 종료합니다.
3. 가상 머신을 선택하고 **설정 편집** 을 클릭합니다.
4. “하드웨어”에서 필요에 따라 가상 머신에 할당된 CPU 또는 메모리 리소스를 조정합니다. ![VMware 설치 리소스](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. 가상 머신을 시작하려면 **확인** 을 클릭합니다.
{% data reusables.enterprise_installation.configuration-recognized %}
