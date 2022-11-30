---
title: ステージングインスタンスのセットアップ
intro: '別の分離された環境に {% data variables.product.product_name %} インスタンスを設定し、そのインスタンスを使って変更の検証とテストを行うことができます。'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Set up a staging instance
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ce7d9dde9f86ea5159657203e13d9d191b6b7466
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106862'
---
## ステージング インスタンスについて

{% data variables.product.company_short %} では、{% data variables.location.product_location %}の構成のバックアップ、更新、または変更をテストするために個別の環境を設定することを推奨しています。 運用システムから分離する必要があるこの環境は、ステージング環境と呼ばれます。

たとえば、データの損失から保護するために、運用インスタンスのバックアップを定期的に検証できます。 ステージング環境の別の {% data variables.product.product_name %} インスタンスに、運用データのバックアップを定期的に復元できます。 このステージング インスタンスでは、{% data variables.product.product_name %} の最新の機能リリースへのアップグレードをテストすることもできます。

{% tip %}

**ヒント:** ステージング インスタンスを本番容量で使用しない限り、既存の {% data variables.product.prodname_enterprise %} ライセンス ファイルを再利用できます。

{% endtip %}

## ステージング環境に関する考慮事項

{% data variables.product.product_name %} を十分にテストし、運用環境とできるだけ似た環境を再作成するには、インスタンスと対話する外部システムを検討してください。 たとえば、ステージング環境では次をテストできます。

- 認証 (特に SAML などの外部認証プロバイダーを使用する場合)
- 外部のチケットシステムとの統合
- 継続的インテグレーションサーバとの統合
- {% data variables.product.prodname_enterprise_api %} を利用する外部のスクリプトあるいはソフトウェア
- メール通知のための外部のSMTPサーバ

## ステージングインスタンスのセットアップ

ステージング インスタンスを最初からセットアップしたり、必要に応じてインスタンスを設定したりすることができます。 詳しい情報については、「[{% data variables.product.product_name %} インスタンスをセットアップする](/admin/installation/setting-up-a-github-enterprise-server-instance)」および「[Enterprise を設定する](/admin/configuration/configuring-your-enterprise)」を参照してください。

または、運用インスタンスのバックアップをステージング インスタンスに復元することで、運用構成を反映するステージング インスタンスを作成することもできます。

