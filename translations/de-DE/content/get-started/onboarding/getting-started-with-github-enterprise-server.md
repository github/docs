---
title: Erste Schritte mit GitHub Enterprise Server
intro: 'Erste Schritte beim Einrichten und Verwalten von {% data variables.location.product_location %}.'
versions:
  ghes: '*'
ms.openlocfilehash: 68cd462c42ef63863750d9edc5e122dc3c325115
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163416'
---
In diesem Leitfaden erfährst du, wie du als Unternehmensadministrator {% data variables.location.product_location %} einrichtest, konfigurierst und verwaltest.

{% data variables.product.company_short %} bietet zwei Möglichkeiten zum Bereitstellen von {% data variables.product.prodname_enterprise %}.

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

{% data variables.product.company_short %} hosts {% data variables.product.prodname_ghe_cloud %}. Du kannst {% data variables.product.prodname_ghe_server %} im eigenen Rechenzentrum oder bei einem unterstützten Cloudanbieter bereitstellen und hosten.

Weitere Informationen über {% data variables.product.product_name %} findest du unter [Informationen über {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server).

## Teil 1: Installieren von {% data variables.product.product_name %}
Für den Einstieg in {% data variables.product.product_name %} musst du ein Unternehmenskonto erstellen, die Instanz installieren, die Verwaltungskonsole für die Ersteinrichtung verwenden, die Instanz konfigurieren und sich um die Abrechnung kümmern. 
### 1. Erstellen eines Unternehmenskontos
Vor der Installation von {% data variables.product.product_name %} kannst du auf {% data variables.product.prodname_dotcom_the_website %} ein Unternehmenskonto erstellen. Wende dich dazu an das [Vertriebsteam von {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact). Ein Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} ist nützlich für die Abrechnung sowie für Features, die über {% data variables.product.prodname_github_connect %} auf {% data variables.product.prodname_dotcom_the_website %} freigegeben werden.  Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts).
### 2. Installieren von {% data variables.product.product_name %}
Für den Einstieg in {% data variables.product.product_name %} musst du die Appliance auf einer Virtualisierungsplattform deiner Wahl installieren. Weitere Informationen findest du unter [Einrichten einer {% data variables.product.prodname_ghe_server %}-Instanz](/admin/installation/setting-up-a-github-enterprise-server-instance).

### 3. Öffnen der Verwaltungskonsole
Beim ersten Aufruf von {% data variables.location.product_location %} verwendest du die Verwaltungskonsole für die Ersteinrichtung. Du kannst die Verwaltungskonsole auch verwenden, um Instanzeinstellungen wie Lizenzen, Domänen, Authentifizierung und TLS zu verwalten. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungskonsole](/admin/configuration/configuring-your-enterprise/accessing-the-management-console).

### 4. Konfigurieren {% data variables.location.product_location %}
Neben der Verwaltungskonsole kannst du auch das Dashboard für die Websiteverwaltung und die Verwaltungsshell (SSH) verwenden, um {% data variables.location.product_location %} zu verwalten. So kannst du beispielsweise Anwendungen und Ratenbegrenzungen konfigurieren, Berichte anzeigen und Befehlszeilenprogramme verwenden. Weitere Informationen findest du unter [Konfigurieren deines Unternehmens](/admin/configuration/configuring-your-enterprise).

Du kannst die von {% data variables.product.product_name %} standardmäßig über DHCP (Dynamic Host Configuration Protocol) verwendeten Netzwerkeinstellungen verwenden oder die Netzwerkeinstellungen mithilfe der VM-Konsole konfigurieren. Zudem kannst du einen Proxyserver oder Firewallregeln konfigurieren. Weitere Informationen findest du unter [Konfigurieren von Netzwerkeinstellungen](/admin/configuration/configuring-network-settings).

### 5. Konfigurieren von Hochverfügbarkeit
Du kannst {% data variables.location.product_location %} für Hochverfügbarkeit konfigurieren, um die Auswirkungen von Hardwarefehlern und Netzwerkausfällen zu minimieren. Weitere Informationen findest du unter [Konfigurieren von Hochverfügbarkeit](/admin/enterprise-management/configuring-high-availability).

