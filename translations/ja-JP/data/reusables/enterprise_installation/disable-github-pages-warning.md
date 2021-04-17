{% if enterpriseServerVersions contains currentVersion %}
{% warning %}

**警告：**Subdomain Isolationを無効化している場合は、Enterprise上の{% data variables.product.prodname_pages %}も無効化することをおすすめします。 ユーザが提供する{% data variables.product.prodname_pages %}のコンテンツをその他のEnterpriseのデータから分離しておく方法はありません。 詳しい情報については、「[Enterprise の {% data variables.product.prodname_pages %} を設定する](/enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise/)」を参照してください。

{% endwarning %}
{% endif %}