---
title: Globale Webhooks verwalten
shortTitle: Manage global webhooks
intro: 'Du kannst globale Webhooks so konfigurieren, dass sie externe Webserver benachrichtigen, wenn Ereignisse innerhalb deines Unternehmens auftreten.'
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /admin/user-management/monitoring-activity-in-your-enterprise/managing-global-webhooks
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
ms.openlocfilehash: 751a6dc55b9d1aded22a8225f4bf7d058aa32b77
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106707'
---
## Informationen zu globalen Webhooks

Du kannst mithilfe von globalen Webhooks einen externen Webserver benachrichtigen, wenn Ereignisse innerhalb deines Unternehmens auftreten. Du kannst den Server so konfigurieren, dass er die Nutzdaten des Webhooks empfängt und dann eine Anwendung oder einen Code ausführt, der Regeln für die Benutzer- und Organisationsverwaltung für dein Unternehmen überwacht, darauf reagiert oder sie erzwingt. Weitere Informationen findest du unter [Webhooks](/developers/webhooks-and-events/webhooks).

Beispielsweise kannst du {% data variables.product.product_location %} so konfigurieren, dass ein Webhook gesendet wird, wenn jemand ein Repository oder eine Organisation innerhalb deines Unternehmens erstellt, löscht oder ändert. Du kannst den Server so konfigurieren, dass er Aufgaben nach Empfangen des Webhooks automatisch ausführt.

![Liste der globalen Webhooks](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## Globalen Webhook hinzufügen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Klicke auf **Add webhook** (Webhook hinzufügen).
  ![Schaltfläche „Add webhook“ (Webhook hinzufügen) auf der Seite „Webhooks“ im Admin-Center](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Gib die URL ein, unter der du Nutzlasten empfangen möchtest.
  ![Feld zur Eingabe einer Nutzlast-URL](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. Klicke optional in der Dropdownliste **Inhaltstyp** auf ein Nutzdatenformat.
  ![Dropdownmenü mit einer Auflistung von Inhaltstyp-Optionen](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. Gib optional im Feld **Geheimnis** eine Zeichenfolge ein, die als `secret`-Schlüssel verwendet werden soll.
  ![Feld zur Eingabe einer Zeichenfolge, die als geheimer Schlüssel verwendet werden soll](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. Wenn deine Nutzlast-URL „HTTP“ ist und du nicht möchtest, dass {% data variables.product.prodname_ghe_server %} SSL-Zertifikate beim Zustellen von Nutzlasten verifiziert, wähle optional **Disable SSL verification** (SSL-Überprüfung deaktivieren) aus. Lies die Informationen zur SSL-Überprüfung, und klicke dann auf **Ich verstehe, dass meine Webhooks möglicherweise nicht sicher sind**.
  ![Kontrollkästchen zum Deaktivieren der SSL-Überprüfung](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Warnung:** Mithilfe der SSL-Überprüfung kannst du dafür sorgen, dass Hooknutzdaten sicher zugestellt werden. Die Deaktivierung der SSL-Verifizierung wird nicht empfohlen.

  {% endwarning %}
10. Entscheide, ob dieser Webhook bei jedem Ereignis oder nur bei ausgewählten Ereignissen ausgelöst werden soll.
  ![Optionsfelder mit Optionen zum Empfangen von Nutzlasten für jedes Ereignis oder nur für ausgewählte Ereignisse](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - Wähle für ein Auslösen bei jedem Ereignis **Alles senden** aus.
    - Wenn du bestimmte Ereignisse auswählen möchtest, wähle **Let me select individual events** (Einzelne Ereignisse auswählen) aus.
11. Wenn du dich für das Auswählen einzelner Ereignisse entschieden hast, wähle die Ereignisse aus, die den Webhook auslösen werden.
      {% ifversion ghec %} ![Kontrollkästchen für einzelne globale Webhook-Ereignisse](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png) {% elsif ghes or ghae %} ![Kontrollkästchen für einzelne globale Webhook-Ereignisse](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png) {% endif %}
12. Stelle sicher, dass das Kontrollkästchen **Aktiv** aktiviert ist.
  ![Aktiviertes Kontrollkästchen „Active“ (Aktiv)](/assets/images/help/business-accounts/webhook-active.png)
13. Klicke auf **Add webhook** (Webhook hinzufügen).

## Globalen Webhook bearbeiten

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Klicke neben dem Webhook, den du bearbeiten möchtest, auf **Edit** (Bearbeiten).
  ![Schaltfläche „Edit“ (Bearbeiten) neben einem Webhook](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Aktualisiere die Einstellungen des Webhooks.
7. Klicke auf **Webhook aktualisieren**.

## Globalen Webhook löschen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Klicke neben dem Webhook, den du löschen möchtest, auf **Delete** (Löschen).
  ![Schaltfläche „Delete“ (Löschen) neben einem Webhook](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Lies die Informationen zum Löschen eines Webhooks, und klicke dann auf **Ja, Webhook löschen**.
  ![Popupfeld mit Warnungsinformationen und Schaltfläche zum Bestätigen der Webhook-Löschung](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## Neueste Auslieferungen und Antworten anzeigen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Klicke in der Liste der Webhooks auf den Webhook, für den du die Auslieferungen anzeigen möchtest.
  ![Liste der Webhooks mit Links zum Anzeigen jedes einzelnen Webhooks](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. Klicke unter „Recent deliveries“ (Neueste Auslieferungen) auf eine Auslieferung, um die Details anzuzeigen.
  ![Liste der neuesten Auslieferungen des Webhooks mit Links zum Anzeigen von Details](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