### 6. Einrichten einer Staginginstanz
Du kannst eine Staginginstanz einrichten, um Änderungen zu testen, eine Notfallwiederherstellung zu planen und Updates auszuprobieren, bevor du sie auf {% data variables.location.product_location %} anwendest.  Weitere Informationen findest du unter [Einrichten einer Staginginstanz](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

### 7. Festlegen von Sicherungen und Notfallwiederherstellungen
Zum Schutz deiner Produktionsdaten kannst du automatisierte Sicherungen für {% data variables.location.product_location %} mit {% data variables.product.prodname_enterprise_backup_utilities %} konfigurieren. Weitere Informationen findest du unter [Konfigurieren von Sicherungen auf deiner Appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance).

### 8. Verwalten der Abrechnung für ein Unternehmen
Die Abrechnung für alle Organisationen und {% data variables.product.product_name %}-Instanzen, die mit deinem Unternehmenskonto verbunden sind, werden in einer einzigen Rechnung für alle kostenpflichtigen {% data variables.product.prodname_dotcom %}.com-Services aggregiert. Unternehmensbesitzer*innen als auch Abrechnungsmanager*innen können auf Abrechnungseinstellungen für Unternehmenskonten zugreifen und diese verwalten. Weitere Informationen findest du unter [Verwalten der Abrechnung für ein Unternehmen](/admin/overview/managing-billing-for-your-enterprise).

## Teil 2: Organisieren und Verwalten von Teams
Als Unternehmensbesitzer oder Administrator kannst du Einstellungen auf Benutzer-, Repository-, Team- und Organisationsebenen verwalten. Du kannst Mitglieder deines Unternehmens verwalten, Organisationen erstellen und verwalten, Richtlinien für die Repositoryverwaltung festlegen und Teams erstellen und verwalten.

### 1. Verwalten von Mitgliedern von {% data variables.location.product_location %}
{% data reusables.getting-started.managing-enterprise-members %}

### 2. Erstellen von Organisationen
{% data reusables.getting-started.creating-organizations %}

### 3. Hinzufügen von Mitgliedern zu Organisationen
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. Erstellen von Teams
{% data reusables.getting-started.creating-teams %}

### 5. Festlegen von Berechtigungsstufen für Organisationen und Repositorys
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. Erzwingen von Repositoryverwaltungsrichtlinien
{% data reusables.getting-started.enforcing-repo-management-policies %}

## Teil 3: Sicheres Erstellen
Zur Verbesserung der Sicherheit von {% data variables.location.product_location %} kannst du die Authentifizierung für Unternehmensmitglieder konfigurieren, Tools und die Überwachungsprotokollierung zur Gewährleistung der Konformität nutzen, Sicherheits- und Analysefeatures für deine Organisationen konfigurieren und optional {% data variables.product.prodname_GH_advanced_security %} aktivieren.
### 1. Authentifizieren von Unternehmensmitgliedern
Du kannst die integrierte Authentifizierungsmethode von {% data variables.product.product_name %} verwenden oder einen externen Authentifizierungsanbieter wie CAS, LDAP oder SAML auswählen, um deine vorhandenen Konten zu integrieren und den Benutzerzugriff auf {% data variables.location.product_location %} zentral zu verwalten. Weitere Informationen findest du unter [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).

Du kannst auch festlegen, dass für all deine Organisationen eine zweistufige Authentifizierung erforderlich ist. Weitere Informationen findest du unter [Festlegen, dass für eine Organisation die zweistufige Authentifizierung erforderlich ist](/admin/user-management/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization).

### 2. Wahrung der Compliance
Zur Automatisierung von Complianceworkflows sowie zur Einhaltung von Compliancestandards in deiner Organisation kannst du obligatorische Status- und Commitüberprüfungen implementieren. Du kannst auch das Überwachungsprotokoll für deine Organisation verwenden, um Aktionen zu überprüfen, die von deinem Team ausgeführt werden. Weitere Informationen findest du unter [Erzwingen einer Richtlinie mit Pre-Receive-Hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks) und [Informationen zum Überwachungsprotokoll für ein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise).

{% ifversion ghes %}
### 3. Konfigurieren von Sicherheitsfeatures für eine Organisation
{% data reusables.getting-started.configuring-security-features %} {% endif %}

{% ifversion ghes %}
### 4. Aktivieren von {% data variables.product.prodname_GH_advanced_security %}-Features
Du kannst deine {% data variables.product.product_name %}-Lizenz upgraden, sodass {% data variables.product.prodname_GH_advanced_security %} enthalten ist. Dadurch hast du Zugriff auf zusätzliche Features, die Benutzer*innen helfen, Sicherheitsprobleme in ihren Codes zu erkennen und zu beheben, z. B. Code- und Geheimnisprüfungen. Weitere Informationen findest du unter [{% data variables.product.prodname_GH_advanced_security %} für dein Unternehmen](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise).
{% endif %}

## Teil 4: Anpassen und Automatisieren von Unternehmensarbeit auf {% data variables.product.prodname_dotcom %}
Mit {% data variables.product.prodname_dotcom %}- und {% data variables.product.prodname_oauth_apps %}, {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} und {% data variables.product.prodname_pages %} kannst du Arbeit in Organisationen in einem Unternehmen anpassen und automatisieren.

### 1. Erstellen von {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %}
Mit der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API kannst du Integrationen wie {% data variables.product.prodname_github_apps %} oder {% data variables.product.prodname_oauth_apps %} zur Verwendung in Organisationen in deinem Unternehmen erstellen, um Workflows zu ergänzen und zu erweitern. Weitere Informationen findest du unter [Informationen zu Apps](/developers/apps/getting-started-with-apps/about-apps).
### 2. Verwenden der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API
{% data reusables.getting-started.api %}

{% ifversion ghes %}
### 3. Erstellen von {% data variables.product.prodname_actions %}-Aktionen
{% data reusables.getting-started.actions %}

Weitere Informationen zum Aktivieren und Konfigurieren von {% data variables.product.prodname_actions %} auf {% data variables.product.product_name %} findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server).

