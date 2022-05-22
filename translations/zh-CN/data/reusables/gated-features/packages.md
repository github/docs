{% data variables.product.prodname_registry %} 可用于 {% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、组织的 {% data variables.product.prodname_free_team %}、{% data variables.product.prodname_team %}、{% data variables.product.prodname_ghe_cloud %}、{% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_managed %}。
{% if currentVersion == "free-pro-team@latest" %}
<br>
{% data variables.product.prodname_registry %} 不适用于使用旧版按仓库计划的帐户所拥有的私有仓库。 此外，使用旧版按仓库计划的帐户无法访问 {% data variables.product.prodname_container_registry %}，因为这些帐户是按仓库计费的。 {% data reusables.gated-features.more-info %}
{% endif %}
