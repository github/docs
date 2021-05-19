---
title: Globale Webhooks verwalten
intro: 'Site administrators can view, add, edit, and delete global webhooks to track events for the enterprise.'
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
---
### Informationen zu globalen Webhooks

You can use global webhooks to automatically monitor, respond to, or enforce rules for user and organization management for your enterprise. So können Sie Ihre Webhooks beispielsweise so konfigurieren, dass sie ausgeführt werden, sobald
- ein Benutzerkonto erstellt oder gelöscht wird,
- An organization is created or deleted
- ein Mitarbeiter zu einem Repository hinzugefügt oder aus diesem entfernt wird,
- A repository is forked

![Liste der globalen Webhooks](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

### Globalen Webhook hinzufügen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Klicke auf **Add webhook** (Webhook hinzufügen). ![Schaltfläche „Add webhook“ (Webhook hinzufügen) auf der Seite „Webhooks“ im Admin-Center](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Geben Sie die URL ein, unter der Sie Nutzlasten empfangen möchten.![Feld zur Eingabe einer Nutzlast-URL](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. Verwenden Sie optional das Dropdownmenü **Content type** (Inhaltstyp), und klicken Sie auf ein Nutzlastformat. ![Dropdownmenü mit Auflistung von Inhaltstypoptionen](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. Geben Sie optional im Feld **Secret** (Geheimnis) einen String ein, der als ein `geheimer` Schlüssel verwendet werden soll. ![Feld zur Eingabe eines Strings, der als ein geheimer Schlüssel verwendet werden soll](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. Wenn Sie optional möchten, dass {% data variables.product.prodname_ghe_server %} die SSL-Zertifikate beim Zustellen der Nutzlasten nicht verifizieren soll, klicken Sie auf **Disable SSL verification** (SSL-Verifizierung deaktivieren). Lesen Sie die Informationen zur SSL-Verifizierung, und klicken Sie anschließend auf **I understand my webhooks may not be secure** (Ich verstehe, dass meine Webhooks möglicherweise nicht sicher sind). ![Schaltfläche zum Deaktivieren der SSL-Verifizierung](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Warnung:** Mithilfe der SSL-Verifizierung können Sie sicherstellen, dass Hook-Nutzlasten sicher zugestellt werden. Die Deaktivierung der SSL-Verifizierung wird nicht empfohlen.

  {% endwarning %}
10. Legen Sie fest, ob dieser Webhook bei jedem oder bei ausgewählten Ereignissen ausgelöst werden soll:![Optionsfelder mit Optionen zum Empfangen von Nutzlasten für jedes oder für ausgewählte Ereignisse](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - Wählen Sie **Send me everything** (Alle senden) aus, um jedes Ereignis auszuwählen.
    - Wählen Sie **Let me select individual events** (Einzelne Ereignisse auswählen) aus, um bestimmte Ereignisse auszuwählen.
11. Wenn Sie einzelne Ereignisse auswählen möchten, sollten Sie festlegen, ob dieser Webhook für eine Organisations- oder Benutzeraktivität ausgelöst werden soll.![Kontrollkästchen für Organisations- und Benutzerereignisse](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png)
12. Bestätigen Sie, dass das Kontrollkästchen**Active** aktiviert ist (Standardeinstellung). ![Kontrollkästchen „Active“ (Aktiv) aktiviert](/assets/images/enterprise/site-admin-settings/add-global-webhook-active-checkbox.png)
13. Klicke auf **Add webhook** (Webhook hinzufügen).

### Globalen Webhook bearbeiten

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Klicken Sie neben dem Webhook, den Sie bearbeiten möchten, auf **Edit** (Bearbeiten). ![Schaltfläche „Edit“ (Bearbeiten) neben einem Webhook](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Aktualisieren Sie die Einstellungen des Webhooks.
7. Klicken Sie auf **Update webhook** (Webhook aktualisieren).

### Globalen Webhook löschen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Klicken Sie neben dem Webhook, den Sie löschen möchten, auf **Delete** (Löschen). ![Schaltfläche „Delete“ (Löschen) neben einem Webhook](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Lesen Sie die Informationen zum Löschen eines Webhooks, und klicken Sie anschließend auf **Yes, delete webhook** (Ja, Webhook löschen). ![Popup-Fenster mit Warnhinweisen und Schaltfläche zum Bestätigen der Webhook-Löschung](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

### Neueste Auslieferungen und Antworten anzeigen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Klicken Sie in der Liste der Webhooks auf den Webhook, für den Sie die Auslieferungen anzeigen möchten.![Liste der Webhooks mit Links zum Anzeigen jedes Webhooks](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. Klicken Sie unter „Recent deliveries“ (Neueste Auslieferungen) auf eine Auslieferung, um die Details anzuzeigen.![Liste der neuesten Auslieferungen des Webhooks mit Links zum Anzeigen von Details](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
