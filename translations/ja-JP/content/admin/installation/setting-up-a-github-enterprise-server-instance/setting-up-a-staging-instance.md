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
ms.openlocfilehash: 86006b3dd1fcdd7a7139f35934cafce1f208c8bb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065363'
---
## ステージング インスタンスについて

{% data variables.product.company_short %} では、{% data variables.product.product_location %} の構成のバックアップ、更新、または変更をテストするために別の環境を設定することを推奨しています。 運用システムから分離する必要があるこの環境は、ステージング環境と呼ばれます。

たとえば、データの損失から保護するために、運用インスタンスのバックアップを定期的に検証できます。 ステージング環境の別の {% data variables.product.product_name %} インスタンスに、運用データのバックアップを定期的に復元できます。 このステージング インスタンスでは、{% data variables.product.product_name %} の最新の機能リリースへのアップグレードをテストすることもできます。

{% tip %}

**ヒント:** ステージング インスタンスを本番容量で使用しない限り、既存の {% data variables.product.prodname_enterprise %} ライセンス ファイルを再利用できます。

{% endtip %}

## ステージング環境に関する考慮事項

{% data variables.product.product_name %} を十分にテストし、運用環境とできるだけ似た環境を再作成するには、インスタンスと対話する外部システムを検討してください。 たとえば、ステージング環境では次をテストできます。

- 認証 (特に SAML などの外部認証プロバイダーを使用する場合)
- 外部のチケットシステムとの統合
- 継続的インテグレーションサーバとの統合
- {% data variables.product.prodname_enterprise_api %}を利用する外部のスクリプトあるいはソフトウェア
- メール通知のための外部のSMTPサーバ

## ステージングインスタンスのセットアップ

1. {% data variables.product.prodname_enterprise_backup_utilities %}を使って本番インスタンスをバックアップしてください。 詳細については、「[アプライアンスでバックアップを構成する](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)」の「{% data variables.product.prodname_enterprise_backup_utilities %} について」セクションを参照してください。
2. 新しいインスタンスをステージング環境として動作するようにセットアップしてください。 ステージングインスタンスのプロビジョニングとインストールについては、本番インスタンスと同じガイドが利用できます。 詳細については、「[{% data variables.product.prodname_ghe_server %} インスタンスをセットアップする](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)」を参照してください。
3. 必要に応じて、テスト環境で {% data variables.product.prodname_actions %} 機能をテストする場合は、ログとストレージに関する考慮事項を確認してください。 詳細については、「[ステージング環境を使用する](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)」を参照してください。
4. バックアップをステージングインスタンスにリストアしてください。 詳細については、「[アプライアンスでバックアップを構成する](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)」の「バックアップの復元」セクションを参照してください。

## 参考資料

- 「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」
