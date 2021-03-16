---
title: Webhooks für Organisationsereignisse in Deinem Enterprise-Konto konfigurieren
intro: Enterprise-Inhaber können für Ereignisse in Organisationen eines Enterprise-Kontos Webhooks konfigurieren.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account/
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
versions:
  free-pro-team: '*'
---

Du kannst Webhooks konfigurieren, um Ereignisse von Organisationen im Besitz Deines Enterprise-Kontos zu empfangen. For more information about webhooks, see "[Webhooks](/webhooks/)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
4. Klicke neben „Webhooks“ (Webhooks) auf **Add webhook** (Webhook hinzufügen). ![Schaltfläche „Add webhook“ (Webhook hinzufügen) in der Webhook-Seitenleiste](/assets/images/help/business-accounts/add-webhook-button.png)
5. Gib eine Nutzlast-URL ein, und passe dann optional die Konfiguration an. Weitere Informationen finden Sie unter „[Webhooks erstellen](/webhooks/creating/#creating-webhooks)“. ![Felder für die Nutzlast-URL und andere Anpassungsoptionen](/assets/images/help/business-accounts/webhook-payload-url-and-customization-options.png)
6. Wähle unter „Which events would you like to trigger this webhook?“ (Welche Ereignisse sollen diesen Webhook auslösen?) die Option **Let me select individual events** (Einzelne Ereignisse auswählen). ![Einzelne Ereignisse auswählen](/assets/images/help/business-accounts/webhook-let-me-select-individual-events.png)
7. Wähle mindestens ein Enterprise-Konto-Ereignis aus, das Dein Webhook empfangen soll. For more information, see "[Event types and payloads](/webhooks/event-payloads/)." ![Einzelne Ereignisse auswählen](/assets/images/help/business-accounts/webhook-selected-events.png)
8. Um die gewählten Ereignisse für ausgelöste Webhooks zu empfangen, wähle **Active** (Aktiv) aus. ![Einzelne Ereignisse auswählen](/assets/images/help/business-accounts/webhook-active.png)
9. Klicke auf **Add webhook** (Webhook hinzufügen).
