---
title: Configurar webhooks para eventos en tu cuenta patrocinada
intro: Puedes configurar wehbhooks para que te envíen una alerta cuando recibas nuevos patrocinios o cuando los patrocinadores existentes realicen cambios a sus patrocinios.
versions:
  free-pro-team: '*'
---

Para monitorear los cambios a tus patrocinios, tales como las cancelaciones al final de un periodo de pago, puedes crear webhooks para tu cuenta patrocinada de usuario u organización. Cuando estableces un webhook para tu cuenta patrocinada de usuario u organización, recibirás actualizaciones cuando se creen, editen o borren los patrocinios. Para obtener más información, consulta el [evento de webhook de `sponsorship`](/webhooks/event-payloads/#sponsorship).

### Administrar los webhooks para tu cuenta de usuario patrocinada

{{ site.data.reusables.sponsors.navigate-to-dev-sponsors-dashboard }}
{{ site.data.reusables.sponsors.navigate-to-webhooks-tab }}
{{ site.data.reusables.sponsors.add-webhook }}
{{ site.data.reusables.sponsors.add-payload-url }}
{{ site.data.reusables.sponsors.webhook-content-formatting }}
{{ site.data.reusables.sponsors.webhook-secret-token }}
{{ site.data.reusables.sponsors.add-active-triggers }}
{{ site.data.reusables.sponsors.confirm-add-webhook}}
{{ site.data.reusables.sponsors.manage-existing-webhooks}}

### Administrar webhooks para tu cuenta de organización patrocinada

Los propietarios de organización pueden configurar webhooks para sus organizaciones patrocinadas.

{{ site.data.reusables.sponsors.navigate-to-org-sponsors-dashboard }}
{{ site.data.reusables.sponsors.navigate-to-webhooks-tab }}
{{ site.data.reusables.sponsors.add-webhook }}
{{ site.data.reusables.sponsors.add-payload-url }}
{{ site.data.reusables.sponsors.webhook-content-formatting }}
{{ site.data.reusables.sponsors.webhook-secret-token }}
{{ site.data.reusables.sponsors.add-active-triggers }}
{{ site.data.reusables.sponsors.confirm-add-webhook}}
{{ site.data.reusables.sponsors.manage-existing-webhooks}}
