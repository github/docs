---
title: Anzeigen von Personen in deinem Unternehmen
intro: 'Um den Zugriff auf unternehmenseigene Ressourcen oder die Verwendung der Benutzerlizenzen zu überwachen, können Unternehmensinhaber*innen alle Administrator*innen und Mitglieder des Unternehmens anzeigen.'
permissions: Enterprise owners can view the people in an enterprise.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
ms.openlocfilehash: 1c9b8402a0924c799f4747cf5a6cdae051aa4a49
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120593'
---
## Informationen zur Liste der Personen in deinem Unternehmen

Um den Zugriff auf die Ressourcen deines Unternehmens zu überwachen und die Lizenznutzung zu verwalten, kannst du eine Liste aller Personen anzeigen, die Zugriff auf dein Unternehmen haben. 

Du kannst alle aktuellen Unternehmensmitglieder und Unternehmensadministratoren anzeigen{% ifversion ghec %} sowie ausstehende Einladungen, Mitglieder und Administratoren zu werden{% endif %}. Um diese Informationen einfacher zu nutzen, kannst du die Listen durchsuchen und filtern.

{% ifversion ghec %}

Wenn {% data variables.product.prodname_github_connect %} für dein Unternehmen konfiguriert ist, gelten beim Filtern der Liste der Unternehmensmitglieder die folgenden Einschränkungen.

- Der Filter für den Status der zweistufigen Authentifizierung zeigt keine Benutzer*innen an, die nur ein Konto auf einer {% data variables.product.prodname_ghe_server %}-Instanz besitzen.
- Wenn du den Filter für Konten auf {% data variables.product.prodname_ghe_server %}-Instanzen mit dem Filter für Organisationen oder den Status der zweistufigen Authentifizierung kombinierst, werden keine Ergebnisse zurückgegeben.

Weitere Informationen zu {% data variables.product.prodname_github_connect %} findest du in den folgenden Artikeln.

- [Informationen zu {% data variables.product.prodname_github_connect %}](/enterprise-server/admin/configuration/configuring-github-connect/about-github-connect) findest du in der {% data variables.product.prodname_ghe_server %}-Dokumentation.
- [Informationen zu {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect) findest du in der Dokumentation zu {% data variables.product.prodname_ghe_managed %}.

{% endif %}

{% ifversion enterprise-member-csv %} Du kannst auch Mitgliedschaftsinformationen für dein Unternehmen exportieren. Weitere Informationen findest du unter [Exportieren von Mitgliedschaftsinformationen für dein Unternehmen](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise).
{% endif %}

## Anzeigen von Unternehmensadministratoren

Du kannst alle aktuellen Unternehmensinhaber*innen{% ifversion ghec %} und Abrechnungsmanager{% endif %} für dein Unternehmen anzeigen.{% ifversion enterprise-membership-view-improvements %} Du kannst nützliche Informationen über alle Administrator*innen anzeigen{% ifversion ghec %} und die Liste nach Rollen filtern{% endif %}.{% endif %} Du kannst eine bestimmte Person finden, indem du nach ihrem Benutzer- oder Anzeigenamen suchst.

{% ifversion ghes > 3.5 %} Unternehmensinhaber*innen, deren Konten gesperrt wurden, sind in der Liste der Unternehmensadministrator*innen enthalten und werden als gesperrt ausgewiesen. Du solltest alle gesperrten Inhaber*innen herabstufen, die du siehst. Weitere Informationen findest du unter [Hochstufen oder Zurückstufen eines Websiteadministrators](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#demoting-a-site-administrator-from-the-enterprise-settings).
{% endif %}

{% ifversion not ghae %} Du kannst auch Administrator*innen entfernen. Weitere Informationen. Findest du unter [Einladen von Personen zum Verwalten deines Unternehmens](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account).
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}

## Anzeigen von Mitgliedern {% ifversion enterprise-membership-view-improvements %}{% else %}und externen Mitarbeiter*innen{% endif %}

Du kannst alle aktuellen Mitglieder {% ifversion enterprise-membership-view-improvements %}{% else %}oder externen Mitarbeiter*innen{% endif %} deines Unternehmens anzeigen. Zu jedem Konto kannst du nützliche Informationen anzeigen und die Liste sinnvoll filtern, z. B. nach Rolle. Du kannst eine bestimmte Person nach ihrem Benutzernamen oder Anzeigenamen suchen.

Du kannst weitere Informationen zum Zugriff der Person auf dein Unternehmen anzeigen, z. B. die Organisationen, zu der die Person gehört, indem du auf den Namen der Person klickst.

{% ifversion remove-enterprise-members %} Du kannst auch alle Unternehmensmitglieder aus allen Organisationen entfernen, die dem Unternehmen gehören. Weitere Informationen findest du unter [Entfernen eines Mitglieds aus deinem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise).
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}{% ifversion enterprise-membership-view-improvements %}{% else %}
1. Optional kannst du eine Liste der externen Projektmitarbeiter*innen anstatt der Liste der Mitglieder anzeigen, indem du auf **Externe Projektmitarbeiter** klickst.

   ![Registerkarte „Externe Mitarbeiter“ auf der Seite „Unternehmensmitglieder“](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% ifversion enterprise-membership-view-improvements %}
