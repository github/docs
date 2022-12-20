---
title: Konfigurieren der Authentifizierung und Bereitstellung für dein Unternehmen mit Azure AD
shortTitle: Configure with Azure AD
intro: "Du kannst einen Mandanten in Azure Active Directory (Azure\_AD) als Identitätsanbieter (IdP) verwenden, um die Authentifizierung und Benutzerbereitstellung für {% data variables.location.product_location %} zentral zu verwalten."
permissions: 'Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
ms.openlocfilehash: bfd93814b11066d6da2d87a2e1f0a8bd5461e93f
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167060'
---
## Informationen zur Authentifizierung und Benutzerbereitstellung mit Azure AD

Azure Active Directory (Azure AD) ist ein Dienst von Microsoft, mit dem du Benutzerkonten zentral verwalten und auf Webanwendungen zugreifen kannst. Weitere Informationen findest du unter [Was ist Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) in der Microsoft-Dokumentation.

Um Identität und Zugriff für {% data variables.product.product_name %} zu verwalten, kannst du einen Azure AD-Mandanten als SAML-IdP zur Authentifizierung verwenden. Du kannst Azure AD auch so konfigurieren, dass Konten und Zugriffsmitgliedschaften automatisch mit SCIM bereitgestellt werden, wodurch du {% data variables.product.product_name %}-Benutzer*innen erstellen und Team- und Organisationsmitgliedschaften von deinem Azure AD-Mandanten aus verwalten kannst.

{% data reusables.scim.ghes-beta-note %}

Nachdem du das einmalige Anmelden (Single Sign-On, SSO) mit SAML und SCIM für {% data variables.product.product_name %} mithilfe von Azure AD aktiviert hast, kannst du folgende Aktionen von deinem Azure AD-Mandanten aus ausführen:

* Zuweisen der {% data variables.product.product_name %}-Anwendung zu einem Azure AD-Benutzerkonto, um automatisch ein entsprechendes Benutzerkonto in {% data variables.product.product_name %} zu erstellen und diesem Zugriff zu gewähren.
* Aufheben der Zuweisung der {% data variables.product.product_name %}-Anwendung zu einem Azure AD-Benutzerkonto, um das entsprechende Benutzerkonto in {% data variables.product.product_name %} zu deaktivieren.
* Zuweisen der {% data variables.product.product_name %}-Anwendung zu einer IdP-Gruppe in Azure AD, um automatisch Benutzerkonten in {% data variables.product.product_name %} für alle Mitglieder der IdP-Gruppe zu erstellen und diesen Zugriff zu gewähren. Darüber hinaus ist die IdP-Gruppe für die Verbindung mit einem Team und der übergeordneten Organisation in {% data variables.product.product_name %} verfügbar.
* Aufheben der Zuweisung der {% data variables.product.product_name %}-Anwendung zu einer IdP-Gruppe, um die {% data variables.product.product_name %}-Benutzerkonten aller IdP-Benutzer*innen zu deaktivieren, die nur über diese IdP-Gruppe Zugriff hatten, sowie Entfernen der Benutzer*innen aus der übergeordneten Organisation. Die IdP-Gruppe wird von allen Teams in {% data variables.product.product_name %} getrennt.

Weitere Informationen zum Verwalten von Identität und Zugriff für dein Unternehmen in {% data variables.location.product_location %} findest du unter [Verwalten von Identität und Zugriff für dein Unternehmen](/admin/authentication/managing-identity-and-access-for-your-enterprise). Weitere Informationen zum Synchronisieren von Teams mit IdP-Gruppen findest du unter [Synchronisieren eines Teams mit einer Identitätsanbietergruppe](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group).

## Voraussetzungen

- Um die Authentifizierung und Benutzerbereitstellung für {% data variables.product.product_name %} mithilfe von Azure AD zu konfigurieren, musst du über ein Azure AD-Konto und einen Mandanten verfügen. Weitere Informationen findest du auf der [Azure AD-Website](https://azure.microsoft.com/free/active-directory) und unter [Schnellstart: Erstellen eines Azure Active Directory-Mandanten](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) in der Microsoft-Dokumentation.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Konfigurieren von Authentifizierung und Benutzerbereitstellung mit Azure AD

Füge in deinem Azure AD-Mandanten die Anwendung für {% data variables.product.product_name %} hinzu, und konfiguriere anschließend die Bereitstellung.

{% ifversion ghae %}

1. Füge in Azure AD deinem Mandanten die {% data variables.enterprise.ae_azure_ad_app_link %} hinzu, und konfiguriere das einmalige Anmelden. Weitere Informationen findest du in der Microsoft-Dokumentation im [Tutorial: Integration des einmaligen Anmeldens (Single Sign-On, SSO) von Azure Active Directory in {% data variables.product.product_name %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial).

1. Gib in {% data variables.product.product_name %} die Details für deinen Azure AD-Mandanten ein.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Wenn du das einmalige Anmelden mit SAML für {% data variables.location.product_location %} bereits mit einem anderen Identitätsanbieter konfiguriert hast und stattdessen Azure AD verwenden möchtest, kannst du deine Konfiguration bearbeiten. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration).

1. Aktiviere die Benutzerbereitstellung in {% data variables.product.product_name %}, und konfiguriere die Benutzerbereitstellung in Azure AD. Weitere Informationen findest du unter [Konfigurieren der Benutzerbereitstellung für dein Unternehmen](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise).

{% elsif scim-for-ghes %}

1. Klicke im Azure AD-Mandanten in der linken Randleiste auf **Bereitstellung**.

1. Gib für „Mandanten-URL“ die vollständige Endpunkt-URL für SCIM in {% data variables.location.product_location %} ein. Weitere Informationen findest du in der REST-API-Dokumentation unter [SCIM](/rest/enterprise-admin/scim#scim-endpoint-urls).

1. Gib für „Geheimes Token“ das {% data variables.product.pat_v1 %} ein, das du in Schritt 4 unter [Konfigurieren der Benutzerbereitstellung mit SCIM für dein Unternehmen](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise#enabling-user-provisioning-for-your-enterprise) erstellt hast.

1. Wenn du überprüfen möchtest, ob die Verbindung von Azure AD mit {% data variables.location.product_location %} erfolgreich hergestellt wurde, klicke auf **Verbindung testen**.

1. Nachdem du die Verbindung überprüft hast, klicke oben auf der Seite auf **Speichern**.

{% endif %}

1. Weise eine*n Unternehmensbesitzer*in für {% data variables.product.product_name %} in Azure AD zu. Der Prozess, den du befolgen solltest, hängt davon ab, ob du die Bereitstellung konfiguriert hast. Weitere Informationen zu Unternehmensbesitzern findest du unter [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners).
   - Wenn du die Bereitstellung konfiguriert hast, um dem Benutzer oder der Benutzerin die Unternehmensbesitzerrolle in {% data variables.product.product_name %} zuzuweisen, weise diese dem Benutzer oder der Benutzerin in Azure AD zu.
   - Wenn du die Bereitstellung nicht konfiguriert hast, füge das Attribut `administrator` in der SAML-Assertion für das Benutzerkonto auf dem IdP mit dem Wert `true` ein, um dem Benutzer bzw. der Benutzerin die Unternehmensbesitzerrolle in {% data variables.product.product_name %} zu gewähren. Weitere Informationen zum Einfügen des `administrator`-Attributs in den SAML-Anspruch von Azure AD findest du unter [Anpassen von Ansprüchen im SAML-Token für Unternehmensanwendungen](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) in der Microsoft-Dokumentation.
