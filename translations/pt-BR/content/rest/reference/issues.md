---
title: Problemas
redirect_from:
  - /v3/issues
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Tipos de mídia personalizados para problemas

Estes são os tipos de mídia compatíveis para problemas.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

Para obter mais informações sobre os tipos de mídia, consulte "[Tipos de mídia personalizados](/rest/overview/media-types)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Responsáveis

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'assignees' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comentários

A API de Comentários do Problema é compatível com listagem, visualização, edição e criação de comentários em problemas e pull requests.

Os comentários do problema usam [estes tipos de mídia personalizados](#custom-media-types). Você pode ler mais sobre o uso de tipos de mídia na API [aqui](/rest/overview/media-types).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Eventos

A API de Eventos de problema pode retornar diferentes tipos de eventos desencadeados por atividades em problemas e pull requests. The Issue Events API can return different types of events triggered by activity in issues and pull requests. For more information about the specific events that you can receive from the Issue Events API, see "[Issue event types](/developers/webhooks-and-events/issue-event-types)." Para obter mais informações, consulte a "[API de Eventos](/developers/webhooks-and-events/github-event-types)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'events' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Etiquetas

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'labels' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Marcos

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'milestones' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Linha do tempo

A API de Eventos da Linha do Tempo pode retornar diferentes tipos de eventos acionados pela atividade da linha do tempo em problemas e pull requests. The Issue Events API can return different types of events triggered by activity in issues and pull requests. For more information about the specific events that you can receive from the Issue Events API, see "[Issue event types](/developers/webhooks-and-events/issue-event-types)." Para obter mais informações, consulte a "[API de Eventos do GitHub](/developers/webhooks-and-events/github-event-types)".

Você pode usar esta API para exibir informações sobre problemas e pull request ou determinar quem deve ser notificado sobre os comentários de problema.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'timeline' %}{% include rest_operation %}{% endif %}
{% endfor %}
