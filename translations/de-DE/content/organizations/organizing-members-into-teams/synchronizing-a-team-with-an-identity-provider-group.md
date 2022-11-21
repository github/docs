---
title: Ein Team mit einer Identitätsanbieter-Gruppe synchronisieren
intro: 'Du kannst ein {% data variables.product.product_name %}-Team mit einer unterstützten Identitätsanbietergruppe (IdP) synchronisieren, um Teammitglieder automatisch hinzuzufügen oder zu entfernen.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
permissions: 'Organization owners and team maintainers can synchronize a {% data variables.product.prodname_dotcom %} team with an IdP group.'
versions:
  ghae: '*'
  ghec: '*'
  feature: scim-for-ghes
topics:
  - Organizations
  - Teams
shortTitle: Synchronize with an IdP
ms.openlocfilehash: c4ea8dc13eee674b962108ba52c71e67e8462b87
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106981'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## Informationen zur Teamsynchronisierung

{% data reusables.identity-and-permissions.about-team-sync %}

{% ifversion ghec %}Du kannst bis zu fünf Identitätsanbietergruppen mit einem {% data variables.product.product_name %}-Team verbinden.{% elsif ghae %}Du kannst ein {% data variables.product.product_name %}-Team mit einer Identitätsanbietergruppe verbinden. Alle Benutzer*innen in der Gruppe werden automatisch dem Team sowie der übergeordneten Organisation als Mitglieder hinzugefügt. Wenn du eine Gruppe von einem Team trennst, werden Benutzer*innen, die durch die Teammitgliedschaft Mitglieder der Organisation geworden sind, aus der Organisation entfernt.{% endif %} Du kannst eine Identitätsanbietergruppe mehreren {% data variables.product.product_name %}-Teams zuweisen.

{% ifversion ghec %}Die Teamsynchronisierung unterstützt keine Identitätsanbietergruppen mit mehr als 5.000 Mitgliedern.{% endif %}

Sobald ein {% data variables.product.prodname_dotcom %}-Team mit einer IdP-Gruppe verbunden ist, muss dein IdP-Administrator Änderungen an der Teammitgliedschaft über den Identitätsanbieter durchführen. Die Teammitgliedschaft kann nicht über {% data variables.product.product_name %}{% ifversion ghec %} oder die API{% endif %} verwaltet werden.

{% ifversion ghec %}{% data reusables.enterprise-accounts.team-sync-override %}{% endif %}

