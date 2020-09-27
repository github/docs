---
title: Problemas
redirect_from:
  - /v3/issues
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Tipos de mendios personalizados para los informes de problemas

Estos son los tipos de medios compatibles para los informes de problemas.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

Para obtener más información acerca de los tipos de medios, consulta la sección "[Tipos de medios personalizados](/rest/overview/media-types)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Asignatarios

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'assignees' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comentarios

La API de Comentarios par los Informes de Problemas es compatible con listar, ver, editar y crear comentarios en informes de problemas y solicitudes de extracción.

Los comentarios de los informes de problemas utilizan [estos tipos de medios personalizados](#custom-media-types). Puedes leer más acerca del uso de tipos de medios en la API [aquí](/v3/media/).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Eventos

La API de eventos para Informes de problemas puede devolver diferentes tipos de eventos que se activan de acuerdo a la actividad en los informes de problemas y solicitudes de extracción. La API de eventos para Informes de problemas puede devolver diferentes tipos de eventos que se activan de acuerdo a la actividad en los informes de problemas y solicitudes de extracción. Para obtener más información acerca de los eventos específicos que puedes recibir de la API de Eventos para Solicitudes de Extracción, consulta la sección "[Tipos de evento de las Solicitudes de Extracción](/developers/webhooks-and-events/issue-event-types)". Para obtener más información, consulta la "[API de Eventos](/developers/webhooks-and-events/github-event-types)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'events' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Etiquetas

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'labels' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Hitos

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'milestones' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Línea de tiempo

La API de eventos para la línea de tiempo puede devolver diferentes tipos de eventos que se activan de acuerdo a la actividad de la línea de tiempo en los informes de problemas y solicitudes de extracción. La API de eventos para Informes de problemas puede devolver diferentes tipos de eventos que se activan de acuerdo a la actividad en los informes de problemas y solicitudes de extracción. Para obtener más información acerca de los eventos específicos que puedes recibir de la API de Eventos para Solicitudes de Extracción, consulta la sección "[Tipos de evento de las Solicitudes de Extracción](/developers/webhooks-and-events/issue-event-types)". Para obtener más información, consulta la "[API de Eventos de GitHub](/developers/webhooks-and-events/github-event-types)".

Puedes utilizar esta API para mostrar información sobre los informes de problemas y solicitudes de extracción o para determinar a quién debería notificársele sobre los comentarios en los informes de problemas.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'timeline' %}{% include rest_operation %}{% endif %}
{% endfor %}
