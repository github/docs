---
title: Configurando webhooks para eventos em sua conta patrocinada
intro: Você pode configurar webhooks para alertá-lo quando receber novos patrocínios ou patrocinadores existentes fizerem alterações em seus patrocínios.
versions:
  free-pro-team: '*'
---

Para monitorar as alterações de seus patrocínios, como os cancelamentos no final de um período de pagamento, você pode criar webhooks para sua conta de usuário ou organização patrocinada. Quando você configurar um webhook para sua conta de usuário ou organização patrocinada, você receberá atualizações quando patrocínios forem criados, editados ou excluídos. Para obter mais informações, consulte o [`evento de patrocínio` de webhook](/webhooks/event-payloads/#sponsorship).

### Gerenciando webhooks para sua conta de usuário patrocinada

{% data reusables.sponsors.navigate-to-dev-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}

### Gerenciando webhooks para sua organização patrocinada

Os proprietários da organização podem configurar webhooks para uma organização patrocinada.

{% data reusables.sponsors.navigate-to-org-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}