### 4. Veröffentlichen und Verwalten von {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

Weitere Informationen zum Aktivieren und Konfigurieren von {% data variables.product.prodname_registry %} für {% data variables.location.product_location %} findest du unter [Erste Schritte mit {% data variables.product.prodname_registry %} für dein Unternehmen](/admin/packages/getting-started-with-github-packages-for-your-enterprise).
{% endif %}

### 5. Verwenden von {% data variables.product.prodname_pages %}
{% data reusables.getting-started.github-pages-enterprise %}

## Teil 5: Herstellen einer Verbindung mit anderen {% data variables.product.prodname_dotcom %}-Ressourcen
Zum Freigeben von Ressourcen kannst du {% data variables.product.prodname_github_connect %} verwenden.

Wenn du der Besitzer einer {% data variables.product.product_name %}-Instanz und einer {% data variables.product.prodname_ghe_cloud %}-Organisation oder eines Unternehmenskontos bist, kannst du {% data variables.product.prodname_github_connect %} aktivieren. Mit {% data variables.product.prodname_github_connect %} kannst du bestimmte Workflows und Features zwischen {% data variables.location.product_location %} und {% data variables.product.prodname_ghe_cloud %} gemeinsam nutzen, z. B. die gemeinsame Suche und einheitliche Beiträge. Weitere Informationen findest du unter [Herstellen einer Verbindung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud).

## Teil 6: Verwenden der Lern- und Supportressourcen von {% data variables.product.prodname_dotcom %}
Deine Unternehmensmitglieder können mit unseren Lernressourcen mehr über Git und {% data variables.product.prodname_dotcom %} erfahren, und du erhältst mit {% data variables.product.prodname_dotcom %} Enterprise Support den Support, den du zum Einrichten und Verwalten von {% data variables.location.product_location %} benötigst.

### 1. Informationen zu {% data variables.product.product_name %} in {% data variables.product.prodname_docs %}

Du kannst die Dokumentation zu den im Zusammenhang mit {% data variables.product.prodname_ghe_server %} verfügbaren Features lesen. Weitere Informationen findest du unter [Informationen zu Versionen von {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

{% data reusables.enterprise.best-practices %}

### 2. Lernen mit {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning-enterprise %}

### 3. Arbeiten mit {% data variables.product.prodname_dotcom %} Enterprise Support
{% data reusables.getting-started.contact-support-enterprise %}
