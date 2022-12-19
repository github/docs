---
title: VMware에 GitHub Enterprise Server 설치
intro: 'VMware에 {% data variables.product.prodname_ghe_server %}를 설치하려면 VMware vSphere 클라이언트를 다운로드한 다음 {% data variables.product.prodname_ghe_server %} 소프트웨어를 다운로드하여 배포해야 합니다.'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware
  - /enterprise/admin/articles/installing-vmware-tools
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
  - /admin/installation/installing-github-enterprise-server-on-vmware
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on VMware
ms.openlocfilehash: 0e1c890552bad9de64f966ee9c1869bd963c211a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098750'
---
## 필수 조건

- {% data reusables.enterprise_installation.software-license %}
- {% 데이터 variables.location.product_location %}s을(를) 실행하는 운영 체제 미설치 머신에 적용된 VMware vSphere ESXi 하이퍼바이저가 있어야 합니다. {% data variables.product.prodname_ghe_server %} 3.4 이하에 대해 버전 5.5~6.7을 지원합니다. ESX 버전 7.0은 {% data variables.product.prodname_ghe_server %} 3.5 이상에서 지원됩니다. ESXi Hypervisor는 무료이며 vCenter Server(선택 사항)가 포함되어 있지 않습니다. 자세한 내용은 [VMware ESXi 설명서](https://www.vmware.com/products/esxi-and-esx.html)를 참조하세요.
- vSphere 클라이언트에 액세스해야 합니다. vCenter Server가 있는 경우 vSphere 웹 클라이언트를 사용할 수 있습니다. 자세한 내용은 VMware 가이드 “[Log in to vCenter Server by Using the vSphere Web Client](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html)”(vSphere 웹 클라이언트를 사용하여 vCenter Server에 로그인)을 참조하세요.

## 하드웨어 고려 사항

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %} 이미지 다운로드

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. “{% data variables.product.prodname_dotcom %} 온-프레미스”에서 “하이퍼바이저 선택” 드롭다운 메뉴를 선택하고 **VMware ESXi/vSphere(OVA)** 를 클릭합니다.
5. **VMware ESXi/vSphere(OVA) 다운로드** 를 클릭합니다.

## {% data variables.product.prodname_ghe_server %} 인스턴스 만들기

{% data reusables.enterprise_installation.create-ghe-instance %}

1. vSphere Windows 클라이언트 또는 vCenter 웹 클라이언트를 사용하여 다운로드한 {% data variables.product.prodname_ghe_server %} 이미지를 가져옵니다. 자세한 내용은 VMware 가이드 “[Deploy an OVF or OVA Template](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html)”(OVF 또는 OVA 템플릿 배포)를 참조하세요.
    - 데이터 저장소를 선택할 때 VM의 디스크를 호스트하기에 충분한 공간이 있는 데이터 저장소를 선택합니다. 인스턴스 크기에 권장되는 최소 하드웨어 사양은 “[하드웨어 고려 사항](#hardware-considerations)”을 참조하세요. 지연 비우기로 씩 프로비저닝하는 것이 좋습니다.
    - VM을 프로비저닝한 후 리포지토리 데이터에 연결된 스토리지 볼륨을 추가해야 하므로 **배포 후 전원 켜기** 확인란을 선택하지 않은 상태로 둡니다.
{% data reusables.enterprise_installation.create-attached-storage-volume %} 자세한 내용은 VMware 가이드 “[Add a New Hard Disk to a Virtual Machine](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html)”(Virtual Machine에 새 하드 디스크 추가)을 참조하세요.

## {% data variables.product.prodname_ghe_server %} 인스턴스 구성

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 어플라이언스 구성](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”을 참조하세요.
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 추가 참고 자료

- “[시스템 개요](/enterprise/admin/guides/installation/system-overview)”{% ifversion ghes %}
- “[새 릴리스로 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)”{% endif %}
