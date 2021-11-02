---
title: Globale Webhooks verwalten
shortTitle: Manage global webhooks
intro: You can configure global webhooks to notify external web servers when events occur within your enterprise.
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account/
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
---

## Informationen zu globalen Webhooks

You can use global webhooks to notify an external web server when events occur within your enterprise. You can configure the server to receive the webhook's payload, then run an application or code that monitors, responds to, or enforces rules for user and organization management for your enterprise. For more information, see "[Webhooks](/developers/webhooks-and-events/webhooks)."

For example, you can configure {% data variables.product.product_location %} to send a webhook when someone creates, deletes, or modifies a repository or organization within your enterprise. You can configure the server to automatically perform a task after receiving the webhook.

![Liste der globalen Webhooks](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## Globalen Webhook hinzufügen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Klicke auf **Add webhook** (Webhook hinzufügen). ![Schaltfläche „Add webhook“ (Webhook hinzufügen) auf der Seite „Webhooks“ im Admin-Center](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Geben Sie die URL ein, unter der Sie Nutzlasten empfangen möchten.![Feld zur Eingabe einer Nutzlast-URL](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. Verwenden Sie optional das Dropdownmenü **Content type** (Inhaltstyp), und klicken Sie auf ein Nutzlastformat. ![Dropdownmenü mit Auflistung von Inhaltstypoptionen](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. Geben Sie optional im Feld **Secret** (Geheimnis) einen String ein, der als ein `geheimer` Schlüssel verwendet werden soll. ![Feld zur Eingabe eines Strings, der als ein geheimer Schlüssel verwendet werden soll](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. Optionally, if your payload URL is HTTPS and you would not like {% data variables.product.prodname_ghe_server %} to verify SSL certificates when delivering payloads, select **Disable SSL verification**. Lesen Sie die Informationen zur SSL-Verifizierung, und klicken Sie anschließend auf **I understand my webhooks may not be secure** (Ich verstehe, dass meine Webhooks möglicherweise nicht sicher sind). ![Checkbox for disabling SSL verification](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Warnung:** Mithilfe der SSL-Verifizierung können Sie sicherstellen, dass Hook-Nutzlasten sicher zugestellt werden. Die Deaktivierung der SSL-Verifizierung wird nicht empfohlen.

  {% endwarning %}
10. Decide if you'd like this webhook to trigger for every event or for selected events. ![Optionsfelder mit Optionen zum Empfangen von Nutzlasten für jedes oder für ausgewählte Ereignisse](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - Wählen Sie **Send me everything** (Alle senden) aus, um jedes Ereignis auszuwählen.
    - Wählen Sie **Let me select individual events** (Einzelne Ereignisse auswählen) aus, um bestimmte Ereignisse auszuwählen.
11. If you chose to select individual events, select the events that will trigger the webhook.
      {% ifversion ghec %}
      ![Checkboxes for individual global webhook events](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png)
      {% elsif ghes or ghae %}
      ![Checkboxes for individual global webhook events](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png)
      {% endif %}
12. Confirm that the **Active** checkbox is selected. ![Kontrollkästchen „Active“ (Aktiv) aktiviert](/assets/images/help/business-accounts/webhook-active.png)
13. Klicke auf **Add webhook** (Webhook hinzufügen).

## Globalen Webhook bearbeiten

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Klicken Sie neben dem Webhook, den Sie bearbeiten möchten, auf **Edit** (Bearbeiten). ![Schaltfläche „Edit“ (Bearbeiten) neben einem Webhook](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Aktualisieren Sie die Einstellungen des Webhooks.
7. Klicken Sie auf **Update webhook** (Webhook aktualisieren).

## Globalen Webhook löschen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Klicken Sie neben dem Webhook, den Sie löschen möchten, auf **Delete** (Löschen). ![Schaltfläche „Delete“ (Löschen) neben einem Webhook](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Lesen Sie die Informationen zum Löschen eines Webhooks, und klicken Sie anschließend auf **Yes, delete webhook** (Ja, Webhook löschen). ![Popup-Fenster mit Warnhinweisen und Schaltfläche zum Bestätigen der Webhook-Löschung](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## Neueste Auslieferungen und Antworten anzeigen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Klicken Sie in der Liste der Webhooks auf den Webhook, für den Sie die Auslieferungen anzeigen möchten.![Liste der Webhooks mit Links zum Anzeigen jedes Webhooks](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. Klicken Sie unter „Recent deliveries“ (Neueste Auslieferungen) auf eine Auslieferung, um die Details anzuzeigen.![Liste der neuesten Auslieferungen des Webhooks mit Links zum Anzeigen von Details](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
