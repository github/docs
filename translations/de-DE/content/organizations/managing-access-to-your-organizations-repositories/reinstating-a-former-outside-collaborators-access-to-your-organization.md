---
title: Reaktivieren der Zugriffsberechtigungen von ehemaligen externen Projektmitarbeiter*innen für deine Organisation
intro: Du kannst die Zugriffsberechtigungen von ehemaligen externen Projektmitarbeiter*innen für Organisationsrepositorys, -forks und -einstellungen reaktivieren.
redirect_from:
- /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
- /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
- /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Reinstate collaborator
ms.openlocfilehash: 88d986f922f1a66d652dba55f10142f7e493ffa2
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "146178903"
---
Wenn der Zugriff von externen Mitarbeiter*innen auf die privaten Repositorys deiner Organisation entfernt wird, werden die Zugriffsrechte und Einstellungen der Benutzer*innen drei Monate lang gespeichert. Du kannst die Berechtigungen der Benutzer*innen wiederherstellen, wenn du sie innerhalb dieses Zeitraums wieder in die Organisation {% ifversion fpt or ghec %}einlädst{% else %}{% endif %}.

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Bei der Wiedereinsetzung eines ehemaligen externen Mitarbeiters kannst du Folgendes wiederherstellen:
 - Die früheren Zugriffsberechtigungen des Benutzers auf die Organisationsrepositorys
 - Alle privaten Forks der Repositorys der Organisation
 - Die Mitgliedschaft innerhalb der Organisationsteams
 - Die früheren Zugriffsrechte und Berechtigungen für die Repositorys der Organisation
 - Sterne für die Repositorys der Organisation
 - Issue-Zuweisungen innerhalb der Organisation
 - Repository-Abonnements (Benachrichtigungseinstellungen für das Beobachten, Nicht-Beobachten oder Ignorieren der Repository-Aktivitäten)

{% tip %}

**Tipps**:

 - Nur Organisationsbesitzer*innen können die Zugriffsberechtigungen externer Projektmitarbeiter*innen für eine Organisation reaktivieren.{% ifversion prevent-org-admin-add-outside-collaborator %} Unternehmensbesitzer*innen können die Rechte zum Reaktivieren der Zugriffsberechtigungen von externen Projektmitarbeiter*innen zusätzlich nur auf Unternehmensbesitzer*innen beschränken.{% endif %} Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).
 - Im Workflow zum Wiederherstellen eines Mitglieds auf {% data variables.product.product_location %} wird der Begriff „Mitglied“ verwendet, um das Wiederherstellen eines externen Mitarbeiters bzw. einer externen Mitarbeiterin zu beschreiben. Wenn du diese Person jedoch wiederherstellst und die vorherigen Berechtigungen nicht änderst, verfügt diese Person nur über die vorherigen [Berechtigungen für externe Mitarbeiter*innen](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).{% ifversion fpt or ghec %}
 - Wenn deine Organisation ein benutzerabhängiges Abonnement abgeschlossen hat, muss eine Lizenz verfügbar sein, bevor du ein neues Mitglied zur Organisation einladen oder ein ehemaliges Organisationsmitglied wieder einsetzen kannst. Weitere Informationen findest du unter [Informationen zu den Preisen pro Benutzer](/articles/about-per-user-pricing).{% endif %}

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
1. Wenn du die vorherigen Berechtigungen des externen Mitarbeiters bzw. der externen Mitarbeiterin wiederherstellen möchtest, klicke auf **Einladen und wiederherstellen**. Alternativ kannst du die vorherigen Berechtigungen löschen und neue Zugriffsberechtigungen festlegen, indem du auf **Einladen und neu starten** klickst.

  {% warning %}

  **Warnung:** Wenn du den*die externe*n Mitarbeiter*in auf ein Mitglied der Organisation hochstufen möchtest, wähle **Einladen und neu starten** und eine neue Rolle für diese Person aus. Wenn du jedoch seine Rolle und Berechtigungen neu festlegst, gehen seine privaten Forks der Repositorys der Organisation verloren. Wenn du den*die externe*n Mitarbeiter*in zu einem Mitglied der Organisation machen *und* die privaten Forks beibehalten möchtest, wähle **Einladen und wiederherstellen** aus. Sobald diese Person die Einladung annimmt, kannst du sie in ein Organisationsmitglied umwandeln, indem [du sie einlädst, der Organisation als Mitglied beizutreten](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Auswahl, ob die Einstellungen wiederhergestellt werden sollen oder nicht](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. Wenn du die vorherigen Berechtigungen des externen Mitarbeiters bzw. der externen Mitarbeiterin wiederherstellen möchtest, klicke auf **Hinzufügen und wiederherstellen**. Alternativ kannst du die vorherigen Berechtigungen löschen und neue Zugriffsberechtigungen festlegen, indem du auf **Hinzufügen und neu starten** klickst.

  {% warning %}

  **Warnung:** Wenn du den*die externe*n Mitarbeiter*in auf ein Mitglied der Organisation hochstufen möchtest, wähle **Hinzufügen und neu starten** und eine neue Rolle für diese Person aus. Wenn du jedoch seine Rolle und Berechtigungen neu festlegst, gehen seine privaten Forks der Repositorys der Organisation verloren. Wenn du den*die externe*n Mitarbeiter*in zu einem Mitglied der Organisation machen *und* die privaten Forks beibehalten möchtest, wähle **Hinzufügen und wiederherstellen** aus. Anschließend kannst du die Person in ein Organisationsmitglied umwandeln, indem du sie [der Organisation als Mitglied hinzufügst](/articles/converting-an-outside-collaborator-to-an-organization-member).

  {% endwarning %}

  ![Auswahl, ob die Einstellungen wiederhergestellt werden sollen oder nicht](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. Wenn du die vorherigen Berechtigungen eines ehemaligen externen Mitarbeiters bzw. einer externen Mitarbeiterin gelöscht hast, wähle eine Rolle für den*die Benutzer*in aus, und füge ihn*sie optional zu einem oder mehreren Teams hinzu. Klicke dann auf **Einladung senden**.
  ![Rollen- und Teamoptionen und die Schaltfläche „Einladung senden“](/assets/images/help/organizations/add-role-send-invitation.png) {% else %}
7. Wenn du die vorherigen Berechtigungen eines ehemaligen externen Mitarbeiters bzw. einer externen Mitarbeiterin gelöscht hast, wähle eine Rolle für den*die Benutzer*in aus, und füge ihn*sie optional zu einem oder mehreren Teams hinzu. Klicke dann auf **Mitglied hinzufügen**.
  ![Rollen- und Teamoptionen und die Schaltfläche „Mitglied hinzufügen“](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %}
8. Die eingeladene Person erhält per E-Mail eine Einladung zur Organisation. Um externer Mitarbeiter der Organisation zu werden, muss die eingeladene Person die Einladung annehmen. {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Weitere Informationen

- [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
