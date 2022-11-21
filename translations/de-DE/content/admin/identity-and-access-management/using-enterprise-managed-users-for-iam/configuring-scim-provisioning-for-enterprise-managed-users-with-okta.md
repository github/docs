---
title: Konfigurieren der SCIM-Bereitstellung für Enterprise Managed Users mit Okta
shortTitle: Set up provisioning with Okta
intro: Mit Okta als Identitätsanbieter kannst du neue Benutzer einrichten und ihre Mitgliedschaft in deinem Unternehmen und deinen Teams verwalten.
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
  - /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: b8c086d1d91c1248fa5a0349bb6f8ef32c3bbdf0
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160712'
---
## Informationen zur Bereitstellung mit Okta

Du kannst {% data variables.product.prodname_emus %} mit Okta als Identitätsanbieter verwenden, um neue Konten bereitzustellen, Unternehmensmitgliedschaften zu verwalten und Teammitgliedschaften für Organisationen in deinem Unternehmen zu verwalten. Weitere Informationen zur Bereitstellung für {% data variables.product.prodname_emus %} findest du unter [Konfigurieren der SCIM-Bereitstellung für Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users).

Bevor du die Bereitstellung mit Okta konfigurieren kannst, musst du einmaliges Anmelden mit SAML konfigurieren. Weitere Informationen findes du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users).

Zum Konfigurieren der Bereitstellung mit Okta musst du den Namen deines Unternehmens in der Anwendung {% data variables.product.prodname_emu_idp_application %} festlegen und {% data variables.product.pat_generic %} für den Setupbenutzer eingeben. Du kannst dann mit der Bereitstellung von Benutzern in Okta beginnen.

## Unterstützte Features

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

## Festlegen des Unternehmensnamens

Nachdem dein {% data variables.enterprise.prodname_emu_enterprise %} erstellt wurde, kannst du mit der Konfiguration der Bereitstellung beginnen, indem du den Unternehmensnamen in Okta festlegst.

1. Navigiere auf Okta zu der Anwendung {% data variables.product.prodname_emu_idp_application %}.
1. Klicke auf die Registerkarte **Sign On** (Anmelden).
1. Klicke auf **Edit** (Bearbeiten), um Änderungen vorzunehmen.
1. Gib unter „Advanced Sign-on Settings“ (Erweiterte Anmeldeeinstellungen) im Textfeld „Enterprise Name“ (Unternehmensname) deinen Unternehmensnamen ein. Wenn du beispielsweise unter `https://github.com/enterprises/octoinc` auf dein Unternehmen zugreifst, lautet der Unternehmensname „octoinc“.
![Screenshot des Felds „Enterprise Name“ (Unternehmensname) auf Okta](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. Klicke zum Speichern des Unternehmensnamens auf **Save** (Speichern).

## Konfigurieren der Bereitstellung

Nachdem du deinen Unternehmensnamen festgelegt hast, kannst du mit der Konfiguration der Bereitstellungseinstellungen fortfahren.

Zum Konfigurieren der Bereitstellung muss der Setupbenutzer mit dem Benutzernamen **@<em>SHORT-CODE</em>_admin** ein {% data variables.product.pat_v1 %} mit dem Bereich **admin:enterprise** bereitstellen. Weitere Informationen zum Erstellen eines neuen Tokens findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token).

1. Navigiere auf Okta zu der Anwendung {% data variables.product.prodname_emu_idp_application %}.
1. Klicke auf die Registerkarte **Bereitstellung**.
1. Klicke im Einstellungsmenü auf **Integration**.
1. Klicke auf **Edit** (Bearbeiten), um Änderungen vorzunehmen.
1. Klicke auf **API-Integration aktivieren**.
1. Gib im Feld „API Token“ {% data variables.product.pat_v1 %} mit dem Bereich **admin:enterprise** ein, der dem Setupbenutzer gehört.
![Screenshot des Felds „API Token“ in Okta](/assets/images/help/enterprises/okta-emu-token.png)
1. Klicke auf **API-Anmeldeinformationen testen**. Wenn der Test erfolgreich ist, wird oben auf dem Bildschirm eine Überprüfungsmeldung angezeigt.
1. Klicke zum Speichern des Tokens auf **Save** (Speichern).
1. Klicke im Einstellungsmenü auf **To App** (Für App).
![Screenshot des Menüelements „To App“ (Für App) in Okta](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. Klicke rechts neben „Provisioning to App“ (Bereitstellung für App) auf **Edit** (Bearbeiten), damit Änderungen vorgenommen werden können.
1. Wähle **Enable** (Aktivieren) für **Create Users** (Benutzer erstellen), **Update User Attributes** (Benutzerattribute aktualisieren) und **Deactivate Users** (Benutzer deaktivieren) aus.
![Screenshot mit Bereitstellungsoptionen auf Okta](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. Klicke auf **Save** (Speichern), um die Konfiguration der Bereitstellung abzuschließen.

## Zuweisen von Benutzern und Gruppen

Nachdem du SAML-SSO und Bereitstellung konfiguriert hast, kannst du neue Benutzer auf {% data variables.product.prodname_dotcom_the_website %} bereitstellen, indem du der Anwendung {% data variables.product.prodname_emu_idp_application %} Benutzer oder Gruppen zuweist. 

{% data reusables.scim.emu-scim-rate-limit %}

Du kannst die Organisationsmitgliedschaft auch automatisch verwalten, indem du der Registerkarte „Pushgruppen“ in Okta Gruppen hinzufügst. Wenn die Gruppe erfolgreich bereitgestellt wird, kann sie mit Teams in den Organisationen des Unternehmens verbunden werden. Weitere Informationen zum Verwalten von Teams findest du unter [Verwalten von Teammitgliedschaften mit Identitätsanbietergruppen](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups).

Beim Zuweisen von Benutzern kannst du das Attribut „Rollen“ in der Anwendung {% data variables.product.prodname_emu_idp_application %} verwenden, um die Rolle eines Benutzers im Unternehmen in {% data variables.product.product_name %} festzulegen. Weitere Informationen zu Rollen findest du unter [Rollen in einem Unternehmen](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise).

![Screenshot der Rollenoptionen für bereitgestellte Benutzer in Okta](/assets/images/help/enterprises/okta-emu-user-role.png)

## Aufheben der Bereitstellung von Benutzern und Gruppen

Wenn du Benutzer*innen oder Gruppen aus {% data variables.product.product_name %} entfernen möchtest, entferne sie in Okta aus der Registerkarte „Zuweisungen“ und der Registerkarte „Pushgruppen“. Stelle für Benutzer*innen sicher, dass sie aus allen Gruppen auf der Registerkarte „Pushgruppen“ entfernt werden.


