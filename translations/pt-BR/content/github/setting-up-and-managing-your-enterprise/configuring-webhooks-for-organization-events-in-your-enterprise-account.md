---
title: Configurar webhooks para eventos de organização na conta corporativa
intro: Os proprietários corporativos podem configurar webhooks para eventos na organização pertencentes a uma conta corporativa.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account/
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

Você pode configurar webhooks para receber eventos de organizações que pertencem à sua conta corporativa. Para obter mais informações sobre webhooks, consulte "[Webhooks](/webhooks/)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. Ao lado de "Webhooks", clique em **Add webhook** (Adicionar webhook). ![Botão Add webhook (Adicionar webhook) na barra lateral Webhooks](/assets/images/help/business-accounts/add-webhook-button.png)
5. Digite uma URL de carga e, se desejar, personalize a configuração. Para obter mais informações, consulte "[Criar webhooks](/webhooks/creating/#creating-webhooks)." ![Campos para URL da carga e outras opções de personalização](/assets/images/help/business-accounts/webhook-payload-url-and-customization-options.png)
6. Em "Which events would you like to trigger this webhook?" (Quais eventos deseja que acione este webhook?), selecione **Let me select individual events** (Permita-me selecionar eventos individuais). ![Seleção de eventos individuais](/assets/images/help/business-accounts/webhook-let-me-select-individual-events.png)
7. Selecione um ou mais eventos da conta corporativa para recebimento pelo seu webhook. Para obter mais informações, consulte "[Tipos de evento e cargas](/webhooks/event-payloads/)". ![Seleção de eventos individuais](/assets/images/help/business-accounts/webhook-selected-events.png)
8. Para receber os eventos selecionados para os webhooks acionados, selecione **Active** (Ativar). ![Seleção de eventos individuais](/assets/images/help/business-accounts/webhook-active.png)
9. Clique em **Add webhook** (Adicionar webhook).
