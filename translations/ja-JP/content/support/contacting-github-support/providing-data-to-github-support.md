---
title: GitHub Support へのデータの提供
intro: '{% data variables.contact.github_support %} は顧客の環境にはアクセスできないので、追加情報の提供をお願いする場合があります。'
shortTitle: Providing data
versions:
  ghes: '*'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting
  - /enterprise/admin/articles/support-bundles
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/providing-data-to-github-support
topics:
  - Support
ms.openlocfilehash: 56a90a9449a92577d08e068095e5b0dc5b443bb2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '146331913'
---
## 診断ファイルとサポート バンドルについて

{% data variables.contact.github_support %} により、サニタイズされたログ ファイルの形式で追加のデータを提供するように求められる場合があります。 提供を求められる場合があるログ ファイルには 3 つの種類があります。

診断ファイルには {% data variables.product.prodname_ghe_server %} インスタンスの設定と環境についての情報が含まれており、サポート バンドルには過去 2 日間の診断とログが含まれています。拡張サポート バンドルにも診断とログが含まれますが、それらは過去 7 日間のものです。

## ログ ファイルのサニタイズについて

認証トークン、キー、およびシークレットは、サポート バンドルまたは診断ファイルに含まれる次のログ ディレクトリ内のログ ファイルから削除されます。

* `alambic-logs`
* `babeld-logs`
* `codeload-logs`
* `enterprise-manage-logs`
* `github-logs`
* `hookshot-logs`
* `lfs-server-logs`
* `semiotic-logs`
* `task-dispatcher-logs`
* `pages-logs`
* `registry-logs`
* `render-logs`
* `svn-bridge-logs`

## Diagnosticファイルの作成と共有

診断ファイルは {% data variables.product.prodname_ghe_server %} インスタンスの設定と環境の概要であり、以下のものが含まれます。

- 会社名、有効期限、ユーザライセンス数を含む顧客情報
- バージョン番号及びSHA
- VMアーキテクチャ
- ホスト名、プライベートモード、SSLの設定
- 負荷及びプロセスのリスト
- ネットワーク設定
- 認証方式と詳細
- リポジトリ数、ユーザ数、その他のインストール関連データ

インスタンスの診断は {% data variables.enterprise.management_console %} から、あるいは `ghe-diagnostics` コマンドライン ユーティリティを実行することでダウンロードできます。

### {% data variables.enterprise.management_console %}でのDiagnosticsファイルの作成

SSHキーがすぐに利用できない場合、この方法が使えます。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. **[診断情報のダウンロード]** をクリックします。

### SSHを使ったDiagnosticsファイルの作成

この方法は、{% data variables.enterprise.management_console %} にサインインせずに利用できます。

