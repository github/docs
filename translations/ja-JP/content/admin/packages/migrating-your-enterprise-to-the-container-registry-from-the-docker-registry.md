---
title: Docker レジストリからコンテナー レジストリへの Enterprise の移行
intro: '以前に {% data variables.location.product_location %} の Docker レジストリに保存されていた Docker イメージを、{% data variables.product.prodname_container_registry %} に移行できます。'
product: '{% data reusables.gated-features.packages %}'
permissions: 'Enterprise owners can migrate Docker images to the {% data variables.product.prodname_container_registry %}.'
versions:
  feature: docker-ghcr-enterprise-migration
shortTitle: Migrate to Container registry
topics:
  - Containers
  - Docker
  - Migration
ms.openlocfilehash: 459039d5c3a059c961ac1126e37929906d7b0325
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106382'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## {% data variables.product.prodname_container_registry %} について

{% data reusables.package_registry.container-registry-benefits %}詳しくは、「[{% data variables.product.prodname_container_registry %}の操作](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)」を参照してください。

{% data variables.location.product_location %} の {% data variables.product.prodname_registry %} を構成する方法について詳しくは、「[Enterprise の {% data variables.product.prodname_registry %} を使い始める](/admin/packages/getting-started-with-github-packages-for-your-enterprise)」をご覧ください。

## Docker レジストリからの移行について

{% data reusables.package_registry.container-registry-replaces-docker-registry %}{% data variables.location.product_location %} の Docker レジストリにイメージが含まれている場合は、イメージを手動で {% data variables.product.prodname_container_registry %} に移行する必要があります。

{% ifversion ghes %}

{% note %}

**注**: {% data reusables.package_registry.container-registry-ghes-migration-availability %}

{% endnote %}

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %}{% data variables.product.prodname_container_registry %}への移行の影響について詳しくは、「[Docker レジストリから{% data variables.product.prodname_container_registry %}への移行](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry#about-migration-from-the-docker-registry)」を参照してください。

## {% data variables.product.prodname_container_registry %}への Organization の移行

Organization の Docker イメージすべての{% data variables.product.prodname_container_registry %}への移行を開始できます。 移行操作の期間は、移行するイメージの合計数と、{% ifversion ghes %}お使いのインスタンス{% elsif ghae %}{% data variables.product.product_name %} {% endif %}での全体的な負荷によって異なります。 移行が成功すると、{% data variables.product.product_name %} に概要が表示され、今後の Docker イメージのすべてのアップロードに{% data variables.product.prodname_container_registry %}が使用されます。

{% ifversion ghes %}サイト管理者{% elsif ghae %}Enterprise 所有者{% endif %}が {% data variables.location.product_location %} にメール通知を構成している場合は、移行が完了するとメールが届きます。 詳しくは、「[通知のためのメール設定](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)」をご覧ください。

{% note %}

**{% ifversion ghes %}注{% elsif ghae %}注{% endif %}** :

{%- ifversion ghes %}
- 移行中は、お使いのインスタンスの CPU とメモリの使用量が増加します。 ユーザーのためにインスタンスのパフォーマンスを確保するために、{% data variables.product.company_short %} では、アクティビティが減少する期間に移行を開始することをお勧めします。
{%- endif %} {% ifversion ghes %}- {% endif %}移行中は、Enterprise の設定を変更{% ifversion ghes %}したり、管理 SSH セッションから `ghe-config-apply` を実行したり{% endif %}しないでください。 {% ifversion ghes %}これらのアクションによって構成の実行がトリガーされます。そのためにサービスが再起動される場合があり、{% elsif ghae %}これらの設定を変更すると、{% endif %}移行が中断される可能性があります。
{%- ifversion ghes %}
- 移行後、Docker レジストリと{% data variables.product.prodname_container_registry %}のイメージ ファイルが重複するため、インスタンスのストレージ負荷が増加します。 {% data variables.product.product_name %} の今後のリリースでは、すべての移行が完了すると、重複したファイルが削除されます。

{% data variables.location.product_location %} のパフォーマンスとストレージの監視について詳しくは、「[モニター ダッシュボードへのアクセス](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard)」をご覧ください。
{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. 左側のサイドバーで、 **[パッケージ]** をクリックします。
1. 移行するパッケージ数の右側にある **[移行の開始]** をクリックします。 移行中は、{% data variables.product.product_name %} によってこのページに進行状況が表示されます。

移行が完了すると、このページに結果が表示されます。 移行が失敗した場合、このページには、エラーの原因となったパッケージを所有している Organization が表示されます。

## 失敗した Organization 移行の再実行

移行前に、ユーザーが Docker レジストリの既存パッケージと同じ名前のパッケージを{% data variables.product.prodname_container_registry %}に作成していた場合、移行は失敗します。

1. {% data variables.product.prodname_container_registry %}内の影響を受けたコンテナーを削除します。 詳しくは、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package#deleting-a-version-of-an-organization-scoped-package-on-github)」をご覧ください。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.packages-tab %}
1. 移行するパッケージ数の右側にある **[移行の再実行]** をクリックします。 移行中は、{% data variables.product.product_name %} によってこのページに進行状況が表示されます。
1. 移行が再び失敗した場合は、手順 1 から開始して移行をもう一度実行します。
