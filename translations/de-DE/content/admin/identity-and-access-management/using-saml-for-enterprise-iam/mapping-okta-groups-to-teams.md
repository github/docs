---
title: Zuordnen von Okta-Gruppen zu Teams
shortTitle: Map Okta groups to teams
intro: 'Du kannst deine Okta-Gruppen auf {% data variables.product.prodname_ghe_managed %} Teams zuordnen, um Teammitglieder automatisch hinzuzufügen und zu entfernen.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 43185a1593892086064588ceb593a72b9d93ea3f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104864'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Informationen zur Teamzuordnung

Wenn du Okta als IdP verwendest, kannst du deine Okta-Gruppe einem Team in {% data variables.product.prodname_ghe_managed %} zuordnen. Mitglieder der Okta-Gruppe werden dann automatisch Mitglieder des zugeordneten {% data variables.product.prodname_ghe_managed %}-Teams. Du kannst diese Zuordnung konfigurieren, indem du die Okta-App „GitHub AE“ dafür konfigurierst, die Gruppe und ihre Mitglieder zu {% data variables.product.prodname_ghe_managed %} zu verschieben. Anschließend kannst du auswählen, welches Team in {% data variables.product.prodname_ghe_managed %} der Okta-Gruppe zugeordnet wird.

## Voraussetzungen

Du oder dein*e Okta-Administrator*in müssen ein globaler Administrator oder ein Administrator mit privilegierter Rolle in Okta sein.
 
Du musst SAML Single Sign-On mit Okta aktivieren. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

Du musst dich mit SAML SSO und Okta bei deinem Unternehmenskonto authentifizieren. Weitere Informationen findest du unter [Authentifizieren mit einmaligem Anmelden mit SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).

## Zuweisen deiner Okta-Gruppe zu GitHub AE

1. Öffne im Okta-Dashboard die Einstellungen deiner Gruppe.
1. Klicke auf **Apps verwalten**.
  ![Gruppe zur App hinzufügen](/assets/images/help/saml/okta-ae-group-add-app.png)

1. Klicke rechts neben „GitHub AE“ auf **Zuweisen**.

  ![App zuweisen](/assets/images/help/saml/okta-ae-assign-group-to-app.png)

1. Klicken Sie auf **Fertig**.

## Verschieben der Okta-Gruppe zu {% data variables.product.prodname_ghe_managed %}

Wenn du eine Okta-Gruppe verschiebst und einem Team zuordnest, können sich alle Gruppenmitglieder bei {% data variables.product.prodname_ghe_managed %} anmelden.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}

1. Klicke auf **Gruppen verschieben**.

  ![Registerkarte „Gruppen verschieben“](/assets/images/help/saml/okta-ae-push-groups-tab.png)

1. Suche das Dropdownmenü „Gruppen verschieben“, und klicke auf **Gruppen nach Namen suchen**.

  ![Schaltfläche „Gruppen hinzufügen“](/assets/images/help/saml/okta-ae-push-groups-add.png)

1. Gib den Namen der zu Gruppe ein, die zu {% data variables.product.prodname_ghe_managed %} verschoben werden soll, und klicke dann auf **Speichern**.

  ![Gruppennamen hinzufügen](/assets/images/help/saml/okta-ae-push-groups-by-name.png)

## Zuordnen eines Teams zur Okta-Gruppe

Du kannst ein Team in deinem Unternehmen einer Okta-Gruppe zuordnen, die du zuvor zu {% data variables.product.prodname_ghe_managed %} verschoben hast. Mitglieder der Okta-Gruppe werden dann automatisch Mitglieder des {% data variables.product.prodname_ghe_managed %}-Teams. Alle nachfolgenden Änderungen an der Mitgliedschaft der Okta-Gruppe werden automatisch mit dem {% data variables.product.prodname_ghe_managed %}-Team synchronisiert.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
6. Wähle unter „Identitätsanbietergruppe“ das Dropdownmenü aus, und klicke auf eine Identitätsanbietergruppe.
    ![Dropdownmenü zur Auswahl von Identitätsanbietergruppen](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
7. Klicke auf **Änderungen speichern**.

## Überprüfen des Status der zugeordneten Teams

Unternehmensbesitzer*innen können mithilfe des Dashboards für Websiteadministratoren überprüfen, wie Okta-Gruppen den Teams in {% data variables.product.prodname_ghe_managed %} zugeordnet sind.

1. Klicke auf einer beliebigen Seite oben rechts auf {% octicon "rocket" aria-label="The rocket ship" %}, um auf das Dashboard zuzugreifen.
  ![Raketensymbol für den Zugriff auf die Websiteadministratoreinstellungen](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

1. Klicke im linken Bereich auf **Externe Gruppen**.

  ![Gruppennamen hinzufügen](/assets/images/help/saml/okta-ae-site-admin-external-groups.png)

1. Klicke auf eine Gruppe in der Liste der externen Gruppen, um weitere Details zu dieser anzuzeigen.

  ![Liste der externen Gruppen](/assets/images/help/saml/okta-ae-site-admin-list-groups.png)

1. Zu den Gruppendetails zählen der Name der Okta-Gruppe, eine Liste der Okta-Benutzer, die Mitglieder der Gruppe sind, und das jeweils zugeordnete Team in {% data variables.product.prodname_ghe_managed %}. 

  ![Liste der externen Gruppen](/assets/images/help/saml/okta-ae-site-admin-group-details.png)

## Anzeigen von Überwachungsprotokollereignissen für zugeordnete Gruppen

 Achte auf die folgenden Ereignisse im {% data variables.product.prodname_ghe_managed %}-Überwachungsprotokoll, um die SSO-Aktivität für zugeordnete Gruppen zu überwachen.

{% data reusables.saml.external-group-audit-events %}

{% data reusables.saml.external-identity-audit-events %}

Weitere Informationen findest du unter [Überprüfen des Überwachungsprotokolls deiner Organisation](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization).
