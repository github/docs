---
title: Einladen von Personen zum Verwalten deines Unternehmens
intro: 'Du kannst {% ifversion ghec %}Personen einladen, um Unternehmensinhaber*in oder Abrechnungsmanager*in zu werden.{% elsif ghes %}Füge Unternehmensinhaber*innen deinem{% endif %} Unternehmenskonto hinzu. Du kannst auch Unternehmensinhaber*innen {% ifversion ghec %}und Abrechnungsmanager*innen entfernen, {% endif %}die nicht mehr auf dein Unternehmenskonto zugreifen müssen.'
permissions: 'Enterprise owners can {% ifversion ghec %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Invite people to manage
ms.openlocfilehash: 7cdbee6f1b37a8300f3523712c6e0dda4293af74
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180447'
---
## Informationen zu Benutzer*innen, die dein Unternehmenskonto verwalten können

{% data reusables.enterprise-accounts.enterprise-administrators %} Weitere Informationen findest du unter [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).

{% ifversion ghes %}

Informationen zum Verwalten von Besitzer*innen und Rechnungs-Manager*innen für ein Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} findest du unter [Einladen von Personen zum Verwalten deines Unternehmens](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise) in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.

{% endif %}

{% ifversion ghec %}

Wenn dein Unternehmen {% data variables.product.prodname_emus %} nutzt, können Unternehmensbesitzer*innen nur durch deinen Identitätsanbieter hinzugefügt oder entfernt werden. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

{% endif %}

{% tip %}

**Tipp:** Weitere Informationen zum Verwalten von Benutzer*innen innerhalb einer Organisation, die sich im Besitz deines Unternehmenskontos befindet, findest du unter [Verwalten der Mitgliedschaft in deiner Organisation](/articles/managing-membership-in-your-organization) und [Verwalten des Zugriffs von Personen auf deine Organisation mithilfe von Rollen](/articles/managing-peoples-access-to-your-organization-with-roles).

{% endtip %}

## {% ifversion ghec %}Einladen{% elsif ghes %}Hinzufügen{% endif %} von Unternehmensadministrator*innen zu deinem Unternehmenskonto

{% ifversion ghec %}Nachdem du eine Person zum Unternehmenskonto eingeladen hast, muss diese die E-Mail-Einladung annehmen, um auf das Unternehmenskonto zugreifen zu können. Ausstehende Einladungen laufen nach 7 Tagen ab.{% endif %}

{% ifversion enterprise-membership-view-improvements %} Du kannst eine Liste aller ausstehenden Einladungen anzeigen, über die Personen Administrator*in deines Unternehmenskontos werden können. Weitere Informationen findest du unter [Anzeigen von Personen in deinem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-pending-invitations).
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. Klicke oberhalb der Administratorenliste auf {% ifversion ghec %}**Administrator*in einladen**{% elsif ghes %}**Besitzer*in hinzufügen**{% endif %}.
  {% ifversion ghec %} ![Schaltfläche „Administrator*in einladen“ oberhalb der Liste der Unternehmensbesitzer*innen](/assets/images/help/business-accounts/invite-admin-button.png) {% elsif ghes %} ![Schaltfläche „Besitzer*in hinzufügen“ oberhalb der Liste der Unternehmensbesitzer*innen](/assets/images/help/business-accounts/add-owner-button.png) {% endif %}
1. Gib den Benutzernamen, den vollständigen Namen oder die E-Mail-Adresse der Person ein, die du dazu einladen möchtest, Enterprise-Administrator zu werden. Wähle dann die gewünschte Person aus den Ergebnissen aus.
  ![Modales Feld mit Feld für die Eingabe des Benutzernamens, vollständigen Namens oder der E-Mail-Adresse sowie Schaltfläche zum Einladen](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion ghec %}
1. Wähle **Besitzer*in** oder **Rechnungs-Manager*in** aus.
  ![Modales Feld mit Rollenauswahl](/assets/images/help/business-accounts/invite-admins-roles.png)
1. Klicke auf **Einladung senden**.
  ![Schaltfläche zum Senden der Einladung](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. Klicken Sie auf **Hinzufügen**.
  ![Schaltfläche „Hinzufügen“](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## Einen Enterprise-Administrator aus deinem Enterprise-Konto entfernen

Nur Enterprise-Inhaber können andere Enterprise-Administratoren aus dem Enterprise-Konto entfernen.

{% ifversion ghec %} Wenn die*der zu entfernende Administrator*in Mitglied von Organisationen ist, die sich im Besitz des Unternehmens befinden, kannst du **In Mitglied konvertieren** auswählen, um die Administratorrolle zu entfernen und die Organisationsmitgliedschaft beizubehalten. Wenn sowohl die Administratorrolle als auch die Organisationsmitgliedschaft entfernt werden soll, wählst du **Aus Unternehmen entfernen** aus.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. Klicke neben dem Benutzernamen der zu entfernenden Person auf {% octicon "gear" aria-label="The Settings gear" %} und dann auf {% ifversion ghes %}**Besitzer*in entfernen**{% elsif ghec %}**In Mitglied konvertieren** oder **Aus Unternehmen entfernen**.{% endif %}.
  {% ifversion ghec %} ![Zahnradsymbol mit Menüoption zum Entfernen von Unternehmensadministrator*innen](/assets/images/help/business-accounts/remove-admin.png) {% elsif ghes %} ![Zahnradsymbol mit Menüoption zum Entfernen von Unternehmensadministrator*innen](/assets/images/help/business-accounts/ghes-remove-owner.png) {% endif %}
1. Lies die Bestätigung, und klicke dann auf {% ifversion ghes %}**Besitzer*in entfernen**{% elsif ghec %}**Ja, BENUTZERNAME in Mitglied konvertieren**{% endif %}.
