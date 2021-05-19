---
title: ネットワークポート
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls/
  - /enterprise/admin/articles/firewall/
  - /enterprise/admin/guides/installation/network-configuration/
  - /enterprise/admin/guides/installation/network-ports-to-open/
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: オープンするネットワークポートは、管理者、エンドユーザ、メールサポートへ公開する必要があるネットワークサービスに応じて選択してください。
versions:
  enterprise-server: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
---
### 管理ポート

{% data variables.product.product_location %}を設定し、一部の機能を実行するためにはいくつかの管理ポートが必要です。 管理ポートは、エンドユーザが基本的なアプリケーションを利用するためには必要ありません。

| ポート      | サービス  | 説明                                                                                                                                                                          |
| -------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8443     | HTTPS | 安全な Web ベースの {% data variables.enterprise.management_console %}。 基本的なインストールと設定に必要です。                                                                                        |
| 8080     | HTTP  | プレーンテキストの Web ベースの {% data variables.enterprise.management_console %}。 SSL を手動で無効にしない限り必要ありません。                                                                             |
| 122      | SSH   | {% data variables.product.product_location %} 用のシェルアクセス。 High Availability 設定では他のすべてのノードからの着信接続に対して開かれている必要があります。 デフォルトの SSHポート (22) は Git と SSH のアプリケーションネットワークトラフィック専用です。 |
| 1194/UDP | VPN   | High Availability設定でのセキュアなレプリケーションネットワークトンネル。 その設定では他のすべてのノードに対して開かれている必要があります。                                                                                             |
| 123/UDP  | NTP   | timeプロトコルの処理に必要。                                                                                                                                                            |
| 161/UDP  | SNMP  | ネットワークモニタリングプロトコルの処理に必要。                                                                                                                                                    |

### エンドユーザーのためのアプリケーションポート

アプリケーションのポートは、エンドユーザーにWebアプリケーションとGitへのアクセスを提供します。

| ポート  | サービス  | 説明                                                                                                                                 |
| ---- | ----- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 443  | HTTPS | WebアプリケーションとGit over HTTPSのアクセス。                                                                                                   |
| 80   | HTTP  | Web アプリケーションへのアクセス。 SSL が有効な場合にすべての要求は HTTPS ポートにリダイレクトされます。                                                                       |
| 22   | SSH   | Git over SSH へのアクセス。 パブリックとプライベートリポジトリへの clone、fetch、push 操作をサポートします。                                                              |
| 9418 | Git   | Gitプロトコルのポート。暗号化されないネットワーク通信でのパブリックなリポジトリへのclone及びfetch操作をサポートする。 {% data reusables.enterprise_installation.when-9418-necessary %}

{% data reusables.enterprise_installation.terminating-tls %}

### メールのポート

メールのポートは直接あるいはエンドユーザ用のインバウンドメールサポートのリレーを経由してアクセスできなければなりません。

| ポート | サービス | 説明                         |
| --- | ---- | -------------------------- |
| 25  | SMTP | 暗号化ありのSMTP（STARTTLS）のサポート。 |
