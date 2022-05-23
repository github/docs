---
title: ステージングインスタンスのセットアップ
intro: 'You can set up a {% data variables.product.product_name %} instance in a separate, isolated environment, and use the instance to validate and test changes.'
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
---

## About staging instances

{% data variables.product.company_short %} recommends that you set up a separate environment to test backups, updates, or changes to the configuration for {% data variables.product.product_location %}. This environment, which you should isolate from your production systems, is called a staging environment.

For example, to protect against loss of data, you can regularly validate the backup of your production instance. You can regularly restore the backup of your production data to a separate {% data variables.product.product_name %} instance in a staging environment. On this staging instance, you could also test the upgrade to the latest feature release of {% data variables.product.product_name %}.

{% tip %}

**Tip:** You may reuse your existing {% data variables.product.prodname_enterprise %} license file as long as the staging instance is not used in a production capacity.

{% endtip %}

## Considerations for a staging environment

To thoroughly test {% data variables.product.product_name %} and recreate an environment that's as similar to your production environment as possible, consider the external systems that interact with your instance. For example, you may want to test the following in your staging environment.

- Authentication, especially if you use an external authentication provider like SAML
- 外部のチケットシステムとの統合
- 継続的インテグレーションサーバとの統合
- {% data variables.product.prodname_enterprise_api %}を利用する外部のスクリプトあるいはソフトウェア
- メール通知のための外部のSMTPサーバ

## ステージングインスタンスのセットアップ

1. {% data variables.product.prodname_enterprise_backup_utilities %}を使って本番インスタンスをバックアップしてください。 詳細は「[アプライアンスでバックアップを設定する](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)」の「{% data variables.product.prodname_enterprise_backup_utilities %} について」セクションを参照してください。
2. 新しいインスタンスをステージング環境として動作するようにセットアップしてください。 ステージングインスタンスのプロビジョニングとインストールについては、本番インスタンスと同じガイドが利用できます。 詳細は「[{% data variables.product.prodname_ghe_server %}インスタンスをセットアップする](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)」を参照してください。
3. Optionally, if you plan to test {% data variables.product.prodname_actions %} functionality in your test environment, review the considerations for your logs and storage. For more information, see "[Using a staging environment](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)."
4. バックアップをステージングインスタンスにリストアしてください。 詳しい情報については "[アプライアンスでのバックアップの設定](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)"の"バックアップのリストア"セクションを参照してください。

## 参考リンク

- 「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」
