---
title: アウトバウンドのWebプロキシサーバの設定
intro: 'プロキシサーバは、{% data variables.product.product_location %}に追加のセキュリティのレベルをもたらしてくれます。'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server/
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
  - /admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
---

{% data variables.product.product_location %} に対してプロキシサーバーが有効である場合、送信先ホストが HTTP プロキシ除外として追加されていない限り、{% data variables.product.prodname_ghe_server %} によって送信されたアウトバウンドメッセージがプロキシサーバーを経由してまず最初に送信されます。 アウトバウンドのメッセージの種類には、webhook、Bundleのアップロード、レガシーのアバターのフェッチが含まれます。 プロキシサーバのURLは、たとえば`http://127.0.0.1:8123`といったように、プロトコル、ドメインもしくはIPアドレスにポート番号を加えたものです。

{% note %}

**メモ:**  {% data variables.product.product_location %}　を　{% data variables.product.prodname_dotcom_the_website %} に接続するには、`github.com` と `api.github.com` への接続がプロキシ設定で許可されている必要があります。 詳細は「[{% data variables.product.prodname_ghe_server %} を {% data variables.product.prodname_dotcom_the_website %} に接続する](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)」を参照してください。

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. **HTTP Proxy Server（HTTPプロキシサーバ）**の下に、プロキシサーバのURLを入力してください。 ![HTTP プロキシサーバーのURLを入力するためのフィールド](/assets/images/enterprise/management-console/http-proxy-field.png)

5. オプションで、プロキシのアクセスを要しないホストがあれば**HTTP Proxy Exclusion（HTTPプロキシの除外）**の下にカンマ区切りで入力してください。 ドメイン内のすべてのホストをプロキシアクセスの要求から除外するには `.` をワイルドカードプレフィックスとして使用できます。  たとえば、`.octo-org.tentacle` などです。 ![HTTP プロキシの除外を入力するためのフィールド](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
