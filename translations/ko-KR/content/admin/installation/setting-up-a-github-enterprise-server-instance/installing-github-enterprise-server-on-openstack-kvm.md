---
title: OpenStack KVM에 GitHub Enterprise Server 설치
intro: 'OpenStack KVM에 {% data variables.product.prodname_ghe_server %}를 설치하려면 OpenStack 액세스 권한이 있어야 하며 {% data variables.product.prodname_ghe_server %} QCOW2 이미지를 다운로드해야 합니다.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
  - /admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on OpenStack
ms.openlocfilehash: 7b0f84fa34a0d4177b8a6f316d2b8c7d724c987a
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098382'
---
## 필수 조건

- {% data reusables.enterprise_installation.software-license %}
- OpenStack 서비스에 대한 웹 기반 사용자 인터페이스인 OpenStack Horizon 설치에 액세스할 수 있어야 합니다. 자세한 내용은 [Horizon 설명서](https://docs.openstack.org/horizon/latest/)를 참조하세요.

## 하드웨어 고려 사항

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## {% data variables.product.prodname_ghe_server %} 이미지 다운로드

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. "{% data variables.product.prodname_dotcom %} 온-프레미스"에서 "하이퍼바이저 선택" 드롭다운 메뉴를 선택하고 **OpenStack KVM(QCOW2)** 을 클릭합니다.
5. **OpenStack KVM(QCOW2) 다운로드** 를 클릭합니다.

## {% data variables.product.prodname_ghe_server %} 인스턴스 만들기

{% data reusables.enterprise_installation.create-ghe-instance %}

1. OpenStack Horizon에서 다운로드한 {% data variables.product.prodname_ghe_server %} 이미지를 업로드합니다. 자세한 내용은 OpenStack 가이드 "[이미지 업로드 및 관리](https://docs.openstack.org/horizon/latest/user/manage-images.html)"의 "이미지 업로드" 섹션을 참조하세요.
{% data reusables.enterprise_installation.create-attached-storage-volume %} 자세한 내용은 OpenStack 가이드 “[볼륨 만들기 및 관리](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)”를 참조하세요.
3. 보안 그룹을 만들고 아래 표의 각 포트에 대해 새 보안 그룹 규칙을 추가합니다. 자세한 내용은 OpenStack 가이드 "[인스턴스에 대한 액세스 및 보안 구성](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html)"을 참조하세요.

  {% data reusables.enterprise_installation.necessary_ports %}
4. 필요에 따라 부동 IP를 인스턴스에 연결합니다. OpenStack 설정에 따라 부동 IP를 프로젝트에 할당하고 인스턴스에 연결해야 할 수 있습니다. 시스템 관리자에게 문의하여 사용자에게 적합한지 확인합니다. 자세한 내용은 OpenStack 설명서에서 "[인스턴스에 부동 IP 주소 할당](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance)"을 참조하세요.
5. 이전 단계에서 만든 이미지, 데이터 볼륨 및 보안 그룹을 사용하여 {% 데이터 variables.location.product_location %}을(를) 시작합니다. 자세한 내용은 OpenStack 가이드 "[인스턴스 시작 및 관리](https://docs.openstack.org/horizon/latest/user/launch-instances.html)"를 참조하세요.

## {% data variables.product.prodname_ghe_server %} 인스턴스 구성

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 어플라이언스 구성](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”을 참조하세요.
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## 추가 참고 자료

- “[시스템 개요](/enterprise/admin/guides/installation/system-overview)”{% ifversion ghes %}
- “[새 릴리스로 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)”{% endif %}
