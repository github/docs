---
title: Organizaciones
intro: 'La API de Organizaciones te da acceso para controlar y administrar todas tus organizaciones de {% data variables.product.product_name %}.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/orgs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% ifversion fpt %}
## Bloquear usuarios

El token que se utiliza para autenticar la llamada debe tener el alcance de `admin:org` para poder hacer cualquier llamada de bloqueo para una organización. De lo contrario, la respuesta devolverá un `HTTP 404`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## Miembros

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'members' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Colaboradores externos

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'outside-collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Webhooks

Los webhooks de las organizaciones te permiten recibir cargas útiles de `POST` por HTTP cuando ciertos eventos suceden en una organización. {% data reusables.webhooks.webhooks-rest-api-links %}

Para obtener más información sobre las acciones a las cuales te puedes suscribir, consulta los "[tipos de eventos de {% data variables.product.prodname_dotcom %}](/developers/webhooks-and-events/github-event-types)".

### Alcances & Restricciones

Todas las acciones en contra de los webhooks de una organización requieren que el usuario autenticado sea un administrador de la organización que se está administrando. Adicionalmente, los tokens de OAuth requieren el alcance `admin:org_hook`. Par aobtener más información, consulta la sección "[Alcances para las Apps de OAuth](/developers/apps/scopes-for-oauth-apps)".

Para porteger los datos sensibles que pueden encontrarse en las configuraciones de los webhooks, también imponemos las siguientes reglas de control de accesos:

- Las aplicaciones de OAuth no pueden listar, ver o editar los webhooks que no crearon ellas mismas.
- Los usuarios no pueden listar, ver o editar los webhooks que crearon las aplicaciones de OAuth.

### Recibir Webhooks

Para que {% data variables.product.product_name %} envíe cargas útiles de webhooks, se necesita que se pueda acceder a tu servidor desde la internet. También sugerimos ampliamente utilizar SSL para que podamos enviar cargas útiles cifradas a través de HTTPS.

Para encontrar más de las mejores prácticas, [consulta nuestra guía](/guides/best-practices-for-integrators/).

#### Encabezados de Webhook

{% data variables.product.product_name %} enviará varios encabezados de HTTP para diferenciar los tipos de eventos y los identificadores de las cargas útiles. Consulta la sección de [encabezados de webhook](/webhooks/event-payloads/#delivery-headers) para encontrar más detalles.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}
