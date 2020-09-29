---
title: アプライアンス上でのGitHub Pagesの設定
intro: 'インスタンスで {% data variables.product.prodname_pages %} ページを有効または無効にすることができます。 {% data variables.product.prodname_pages %} サイトを公開するように選択することもできます。'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages/
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages/
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
versions:
  enterprise-server: '*'
---

### {% data variables.product.prodname_pages %}の公開

インスタンスでプライベートモードが有効化されている場合、{% data variables.product.product_location_enterprise %}でホストされている{% data variables.product.prodname_pages %}は公開されていません。

{% warning %}

**注意:** 公開{% data variables.product.prodname_pages %}サイトを有効化すると、インスタンス中のすべてのリポジトリのすべての{% data variables.product.prodname_pages %}サイトが公開されます。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. **Public Pages（公開ページ）**を選択してください。 ![[Public Pages] を有効化するチェックボックス](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

### {% data variables.product.product_location_enterprise %}での{% data variables.product.prodname_pages %}の無効化

{% data variables.product.product_location_enterprise %}のSubdomain Isolationが無効化されているなら、{% data variables.product.prodname_pages %}も無効化し、潜在的なセキュリティの脆弱性に対する保護をすべきです。 詳しい情報については"[Subdomain Isolationの有効化](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation)"を参照してください。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. **Enable Pages（ページの有効化）**の選択を解除してください。 ![{% data variables.product.prodname_pages %} を無効化するチェックボックス](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}

### 参考リンク

- "[プライベートモードの有効化](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-private-mode)"
