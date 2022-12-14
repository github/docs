---
title: Konfigurieren der SCIM-Bereitstellung für Enterprise Managed Users mit Okta
shortTitle: Set up provisioning with Okta
intro: You can provision new users and manage their membership of your enterprise and teams using Okta as your identity provider.
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
- /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
- Accounts
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: 6c143b8ef729ab7343cf14613acf5f528384135c
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145102928"
---
## <a name="about-provisioning-with-okta"></a>Informationen zur Bereitstellung mit Okta

Du kannst {% data variables.product.prodname_emus %} mit Okta als Identitätsanbieter verwenden, um neue Konten bereitzustellen, Unternehmensmitgliedschaften zu verwalten und Teammitgliedschaften für Organisationen in deinem Unternehmen zu verwalten. Weitere Informationen zur Bereitstellung für {% data variables.product.prodname_emus %} findest du unter [Konfigurieren der SCIM-Bereitstellung für Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users).

Bevor du die Bereitstellung mit Okta konfigurieren kannst, musst du einmaliges Anmelden mit SAML konfigurieren. Weitere Informationen findes du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users).

Zum Konfigurieren der Bereitstellung mit Okta musst du den Namen deines Unternehmens in der Anwendung {% data variables.product.prodname_emu_idp_application %} festlegen und das persönliche Zugriffstoken des Setupbenutzers eingeben. Du kannst dann mit der Bereitstellung von Benutzern in Okta beginnen.

## <a name="supported-features"></a>Unterstützte Features

{% data variables.product.prodname_emus %} bietet Unterstützung für viele Bereitstellungsfeatures in Okta.

| Funktion | BESCHREIBUNG |
| --- | --- |
| Push neuer Benutzer | Benutzer, die der Anwendung {% data variables.product.prodname_emu_idp_application %} in Okta zugewiesen sind, werden automatisch im Unternehmen auf {% data variables.product.product_name %} erstellt. |
| Push einer Profilaktualisierung | Aktualisierungen, die am Profil des Benutzers in Okta vorgenommen wurden, werden in {% data variables.product.product_name %} gepusht. |
| Pushgruppen | Gruppen in Okta, die der Anwendung {% data variables.product.prodname_emu_idp_application %} als Pushgruppen zugewiesen sind, werden automatisch im Unternehmen auf {% data variables.product.product_name %} erstellt. |
| Push Benutzer-Deaktivierung | Durch das Aufheben der Zuweisung des Benutzers aus der Anwendung {% data variables.product.prodname_emu_idp_application %} in Okta wird der Benutzer in {% data variables.product.product_name %} deaktiviert. Der Benutzer kann sich nicht anmelden, aber die Informationen des Benutzers werden beibehalten. |
| Benutzer reaktivieren | Benutzer in Okta, deren Okta-Konten reaktiviert werden und die wieder der Anwendung {% data variables.product.prodname_emu_idp_application %} zugewiesen werden, werden aktiviert. |

{% note %}

**Hinweis:** {% data variables.product.prodname_emus %} bietet keine Unterstützung für Änderungen an Benutzernamen.

{% endnote %}

## <a name="setting-your-enterprise-name"></a>Festlegen des Unternehmensnamens

Nachdem dein {% data variables.product.prodname_emu_enterprise %} erstellt wurde, kannst du mit der Konfiguration der Bereitstellung beginnen, indem du den Unternehmensnamen in Okta festlegst.

