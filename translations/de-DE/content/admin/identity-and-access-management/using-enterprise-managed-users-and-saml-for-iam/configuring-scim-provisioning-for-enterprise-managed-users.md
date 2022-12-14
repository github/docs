---
title: Konfigurieren der SCIM-Bereitstellung für Enterprise Managed Users
shortTitle: Provisioning managed users
intro: You can configure your identity provider to provision new users and manage their membership in your enterprise and teams.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
- Accounts
- Enterprise
ms.openlocfilehash: 7bd9d539218492c474f7a530636ac7719ff14f44
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145104896"
---
## <a name="about-provisioning-for--data-variablesproductprodname_emus-"></a>Informationen zur Bereitstellung für {% data variables.product.prodname_emus %}

Du musst die Bereitstellung für {% data variables.product.prodname_emus %} konfigurieren, um Benutzerkonten für deine Unternehmensmitglieder zu erstellen, zu verwalten und zu deaktivieren. Wenn du die Bereitstellung für {% data variables.product.prodname_emus %} konfigurierst, werden Benutzer, die der {% data variables.product.prodname_emu_idp_application %}-Anwendung bei deinem Identitätsanbieter zugewiesen wurden, über SCIM als neue Benutzerkonten auf {% data variables.product.prodname_dotcom %} bereitgestellt, und die Benutzer werden deinem Unternehmen hinzugefügt. 

Wenn du die Informationen aktualisierst, die der Identität eines Benutzers bzw. einer Benutzerin auf deinem IdP zugeordnet sind, aktualisiert dein IdP das Konto des Benutzers bzw. der Benutzerin auf GitHub.com. Wenn du die Zuweisung eines Benutzers zu der {% data variables.product.prodname_emu_idp_application %}-Anwendung aufhebst oder ein Benutzerkonto bei deinem IdP deaktivierst, kommuniziert dein IdP mit {% data variables.product.prodname_dotcom %}, um alle SAML-Sitzungen ungültig zu machen und das Konto des Mitglieds zu deaktivieren. Die Informationen des deaktivierten Kontos werden gespeichert und der Benutzername wird in einen Hash des ursprünglichen Benutzernamens geändert, wobei der Kurzcode angefügt wurde. Wenn du einen Benutzer der {% data variables.product.prodname_emu_idp_application %}-Anwendung neu zuweist oder sein Konto bei deinem IdP reaktivierst, wird das {% data variables.product.prodname_managed_user %}-Konto auf {% data variables.product.prodname_dotcom %} reaktiviert und der Benutzername wiederhergestellt.

Du kannst Gruppen in deinem IdP dazu verwenden, die Mitgliedschaft in Teams innerhalb der Organisationen deines Unternehmens zu verwalten. Dadurch kannst du den Repositoryzugriff und die Berechtigungen über deinen IdP konfigurieren. Weitere Informationen findest du unter [Verwalten von Teammitgliedschaften mit Identitätsanbietergruppen](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups).

## <a name="prerequisites"></a>Voraussetzungen

Bevor du die Bereitstellung für {% data variables.product.prodname_emus %} konfigurieren kannst, musst du das einmalige Anmelden mit SAML konfigurieren. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users).

## <a name="creating-a-personal-access-token"></a>Erstellen eines persönlichen Zugriffstokens

Du benötigst ein persönliches Zugriffstoken mit dem Bereich **admin:enterprise**, das zum Setupbenutzer gehört, um die Bereitstellung für {% data variables.product.prodname_emu_enterprise %} zu konfigurieren.

{% warning %}

**Warnung:** Wenn das Token abläuft oder ein bereitgestellter Benutzer das Token erstellt, funktioniert die Bereitstellung mit SCIM möglicherweise unerwartet nicht mehr. Stelle sicher, dass du das Token erstellst, während du als Setupbenutzer angemeldet bist, und dass das Ablaufdatum des Tokens auf „Kein Ablauf“ festgelegt ist.

{% endwarning %}

1. Melde dich auf {% data variables.product.prodname_dotcom_the_website %} als Setupbenutzer für dein neues Unternehmen mit dem Namen **@<em>KURZCODE</em>_admin** an.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
1. Gib dem Token unter **Hinweis** einen aussagekräftigen Namen.
   ![Screenshot, auf dem der Name des Tokens angezeigt wird](/assets/images/help/enterprises/emu-pat-name.png)
1. Wähle das Dropdownmenü **Ablaufdatum** aus, und klicke dann auf **Kein Ablauf**.
   ![Screenshot, auf dem das Ablaufdatum des Tokens auf „Kein Ablauf“ festgelegt wurde](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. Wähle den Bereich **admin:enterprise** aus.
   ![Screenshot, auf dem der Bereich „admin:enterprise“ angezeigt wird](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. Klicke dann auf **Token generieren**.
   ![Die Schaltfläche „Token generieren“](/assets/images/help/settings/generate_token.png)
1. Klicke auf {% octicon "paste" aria-label="The copy icon" %}, um das Token in deine Zwischenablage zu kopieren.
   ![Das neu erstellte Token](/assets/images/help/settings/personal_access_tokens.png)
2. Speichere das neue Token sicher in einem Kennwort-Manager, um es später verwenden zu können.

## <a name="configuring-provisioning-for--data-variablesproductprodname_emus-"></a>Konfigurieren der Bereitstellung für {% data variables.product.prodname_emus %}

Nachdem du dein persönliches Zugangstoken erstellt und sicher gespeichert hast, kannst du die Bereitstellung bei deinem Identitätsanbieter konfigurieren.

{% data reusables.scim.emu-scim-rate-limit %}

In der Azure AD-Dokumentation findest du unter [Tutorial: Konfigurieren von GitHub Enterprise Managed Users für die automatische Benutzerbereitstellung](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) weitere Informationen zum Konfigurieren von Azure Active Directory zur Bereitstellung von Benutzern für {% data variables.product.prodname_emu_enterprise %}.

Weitere Informationen zum Konfigurieren von Okta zur Bereitstellung von Benutzern für dein {% data variables.product.prodname_emu_enterprise %} findest du unter [Konfigurieren der SCIM-Bereitstellung für Enterprise Managed Users mit Okta](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta).

