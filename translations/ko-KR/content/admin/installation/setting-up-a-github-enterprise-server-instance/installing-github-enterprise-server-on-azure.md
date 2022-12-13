---
title: Azure에 GitHub Enterprise Server 설치
intro: 'Azure에 {% data variables.product.prodname_ghe_server %}를 설치하려면 Premium Storage를 지원하는 메모리 최적화 인스턴스에 배포해야 합니다.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
  - /admin/installation/installing-github-enterprise-server-on-azure
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Azure
ms.openlocfilehash: 7d5d1024083e448785ca1429ffd71e343e7cd507
ms.sourcegitcommit: 152a2399e22f476eba91a74d1980b96f468f4d2c
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160867'
---
글로벌 Azure 또는 Azure Government에 {% data variables.product.prodname_ghe_server %}를 배포할 수 있습니다.

## 필수 조건

- {% data reusables.enterprise_installation.software-license %}
- 새 머신을 프로비전할 수 있는 Azure 계정이 있어야 합니다. 자세한 내용은 [Microsoft Azure 웹 사이트](https://azure.microsoft.com)를 참조하세요.
- VM(가상 머신)을 시작하는 데 필요한 대부분의 작업은 Azure Portal을 사용하여 수행할 수도 있습니다. 그러나 초기 설정을 위해 Azure CLI(명령줄 인터페이스)를 설치하는 것이 좋습니다. Azure CLI 2.0을 사용하는 예제는 다음과 같습니다. 자세한 내용은 Azure 가이드 "[Azure CLI 2.0 설치](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest)"를 참조하세요.

## 하드웨어 고려 사항

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## 가상 머신 유형 확인

Azure에서 {% data variables.location.product_location %}을(를) 시작하기 전에 조직의 요구 사항에 가장 적합한 컴퓨터 유형을 결정해야 합니다. 메모리 최적화 머신에 대한 자세한 내용은 Microsoft Azure 설명서의 "[메모리 최적화 가상 머신 크기](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes-memory)"를 참조하세요. {% data variables.product.product_name %}에 대한 최소 리소스 요구 사항을 검토하려면 "[최소 요구 사항](#minimum-requirements)"을 참조하세요.


{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

## {% data variables.product.prodname_ghe_server %} 가상 머신 만들기

{% data reusables.enterprise_installation.create-ghe-instance %}

1. 가장 최근의 {% data variables.product.prodname_ghe_server %} 어플라이언스 이미지를 찾습니다. `vm image list` 명령에 대한 자세한 내용은 Microsoft 설명서의 "[`az vm image list`](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list)"를 참조하세요.
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. 찾은 어플라이언스 이미지를 사용하여 새 VM을 만듭니다. 자세한 내용은 Microsoft 설명서의 "[`az vm create`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create)"를 참조하세요.

  VM 이름, 리소스 그룹, VM 크기, 기본 설정 Azure 지역 이름, 이전 단계에서 나열한 어플라이언스 이미지 VM의 이름 및 Premium Storage용 스토리지 SKU에 대한 옵션을 전달합니다. 리소스 그룹에 대한 자세한 내용은 Microsoft 설명서의 "[리소스 그룹](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups)"을 참조하세요.

  ```shell
  $ az vm create -n VM_NAME -g RESOURCE_GROUP --size VM_SIZE -l REGION --image APPLIANCE_IMAGE_NAME --storage-sku Premium_LRS
  ```

3. 필요한 포트를 열도록 VM에서 보안 설정을 구성합니다. 자세한 내용은 Microsoft 설명서의 "[`az vm open-port`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port)"를 참조하세요. 열려는 데 필요한 포트를 확인하기 위해 각 포트에 대한 설명은 아래 표를 참조하세요.

  ```shell
  $ az vm open-port -n VM_NAME -g RESOURCE_GROUP --port PORT_NUMBER
  ```

  이 표는 각 포트가 사용되는 대상을 식별합니다.

  {% data reusables.enterprise_installation.necessary_ports %}

4. 암호화되지 않은 새 데이터 디스크를 만들어 VM에 연결하고 사용자 라이선스 수에 따라 크기를 구성합니다. 자세한 내용은 Microsoft 설명서의 "[`az vm disk attach`](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach)"를 참조하세요.

  VM 이름(예: `ghe-acme-corp`), 리소스 그룹, Premium Storage SKU, 디스크 크기(예: `200`) 및 결과 VHD의 이름에 대한 옵션을 전달합니다.

  ```shell
  $ az vm disk attach --vm-name VM_NAME -g RESOURCE_GROUP --sku Premium_LRS --new -z SIZE_IN_GB --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **참고:** 비프로덕션 인스턴스에 충분한 I/O 처리량이 있는 경우 권장되는 최소 디스크 크기는 읽기/쓰기 캐시가 사용하도록 설정된 150GiB(`--caching ReadWrite`)입니다.

   {% endnote %}

## {% data variables.product.prodname_ghe_server %} 가상 머신 구성

1. VM을 구성하기 전에 ReadyRole 상태가 될 때까지 기다려야 합니다. `vm list` 명령을 사용하여 VM의 상태를 확인합니다. 자세한 내용은 Microsoft 설명서의 "[`az vm list`](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list)"를 참조하세요.
  ```shell
  $ az vm list -d -g RESOURCE_GROUP -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus
  
  ```
  {% note %}
  
  **참고:** Azure는 VM에 대한 FQDNS 항목을 자동으로 만들지 않습니다. 자세한 내용은 "[Azure Portal에서 Windows VM에 대한 정규화된 도메인 이름 만들기](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn)" 방법에 대한 Azure의 가이드를 참조하세요.
  
  {% endnote %}
  
  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 어플라이언스 구성](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)”을 참조하세요.
  {% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}
  
## Azure 확장 기능

{% data variables.product.product_name %}은(는) Azure 확장 기능 설치를 지원하지 않습니다. {% data variables.product.prodname_ghe_server %} 이미지는 기본 VM 관리 기능만 지원하고 고급 VM 관리 기능만 차단하는 사용자 지정된 `waagent` 패키지와 함께 제공됩니다. 

{% data variables.product.prodname_ghe_server %} 인스턴스 `walinuxagent` 의 시스템 불안정을 방지하기 위해 서비스는 제한된 모드에서 {% data variables.product.prodname_ghe_server %}에서 의도적으로 실행되어 에이전트가 다른 에이전트를 설치할 수 없도록 명시적으로 허용하지 않습니다. Azure Insights 또는 Azure Backup에 대한 모니터링 에이전트 확장과 같이 {% data variables.product.prodname_ghe_server %} 이미지와 함께 제공되는 추가 에이전트 및 확장을 사용하는 VM 관리 기능은 지원되지 않습니다.

{% data variables.product.product_name %}은(는) 필요한 애플리케이션 및 서비스만으로 사용자 지정된 Linux 운영 체제를 실행하므로 운영 체제 패키지를 수동으로 설치하거나 업데이트하면 이러한 사용자 지정이 덮어쓰여지고 예기치 않은 동작이 발생할 수 있습니다. 자세한 내용은 [시스템 개요](/admin/overview/system-overview)를 참조하세요.

## 추가 참고 자료

- “[시스템 개요](/enterprise/admin/guides/installation/system-overview)”{% ifversion ghes %}
- “[새 릴리스로 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)”{% endif %}
