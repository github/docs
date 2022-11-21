---
title: Azure Blob Storage로 GitHub Actions 사용
intro: '{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %}를 사용하도록 설정하고 Azure Blob Storage를 사용하여 워크플로 실행에 의해 생성된 데이터를 저장할 수 있습니다.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/enabling-github-actions-with-azure-blob-storage
shortTitle: Azure Blob storage
ms.openlocfilehash: b6abccdfea0d33b387fc3ec6df563fcbaf57f861
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109541'
---
## 필수 조건

{% data variables.product.prodname_actions %}를 사용하도록 설정하기 전에 다음 단계를 완료했는지 확인합니다.

* 워크플로 데이터를 저장하기 위한 Azure Storage 계정을 만듭니다. {% data variables.product.prodname_actions %}는 해당 데이터를 블록 Blob으로 저장하며, 다음 두 가지 스토리지 계정 유형이 지원됩니다.
  * **표준** 성능 계층을 사용하는 **범용** 스토리지 계정(`general-purpose v1` 또는 `general-purpose v2`라고도 함)

    {% warning %}

    **경고:** **프리미엄** 성능 계층은 범용 스토리지 계정으로 사용할 수 없습니다. 스토리지 계정을 만들 때 **표준** 성능 계층을 선택해야 하며, 나중에 변경할 수 없습니다.

    {% endwarning %}
  * **프리미엄** 성능 계층을 사용하는 **BlockBlobStorage** 스토리지 계정

  Azure Storage 계정 유형 및 성능 계층에 대한 자세한 내용은 [Azure 설명서](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=/azure/storage/blobs/toc.json#types-of-storage-accounts)를 참조하세요.
{% data reusables.actions.enterprise-common-prereqs %}

## Azure Blob Storage로 {% data variables.product.prodname_actions %} 사용

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. “아티팩트 및 로그 스토리지”에서 **Azure Blob Storage** 를 선택하고 Azure Storage 계정의 연결 문자열을 입력합니다. 스토리지 계정의 연결 문자열을 가져오는 방법에 대한 자세한 내용은 [Azure 설명서](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys)를 참조하세요.

   ![Azure Blob Storage 및 연결 문자열 필드를](/assets/images/enterprise/management-console/actions-azure-storage.png) 선택하기 위한 라디오 단추 {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
