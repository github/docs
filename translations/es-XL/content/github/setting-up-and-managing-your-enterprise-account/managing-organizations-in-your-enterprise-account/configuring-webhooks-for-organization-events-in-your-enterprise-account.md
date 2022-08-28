---
title: Configurar webhooks para eventos de la organización en tu cuenta de empresa
intro: Los propietarios de empresas pueden configurar webhooks para eventos en organizaciones que son propiedad de una cuenta de empresa.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account/
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
versions:
  free-pro-team: '*'
---
Puedes configurar webhooks para recibir eventos de organizaciones que son propiedad de tu cuenta de empresa. Para obtener más información acerca de los webhooks, consulta la sección "[Webhooks](/webhooks/)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. Al lado de "Webhooks", haz clic en **Add webhook** (Agregar webhook). ![Botón para agregar webhook en la barra lateral Webhooks](/assets/images/help/business-accounts/add-webhook-button.png)
5. Escribe una URL de carga, luego opcionalmente personaliza la configuración. Para obtener más información, consulta "[Crear webhooks](/webhooks/creating/#creating-webhooks)". ![Campos para la URL de carga y otras opciones de personalización](/assets/images/help/business-accounts/webhook-payload-url-and-customization-options.png)
6. En "Which events would you like to trigger this webhook?" (¿Qué eventos desaría desencadenar este webhook?), selecciona **Let me select individual events** (Dejarme seleccionar eventos individuales). ![Seleccionar eventos individuales](/assets/images/help/business-accounts/webhook-let-me-select-individual-events.png)
7. Selecciona uno o más eventos de la cuenta de empresa para que reciba tu webhook. Para obtener más información, consulta la sección "[Tipos de eventos y cargas útiles](/webhooks/event-payloads/)". ![Seleccionar eventos individuales](/assets/images/help/business-accounts/webhook-selected-events.png)
8. Para recibir los eventos seleccionados para los webhooks desencadenados, selecciona **Active** (Activar). ![Seleccionar eventos individuales](/assets/images/help/business-accounts/webhook-active.png)
9. Haz clic en **Add webhook** (Agregar webhook).
