---
title: Informationen zu Enterprise Managed Users
shortTitle: About managed users
intro: You can centrally manage identity and access for your enterprise members on {% data variables.product.prodname_dotcom %} from your identity provider.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
- Accounts
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: 9ca2be64f3806cf8b7b449ea64532c5ae2b17782
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145104899"
---
## <a name="about--data-variablesproductprodname_emus-"></a>Informationen zu {% data variables.product.prodname_emus %}

Mit {% data variables.product.prodname_emus %} kannst du die Benutzerkonten der Unternehmensmitglieder über deinen Identitätsanbieter (Identity Provider, IdP) steuern. Du kannst die Authentifizierung mit SAML-SSO (einmaliges Anmelden) vereinfachen und Benutzerkonten für Unternehmensmitglieder bereitstellen und aktualisieren und Bereitstellungen von Benutzerkonten aufheben. Benutzer, die der Anwendung {% data variables.product.prodname_emu_idp_application %} auf dem IdP zugewiesen sind, werden als neue Benutzerkonten auf {% data variables.product.prodname_dotcom %} bereitgestellt und deinem Unternehmen hinzugefügt. Du steuerst Benutzernamen, Profildaten, Teammitgliedschaft und Repositoryzugriff über den IdP.

Auf deinem IdP kannst du jedem {% data variables.product.prodname_managed_user %} die Rolle des Benutzers, des Unternehmensbesitzers oder des Abrechnungs-Managers geben. {% data variables.product.prodname_managed_users_caps %} können Organisationen innerhalb deines Unternehmens besitzen und andere {% data variables.product.prodname_managed_users %} den Organisationen und Teams innerhalb des Unternehmens hinzufügen. Weitere Informationen findest du unter [Rollen in einem Unternehmen](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise) und [Informationen zu Organisationen](/organizations/collaborating-with-groups-in-organizations/about-organizations).

Die Organisationsmitgliedschaft kann manuell verwaltet oder automatisch aktualisiert werden, da {% data variables.product.prodname_managed_users %} den IdP-Gruppen hinzugefügt werden, die mit Teams innerhalb der Organisation verbunden sind. Wenn ein {% data variables.product.prodname_managed_user %} manuell einer Organisation hinzugefügt wird, wird der Benutzer durch die Aufhebung der Zuweisung in der Anwendung {% data variables.product.prodname_emu_idp_application %} auf dem IdP gesperrt, aber nicht aus der Organisation entfernt. Weitere Informationen zur automatischen Verwaltung von Organisation und Teammitgliedschaft findest du unter [Verwalten von Teammitgliedschaften mit Identitätsanbietergruppen](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups).

Du kannst für {% data variables.product.prodname_managed_users %} Zugriff gewähren und die Möglichkeit bereitstellen, Beiträge für Repositorys innerhalb deines Unternehmens zu leisten, aber {% data variables.product.prodname_managed_users %} sind nicht dazu in der Lage, öffentliche Inhalte zu erstellen oder mit anderen Benutzern, Organisationen und Unternehmen im übrigen Bereich von {% data variables.product.prodname_dotcom %} zusammenzuarbeiten. Die für dein Unternehmen bereitgestellten {% data variables.product.prodname_managed_users %} können weder für Organisationen oder Repositorys außerhalb des Unternehmens eingeladen werden noch können die {% data variables.product.prodname_managed_users %} für andere Unternehmen eingeladen werden. Externe Projektmitarbeiter werden von {% data variables.product.prodname_emus %} nicht unterstützt.

