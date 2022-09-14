---
title: プッシュログの表示
intro: サイト管理者は、Enterprise 上の任意のリポジトリに対する Git プッシュ操作の一覧を確認することができます。
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
  - /admin/user-management/viewing-push-logs
  - /admin/user-management/monitoring-activity-in-your-enterprise/viewing-push-logs
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
ms.openlocfilehash: c759d380b7cbc54918e87ed354c8264bc533c31b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116470'
---
プッシュログの項目には次の情報が含まれています。

- プッシュを開始した人
- フォースプッシュであったかどうか
- プッシュされたブランチ
- プッシュするために使ったプロトコル
- プッシュ元の IP アドレス
- プッシュするために使った Git クライアント
- 操作前と操作後の SHA ハッシュ

## リポジトリのプッシュログを表示する

1. サイト管理者として {% data variables.product.prodname_ghe_server %} にサインインします。
1. リポジトリにアクセスします。
1. リポジトリのページの右上隅にある {% octicon "rocket" aria-label="The rocket ship" %} をクリックします。
    ![サイト管理者設定にアクセスするための Rocketship アイコン](/assets/images/enterprise/site-admin-settings/access-new-settings.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
4. 左側のサイドバーで、 **[プッシュ ログ]** をクリックします。
![[プッシュ ログ] タブ](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% ifversion ghes %}
## コマンドラインでリポジトリのプッシュログを表示する

{% data reusables.enterprise_installation.ssh-into-instance %}
1. 適切な Git リポジトリで Audit log ファイルを開いてください。
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "cat audit_log"
  ```
{% endif %}
