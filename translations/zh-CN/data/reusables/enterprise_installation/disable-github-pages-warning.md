{% if enterpriseServerVersions contains currentVersion %}
{% warning %}

**Warning:** If subdomain isolation is disabled, we recommend also disabling {% data variables.product.prodname_pages %} on your enterprise. There will be no way to isolate user-supplied {% data variables.product.prodname_pages %} content from the rest of your enterprise's data. For more information, see "[Configuring {% data variables.product.prodname_pages %} for your enterprise](/enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise/)."

{% endwarning %}
{% endif %}