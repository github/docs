---
title: プッシュログの表示
intro: サイト管理者は、Enterprise 上の任意のリポジトリに対する Git プッシュ操作の一覧を確認することができます。
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs/
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
  - /admin/user-management/viewing-push-logs
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
---
プッシュログの項目には次の情報が含まれています。

- プッシュを開始した人
- フォースプッシュであったかどうか
- プッシュされたブランチ
- プッシュするために使ったプロトコル
- プッシュ元の IP アドレス
- プッシュするために使った Git クライアント
- 操作前と操作後の SHA ハッシュ

### リポジトリのプッシュログを表示する

1. サイト管理者として {% data variables.product.prodname_ghe_server %} にサインインします。
1. リポジトリにアクセスします。
1. リポジトリのページの右上隅にある {% octicon "rocket" aria-label="The rocket ship" %} をクリックします。
{% octicon "rocket" aria-label="The rocket ship" %}.
    ![サイトアドミン設定にアクセスするための宇宙船のアイコン](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
4. 左のサイドバーで、**Push Log（プッシュログ）** をクリックしてください。 ![プッシュログのタブ](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% if enterpriseServerVersions contains currentVersion %}
### コマンドラインでリポジトリのプッシュログを表示する

{% data reusables.enterprise_installation.ssh-into-instance %}
1. 適切な Git リポジトリで Audit log ファイルを開いてください。
  ```shell
  ghe-repo <em>コードオーナー</em>/<em>リポジトリ</em> -c "less audit_log"
  ```
{% endif %}
