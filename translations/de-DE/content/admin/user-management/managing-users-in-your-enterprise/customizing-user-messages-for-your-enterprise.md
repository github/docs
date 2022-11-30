---
title: Anpassen von Benutzernachrichten für dein Unternehmen
shortTitle: Customizing user messages
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-for-your-enterprise
intro: 'Du kannst benutzerdefinierte Meldungen erstellen, die den Benutzern in {% data variables.location.product_location %} angezeigt werden.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Maintenance
ms.openlocfilehash: b767a651f19b6200abfc67696d98147ebf65bd9a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106429'
---
## Informationen zu Benutzernachrichten

Es gibt mehrere Arten von Benutzernachrichten.
- Nachrichten, die auf der {% ifversion ghes %}Anmelde- oder {% endif %}Abmeldeseite{% ifversion ghes or ghae %} angezeigt werden
- Obligatorische Nachrichten, die einmal in einem Popupfenster angezeigt werden, das geschlossen werden muss{% endif %}{% ifversion ghes or ghae %}
- Ankündigungsbanner, die oben auf jeder Seite angezeigt werden{% endif %}

{% ifversion ghes %} {% note %}

**Hinweis:** Wenn du SAML zur Authentifizierung verwendest, wird die Anmeldeseite von deinem Identitätsanbieter bereitgestellt und kann nicht über {% data variables.product.prodname_ghe_server %} angepasst werden.

{% endnote %}