{% ifversion ghec %} Alle Änderungen, die über deinen Identitätsanbieter vorgenommen werden, werden im Überwachungsprotokoll in {% data variables.product.product_name %} als Änderungen angezeigt, die vom Teamsynchronisierungsbot vorgenommen wurden. Dein IdP wird die Daten der Teammitgliedschaft einmal pro Stunde an {% data variables.product.prodname_dotcom %} senden.
Beim Verbinden eines Teams mit einer IdP-Gruppe werden unter Umständen einige Teammitglieder entfernt. Weitere Informationen findest du unter [Anforderungen für Mitglieder synchronisierter Teams](#requirements-for-members-of-synchronized-teams).
{% endif %}

{% ifversion ghae %} Wenn sich die Gruppenmitgliedschaft bei deinem Identitätsanbieter ändert, sendet der Identitätsanbieter gemäß dem von ihm festgelegten Zeitplan eine SCIM-Anforderung mit den Änderungen an {% data variables.product.product_name %}. Alle Anforderungen, bei denen die {% data variables.product.prodname_dotcom %}-Team- oder -Organisationsmitgliedschaft geändert wird, werden im Überwachungsprotokoll als Änderungen erfasst, die von dem Konto vorgenommen wurden, das zum Konfigurieren der Benutzerbereitstellung verwendet wurde. Weitere Informationen zu diesem Konto findest du unter [Konfigurieren der Benutzerbereitstellung für dein Unternehmen](/admin/authentication/configuring-user-provisioning-for-your-enterprise). Weitere Informationen zu Zeitplänen für SCIM-Anforderungen findest du in der Microsoft-Dokumentation unter [Überprüfen des Status der Benutzerbereitstellung](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user). {% endif %}

Übergeordnete Teams können nicht mit IdP-Gruppen synchronisiert werden. Wenn das Team, das du mit einer IdP-Gruppe verbinden möchtest, ein übergeordnetes Team ist, empfehlen wir, ein neues Team zu erstellen oder die verschachtelten Beziehungen zu entfernen, die aus deinem Team ein übergeordnetes Team machen. Weitere Informationen findest du unter [Informationen zu Teams](/articles/about-teams#nested-teams), [Erstellen eines Teams](/organizations/organizing-members-into-teams/creating-a-team) und [Verschieben eines Teams innerhalb der Hierarchie deiner Organisation](/articles/moving-a-team-in-your-organizations-hierarchy).

Um den Repository-Zugriff für jedes {% data variables.product.prodname_dotcom %}-Team zu verwalten, einschließlich Teams, die mit einer IdP-Gruppe verbunden sind, musst du Änderungen mit {% data variables.product.product_name %} vornehmen. Weitere Informationen findest du unter [Informationen zu Teams](/articles/about-teams) und [Verwalten des Teamzugriffs auf ein Organisationsrepository](/articles/managing-team-access-to-an-organization-repository). 

{% ifversion ghec %}Du kannst die Teamsynchronisierung auch über die API verwalten. Weitere Informationen findest du unter [Teamsynchronisierung](/rest/reference/teams#team-sync).{% endif %}

{% ifversion ghec %}
## Anforderungen an Mitglieder synchronisierter Teams

Wenn du ein Team mit einer Identitätsanbietergruppe verbunden hast, fügt die Teamsynchronisierung die einzelnen Mitglieder der Identitätsanbietergruppe dem entsprechenden Team in {% data variables.product.product_name %} nur dann hinzu, wenn Folgendes der Fall ist:
- Die Person ist ein Mitglied der Organisation in {% data variables.product.product_name %}.
- Die Person hat sich bereits mit ihrem persönlichen Konto bei {% data variables.product.product_name %} angemeldet und sich mindestens einmal über das einmalige Anmelden mit SAML beim Organisations- oder Unternehmenskonto authentifiziert.
- Die SSO-Identität der Person ist ein Mitglied der Identitätsanbietergruppe.  

Vorhandene Teams oder Gruppenmitglieder, die diese Kriterien nicht erfüllen, werden automatisch aus dem Team in {% data variables.product.product_name %} entfernt und verlieren den Zugriff auf Repositorys. Beim Widerrufen der verknüpften Identität eines Benutzers bzw. einer Benutzerin wird diese*r Benutzer*in auch aus allen Teams entfernt, die Identitätsanbietergruppen zugeordnet sind. Weitere Informationen findest du unter [Anzeigen und Verwalten des SAML-Zugriffs eines Mitglieds auf deine Organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity) und [Anzeigen und Verwalten des SAML-Zugriffs von Benutzer*innen auf dein Unternehmen](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity).

Sobald sich das entfernte Teammitglied jedoch wieder mit SSO bei der Organisations oder beim Enterprise-Konto authentifiziert und der verbundenen IdP-Gruppe hinzugefügt ist, kann es automatisch wieder in das Team aufgenommen werden.

Um zu verhindern, dass Teammitglieder versehentlich aus einem Team entfernt werden, empfehlen wir innerhalb der Organisations oder dem Enterprise-Konto die Erzwingung des SAML SSO, die Erstellung neuer Teams zur Synchronisierung der Mitgliederdaten und die Überprüfung der IdP-Gruppenmitgliedschaften vor der Synchronisierung bestehender Teams. Weitere Informationen findest du unter [Erzwingen des einmaligen Anmeldens mit SAML für deine Organisation](/articles/enforcing-saml-single-sign-on-for-your-organization) und [Konfigurieren des einmaligen Anmeldens mit SAML für dein Unternehmen](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

{% endif %}

## Voraussetzungen

{% ifversion ghec %} Damit du ein {% data variables.product.product_name %}-Team mit einer Identitätsanbietergruppe verbinden kannst, muss ein*e Organisations- oder Unternehmensbesitzer*in die Teamsynchronisierung für dein Organisations- oder Unternehmenskonto aktivieren. Weitere Informationen findest du unter [Verwalten der Teamsynchronisierung für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) und [Verwalten der Teamsynchronisierung für Organisationen in deinem Unternehmenskonto](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).

Um zu vermeiden, dass Team-Mitglieder unbeabsichtigt entfernt werden, besuche das administrative Portal deines IdP und bestätige, dass jedes aktuelle Teammitglied auch in der IdP-Gruppe vorhanden ist, die du mit diesem Team verbinden willst. Wenn du keinen Zugriff auf das Administratorenportal deines Identitätsanbieters hast, bitte deinen IdP-Administrator um die Überprüfung.

Du musst Dich mit SAML SSO authentifizieren. Weitere Informationen findest du unter [Authentifizieren mit einmaligem Anmelden mit SAML](/articles/authenticating-with-saml-single-sign-on).

{% elsif ghae %} Damit du ein {% data variables.product.product_name %}-Team mit einer Identitätsanbietergruppe verbinden kannst, musst du erst die Benutzerbereitstellung für {% data variables.location.product_location %} mithilfe einer unterstützten SCIM-Instanz (System for Cross-Domain Identity Management) konfigurieren. Weitere Informationen findest du unter [Konfigurieren der Benutzerbereitstellung für dein Unternehmen](/admin/authentication/configuring-user-provisioning-for-your-enterprise).

Wenn du die Benutzerbereitstellung für {% data variables.product.product_name %} mithilfe von SCIM konfiguriert hast, kannst du die {% data variables.product.product_name %}-Anwendung jeder Identitätsanbietergruppe zuweisen, die du in {% data variables.product.product_name %} verwenden möchtest. Weitere Informationen findest du in der Microsoft-Dokumentation unter [Konfigurieren der automatischen Benutzerbereitstellung in GitHub AE](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae).

{% elsif scim-for-ghes %} Du musst die Benutzerbereitstellung mit SCIM für {% data variables.location.product_location %} konfigurieren. Weitere Informationen findest du unter [Konfigurieren der Benutzerbereitstellung mit SCIM für dein Unternehmen](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise).

{% data reusables.scim.ghes-beta-note %} {% endif %}

## Eine IdP-Gruppe mit einem Team verbinden

Wenn du eine Identitätsanbietergruppe mit einem {% data variables.product.product_name %}-Team verbindest, werden alle Benutzer*innen in dieser Gruppe automatisch dem Team hinzugefügt. {% ifversion ghae %}Alle Benutzer*innen, die noch keine Mitglieder der übergeordneten Organisation sind, werden auch der Organisation hinzugefügt.{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. Benutze unter "Identity Provider Groups" (Identitätsanbieter-Gruppen) das Dropdownmenü und wähle bis zu 5 Identitätsanbieter-Gruppen aus.
    ![Dropdownliste zum Auswählen von Identitätsanbietergruppen](/assets/images/help/teams/choose-an-idp-group.png){% elsif ghae %}
6. Wähle in der Dropdownliste unter „Identitätsanbietergruppe“ eine Identitätsanbietergruppe aus.
    ![Dropdownliste zum Auswählen der Identitätsanbietergruppe](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. Klicke auf **Änderungen speichern**.

## Eine IdP-Gruppe von einem Team trennen

Wenn du eine IdP-Gruppe von einem {% data variables.product.prodname_dotcom %}-Team trennst, werden Teammitglieder, die dem {% data variables.product.prodname_dotcom %}-Team durch die IdP Gruppe zugewiesen wurden, aus dem Team entfernt. {% ifversion ghae %} Alle Benutzer*innen, die nur durch die Verbindung mit dem Team Mitglieder der übergeordneten Organisation geworden sind, werden auch aus der Organisation entfernt.{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. Klicke unter „Identitätsanbietergruppen“ rechts neben der Identitätsanbietergruppe, die du trennen möchtest, auf {% octicon "x" aria-label="X symbol" %}. 
    ![Aufheben der Auswahl einer verbundenen Identitätsanbietergruppe für das GitHub-Team](/assets/images/help/teams/unselect-idp-group.png){% elsif ghae %}
6. Klicke unter „Identitätsanbietergruppe“ rechts neben der Identitätsanbietergruppe, die du trennen möchtest, auf {% octicon "x" aria-label="X symbol" %}. 
    ![Aufheben der Auswahl einer verbundenen Identitätsanbietergruppe für das GitHub-Team](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. Klicke auf **Änderungen speichern**.