1. [運用インスタンスをバックアップします](#1-back-up-your-production-instance)。
2. [ステージング インスタンスをセットアップします](#2-set-up-a-staging-instance)。
3. [{% data variables.product.prodname_actions %} を設定します](#3-configure-github-actions)。
4. [{% data variables.product.prodname_registry %} を設定します](#4-configure-github-packages)。
5. [運用バックアップを復元します](#5-restore-your-production-backup)。
6. [インスタンスの設定を確認します](#6-review-the-instances-configuration)。
7. [インスタンスの構成を適用します](#7-apply-the-instances-configuration)。

### 1. 運用インスタンスをバックアップする

運用インスタンスと同じデータと設定を含むインスタンスで変更をテストする場合は、{% data variables.product.prodname_enterprise_backup_utilities %} を使用して運用インスタンスからデータと設定をバックアップします。 詳細については、「[アプライアンスでのバックアップの設定](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)」を参照してください。

{% warning %}

**警告**: 運用環境で {% data variables.product.prodname_actions %} または {% data variables.product.prodname_registry %} を使用する場合、バックアップには外部ストレージの運用設定が含まれます。 ステージング インスタンスから運用ストレージに書き込むことでデータが失われる可能性を回避するには、バックアップを復元する前に、手順 3 と 4 の各機能を設定する必要があります。

{% endwarning %}

### 2. ステージング インスタンスをセットアップする

新しいインスタンスをステージング環境として動作するようにセットアップしてください。 ステージングインスタンスのプロビジョニングとインストールについては、本番インスタンスと同じガイドが利用できます。 詳細については、「[{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)」を参照してください。

運用インスタンスのバックアップを復元する場合は、次の手順に進みます。 または、インスタンスを手動で設定し、以降の手順にスキップすることもできます。

### 3. {% data variables.product.prodname_actions %} を設定する

必要に応じて、運用インスタンスで {% data variables.product.prodname_actions %} を使用する場合、運用バックアップを復元する前にステージング インスタンスで機能を設定します。 {% data variables.product.prodname_actions %} を使用しない場合は、「[4. {% data variables.product.prodname_registry %} を設定する](#4-configure-github-packages)」にスキップします。

{% warning %}

**警告**: 運用バックアップを復元する前にステージング インスタンスで {% data variables.product.prodname_actions %} を設定しないと、ステージング インスタントで運用インスタンスの外部ストレージが使用され、データが失われる可能性があります。 ステージング インスタンスには別の外部ストレージを使用することを強くお勧めします。 詳細については、「[ステージング環境を使用する](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)」を参照してください。

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. {% data variables.product.prodname_actions %} の外部ストレージ プロバイダーを使用するようにステージング インスタンスを設定するには、次のコマンドのいずれかを入力します。
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. ステージング インスタンスで {% data variables.product.prodname_actions %} を有効にする準備をするには、次のコマンドを入力します。

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```

### 4. {% data variables.product.prodname_registry %} を設定する

必要に応じて、運用インスタンスで {% data variables.product.prodname_registry %} を使用する場合、運用バックアップを復元する前にステージング インスタンスで機能を設定します。 {% data variables.product.prodname_registry %} を使用しない場合は、「[5. 運用バックアップを復元する](#5-restore-your-production-backup)」にスキップします。

{% warning %}

**警告**: 運用バックアップを復元する前にステージング インスタンスで {% data variables.product.prodname_registry %} を設定しないと、ステージング インスタントで運用インスタンスの外部ストレージが使用され、データが失われる可能性があります。 ステージング インスタンスには別の外部ストレージを使用することを強くお勧めします。

{% endwarning %}

1. ステージング インスタンスに復元するバックアップを確認します。
   - {% data variables.product.prodname_enterprise_backup_utilities %} 3.5 以降を使用してバックアップを作成した場合、バックアップには、{% data variables.product.prodname_registry %} の設定が含まれます。 次の手順に進みます。
   - {% data variables.product.prodname_enterprise_backup_utilities %} 3.4 以前を使用してバックアップを作成した場合、ステージング インスタンスで {% data variables.product.prodname_registry %} を設定します。 詳しい情報については、「[Enterprise の {% data variables.product.prodname_registry %} の概要](/admin/packages/getting-started-with-github-packages-for-your-enterprise)」を参照してください。
{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. 次のコマンドを入力して外部ストレージ接続を設定し、プレースホルダーの値を接続の実際の値に置き換えます。
   - Azure Blob Storage: 

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "azure"
     ghe-config secrets.packages.azure-container-name "AZURE CONTAINER NAME"
     ghe-config secrets.packages.azure-connection-string "CONNECTION STRING"
     ```
   - Amazon S3: 

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "s3"
     ghe-config secrets.packages.service-url "S3 SERVICE URL"
     ghe-config secrets.packages.s3-bucket "S3 BUCKET NAME"
     ghe-config secrets.packages.aws-access-key "S3 ACCESS KEY ID"
     ghe-config secrets.packages.aws-secret-key "S3 ACCESS SECRET"
     ```
1. ステージング インスタンスで {% data variables.product.prodname_registry %} を有効にする準備をするには、次のコマンドを入力します。

   ```shell{:copy}
   ghe-config app.packages.enabled true
   ```

### 5. 運用バックアップを復元する

`ghe-restore` コマンドを使用して残りのデータをバックアップから復元します。 詳しくは、「[バックアップの復元](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)」を参照してください。

ステージング インスタンスが既に設定されており、設定、証明書、ライセンス データを上書きする場合は、コマンドに `-c` オプションを追加します。 このオプションの詳しい情報については、{% data variables.product.prodname_enterprise_backup_utilities %} ドキュメントの「[バックアップおよび復元コマンドの使用](https://github.com/github/backup-utils/blob/master/docs/usage.md#restoring-settings-tls-certificate-and-license)」を参照してください。

### 6. インスタンスの設定を確認する

同じホスト名を使用してステージング インスタンスにアクセスするには、macOS または Linux の `/etc/hosts` ファイル、または Windows の `C:\Windows\system32\drivers\etc` ファイルを編集して、ステージング インスタンスのホスト名を IP アドレスで解決するようにローカル ホスト ファイルを更新します。

{% note %}

**注**: ステージング インスタンスには、運用インスタンスと同じホスト名からアクセスできる必要があります。 {% data variables.location.product_location %}のホスト名の変更はサポートされていません。 詳しくは、「[ホスト名の設定](/admin/configuration/configuring-network-settings/configuring-a-hostname)」をご覧ください。

{% endnote %}

次に、{% data variables.enterprise.management_console %} でステージング インスタンスの設定を確認します。 詳しい情報については、「[{% data variables.enterprise.management_console %} へのアクセス](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)」を参照してください。

{% warning %}

**警告**: ステージング インスタンスの {% data variables.product.prodname_actions %} または {% data variables.product.prodname_registry %} を設定した場合、運用データが上書きされるのを回避するために、{% data variables.enterprise.management_console %} の外部ストレージの設定が運用インスタンスと一致していないことを確認してください。

{% endwarning %}

### 7. インスタンスの構成を適用する

{% data variables.enterprise.management_console %} から設定を適用するには、 **[設定の保存]** をクリックします。

## 参考資料

- 「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」
