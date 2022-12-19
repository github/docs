---
title: 'Informationen zu {% data variables.product.prodname_emus %}'
shortTitle: About managed users
intro: 'Du kannst Identität und Zugriff für deine Unternehmensmitglieder auf {% data variables.product.prodname_dotcom %} über deinen Identitätsanbieter zentral verwalten.'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e24ae7adb9f5c2efbb08be63788dae1eff501d99
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192697'
---
## Informationen zu {% data variables.product.prodname_emus %}

Mit {% data variables.product.prodname_emus %} kannst du die Benutzerkonten der Unternehmensmitglieder über deinen Identitätsanbieter (Identity Provider, IdP) steuern. Benutzer, die der Anwendung {% data variables.product.prodname_emu_idp_application %} auf dem IdP zugewiesen sind, werden als neue Benutzerkonten auf {% data variables.product.prodname_dotcom %} bereitgestellt und deinem Unternehmen hinzugefügt. Du steuerst Benutzernamen, Profildaten, Teammitgliedschaft und Repositoryzugriff für die Benutzerkonten über den IdP.

Auf deinem IdP kannst du jedem {% data variables.enterprise.prodname_managed_user %} die Rolle des Benutzers, des Unternehmensbesitzers oder des Abrechnungs-Managers zuweisen. {% data variables.enterprise.prodname_managed_users_caps %} können Organisationen innerhalb deines Unternehmens besitzen und andere {% data variables.enterprise.prodname_managed_users %} den Organisationen und Teams innerhalb des Unternehmens hinzufügen. Weitere Informationen findest du unter [Rollen in einem Unternehmen](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise) und [Informationen zu Organisationen](/organizations/collaborating-with-groups-in-organizations/about-organizations).

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} Weitere Informationen findest du unter [Informationen zur Unterstützung der Richtlinie für bedingten Zugriff deines IdP](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy).

{% endif %}

