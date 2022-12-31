---
title: Reaktivieren eines ehemaligen Mitglieds deiner Organisation
intro: 'Organisationsbesitzer*innen können {% ifversion fpt or ghec %}ehemalige Organisationsmitglieder zum erneuten Beitritt in deine Organisation einladen{% else %}ehemalige Mitglieder zu deiner Organisation hinzufügen{% endif%} und auswählen, ob die zuvor zugewiesenen Rollen der Personen, Zugriffsberechtigungen, Forks und Einstellungen wiederhergestellt werden sollen.'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: Reinstate a member
ms.openlocfilehash: b9ad15f9fc882206ed7b335bcc6dea698c2f1f8e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145101479'
---
## Informationen zur Mitgliedsreaktivierung

Wenn Benutzer*innen auf eine der folgenden Arten aus deiner Organisation entfernt werden, werden die Zugriffsberechtigungen und Einstellungen der Benutzer*innen für drei Monate gespeichert. 

- Du hast Benutzer*innen manuell aus deiner Organisation entfernt. Weitere Informationen findest du unter [Entfernen eines Mitglieds aus deiner Organisation](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization).{% ifversion not ghae %}
- Der Benutzer wurde aus deiner Organisation entfernt, da du Mitglieder und externe Mitarbeiter benötigt hast, um die zweistufige Authentifizierung (2FA) zu aktivieren. Weitere Informationen findest du unter [Erfordern der zweistufigen Authentifizierung in deiner Organisation](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization).{% endif %}{% ifversion fpt or ghec %}
- Der Benutzer wurde aus deiner Organisation entfernt, weil du einmaliges Anmelden mit SAML erzwungen hast. Weitere Informationen findest du unter „[Verwalten des einmaligen Anmeldens mit SAML für deine Organisation](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization){% ifversion fpt %}" in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}{% endif %}
- Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln. Weitere Informationen findest du unter [Ändern der Rolle eines Organisationsmitglieds in eine*n externe*n Mitarbeiter*in](/organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator).

Du kannst die Berechtigungen der Benutzer*innen wiederherstellen, wenn du sie innerhalb dieses Zeitraums wieder in die Organisation {% ifversion fpt or ghec %}einlädst{% else %}{% endif %}.

{% note %}

**Hinweis:** {% data reusables.saml.removed-users-can-rejoin %} Du musst diese Benutzer*innen nicht einladen, sich erneut anzumelden. Stattdessen kann sich der Benutzer bei ihrem persönlichen Konto anmelden, zur Organisation navigieren und auf das Banner klicken, um sich über die Einmalige Anmeldung mit SAML zu authentifizieren.

{% endnote %}

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

Bei der Wiedereinsetzung eines ehemaligen Organisationsmitglieds kannst du Folgendes wiederherstellen:
 - Die Rolle des Benutzers innerhalb der Organisation
 - Alle privaten Forks der Repositorys der Organisation
 - Die Mitgliedschaft innerhalb der Organisationsteams
 - Die früheren Zugriffsrechte und Berechtigungen für die Repositorys der Organisation
 - Sterne für die Repositorys der Organisation
 - Issue-Zuweisungen innerhalb der Organisation
 - Repository-Abonnements (Benachrichtigungseinstellungen für das Beobachten, Nicht-Beobachten oder Ignorieren der Repository-Aktivitäten)

{% ifversion ghes %} Wenn ein Organisationsmitglied aus der Organisation entfernt wurde, weil es keine zweistufige Authentifizierung verwendet, und deine Organisation diese nach wie vor von Mitgliedern verlangt, muss das ehemalige Mitglied die zweistufige Authentifizierung aktivieren, damit seine Mitgliedschaft reaktiviert werden kann.
{% endif %}

{% ifversion fpt or ghec %} Wenn deine Organisation ein benutzerabhängiges Abonnement hat, muss eine ungenutzte Lizenz verfügbar sein, bevor du ein ehemaliges Organisationsmitglied wieder einrichten kannst. Weitere Informationen findest du unter [Informationen zu den Preisen pro Benutzer*in](/articles/about-per-user-pricing). {% data reusables.organizations.org-invite-scim %} {% endif %}

## Reaktivieren eines ehemaligen Mitglieds deiner Organisation

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
6. Wähle, ob die vorherigen Berechtigungen dieser Person in der Organisation wiederhergestellt werden können, oder lösche die vorherigen Berechtigung und lege neue Zugriffsberechtigungen fest. Klicke dann auf **Einladen und wiederherstellen** oder **Einladen und neu starten**.
  ![Auswählen, ob Informationen wiederhergestellt werden sollen oder nicht](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. Wähle, ob die vorherigen Berechtigungen dieser Person in der Organisation wiederhergestellt werden können, oder lösche die vorherigen Berechtigung und lege neue Zugriffsberechtigungen fest. Klicke dann auf **Einladen und wiederherstellen** oder **Einladen und neu starten**.
  ![Wähle aus, ob Berechtigungen wiederhergestellt werden sollen](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. Wenn du die früheren Berechtigungen eines ehemaligen Organisationsmitglieds gelöscht hast, wähle eine Rolle für den Benutzer aus und fügen ihn optional zu einem oder mehreren Teams hinzu. Klicke dann auf **Einladung senden**.
  ![Rollen- und Teamoptionen und die Schaltfläche „Einladung senden“](/assets/images/help/organizations/add-role-send-invitation.png) {% else %}
7. Wenn du die früheren Berechtigungen eines ehemaligen Organisationsmitglieds gelöscht hast, wähle eine Rolle für den Benutzer aus und fügen ihn optional zu einem oder mehreren Teams hinzu. Klicke dann auf **Mitglied hinzufügen**.
  ![Rollen- und Team-Optionen und Hinzufügen der Member-Schaltfläche](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## Weiterführende Themen

- [Ein Organisationsmitglied in einen externen Mitarbeiter umwandeln](/articles/converting-an-organization-member-to-an-outside-collaborator)
