---
title: GitHub Actions を有効化して GitHub Enterprise Server をバックアップおよび復元する
shortTitle: Backing up and restoring
intro: '{% data variables.product.prodname_actions %} が有効になっているときに {% data variables.location.product_location %}のバックアップを復元するには、{% data variables.product.prodname_enterprise_backup_utilities %} でバックアップを復元する前に、{% data variables.product.prodname_actions %} を構成する必要があります。'
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
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107310'
---
## {% data variables.product.prodname_actions %} を使用する場合の {% data variables.product.product_name %} のバックアップについて

{% data variables.product.prodname_enterprise_backup_utilities %} を使って、{% data variables.location.product_location %}のデータと構成をバックアップし、新しいインスタンスに復元できます。 詳細については、「[アプライアンスでのバックアップの設定](/admin/configuration/configuring-backups-on-your-appliance)」を参照してください。

ただし、{% data variables.product.prodname_actions %} のすべてのデータがこれらのバックアップに含まれるわけではありません。 {% data reusables.actions.enterprise-storage-ha-backups %}

## {% data variables.product.prodname_actions %} が有効になっているときに {% data variables.product.product_name %} のバックアップを復元する

{% data variables.product.prodname_actions %} を使って {% data variables.location.product_location %}のバックアップを復元するには、{% data variables.product.prodname_enterprise_backup_utilities %} からバックアップを復元する前に、復元先インスタンスでネットワーク設定と外部ストレージを手動で構成する必要があります。 

1. 復元元インスタンスがオフラインであることを確認します。
1. 交換する {% data variables.product.prodname_ghe_server %} インスタンスで、ネットワーク設定を手動で構成します。 ネットワーク設定はバックアップスナップショットから除外され、`ghe-restore` で上書きされません。 詳細については、「[ネットワークを設定する](/admin/configuration/configuring-network-settings)」を参照してください。
1. 復元先インスタンスに SSH で接続します。 詳細については、「[管理シェル (SSH) にアクセスする](/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。

   ```shell{:copy}
   $ ssh -p 122 admin@HOSTNAME
   ```
1. 次のいずれかのコマンドを入力して、復元元インスタンスと同じ外部ストレージ サービスを {% data variables.product.prodname_actions %} に対して使うように、復元先インスタンスを構成します。
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. 復元先インスタンスで {% data variables.product.prodname_actions %} を有効にする準備をするには、次のコマンドを入力します。

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```
{% data reusables.actions.apply-configuration-and-enable %}
1. {% data variables.product.prodname_actions %} を構成して有効にした後、残りのデータをバックアップから復元するには、`ghe-restore` コマンドを使います。 詳しくは、「[バックアップの復元](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)」を参照してください。
1. 復元先インスタンスで、セルフホステッド ランナーをもう一度登録します。 詳細については、「[セルフホストランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。
