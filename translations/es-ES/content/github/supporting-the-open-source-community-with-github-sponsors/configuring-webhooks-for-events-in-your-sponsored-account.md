---
title: Configurar webhooks para eventos en tu cuenta patrocinada
intro: Puedes configurar wehbhooks para que te envíen una alerta cuando recibas nuevos patrocinios o cuando los patrocinadores existentes realicen cambios a sus patrocinios.
versions:
  free-pro-team: '*'
---

### Acerca de los webhooks para los eventos en tu cuenta patrocinada

Para monitorear los cambios a tus patrocinios, tales como las cancelaciones al final de un periodo de pago, puedes crear webhooks para tu cuenta patrocinada de usuario u organización. Cuando configuras un webhook para tu cuenta patrocinada, recibirás las actualizaciones cuando los patrocinios se creen, editen o borren. Para obtener más información, consulta el [evento de webhook de `sponsorship`](/webhooks/event-payloads/#sponsorship).

### Administrar los webhooks para los eventos en tu cuenta patrocinada

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}