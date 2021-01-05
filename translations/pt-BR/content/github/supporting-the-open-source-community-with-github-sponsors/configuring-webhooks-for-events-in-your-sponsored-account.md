---
title: Configurando webhooks para eventos em sua conta patrocinada
intro: Você pode configurar webhooks para alertá-lo quando receber novos patrocínios ou patrocinadores existentes fizerem alterações em seus patrocínios.
versions:
  free-pro-team: '*'
---

### About webhooks for events in your sponsored account

Para monitorar as alterações de seus patrocínios, como os cancelamentos no final de um período de pagamento, você pode criar webhooks para sua conta de usuário ou organização patrocinada. When you set up a webhook for your sponsored account, you'll receive updates when sponsorships are created, edited, or deleted. Para obter mais informações, consulte o [`evento de patrocínio` de webhook](/webhooks/event-payloads/#sponsorship).

### Managing webhooks for events in your sponsored account

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}