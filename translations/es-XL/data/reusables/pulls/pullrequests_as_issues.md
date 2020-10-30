{% note %}

**Nota**: la API de REST de GitHub considera cada solicitud de extracción como un informe de problemas, pero no todos los informes de problemas serán una solicitud de extracción. Es por esto que la terminal para los "informes de problemas" podría devolver tanto informes de problemas como solicitudes de extracción en su respuesta. Puedes identificar a las solicitudes de extracción por la clave `pull_request`.

Toma en cuenta que la `id` de una solicitud de extracción que se devuelve de las terminales de "informes de problemas" será una _issue id_. Para encontrar la id de la solicitud de extracción, utiliza la terminal "[List pull requests](/v3/pulls/#list-pull-requests)".

{% endnote %}
