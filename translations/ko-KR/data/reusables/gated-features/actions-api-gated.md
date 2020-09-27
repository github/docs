{% if currentVersion == "free-pro-team@latest" %}

{{ site.data.variables.product.prodname_actions }} is available with {{ site.data.variables.product.prodname_free_user }}, {{ site.data.variables.product.prodname_pro }}, {{ site.data.variables.product.prodname_free_team }} for organizations, {{ site.data.variables.product.prodname_team }}, {{ site.data.variables.product.prodname_ghe_cloud }}, and {{ site.data.variables.product.prodname_ghe_one }}. {{ site.data.variables.product.prodname_actions }} is not available for private repositories owned by accounts using legacy per-repository plans. {% if currentVersion == "free-pro-team@latest" %}{{ site.data.reusables.gated-features.more-info }}{% endif %}

{% endif %}