## Anzeigen externer Mitarbeiter

Du kannst alle aktuellen externen Mitarbeiter für dein Unternehmen anzeigen. Zu jedem Mitarbeiter kannst du nützliche Informationen anzeigen und die Liste sinnvoll filtern, z. B. nach Organisation. Du kannst einen bestimmten Mitarbeiter nach seinem Benutzer- oder Anzeigenamen suchen.

Du kannst weitere Informationen zum Zugriff der Person auf dein Unternehmen anzeigen, z. B. eine Liste aller Repositorys, auf die der Mitarbeiter Zugriff hat, indem du auf den Namen der Person klickst.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Klicke unter „Personen“ auf **Externe Mitarbeiter**.

  ![Registerkarte „Externe Mitarbeiter“ in der Seitenleiste der Unternehmenseinstellungen]{% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}
  
{% endif %}

{% ifversion ghec %}
## Anzeigen ausstehender Einladungen

Du kannst alle ausstehenden Einladungen, Mitglied, Administrator*in oder externe Mitarbeiter*in in deinem Unternehmen zu werden, anzeigen. Du kannst die Liste sinnvoll filtern, z. B. nach Organisation. Du kannst eine bestimmte Person nach ihrem Benutzernamen oder Anzeigenamen suchen.

In der Liste der ausstehenden Mitglieder kannst du für jedes einzelne Konto alle Einladungen zur Teilnahme an Organisationen im Besitz deines Unternehmens stornieren. Dadurch werden für die jeweilige Person keine Einladungen storniert, Unternehmensadministrator oder externer Mitarbeiter zu werden. 

{% note %}

**Hinweis:** Wenn eine Einladung über SCIM bereitgestellt wurde, musst du die Einladung über deinen Identitätsanbieter (IdP) anstelle von {% data variables.product.prodname_dotcom %} stornieren.

{% endnote %}

