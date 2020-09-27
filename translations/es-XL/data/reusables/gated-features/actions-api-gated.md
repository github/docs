{% if currentVersion == "free-pro-team@latest" %}

{{ site.data.variables.product.prodname_actions }} se encuentra disponible con {{ site.data.variables.product.prodname_free_user }}, {{ site.data.variables.product.prodname_pro }}, {{ site.data.variables.product.prodname_free_team }} para organizaciones, {{ site.data.variables.product.prodname_team }}, {{ site.data.variables.product.prodname_ghe_cloud }}, y {{ site.data.variables.product.prodname_ghe_one }}. {{ site.data.variables.product.prodname_actions }} no está disponible para repositorios privados que pertenezcan a cuentas que utilicen planes tradicionales por repositorio. {% if currentVersion == "free-pro-team@latest" %}{{ site.data.reusables.gated-features.more-info }}{% endif %}

{% endif %}
