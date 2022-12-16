---
title: Konfigurieren der Authentifizierung und Bereitstellung für dein Unternehmen mithilfe von Okta
shortTitle: Configure with Okta
intro: 'Du kannst Okta als Identitätsanbieter (Identity Provider, IdP) verwenden, um die Authentifizierung und Benutzerbereitstellung für {% data variables.location.product_location %} zentral zu verwalten.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.product_name %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 1655ca7f800b94c150455a077b867e7e08fa924b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107515'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Informationen zur Authentifizierung und Benutzerbereitstellung mit Okta

Du kannst Okta als Identitätsanbieter (Identity Provider, IdP) für {% data variables.product.product_name %} verwenden, damit sich deine Okta-Benutzer*innen mit ihren Okta-Anmeldeinformationen bei {% data variables.product.product_name %} anmelden können.

Wenn du Okta als IdP für {% data variables.product.product_name %} nutzen möchtest, kannst du Okta die {% data variables.product.product_name %}-App hinzufügen, Okta in {% data variables.product.product_name %} als IdP konfigurieren und Zugriff für deine Okta-Benutzer*innen und -Gruppen bereitstellen.

{% data reusables.scim.ghes-beta-note %}

Die folgenden Bereitstellungsfeatures sind für alle Okta-Benutzer*innen verfügbar, die du deiner {% data variables.product.product_name %}-Anwendung zuweist.

| Funktion | BESCHREIBUNG |
| --- | --- |
| Push neuer Benutzer | Wenn du neue Benutzer*innen in Okta erstellst, werden diese {% data variables.product.product_name %} hinzugefügt. |
| Push Benutzer-Deaktivierung | Wenn du Benutzer*innen in Okta deaktivierst, werden diese in deinem Unternehmen in {% data variables.product.product_name %} gesperrt. |
| Push Profil-Aktualisierungen | Wenn du Benutzerprofile in Okta aktualisierst, aktualisiert Okta die Metadaten zur Mitgliedschaft der Benutzer*innen in deinem Unternehmen in {% data variables.product.product_name %}. |
| Benutzer reaktivieren | Wenn du Benutzer*innen in Okta reaktivierst, wird deren Sperrung in deinem Unternehmen in {% data variables.product.product_name %} aufgehoben. |

## Voraussetzungen

- Wenn du die Authentifizierung und Benutzerbereitstellung für {% data variables.product.product_name %} mithilfe von Okta konfigurieren möchtest, musst du über ein Okta-Konto und einen Mandanten verfügen.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Hinzufügen der {% data variables.product.product_name %}-Anwendung in Okta


{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-browse-app-catalog %} {%- ifversion ghae %}
1. Gib „GitHub AE“ in das Suchfeld ein, und klicke in den Ergebnissen auf **GitHub AE**.

  ![Suchergebnisse](/assets/images/help/saml/okta-ae-search.png)
1. Klicken Sie auf **Hinzufügen**.

  ![Hinzufügen der GitHub AE-App](/assets/images/help/saml/okta-ae-add-github-ae.png)
1. Gib für „Basis-URL“ die URL deines Unternehmens in {% data variables.product.product_name %} ein.

  ![Konfigurieren der Basis-URL](/assets/images/help/saml/okta-ae-configure-base-url.png)
1. Klicken Sie auf **Fertig**.
{%- elsif scim-for-ghes %}
1. Gib „GitHub Enterprise Server“ in das Suchfeld ein, und klicke in den Ergebnissen auf **GitHub Enterprise Server**.
1. Klicken Sie auf **Hinzufügen**.
1. Gib für „Basis-URL“ die URL von {% data variables.location.product_location %} ein.
1. Klicken Sie auf **Fertig**.
{% endif %}

## Aktivieren des einmaligen Anmeldens mit SAML für {% data variables.product.product_name %}

Wenn du das einmalige Anmelden (Single Sign-On, SSO) für {% data variables.product.product_name %} aktivieren möchtest, musst du {% data variables.product.product_name %} für die Nutzung der Anmelde-URL, der Aussteller-URL und des öffentlichen Zertifikats konfigurieren, die von Okta bereitgestellt werden. Diese Details findest du in der Okta-App für {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% ifversion ghae %} {% data reusables.saml.okta-sign-on-tab %} {% data reusables.saml.okta-view-setup-instructions %}
1. Notier dir die Details unter „Anmelde-URL“, „Aussteller“ und „Öffentliches Zertifikat“. 
1. Verwende die Details, um das SSO mit SAML für dein Unternehmen in {% data variables.product.product_name %} zu aktivieren. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).
{% elsif scim-for-ghes %} {% data reusables.saml.okta-sign-on-tab %}
1. Verwende die Details, um das SSO mit SAML für {% data variables.location.product_location %} zu aktivieren. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).
{%- endif %}