[ghe-diagnostics](/enterprise/admin/guides/installation/command-line-utilities#ghe-diagnostics) コマンドライン ユーティリティを使用して、インスタンスの診断を取得します。

```shell
$ ssh -p122 admin@<em>hostname</em> -- 'ghe-diagnostics' > diagnostics.txt
```

## Support Bundleの作成と共有

サポートリクエストをサブミットした後、弊社のチームとの Support Bundle の共有をお願いすることがあります。 Support Bundle は gzip 圧縮された tar アーカイブで、インスタンスの Diagnostics と以下のような重要なログが含まれます:

- 認証のエラーのトラブルシューティングやLDAP、CAS、SAMLの設定に役立つ認証関連のログ
- {% data variables.enterprise.management_console %}のログ
- `github-logs/exceptions.log`: サイトで発生した 500 件のエラーに関する情報
- `github-logs/audit.log`: {% data variables.product.prodname_ghe_server %} 監査ログ
- `babeld-logs/babeld.log`: Git プロキシ ログ
- `system-logs/haproxy.log`: HAProxy ログ
- `elasticsearch-logs/github-enterprise.log`: Elasticsearch ログ
- `configuration-logs/ghe-config.log`: {% data variables.product.prodname_ghe_server %} 構成ログ
- `collectd/logs/collectd.log`: 収集されたログ
- `mail-logs/mail.log`: SMTP 電子メール配信ログ

詳細については、「[企業の監査ログについて](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)」を参照してください。

Support Bundle には過去 2 日分のログが含まれます。 過去 7 日分のログを取得したい場合には、拡張 Support Bundle をダウンロードできます。 詳細については、「[拡張 Support Bundle の作成と提供](#creating-and-sharing-extended-support-bundles)」を参照してください。

{% tip %}

**ヒント:** {% data variables.contact.github_support %} に連絡すると、チケットの参照リンクを含む確認メールが送られてきます。 {% data variables.contact.github_support %} が Support Bundle のアップロードをお願いした場合、Support Bundle のアップロードにこのチケット参照リンクを利用できます。

{% endtip %}

### {% data variables.enterprise.management_console %}でのSupport Bundleの作成

Web べースの {% data variables.enterprise.management_console %} と外部のインターネットにアクセスできる環境があれば、以下の手順で Support Bundle を作成して共有できます。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. **[サポート バンドルのダウンロード]** をクリックします。
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### SSHを使ったSupport Bundleの作成

{% data variables.product.product_location %} への SSH アクセスがあり、アウトバウンドインターネットアクセスがある場合は、これらのステップで拡張 Support Bundle を作成および共有できます。

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}

1. SSH経由でSupport Bundleをダウンロードします。
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
  ```
  `ghe-support-bundle` コマンドの詳細については、「[コマンドラインのユーティリティ](/enterprise/admin/guides/installation/command-line-utilities#ghe-support-bundle)」を参照してください。
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Enterprise アカウントを使用して Support Bundle をアップロードする

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
3. 左側のサイドバーで、 **[エンタープライズ ライセンス]** をクリックします。
  ![エンタープライズ アカウント設定サイドバーの [エンタープライズ ライセンス] リンクを示すスクリーンショット。](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. [{% data variables.product.prodname_enterprise %} ヘルプ] で、 **[サポート バンドルのアップロード]** をクリックします。
  ![[サポート バンドルのアップロード] リンクを示すスクリーンショット。](/assets/images/enterprise/support/upload-support-bundle.png)
5. [Select an enterprise account] で、ドロップダウンメニューから Support Bundle に関連付けられているアカウントを選択します。
  ![サポート バンドルのエンタープライズ アカウントを選択するためのドロップダウン メニューを示すスクリーンショット。](/assets/images/enterprise/support/support-bundle-account.png)
6. [{% data variables.contact.enterprise_support %} のサポート バンドルをアップロードする] で、サポート バンドルを選択するには、 **[ファイルの選択]** をクリックするか、サポート バンドル ファイルを **[ファイルの選択]** にドラッグします。
  ![サポート バンドル ファイルをアップロードするための [ファイルの選択] ボタンを示すスクリーンショット。](/assets/images/enterprise/support/choose-support-bundle-file.png)
7. **[アップロード]** をクリックします。

### SSHを使ったSupport Bundleの直接アップロード

以下の状況であれば、Support Bundleを当社のサーバに直接アップロードできます。
- {% data variables.product.product_location %} への SSH アクセス権がある。
- {% data variables.product.product_location %} から _enterprise-bundles.github.com_ および _esbtoolsproduction.blob.core.windows.net_ への TCP ポート 443 経由の送信 HTTPS 接続が許可されている。

1. バンドルを当社のSupport Bundleサーバにアップロードします。
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
  ```

## 拡張Support Bundleの作成と提供

サポート バンドルには過去 2 日間のログが含まれますが、''_拡張_'' サポート バンドルには過去 7 日間のログが含まれます。 {% data variables.contact.github_support %} が調査しているイベントが 2 日以上前に発生した場合は、拡張 Support Bundle の共有をお願いする場合があります。 拡張 Support Bundle をダウンロードするには、SSH アクセスが必要です。{% data variables.enterprise.management_console %} から拡張 Support Bundle をダウンロードすることはできません。

バンドルが大きくなりすぎるのを避けるために、バンドルにはローテーションや圧縮されていないログだけが含まれます。 {% data variables.product.prodname_ghe_server %} でのログのローテーションは、それぞれのログがどの程度の大きさになるかの予想に応じて、ログごとに様々な頻度 (日次あるいは週次) で行われます。

### SSHを使った拡張Support Bundleの作成

{% data variables.product.product_location %} への SSH アクセスがあり、アウトバウンドインターネットアクセスがある場合は、これらのステップで拡張 Support Bundle を作成および共有できます。

1. `ghe-support-bundle` コマンドに `-x` フラグを追加して、SSH 経由で拡張サポート バンドルをダウンロードします。
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o -x' > support-bundle.tgz
  ```
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### SSHを使った拡張Support Bundleの直接アップロード

以下の状況であれば、Support Bundleを当社のサーバに直接アップロードできます。
- {% data variables.product.product_location %} への SSH アクセス権がある。
- {% data variables.product.product_location %} から _enterprise-bundles.github.com_ および _esbtoolsproduction.blob.core.windows.net_ への TCP ポート 443 経由の送信 HTTPS 接続が許可されている。

1. バンドルを当社のSupport Bundleサーバにアップロードします。
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u -x'
  ```

## 参考資料

- "[GitHub サポートについて](/support/learning-about-github-support/about-github-support)"
- "[企業に関する正常性チェックの生成](/enterprise-server@latest/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise)"
