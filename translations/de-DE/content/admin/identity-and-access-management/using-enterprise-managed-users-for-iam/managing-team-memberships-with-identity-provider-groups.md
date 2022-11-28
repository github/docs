---
title: Verwalten von Teammitgliedschaften mit Identitätsanbietergruppen
shortTitle: Manage teams with your IdP
intro: 'Du kannst die Mitgliedschaft in einem Team und einer Organisation auf {% data variables.product.product_name %} über deinen Identitätsanbieter (IdP) verwalten, indem du IdP-Gruppen mit Teams in {% data variables.enterprise.prodname_emu_enterprise %} verknüpfst.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/managing-team-memberships-with-identity-provider-groups
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
ms.openlocfilehash: 179835d6642cd5718a565869337b5420b29407a5
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160824'
---
## Informationen zur Teamverwaltung mit {% data variables.product.prodname_emus %}

Mit {% data variables.product.prodname_emus %} kannst du die Team- und Organisationsmitgliedschaft in deinem Unternehmen über den IdP verwalten, indem du {% data variables.product.prodname_dotcom %}-Teams mit IdP-Gruppen verknüpfst. Wenn du ein Team mit einer der Organisationen deines Unternehmens mit einer IdP-Gruppe verknüpfst, werden Änderungen an der Mitgliedschaft für die IdP-Gruppe automatisch in einem Unternehmen widergespiegelt. Somit sind keine manuellen Updates und benutzerdefinierte Skripts mehr erforderlich. 

Wenn eine Änderung an einer IdP-Gruppe oder einer neuen Teamverbindung zu einem {% data variables.enterprise.prodname_managed_user %} führt, dessen Benutzer*in einem Team in einer Organisation beigetreten ist, an dem er oder sie noch kein Mitglied war, werden die {% data variables.enterprise.prodname_managed_user %} automatisch der Organisation hinzugefügt. Wenn du eine Gruppe von einem Team trennst, werden Benutzer*innen, die über eine Teammitgliedschaft Mitglieder der Organisation wurden, aus der Organisation entfernt, wenn ihnen auf andere Weise keine Mitgliedschaft in der Organisation zugewiesen wurde.

{% note %}

**Hinweis:** Organisationsbesitzer können {% data variables.enterprise.prodname_managed_users %} auch manuell zu Organisationen hinzufügen, solange die Konten bereits über SCIM bereitgestellt wurden.

{% endnote %}

Wenn sich die Gruppenmitgliedschaft bei deinem Identitätsanbieter ändert, sendet der Identitätsanbieter gemäß dem von ihm festgelegten Zeitplan eine SCIM-Anforderung mit den Änderungen an {% data variables.product.prodname_dotcom_the_website %}, die Änderungen werden also nicht sofort angezeigt. Alle Anforderungen, bei denen die Team- oder Organisationsmitgliedschaft geändert wird, werden im Überwachungsprotokoll als Änderungen erfasst, die von dem Konto vorgenommen wurden, das zum Konfigurieren der Benutzerbereitstellung verwendet wurde.

Teams, die mit IdP-Gruppen verbunden sind, können keine übergeordneten Elemente anderer Teams oder ein untergeordnetes Element eines anderen Teams sein. Wenn das Team, das du mit einer IdP-Gruppe verbinden möchtest, ein übergeordnetes oder untergeordnetes Team ist, empfehlen wir, ein neues Team zu erstellen oder die verschachtelten Beziehungen zu entfernen, die aus deinem Team ein übergeordnetes Team machen.

Um den Repositoryzugriff für jedes Team in deinem Unternehmen zu verwalten, einschließlich Teams, die mit einer IdP-Gruppe verbunden sind, musst du Änderungen auf {% data variables.product.prodname_dotcom_the_website %} vornehmen. Weitere Informationen findest du unter [Verwalten des Teamzugriffs auf ein Organisationsrepository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository).

## Anforderungen für die Verbindung von IdP-Gruppen mit Teams

