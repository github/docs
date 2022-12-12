---
title: Erste Schritte mit GitHub Enterprise Cloud
intro: 'Erste Schritte zum Einrichten und Verwalten deiner Organisation oder deines Unternehmenskontos in {% data variables.product.prodname_ghe_cloud %}'
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 6af835175eb5412ca9fbf0e925175450f2a2a254
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163800'
---
Dieser Leitfaden führt dich durch das Einrichten, Konfigurieren und Verwalten deines {% data variables.product.prodname_ghe_cloud %}-Kontos als Organisation oder Unternehmensbesitzer*in.

{% data reusables.enterprise.ghec-cta-button %}

## Teil 1: Auswählen des Kontotyps

{% data variables.product.prodname_dotcom %} bietet zwei Arten von Enterprise-Produkten:

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

Der Hauptunterschied zwischen den Produkten besteht darin, dass {% data variables.product.prodname_ghe_cloud %} von {% data variables.product.prodname_dotcom %} gehostet wird, während es sich bei {% data variables.product.prodname_ghe_server %} um einen selbstgehosteten Dienst handelt.

{% data reusables.enterprise.about-github-for-enterprises %}

Wenn du {% data variables.product.prodname_ghe_cloud %} nutzt, kannst du {% data variables.product.prodname_emus %} verwenden. {% data reusables.enterprise-accounts.emu-short-summary %}

Wenn du deine Mitglieder stattdessen ihre eigenen persönlichen Konten erstellen und verwalten lassen möchtest, gibt es zwei Arten von Konten, die du mit {% data variables.product.prodname_ghe_cloud %} verwenden kannst:

- Einzelnes Organisationskonto
- Unternehmenskonto, das mehrere Organisationen umfasst

### 1. Grundlegendes zu den Unterschieden zwischen einem Organisations- und einem Unternehmenskonto

