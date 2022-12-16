---
title: Azure Blob Storage로 GitHub 패키지 사용
intro: 'Azure Blob Storage를 외부 스토리지로 사용하여 {% data variables.product.prodname_registry %}를 설정합니다.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with Azure
ms.openlocfilehash: b851f698baba60323cbaaa69122cacdc92ec83c2
ms.sourcegitcommit: 3ece72cf2d90987575d369c44101d19d3bb06f76
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190389'
---
{% warning %}

**경고:**
- {% data variables.product.company_short %}는 스토리지 버킷 구성에 특정 개체 권한 또는 추가 ACL(액세스 제어 목록)을 적용하지 않으므로 스토리지 버킷에 필요한 제한적인 액세스 정책을 설정하는 것이 중요합니다. 예를 들어 버킷을 퍼블릭으로 설정하면 퍼블릭 인터넷에서 버킷의 데이터에 액세스할 수 있습니다.
- {% data variables.product.prodname_registry %} 스토리지에 사용하는 버킷과 별도로 {% data variables.product.prodname_actions %}에 전용 버킷을 사용하는 것이 좋습니다.
- 나중에 사용할 버킷을 구성해야 합니다. {% data variables.product.prodname_registry %}를 사용하기 시작한 후에는 스토리지를 변경하지 않는 것이 좋습니다.

{% endwarning %}

## 필수 조건

{% data variables.location.product_location_enterprise %}에서 {% data variables.product.prodname_registry %}을(를) 사용하도록 설정하고 구성하려면 Azure Blob Storage 버킷을 준비해야 합니다. Azure Blob Storage 버킷을 준비하려면 공식 [Azure Blob Storage 설명서 사이트](https://docs.microsoft.com/en-us/azure/storage/blobs/)에서 공식 Azure Blob Storage 문서를 참조하는 것이 좋습니다.

## Azure Blob Storage로 {% data variables.product.prodname_registry %} 사용

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}
1. “패키지 스토리지”에서 **Azure Blob Storage** 를 선택하고 패키지 스토리지 버킷 및 연결 문자열에 대한 Azure 컨테이너 이름을 입력합니다.

    - 컨테이너 이름 및 연결 문자열을 설정하기 전에 스토리지 컨테이너를 만들어야 합니다.

  ![Azure Blob 스토리지 컨테이너 이름 및 연결 문자열 상자](/assets/images/help/package-registry/azure-blob-storage-settings.png)

  {% note %}

  **참고:** Azure 스토리지 계정에서 액세스 키 메뉴로 이동하여 Azure 연결 문자열을 찾을 수 있습니다. 
  현재 SAS 토큰 또는 SAS URL을 연결 문자열로 사용하는 것은 지원되지 않습니다.
  
  {% endnote %}

{% data reusables.enterprise_management_console.save-settings %}

## 다음 단계

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
