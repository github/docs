{% if enterpriseServerVersions contains currentVersion %}
{% warning %}

**警告：**如果禁用子网分隔，建议同时在企业上禁用 {% data variables.product.prodname_pages %}。 无法将用户提供的 {% data variables.product.prodname_pages %} 内容与其余企业数据分隔。 更多信息请参阅“[为企业配置 {% data variables.product.prodname_pages %}](/enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise/)”。

{% endwarning %}
{% endif %}