---
title: Webhooks
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

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
