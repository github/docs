---
title: AWS로 GitHub 패키지 사용 설정
intro: 'AWS를 외부 스토리지로 사용하여 {% data variables.product.prodname_registry %}를 설정합니다.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Packages
  - Packages
shortTitle: Enable Packages with AWS
ms.openlocfilehash: 1e359bb3e91a9b53e220d9d576c674552a441f81
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097770'
---
{% warning %}

**경고:**
- {% data variables.product.company_short %}는 스토리지 버킷 구성에 특정 개체 권한 또는 추가 ACL(액세스 제어 목록)을 적용하지 않으므로 스토리지 버킷에 필요한 제한적인 액세스 정책을 구성하는 것이 중요합니다. 예를 들어 버킷을 퍼블릭으로 만드는 경우 버킷의 데이터는 퍼블릭 인터넷에서 액세스할 수 있습니다. 자세한 내용은 AWS 설명서의 “[버킷 및 개체 액세스 권한 설정](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html)”을 참조하세요.
- {% data variables.product.prodname_registry %} 스토리지에 사용하는 버킷과 별도로 {% data variables.product.prodname_actions %}에 전용 버킷을 사용하는 것이 좋습니다.
- 나중에 사용할 버킷을 구성해야 합니다. {% data variables.product.prodname_registry %}를 사용하기 시작한 후에는 스토리지를 변경하지 않는 것이 좋습니다.

{% endwarning %}

## 필수 조건

{% 데이터 variables.location.product_location_enterprise %}에서 {% 데이터 variables.product.prodname_registry %}을(를) 사용하도록 설정하고 구성하려면 AWS 스토리지 버킷을 준비해야 합니다. AWS 스토리지 버킷을 준비하려면 AWS [설명서](https://docs.aws.amazon.com/index.html)의 공식 AWS 문서를 참조하는 것이 좋습니다.

AWS 액세스 키 ID 및 비밀에 다음 권한이 있는지 확인합니다.
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## AWS 외부 스토리지로 {% data variables.product.prodname_registry %} 사용

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. “패키지 스토리지”에서 **Amazon S3** 를 선택하고 스토리지 버킷의 세부 정보를 입력합니다.
    - **AWS 서비스 URL**: 버킷의 서비스 URL입니다. 예를 들어 `us-west-2 region` 지역에서 S3 버킷을 만든 경우 이 값은 `https://s3.us-west-2.amazonaws.com`이어야 합니다.

      자세한 내용은 AWS 설명서에서 “[AWS 서비스 엔드포인트](https://docs.aws.amazon.com/general/latest/gr/rande.html)”를 참조하세요.

    - **AWS S3 버킷:** {% data variables.product.prodname_registry %} 전용 S3 버킷의 이름입니다.
    - **AWS S3 액세스 키** 및 **AWS S3 비밀 키**: 버킷의 AWS 액세스 키 ID 및 비밀 키입니다.

      AWS 액세스 키를 관리하는 방법에 대한 자세한 내용은 “[AWS ID 및 액세스 관리 설명서](https://docs.aws.amazon.com/iam/index.html)”를 참조하세요.

    ![S3 AWS 버킷 세부 정보 입력란](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## 다음 단계

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
