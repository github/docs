---
title: NAS 스토리지용 MinIO Gateway를 통해 GitHub Actions 사용
intro: '{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %}를 사용하도록 설정하고 NAS용 MinIO Gateway 스토리지를 사용하여 워크플로 실행에 의해 생성된 데이터를 저장할 수 있습니다.'
permissions: Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.
versions:
  ghes: '*'
type: how_to
topics:
- Actions
- Enterprise
- Infrastructure
- Storage
redirect_from:
- /admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage
shortTitle: MinIO Gateway for NAS storage
ms.openlocfilehash: bb738d04d54234704f3278422c1f1ef075956640
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106871"
---
{% data reusables.actions.minio-gateways-removal %}

## 필수 조건

{% data variables.product.prodname_actions %}를 사용하도록 설정하기 전에 다음 단계를 완료했는지 확인합니다.

* 어플라이언스에서 리소스 경합을 방지하려면 MinIO를 {% data variables.location.product_location %}에서 별도로 호스트하는 것이 좋습니다.
* 워크플로 데이터 저장을 위한 버킷을 만듭니다. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## NAS 스토리지용 MinIO Gateway를 사용하여 {% data variables.product.prodname_actions %} 활성화

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. “아티팩트 및 로그 스토리지”에서 **Amazon S3** 를 선택하고 스토리지 버킷의 세부 정보를 입력합니다.

   * **AWS 서비스 URL**: MinIO 서비스에 대한 URL입니다. 예: `https://my-minio.example:9000`.
   * **AWS S3 버킷**: S3 버킷의 이름입니다.
   * **AWS S3 액세스 키** 및 **AWS S3 비밀 키**: MinIO 인스턴스에 사용되는 `MINIO_ACCESS_KEY` 및 `MINIO_SECRET_KEY`입니다.

   ![MinIO 구성을 위한 Amazon S3 Storage 및 필드를 선택하기 위한 라디오 단추](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. “아티팩트 및 로그 스토리지”에서 **경로 스타일 강제** 를 선택합니다.

   ![경로 스타일](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) 강제 적용 확인란 {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
