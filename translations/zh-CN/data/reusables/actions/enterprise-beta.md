{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.22" %}
{% note %}

**注：**{% data variables.product.prodname_ghe_server %} 2.22 上的 {% data variables.product.prodname_actions %} 支持是有限的公测版。 要查看外部存储要求并请求访问测试版，请参阅“[启用 {% data variables.product.prodname_actions %} 和配置存储](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)”。

{% endnote %}
{% endif %}
