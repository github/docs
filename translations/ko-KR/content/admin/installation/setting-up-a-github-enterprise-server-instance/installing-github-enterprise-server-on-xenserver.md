---
title: XenServer에 GitHub Enterprise Server 설치
intro: XenServer에 {% data variables.product.prodname_ghe_server %}를 설치하려면 {% data variables.product.prodname_ghe_server %} 디스크 이미지를 XenServer 호스트에 배포해야 합니다.
redirect_from:
- /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver
- /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
- /admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  ghes: <=3.2
type: tutorial
topics:
- Administrator
- Enterprise
- Infrastructure
- Set up
shortTitle: Install on XenServer
ms.openlocfilehash: f4991244e74c9a61d953ecba08cc5c4985906fb6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145116524"
---
{% note %}

  **참고:** XenServer의 {% data variables.product.prodname_ghe_server %}에 대한 지원은 {% data variables.product.prodname_ghe_server %} 3.3에서 중단됩니다. 자세한 내용은 [{% data variables.product.prodname_ghe_server %} 3.1 릴리스 정보](/admin/release-notes#3.1.0)를 참조하세요.

{% endnote %}

## 필수 조건

- {% data reusables.enterprise_installation.software-license %}
- {% data variables.product.prodname_ghe_server %} VM(가상 머신)을 실행할 머신에 XenServer Hypervisor를 설치해야 합니다. 버전 6.0부터 7.0까지 지원합니다.
- 초기 설정에는 XenCenter Windows 관리 콘솔을 사용하는 것이 좋습니다. XenCenter Windows 관리 콘솔 사용 지침은 아래에 나와 있습니다. 자세한 내용은 Citrix 가이드 “[How to Download and Install a New Version of XenCenter](https://support.citrix.com/article/CTX118531)”(XenCenter의 새 버전을 다운로드하고 설치하는 방법)을 참조하세요.

## 하드웨어 고려 사항

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %} 이미지 다운로드

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. “{% data variables.product.prodname_dotcom %} 온-프레미스”에서 “하이퍼바이저 선택” 드롭다운 메뉴를 선택하고 **XenServer(VHD)** 를 클릭합니다.
5. 라이선스 파일을 다운로드하려면 **라이선스 다운로드** 를 클릭합니다.

## {% data variables.product.prodname_ghe_server %} 인스턴스 만들기

{% data reusables.enterprise_installation.create-ghe-instance %}

1. XenCenter에서 다운로드한 {% data variables.product.prodname_ghe_server %} 이미지를 가져옵니다. 자세한 내용은 XenCenter 가이드 “[Import Disk Images](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html)”(디스크 이미지 가져오기)를 참조하세요.
    - “운영 체제 픽스업 사용” 단계에서 **운영 체제 픽스업 사용 안 함** 을 선택합니다.
    - 완료되면 VM을 전원이 꺼진 상태로 둡니다.
{% data reusables.enterprise_installation.create-attached-storage-volume %} 자세한 내용은 XenCenter 가이드 “[Add Virtual Disks](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html)”(가상 디스크 추가)를 참조하세요.

## {% data variables.product.prodname_ghe_server %} 인스턴스 구성

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 어플라이언스 구성](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”을 참조하세요.
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 추가 참고 자료

- “[시스템 개요](/enterprise/admin/guides/installation/system-overview)”{% ifversion ghes %}
- “[새 릴리스로 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)”{% endif %}