Mittels Markdown kannst du deine Meldung formatieren. Weitere Informationen findest du unter [Schreiben und Formatieren auf {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/).

## Benutzerdefinierte Meldung für Anmeldung erstellen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes %}Klicke rechts neben{% else %}Klicke unter{% endif %} „Sign in page“ (Anmeldeseite) auf **Add message** (Nachricht hinzufügen) oder **Edit message** (Nachricht bearbeiten).
![Schaltfläche {% ifversion ghes %}„Add{% else %}„Edit{% endif %} message“](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. Gib unter **Sign in message** (Anmeldenachricht) die Nachricht ein, die Benutzern angezeigt werden soll.
![Sign in message](/assets/images/enterprise/site-admin-settings/sign-in-message.png) (Anmeldenachricht){% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![Schaltfläche „Preview“ (Vorschau)](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. Überprüfe die dargestellte Meldung.
![Gerenderte Anmeldenachricht](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %} {% endif %}

## Benutzerdefinierte Meldung für Abmeldung erstellen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes or ghae %}Klicke rechts neben{% else %}Klicke unter{% endif %} „Sign out page“ (Anmeldeseite) auf **Add message** (Nachricht hinzufügen) oder **Edit message** (Nachricht bearbeiten).
![Schaltfläche „Add message“ (Nachricht hinzufügen)](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. Gib unter **Sign out message** (Abmeldenachricht) die Nachricht ein, die Benutzern angezeigt werden soll.
![Sign two_factor_auth_header message](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% ifversion ghes or ghae %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![Schaltfläche „Preview“ (Vorschau)](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Überprüfe die dargestellte Meldung.
![Gerenderte Abmeldenachricht](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% ifversion ghes or ghae %}
## Erstellen einer obligatorischen Nachricht

Du kannst eine obligatorische Nachricht erstellen, die von {% data variables.product.product_name %} allen Benutzern beim ersten Anmelden angezeigt wird, nachdem du die Nachricht gespeichert hast. Die Meldung erscheint in einem Popupfenster, das der Benutzer schließen muss, bevor {% data variables.location.product_location %} verwendet werden kann.

Obligatorische Nachrichten haben vielerlei Verwendungszwecke:

- Bereitstellen von Onboardinginformationen für neue Mitarbeiter
- Bereitstellen von Informationen zur Anforderung von Hilfe in Bezug auf {% data variables.location.product_location %}
- Sicherstellen, dass alle Benutzer die Nutzungsbedingungen zur Verwendung {% data variables.location.product_location %} lesen

Wenn du Markdownkontrollkästchen in die Nachricht einbeziehst, müssen alle Kontrollkästchen aktiviert werden, bevor der Benutzer die Nachricht schließen kann. Wenn du beispielsweise deine Nutzungsbedingungen in die obligatorische Nachricht aufnimmst, kannst du zur Bedingung machen, dass jeder Benutzer ein Kontrollkästchen aktivieren muss, um zu bestätigen, dass der Benutzer die Nutzungsbedingungen gelesen hat.

Jedes Mal, wenn ein Benutzer eine obligatorische Nachricht anzeigt, wird ein Überwachungsprotokollereignis erstellt. Das Ereignis enthält die Version der Nachricht, die der Benutzer angezeigt hat. Weitere Informationen findest du unter [Überwachungsprotokollereignisse für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).

{% ifversion display-mandatory-message-again %} {% else %} {% note %}

**Hinweis:** Wenn du die obligatorische Nachricht für {% data variables.location.product_location %} änderst, wird Benutzern, die die Nachricht bereits bestätigt hatten, die neue Nachricht nicht angezeigt. 

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. Klicke rechts neben „Mandatory message“ (Obligatorische Nachricht) auf **Add message** (Nachricht hinzufügen).
  ![Schaltfläche „Add mandatory message“ (Obligatorische Nachricht hinzufügen)](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. Gib unter „Mandatory message“ (Obligatorische Nachricht) im Textfeld deine Nachricht ein.
  ![Screenshot des Textfelds für die obligatorische Meldung](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png) {%- ifversion display-mandatory-message-again %} 
1. Wähle optional **Aktuelle Meldung allen Benutzern anzeigen, auch wenn sie die vorherige Meldung geschlossen haben** aus.
![Screenshot des Kontrollkästchens, das bei Aktivierung obligatorische Meldungen an alle Benutzer sendet](/assets/images/enterprise/site-admin-settings/push-mandatory-message-checkbox.png) {% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% ifversion ghes or ghae %}
## Erstellen eines globalen Ankündigungsbanners

Du kannst ein globales Ankündigungsbanner festlegen, das allen Benutzern oben auf jeder Seite angezeigt werden soll.

{% ifversion ghae or ghes %} Du hast auch die Möglichkeit zum Festlegen eines Ankündigungsbanners{% ifversion ghes %} in der Verwaltungsshell mithilfe eines Befehlszeilenprogramms oder{% endif %} durch Verwendung der API. Weitere Informationen findest du unter {% ifversion ghes %}[Befehlszeilenprogramme](/enterprise/admin/configuration/command-line-utilities#ghe-announce) und {% endif %}[{% data variables.product.prodname_enterprise %}-Verwaltung](/rest/reference/enterprise-admin#announcements).
{% else %}

Du hast auch die Möglichkeit zum Festlegen eines Ankündigungsbanners in der Verwaltungsshell mithilfe eines Befehlszeilenprogramms. Weitere Informationen findest du unter [Befehlszeilenprogramme](/enterprise/admin/configuration/command-line-utilities#ghe-announce).

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. {% ifversion ghes or ghae %}Klicke rechts neben{% else %}Klicke unter{% endif %} „Announcement“ (Ankündigung) auf **Add announcement** (Ankündigung hinzufügen).
  ![Schaltfläche „Add announcement“ (Ankündigung hinzufügen)](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Gib unter „Announcement“ (Ankündigung) im Textfeld die Ankündigung ein, die in einem Banner angezeigt werden soll.
  ![Textfeld zum Eingeben einer Ankündigung](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Wähle optional unter „Expires on“ (Ablaufdatum) das Dropdownmenü des Kalenders aus, und klicke auf ein Ablaufdatum.
  ![Dropdownmenü „Kalender“ zum Auswählen des Ablaufdatums](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png){% ifversion ghe-announce-dismiss %}
1. Optional kannst du es den Benutzer*innen ermöglichen, die Ankündigung zu schließen. Aktiviere hierfür **Durch Benutzer schließbar**.

   ![Screenshot: Kontrollkästchen „Durch Benutzer schließbar“](/assets/images/enterprise/site-admin-settings/user-dismissible-checkbox.png){% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %} {% endif %}
