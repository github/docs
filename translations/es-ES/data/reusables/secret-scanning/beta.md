{% ifversion ghes = 3.0 or ghae %}
{% note %}

**Nota:** Las {% data variables.product.prodname_secret_scanning_caps %} para los repositorios que pertenecen a organizaciones se encuentra actualmente en beta y está sujeta a cambios.

If you're using an earlier version of {% data variables.product.prodname_ghe_server %}, you'll have to upgrade to use {% data variables.product.prodname_secret_scanning %}. For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.


{% endnote %}

{% endif %}
{% ifversion ghes > 3.0 %}

{% note %}

**Nota:** El {% data variables.product.prodname_secret_scanning_caps %} estaba en beta en {% data variables.product.prodname_ghe_server %} 3.0. Para encontrar el lanzamiento del {% data variables.product.prodname_secret_scanning %} que está generalmente disponible, mejora al último lanzamiento de {% data variables.product.prodname_ghe_server %}. For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.


{% endnote %}

{% endif %}
