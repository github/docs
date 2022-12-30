---
title: Hyper-V에 GitHub Enterprise Server 설치
intro: 'Hyper-V에 {% data variables.product.prodname_ghe_server %}를 설치하려면 Windows Server 2008부터 Windows Server 2019까지를 실행하는 컴퓨터에 배포해야 합니다.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
  - /admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Hyper-V
ms.openlocfilehash: ac551529067caf689ce662dc90b8864fe41e0a6b
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009137'
---
## 필수 조건

- {% data reusables.enterprise_installation.software-license %}
- Hyper-V를 지원하는 Windows Server 2008~Windows Server 2019가 있어야 합니다.
- VM(가상 머신)을 만드는 데 필요한 대부분의 작업은 [Hyper-V 관리자](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts)를 사용하여 수행할 수도 있습니다. 그러나 초기 설정에는 Windows PowerShell 명령줄 셸을 사용하는 것이 좋습니다. PowerShell을 사용하는 예제는 다음과 같습니다. 자세한 내용은 Microsoft 가이드 “[Windows PowerShell 시작](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1)”을 참조하세요.

## 하드웨어 고려 사항

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %} 이미지 다운로드

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. “{% data variables.product.prodname_dotcom %} 온-프레미스”에서 “하이퍼바이저 선택” 드롭다운 메뉴를 선택하고 **Hyper-V(VHD)** 를 클릭합니다.
5. **Hyper-V(VHD)용 다운로드** 를 클릭합니다.

## {% data variables.product.prodname_ghe_server %} 인스턴스 만들기

{% data reusables.enterprise_installation.create-ghe-instance %}

1. PowerShell에서 새 1세대 가상 머신을 만들고, 사용자 라이선스 수에 따라 크기를 구성하고, 다운로드한 {% data variables.product.prodname_ghe_server %} 이미지를 첨부합니다. 자세한 내용은 Microsoft 문서의 “[New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps)”을 참조하세요.
  ```shell
  PS C:\> New-VM -Generation 1 -Name VM_NAME -MemoryStartupBytes MEMORY_SIZE -BootDevice VHD -VHDPath PATH_TO_VHD  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} `PATH_TO_DATA_DISK`를 디스크를 만든 위치의 경로로 바꿉니다. 자세한 내용은 Microsoft 문서의 “[New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps)”를 참조하세요.
  ```shell
  PS C:\> New-VHD -Path PATH_TO_DATA_DISK -SizeBytes DISK_SIZE
  ```
3. 데이터 디스크를 인스턴스에 연결합니다. 자세한 내용은 Microsoft 문서의 “[Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps)”를 참조하세요.
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName VM_NAME -Path PATH_TO_DATA_DISK
  ```
4. VM을 시작합니다. 자세한 내용은 Microsoft 문서의 “[Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps)”을 참조하세요.
  ```shell
  PS C:\> Start-VM -Name VM_NAME
  ```
5. VM의 IP 주소를 가져옵니다. 자세한 내용은 Microsoft 문서의 “[Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps)”를 참조하세요.
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName VM_NAME).IpAddresses
  ```
6. VM의 IP 주소를 복사하여 웹 브라우저에 붙여넣습니다.

## {% data variables.product.prodname_ghe_server %} 인스턴스 구성

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 어플라이언스 구성](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”을 참조하세요.
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 추가 참고 자료

- “[시스템 개요](/enterprise/admin/guides/installation/system-overview)”{% ifversion ghes %}
- “[새 릴리스로 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)”{% endif %}
