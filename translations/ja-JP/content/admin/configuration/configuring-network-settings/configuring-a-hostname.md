---
title: ホスト名の設定
intro: アプライアンスには、ハードコードされたIPアドレスを使うのではなくホスト名を設定することをおすすめします。
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
---

ハードコードされたIPアドレスの代わりにホスト名を設定すれば、ユーザやクライアントソフトウェアに影響を与えることなく{% data variables.product.product_location %}を動作させる物理ハードウェアを変更できるようになります。

{% data variables.enterprise.management_console %} のホスト名の設定は、適切な完全修飾ドメイン名 (FQDN) に設定して、インターネット上または内部ネットワーク内で解決できるようにしてください。 For example, your hostname setting could be `github.companyname.com.` Web and API requests will automatically redirect to the hostname configured in the {% data variables.enterprise.management_console %}. Note that `localhost` is not a valid hostname setting.

After you configure a hostname, you can enable subdomain isolation to further increase the security of {% data variables.product.product_location %}. 詳しい情報については"[Subdomain Isolationの有効化](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)"を参照してください。

For more information on the supported hostname types, see [Section 2.1 of the HTTP RFC](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. {% data variables.product.product_location %} に設定するホスト名を入力します。 ![ホスト名を設定するためのフィールド](/assets/images/enterprise/management-console/hostname-field.png)
5. 新しいホスト名のためのDNS及びSSLの設定をテストするには**Test domain settings（ドメイン設定のテスト）**をクリックしてください。 ![[Test domain settings] ボタン](/assets/images/enterprise/management-console/test-domain-settings.png)
{% data reusables.enterprise_management_console.test-domain-settings-failure %}
{% data reusables.enterprise_management_console.save-settings %}

To help mitigate various cross-site scripting vulnerabilities, we recommend that you enable subdomain isolation for {% data variables.product.product_location %} after you configure a hostname. 詳しい情報については"[Subdomain Isolationの有効化](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)"を参照してください。
