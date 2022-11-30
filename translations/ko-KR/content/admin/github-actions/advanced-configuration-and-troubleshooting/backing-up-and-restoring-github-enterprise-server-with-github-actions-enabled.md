---
title: GitHub Actions를 사용할 수 있는 GitHub Enterprise 서버 백업 및 복원
shortTitle: Backing up and restoring
intro: '{% data variables.product.prodname_actions %}을(를) 사용할 때 {% data variables.location.product_location %}의 백업을 복원하려면 {% data variables.product.prodname_enterprise_backup_utilities %}을(를) 사용하여 백업을 복원하기 전에 {% data variables.product.prodname_actions %}을(를) 구성해야 합니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Backups
  - Enterprise
  - Infrastructure
redirect_from:
  - /admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
ms.openlocfilehash: 43279c6b99cce6618de9253c5d0451c0a661b095
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107311'
---
## {% data variables.product.prodname_actions %}을(를) 사용할 때 {% data variables.product.product_name %}의 백업 정보

{% data variables.product.prodname_enterprise_backup_utilities %}을(를) 사용하여 {% data variables.location.product_location %}에 대한 데이터 및 구성을 백업하고 새 인스턴스로 복원할 수 있습니다. 자세한 내용은 “[어플라이언스에서 백업 구성](/admin/configuration/configuring-backups-on-your-appliance)”을 참조하세요.

그러나 {% data variables.product.prodname_actions %}에 대한 모든 데이터가 이러한 백업에 포함되지는 않습니다. {% data reusables.actions.enterprise-storage-ha-backups %}

## {% data variables.product.prodname_actions %}이(가) 사용하도록 설정된 경우 {% data variables.product.product_name %}의 백업 복원

{% data variables.product.prodname_actions %}를 사용하여 {% data variables.location.product_location %}의 백업을 복원하려면 {% data variables.product.prodname_enterprise_backup_utilities %}에서 백업을 복원하기 전에 대상 인스턴스에서 네트워크 설정 및 외부 스토리지를 수동으로 구성해야 합니다. 

1. 원본 인스턴스가 오프라인 상태인지 확인합니다.
1. 대체 {% data variables.product.prodname_ghe_server %} 인스턴스에서 네트워크 설정을 수동으로 구성합니다. 네트워크 설정은 백업 스냅샷에서 제외되며, `ghe-restore`가 덮어쓰지 않습니다. 자세한 내용은 “[네트워크 설정 구성](/admin/configuration/configuring-network-settings)”을 참조하세요.
1. 대상 인스턴스에 대한 SSH입니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/admin/configuration/accessing-the-administrative-shell-ssh)”를 참조하세요.

   ```shell{:copy}
   $ ssh -p 122 admin@HOSTNAME
   ```
1. 다음 명령 중 하나를 입력하여 {% data variables.product.prodname_actions %}에 대해 원본 인스턴스와 동일한 외부 스토리지 서비스를 사용하도록 대상 인스턴스를 구성합니다.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. 대상 인스턴스에서 {% data variables.product.prodname_actions %}를 사용하도록 준비하려면 다음 명령을 입력합니다.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```
{% data reusables.actions.apply-configuration-and-enable %}
1. {% data variables.product.prodname_actions %}을(를) 구성하고 사용하도록 설정한 후 백업에서 나머지 데이터를 복원하려면 명령을 사용합니다 `ghe-restore` . 자세한 내용은 “[백업 복원](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)”을 참조하세요.
1. 대상 인스턴스에 자체 호스팅 실행기를 다시 등록합니다. 자세한 내용은 “[자체 호스트된 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)”를 참조하세요.
