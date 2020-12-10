---
title: Management Console にアクセスする
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console/
  - /enterprise/admin/articles/management-console-for-emergency-recovery/
  - /enterprise/admin/articles/web-based-management-console/
  - /enterprise/admin/categories/management-console/
  - /enterprise/admin/articles/accessing-the-management-console/
  - /enterprise/admin/guides/installation/web-based-management-console/
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
versions:
  enterprise-server: '*'
---

### {% data variables.enterprise.management_console %}について

次の基本的な管理作業には {% data variables.enterprise.management_console %} を使用します。
- **初期セットアップ**: ブラウザで {% data variables.product.product_location %} の IP アドレスにアクセスすることで {% data variables.product.product_location %} を最初に起動したときに、初期セットアッププロセスを段階的に実行します。
- **インスタンスの基本設定**: [Settings] ページで、DNS、ホスト名、SSL、ユーザ認証、メール、モニタリングサービス、ログの転送を設定します。
- **スケジュールメンテナンスウィンドウ**: {% data variables.enterprise.management_console %} または管理シェルを使用してメンテナンスを実行する際に、{% data variables.product.product_location %} をオフラインにします。
- **トラブルシューティング**: Support Bundle を生成するか、高レベルの診断情報を一覧表示します。
- **ライセンス管理**: {% data variables.product.prodname_enterprise %} ライセンスを一覧表示または更新します。

{% data variables.enterprise.management_console %}には、{% data variables.product.product_location %}のIPアドレスからいつでもアクセスできます。インスタンスがメンテナンスモードになっていたり、致命的なアプリケーション障害やホスト名あるいはSSLの設定ミスがあってもアクセス可能です。

{% data variables.enterprise.management_console %}にアクセスするには、{% data variables.product.product_location %}の初期セットアップ時に設定した管理者パスワードを使わなければなりません。 また、ポート8443で仮想マシンのホストに接続することもできます。 {% data variables.enterprise.management_console %}へのアクセスに問題があれば、中間のファイアウォールやセキュリティグループの設定を確認してください。

### サイト管理者としての{% data variables.enterprise.management_console %}へのアクセス

サイト管理者として初めて {% data variables.enterprise.management_console %} にアクセスするときは、アプリに認証するために {% data variables.product.prodname_enterprise %} ライセンスファイルをアップロードする必要があります。 詳しい情報については、「[{% data variables.product.prodname_enterprise %}ライセンスを管理する](/enterprise/{{ currentVersion }}/admin/guides/installation/managing-your-github-enterprise-license)」を参照してください。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}

### 認証されていないユーザとしての{% data variables.enterprise.management_console %}へのアクセス

1. ブラウザで次の URL にアクセスします。`hostname` は実際の {% data variables.product.prodname_ghe_server %} ホスト名または IP アドレスに置き換えてください:
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

### ログイン試行の失敗後の{% data variables.enterprise.management_console %}のアンロック

10 分以内にログインに 10 回失敗すると、{% data variables.enterprise.management_console %} はロックされます。 ログインを再度試みるには、ログイン画面が自動的にロック解除されるまで待つ必要があります。 直前の 10 分間に失敗したログイン試行が 10 回未満となると同時に、ログイン画面は自動的にロックが解除されます。 ログインが成功すると、カウンタはリセットされます。

{% data variables.enterprise.management_console %} をただちにロック解除するには、管理シェルから `ghe-reactivate-admin-login` コマンドを使用します。 詳細は「[コマンドラインユーティリティ](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-reactivate-admin-login)」および「[管理シェル (SSH) にアクセスする](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)」を参照してください。
