---
title: Enterprise 向けの GitHub Pages を設定する
intro: 'Enterprise の {% data variables.product.prodname_pages %} を有効または無効にして、サイトを公開するかどうかを選択できます。'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages/
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages/
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise/
  - /admin/configuration/configuring-github-pages-for-your-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Pages
---

### {% data variables.product.prodname_pages %} の公開サイトを有効にする

{% if enterpriseServerVersions contains currentVersion %} Enterprise でプライベートモードが有効になっている場合、{% else %}公開{% endif %}は、公開サイトを有効にしない限り、Enterprise がホストする {% data variables.product.prodname_pages %} サイトにアクセスできません。

{% warning %}

**Warning:** {% data variables.product.prodname_pages %} の公開サイトを有効にすると、Enterprise のすべてのリポジトリ内のすべてのサイトに一般ユーザがアクセスできるようになります。

{% endwarning %}

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. **Public Pages（公開ページ）**を選択してください。 ![[Public Pages] を有効化するチェックボックス](/assets/images/enterprise/management-console/public-pages-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
5. [Pages policies] で [**Public {% data variables.product.prodname_pages %}**] を選択します。 ![{% data variables.product.prodname_pages %} を有効化するチェックボックス](/assets/images/enterprise/business-accounts/public-github-pages-checkbox.png)
{% data reusables.enterprise-accounts.pages-policies-save %}
{% endif %}

### Enterprise 向けの {% data variables.product.prodname_pages %} を無効にする

{% if enterpriseServerVersions contains currentVersion %}
If subdomain isolation is disabled for your enterprise, you should also disable {% data variables.product.prodname_pages %} to protect yourself from potential security vulnerabilities. 詳しい情報については、「[Subdomain Isolation の有効化](/admin/configuration/enabling-subdomain-isolation)」を参照してください。
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.pages-tab %}
4. **Enable Pages（ページの有効化）**の選択を解除してください。 ![{% data variables.product.prodname_pages %} を無効化するチェックボックス](/assets/images/enterprise/management-console/pages-select-button.png)
{% data reusables.enterprise_management_console.save-settings %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.pages-tab %}
5. [Pages policies] で [**Enable {% data variables.product.prodname_pages %}**] を選択します。 ![{% data variables.product.prodname_pages %} を無効化するチェックボックス](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png)
{% data reusables.enterprise-accounts.pages-policies-save %}
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### 参考リンク

- [プライベートモードの有効化](/admin/configuration/enabling-private-mode)
{% endif %}