Die Benutzernamen der {% data variables.product.prodname_managed_users %} und ihre Profilinformationen, z. B. Anzeigenamen und E-Mail-Adressen, werden durch deinen IdP festgelegt und können von den Benutzern selbst nicht geändert werden. Weitere Informationen findest du unter [Benutzernamen und Profilinformationen](#usernames-and-profile-information).

{% data reusables.enterprise-accounts.emu-forks %}

Unternehmensbesitzer können alle Aktionen der {% data variables.product.prodname_managed_users %} auf {% data variables.product.prodname_dotcom %} überprüfen.

Zum Verwenden von {% data variables.product.prodname_emus %} benötigst du einen separaten Unternehmenskontotyp mit Aktivierung von {% data variables.product.prodname_emus %}. Weitere Informationen zum Erstellen dieses Kontos findest du unter [Informationen zu Unternehmen mit verwalteten Benutzern](#about-enterprises-with-managed-users).


## <a name="identity-provider-support"></a>Unterstützung für Identitätsanbieter

{% data variables.product.prodname_emus %} bietet Unterstützung für die folgenden IdP:

{% data reusables.enterprise-accounts.emu-supported-idps %}

## <a name="abilities-and-restrictions-of--data-variablesproductprodname_managed_users-"></a>Fähigkeiten und Einschränkungen in Bezug auf {% data variables.product.prodname_managed_users %}

{% data variables.product.prodname_managed_users_caps %} können nur zu privaten und internen Repositorys innerhalb ihres Unternehmens und privaten Repositorys beitragen, die ihrem Benutzerkonto gehören. {% data variables.product.prodname_managed_users_caps %} haben schreibgeschützten Zugriff auf die breitere {% data variables.product.prodname_dotcom %}-Community. Diese Sichtbarkeits- und Zugriffsbeschränkungen für Benutzer und Inhalte gelten für alle Anforderungen, einschließlich API-Anforderungen.

* {% data variables.product.prodname_managed_users_caps %} können keine Issues oder Pull Requests in Repositorys außerhalb des Unternehmens erstellen, Kommentare oder Reaktionen für Repositorys außerhalb des Unternehmens hinzufügen und Repositorys außerhalb des Unternehmen nicht mit Sternen versehen und diese Repositorys nicht überwachen oder forken.
* {% data variables.product.prodname_managed_users_caps %} können alle öffentlichen Repositorys auf {% data variables.product.prodname_dotcom_the_website %} anzeigen, jedoch keinen Code an Repositorys außerhalb des Unternehmens pushen.
* {% data variables.product.prodname_managed_users_caps %} und die Inhalte, die sie erstellen, sind nur für andere Mitglieder des Unternehmens sichtbar. 
* {% data variables.product.prodname_managed_users_caps %} können Benutzern außerhalb des Unternehmens nicht folgen.
* {% data variables.product.prodname_managed_users_caps %} können keine Gists erstellen und keine Gists kommentieren.
* {% data variables.product.prodname_managed_users_caps %} können keine {% data variables.product.prodname_github_apps %} in ihren Benutzerkonten installieren.
* Andere {% data variables.product.prodname_dotcom %}-Benutzer können keine {% data variables.product.prodname_managed_user %} anzeigen, erwähnen oder zur Zusammenarbeit einladen.
* {% data variables.product.prodname_managed_users_caps %} können nur private Repositorys besitzen, und {% data variables.product.prodname_managed_users %} können nur andere Unternehmensmitglieder dazu einladen, an ihren eigenen Repositorys zusammenzuarbeiten.
* Nur private und interne Repositorys können, je nach Sichtbarkeitseinstellungen für Organisations- und Unternehmensrepositorys, in Organisationen erstellt werden, die im Besitz von einem {% data variables.product.prodname_emu_enterprise %} sind. 
* {% data variables.product.prodname_managed_users_caps %} können nur auf {% data variables.product.prodname_pages %} verwendet werden. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users).

## <a name="about-enterprises-with-managed-users"></a>Informationen zu Unternehmen mit verwalteten Benutzern

Zum Verwenden von {% data variables.product.prodname_emus %} benötigst du einen separaten Unternehmenskontotyp mit Aktivierung von {% data variables.product.prodname_emus %}. Zum Ausprobieren von {% data variables.product.prodname_emus %} oder zum Besprechen von Optionen zum Migrieren deines vorhandenen Unternehmens kannst du dich an das [{% data variables.product.prodname_dotcom %}-Vertriebsteam wenden](https://enterprise.github.com/contact).

Dein Ansprechpartner im GitHub-Vertriebsteam arbeitet mit dir zusammen, um dein neues {% data variables.product.prodname_emu_enterprise %} zu erstellen. Du musst die E-Mail-Adresse für den Benutzer bereitstellen, der dein Unternehmen einrichtet, und einen kurzen Code, der als Suffix für die Benutzernamen deiner Unternehmensmitglieder verwendet wird. {% data reusables.enterprise-accounts.emu-shortcode %} Weitere Informationen findest du unter [Benutzernamen und Profilinformationen](#usernames-and-profile-information).

Nachdem das Unternehmen erstellt ist, erhältst du eine E-Mail von {% data variables.product.prodname_dotcom %}, in der du gebeten wirst, ein Kennwort für den Setupbenutzer deines Unternehmens auszuwählen, der als erster Besitzer des Unternehmens geführt wird. Verwende den Inkognito-Modus oder ein privates Browserfenster beim Festlegen des Kennworts. Der Setupbenutzer wird nur zum Konfigurieren der SAML-SSO- und SCIM-Bereitstellungsintegration für das Unternehmen verwendet. Der Setupbenutzer hat keinen Zugriff mehr auf die Verwaltung des Unternehmenskontos, sobald SAML erfolgreich aktiviert ist.

Der Benutzername des Setupbenutzers ist der kurze Code deines Unternehmens mit dem Suffix `_admin`. Nach der Anmeldung beim Setupbenutzer kannst du die ersten Schritte durchführen, indem du die SAML-SSO-Funktion für einmaliges Anmelden für dein Unternehmen konfigurierst. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users).

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

## <a name="authenticating-as-a--data-variablesproductprodname_managed_user-"></a>Authentifizieren als {% data variables.product.prodname_managed_user %}

{% data variables.product.prodname_managed_users_caps %} müssen sich über ihren Identitätsanbieter authentifizieren. Zum Authentifizieren kann ein {% data variables.product.prodname_managed_user %} sein IdP-Anwendungsportal besuchen oder die Anmeldeseite auf {% data variables.product.prodname_dotcom_the_website %} verwenden.

{% data reusables.enterprise-accounts.about-recovery-codes %} Weitere Informationen findest du unter [Verwalten von Wiederherstellungscodes für dein Unternehmen](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise).

### <a name="authenticating-as-a--data-variablesproductprodname_managed_user--via--data-variablesproductprodname_dotcom_the_website-"></a>Authentifizieren als {% data variables.product.prodname_managed_user %} über {% data variables.product.prodname_dotcom_the_website %}

1. Navigiere zu [https://github.com/login](https://github.com/login).
1. Gib im Textfeld „Username or email address“ (Benutzername oder E-Mail-Adresse) deinen Benutzernamen ein, einschließlich des Unterstrichs und des kurzen Codes.
  ![Screenshot mit Anmeldeformular](/assets/images/help/enterprises/emu-login-username.png) Wenn dein Benutzername vom Formular erkannt wird, wird das Formular aktualisiert. Du musst dein Kennwort in diesem Formular nicht eingeben.
1. Klicke auf **Sign in with your identity provider** (Anmelden mit Identitätsanbieter), um den Vorgang über deinen Identitätsanbieter fortzusetzen.
  ![Screenshot mit der Schaltfläche „Sign in with your identity provider“ (Anmelden mit Identitätsanbieter)](/assets/images/help/enterprises/emu-login-submit.png)

## <a name="usernames-and-profile-information"></a>Benutzernamen und Profilinformationen

{% data variables.product.product_name %} erstellt automatisch einen Benutzernamen für jede Person, indem ein von deinem IdP bereitgestellter Bezeichner normalisiert wird. Weitere Informationen findest du unter [Überlegungen zu Benutzernamen zur externen Authentifizierung](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

Bei der Bereitstellung von Benutzern kann ein Konflikt auftreten, wenn die eindeutigen Teile des von deinem IdP bereitgestellten Bezeichners während der Normalisierung entfernt werden. Wenn du einen Benutzer aufgrund eines Benutzernamenskonflikts nicht bereitstellen kannst, solltest du den vom IdP bereitgestellten Benutzernamen ändern. Weitere Informationen findest du unter [Beheben von Benutzernamenskonflikten](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-conflicts).

Der Profilname und die E-Mail-Adresse von einem {% data variables.product.prodname_managed_user %} wird auch vom IdP bereitgestellt. {% data variables.product.prodname_managed_users_caps %} können ihren Profilnamen oder ihre E-Mail-Adresse nicht auf {% data variables.product.prodname_dotcom %} ändern.
