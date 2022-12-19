---
title: GitHub Actions의 고가용성
intro: '고가용성 구성에서 {% data variables.product.prodname_actions %} 관리를 위한 몇 가지 특별한 고려 사항이 있습니다.'
versions:
  ghes: '*'
type: reference
topics:
  - Actions
  - Enterprise
  - High availability
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/high-availability-for-github-actions
shortTitle: HA for GitHub Actions
ms.openlocfilehash: c8b71ddb651baa0757100c356ce3f9edb0e1edee
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145112703'
---
## {% data variables.product.prodname_actions %} 데이터 복제 또는 중복성

{% data reusables.actions.enterprise-storage-ha-backups %}

데이터 중복성 또는 복제를 사용하도록 {% data variables.product.prodname_actions %} 외부 스토리지를 구성하는 것이 좋습니다. 자세한 내용은 스토리지 공급자 설명서를 참조하세요.

* [Azure Storage 중복성 설명서](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
* [Amazon S3 복제 설명서](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html)

## 고가용성 복제본

### 복제본 승격

고가용성 구성을 사용하도록 설정하면 모든 복제본이 {% data variables.product.prodname_actions %} 외부 스토리지 구성을 사용하도록 자동으로 구성됩니다. 복제본을 승격하기 위해 장애 조치(failover)를 시작해야 하는 경우 {% data variables.product.prodname_actions %}에 대한 추가 구성 변경은 필요하지 않습니다.

자세한 내용은 “[복제본 어플라이언스로 장애 조치(failover) 시작](/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance)”을 참조하세요.

### 고가용성 복제본 제거

여러 인스턴스가 동일한 {% data variables.product.prodname_actions %} 외부 스토리지에 쓰지 않도록 합니다. 이 문제는 `ghe-repl-teardown` 명령을 사용하여 {% data variables.product.prodname_actions %} 사용 복제본을 중지하고 영구적으로 제거할 때 발생할 수 있습니다. 복제본이 독립 실행형 {% data variables.product.prodname_ghe_server %}로 변환되고, 해제 후에도 주 인스턴스와 동일한 외부 스토리지 구성을 계속 사용하기 때문입니다.

이 문제를 방지하려면 복제본 서버를 서비스 해제하거나 다른 외부 스토리지를 사용하여 {% data variables.product.prodname_actions %} 구성을 업데이트하는 것이 좋습니다.