Bevor du eine IdP-Gruppe mit einem Team für {% data variables.product.prodname_dotcom %} verbinden kannst, musst du die Gruppe der {% data variables.product.prodname_emu_idp_application %}-Anwendung in deinem IdP zuweisen. Weitere Informationen findest du unter [Informationen zur Bereitstellung von SCIM für {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users).

Du kannst ein Team in deinem Unternehmen mit einer IdP-Gruppe verbinden. Du kannst der gleichen IdP-Gruppe mehrere Teams in deinem Unternehmen zuweisen.

Wenn du ein vorhandenes Team mit einer IdP-Gruppe verbindest, musst du zuerst alle Mitglieder entfernen, die manuell hinzugefügt wurden. Nachdem du ein Team in einem Unternehmen mit einer IdP-Gruppe verbunden hat, muss dein*e IdP-Administrator*in über den Identitätsanbieter Änderungen an der Teammitgliedschaft vornehmen. Du kannst die Teammitgliedschaft nicht auf {% data variables.product.prodname_dotcom_the_website %} verwalten.

## Erstellen eines neuen Teams, das mit einer IdP-Gruppe verbunden ist

Jedes Mitglied einer Organisation kann ein neues Team erstellen und das Team mit einer IdP-Gruppe verbinden. 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %}
1. Um ein Team zu verbinden, wähle das Dropdownmenü „Identitätsanbietergruppen“ aus, und klicke auf das Team, das du verbinden möchtest.
    ![Dropdownmenü zum Auswählen von Identitätsanbietergruppen](/assets/images/help/teams/choose-an-idp-group.png) {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}

## Verwalten der Verbindung zwischen einem vorhandenen Team und einer IdP-Gruppe

Organisationsinhaber*innen und Teambetreuer*innen können die vorhandene Verbindung zwischen einer IdP-Gruppe und einem Team verwalten.

{% note %}

**Hinweis**: Bevor du zum ersten Mal ein vorhandenes Team auf {% data variables.product.prodname_dotcom_the_website %} mit einer IdP-Gruppe verbindest, müssen alle Mitglieder des Teams auf {% data variables.product.prodname_dotcom_the_website %} zuerst entfernt werden. Weitere Informationen findest du unter [Entfernen von Organisationsmitgliedern aus einem Team](/github/setting-up-and-managing-organizations-and-teams/removing-organization-members-from-a-team).

{% endnote %}

{% data reusables.profile.access_profile %}

{% data reusables.profile.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. Klicke optional unter „Identitätsanbietergruppe“ rechts neben der Identitätsanbietergruppe, die du trennen möchten, auf {% octicon "x" aria-label="X symbol" %}. 
    ![Trennen einer verbundenen IdP-Gruppe von einem GitHub-Team](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png)
1. Wähle in der Dropdownliste unter „Identitätsanbietergruppe“ eine Identitätsanbietergruppe aus, um eine Verbindung mit einer IdP-Gruppe herzustellen.
    ![Dropdownmenü zur Auswahl von Identitätsanbietergruppen](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
1. Klicke auf **Änderungen speichern**.

## Anzeigen von IdP-Gruppen, Gruppenmitgliedschaften und verbundenen Teams

Du kannst eine Liste der IdP-Gruppen überprüfen, alle Teams anzeigen, die mit einer IdP-Gruppe verbunden sind, und die Mitgliedschaft jeder IdP-Gruppe auf {% data variables.product.product_name %} anzeigen. Du musst die Mitgliedschaft für eine Gruppe in deinem IdP bearbeiten.

{% data reusables.enterprise-accounts.access-enterprise %}
1. Um eine Liste der IdP-Gruppen zu überprüfen, klicke in der linken Seitenleiste auf {% octicon "key" aria-label="The key icon" %} **Identitätsanbieter**.
    ![Screenshot mit der Registerkarte „Identitätsanbieter“ in der Seitenleiste des Unternehmens](/assets/images/help/enterprises/enterprise-account-identity-provider-tab.png)
2. Um die Mitglieder und Teams anzuzeigen, die mit einer IdP-Gruppe verbunden sind, klicke auf den Namen der Gruppe.
    ![Screenshot mit der Liste der IdP-Gruppen, der Gruppenname ist hervorgehoben](/assets/images/help/enterprises/select-idp-group.png)
4. Klicke zum Anzeigen der Teams, die mit der IdP-Gruppe verbunden sind, auf **Teams**. 
    ![Screenshot mit der Schaltfläche „Teams“](/assets/images/help/enterprises/idp-groups-team-switcher.png)
