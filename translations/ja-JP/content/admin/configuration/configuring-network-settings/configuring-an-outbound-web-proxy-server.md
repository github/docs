---
title: アウトバウンドのWebプロキシサーバの設定
intro: 'プロキシサーバは、{% data variables.product.product_location %}に追加のセキュリティのレベルをもたらしてくれます。'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
  - /admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure an outbound proxy
---

## About proxies with {% data variables.product.product_name %}

{% data variables.product.product_location %} に対してプロキシサーバーが有効である場合、送信先ホストが HTTP プロキシ除外として追加されていない限り、{% data variables.product.prodname_ghe_server %} によって送信されたアウトバウンドメッセージがプロキシサーバーを経由してまず最初に送信されます。 アウトバウンドのメッセージの種類には、webhook、Bundleのアップロード、レガシーのアバターのフェッチが含まれます。 プロキシサーバのURLは、たとえば`http://127.0.0.1:8123`といったように、プロトコル、ドメインもしくはIPアドレスにポート番号を加えたものです。

{% note %}

**メモ:**  {% data variables.product.product_location %}　を　{% data variables.product.prodname_dotcom_the_website %} に接続するには、`github.com` と `api.github.com` への接続がプロキシ設定で許可されている必要があります。 For more information, see "[Connecting your enterprise account to {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)."

{% endnote %}

{% data reusables.actions.proxy-considerations %} For more information about using {% data variables.product.prodname_actions %} with {% data variables.product.prodname_ghe_server %}, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."

## アウトバウンドのWebプロキシサーバの設定

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
1. **HTTP Proxy Server（HTTPプロキシサーバ）**の下に、プロキシサーバのURLを入力してください。 ![HTTP プロキシサーバーのURLを入力するためのフィールド](/assets/images/enterprise/management-console/http-proxy-field.png)

5. オプションで、プロキシのアクセスを要しないホストがあれば**HTTP Proxy Exclusion（HTTPプロキシの除外）**の下にカンマ区切りで入力してください。 ドメイン内のすべてのホストをプロキシアクセスの要求から除外するには `.` をワイルドカードプレフィックスとして使用できます。  たとえば、`.octo-org.tentacle` などです。 ![HTTP プロキシの除外を入力するためのフィールド](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
