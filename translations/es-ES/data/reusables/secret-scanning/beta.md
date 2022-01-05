{% ifversion ghes = 3.0 or ghae %}
{% note %}

**Nota:** Las {% data variables.product.prodname_secret_scanning_caps %} para los repositorios que pertenecen a organizaciones se encuentra actualmente en beta y está sujeta a cambios.

Si estás utilizando una versión anterior de {% data variables.product.prodname_ghe_server %}, tendrás que mejorarla para utilizar el {% data variables.product.prodname_secret_scanning %}. Para obtener más información sobre cómo actualizar tu instancia de {% data variables.product.prodname_ghe_server %}, consulta la sección "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)" y refiérete al [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) para encontrar la ruta de mejora desde tu versión de lanzamiento actual.


{% endnote %}

{% endif %}
{% ifversion ghes > 3.0 %}

{% note %}

**Nota:** El {% data variables.product.prodname_secret_scanning_caps %} estaba en beta en {% data variables.product.prodname_ghe_server %} 3.0. Para encontrar el lanzamiento del {% data variables.product.prodname_secret_scanning %} que está generalmente disponible, mejora al último lanzamiento de {% data variables.product.prodname_ghe_server %}. Para obtener más información sobre cómo actualizar tu instancia de {% data variables.product.prodname_ghe_server %}, consulta la sección "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)" y refiérete al [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) para encontrar la ruta de mejora desde tu versión de lanzamiento actual.


{% endnote %}

{% endif %}
