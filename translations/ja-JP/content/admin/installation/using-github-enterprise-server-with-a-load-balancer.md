---
title: GitHub Enterprise Server でロードバランサを使用する
intro: 'ロードバランサを、単一の {{ site.data.variables.product.prodname_ghe_server }} アプライアンス、あるいは High Availability 構成のアプライアンスのペアの前で使ってください。'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer/
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.enterprise_clustering.load_balancer_intro }}

{{ site.data.reusables.enterprise_clustering.load_balancer_dns }}

### クライアントの接続情報の処理

{{ site.data.variables.product.prodname_ghe_server }} へのクライアント接続はロードバランサから来ることになるため、クライアントの IP アドレスは失われることがあります。

{{ site.data.reusables.enterprise_clustering.proxy_preference }}

{{ site.data.reusables.enterprise_clustering.proxy_xff_firewall_warning }}

#### {{ site.data.variables.product.product_location_enterprise }}でのPROXYプロトコルサポートの有効化

アプライアンスとロードバランサの両方でPROXYプロトコルサポートを有効化することを強くおすすめします。 ロードバランサでPROXYプロトコルを有効化する方法については、ベンダーが提供する指示に従ってください。 詳しい情報については[PROXY プロトコルのドキュメンテーション](http://www.haproxy.org/download/1.6/doc/proxy-protocol.txt)を参照してください。

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.privacy }}
3. **External load balancers（外部ロードバランサ）**の下で**Enable support for PROXY protocol（PROXYプロトコルサポートの有効化）**を選択してください。 ![PROXY プロトコルを有効化するチェックボックス](/assets/images/enterprise/management-console/enable-proxy.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}

{{ site.data.reusables.enterprise_clustering.proxy_protocol_ports }}

#### {{ site.data.variables.product.product_location_enterprise }}でのX-Forwarded-Forサポートの有効化

{{ site.data.reusables.enterprise_clustering.x-forwarded-for }}

{{ site.data.reusables.enterprise_installation.terminating-tls }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.privacy }}
3. **External load balancers（外部ロードバランサ）**の下で**Allow HTTP X-Forwarded-For header（HTTP X-Forwarded-Forヘッダの許可）**を選択してください。 ![HTTP X-Forwarded-For ヘッダを許可するチェックボックス](/assets/images/enterprise/management-console/allow-xff.png)
{{ site.data.reusables.enterprise_management_console.save-settings }}

{{ site.data.reusables.enterprise_clustering.without_proxy_protocol_ports }}

### 健全性チェックの設定

ロードバランサは健全性チェックによって、事前に設定されたチェックが失敗するようになったノードがあれば、反応しなくなったノードへのトラフィックの送信を止めます。 メンテナンスもしくは予想外の障害のためにアプライアンスがオフラインになっているなら、ロードバランサはステータスページを表示できます。 High Availability（HA）設定では、ロードバランサはフェイルオーバーの戦略の一部として利用できます。 ただし、HAペアの自動フェイルオーバーはサポートされていません。 レプリカインスタンスは、手動で昇格させるとリクエストに応えられるようになります。 詳細は「[High Availability 用に {{ site.data.variables.product.prodname_ghe_server }} を設定する](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)」を参照してください。

{{ site.data.reusables.enterprise_clustering.health_checks }}
{{ site.data.reusables.enterprise_site_admin_settings.maintenance-mode-status }}
