---
title: Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen
intro: 'Du kannst Richtlinien erzwingen, um SIcherheitseinstellungen in den Organisationen deines Unternehmens zu erzwingen oder Richtlinien in jeder Organisation festlegen zu lassen.'
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Policies for security settings
ms.openlocfilehash: 7a383ed586d084a7e2562a5927dd198caca65037
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183964'
---
## Informationen über Richtlinien für Sicherheitseinstellungen in deinem Unternehmen

Du kannst Richtlinien zur Kontrolle der Sicherheitseinstellungen für Organisationen, die deinem Unternehmen gehören, auf {% data variables.product.product_name %} erzwingen. Standardmäßig können Organisationseigentümer Sicherheitseinstellungen verwalten. 

{% ifversion ghec or ghes %}

## Zwei-Faktor-Authentifizierung für Organisationen in deinem Enterprise vorschreiben

Unternehmenseigentümer können verlangen, dass Organisationsmitglieder, Abrechnungsmanager und externe Mitarbeiter in allen Organisationen, die einem Unternehmen gehören, eine Zwei-Faktor-Authentifizierung verwenden, um ihre Benutzerkonten zu sichern.

Bevor du 2FA für alle Organisationen deines Unternehmens fordern kannst, musst du die Zwei-Faktor-Authentifizierung für dein eigenes Konto aktivieren. Weitere Informationen findest du unter [Schützen deines Kontos mit der zweistufigen Authentifizierung (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa/).

{% warning %}

**Warnungen:**

- Wenn du für dein Unternehmen eine zweistufige Authentifizierung verlangst, werden Mitglieder, externe Mitarbeiter und Abrechnungsmanager (einschließlich Bot-Konten) in allen Organisationen deines Unternehmens, die keine 2FA verwenden, aus der Organisation entfernt und verlieren den Zugriff auf ihre Repositorys. Gleichzeitig verlieren sie auch den Zugriff auf ihre Forks der privaten Repositorys der Organisation. Du kannst die Zugangsberechtigungen und Einstellungen wiederherstellen, wenn sie innerhalb von drei Monaten nach ihrem Ausscheiden aus deiner Organisation die zweistufige Authentifizierung für ihr Konto aktivieren. Weitere Informationen findest du unter [Reaktivieren eines ehemaligen Mitglieds deiner Organisation](/articles/reinstating-a-former-member-of-your-organization).
- Alle Organisationsinhaber, Mitglieder, Abrechnungsmanager und externen Mitarbeiter der Organisationen deines Unternehmens, die die 2FA für ihr Konto deaktivieren, nachdem du die 2FA vorgeschrieben hast, werden automatisch aus der Organisation entfernt.
- Wenn du der oder die einzige Inhaber*in eines Unternehmens bist, das die zweistufige Authentifizierung vorschreibt, kannst du diese für dein Benutzerkonto nicht deaktivieren, ohne die erforderliche zweistufige Authentifizierung für das gesamte Unternehmen zu deaktivieren.

{% endwarning %}

Bevor du die Zwei-Faktor-Authentifizierung vorschreiben, empfehlen wir, Organisationsmitglieder, externe Mitarbeiter und Abrechnungsmanager über diesen Schritt zu informieren und sie darum zu bitten, die Zwei-Faktor-Authentifizierung für ihre Konten einzurichten. Organisationsinhaber können auf der Personenseite ihrer Organisationen sehen, ob Mitglieder und externe Mitarbeiter bereits die 2FA verwenden. Weitere Informationen findest du unter [Anzeigen, ob Benutzer*innnen in deiner Organisation 2FA aktiviert haben](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
4. Überprüfe unter „Two-factor authentication“ (Zwei-Faktor-Authentifizierung) die Informationen zum Ändern der Einstellung. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Wähle unter "zweistufige Authentifizierung" die **Option Zwei-Faktor-Authentifizierung für alle Organisationen in deinem Unternehmen vorschreiben** und klicke dann auf **Speichern**.
  ![Kontrollkästchen zum Vorschreiben der Zwei-Faktor-Authentifizierung](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. Wenn du dazu aufgefordert wirst, lies die Informationen zu Mitgliedern und externen Mitarbeitern, die aus den Organisationen deines Unternehmens entfernt werden. Zur Bestätigung der Änderung gib den Namen deines Unternehmens ein und klicke dann auf **Mitglieder entfernen & Zwei-Faktor-Authentifizierung anfordern**.
  ![Kontrollkästchen zum Bestätigen der Erzwingung der zweistufigen Authentifizierung](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Wenn Mitglieder oder externe Mitarbeiter aus den Organisationen deines Unternehmens entfernt werden, empfehlen wir optional, ihnen eine Einladung zum Wiederherstellen ihrer früheren Berechtigungen und ihres Zugriffs auf deine Organisation zu senden. Vor der Annahme dieser Einladung müssen diese Benutzer die Zwei-Faktor-Authentifizierung aktivieren.

{% endif %}

## Verwalten von SSH-Zertifizierungsstellen für dein Unternehmen

Du kannst eine SSH-Zertifizierungsstelle (CA) verwenden, um Mitgliedern jeder Organisation, die zu deinem Unternehmen gehört, den Zugriff auf Repositorys dieser Organisation mit von Dir bereitgestellten SSH-Zertifikaten zu ermöglichen. {% data reusables.organizations.can-require-ssh-cert %} Weitere Informationen findest du unter „[Informationen zu SSH-Zertifizierungsstellen](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).“

{% data reusables.organizations.add-extension-to-cert %}

### Eine SSH-Zertifizierungsstelle hinzufügen

Wenn du für dein Unternehmen SSH-Zertifikate benötigst, sollten Unternehmensmitglieder eine spezielle URL für Git-Vorgänge über SSH verwenden. Weitere Informationen findest du unter [Informationen zu SSH-Zertifizierungsstellen](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

### Eine SSH-Zertifizierungsstelle löschen

Das Löschen einer Zertifizierungsstelle kann nicht rückgängig gemacht werden. Wenn du dieselbe Zertifizierungsstelle in Zukunft wieder verwenden möchtest, musst du sie erneut hochladen.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.organizations.delete-ssh-ca %}

{% ifversion sso-redirect %}
## Verwalten des einmaligen Anmeldens für nicht authentifizierte Benutzer*innen

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

Wenn dein Unternehmen {% data variables.product.prodname_emus %} verwendet, kannst du auswählen, was nicht authentifizierten Benutzer*innen angezeigt wird, wenn sie versuchen, auf die Ressourcen deines Unternehmens zuzugreifen. Weitere Informationen zu {% data variables.product.prodname_emus %} findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users).

Wenn nicht authentifizierte Benutzer*innen versuchen, auf dein Unternehmen zuzugreifen, zeigt {% data variables.product.company_short %} standardmäßig den Fehler 404 an, um keine privaten Ressourcen offenzulegen.

Um die Entwickler*innen nicht zu verwirren, kannst du dieses Verhalten ändern, sodass Benutzer*innen automatisch über deinen Identitätsanbieter (IdP) zum einmaligen Anmelden (Single Sign-On, SSO) weitergeleitet werden. Wenn du automatische Umleitungen aktivierst, können alle, die auf URLs für Ressourcen deines Unternehmens zugreifen, sehen, dass die Ressource vorhanden ist. Sie können die Ressource selbst jedoch nur anzeigen, wenn sie über entsprechenden Zugriff verfügen, nachdem sie sich bei deinem Identitätsanbieter authentifiziert haben.

{% note %}

**Hinweis:** Wenn Benutzer*innen beim Versuch, auf die Ressourcen deines Unternehmens zuzugreifen, bei ihrem persönlichen Konto angemeldet sind, werden sie automatisch abgemeldet und zum einmaligen Anmelden weitergeleitet, um sich bei ihren {% data variables.enterprise.prodname_managed_user %} anzumelden. Weitere Informationen findest du unter [Verwalten mehrerer Konten](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts).

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Aktiviere oder deaktiviere unter „Einstellungen für einmaliges Anmelden“ die Option **Benutzer automatisch zur Anmeldung umleiten**.

   ![Kontrollkästchen für die Umleitung von Benutzern zur Anmeldung](/assets/images/enterprise/security/Enterprise-Redirect-Users-To-Sign-In-Checkbox.png) {% endif %}

## Weiterführende Themen

- [Informationen zur Identitäts- und Zugriffsverwaltung für Dein Unternehmen](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise) {%- ifversion ghec %}
- [Zugriff auf Complianceberichte für Dein Unternehmen](/admin/overview/accessing-compliance-reports-for-your-enterprise) {%- endif %} {%- ifversion ghec or ghae %}
- [Einschränken des Netzwerkdatenverkehrs mit einer Liste zugelassener IP-Adressen](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) {%- endif %}