Du kannst für {% data variables.enterprise.prodname_managed_users %} Zugriff gewähren und die Möglichkeit bieten, Beiträge zu Repositorys innerhalb deines Unternehmens zu leisten, doch {% data variables.enterprise.prodname_managed_users %} sind nicht dazu in der Lage, öffentliche Inhalte zu erstellen oder mit anderen Benutzer*innen, Organisationen und Unternehmen im übrigen Bereich von {% data variables.product.prodname_dotcom %} zusammenzuarbeiten. Weitere Informationen findest du unter [Möglichkeiten und Einschränkungen von {% data variables.enterprise.prodname_managed_users %}](#abilities-and-restrictions-of-enterprise-managed-users).

Die Benutzernamen der {% data variables.enterprise.prodname_managed_users %} deines Unternehmens und ihre Profilinformationen, z. B. Anzeigenamen und E-Mail-Adressen, werden durch deinen IdP festgelegt und können von den Benutzer*innen selbst nicht geändert werden. Weitere Informationen findest du unter [Benutzernamen und Profilinformationen](#usernames-and-profile-information).

Unternehmensbesitzer*innen können alle Aktionen der {% data variables.enterprise.prodname_managed_users %} auf {% data variables.product.prodname_dotcom %} überprüfen. Weitere Informationen findest du unter [Überwachungsprotokollereignisse für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise).

Zum Verwenden von {% data variables.product.prodname_emus %} benötigst du einen separaten Unternehmenskontotyp mit Aktivierung von {% data variables.product.prodname_emus %}. Weitere Informationen zum Erstellen dieses Kontos findest du unter [Informationen zu Unternehmen mit verwalteten Benutzern](#about-enterprises-with-managed-users).

{% note %}

**Hinweis:** Es gibt mehrere Optionen für die Identitäts- und Zugriffsverwaltung mit {% data variables.product.prodname_ghe_cloud %}, wobei {% data variables.product.prodname_emus %} nicht die beste Lösung für jeden Kunden ist. Weitere Informationen darüber, ob {% data variables.product.prodname_emus %} für dein Unternehmen geeignet ist, findest du unter [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise).

{% endnote %}

## Informationen zum Verwalten der Organisationsmitgliedschaft

Organisationsmitgliedschaften können manuell verwaltet oder automatisch mithilfe von IdP-Gruppen aktualisiert werden. Um Organisationsmitgliedschaften über deinen IdP zu verwalten, müssen die Mitglieder einer IdP-Gruppe hinzugefügt werden, und die Gruppe muss mit einem Team innerhalb der Organisation verbunden sein. Weitere Informationen zum automatischen Verwalten von Organisation und Teammitgliedschaft findest du unter [Verwalten von Teammitgliedschaften mit Identitätsanbietergruppen](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups).

Die Art, wie Mitglieder zu einer Organisation hinzugefügt werden, die deinem Unternehmen gehört – entweder über IdP-Gruppen oder manuell – bestimmt, wie sie aus einer Organisation entfernt werden müssen. 

- Wenn ein Mitglied einer Organisation manuell hinzugefügt wurde, musst du es manuell entfernen. Wenn du seine Zuweisung zur {% data variables.product.prodname_emu_idp_application %}-Anwendung auf deinem IdP aufhebst, wird das Mitglied gesperrt, jedoch nicht aus der Organisation entfernt.
- Wenn Benutzer*innen Mitglieder einer Organisation wurden, da sie zu IdP-Gruppen hinzugefügt wurden, die einem oder mehreren Teams in der Organisation zugeordnet sind, werden sie, wenn sie aus _allen_ zugeordneten IDP-Gruppen entfernt werden, die der Organisation zugeordnet sind, auch aus der Organisation entfernt.

Um zu ermitteln, wie ein Mitglied einer Organisation hinzugefügt wurde, kannst du die Mitgliederliste nach Typ filtern. Weitere Informationen findest du unter [Anzeigen von Personen in deinem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users).

## Unterstützung für Identitätsanbieter

{% data variables.product.prodname_emus %} unterstützt die folgenden IdPs{% ifversion oidc-for-emu %} und Authentifizierungsmethoden:

|                                  | SAML                                          | OIDC                                          |
|----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Azure Active Directory           | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %} |
| Okta                             | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## Möglichkeiten und Einschränkungen von {% data variables.enterprise.prodname_managed_users %}

{% data variables.enterprise.prodname_managed_users_caps %} können nur zu privaten und internen Repositorys innerhalb ihres Unternehmens und privaten Repositorys im Besitz ihres Benutzerkontos beitragen. {% data variables.enterprise.prodname_managed_users_caps %} haben schreibgeschützten Zugriff auf die breitere {% data variables.product.prodname_dotcom %}-Community. Diese Sichtbarkeits- und Zugriffsbeschränkungen für Benutzer und Inhalte gelten für alle Anforderungen, einschließlich API-Anforderungen.

* {% data variables.enterprise.prodname_managed_users_caps %} können weder zu Organisationen oder Repositorys außerhalb des Unternehmens eingeladen werden noch können die {% data variables.enterprise.prodname_managed_users %} zu anderen Unternehmen eingeladen werden. 
* Externe Projektmitarbeiter werden von {% data variables.product.prodname_emus %} nicht unterstützt.
* {% data variables.enterprise.prodname_managed_users_caps %} können keine Issues oder Pull Requests in Repositorys außerhalb des Unternehmens erstellen, Kommentare oder Reaktionen zu ihnen hinzufügen sowie diese nicht mit Sternen versehen, überwachen oder forken.
* {% data variables.enterprise.prodname_managed_users_caps %} können alle öffentlichen Repositorys auf {% data variables.product.prodname_dotcom_the_website %} anzeigen, jedoch keinen Code an Repositorys außerhalb des Unternehmens pushen.
* {% data variables.enterprise.prodname_managed_users_caps %} und die Inhalte, die sie erstellen, sind nur für andere Mitglieder des Unternehmens sichtbar. 
* {% data variables.enterprise.prodname_managed_users_caps %} können Benutzer*innen außerhalb des Unternehmens nicht folgen.
* {% data variables.enterprise.prodname_managed_users_caps %} können keine Gists erstellen und kommentieren.
* {% data variables.enterprise.prodname_managed_users_caps %} können keine Starterworkflows für {% data variables.product.prodname_actions %} erstellen.
* {% data variables.enterprise.prodname_managed_users_caps %} können {% data variables.product.prodname_github_apps %} nicht auf ihren Benutzerkonten installieren.
* Andere {% data variables.product.prodname_dotcom %}-Benutzer*innen können keine {% data variables.enterprise.prodname_managed_user %} sehen, erwähnen oder zur Zusammenarbeit einladen.
* Du kannst auswählen, ob {% data variables.enterprise.prodname_managed_users %} Repositorys im Besitz ihrer Benutzerkonten erstellen können. Weitere Informationen findest du unter [Erzwingen von Repositoryverwaltungsrichtlinien in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation).
* Wenn du {% data variables.enterprise.prodname_managed_users %} erlaubst, Repositorys im Besitz ihrer Benutzerkonten zu erstellen, können sie nur private Repositorys besitzen und nur andere Unternehmensmitglieder einladen, an ihren Benutzerrepositorys mitzuarbeiten.
* {% data reusables.enterprise-accounts.emu-forks %}
* Je nach Sichtbarkeitseinstellungen für Organisations- und Unternehmensrepositorys können nur private und interne Repositorys in Organisationen im Besitz eines {% data variables.enterprise.prodname_emu_enterprise %} erstellt werden. 
* {% data variables.enterprise.prodname_managed_users_caps %} können {% data variables.product.prodname_pages %} nur eingeschränkt verwenden. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users).

## Erste Schritte mit {% data variables.product.prodname_emus %}

Ehe deine Entwickler {% data variables.product.prodname_ghe_cloud %} mit {% data variables.product.prodname_emus %} verwenden können, musst du eine Reihe von Konfigurationsschritten durchführen.

1. Zum Verwenden von {% data variables.product.prodname_emus %} benötigst du einen separaten Unternehmenskontotyp mit Aktivierung von {% data variables.product.prodname_emus %}. Zum Ausprobieren von {% data variables.product.prodname_emus %} oder zum Besprechen von Optionen zum Migrieren deines vorhandenen Unternehmens kannst du dich an das [{% data variables.product.prodname_dotcom %}-Vertriebsteam wenden](https://enterprise.github.com/contact).
  
  Dein Ansprechpartner im GitHub-Vertriebsteam arbeitet mit dir zusammen, um dein neues {% data variables.enterprise.prodname_emu_enterprise %} zu erstellen. Du musst die E-Mail-Adresse für den Benutzer bereitstellen, der dein Unternehmen einrichtet, und einen kurzen Code, der als Suffix für die Benutzernamen deiner Unternehmensmitglieder verwendet wird. {% data reusables.enterprise-accounts.emu-shortcode %} Weitere Informationen findest du unter [Benutzernamen und Profilinformationen](#usernames-and-profile-information).
  
2. Nachdem das Unternehmen erstellt ist, erhältst du eine E-Mail von {% data variables.product.prodname_dotcom %}, in der du gebeten wirst, ein Kennwort für den Setupbenutzer deines Unternehmens auszuwählen, der als erster Besitzer des Unternehmens geführt wird. Verwende den Inkognito-Modus oder ein privates Browserfenster beim Festlegen des Kennworts. Der Setupbenutzer wird nur zum Konfigurieren der SSO- und SCIM-Bereitstellungsintegration für das Unternehmen verwendet. Der Setupbenutzer hat keinen Zugriff mehr auf die Verwaltung des Unternehmenskontos, nachdem SSO erfolgreich aktiviert wurde. Der Benutzername des Setupbenutzers ist der kurze Code deines Unternehmens mit dem Suffix `_admin`. 
  
  {% note %}
  
  {% data reusables.enterprise-accounts.emu-password-reset-session %}
  
  {% endnote %}
  
3. Nachdem du dich als Setupbenutzer angemeldet hast, empfehlen wir die Aktivierung der zweistufigen Authentifizierung. Weitere Informationen findest du unter [Konfigurieren der zweistufigen Authentifizierung](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

1. Konfiguriere zunächst {% ifversion oidc-for-emu %}, wie sich deine Mitglieder authentifizieren sollen. Wenn du Azure Active Directory als Identitätsanbieter verwendest, kannst du zwischen OpenID Connect (OIDC) und Security Assertion Markup Language (SAML) wählen. OIDC wird empfohlen, da es auch Unterstützung für Richtlinien für bedingten Zugriff (Conditional Access Policies, CAP) umfasst. Wenn du mehrere Unternehmen mit {% data variables.enterprise.prodname_managed_users %} benötigst, die über einen Mandanten bereitgestellt werden, musst du SAML für jedes Unternehmen nach dem ersten verwenden. Wenn du Okta als Identitätsanbieter verwendest, kannst du SAML für die Authentifizierung deiner Mitglieder nutzen.{% else %}SAML SSO für dein Unternehmen. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users).{% endif %}
  
  {% ifversion oidc-for-emu %}
  
  Lies zunächst den Leitfaden für deine gewählte Authentifizierungsmethode.
  
    - [Konfigurieren von OIDC für Enterprise Managed Users](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)
    - [Konfigurieren von SAML Single Sign-On für Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)
  
  {% endif %}
  
4. Sobald du SSO konfiguriert hast, kannst du die SCIM-Bereitstellung konfigurieren. SCIM ist dafür zuständig, wie dein Identitätsanbieter {% data variables.enterprise.prodname_managed_users %} auf {% data variables.product.prodname_dotcom_the_website %} zu erstellen. Weitere Informationen findest du unter [Konfigurieren der SCIM-Bereitstellung für Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users).
  
5. Sobald die Authentifizierung und Bereitstellung konfiguriert sind, kannst du mit der Verwaltung der Organisationsmitgliedschaft für deine {% data variables.enterprise.prodname_managed_users %} beginnen, indem du IdP-Gruppen mit Teams synchronisierst. Weitere Informationen findest du unter [Verwalten von Teammitgliedschaften mit Identitätsanbietergruppen](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups).

Wenn Mitglieder deines Unternehmens eine einzige Arbeitsstation verwenden müssen, um an Repositorys auf {% data variables.location.product_location %} sowohl über ein {% data variables.enterprise.prodname_managed_user %} als auch über ein persönliches Konto mitzuwirken, kannst du Support bereitstellen. Weitere Informationen findest du unter [Unterstützen von Entwicklern mit mehreren Benutzerkonten auf {% data variables.product.prodname_dotcom_the_website %}](#supporting-developers-with-multiple-user-accounts-on-githubcom).

## Authentifizieren als {% data variables.enterprise.prodname_managed_user %}

{% data variables.enterprise.prodname_managed_users_caps %} müssen sich über ihren Identitätsanbieter authentifizieren. Zum Authentifizieren kann ein {% data variables.enterprise.prodname_managed_user %} sein IdP-Anwendungsportal besuchen oder die Anmeldeseite auf {% data variables.product.prodname_dotcom_the_website %} verwenden. 

Wenn nicht authentifizierte Benutzer*innen versuchen, auf ein Unternehmen mit {% data variables.product.prodname_emus %} zuzugreifen, zeigt {% data variables.product.company_short %} standardmäßig den Fehler 404 an. Unternehmensbesitzer*innen können optional automatische Umleitungen zum einmaligen Anmelden (SSO) anstelle des Fehlers 404 aktivieren. Weitere Informationen findest du unter [Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users).

{% data reusables.enterprise-accounts.about-recovery-codes %} Weitere Informationen findest du unter [Verwalten von Wiederherstellungscodes für dein Unternehmen](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise).

### Authentifizieren als {% data variables.enterprise.prodname_managed_user %} über {% data variables.product.prodname_dotcom_the_website %}

1. Navigiere zu [https://github.com/login](https://github.com/login).
1. Gib im Textfeld „Username or email address“ (Benutzername oder E-Mail-Adresse) deinen Benutzernamen ein, einschließlich des Unterstrichs und des kurzen Codes.
  ![Screenshot mit Anmeldeformular](/assets/images/help/enterprises/emu-login-username.png) Wenn dein Benutzername vom Formular erkannt wird, wird das Formular aktualisiert. Du musst dein Kennwort in diesem Formular nicht eingeben.
1. Klicke auf **Sign in with your identity provider** (Anmelden mit Identitätsanbieter), um den Vorgang über deinen Identitätsanbieter fortzusetzen.
  ![Screenshot mit der Schaltfläche „Sign in with your identity provider“ (Anmelden mit Identitätsanbieter)](/assets/images/help/enterprises/emu-login-submit.png)

## Benutzernamen und Profilinformationen

{% data variables.product.product_name %} erstellt automatisch einen Benutzernamen für jede Person, indem ein von deinem IdP bereitgestellter Bezeichner normalisiert wird. Weitere Informationen findest du unter [Überlegungen zu Benutzernamen zur externen Authentifizierung](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

Bei der Bereitstellung von Benutzern kann ein Konflikt auftreten, wenn die eindeutigen Teile des von deinem IdP bereitgestellten Bezeichners während der Normalisierung entfernt werden. Wenn du einen Benutzer aufgrund eines Benutzernamenskonflikts nicht bereitstellen kannst, solltest du den vom IdP bereitgestellten Benutzernamen ändern. Weitere Informationen findest du unter [Beheben von Problemen mit Benutzernamen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-problems).

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %} 

Der Profilname und die E-Mail-Adresse von einem {% data variables.enterprise.prodname_managed_user %} wird auch vom IdP bereitgestellt. {% data variables.enterprise.prodname_managed_users_caps %} können ihren Profilnamen oder ihre E-Mail-Adresse auf {% data variables.product.prodname_dotcom %} nicht ändern, und der IdP kann nur eine einzelne E-Mail-Adresse bereitstellen.

## Unterstützen von Entwickler*innen mit mehreren Benutzerkonten auf {% data variables.location.product_location %}

Personen in deinem Team müssen möglicherweise an Ressourcen auf {% data variables.location.product_location %} mitwirken, die sich außerhalb deines {% data variables.enterprise.prodname_emu_enterprise %} befinden. Beispielsweise möchtest du ein separates Unternehmen für die Open-Source Projekte deines Unternehmens verwalten. Da ein {% data variables.enterprise.prodname_managed_user %} nicht an öffentlichen Ressourcen mitwirken kann, müssen Benutzer*innen für diese Arbeit über ein separates, persönliches Konto verfügen.

Personen, die von zwei Benutzerkonten auf {% data variables.location.product_location %} und mithilfe einer einzigen Arbeitsstation mitwirken müssen, können Git für einen vereinfachten Prozess konfigurieren. Weitere Informationen findest du unter [Verwalten mehrerer Konten](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts).
