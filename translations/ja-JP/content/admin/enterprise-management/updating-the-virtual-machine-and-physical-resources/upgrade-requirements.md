---
title: アップグレードの要求事項
intro: '{% data variables.product.prodname_ghe_server %} をアップグレードする前に、アップグレードの方針を計画するために以下の推奨事項と要求事項をレビューしてください。'
redirect_from:
  - /enterprise/admin/installation/upgrade-requirements
  - /enterprise/admin/guides/installation/finding-the-current-github-enterprise-release
  - /enterprise/admin/enterprise-management/upgrade-requirements
  - /admin/enterprise-management/upgrade-requirements
  - /enterprise/admin/guides/installation/about-upgrade-requirements
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Upgrades
---

{% note %}

**ノート:**
{% ifversion ghes < 3.3 %}- Features such as {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %}, {% data variables.product.prodname_mobile %} and {% data variables.product.prodname_GH_advanced_security %} are available on {% data variables.product.prodname_ghe_server %} 3.0 or higher. We highly recommend upgrading to 3.0 or later releases to take advantage of critical security updates, bug fixes and feature enhancements.{% endif %}
- サポートされているバージョンについては、アップグレードパッケージが [enterprise.github.com](https://enterprise.github.com/releases) から利用できます。 アップグレードを完了するには、必要なアップグレードパッケージが利用できることを確認してください。 パッケージが利用できない場合は{% data variables.contact.contact_ent_support %}に連絡して支援を求めてください。
- {% data variables.product.prodname_ghe_server %} クラスタリングを利用している場合は、クラスタリングに固有の手順については {% data variables.product.prodname_ghe_server %} クラスタリングガイド中の「[クラスタをアップグレードする](/enterprise/admin/guides/clustering/upgrading-a-cluster/)」を参照してください。
- {% data variables.product.prodname_ghe_server %} のリリースノートには、{% data variables.product.prodname_ghe_server %} のすべてのバージョンの新機能の包括的なリストがあります。 詳しい情報については[リリースページ](https://enterprise.github.com/releases)を参照してください。

{% endnote %}

## 推奨される対応

- アップグレードのプロセスに含めるアップグレードは、できるだけ少なくしてください。 たとえば {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} から {{ enterpriseServerReleases.supported[1] }} を経て {{ enterpriseServerReleases.latest }} にアップグレードする代わりに、{% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} から {{ enterpriseServerReleases.latest }} にアップグレードできます。 Use the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.
- バージョンが数バージョン古いのであれば、{% data variables.product.product_location %}をアップグレードのプロセスの各ステップでできる限り先までアップグレードしてください。 各アップグレードで可能な限りの最新バージョンを使うことで、パフォーマンスの改善やバグフィックスのメリットが得られます。 たとえば{% data variables.product.prodname_enterprise %}2.7から2.8を経て2.10へアップグレードすることができますが、{% data variables.product.prodname_enterprise %}2.7から2.9を経て2.10へのアップグレードすれば、2番目のステップでより新しいバージョンを利用できます。
- アップグレードの際には、最新のパッチリリースを使ってください。 {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}
- アップグレードのステップのテストには、ステージングインスタンスを使ってください。 詳しい情報については "[ステージングインスタンスのセットアップ](/enterprise/admin/guides/installation/setting-up-a-staging-instance/)"を参照してください。
- 複数のアップグレードを実行する場合は、機能のアップグレードの間に少なくとも 24 時間待って、データ移行とバックグラウンドで実行されているアップグレードタスクが完全に完了するようにします。
- Take a snapshot before upgrading your virtual machine. 詳細は「[スナップショットを取得する](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#taking-a-snapshot)」を参照してください。
- Ensure you have a recent, successful backup of your instance. 詳しい情報については、[{% data variables.product.prodname_enterprise_backup_utilities %}README.md ファイル](https://github.com/github/backup-utils#readme)を参照してください。

## 要件

- アップグレードは、**最大でも**2リリース前のフィーチャリリースから行わなければなりません。 たとえば {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.latest }} にアップグレードするためには、{% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[1] }} あるいは {{ enterpriseServerReleases.supported[2] }} となっていなければなりません。
- When upgrading using an upgrade package, schedule a maintenance window for {% data variables.product.prodname_ghe_server %} end users.
- {% data reusables.enterprise_installation.hotpatching-explanation %}
- ホットパッチは、影響するサービス（カーネル、MySQL、Elasticsearchなど）がVMの再起動やサービスの再起動を必要とするなら、ダウンタイムが必要になります。 リブートや再起動が必要になったときには通知されます。 リブートや再起動は後で完了させることができます。
- ホットパッチでアップグレードをする場合、アップグレードの完了までに特定のサービスの複数バージョンがインストールされることから、追加のルートストレージが利用できなければなりません。 十分なルートディスクストレージがなければ、事前チェックで通知されます。
- ホットパッチでアップグレードする場合、インスタンスの負荷は高すぎてはなりません。もし負荷が高すぎると、ホットパッチのプロセスに影響するかもしれません。
- {% data variables.product.prodname_ghe_server %} 2.17にアップグレードすると、監査ログがElasticsearchからMySQLに移行されます。 この移行により、スナップショットの復元に必要な時間とディスク容量も増加します。 移行の前に、次のコマンドでElasticsearch監査ログのインデックスでバイト数を確認してください。
``` shell
curl -s http://localhost:9201/audit_log/_stats/store | jq ._all.primaries.store.size_in_bytes
```
MySQLの監査ログで必要なディスク容量の概算には、この数字を使用します。 スクリプトは、インポートの進行中に空きディスク容量も監視します。 この数字を監視しておくと、空きディスク容量が、移行に必要なディスク容量に近い場合に特に便利です。

## 次のステップ

これらの推奨および要求事項をレビューした後で、{% data variables.product.prodname_ghe_server %} をアップグレードできます。 詳細は「[{% data variables.product.prodname_ghe_server %} をアップグレードする](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/)」を参照してください。
