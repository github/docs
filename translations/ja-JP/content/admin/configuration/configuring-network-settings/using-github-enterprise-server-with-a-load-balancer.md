---
title: GitHub Enterprise Server でロードバランサを使用する
intro: 'Use a load balancer in front of a single {% data variables.product.prodname_ghe_server %} instance or a pair of instances in a High Availability configuration.'
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
---

## About load balancers

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## クライアントの接続情報の処理

{% data variables.product.prodname_ghe_server %} へのクライアント接続はロードバランサから来ることになるため、クライアントの IP アドレスは失われることがあります。

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### {% data variables.product.product_location %}でのPROXYプロトコルサポートの有効化

We strongly recommend enabling PROXY protocol support for both your instance and the load balancer. ロードバランサでPROXYプロトコルを有効化する方法については、ベンダーが提供する指示に従ってください。 詳しい情報については[PROXY プロトコルのドキュメンテーション](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt)を参照してください。

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. **External load balancers（外部ロードバランサ）**の下で**Enable support for PROXY protocol（PROXYプロトコルサポートの有効化）**を選択してください。 ![PROXY プロトコルを有効化するチェックボックス](/assets/images/enterprise/management-console/enable-proxy.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### {% data variables.product.product_location %}でのX-Forwarded-Forサポートの有効化

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

**Warning**: If you configure `X-Forwarded-For` support on {% data variables.product.product_location %} and load balancer, you may not be able to connect to the {% data variables.enterprise.management_console %}. For more information, see "[Error: "Your session has expired" for connections to the {% data variables.enterprise.management_console %}](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console)."

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. **External load balancers（外部ロードバランサ）**の下で**Allow HTTP X-Forwarded-For header（HTTP X-Forwarded-Forヘッダの許可）**を選択してください。 ![HTTP X-Forwarded-For ヘッダを許可するチェックボックス](/assets/images/enterprise/management-console/allow-xff.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## 健全性チェックの設定

ロードバランサは健全性チェックによって、事前に設定されたチェックが失敗するようになったノードがあれば、反応しなくなったノードへのトラフィックの送信を止めます。 If the instance is offline due to maintenance or unexpected failure, the load balancer can display a status page. High Availability（HA）設定では、ロードバランサはフェイルオーバーの戦略の一部として利用できます。 ただし、HAペアの自動フェイルオーバーはサポートされていません。 You must manually promote the replica instance before it will begin serving requests. 詳細は「[High Availability 用に {% data variables.product.prodname_ghe_server %} を設定する](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)」を参照してください。

{% data reusables.enterprise_clustering.health_checks %}
{% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Troubleshooting connectivity through a load balancer

If you cannot connect to services on {% data variables.product.product_location %} through a load balancer, you can review the following information to troubleshoot the problem.

{% note %}

**Note**: Always test changes to your network infrastructure and instance configuration in a staging environment. 詳しい情報については "[ステージングインスタンスのセットアップ](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)"を参照してください。

{% endnote %}

### Error: "Your session has expired" for connections to the {% data variables.enterprise.management_console %}

If you enable support for the `X-Forwarded-For` header on your instance and load balancer, you may not be able to access your instance's {% data variables.enterprise.management_console %}. For more information about the {% data variables.enterprise.management_console %} and ports required for connections, see "[Accessing the management console](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)" and "[Network ports](/admin/configuration/configuring-network-settings/network-ports)."

If {% data variables.product.product_location %} indicates that your session has expired when you connect to the {% data variables.enterprise.management_console %} through a load balancer, try one of the following configurations on your load balancer.

- Disable `X-Forwarded-For` headers for connections to your instance on ports 8080 and 8443.
- Configure your load balancer to operate on Layer 4, and use the PROXY protocol instead of `X-Forwarded-For` for passthrough of client IP addresses. For more information, see "[Enabling PROXY protocol support on {% data variables.product.product_location %} ](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance)."

For more information, refer to the documentation for your load balancer.
