---
title: Konfigurieren von SAML Single Sign-On für verwaltete Enterprise-Benutzer*innen
shortTitle: SAML for managed users
intro: You can automatically manage access to your enterprise account on {% data variables.product.prodname_dotcom %} by configuring Security Assertion Markup Language (SAML) single sign-on (SSO).
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users
versions:
  ghec: '*'
type: tutorial
topics:
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: fc932d913cb104f4555e4151620469769b4ef99a
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145106748"
---
## <a name="about-saml-single-sign-on-for--data-variablesproductprodname_emus-"></a>Informationen zu SAML Single Sign-On für {% data variables.product.prodname_emus %}

Mit {% data variables.product.prodname_emus %} verwendet dein Unternehmen SAML SSO für die Authentifizierung aller Mitglieder. Anstatt sich bei {% data variables.product.prodname_dotcom %} mit einem {% data variables.product.prodname_dotcom %}-Benutzernamen und -Kennwort anzumelden, erfolgt die Anmeldung von Unternehmensmitgliedern über deinen IdP.

{% data variables.product.prodname_emus %} bietet Unterstützung für die folgenden IdP:

{% data reusables.enterprise-accounts.emu-supported-idps %}

Nach der Konfiguration von SAML SSO wird empfohlen, die Wiederherstellungscodes zu speichern, damit du den Zugriff auf dein Unternehmen wiederherstellen kannst, falls dein Identitätsanbieter nicht verfügbar ist.

{% note %}

**Hinweis:** Wenn SAML SSO aktiviert ist, ist das SAML-Zertifikat die einzige Einstellung, die du in {% data variables.product.prodname_dotcom %} für deine bestehende SAML-Konfiguration aktualisieren kannst. Wenn du die Anmelde-URL oder den Aussteller aktualisieren musst, musst du zunächst SAML SSO deaktivieren und dann mit den neuen Einstellungen neu konfigurieren.

{% endnote %}

## <a name="configuring-saml-single-sign-on-for--data-variablesproductprodname_emus-"></a>Konfigurieren von SAML Single Sign-On für {% data variables.product.prodname_emus %}

Du musst eine Anwendung bei deinem IdP und anschließend dein Unternehmen auf GitHub.com konfigurieren, um SAML SSO für {% data variables.product.prodname_emu_enterprise %} zu konfigurieren. Nach der Konfiguration von SAML SSO kannst du die Benutzerbereitstellung konfigurieren. 

Du benötigst einen Mandanten und Administratorzugriff bei einem unterstützten IdP, um die {% data variables.product.prodname_emu_idp_application %}-Anwendung bei deinem IdP zu installieren und zu konfigurieren.

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

