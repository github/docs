---
title: 스테이징 환경 사용
intro: '{% data variables.product.prodname_actions %} 준비 인스턴스에서 {% data variables.product.prodname_ghe_server %}를 사용하는 방법에 대해 알아봅니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Upgrades
redirect_from:
  - /admin/github-actions/using-a-staging-environment
shortTitle: Use staging environment
ms.openlocfilehash: 30fcd40907590a56659dd653dbe3b3f6604c84da
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093547'
---
## {% data variables.product.product_name %}에 대한 스테이징 환경 정보

{% 데이터 variables.location.product_location %}에 대한 준비 또는 테스트 환경을 사용하는 것이 유용할 수 있으므로 프로덕션 환경에서 업데이트 또는 새 기능을 구현하기 전에 테스트할 수 있습니다. 자세한 내용은 “[스테이징 인스턴스 설정](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)”을 참조하세요.

## {% data variables.product.prodname_actions %}와 함께 스테이징 환경 사용

스테이징 환경을 만드는 일반적인 방법은 프로덕션 {% data variables.product.product_name %} 인스턴스의 백업을 스테이징 환경의 새 가상 머신으로 복원하는 것입니다. 스테이징 인스턴스를 사용하며 {% data variables.product.prodname_actions %} 기능을 테스트하려는 경우에는 스테이징 환경의 스토리지 구성을 검토해야 합니다.

{% data variables.product.prodname_ghe_server %} 백업을 스테이징 인스턴스로 복원한 후 스테이징 인스턴스에서 실행되는 기존 {% data variables.product.prodname_actions %} 워크플로에서 로그 또는 아티팩트 보기를 시도하면, 이 데이터가 스테이징 스토리지 위치에 없기 때문에 `404` 오류가 표시됩니다. `404` 오류를 해결하려면 스테이징 환경에서 사용할 프로덕션의 데이터를 복사하면 됩니다.

### 스토리지 구성

{% data variables.product.prodname_actions %}를 사용하도록 설정한 {% data variables.product.product_name %}이 포함된 스테이징 환경을 설정하는 경우, 프로덕션 환경과는 다른 외부 스토리지 구성을 {% data variables.product.prodname_actions %} 스토리지에 사용해야 합니다.

{% warning %}

**경고**: 스토리지 구성을 변경하지 않으면 스테이징 인스턴스가 프로덕션에 사용하는 것과 동일한 외부 스토리지에 쓸 수 있으며, 그 결과 데이터가 손실될 수 있습니다.

{% endwarning %}

{% data variables.product.prodname_actions %}의 스토리지 구성에 대한 자세한 내용은 "[{% data variables.product.prodname_ghe_server %}용 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#enabling-github-actions-with-your-storage-provider)"을 참조하세요.

### 프로덕션의 파일을 스테이징으로 복사

프로덕션 환경을 보다 정확하게 미러링하려면 필요에 따라 {% data variables.product.prodname_actions %}에 대한 프로덕션 스토리지 위치의 파일을 스테이징 스토리지 위치로 복사하면 됩니다.

* Azure Storage 계정의 경우 [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account)를 사용할 수 있습니다. 예를 들면 다음과 같습니다.

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Amazon S3 버킷의 경우 [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html)를 사용할 수 있습니다. 예를 들어:

  ```shell
  aws s3 sync s3://SOURCE-BUCKET s3://DESTINATION-BUCKET
  ```
