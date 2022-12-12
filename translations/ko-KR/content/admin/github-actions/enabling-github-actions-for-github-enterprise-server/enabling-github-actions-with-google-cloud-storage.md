---
title: Google Cloud Storage를 사용하여 GitHub Actions 사용
intro: '{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %}을(를) 사용하도록 설정하고 Google Cloud Storage를 사용하여 워크플로 실행에 의해 생성된 데이터를 저장할 수 있습니다.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  feature: actions-ghes-gcp-storage
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
shortTitle: Google Cloud Storage
ms.openlocfilehash: 33ecb0adfb0786a4308bba80ecc6467fc7adb4e5
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192955'
---
{% note %}

**참고:** Google Cloud Storage에 대한 {% 데이터 variables.product.prodname_actions %} 지원은 현재 베타 버전이며 변경될 수 있습니다.

{% endnote %}

{% data reusables.actions.enterprise-storage-about %}

## 필수 조건

{% data variables.product.prodname_actions %}를 사용하도록 설정하기 전에 다음 단계를 완료했는지 확인합니다.

* 워크플로 실행에 의해 생성된 데이터를 저장하기 위한 Google Cloud Storage 버킷을 만듭니다.
* 버킷에 액세스할 수 있는 Google Cloud 서비스 계정을 만들고 서비스 계정에 대한 해시 기반 HMAC(메시지 인증 코드) 키를 만듭니다. 자세한 내용은 Google Cloud 설명서의 "[서비스 계정에 대한 HMAC 키 관리](https://cloud.google.com/storage/docs/authentication/managing-hmackeys)"를 참조하세요.

  서비스 계정에는 버킷에 대한 다음 [IAM(ID 및 액세스 관리) 권한이](https://cloud.google.com/storage/docs/access-control/iam-permissions) 있어야 합니다.

  * `storage.objects.create`
  * `storage.objects.get`
  * `storage.objects.list`
  * `storage.objects.update`
  * `storage.objects.delete`
  * `storage.multipartUploads.create`
  * `storage.multipartUploads.abort`
  * `storage.multipartUploads.listParts`
  * `storage.multipartUploads.list` {% data reusables.actions.enterprise-common-prereqs %}

## Google Cloud Storage에서 {% data variables.product.prodname_actions %} 사용

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. "아티팩트 & 로그 스토리지"에서 **Google Cloud Storage** 를 선택하고 버킷의 세부 정보를 입력합니다.

   * **서비스 URL**: 버킷의 서비스 URL입니다. 일반적으로 `https://storage.googleapis.com`입니다.
   * **버킷 이름**: 버킷의 이름입니다.
   * **HMAC 액세스 ID** 및 **HMAC 비밀**: 스토리지 계정에 대한 Google Cloud 액세스 ID 및 비밀입니다. 자세한 내용은 Google Cloud 설명서의 "[서비스 계정에 대한 HMAC 키 관리](https://cloud.google.com/storage/docs/authentication/managing-hmackeys)"를 참조하세요.

   ![구성 {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %} 구성](/assets/images/enterprise/management-console/actions-google-cloud-storage.png) 을 위한 Google Cloud Storage 및 필드를 선택하기 위한 라디오 단추

{% data reusables.actions.enterprise-postinstall-nextsteps %}
