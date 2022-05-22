{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
{% warning %}

**Aviso de obsoletización:** El atributo `token` se obsoletizó en algunas respuestas de la API para Autorizaciones de OAuth:
* Listar tus autorizaciones
* Obtener una sola autorización
* Obtener o crear una autorización para una app específica - aún se devuelve el `token` para "crear"
* Obtener o crear una autorización para una app y huella digital específicos - aún se devuelve `token` para "crear"
* Actualizar una autrización existente

Para reducir el impacto de eliminar el valor de `token`, la API de Autorizaciones de OAuth ahora incluye un atributo de solicitud nuevo (`fingerprint`), tres atributos de respuesta nuevos (`token_last_eight`, `hashed_token`, y `fingerprint`), y la terminal de [Obtener o crear una autorización para una app y huella digital específica](/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint).

Esta fucionalidad se convirtió en predeterminada para todas las solicitudes desde el 20 de abril de 2015. Por favor, consulta la [publicación del blog](https://developer.github.com/changes/2015-04-20-authorizations-api-response-changes-are-now-in-effect/) para obtener toda la información al respecto.

{% endwarning %}
{% endif %}
