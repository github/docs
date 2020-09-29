{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Aviso de Obsoletización de Parámetros:** {% data variables.product.prodname_dotcom %} reemplazará y descontinuará a `members_allowed_repository_creation_type` para favorecer permisos más granulares. Los nuevos parámetros de entrada son `members_can_create_public_repositories`, `members_can_create_private_repositories` para todas las organizaciones y `members_can_create_internal_repositories` para aquellas organizaciones asociadas con una cuenta empresarial que utilice {% data variables.product.prodname_ghe_cloud %} o {% data variables.product.prodname_ghe_server %} 2.20+. Para obtener más información, consulta la [publicación del blog](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).

{% endwarning %}
{% endif %}
