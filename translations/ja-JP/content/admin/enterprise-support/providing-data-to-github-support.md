---
title: GitHub Support へのデータ提供
intro: '{% data variables.contact.github_support %} は顧客の環境にはアクセスできないので、追加情報をご提供いただかなければなりません。'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting/
  - /enterprise/admin/articles/support-bundles/
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support/
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Support
---

### Diagnosticファイルの作成と共有

Diagnostics は {% data variables.product.prodname_ghe_server %} インスタンスの設定と環境の概要であり、以下の内容が含まれます:

- 会社名、有効期限、ユーザライセンス数を含む顧客情報
- バージョン番号及びSHA
- VMアーキテクチャ
- ホスト名、プライベートモード、SSLの設定
- 負荷及びプロセスのリスト
- ネットワーク設定
- 認証方式と詳細
- リポジトリ数、ユーザ数、その他のインストール関連データ

インスタンスのDiagnosticsは{% data variables.enterprise.management_console %}から、あるいは`ghe-diagnostics`コマンドラインユーティリティを実行することでダウンロードできます。

#### {% data variables.enterprise.management_console %}でのDiagnosticsファイルの作成

SSHキーがすぐに利用できない場合、この方法が使えます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. **Download diagnostics info（Diagnostic情報のダウンロード）**をクリックしてください。

#### SSHを使ったDiagnosticsファイルの作成

この方法は、{% data variables.enterprise.management_console %} にサインインせずに利用できます。

[ghe-diagnostics](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-diagnostics) コマンドラインユーティリティを使ってインスタンスの Diagnostics を取得してください。

```shell
$ ssh -p122 admin@<em>hostname</em> -- 'ghe-diagnostics' > diagnostics.txt
```

### Support Bundleの作成と共有

サポートリクエストをサブミットした後、弊社のチームとの Support Bundle の共有をお願いすることがあります。 Support Bundle は gzip 圧縮された tar アーカイブで、インスタンスの Diagnostics と以下のような重要なログが含まれます:

- 認証のエラーのトラブルシューティングやLDAP、CAS、SAMLの設定に役立つ認証関連のログ
- {% data variables.enterprise.management_console %}のログ
- `github-logs/exceptions.log`：サイトで生じた500エラーに関する情報
- `github-logs/audit.log`: {% data variables.product.prodname_ghe_server %} 監査ログ
- `babeld-logs/babeld.log`：Gitプロキシのログ
- `system-logs/haproxy.log`：HAProxyのログ
- `elasticsearch-logs/github-enterprise.log`：Elasticsearchのログ
- `configuration-logs/ghe-config.log`: {% data variables.product.prodname_ghe_server %} 設定ログ
- `collectd/logs/collectd.log`：Collectdのログ
- `mail-logs/mail.log`：SMTPのメール配送ログ
{% if currentVersion ver_lt "enterprise-server@3.0" %}
- `hookshot-logs/exceptions.log`：webhookのデリバリエラー
{% endif %}

詳細は「[監査ログ](/enterprise/{{ currentVersion }}/admin/guides/installation/audit-logging)」を参照してください。