{% note %}

**Hinweis:** Wenn du deine SAML-Konfiguration in {% data variables.product.product_name %} testen möchtest, muss dein Okta-Benutzerkonto der {% data variables.product.product_name %}-App zugewiesen sein.

{% endnote %}

## Aktivieren der API-Integration

Die Okta-App verwendet für die SCIM-Bereitstellung die REST-API für {% data variables.product.product_name %}. Du kannst den Zugriff auf die API aktivieren und testen, indem du Okta für die Nutzung eines {% data variables.product.pat_generic %} für {% data variables.product.product_name %} konfigurierst.

1. Generiere in {% data variables.product.product_name %} ein {% data variables.product.pat_v1 %} mit dem Bereich `admin:enterprise`. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).
{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. Klicke auf **API-Integration konfigurieren**.

1. Klicke auf **API-Integration aktivieren**.

  ![Aktivieren der API-Integration](/assets/images/help/saml/okta-ae-enable-api-integration.png)

1. Gib für „API-Token“ das zuvor generierte {% data variables.product.pat_generic %} für {% data variables.product.product_name %} ein.

1. Klicke auf **API-Anmeldeinformationen testen**. 

{% note %}

**Hinweis**: Wenn `Error authenticating: No results for users returned` angezeigt wird, überprüfe, ob das einmalige Anmelden für {% data variables.product.product_name %} aktiviert ist. Weitere Informationen findest du unter [Aktivieren des einmaligen Anmeldens mit SAML für {% data variables.product.product_name %}](#enabling-saml-sso-for-github-ae).

{% endnote %}

## Konfigurieren der Einstellungen für die SCIM-Bereitstellung

In dieser Anleitung wird dargelegt, wie du die SCIM-Einstellungen für die Okta-Bereitstellung konfigurierst. Diese Einstellungen definieren, welche Features beim automatischen Bereitstellen von Okta-Benutzerkonten in {% data variables.product.product_name %} verwendet werden.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %} {% data reusables.saml.okta-ae-provisioning-tab %}
1. Klicke unter „Einstellungen“ auf **In App**.

  ![Einstellungen > In App](/assets/images/help/saml/okta-ae-to-app-settings.png)

1. Klicke rechts neben „Bereitstellung in App“ auf **Bearbeiten**.
1. Klicke rechts von „Benutzer erstellen“ auf **Aktivieren**.
1. Klicke rechts von „Benutzerattribute aktualisieren“ auf **Aktivieren**.
1. Klicke rechts von „Benutzer deaktivieren“ auf **Aktivieren**.
1. Klicken Sie auf **Speichern**.

## Gewähren des Zugriffs auf {% data variables.product.product_name %} für Okta-Benutzer*innen und -Gruppen

Du kannst Zugriff auf {% data variables.product.product_name %} für deine einzelnen Okta-Benutzer*innen oder für ganze Gruppen bereitstellen.

### Bereitstellen des Zugriffs für Okta-Benutzer*innen

Bevor sich deine Okta-Benutzer*innen mit ihren Anmeldeinformationen bei {% data variables.product.product_name %} anmelden können, musst du sie der Okta-App für {% data variables.product.product_name %} zuweisen.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-click-on-the-app %}

1. Klicke auf **Zuweisungen:**.

  ![Registerkarte „Zuweisungen“](/assets/images/help/saml/okta-ae-assignments-tab.png)

1. Öffne das Dropdownmenü „Zuweisen“, und klicke auf **Personen zuweisen**.

  ![Schaltfläche „Personen zuweisen“](/assets/images/help/saml/okta-ae-assign-to-people.png)

1. Klicke rechts neben dem erforderlichen Benutzerkonto auf **Zuweisen**.

  ![Liste der Benutzer](/assets/images/help/saml/okta-ae-assign-user.png)

1. Klicke rechts neben „Rolle“ auf eine Rolle für den oder die Benutzer*in und dann auf **Speichern und zurückkehren**.

  ![Rollenauswahl](/assets/images/help/saml/okta-ae-assign-role.png)

1. Klicken Sie auf **Fertig**.

{% ifversion ghae %}
### Bereitstellen des Zugriffs für Okta-Gruppen

Du kannst deine Okta-Gruppe einem Team in {% data variables.product.product_name %} zuordnen. Mitglieder der Okta-Gruppe werden dann automatisch Mitglieder des zugeordneten {% data variables.product.product_name %}-Teams. Weitere Informationen findest du unter [Zuordnen von Okta-Gruppen zu Teams](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
{% endif %}

## Weitere Informationsquellen

- [Grundlegendes zu SAML](https://developer.okta.com/docs/concepts/saml/) in der Okta-Dokumentation
- [Grundlegendes zu SCIM](https://developer.okta.com/docs/concepts/scim/) in der Okta-Dokumentation
