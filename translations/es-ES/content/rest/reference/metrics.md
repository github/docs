---
title: Metrics
intro: 'The repository metrics API allows you to retrieve community profile, statistics, and traffic for your repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /rest/reference/repository-metrics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% ifversion fpt or ghec %}
## Comunidad

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'community' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## Estadísticas

La API de Estadísticas del Repositorio te permite recuperar los datos que {% data variables.product.product_name %} utiliza para visualizar los diferentes tipos de actividad del repositorio.

### Unas palabras sobre el almacenamiento en caché

El calcular las estadísitcas del repositorio es una operación costosa, así que intentamos devolver los datos almacenados en caché cuando nos es posible.  Si los datos no se han almacenado en caché cuando consultas la estadística de un repositorio, recibirás una respuesta `202`; también se dispara un job en segundo plano para comenzar a compilar estas estadísticas. Permite que el job se complete, y luego emite la solicitud nuevamente. Si el job ya terminó, esa solicitud recibirá una respuesta `200` con la estadística en el cuerpo de la respuesta.

El SHA de la rama predeterminada del repositorio guarda en caché las estadísticas del repositorio; el subir información a la rama predeterminada restablece el caché de de las estadísticas.

### Las estadísticas excluyen algunos tipos de confirmaciones

Las estadísticas que expone la API empatan con aquellas que muestran [diversas gráficas del repositorio](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

Para resumir:
- Todas las estadísticas excluyen las confirmaciones de fusión.
- Las estadísticas del colaborador también excluyen a las confirmaciones vacías.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statistics' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt or ghec %}
## Tráfico

Para los repositorios en los que tienes acceso de carga, la API de tráfico proporciona acceso a la información proporcionada en tu gráfica de repositorio. Para obtener más información, consulta la sección "<a href="/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository" class="dotcom-only">Ver el tráfico hacia un repositorio</a>".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'traffic' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}
