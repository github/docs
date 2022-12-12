---
title: MinIO로 GitHub 패키지 사용 설정
intro: 'MinIO를 외부 스토리지로 사용하여 {% data variables.product.prodname_registry %}를 설정합니다.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with MinIO
ms.openlocfilehash: 9a6ee2cdc40a9487fac21de915084795e6a9b5bf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097836'
---
{% warning %}

**경고:**
- {% data variables.product.company_short %}는 스토리지 버킷 구성에 특정 개체 권한 또는 추가 ACL(액세스 제어 목록)을 적용하지 않으므로 스토리지 버킷에 필요한 제한적인 액세스 정책을 설정하는 것이 중요합니다. 예를 들어 버킷을 퍼블릭으로 설정하면 퍼블릭 인터넷에서 버킷의 데이터에 액세스할 수 있습니다.
- {% data variables.product.prodname_registry %} 스토리지에 사용하는 버킷과 별도로 {% data variables.product.prodname_actions %}에 전용 버킷을 사용하는 것이 좋습니다.
- 나중에 사용할 버킷을 구성해야 합니다. {% data variables.product.prodname_registry %}를 사용하기 시작한 후에는 스토리지를 변경하지 않는 것이 좋습니다.

{% endwarning %}

## 필수 조건

{% 데이터 variables.location.product_location_enterprise %}에서 {% 데이터 variables.product.prodname_registry %}을(를) 사용하도록 설정하고 구성하려면 MinIO 스토리지 버킷을 준비해야 합니다. MinIO 버킷을 빠르게 설정하고 MinIO의 사용자 지정 옵션을 탐색하는 데 도움이 되는 “[{% data variables.product.prodname_registry %}에 대한 MinIO 스토리지 버킷을 구성하기 위한 빠른 시작](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages)”을 참조하세요.

MinIO 외부 스토리지 액세스 키 ID 및 비밀에 다음 권한이 있는지 확인합니다.
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## MinIO 외부 스토리지로 {% data variables.product.prodname_registry %} 사용

MinIO는 현재 “패키지 스토리지” 아래의 사용자 인터페이스에 나타나지 않지만 {% data variables.product.prodname_enterprise %}의 {% data variables.product.prodname_registry %}에서 계속 지원됩니다. 또한 MinIO의 개체 스토리지는 S3 API와 호환되며 AWS S3 세부 정보 대신 MinIO의 버킷 세부 정보를 입력할 수 있습니다.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. “패키지 스토리지”에서 **Amazon S3** 를 선택합니다.
1. AWS 스토리지 설정에 MinIO 스토리지 버킷의 세부 정보를 입력합니다.
    - **AWS 서비스 URL:** MinIO 버킷에 대한 호스팅 URL입니다.
    - **AWS S3 버킷:** {% data variables.product.prodname_registry %} 전용 S3 호환 MinIO 버킷의 이름입니다.
    - **AWS S3 액세스 키** 및 **AWS S3 보안 키**: MinIO 액세스 키 ID 및 보안 키를 입력하여 버킷에 액세스합니다.

    ![S3 AWS 버킷 세부 정보 입력란](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## 다음 단계

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
