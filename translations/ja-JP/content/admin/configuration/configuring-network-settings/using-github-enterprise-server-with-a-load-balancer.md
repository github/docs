---
title: GitHub Enterprise Server でロードバランサを使用する
intro: 'ロード バランサーを、単一の {% data variables.product.prodname_ghe_server %} インスタンス、あるいは高可用性構成のインスタンスのペアの前で使ってください。'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
  - /enterprise/admin/configuration/using-github-enterprise-server-with-a-load-balancer
  - /admin/configuration/using-github-enterprise-server-with-a-load-balancer
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
  - Networking
shortTitle: Use a load balancer
ms.openlocfilehash: dcbd1261d127e48140f6b6843ef4ec3c35fb84f4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147167316'
---
## ロード バランサーについて

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## クライアントの接続情報の処理

{% data variables.product.prodname_ghe_server %} へのクライアント接続はロードバランサから来ることになるため、クライアントの IP アドレスは失われることがあります。

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### {% data variables.product.product_location %} での PROXY プロトコル サポートの有効化

インスタンスとロード バランサーの両方で PROXY プロトコル サポートを有効にすることを強くおすすめします。 ロードバランサでPROXYプロトコルを有効化する方法については、ベンダーが提供する指示に従ってください。 詳細については、[PROXY プロトコルのドキュメント](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt)を参照してください。

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. **[外部ロード バランサー]** で、 **[PROXY プロトコルのサポートを有効にする]** を選択します。
![PROXY プロトコルのサポートを有効にするチェックボックス](/assets/images/enterprise/management-console/enable-proxy.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### {% data variables.product.product_location %} での X-Forwarded-For サポートの有効化

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

**警告**: {% data variables.product.product_location %}とロード バランサーの `X-Forwarded-For` サポートを構成すると、{% data variables.enterprise.management_console %} に接続できない可能性があります。 詳しくは、「[エラー: {% data variables.enterprise.management_console %} への接続の "セッションの有効期限が切れています"](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)」を参照してください。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. **[外部ロード バランサー]** で、 **[HTTP X-Forwarded-For ヘッダーを許可する]** を選択します。
![HTTP X-Forwarded-For ヘッダーを許可するチェックボックス](/assets/images/enterprise/management-console/allow-xff.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## 健全性チェックの設定

ロードバランサは健全性チェックによって、事前に設定されたチェックが失敗するようになったノードがあれば、反応しなくなったノードへのトラフィックの送信を止めます。 メンテナンスもしくは予想外の障害のためにインスタンスがオフラインになっている場合、ロード バランサーでは状態ページを表示できます。 High Availability（HA）設定では、ロードバランサはフェイルオーバーの戦略の一部として利用できます。 ただし、HAペアの自動フェイルオーバーはサポートされていません。 レプリカ インスタンスは、手動で昇格させると要求に応えられるようになります。 詳細については、[高可用性のための {% data variables.product.prodname_ghe_server %} の構成](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)に関するページを参照してください。

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## ロード バランサーを介した接続のトラブルシューティング

ロード バランサーを介して {% data variables.product.product_location %}上のサービスに接続できない場合は、次の情報を確認して問題のトラブルシューティングを行うことができます。

{% note %}

**注**: ステージング環境でネットワーク インフラストラクチャとインスタンス構成に対する変更を常にテストします。 詳細については、「[ステージング インスタンスの設定](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)」を参照してください。

{% endnote %}

### エラー: {% data variables.enterprise.management_console %} への接続の "セッションの有効期限が切れています"

インスタンスとロード バランサーで `X-Forwarded-For` ヘッダーのサポートを有効にした場合、インスタンスの {% data variables.enterprise.management_console %} にアクセスできない可能性があります。 {% data variables.enterprise.management_console %} と接続に必要なポートについて詳しくは、「[管理コンソールへのアクセス](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)」と「[ネットワーク ポート](/admin/configuration/configuring-network-settings/network-ports)」を参照してください。

{% data variables.product.product_location %}が、ロード バランサーを介して {% data variables.enterprise.management_console %} に接続したときにセッションの有効期限が切れたことが示されている場合は、ロード バランサーで次のいずれかの構成を試してください。

- ポート 8080 と 8443 でインスタンスへの接続の `X-Forwarded-For` ヘッダーを無効にします。
- レイヤー 4 で動作するようにロード バランサーを構成し、クライアント IP アドレスのパススルーの `X-Forwarded-For` ではなく PROXY プロトコルを使用します。 詳しくは、「[{% data variables.product.product_location %} での PROXY プロトコル サポートの有効化](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance)」を参照してください。

詳しくは、ロード バランサーのドキュメントを参照してください。

### issue とチェックの実行に対するライブ更新が機能しない

{% data variables.product.product_location %}にロード バランサーまたはリバース プロキシ経由でアクセスすると、issue に関する新しいコメントや通知バッジの変更や実行出力の確認などの予想されるライブ更新が、ページが更新されるまで表示されない場合があります。 これは、リバース プロキシまたはロード バランサーがレイヤー 7 モードで実行されているか、必要な [Websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) プロトコルをサポートしていない場合によくあります。 

ライブ更新を有効にするには、ロード バランサーまたはプロキシを再構成する必要がある場合があります。 詳しくは、ロード バランサーのドキュメントを参照してください。
