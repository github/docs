---
title: レート制限の設定
intro: '{% data variables.enterprise.management_console %} を使用することで、{% data variables.product.prodname_ghe_server %} のレート制限を設定できます。'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### {% data variables.product.prodname_enterprise_api %}のレート制限の有効化

{% data variables.product.prodname_enterprise_api %}のレート制限を有効化すれば、個人あるいは認証されていないユーザによるリソースの過剰な利用を回避できます。 詳しい情報については、「[REST API のリソース](/rest/overview/resources-in-the-rest-api#rate-limiting)」を参照してください。

{% if currentVersion ver_gt "enterprise-server@2.21" %}
{{ site.data.variables.product.prodname_enterprise_api }}のレート制限を有効化すれば、個人あるいは認証されていないユーザによるリソースの過剰な利用を回避できます。 For more information, see "[Rate Limiting](/enterprise/{{ page.version }}/v3/#rate-limiting)."
{% endif %}

{% note %}

**ノート:** {% data variables.enterprise.management_console %}は、各レート制限の時間間隔（毎分もしくは毎時）をリストします。

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. "Rate Limiting（レート制限）"の下で**Enable API Rate Limiting（APIレート制限の有効化）**を選択してください。 ![API レート制限を有効にするためのチェックボックス](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. 各APIについて認証済み及び非認証リクエストの制限を入力するか、事前に入力されているデフォルトの制限を承認してください。
{% data reusables.enterprise_management_console.save-settings %}

### 不正利用レート制限の有効化

不正利用レート制限を設定すれば、{% data variables.product.product_location %}上のサービスの全体のレベルを保護できます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. "Rate Limiting（レート制限）"の下で**Enable Abuse Rate Limiting（不正利用レート制限の有効化）**を選択してください。 ![不正利用レート制限を有効にするためのチェックボックス](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png)
3. 総リクエストの制限、CPU制限、検索のためのCPU制限を入力するか、事前に入力されているデフォルトの制限を承認してください。
{% data reusables.enterprise_management_console.save-settings %}

### Gitレート制限の有効化

リポジトリネットワークごとまたはユーザー ID ごとに Git レート制限を適用できます。 Git レート制限は 1 分あたりの同時操作数で表現され、現在の CPU 負荷に適応します。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. "Rate Limiting（レート制限）"の下で**Enable Git Rate Limiting（Gitレート制限の有効化）**を選択してください。 ![Git レート制限を有効にするためのチェックボックス](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. リポジトリネットワークまたはユーザ ID ごとの制限を入力してください。 ![リポジトリネットワークとユーザ ID 制限のフィールド](/assets/images/enterprise/management-console/example-git-rate-limits.png)
{% data reusables.enterprise_management_console.save-settings %}
