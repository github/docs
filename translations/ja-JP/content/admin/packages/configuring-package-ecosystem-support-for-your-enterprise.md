---
title: Enterprise 向けのパッケージエコシステムサポートを設定する
intro: 'You can configure {% data variables.product.prodname_registry %} for your enterprise by globally enabling or disabling individual package ecosystems on your enterprise, including {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker, and npm. 特定のパッケージエコシステムをサポートするための他の設定要件について学びます。'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configure package ecosystems
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## 個々のパッケージエコシステムの有効化または無効化

新しいパッケージがアップロードされないようにするには、以前に有効にしたエコシステムを**読み取り専用**に設定し、既存のパッケージをダウンロードできるようにします。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. [Ecosystem Toggles] の下で、パッケージの種類ごとに [**Enabled**]、[**Read-Only**]、または [**Disabled**] を選択します。
   {%- ifversion ghes > 3.4 %}{% note -%}
**Note**: Subdomain isolation must be enabled to toggle the
   {% data variables.product.prodname_container_registry %} オプション.
   {%- endnote %}{%- endif %}{%- ifversion ghes %}
  ![エコシステムの切り替え](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png){% else %}
![Ecosystem toggles](/assets/images/enterprise/3.1/site-admin-settings/ecosystem-toggles.png){% endif %}
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}
## 公式 npm レジストリに接続する

Enterprise で npm パッケージを有効にしていて、公式の npm レジストリと {% data variables.product.prodname_registry %} npm レジストリへのアクセスを許可する場合は、追加の設定を実行する必要があります。

{% data variables.product.prodname_registry %} は、`registry.npmjs.com` の公式 npm レジストリに接続するネットワークトラフィックに透過プロキシを使用します。 プロキシはデフォルトで有効になっており、無効にすることはできません。

npm レジストリへのネットワーク接続を許可するには、{% data variables.product.prodname_ghe_server %} がポート 443 を介して `registry.npmjs.com` に HTTPS トラフィックを送信できるようにするネットワーク ACL を設定する必要があります。

| 資料                                                 | 宛先                   | ポート     | 種類    |
| -------------------------------------------------- | -------------------- | ------- | ----- |
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

`registry.npmjs.com` への接続は、Cloudflare ネットワークを通過した後、単一の静的 IP アドレスに接続しませんので、ご注意ください。代わりに、https://www.cloudflare.com/ips/ にリストされている CIDR 範囲内の IP アドレスに接続されます。

If you wish to enable npm upstream sources, select `Enabled` for `npm upstreaming`.

{% endif %}

## 次のステップ

次のステップとして、パッケージのホスト URL の TLS 証明書を更新またはアップロードする必要があるかどうかを確認することをお勧めします。 詳しい情報については、「[Enterprise 向けの GitHub Packages を使ってみる](/admin/packages/getting-started-with-github-packages-for-your-enterprise)」を参照してください。
