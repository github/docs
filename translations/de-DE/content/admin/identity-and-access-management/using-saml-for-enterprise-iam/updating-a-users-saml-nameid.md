---
title: Aktualisieren der SAML-NameID von Benutzer*innen
shortTitle: Update SAML NameID
intro: 'Wenn sich die `NameID` eines Kontos bei deinem Identitätsanbieter (IdP) ändert, und die Person sich nicht mehr {% ifversion ghes or ghae %}bei {% data variables.product.product_location %} anmelden kann{% elsif ghec %}authentifizieren kann, um auf die Ressourcen deines Unternehmens zuzugreifen{% endif %}, musst du {% ifversion ghec %}dich entweder an den {% data variables.product.company_short %}-Support wenden oder die verknüpfte Identität der Person widerrufen{% elsif ghes %}die `NameID`-Zuordnung auf {% data variables.product.product_location %} aktualisieren{% elsif ghae %}dich an den {% data variables.product.company_short %}-Support wenden{% endif %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 7a151143219fc0885861beedb69a2608983c5588
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717901'
---
## Informationen zu Updates am SAML-`NameID`-Wert von Benutzer*innen

In bestimmten Situationen musst du möglicherweise Werte aktualisieren, die mit dem Konto einer Person bei deinem SAML-Identitätsanbieter verknüpft sind. Wenn dieser Bezeichner gleichzeitig den `NameID`-Wert für die Authentifizierung bei {% data variables.product.product_name %} darstellt, musst du die `NameID`-Zuordnung in deiner Instanz aktualisieren, sodass die Person sich weiterhin erfolgreich authentifizieren kann. Weitere Informationen findest du unter [Überlegungen zu Benutzernamen zur externen Authentifizierung](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

## Aktualisieren der SAML-`NameID` eines Benutzers

Enterprise-Besitzer*innen können den SAML-`NameID`-Wert von Benutzer*innen in einer {% data variables.product.product_name %}-Instanz aktualisieren.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Klicke auf der linken Randleiste auf **All users** (Alle Benutzer).
  ![Randleistenelement „All users“ (Alle Benutzer) in den Websiteadministratoreinstellungen](/assets/images/enterprise/site-admin-settings/all-users.png)
3. Klicke in der Liste der Benutzer auf den Benutzernamen, für den du die `NameID`-Zuordnung aktualisieren möchtest.
  ![Benutzername in der Liste der Instanzbenutzerkonten](/assets/images/enterprise/site-admin-settings/all-users-click-username.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
5. Klicke rechts neben „Update SAML NameID“ (SAML-NameID aktualisieren) auf **Edit** (Bearbeiten).
  ![Schaltfläche „Edit“ (Bearbeiten) unter „SAML authentication“ (SAML-Authentifizierung) und rechts neben „Update SAML NameID“ (SAML-NameID aktualisieren)](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. Gib im Feld „NameID“ die neue `NameID` für den Benutzer ein.
  ![Feld „NameID“ im modalen Dialogfeld mit eingegebener NameID](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Klicke auf **Update NameID** (NameID aktualisieren).
  ![Schaltfläche „Update NameID“ (NameID aktualisieren) unter aktualisiertem NameID-Wert im modalen Dialogfeld](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
