---
title: Informationen zur Authentifizierung für dein Unternehmen
shortTitle: About authentication
intro: 'Du {% ifversion ghae %}musst SAML-SSO (Single Sign-On) konfigurieren, damit die Benutzer{% else %}kannst auswählen, wie Personen{% endif %} sich für den Zugriff auf {% ifversion ghec %}die Ressourcen deines Unternehmens auf {% data variables.product.product_name %}{% elsif ghes %}{% data variables.location.product_location %}{% elsif ghae %}dein Unternehmen auf {% data variables.product.product_name %}{% endif %} authentifizieren.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 16b5bdd98e37db2eef6fe7e4e02da1a4ce8fd406
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164372'
---
## Informationen zur Authentifizierung für dein Unternehmen

{% ifversion ghec %}

Unternehmensbesitzer*innen mit {% data variables.product.product_name %} können die Anforderungen für die Authentifizierung für und den Zugriff auf die Ressourcen eines Unternehmens steuern. 

{% data reusables.enterprise.ghec-authentication-options %}

Weitere Informationen zu diesen Optionen, um zu ermitteln, welche Methode für dein Unternehmen am besten geeignet ist, findest du unter [Identifizieren der besten Authentifizierungsmethode für dein Unternehmen](#identifying-the-best-authentication-method-for-your-enterprise).

## Authentifizierungsmethoden für {% data variables.product.product_name %}

Für die Kontenverwaltung und -authentifizierung bei {% data variables.product.product_name %} sind die folgenden Optionen verfügbar.

- [Authentifizierung über {% data variables.location.product_location %}](#authentication-through-githubcom)
- [Authentifizierung über {% data variables.location.product_location %} mit zusätzlicher SAML-Zugriffsbeschränkung](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Authentifizierung mithilfe von {% data variables.product.prodname_emus %} und Verbund](#authentication-with-enterprise-managed-users-and-federation)

### Authentifizierung über {% data variables.location.product_location %}

Standardmäßig muss jedes Mitglied ein persönliches Konto auf {% data variables.location.product_location %} erstellen. Du erteilst Zugriff auf dein Unternehmen, und die Mitglieder können auf die Ressourcen des Unternehmens zugreifen, nachdem sie sich bei ihrem Konto auf {% data variables.location.product_location %} angemeldet haben. Das Mitglied verwaltet das Konto und kann zu anderen Unternehmen, Organisationen und Repositorys auf {% data variables.location.product_location %} beitragen.

### Authentifizierung über {% data variables.location.product_location %} mit zusätzlicher SAML-Zugriffsbeschränkung

Wenn du eine zusätzliche SAML-Zugriffsbeschränkung konfigurierst, muss jedes Mitglied ein persönliches Konto auf {% data variables.location.product_location %} erstellen und verwalten. Du erteilst Zugriff auf dein Unternehmen, und das Mitglied kann auf die Ressourcen deines Unternehmens zugreifen, nachdem es sich bei seinem Konto auf {% data variables.location.product_location %} angemeldet und sich erfolgreich bei deinem SAML-Identitätsanbieter (IdP) authentifiziert hat. Das Mitglied kann mit seinem persönlichen Konto zu anderen Unternehmen, Organisationen und Repositorys auf {% data variables.location.product_location %} beitragen. Weitere Informationen zum Anfordern der SAML-Authentifizierung für Zugriff auf die Ressourcen deines Unternehmens findest du unter [Informationen zu SAML for Enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam).

Wenn du eine eigenständige Organisation mit {% data variables.product.product_name %} verwendest oder die SAML-Authentifizierung nicht für jede Organisation in deinem Unternehmen nutzen möchtest, kannst du SAML für eine einzelne Organisation konfigurieren. Weitere Informationen findest du unter [Informationen zur Identitäts- und Zugriffsverwaltung mit der einmaligen SAML-Anmeldung](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on).

### Authentifizierung mithilfe von {% data variables.product.prodname_emus %} und Verbund

Wenn du mehr Kontrolle über die Konten deiner Unternehmensmitglieder auf {% data variables.location.product_location %} benötigst, kannst du {% data variables.product.prodname_emus %} verwenden. Mit {% data variables.product.prodname_emus %} stellst du Konten für deine Unternehmensmitglieder auf {% data variables.location.product_location %} bereit und verwaltest sie mit deinem Identitätsanbieter. Jedes Mitglied meldet sich bei einem Konto an, das du erstellt hast, und dein Unternehmen verwaltet das Konto. Beiträge zum Rest von {% data variables.product.prodname_dotcom_the_website %} sind beschränkt. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users).

## Identifizieren der besten Authentifizierungsmethode für dein Unternehmen

Sowohl SAML SSO als auch {% data variables.product.prodname_emus %} erhöht die Sicherheit für die Ressourcen deines Unternehmens. {% data variables.product.prodname_emus %} ermöglicht dir darüber hinaus, die Benutzerkonten für deine Unternehmensmitglieder zu steuern und einzuschränken, was die Konten tun können. Diese Einschränkungen können jedoch für dein Unternehmen inakzeptabel sein, wenn sie die Workflows deiner Entwickler behindern.

Um festzustellen, ob dein Unternehmen mehr von SAML SSO oder {% data variables.product.prodname_emus %} profitieren würde, stelle dir diese Fragen.

- [Möchtest du die Benutzerkonten für deine Benutzer steuern?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [Welchen Identitätsanbieter verwendet dein Unternehmen?](#which-identity-provider-does-your-enterprise-use)
- [Arbeiten deine Entwickler in öffentlichen Repositorys, Gists oder {% data variables.product.prodname_pages %}-Sites?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [Sind deine Entwickler von Zusammenarbeit außerhalb deines Unternehmens abhängig?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [Ist dein Unternehmen von externen Mitarbeitern abhängig?](#does-your-enterprise-rely-on-outside-collaborators)
- [Kann dein Unternehmen Migrationskosten tolerieren?](#can-your-enterprise-tolerate-migration-costs)

### Möchtest du die Benutzerkonten für deine Benutzer steuern?

{% data variables.product.prodname_emus %} kann für dein Unternehmen geeignet sein, wenn du nicht möchtest, dass Unternehmensmitglieder ihre eigenen persönlichen Konten auf {% data variables.product.prodname_dotcom_the_website %} verwenden, um auf die Ressourcen deines Unternehmens zuzugreifen. 

Mit SAML SSO erstellen und verwalten Entwickler ihre eigenen persönlichen Konten, und jedes Konto ist mit einer SAML-Identität in deinem IdP verknüpft. {% data variables.product.prodname_emus %} funktioniert eher wie andere vertraute SSO-Lösungen, da du die Konten für deine Benutzer bereitstellst. Du kannst auch sicherstellen, dass Benutzerkonten deiner Unternehmensidentität entsprechen, indem du Benutzernamen und E-Mail-Adressen steuerst, die mit den Konten verknüpft sind. 

Wenn du derzeit verlangst, dass deine Nutzer ein neues Konto auf {% data variables.product.prodname_dotcom_the_website %} erstellen, das nur für dein Unternehmen verwendet werden darf, könnte {% data variables.product.prodname_emus %} für dich das Richtige sein. SAML SSO kann jedoch eine bessere Option sein, wenn die Verwendung deines IdP als Quelle der Wahrheit für deine Benutzer- und Zugriffsverwaltung zu viel Komplexität bedeuten würde. Beispielsweise verfügt dein Unternehmen möglicherweise nicht über einen etablierten Prozess zum Onboarding neuer Benutzer in deinem IdP.

### Welchen Identitätsanbieter verwendet dein Unternehmen?

{% data variables.product.prodname_emus %} wird für eine begrenzte Anzahl von IdPs unterstützt, während SAML SSO vollständige Unterstützung für eine größere Anzahl von IdPs bietet, sowie eingeschränkte Unterstützung für alle IdPs, die den SAML 2.0-Standard implementieren. Die Liste der unterstützten IDPs für jede Option findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support) und [Informationen zu SAML for Enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps).

Du kannst {% data variables.product.prodname_emus %} nur mit einem nicht unterstützten IdP verwenden, wenn du den nicht unterstützten IdP mit einem unterstützten IdP als Integrationspunkt verbindest. Wenn du diese zusätzliche Komplexität vermeiden möchtest, ist SAML SSO möglicherweise eine bessere Lösung für dich.

### Arbeiten deine Entwickler in öffentlichen Repositorys, Gists oder {% data variables.product.prodname_pages %}-Sites?

Um zu verhindern, dass Unternehmensmitglieder versehentlich unternehmenseigene Inhalte über {% data variables.product.prodname_dotcom_the_website %} an die Öffentlichkeit bringen, legt {% data variables.product.prodname_emus %} starke Einschränkungen für die Aktionen der Benutzer fest. {% data variables.enterprise.prodname_managed_users %} können z. B. keine öffentlichen Repositorys, Gists jeglicher Sichtbarkeit oder {% data variables.product.prodname_pages %}-Websites erstellen, die außerhalb des Unternehmens sichtbar sind. Eine vollständige Liste der Einschränkungen findest du unter [Fähigkeiten und Einschränkungen in Bezug auf {% data variables.enterprise.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users).

Diese Einschränkungen sind für einige Unternehmen inakzeptabel. Um zu ermitteln, ob {% data variables.product.prodname_emus %} für dich geeignet ist, überprüfe die Einschränkungen mit deinen Entwicklern, und bestätige, ob eine der Einschränkungen deine vorhandenen Workflows behindert. Wenn ja, ist SAML SSO möglicherweise eine bessere Wahl für dein Unternehmen.

### Sind deine Entwickler von Zusammenarbeit außerhalb deines Unternehmens abhängig?

{% data variables.enterprise.prodname_managed_users_caps %} können nur zu Repositorys innerhalb deines Unternehmens beitragen. Wenn deine Entwickler sowohl zu Repositorys innerhalb als auch außerhalb deines Unternehmens beitragen müssen (private Repositorys eingeschlossen), ist {% data variables.product.prodname_emus %} vielleicht nicht das Richtige für dein Unternehmen. In diesem Fall könnte SAML-SSO eine bessere Lösung sein.

Einige Unternehmen unterhalten Repositorys innerhalb eines bestehenden Unternehmens unter Verwendung von SAML-SSO auf {% data variables.location.product_location %} und erstellen außerdem ein {% data variables.enterprise.prodname_emu_enterprise %}. Entwickler, die von einer einzigen Arbeitsstation aus zu Repositorys beider Unternehmen beitragen, müssen in einem einzigen Browser zwischen den Konten auf {% data variables.location.product_location %} wechseln oder für jedes Konto einen anderen Browser verwenden. Möglicherweise muss der Entwickler auch die Git-Konfiguration des Arbeitsplatzes anpassen, um die beiden Konten zu unterstützen. Die Komplexität dieses Arbeitsablaufs kann das Risiko erhöhen, dass interner Code unbeabsichtigt an die Öffentlichkeit dringt.

Wenn du dich für ein {% data variables.enterprise.prodname_emu_enterprise %} entscheidest, aber möchtest, dass Entwickler von einer einzigen Arbeitsstation aus zu Ressourcen außerhalb des Unternehmens beitragen, kannst du in der lokalen Git-Konfiguration eines Entwicklers Unterstützung für den Wechsel zwischen den Konten bereitstellen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#supporting-developers-with-multiple-user-accounts-on-githubcom).

### Ist dein Unternehmen von externen Mitarbeitern abhängig?

Mit SAML SSO kannst du Personen, die nicht Mitglied deines IdP-Verzeichnisses sind, mit der Rolle des externen Mitarbeiters Zugriff auf bestimmte Repositorys gewähren. Dies kann besonders nützlich für Mitarbeiter sein, die sich außerhalb deines Unternehmens befinden, z. B. Auftragnehmer. Weitere Informationen findest du unter [Hinzufügen externer Mitarbeiter zu Repositorys in deiner Organisation](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization).

Bei {% data variables.product.prodname_emus %} ist die Rolle des externen Mitarbeiters nicht vorhanden. Auf die Ressourcen deines Unternehmens können nur {% data variables.enterprise.prodname_managed_users %} zugreifen, die immer durch deinen IdP bereitgestellt werden. Um externen Mitarbeitern Zugriff auf dein Unternehmen zu gewähren, musst du Gastkonten in deinem IdP verwenden. Wenn du an {% data variables.product.prodname_emus %} interessiert bist, kläre mit deinen Entwicklern, ob dies einen ihrer vorhandenen Workflows behindert. Falls ja, ist SAML SSO möglicherweise eine bessere Lösung.

### Kann dein Unternehmen Migrationskosten tolerieren?

Wenn {% data variables.product.prodname_dotcom_the_website %} für dein Unternehmen neu ist, können SAML SSO und {% data variables.product.prodname_emus %} gleichermaßen einfach eingeführt werden.

Wenn du bereits {% data variables.product.prodname_dotcom_the_website %} verwendest, wobei Entwickler ihre eigenen Benutzerkonten verwalten, erfordert die Einführung von {% data variables.product.prodname_emus %} die Migration zu einem neuen Unternehmenskonto. Weitere Informationen findest du unter [Informationen zu Unternehmen mit {% data variables.enterprise.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users).

Obwohl {% data variables.product.prodname_emus %} kostenlos ist, erfordert der Migrationsprozess möglicherweise Zeit oder Kosten von deinem Team. Vergewissere dich, dass dieser Migrationsprozess für dein Unternehmen und deine Entwickler akzeptabel ist. Wenn nicht, ist SAML SSO möglicherweise die bessere Wahl für dich.

{% elsif ghes %}

Websiteadministratoren können entscheiden, mit welcher Authentifizierungsmethode Personen auf eine Instanz von {% data variables.product.product_name %} zugreifen können. Du kannst die integrierte Authentifizierung von {% data variables.product.product_name %} verwenden, oder du kannst eine externe Authentifizierungsmethode konfigurieren, wenn du Identitäts- und Zugriffsverwaltung für die von deinem Team genutzten Webanwendungen zentralisieren möchtest.

## Authentifizierungsmethoden für {% data variables.product.product_name %}

Für {% data variables.product.product_name %} sind die folgenden Authentifizierungsmethoden verfügbar.

- [Integrierte Authentifizierung](#built-in-authentication)
- [Externe Authentifizierung](#external-authentication)

### Integrierte Authentifizierung

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} Um auf deine Instanz zuzugreifen, authentifizieren sich Personen mit den Anmeldeinformationen für das Konto. Weitere Informationen findest du unter [Konfigurieren der integrierten Authentifizierung](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication).

### Externe Authentifizierung

Wenn du ein externes Verzeichnis oder einen Identitätsanbieter (IdP) verwendest, um den Zugriff auf mehrere Webanwendungen zu zentralisieren, kannst du eventuell eine externe Authentifizierung für {% data variables.location.product_location %} konfigurieren. Weitere Informationen findest du in den folgenden Artikeln.

- [Verwenden von CAS for Enterprise IAM](/admin/identity-and-access-management/using-cas-for-enterprise-iam)
- [Verwenden von LDAP for Enterprise IAM](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)
- [Verwenden von SAML for Enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam)

Wenn du die externe Authentifizierung verwenden möchtest, kannst du auch eine Fallbackauthentifizierung für Personen konfigurieren, die kein Konto bei deinem externen Authentifizierungsanbieter haben. Zum Beispiel könntest du Dienstleistern oder Computerbenutzer*innen Zugriff gewähren. Weitere Informationen findest du unter [Zulassen der integrierten Authentifizierung für Benutzer*innen außerhalb deines Anbieters](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider).

{% ifversion scim-for-ghes %}

Wenn du SAML-SSO für die Authentifizierung verwendest, kannst du mithilfe von SCIM auch Benutzer bereitstellen und IdP-Gruppen zu Teams zuordnen. Weitere Informationen findest du unter [Konfigurieren der Benutzerbereitstellung mit SCIM für dein Unternehmen](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise).

{% endif %}

{% elsif ghae %}

{% data variables.product.product_name %} verwendet SAML-SSO für die Authentifizierung. Unternehmensbesitzer*innen müssen SAML-SSO während der Initialisierung mit einem SAML-Identitätsanbieter (IdP) konfigurieren. Weitere Informationen findest du unter [Informationen zu SAML for Enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam).

{% endif %}

## Weiterführende Themen

- [Typen von {% data variables.product.company_short %}-Konten](/get-started/learning-about-github/types-of-github-accounts)
- [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts) {%- ifversion ghec %}
- [Kann ich Konten für Personen in meiner Organisation erstellen?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)
{% endif %}
