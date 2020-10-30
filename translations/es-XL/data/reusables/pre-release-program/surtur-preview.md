{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% note %}

**Nota:** Los permisos de creación de repositorios nuevos se encuentran disponibles para su previsualización. Ahora puedes utilizar `members_can_create_public_repositories`, `members_can_create_private_repositories`, and `members_can_create_internal_repositories`. Solo puedes permitir que los miembros creen repositorios internos si tu organización está asociada con una cuenta empresarial que utilice {% data variables.product.prodname_ghe_cloud %} o {% data variables.product.prodname_ghe_server %} 2.20+. Estos parámetros proporcionan permisos más granulares para configurar el tipo de repositorios que pueden crear los miembros de la organización.

Para acceder a estos parámetros nuevos durante el periodo de previsualización, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado `Accept`:
```
application/vnd.github.surtur-preview+json
```
{% endnote %}
{% else %}
{% note %}

**Nota:** Los permisos de creación de repositorios nuevos se encuentran disponibles para su previsualización. Ahora puedes configurar el parámetro `members_allowed_repository_creation_type` para configurar si los miembros de la organización pueden crear repositorios y qué tipo de repositorios pueden crear.

Para acceder a este parámetro nuevo durante el periodo de previsualización, debes proporcionar un [tipo de medios](/v3/media) personalizado en el encabezado `Accept`:
```
application/vnd.github.surtur-preview+json
```
{% endnote %}
{% endif %}
