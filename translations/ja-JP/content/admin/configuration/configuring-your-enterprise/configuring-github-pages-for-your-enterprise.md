---
title: Enterprise 向けの GitHub Pages を設定する
intro: 'You can enable or disable {% data variables.product.prodname_pages %} for your enterprise{% ifversion ghes %} and choose whether to make sites publicly accessible{% endif %}.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-github-pages-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Pages
shortTitle: Configure GitHub Pages
---

{% ifversion ghes %}

## {% data variables.product.prodname_pages %} の公開サイトを有効にする

If private mode is enabled on your enterprise, the public cannot access {% data variables.product.prodname_pages %} sites hosted by your enterprise unless you enable public sites.

{% warning %}

**Warning:** {% data variables.product.prodname_pages %} の公開サイトを有効にすると、Enterprise のすべてのリポジトリ内のすべてのサイトに一般ユーザがアクセスできるようになります。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. **Public Pages（公開ページ）**を選択してください。 ![[Public Pages] を有効化するチェックボックス](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

## Enterprise 向けの {% data variables.product.prodname_pages %} を無効にする

If subdomain isolation is disabled for your enterprise, you should also disable {% data variables.product.prodname_pages %} to protect yourself from potential security vulnerabilities. 詳しい情報については、「[Subdomain Isolation の有効化](/admin/configuration/enabling-subdomain-isolation)」を参照してください。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. **Enable Pages（ページの有効化）**の選択を解除してください。 ![{% data variables.product.prodname_pages %} を無効化するチェックボックス](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
5. [Pages policies] で [**Enable {% data variables.product.prodname_pages %}**] を選択します。 ![{% data variables.product.prodname_pages %} を無効化するチェックボックス](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png)
{% data reusables.enterprise-accounts.pages-policies-save %}

{% endif %}

{% ifversion ghes %}
## 参考リンク

- [プライベートモードの有効化](/admin/configuration/enabling-private-mode)
{% endif %}