Support Bundle には過去 2 日分のログが含まれます。 過去 7 日分のログを取得したい場合には、拡張 Support Bundle をダウンロードできます。 詳細は「[拡張 Support Bundle の作成と共有](#creating-and-sharing-extended-support-bundles)」を参照してください。

{% tip %}

**参考:** {% data variables.contact.github_support %} に連絡を取ると、チケットの参照リンクを含む確認のメールが送られてきます。 {% data variables.contact.github_support %} が Support Bundle のアップロードをお願いした場合、Support Bundle のアップロードにこのチケット参照リンクを利用できます。

{% endtip %}

#### {% data variables.enterprise.management_console %}でのSupport Bundleの作成

Web べースの {% data variables.enterprise.management_console %} と外部のインターネットにアクセスできる環境があれば、以下の手順で Support Bundle を作成して共有できます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. [**Download support bundle**] (Support Bundle のダウンロード) をクリックします。
{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

#### SSHを使ったSupport Bundleの作成

{% data variables.product.product_location %} への SSH アクセスがあり、アウトバウンドインターネットアクセスがある場合は、これらのステップで拡張 Support Bundle を作成および共有できます。

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}

1. SSH経由でSupport Bundleをダウンロードします。
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
  ```
  `ghe-support-bundle` コマンドに関する詳しい情報については、「[コマンドラインユーティリティ](/enterprise/admin/guides/installation/command-line-utilities#ghe-support-bundle)」を参照してください。
{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

#### Enterprise アカウントを使用して Support Bundle をアップロードする

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. 左のサイドバーで、** Enterprise licensing（Enterpriseライセンス）**をクリックしてください。 ![[Enterprise account settings] サイトバーの "Enterprise licensing"](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. [{% data variables.product.prodname_enterprise %} Help] にある [**Upload a support bundle**] をクリックします。 ![Support Bundle リンクをアップロードする](/assets/images/enterprise/support/upload-support-bundle.png)
5. [Select an enterprise account] で、ドロップダウンメニューから Support Bundle に関連付けられているアカウントを選択します。 ![Support Bundle の Enterprise アカウントを選択する](/assets/images/enterprise/support/support-bundle-account.png)
6. [Upload a support bundle for {% data variables.contact.enterprise_support %}] で Support Bundle を選択するには、[**Choose file**] をクリックするか、Support Bundle ファイルを [**Choose file**] にドラッグします。 ![Support Bundle ファイルをアップロードする](/assets/images/enterprise/support/choose-support-bundle-file.png)
7. [**Upload**] をクリックします。

#### SSHを使ったSupport Bundleの直接アップロード

以下の状況であれば、Support Bundleを当社のサーバに直接アップロードできます。
- {% data variables.product.product_location %} への SSH アクセス権がある。
- TCP ポート 443 を介したアウトバウンド HTTPS 接続が、{% data variables.product.product_location %} から許可されている。

1. バンドルを当社のSupport Bundleサーバにアップロードします。
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
  ```

### 拡張Support Bundleの作成と提供

Support Bundleには過去2日分のログが含まれますが、_拡張_Support Bundleには過去7日分のログが含まれます。 {% data variables.contact.github_support %} が調査しているイベントが 2 日以上前に発生した場合は、拡張 Support Bundle の共有をお願いする場合があります。 拡張 Support Bundle をダウンロードするには、SSH アクセスが必要です。{% data variables.enterprise.management_console %} から拡張 Support Bundle をダウンロードすることはできません。

バンドルが大きくなりすぎるのを避けるために、バンドルにはローテーションや圧縮されていないログだけが含まれます。 {% data variables.product.prodname_ghe_server %} でのログのローテーションは、それぞれのログがどの程度の大きさになるかの予想に応じて、ログごとに様々な頻度 (日次あるいは週次) で行われます。

#### SSHを使った拡張Support Bundleの作成

{% data variables.product.product_location %} への SSH アクセスがあり、アウトバウンドインターネットアクセスがある場合は、これらのステップで拡張 Support Bundle を作成および共有できます。

1. `ghe-support-bundle`コマンドに`-x`フラグを追加して、SSH経由で拡張Support Bundleをダウンロードしてください。
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o -x' > support-bundle.tgz
  ```
{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

#### SSHを使った拡張Support Bundleの直接アップロード

以下の状況であれば、Support Bundleを当社のサーバに直接アップロードできます。
- {% data variables.product.product_location %} への SSH アクセス権がある。
- TCP ポート 443 を介したアウトバウンド HTTPS 接続が、{% data variables.product.product_location %} から許可されている。

1. バンドルを当社のSupport Bundleサーバにアップロードします。
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u -x'
  ```

### 参考リンク

- [{% data variables.contact.enterprise_support %} について](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)
- [{% data variables.product.prodname_ghe_server %}の{% data variables.contact.premium_support %}について](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)
