---
title: Global Webhooks
intro: 'Global Webhooks are installed on your enterprise. Puedes utilizar los webhooks globales para monitorear, responder a, o requerir las reglas para los usuarios, organizaciones, equipos y repositorios en tu empresa.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Los webhooks globales se pueden suscribir a los tipos de evento para [organizaciones](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [usuarios](/developers/webhooks-and-events/webhook-events-and-payloads#user), [repositorios](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [equipos](/developers/webhooks-and-events/webhook-events-and-payloads#team), [miembros](/developers/webhooks-and-events/webhook-events-and-payloads#member), [membrecías](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [bifuraciones](/developers/webhooks-and-events/webhook-events-and-payloads#fork), y [pings](/developers/webhooks-and-events/about-webhooks#ping-event).

*Esta API solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella. Para aprender cómo configurar los webhooks globales, consulta la sección [Acerca de los webhooks globales](/enterprise/admin/user-management/about-global-webhooks).
