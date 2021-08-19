{% data variables.product.prodname_registry %} is available with {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} for organizations, {% data variables.product.prodname_team %}, {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_ghe_server %}, and {% data variables.product.prodname_ghe_managed %}.
{% if currentVersion == "free-pro-team@latest" %}
<br>
{% data variables.product.prodname_registry %} ist nicht verfügbar für private Repositorys im Besitz von Konten mit älteren Pro-Repository-Plänen. Also, accounts using legacy per-repository plans cannot access the {% data variables.product.prodname_container_registry %} since these accounts are billed by repository. {% data reusables.gated-features.more-info %}
{% endif %}
