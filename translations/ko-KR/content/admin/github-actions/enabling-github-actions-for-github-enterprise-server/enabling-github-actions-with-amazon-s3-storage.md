---
title: Amazon S3 스토리지로 GitHub Actions 사용
intro: '{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %}를 사용하도록 설정하고 Amazon S3 스토리지를 사용하여 워크플로 실행에 의해 생성된 데이터를 저장할 수 있습니다.'
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
  - /admin/github-actions/enabling-github-actions-with-amazon-s3-storage
shortTitle: Amazon S3 storage
ms.openlocfilehash: 23fd8eabe502a6a29610de451cae72542ceca53f
ms.sourcegitcommit: 8f7c8d52755cc3af0f366cc74c6db9e9be4d2ecd
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132650'
---
## 필수 조건

{% note %}

**참고:** {% data variables.product.prodname_dotcom %}지원되는 S3 스토리지 공급자는 AMAZON S3 및 MINIO Gateway for NAS뿐입니다.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

{% data variables.product.prodname_actions %}를 사용하도록 설정하기 전에 다음 단계를 완료했는지 확인합니다.

* 워크플로 실행에서 생성된 데이터를 저장하기 위한 Amazon S3 버킷을 만듭니다. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Amazon S3 스토리지로 {% data variables.product.prodname_actions %} 사용

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. “아티팩트 및 로그 스토리지”에서 **Amazon S3** 을 선택하고 스토리지 버킷의 세부 정보를 입력합니다.

   * **AWS 서비스 URL**: 버킷의 서비스 URL입니다. 예를 들어 `us-west-2` 지역에서 S3 버킷을 만든 경우 이 값은 `https://s3.us-west-2.amazonaws.com`이어야 합니다.

     자세한 내용은 AWS 설명서에서 “[AWS 서비스 엔드포인트](https://docs.aws.amazon.com/general/latest/gr/rande.html)”를 참조하세요.
   * **AWS S3 버킷**: S3 버킷의 이름입니다.
   * **AWS S3 액세스 키** 및 **AWS S3 비밀 키**: 버킷의 AWS 액세스 키 ID 및 비밀 키입니다. AWS 액세스 키를 관리하는 방법에 대한 자세한 내용은 “[AWS ID 및 액세스 관리 설명서](https://docs.aws.amazon.com/iam/index.html)”를 참조하세요.

   ![Amazon S3 Storage 및 S3 구성](/assets/images/enterprise/management-console/actions-aws-s3-storage.png) 필드 선택 라디오 단추 {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
