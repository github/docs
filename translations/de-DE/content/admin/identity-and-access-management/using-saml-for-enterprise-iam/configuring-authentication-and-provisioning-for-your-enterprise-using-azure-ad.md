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
ms.openlocfilehash: c0291aab00df0139b0b54eda8ec34b6e20deb19f
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192681'
---
## Informationen zur Authentifizierung und Benutzerbereitstellung mit Azure AD

Azure Active Directory (Azure AD) ist ein Dienst von Microsoft, mit dem du Benutzerkonten zentral verwalten und auf Webanwendungen zugreifen kannst. Weitere Informationen findest du unter [Was ist Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) in der Microsoft-Dokumentation.

{% data reusables.saml.idp-saml-and-scim-explanation %}

{% data reusables.scim.ghes-beta-note %}

Nachdem du das einmalige Anmelden (Single Sign-On, SSO) mit SAML und SCIM für {% data variables.product.product_name %} mithilfe von Azure AD aktiviert hast, kannst du folgende Aktionen von deinem Azure AD-Mandanten aus ausführen:

* Zuweisen der {% data variables.product.product_name %}-Anwendung zu einem Azure AD-Benutzerkonto, um automatisch ein entsprechendes Benutzerkonto in {% data variables.product.product_name %} zu erstellen und diesem Zugriff zu gewähren.
* Aufheben der Zuweisung der {% data variables.product.product_name %}-Anwendung zu einem Azure AD-Benutzerkonto, um das entsprechende Benutzerkonto in {% data variables.product.product_name %} zu deaktivieren.
* Zuweisen der {% data variables.product.product_name %}-Anwendung zu einer IdP-Gruppe in Azure AD, um automatisch Benutzerkonten in {% data variables.product.product_name %} für alle Mitglieder der IdP-Gruppe zu erstellen und diesen Zugriff zu gewähren. Darüber hinaus ist die IdP-Gruppe für die Verbindung mit einem Team und der übergeordneten Organisation in {% data variables.product.product_name %} verfügbar.
* Aufheben der Zuweisung der {% data variables.product.product_name %}-Anwendung zu einer IdP-Gruppe, um die {% data variables.product.product_name %}-Benutzerkonten aller IdP-Benutzer*innen zu deaktivieren, die nur über diese IdP-Gruppe Zugriff hatten, sowie Entfernen der Benutzer*innen aus der übergeordneten Organisation. Die IdP-Gruppe wird von allen Teams in {% data variables.product.product_name %} getrennt.

Weitere Informationen zum Verwalten von Identität und Zugriff für dein Unternehmen in {% data variables.location.product_location %} findest du unter [Verwalten von Identität und Zugriff für dein Unternehmen](/admin/authentication/managing-identity-and-access-for-your-enterprise).

## Voraussetzungen

- Um die Authentifizierung und Benutzerbereitstellung für {% data variables.product.product_name %} mithilfe von Azure AD zu konfigurieren, musst du über ein Azure AD-Konto und einen Mandanten verfügen. Weitere Informationen findest du auf der [Azure AD-Website](https://azure.microsoft.com/free/active-directory) und unter [Schnellstart: Erstellen eines Azure Active Directory-Mandanten](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) in der Microsoft-Dokumentation.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Konfigurieren von Authentifizierung und Benutzerbereitstellung mit Azure AD

{% ifversion ghae %}

Füge in deinem Azure AD-Mandanten die Anwendung für {% data variables.product.product_name %} hinzu, und konfiguriere anschließend die Bereitstellung.

1. Füge in Azure AD deinem Mandanten die {% data variables.enterprise.ae_azure_ad_app_link %} hinzu, und konfiguriere das einmalige Anmelden. Weitere Informationen findest du in der Microsoft-Dokumentation im [Tutorial: Integration des einmaligen Anmeldens (Single Sign-On, SSO) von Azure Active Directory in {% data variables.product.product_name %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial).

1. Gib in {% data variables.product.product_name %} die Details für deinen Azure AD-Mandanten ein.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Wenn du das einmalige Anmelden mit SAML für {% data variables.location.product_location %} bereits mit einem anderen Identitätsanbieter konfiguriert hast und stattdessen Azure AD verwenden möchtest, kannst du deine Konfiguration bearbeiten. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration).

1. Aktiviere die Benutzerbereitstellung in {% data variables.product.product_name %}, und konfiguriere die Benutzerbereitstellung in Azure AD. Weitere Informationen findest du unter [Konfigurieren der Benutzerbereitstellung für dein Unternehmen](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise).

{% elsif scim-for-ghes %}

1. Konfiguriere SAML-SSO für {% data variables.location.product_location %}. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso).
1. Konfiguriere die Benutzerbereitstellung mit SCIM für deine Instanz. Weitere Informationen findest du unter [Konfigurieren der Benutzerbereitstellung mit SCIM für dein Unternehmen](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise).

{% endif %}

## Verwalten von Unternehmensbesitzern 

Die Schritte, um eine Person zum Unternehmensbesitzer zu machen, hängen davon ab, ob du nur SAML oder auch SCIM verwendest. Weitere Informationen zu Unternehmensbesitzern findest du unter [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).

Wenn du die Bereitstellung konfiguriert hast, um dem Benutzer oder der Benutzerin die Unternehmensbesitzerrolle in {% data variables.product.product_name %} zuzuweisen, weise diese dem Benutzer oder der Benutzerin in Azure AD zu.

Wenn du die Bereitstellung nicht konfiguriert hast, füge das Attribut `administrator` in der SAML-Assertion für das Benutzerkonto auf dem IdP mit dem Wert `true` ein, um dem Benutzer bzw. der Benutzerin die Unternehmensbesitzerrolle in {% data variables.product.product_name %} zu gewähren. Weitere Informationen zum Einfügen des `administrator`-Attributs in den SAML-Anspruch von Azure AD findest du unter [Anpassen von Ansprüchen im SAML-Token für Unternehmensanwendungen](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) in der Microsoft-Dokumentation.
