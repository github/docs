---
title: ステージングインスタンスのセットアップ
intro: '変更が {% data variables.product.product_location_enterprise %} に適用される前に、*ステージングインスタンス*を使用して変更をテストできます。 たとえば、ステージングインスタンスを使用すれば、{% data variables.product.prodname_ghe_server %} の新しい更新をテストしたり、移行データのインポートを練習したりできます。'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
versions:
  enterprise-server: '*'
---

{% tip %}

**Tip:** ステージングインスタンスをプロダクションで利用しないのであれば、既存の{% data variables.product.prodname_enterprise %}ライセンスファイルを再利用できます。

{% endtip %}

{% data variables.product.prodname_ghe_server %} アプライアンスを徹底的にテストするには、それとやりとりする外部システムを検討する必要があります。 テストを検討するためのいくつかの要因は次のとおりです:

  - 認証。特に外部の認証プロバイダを使っている場合
  - 外部のチケットシステムとの統合
  - 継続的インテグレーションサーバとの統合
  - {% data variables.product.prodname_enterprise_api %}を利用する外部のスクリプトあるいはソフトウェア
  - メール通知のための外部のSMTPサーバ

1. {% data variables.product.prodname_enterprise_backup_utilities %}を使って本番インスタンスをバックアップしてください。 詳細は「[アプライアンスでバックアップを設定する](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)」の「{% data variables.product.prodname_enterprise_backup_utilities %} について」セクションを参照してください。
2. 新しいインスタンスをステージング環境として動作するようにセットアップしてください。 ステージングインスタンスのプロビジョニングとインストールについては、本番インスタンスと同じガイドが利用できます。 詳細は「[{% data variables.product.prodname_ghe_server %}インスタンスをセットアップする](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)」を参照してください。
3. バックアップをステージングインスタンスにリストアしてください。 詳しい情報については "[アプライアンスでのバックアップの設定](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)"の"バックアップのリストア"セクションを参照してください。
