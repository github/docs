Las API de REST de los webhooks te permiten administrar webhooks de repositorio, organización y aplicación.{% ifversion fpt or ghes > 3.2 or ghae or ghec %} Puedes utilizar esta API para listar las entregas de webhook para uno de ellos u obtener y volver a hacer una entrega individual para uno de ellos, la cual puede integrarse en una app o servicio externo.{% endif %}. También puedes utilizar la API de REST para cambiar la configuración del webhook. Por ejemplo, puedes modificar la URL de la carga útil, el tipo de contenido, la verificación de SSL, y el secreto. Para obtener más información, consulta:

- [API de REST para los webhooks de los repositorios](/rest/reference/webhooks#repository-webhooks)
- [API de REST de webhooks de organización](/rest/reference/orgs#webhooks)
- [{% data variables.product.prodname_github_app %} API de REST de Webhooks](/rest/reference/apps#webhooks)