Wenn du {% data variables.visual_studio.prodname_vss_ghe %} verwendest, enthält die Liste der ausstehenden Einladungen alle {% data variables.product.prodname_vs %}-Abonnenten, die noch keiner deiner Organisationen auf {% data variables.product.prodname_dotcom %} beigetreten sind, auch wenn der Abonnent keine ausstehende Einladung zur Mitgliedschaft in einer Organisation hat. Weitere Informationen darüber, wie {% data variables.product.prodname_vs %}-Abonnenten Zugriff auf {% data variables.product.prodname_enterprise %} erhalten, findest du unter [Einrichten von {% data variables.visual_studio.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Klicke unter „Personen“ auf **Ausstehende Einladungen**.

   ![Screenshot der Registerkarte „Ausstehende Einladungen“ in der Seitenleiste](/assets/images/help/enterprises/pending-invitations-tab.png)
1. Wenn du optional alle Einladungen zum Beitritt zu Organisationen im Besitz deines Unternehmens für ein Konto kündigen möchtest, klicke rechts neben dem Konto auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und dann auf **Einladung stornieren**.

   ![Screenshot der Schaltfläche „Einladung stornieren“](/assets/images/help/enterprises/cancel-enterprise-member-invitation.png)
1. Um optional ausstehende Einladungen für Unternehmensadministratoren oder externe Mitarbeiter anzuzeigen, klicke unter „Ausstehende Mitglieder“ auf **Administratoren** oder **Externe Mitarbeiter**.

   ![Screenshot der Registerkarten „Mitglieder“, „Administratoren“ und „Externe Mitarbeiter“](/assets/images/help/enterprises/pending-invitations-type-tabs.png)

## Anzeigen gesperrter Mitglieder in einem {% data variables.enterprise.prodname_emu_enterprise %}

Wenn dein Unternehmen {% data variables.product.prodname_emus %} verwendet, kannst du gesperrte Benutzer anzeigen. Bei gesperrten Benutzer*innen handelt es sich um Mitglieder, die nicht mehr aktiv sind, nachdem sie einer {% data variables.product.prodname_emu_idp_application %}-Anwendung nicht mehr zugewiesen sind oder aus dem Identitätsanbieter gelöscht wurden. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Um eine Liste gesperrter Mitglieder oberhalb der Liste der aktiven Mitglieder anzuzeigen, klicke auf **Gesperrt**.
  ![Screenshot der Option „Gesperrt“](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## Inaktive Benutzer anzeigen

Du kannst eine Liste aller ruhenden Benutzer*innen {% ifversion ghes or ghae %} anzeigen, die nicht gesperrt wurden und {% endif %}keine Websiteadministrator*innen sind. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} Weitere Informationen findest du unter [Verwalten ruhender Benutzer](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users).

{% ifversion filter-by-enterprise-member-type %}
## Filtern nach Elementtyp{% ifversion ghec %} in einem {% data variables.enterprise.prodname_emu_enterprise %}{% endif %}

{% ifversion ghec %}Wenn dein Unternehmen {% data variables.product.prodname_emus %} verwendet, kannst du{% elsif ghes or ghae %}Du kannst{% endif %} die Mitgliederliste einer Organisation nach Typ filtern, um festzustellen, ob die Mitgliedschaften über einen IdP oder direkt verwaltet werden. Mitgliedschaften, die über einen IdP verwaltet werden, wurden über eine IdP-Gruppe hinzugefügt, und die IdP-Gruppe wurde mit einem Team innerhalb der Organisation verbunden. Direkt verwaltete Mitgliedschaften wurden der Organisation manuell hinzugefügt. Die Art und Weise, wie eine Mitgliedschaft in einer Organisation verwaltet wird, bestimmt, wie sie entfernt werden muss. Du kannst diesen Filter verwenden, um zu bestimmen, wie Mitglieder einer Organisation hinzugefügt wurden, sodass du weißt, wie du sie entfernen kannst.{% ifversion ghec %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users#about-organization-membership-management). {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Beginne unter „Organisationen“ auf der Suchleiste mit der Eingabe des Namens der gewünschten Organisation, bis die Organisation in den Suchergebnissen angezeigt wird, und klicke dann auf den Namen der Organisation.
   ![Screenshot: Suchfeld für Organisationen](/assets/images/help/enterprises/organization-search.png)
1. Klicke unter dem Organisationsnamen auf {% octicon "person" aria-label="The Person icon" %} **Personen**.
   ![Screenshot der Registerkarte „Personen“](/assets/images/help/enterprises/emu-organization-people-tab.png)
1. Klicke oberhalb der Liste der Mitglieder auf **Typ**, und wähle dann den Typ der Mitglieder aus, die du anzeigen möchtest.
   ![Screenshot der Schaltfläche „Typ“](/assets/images/help/enterprises/filter-by-member-type.png)

{% endif %}

{% ifversion ghec or ghes %}
## Anzeigen von Mitgliedern ohne E-Mail-Adresse einer geprüften Domäne

Du kannst eine Liste der Mitglieder in deinem Unternehmen anzeigen, deren Benutzerkonto auf {% data variables.product.prodname_dotcom_the_website %} keine E-Mail-Adresse einer geprüften Domäne zugeordnet ist.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. Klicke unter „Benachrichtigungseinstellungen“ auf den {% octicon "eye" aria-label="The github eye icon" %} Link **Unternehmensmitglieder ohne E-Mail-Adresse einer genehmigten oder geprüften Domäne anzeigen**.
{% endif %}

## Weiterführende Themen

- [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)