Sowohl Organisations- als auch Unternehmenskonten sind in {% data variables.product.prodname_ghe_cloud %} verfügbar. Eine Organisation ist ein gemeinsam genutztes Konto, bei dem Gruppen von Personen gleichzeitig projektübergreifend zusammenarbeiten können, und Besitzer*innen und Administrator*innen können den Zugriff auf Daten und Projekte verwalten. Ein Unternehmenskonto ermöglicht die Zusammenarbeit zwischen mehreren Organisationen und Besitzer*innen das zentrale Verwalten von Richtlinien, Abrechnungen und Sicherheitsaspekten für diese Organisationen. Weitere Informationen zu den Unterschieden findest du unter [Organisations- und Unternehmenskonten](/organizations/collaborating-with-groups-in-organizations/about-organizations#organizations-and-enterprise-accounts).

Wenn du ein Unternehmenskonto auswählst, denke daran, dass einige Richtlinien nur auf Organisationsebene festgelegt werden können, während andere für alle Organisationen in einem Unternehmen erzwungen werden können.

Nachdem du den gewünschten Kontotyp ausgewählt hast, kannst du mit der Einrichtung deines Kontos fortfahren. Fahre in jedem Abschnitt in diesem Leitfaden auf Grundlage deines Kontotyps mit dem Abschnitt für das Organisationskonto oder das Unternehmenskonto fort.

## Teil 2: Einrichten deines Kontos
Um {% data variables.product.prodname_ghe_cloud %} verwenden zu können, musst du dein Organisations- oder Unternehmenskonto erstellen und dann Abrechnungseinstellungen, Abonnements und die Nutzungseinstellungen einrichten und anzeigen.
### Einrichten eines einzelnen Organisationskontos mit {% data variables.product.prodname_ghe_cloud %}

#### 1. Informationen zu Organisationen
Organisationen sind gemeinsame Konten, in denen Personengruppen projektübergreifend zusammenarbeiten können. Bei {% data variables.product.prodname_ghe_cloud %} können Besitzer*innen und Administrator*innen ihre Organisation mithilfe einer ausgereiften Benutzerauthentifizierung und -verwaltung sowie mit erweiterten Support- und Sicherheitsoptionen verwalten. Weitere Informationen findest du unter [Informationen zu Organisationen](/organizations/collaborating-with-groups-in-organizations/about-organizations).
#### 2. Erstellen eines Organisationskontos oder Durchführen eines Upgrades

Um ein Organisationskonto mit {% data variables.product.prodname_ghe_cloud %} zu verwenden, musst du zunächst eine Organisation erstellen. Wähle „Enterprise“ aus, wenn du zum Auswählen eines Plans aufgefordert wirst. Weitere Informationen findest du unter [Erstellen einer neuen Organisation von Grund auf](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

Wenn du über ein vorhandenes Organisationskonto verfügst, für das du ein Upgrade durchführen möchtest, kannst du alternativ die Schritte unter [Durchführen eines Upgrades für dein {% data variables.product.prodname_dotcom %}-Abonnement](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#upgrading-your-organizations-subscription) ausführen.
#### 3. Einrichten und Verwalten der Abrechnung

Wenn du ein Organisationskonto mit {% data variables.product.prodname_ghe_cloud %} verwendest, hast du zunächst Zugriff auf eine [30-tägige kostenlose Testversion](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud). Wenn du {% data variables.product.prodname_enterprise %} oder {% data variables.product.prodname_team %} nicht vor Ablauf deiner kostenlosen Testversion erwirbst, wird deine Organisation auf {% data variables.product.prodname_free_user %} herabgestuft, und du verlierst den Zugriff auf alle erweiterten Tools und Features, die nur in bezahlten Produkten enthalten sind. Weitere Informationen findest du unter [Beenden deiner Testversion](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial).

Auf der Seite für die Abrechnungseinstellungen deiner Organisation kannst du Einstellungen wie deine Zahlungsmethode und den Abrechnungszeitraum verwalten, Informationen zu deinem Abonnement anzeigen und ein Upgrade für deinen Speicher und deine {% data variables.product.prodname_actions %}-Minuten durchführen. Weitere Informationen zum Verwalten deiner Abrechnungseinstellungen findest du unter [Verwalten deiner {% data variables.product.prodname_dotcom %}-Abrechnungseinstellungen](/billing/managing-your-github-billing-settings).

Nur Organisationsmitglieder mit der Rolle *Besitzer* oder *Abrechnungsmanager* können auf die Abrechnungseinstellungen für deine Organisation zugreifen oder diese ändern. Abrechnungsmanager*innen sind Benutzer*innen, die die Abrechnungseinstellungen für deine Organisation verwalten und keine bezahlte Lizenz im Abonnement deiner Organisation verwenden. Weitere Informationen zum Hinzufügen von Abrechnungsmanager*innen zu deiner Organisation findest du unter [Hinzufügen von Abrechnungsmanager*innen zu deiner Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).

### Einrichten eines Unternehmenskontos mit {% data variables.product.prodname_ghe_cloud %}

#### 1. Informationen zu Unternehmenskonten

Mithilfe eines Unternehmenskontos kannst du Richtlinien und Einstellungen für mehrere {% data variables.product.prodname_dotcom %}-Organisationen zentral verwalten, einschließlich Mitgliederzugriff, Abrechnung, Nutzung und Sicherheit. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts).

#### 2. Erstellen eines Unternehmenskontos

 {% data variables.product.prodname_ghe_cloud %}-Kunden, die per Rechnung bezahlen, können direkt über {% data variables.product.prodname_dotcom %} ein Unternehmenskonto erstellen. Weitere Informationen findest du unter [Erstellen eines Unternehmenskontos](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account). 
 
 {% data variables.product.prodname_ghe_cloud %}-Kunden, die aktuell nicht per Rechnung bezahlen, können das [Vertriebsteam von {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact) kontaktieren, um ein Unternehmenskonto erstellen zu lassen.

#### 3. Hinzufügen von Organisationen zu deinem Unternehmenskonto

Du kannst neue Organisationen erstellen, um sie in deinem Enterprise-Konto zu verwalten. Weitere Informationen findest du unter [Hinzufügen von Organisationen zu deinem Unternehmen](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise).

Wende dich an deine {% data variables.product.prodname_dotcom %}-Vertriebskontomitarbeiter*innen, wenn du eine vorhandene Organisation in dein Unternehmenskonto verschieben möchtest.
#### 4. Anzeigen des Abonnements und der Nutzung deines Unternehmenskontos
Du kannst dein aktuelles Abonnement, die Lizenznutzung, Rechnungen, den Zahlungsverlauf und andere Abrechnungsinformationen für dein Unternehmenskonto jederzeit anzeigen. Sowohl Unternehmensbesitzer*innen als auch Abrechnungsmanager*innen können auf Abrechnungseinstellungen für Unternehmenskonten zugreifen und diese verwalten. Weitere Informationen findest du unter [Anzeigen des Abonnements und der Nutzung für dein Unternehmenskonto](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account).

## Teil 3: Verwalten deiner Organisations- oder Unternehmensmitglieder und -teams mit {% data variables.product.prodname_ghe_cloud %}

### Verwalten von Mitgliedern und Teams in deiner Organisation
Du kannst Berechtigungen und Mitgliederrollen festlegen, Teams erstellen und verwalten sowie Benutzer*innen Zugriff auf Repositorys in deiner Organisation gewähren. 
#### 1. Verwalten von Mitgliedern deiner Organisation
{% data reusables.getting-started.managing-org-members %}
#### 2. Organisationsberechtigungen und -rollen
{% data reusables.getting-started.org-permissions-and-roles %}
#### 3. Informationen zu Teams und deren Erstellung
{% data reusables.getting-started.about-and-creating-teams %}
#### 4. Verwalten von Teameinstellungen
{% data reusables.getting-started.managing-team-settings %}
#### 5. Gewähren des Zugriffs auf Repositorys, Projektboards und Apps für Personen und Teams
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}

### Verwalten von Mitgliedern eines Unternehmenskontos
Die Verwaltung von Mitgliedern eines Unternehmens unterscheidet sich von der Verwaltung von Mitgliedern oder Teams in einer Organisation. Es ist wichtig zu beachten, dass Unternehmensbesitzer*innen oder Administrator*innen nicht auf Einstellungen auf Organisationsebene zugreifen oder Mitglieder für Organisationen in ihrem Unternehmen verwalten können, es sei denn, sie erhalten die Berechtigungen von Organisationsbesitzer*innen. Weitere Informationen findest du im obigen Abschnitt [Verwalten von Mitgliedern und Teams in deiner Organisation](#managing-members-and-teams-in-your-organization).

Wenn dein Unternehmen {% data variables.product.prodname_emus %} verwendet, werden deine Mitglieder vollständig über deinen Identitätsanbieter verwaltet. Das Hinzufügen von Mitgliedern, das Vornehmen von Änderungen an deren Mitgliedschaft und das Zuweisen von Rollen wird mithilfe deines Identitätsanbieters verwaltet. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

Führe die folgenden Schritte aus, falls dein Unternehmen {% data variables.product.prodname_emus %} nicht verwendet.

#### 1. Zuweisen von Rollen in einem Unternehmen
Standardmäßig ist jeder in einem Unternehmen Mitglied des Unternehmens. Es gibt auch administrative Rollen (einschließlich Unternehmensbesitzer*innen und Abrechnungsmanager*innen), die unterschiedliche Zugriffsstufen auf Unternehmenseinstellungen und -daten umfassen. Weitere Informationen findest du unter [Rollen in einem Unternehmen](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).
#### 2. Einladen von Personen zum Verwalten deines Unternehmens
Du kannst Personen einladen, um dein Unternehmen als Unternehmensbesitzer*innen oder Abrechnungsmanager*innen zu verwalten und diejenigen zu entfernen, die keinen Zugriff mehr benötigen. Weitere Informationen findest du unter [Einladen von Personen zum Verwalten deines Unternehmens](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).

Du kannst Unternehmensmitgliedern auch die Möglichkeit geben, Supporttickets im Supportportal zu verwalten. Weitere Informationen findest du unter [Verwalten von Supportberechtigungen für dein Unternehmen](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).
#### 3. Anzeigen von Personen in deinem Unternehmen
Um den Zugriff auf unternehmenseigene Ressourcen oder die Nutzung von Benutzerlizenzen zu überwachen, kannst du alle Unternehmensadministrator*innen, Unternehmensmitglieder und externe Projektmitarbeiter*innen in deinem Unternehmen anzeigen. Du kannst die Organisationen, zu denen ein Mitglied gehört, sowie die spezifischen Repositorys anzeigen, auf die externe Projektmitarbeiter*innen Zugriff haben. Weitere Informationen findest du unter [Anzeigen von Personen in deinem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise).

## Teil 4: Verwalten der Sicherheit mit {% data variables.product.prodname_ghe_cloud %}

* [Verwalten der Sicherheit für eine einzelne Organisation](#managing-security-for-a-single-organization)
* [Verwalten der Sicherheit für ein {% data variables.enterprise.prodname_emu_enterprise %}](#managing-security-for-an-enterprise-with-managed-users)
* [Verwalten der Sicherheit für ein Unternehmenskonto ohne {% data variables.enterprise.prodname_managed_users %}](#managing-security-for-an-enterprise-account-without-managed-users)

### Verwalten der Sicherheit für eine einzelne Organisation
Du kannst deine Organisation schützen, indem du die zweistufige Authentifizierung erzwingst, Sicherheitsfeatures konfigurierst, das Überwachungsprotokoll und die Integrationen deiner Organisation überprüfst und die einmalige SAML-Anmeldung und Teamsynchronisierung aktivierst.
#### 1. Erzwingen der zweistufigen Authentifizierung
{% data reusables.getting-started.requiring-2fa %}
#### 2. Konfigurieren von Sicherheitsfeatures für deine Organisation
{% data reusables.getting-started.configuring-security-features %}

#### 3. Überprüfen des Überwachungsprotokolls und der Integrationen deiner Organisation
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

#### 4. Aktivieren und Erzwingen von SAML-SSO für deine Organisation
Wenn du die Anwendungen und Identitäten deiner Organisationsmitglieder mit einem Identitätsanbieter (IdP) verwaltest, kannst du die einmalige SAML-Anmeldung konfigurieren, um den Zugriff auf deine Organisationsressourcen wie Repositorys, Issues und Pull Requests zu steuern und zu schützen. Wenn Mitglieder deiner Organisation auf Organisationsressourcen zugreifen, die SAML-SSO verwenden, werden sie von {% data variables.product.prodname_dotcom %} zum Authentifizieren zu deinem IdP weitergeleitet. Weitere Informationen findest du unter [Informationen zur Identitäts- und Zugriffsverwaltung mit der einmaligen SAML-Anmeldung](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on).

Organisationsbesitzer*innen können die einmalige SAML-Anmeldung entweder deaktivieren, aktivieren aber nicht erzwingen oder aktivieren und erzwingen. Weitere Informationen findest du unter [Aktivieren und Testen der einmaligen SAML-Anmeldung für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) und [Aktivieren der einmaligen SAML-Anmeldung für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).
#### 5. Verwalten der Teamsynchronisierung für deine Organisation
Organisationsbesitzer*innen können die Teamsynchronisierung zwischen deinem Identitätsanbieter (IdP) und {% data variables.product.prodname_dotcom %} aktivieren, um Organisationsbesitzer*innen und Teamverwalter*innen das Verknüpfen von Teams in deiner Organisation mit IdP-Gruppen zu ermöglichen. Weitere Informationen findest du unter [Verwalten der Teamsynchronisierung für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

### Verwalten der Sicherheit für ein {% data variables.enterprise.prodname_emu_enterprise %}

Bei {% data variables.product.prodname_emus %} wird der Zugriff und die Identität zentral über deinen Identitätsanbieter verwaltet. Die zweistufige Authentifizierung und andere Anmeldeanforderungen sollten in deinem Identitätsanbieter aktiviert und erzwungen werden. 

#### 1. Aktivieren von SAML-SSO und Bereitstellung in deinem {% data variables.enterprise.prodname_emu_enterprise %}

In einem {% data variables.enterprise.prodname_emu_enterprise %} werden alle Mitglieder über deinen Identitätsanbieter bereitgestellt und verwaltet. Du musst die einmalige SAML-Anmeldung und SCIM-Bereitstellung aktivieren, bevor du dein Unternehmen verwenden kannst. Weitere Informationen zum Konfigurieren der einmaligen SAML-Anmeldung und der Bereitstellung für ein {% data variables.enterprise.prodname_emu_enterprise %} findest du unter [Konfigurieren der einmaligen SAML-Anmeldung für EMU (Enterprise Managed Users)](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users).

#### 2. Verwalten von Teams in deinem {% data variables.enterprise.prodname_emu_enterprise %} durch deinen Identitätsanbieter

Du kannst Teams in deinen Organisationen mit Sicherheitsgruppen in deinem Identitätsanbieter verknüpfen, die Mitgliedschaft deiner Teams verwalten und über deinen IdP auf Repositorys zugreifen. Weitere Informationen findest du unter [Verwalten von Teammitgliedschaften mit Identitätsanbietergruppen](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups).

#### 3. Verwalten zulässiger IP-Adressen für Organisationen in deinem {% data variables.enterprise.prodname_emu_enterprise %}

Du kannst eine Zulassungsliste für bestimmte IP-Adressen konfigurieren, um den Zugriff auf Ressourcen im Besitz von Organisationen in deinem {% data variables.enterprise.prodname_emu_enterprise %} zu beschränken. Weitere Informationen findest du unter [Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise).

#### 4. Erzwingen von Richtlinien für Advanced Security-Features in deinem {% data variables.enterprise.prodname_emu_enterprise %}
{% data reusables.getting-started.enterprise-advanced-security %}

### Verwalten der Sicherheit für ein Unternehmenskonto ohne {% data variables.enterprise.prodname_managed_users %}
Zum Verwalten der Sicherheit für dein Unternehmen kannst du die zweistufige Authentifizierung erzwingen, zulässige IP-Adressen verwalten, die einmalige SAML-Anmeldung und die Teamsynchronisierung auf Unternehmensebene aktivieren und sich für GitHub Advanced Security-Features registrieren und diese erzwingen. 

#### 1. Voraussetzen der zweistufigen Authentifizierung und Verwalten zulässiger IP-Adressen für Organisationen in deinem Unternehmenskonto
Enterprise-Inhaber können vorschreiben, dass Organisationsmitglieder, Abrechnungsmanager und externe Mitarbeiter in allen Organisationen eines Enterprise-Kontos die Zwei-Faktor-Authentifizierung (2FA) für den Schutz ihrer persönlichen Konten verwenden. Bevor du dies tust, solltest du alle benachrichtigen, die Zugriff auf Organisationen in deinem Unternehmen haben. Du kannst auch eine Zulassungsliste für bestimmte IP-Adressen konfigurieren, um den Zugriff auf Ressourcen im Besitz von Organisationen in deinem Unternehmenskonto einzuschränken. 

Weitere Informationen zum Erzwingen der zweistufigen Authentifizierung und der Listen zulässiger IP-Adressen findest du unter [Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise).
#### 2. Aktivieren und Erzwingen von SAML-SSO für Organisationen in deinem Unternehmenskonto
Du kannst den Zugriff auf die Ressourcen, Organisationsmitgliedschaften und Teammitgliedschaften deines Unternehmens mithilfe deines Identitätsanbieters und der einmaligen SAML-Anmeldung (SSO) zentral verwalten. Unternehmensbesitzer*innen können die einmalige SAML-Anmeldung für alle Organisationen im Besitz eines Unternehmenskontos aktivieren. Weitere Informationen findest du unter [Informationen zur Identitäts- und Zugriffsverwaltung für dein Unternehmen](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise).

#### 3. Verwalten der Teamsynchronisierung
Du kannst die Teamsynchronisierung zwischen einem Identitätsanbieter (IdP) und {% data variables.product.prodname_dotcom %} aktivieren und verwalten, um Organisationen im Besitz deines Unternehmenskontos das Verwalten der Teammitgliedschaft mit IdP-Gruppen zu ermöglichen. Weitere Informationen findest du unter [Verwalten der Teamsynchronisierung für Organisationen in deinem Unternehmenskonto](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).

#### 4. Erzwingen von Richtlinien für Advanced Security-Features in deinem Unternehmenskonto
{% data reusables.getting-started.enterprise-advanced-security %}

## Teil 5: Verwalten von Richtlinien und Einstellungen auf Organisations- und Unternehmensebene

### Verwalten von Einstellungen für eine einzelne Organisation
Zum Verwalten und Leiten deiner Organisation kannst du Organisationsrichtlinien festlegen, Berechtigungen für Repositoryänderungen verwalten und Communityintegritätsdateien auf Organisationsebene verwenden.
#### 1. Verwalten von Organisationsrichtlinien
{% data reusables.getting-started.managing-org-policies %}
#### 2. Verwalten von Repositoryänderungen
{% data reusables.getting-started.managing-repo-changes %}
#### 3. Verwenden von Communityintegritätsdateien und Moderationstools auf Organisationsebene
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}

### Verwalten von Einstellungen für ein Unternehmenskonto
Zum Verwalten und Leiten deines Unternehmens kannst du Richtlinien für Organisationen im Unternehmen festlegen, Überwachungsprotokolle anzeigen, Webhooks konfigurieren und E-Mail-Benachrichtigungen einschränken.
#### 1. Verwalten von Richtlinien für Organisationen in deinem Unternehmenskonto

Du kannst eine Reihe von Richtlinien für alle Organisationen im Besitz deines Unternehmens erzwingen oder das Festlegen dieser Richtlinien in jeder Organisation ermöglichen. Zu den Typen der erzwingbaren Richtlinien gehören Richtlinien für die Repositoryverwaltung, Projektboards und Teams. Weitere Informationen findest du unter [Festlegen von Richtlinien für dein Unternehmen](/enterprise-cloud@latest/admin/policies).
#### 2. Anzeigen von Überwachungsprotokollen, Konfigurieren von Webhooks und Einschränken von E-Mail-Benachrichtigungen für dein Unternehmen
Im Unternehmensüberwachungsprotokoll kannst du Aktionen in der gesamten Organisation im Besitz deines Unternehmenskontos anzeigen. Du kannst auch Webhooks konfigurieren, um Ereignisse von Organisationen im Besitz deines Unternehmenskontos zu empfangen. Weitere Informationen findest du unter [Überprüfen von Überwachungsprotokollen für dein Unternehmen](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise) und [Überwachen deines Unternehmens](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise).

Zudem hast du die Möglichkeit, E-Mail-Benachrichtigungen für dein Unternehmenskonto einzuschränken, sodass Unternehmensmitglieder nur eine E-Mail-Adresse in einer überprüften oder genehmigten Domäne zum Empfangen von Benachrichtigungen verwenden können. Weitere Informationen findest du unter [Einschränken von E-Mail-Benachrichtigungen für dein Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).

## Teil 6: Anpassen und Automatisieren der Arbeit deiner Organisation oder deines Unternehmens auf {% data variables.product.prodname_dotcom %}
Mitglieder deiner Organisation oder deines Unternehmens können Tools aus dem {% data variables.product.prodname_marketplace %}, die {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API und vorhandene {% data variables.product.product_name %}-Features zum Anpassen und Automatisieren deiner Arbeit verwenden.

### 1. Verwenden von {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Verwenden der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API
{% data reusables.getting-started.api %}
### 3. Erstellen von {% data variables.product.prodname_actions %}-Aktionen
{% data reusables.getting-started.actions %}
### 4. Veröffentlichen und Verwalten von {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}
### 5. Verwenden von {% data variables.product.prodname_pages %}
{% data variables.product.prodname_pages %} ist ein statischer Websitehostingdienst, der HTML-, CSS- und JavaScript-Dateien direkt aus einem Repository verwendet und auf einer Website veröffentlicht. Du kannst die Veröffentlichung von {% data variables.product.prodname_pages %}-Websites auf Organisationsebene verwalten. Weitere Informationen findest du unter [Verwalten der Veröffentlichung von {% data variables.product.prodname_pages %}-Websites für deine Organisation](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) und [Informationen zu {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages).
## Teil 7: Mitwirken in der {% data variables.product.prodname_dotcom %}-Community

Mitglieder deiner Organisation oder deines Unternehmens können die Lern- und Supportressourcen von GitHub verwenden, um die benötigte Hilfe zu erhalten. Du kannst auch die Open-Source-Community unterstützen. 

### 1. Informationen zu {% data variables.product.prodname_ghe_cloud %} in {% data variables.product.prodname_docs %}
Du kannst die Dokumentation zu den im Zusammenhang mit {% data variables.product.prodname_ghe_cloud %} verfügbaren Features lesen. Weitere Informationen findest du unter [Informationen zu Versionen von {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

{% data reusables.enterprise.best-practices %}

### 2. Lernen mit {% data variables.product.prodname_learning %}
Mitglieder deiner Organisation oder deines Unternehmens können sich neue Fähigkeiten aneignen, indem sie mit [{% data variables.product.prodname_learning %}](https://skills.github.com/) unterhaltsame, realistische Projekte in deinem eigenen GitHub-Repository abschließen. Bei jedem Kurs handelt es sich um eine praktische Lerneinheit, die von der GitHub-Community erstellt und von einem freundlichen Bot geleitet wird.

Weitere Informationen findest du unter [Git- und {% data variables.product.prodname_dotcom %}-Lernressourcen](/github/getting-started-with-github/quickstart/git-and-github-learning-resources).
### 3. Unterstützen der Open-Source-Community
{% data reusables.getting-started.sponsors %}

### 4. Kontaktieren von {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% data variables.product.prodname_ghe_cloud %} ermöglicht Ihnen das Übermitteln von Supportanfragen mit Priorität und einer Zielantwortzeit von acht Stunden. Weitere Informationen findest du unter [{% data variables.product.prodname_ghe_cloud %}-Support](/github/working-with-github-support/github-enterprise-cloud-support).
