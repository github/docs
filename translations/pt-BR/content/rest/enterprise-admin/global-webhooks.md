---
title: Webhooks globais
intro: 'Os webhooks globais são instalados na sua empresa. Você pode usar webhooks globais para monitorar, responder ou aplicar regras automaticamente para usuários, organizações, equipes e repositórios na sua empresa.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Webhooks globais podem se inscrever para os tipos de eventos  [organização](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [usuário](/developers/webhooks-and-events/webhook-events-and-payloads#user), [repositório](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [equipe](/developers/webhooks-and-events/webhook-events-and-payloads#team), [integrante](/developers/webhooks-and-events/webhook-events-and-payloads#member), [filiação](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [bifurcação](/developers/webhooks-and-events/webhook-events-and-payloads#fork)e [ping](/developers/webhooks-and-events/about-webhooks#ping-event).

*Esta API está disponível somente para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la. Para aprender como configurar webhooks globais, consulte [Sobre webhooks globais](/enterprise/admin/user-management/about-global-webhooks).