1. [Konfigurieren des Identitätsanbieters](#configuring-your-identity-provider)
2. [Konfigurieren deines Unternehmens](#configuring-your-enterprise)
3. [Aktivieren der Bereitstellung](#enabling-provisioning)

### <a name="configuring-your-identity-provider"></a>Konfigurieren des Identitätsanbieters

Befolge die Anweisungen zur Konfiguration der {% data variables.product.prodname_emu_idp_application %}-Anwendung bei deinem IdP, um deinen IdP zu konfigurieren.

1. Klicke auf den Link für den entsprechenden IdP, um die {% data variables.product.prodname_emu_idp_application %}-Anwendung zu installieren:

     - [{% data variables.product.prodname_emu_idp_application %}-Anwendung in Azure Active Directory](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview)
     - [{% data variables.product.prodname_emu_idp_application %}-Anwendung in Okta](https://www.okta.com/integrations/github-enterprise-managed-user)

1. Klicke auf den folgenden Link, und befolge die Anweisungen deines IdP, um die {% data variables.product.prodname_emu_idp_application %}-Anwendung und deinen IdP zu konfigurieren:

     - [Azure Active Directory-Tutorial für {% data variables.product.prodname_emus %}](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial)
     - [Okta-Dokumentation für {% data variables.product.prodname_emus %}](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-GitHub-Enterprise-Managed-User.html)

1. Damit du dein Unternehmen testen und konfigurieren kannst, musst du dir oder dem Benutzer, der SAML SSO konfiguriert, auf {% data variables.product.prodname_dotcom %} der {% data variables.product.prodname_emu_idp_application %}-Anwendung bei deinem IdP zuweisen.

1. Damit du dein Unternehmen auch weiterhin auf {% data variables.product.prodname_dotcom %} konfigurieren kannst, musst du die folgenden Informationen in der Anwendung suchen, die du bei deinem IdP installiert hast, und diese notieren:

    | Wert | Andere Namen | BESCHREIBUNG |
    | :- | :- | :- |
    | Anmelde-URL des IdP | Anmelde-URL, IdP-URL | Anwendungs-URL bei deinem IdP |
    | Bezeichner-URL des IdP | Issuer (Aussteller) | Bezeichner des IdP für Dienstanbieter für die SAML-Authentifizierung |
    | Signaturzertifikat, Base64-codiert | Öffentliches Zertifikat | Öffentliches Zertifikat, das der IdP zum Signieren von Authentifizierungsanforderungen verwendet |

### <a name="configuring-your-enterprise"></a>Konfigurieren deines Unternehmens

Nachdem du die {% data variables.product.prodname_emu_idp_application %}-Anwendung bei deinem Identitätsanbieter installiert und konfiguriert hast, kannst du dein Unternehmen konfigurieren. 

1. Melde dich auf {% data variables.product.prodname_dotcom_the_website %} als Setupbenutzer für dein neues Unternehmen mit dem Namen **@<em>KURZCODE</em>_admin** an.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. Wähle unter „SAML Single Sign-On“ die Option **SAML-Authentifizierung erzwingen** aus.
  ![Kontrollkästchen zum Aktivieren von SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)

1. Gib unter **Anmelde-URL** den HTTPS-Endpunkt deines IdP für SSO-Anforderungen an, den du dir bei der Konfiguration des IdP notiert hast.
![Feld für die URL, auf die Mitglieder bei der Anmeldung weitergeleitet werden](/assets/images/help/saml/saml_sign_on_url_business.png)

1. Gib unter **Aussteller** die SAML-Aussteller-URL ein, die du dir bei der Konfiguration des IdP notiert hast, um die Authentizität gesendeter Nachrichten zu überprüfen.
![Feld für den Namen des SAML-Ausstellers](/assets/images/help/saml/saml_issuer.png)

1. Füge unter **Öffentliches Zertifikat** das Zertifikat ein, das du dir bei der Konfiguration des IdP notiert hast, um SAML-Antworten zu überprüfen.
![Feld für das öffentliche Zertifikat des Identitätsanbieters](/assets/images/help/saml/saml_public_certificate.png)

1. Um die Integrität der Anforderungen von deinem SAML-Aussteller zu überprüfen, klicke auf {% octicon "pencil" aria-label="The edit icon" %}. Wähle dann in den Dropdownlisten „Signaturmethode“ und „Digestmethode“ den Hashalgorithmus aus, den dein SAML-Aussteller verwendet.
![Dropdownlisten für die Hashalgorithmen der Signaturmethode und Digestmethode, die dein SAML-Aussteller verwendet](/assets/images/help/saml/saml_hashing_method.png)

1. Klicke auf **SAML-Konfiguration testen**, bevor du SAML SSO für dein Unternehmen aktivierst, um dich zu vergewissern, dass die eingegebenen Informationen korrekt sind. ![Schaltfläche zum Testen der SAML-Konfiguration vor dem Erzwingen](/assets/images/help/saml/saml_test.png)

1. Klicke auf **Speichern**.

    {% note %}

    **Hinweis:** Wenn du SAML SSO für dein Unternehmen erzwingst, hat der Setupbenutzer keinen Zugriff mehr auf das Unternehmen, bleibt jedoch bei GitHub angemeldet. Nur {% data variables.product.prodname_managed_users %}, die von deinem IdP bereitgestellt wurden, haben Zugriff auf das Unternehmen.

    {% endnote %}

{% data reusables.enterprise-accounts.download-recovery-codes %}


### <a name="enabling-provisioning"></a>Aktivieren der Bereitstellung

Nach der SAML SSO-Aktivierung kannst du die Bereitstellung aktivieren. Weitere Informationen findest du unter [Konfigurieren der SCIM-Bereitstellung für verwaltete Unternehmensbenutzer](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users).

