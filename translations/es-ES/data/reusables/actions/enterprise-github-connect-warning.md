{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
{% note %}

**Nota:** Con {% data variables.product.prodname_github_connect %} habilitado, las {% data variables.product.prodname_actions %} intentarán encontrar el repositorio en tu instancia de {% data variables.product.prodname_ghe_server %} antes de revertirse a {% data variables.product.prodname_dotcom %}. Si un usuario crea una organización y repositorio en tu empresa, los cuales empaten con un nombre de organzación y repositorio en {% data variables.product.prodname_dotcom %}, el repositorio de tu empresa se utilizará en vez del repositorio de {% data variables.product.prodname_dotcom %}. Un usuario malintencionado podría sacar provecho de este comportamiento para ejecutar código como parte de un flujo de trabajo.

{% endnote %}
{% endif %}