1. Navigiere auf Okta zu der Anwendung {% data variables.product.prodname_emu_idp_application %}.
1. Klicke auf die Registerkarte **Sign On** (Anmelden).
1. Klicke auf **Edit** (Bearbeiten), um Änderungen vorzunehmen.
1. Gib unter „Advanced Sign-on Settings“ (Erweiterte Anmeldeeinstellungen) im Textfeld „Enterprise Name“ (Unternehmensname) deinen Unternehmensnamen ein. Wenn du beispielsweise unter `https://github.com/enterprises/octoinc` auf dein Unternehmen zugreifst, lautet der Unternehmensname „octoinc“.
![Screenshot des Felds „Enterprise Name“ (Unternehmensname) auf Okta](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. Klicke zum Speichern des Unternehmensnamens auf **Save** (Speichern).

## <a name="configuring-provisioning"></a>Konfigurieren der Bereitstellung

Nachdem du deinen Unternehmensnamen festgelegt hast, kannst du mit der Konfiguration der Bereitstellungseinstellungen fortfahren.

Zum Konfigurieren der Bereitstellung muss der Setupbenutzer mit dem Benutzernamen **@<em>SHORT-CODE</em>_admin** ein persönliches Zugriffstoken mit dem Bereich **admin:enterprise** bereitstellen. Weitere Informationen zum Erstellen eines neuen Tokens findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token).

1. Navigiere auf Okta zu der Anwendung {% data variables.product.prodname_emu_idp_application %}.
1. Klicke auf die Registerkarte **Bereitstellung**.
1. Klicke im Einstellungsmenü auf **Integration**.
1. Klicke auf **Edit** (Bearbeiten), um Änderungen vorzunehmen.
1. Klicke auf **API-Integration aktivieren**.
1. Gib im Feld „API Token“ das persönliche Zugriffstoken mit dem Bereich **admin:enterprise** ein, der dem Setupbenutzer gehört.
![Screenshot des Felds „API Token“ in Okta](/assets/images/help/enterprises/okta-emu-token.png)
1. Klicke auf **API-Anmeldeinformationen testen**. Wenn der Test erfolgreich ist, wird oben auf dem Bildschirm eine Überprüfungsmeldung angezeigt.
1. Klicke zum Speichern des Tokens auf **Save** (Speichern).
1. Klicke im Einstellungsmenü auf **To App** (Für App).
![Screenshot des Menüelements „To App“ (Für App) in Okta](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. Klicke rechts neben „Provisioning to App“ (Bereitstellung für App) auf **Edit** (Bearbeiten), damit Änderungen vorgenommen werden können.
1. Wähle **Enable** (Aktivieren) für **Create Users** (Benutzer erstellen), **Update User Attributes** (Benutzerattribute aktualisieren) und **Deactivate Users** (Benutzer deaktivieren) aus.
![Screenshot mit Bereitstellungsoptionen auf Okta](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. Klicke auf **Save** (Speichern), um die Konfiguration der Bereitstellung abzuschließen.

## <a name="assigning-users-and-groups"></a>Zuweisen von Benutzern und Gruppen

Nachdem du SAML-SSO und Bereitstellung konfiguriert hast, kannst du neue Benutzer auf {% data variables.product.prodname_dotcom_the_website %} bereitstellen, indem du der Anwendung {% data variables.product.prodname_emu_idp_application %} Benutzer zuweist. 

{% data reusables.scim.emu-scim-rate-limit %}

Du kannst die Organisationsmitgliedschaft auch automatisch verwalten, indem du der Anwendung Gruppen zuweist und sie der Registerkarte „Push Groups“ (Pushgruppen) in Okta hinzufügst. Wenn die Gruppe erfolgreich bereitgestellt wird, kann sie mit Teams in den Organisationen des Unternehmens verbunden werden. Weitere Informationen zum Verwalten von Teams findest du unter [Verwalten von Teammitgliedschaften mit Identitätsanbietergruppen](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups).

Beim Zuweisen von Benutzern kannst du das Attribut „Rollen“ in der Anwendung {% data variables.product.prodname_emu_idp_application %} verwenden, um die Rolle eines Benutzers im Unternehmen in {% data variables.product.product_name %} festzulegen. Weitere Informationen zu Rollen findest du unter [Rollen in einem Unternehmen](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise).

![Screenshot der Rollenoptionen für bereitgestellte Benutzer in Okta](/assets/images/help/enterprises/okta-emu-user-role.png)
