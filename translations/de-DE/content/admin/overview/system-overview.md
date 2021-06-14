---
title: Systemübersicht
intro: '{% data variables.product.prodname_ghe_server %} ist die private Kopie von {% data variables.product.prodname_dotcom %} in Ihrer Organisation, die in einer virtuellen Appliance enthalten ist, die lokal oder in der Cloud gehostet wird und die Sie konfigurieren und kontrollieren.'
redirect_from:
  - /enterprise/admin/installation/system-overview
  - /enterprise/admin/overview/system-overview
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Security
  - Storage
---

### Speicherarchitektur

Für {% data variables.product.prodname_ghe_server %} sind zwei Storage-Volumes erforderlich. Eines muss am Pfad des *Root-Dateisystems* (`/`) und das andere am Pfade des *Benutzerdateisystems* (`/data/user`) gemountet sein. Diese Architektur vereinfacht die Upgrade-, Rollback und Wiederherstellungsprozeduren, indem die in Ausführung befindliche Softwareumgebung von den persistenten Anwendungsdaten getrennt wird.

Das Root-Dateisystem ist im verteilten Maschinen-Image enthalten. Es enthält das Basisbetriebssystem und die {% data variables.product.prodname_ghe_server %}-Anwendungsumgebung. Das Root-Dateisystem sollte als flüchtig behandelt werden. Daten auf dem Root-Dateisystem werden beim Upgrade auf künftige {% data variables.product.prodname_ghe_server %}-Versionen ersetzt.

Das Root-Dateisystem enthält Folgendes:
  - benutzerdefinierte Zertifikate der Zertifizierungsstelle (CA) (in */usr/local/share/ca-certificates*)
  - benutzerdefinierte Netzwerkkonfigurationen
  - benutzerdefinierte Firewallkonfigurationen
  - den Replikationszustand

Das Benutzerdateisystem enthält die Benutzerkonfiguration und -daten, beispielsweise
  - Git-Repositorys,
  - Datenbanken,
  - Suchindizes,
  - auf {% data variables.product.prodname_pages %}-Websites veröffentlichte Inhalte,
  - große Dateien von {% data variables.large_files.product_name_long %},
  - Pre-Receive-Hook-Umgebungen.

### Bereitstellungsoptionen

Sie können {% data variables.product.prodname_ghe_server %} als eine einzelne virtuelle Appliance oder in einer Hochverfügbarkeitskonfiguration bereitstellen. Weitere Informationen finden Sie unter „[{% data variables.product.prodname_ghe_server %} für Hochverfügbarkeit konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)“.

Einige Organisationen mit Zehntausenden Entwicklern können ebenfalls vom {% data variables.product.prodname_ghe_server %} Clustering profitieren. Weitere Informationen findest Du unter „[Informationen zum Clustering](/enterprise/{{ currentVersion }}/admin/guides/clustering/about-clustering)“.

### Datenaufbewahrung und Rechenzentrumsredundanz

{% danger %}

Bevor Sie {% data variables.product.prodname_ghe_server %} in einer Produktionsumgebung verwenden, wird dringend empfohlen, Backups und einen Disaster Recovery-Plan einzurichten. Weitere Informationen finden Sie unter „[Backups auf Ihrer Appliance konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-backups-on-your-appliance)“.

{% enddanger %}

{% data variables.product.prodname_ghe_server %} unterstützt Online- und inkrementelle Backups mit den [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils). Sie können inkrementelle Snapshots über eine sichere Netzwerkverbindung (den SSH-Verwaltungsport) über weite Entfernungen für den externen oder geografisch verteilten Storage erstellen. Im Falle einer Katastrophe im primären Rechenzentrum können Sie Snapshots über das Netzwerk auf neu verteilten Appliances wiederherstellen.

Zusätzlich zu Netzwerk-Backups werden AWS- (EBS) und VMware-Disk-Snapshots der Benutzer-Storage-Volumes unterstützt, während die Appliance offline ist oder sich im Wartungsmodus befindet. Regelmäßige Volume-Snapshots können als kostengünstige, unkomplizierte Alternative zu Netzwerk-Backups mit {% data variables.product.prodname_enterprise_backup_utilities %} verwendet werden, wenn Ihre Service Level-Anforderungen eine regelmäßige Offline-Wartung ermöglichen.

Weitere Informationen finden Sie unter „[Backups auf Ihrer Appliance konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-backups-on-your-appliance)“.

### Sicherheit

{% data variables.product.prodname_ghe_server %} wird als virtuelle Appliance in Ihrer Infrastruktur ausgeführt und unterliegt den bestehenden Datensicherheitssteuerungen, z. B. Firewalls, IAM, Überwachung und VPNs. {% data variables.product.prodname_ghe_server %} trägt dazu bei, möglichen Problemen cloudgestützter Lösungen hinsichtlich der Einhaltung gesetzlicher Vorschriften vorzubeugen.

{% data variables.product.prodname_ghe_server %} umfasst zudem weitere Sicherheitsfunktionen.

- [Betriebssystem, Software und Patches](#operating-system-software-and-patches)
- [Netzwerksicherheit](#network-security)
- [Anwendungssicherheit](#application-security)
- [Externe Dienste und Supportzugang](#external-services-and-support-access)
- [Verschlüsselte Kommunikation](#encrypted-communication)
- [Benutzer und Zugriffsberechtigungen](#users-and-access-permissions)
- [Authentifizierung](#authentication)
- [Audit- und Zugriffsprotokollierung](#audit-and-access-logging)

#### Betriebssystem, Software und Patches

{% data variables.product.prodname_ghe_server %} führt ein angepasstes Linux-Betriebssystem mit den nötigsten Anwendungen und Diensten aus. {% data variables.product.prodname_dotcom %} stellt Patches für das Kernbetriebssystems der Appliance im Rahmen des normalen Produktveröffentlichungszyklus bereit. Die Patches richten sich an Funktions-, Stabilitäts- und nicht kritische Sicherheitsprobleme bei {% data variables.product.prodname_dotcom %}-Anwendungen. Bei Bedarf stellt {% data variables.product.prodname_dotcom %} außerdem kritische Sicherheitspatches außerhalb des normalen Veröffentlichungszyklus bereit.

#### Netzwerksicherheit

Die interne Firewall von {% data variables.product.prodname_ghe_server %} schränkt den Netzwerkzugriff auf die Dienste der Appliance ein. Über das Netzwerk sind ausschließlich Dienste verfügbar, die für die Funktionsfähigkeit der Appliance erforderlich sind. Weitere Informationen finden Sie unter „[Netzwerkports](/enterprise/{{ currentVersion }}/admin/guides/installation/network-ports)“.

#### Anwendungssicherheit

Das Anwendungssicherheitsteam von {% data variables.product.prodname_dotcom %} konzentriert sich auf die Beurteilung der Sicherheitslücken, auf die Eindringtests und die Codeprüfung für {% data variables.product.prodname_dotcom %} products, including {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dotcom %} hat zusätzlich externe Sicherheitsfirmen mit zeitabhängigen Sicherheitsbeurteilungen der {% data variables.product.prodname_dotcom %}-Produkte beauftragt.

#### Externe Dienste und Supportzugang

{% data variables.product.prodname_ghe_server %} lässt sich ohne jeglichen Egress-Zugriff vom Netzwerk auf externe Dienste nutzen. Optional können Sie die Integration in externe Dienste zur E-Mail-Zustellung, zur externen Überwachung und zur Protokollweiterleitung aktivieren. For more information, see "[Configuring email for notifications](/admin/configuration/configuring-email-for-notifications)," "[Setting up external monitoring](/enterprise/{{ currentVersion }}/admin/installation/setting-up-external-monitoring)," and "[Log forwarding](/admin/user-management/log-forwarding)."

Sie können manuell Fehlerbehebungsdaten sammeln und an den {% data variables.contact.github_support %} senden. Weitere Informationen finden Sie unter „[Daten für den {% data variables.contact.github_support %}-Support bereitstellen](/enterprise/{{ currentVersion }}/admin/enterprise-support/providing-data-to-github-support)“.

#### Verschlüsselte Kommunikation

{% data variables.product.prodname_dotcom %} hat {% data variables.product.prodname_ghe_server %} für die Ausführung hinter der Unternehmens-Firewall vorgesehen. Zum Schutz der drahtgebundenen Kommunikation sollten Sie TLS (Transport Layer Security) aktivieren. {% data variables.product.prodname_ghe_server %} unterstützt handelsübliche TLS-Zertifikate mit 2048 Bit und mehr für den HTTPS-Datenverkehr. Weitere Informationen finden Sie unter „[TLS konfigurieren](/enterprise/{{ currentVersion }}/admin/installation/configuring-tls)“.

Standardmäßig bietet die Appliance auch den SSH-Zugriff (Secure Shell) für den Repository-Zugriff über Git und für Verwaltungszwecke. Weitere Informationen finden Sie unter „[Informationen zu SSH](/enterprise/user/articles/about-ssh)“ und „[Auf die Verwaltungsshell (SSH) zugreifen](/enterprise/{{ currentVersion }}/admin/installation/accessing-the-administrative-shell-ssh)“.

#### Benutzer und Zugriffsberechtigungen

{% data variables.product.prodname_ghe_server %} umfasst drei Kontotypen.

- Das `admin`-Linux-Benutzerkonto besitzt kontrollierten Zugriff auf das zugrundeliegende Betriebssystem mit direktem Dateisystem- und Datenbankzugriff. Eine kleine Gruppe vertrauenswürdiger Administratoren sollte den Zugriff auf dieses Konto erhalten, auf das sie über SSH zugreifen können. Weitere Informationen finden Sie unter „[Auf die Verwaltungsshell (SSH) zugreifen](/enterprise/{{ currentVersion }}/admin/installation/accessing-the-administrative-shell-ssh)“.
- Benutzerkonten in der Webanwendung der Appliance besitzen den uneingeschränkten Zugriff auf die jeweils eigenen Daten sowie auf alle Daten, für die andere Benutzer oder Organisationen den Zugriff ausdrücklich gewähren.
- Websiteadministratoren in der Webanwendung der Appliance sind Benutzerkonten, die die allgemeinen Webanwendungs- und Appliance-Einstellungen, die Einstellungen für Benutzer- und Organisationskonten sowie die Repository-Daten verwalten können.

Weitere Informationen zu den Benutzerberechtigungen in {% data variables.product.prodname_ghe_server %} finden Sie unter „[Zugriffsrechte auf GitHub](/enterprise/user/articles/access-permissions-on-github)“.

#### Authentifizierung

{% data variables.product.prodname_ghe_server %} umfasst vier Authentifizierungsmethoden.

- Die Authentifizierung mit einem öffentlichen SSH-Schlüssel eröffnet sowohl den Repository-Zugriff mit Git als auch den Zugriff auf die Verwaltungsshell. Weitere Informationen finden Sie unter „[Informationen zu SSH](/enterprise/user/articles/about-ssh)“ und „[Auf die Verwaltungsshell (SSH) zugreifen](/enterprise/{{ currentVersion }}/admin/installation/accessing-the-administrative-shell-ssh)“.
- Die Authentifizierung per Benutzername und Passwort mit HTTP-Cookies eröffnet den Zugriff auf die Webanwendung und auf die Sitzungsverwaltung mit optionaler Zwei-Faktor-Authentifizierung (2FA). Weitere Informationen finden Sie unter „[Integrierte Authentifizierung verwenden](/enterprise/{{ currentVersion }}/admin/user-management/using-built-in-authentication)“.
- Die externe LDAP-, SAML- oder CAS-Authentifizierung mit einem LDAP-Service, einem SAML Identity Provider (IdP) oder anderen kompatiblen Diensten eröffnet den Zugriff auf die Webanwendung. Weitere Informationen finden Sie unter „[Benutzer für Ihre GitHub Enterprise Server-Instanz authentifizieren](/enterprise/{{ currentVersion }}/admin/user-management/authenticating-users-for-your-github-enterprise-server-instance)“.
- OAuth-Token und persönliche Zugriffstoken eröffnen den Zugriff auf Git-Repository-Daten und APIs sowohl für externe Clients als auch für Dienste. Weitere Informationen finden Sie unter "[Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token)."

#### Audit- und Zugriffsprotokollierung

{% data variables.product.prodname_ghe_server %} speichert sowohl herkömmliche Betriebssystem- als auch Anwendungsprotokolle. Die Anwendung führt außerdem detaillierte Audit- und Sicherheitsprotokolle, die {% data variables.product.prodname_ghe_server %} dauerhaft speichert. You can forward both types of logs in real time to multiple destinations via the `syslog-ng` protocol. Weitere Informationen finden Sie unter „[Protokollweiterleitung](/admin/user-management/log-forwarding)“.

Zugriffs- und Auditprotokolle enthalten beispielsweise die folgenden Informationen.

##### Zugriffsprotokolle

- Vollständige Webserverprotokolle über den Browser- und API-Zugriff
- Vollständige Protokolle über den Zugriff auf Repository-Daten über Git, HTTPS und SSH-Protokolle
- Verwaltungszugriffsprotokolle über HTTPS und SSH

##### Auditprotokolle

- Benutzeranmeldungen, Passwortzurücksetzungen, 2FA-Anfragen, Änderungen der E-Mail-Einstellungen und Änderungen an autorisierten Anwendungen und APIs
- Aktionen von Websiteadministratoren wie das Entsperren von Benutzerkonten und Repositorys
- Repository-Push-Events, Zugriffsgewährungen, Übertragungen und Umbenennungen
- Änderungen an der Organisationsmitgliedschaft, u. a. Teamerstellung und -vernichtung

### Open-Source-Abhängigkeiten für {% data variables.product.prodname_ghe_server %}

Eine vollständige Liste der Abhängigkeiten in der Version Ihrer Appliance von {% data variables.product.prodname_ghe_server %} sowie die Lizenz jedes Projekts finden Sie unter `http(s)://HOSTNAME/site/credits`.

Tarballs mit einer vollständigen Liste der Abhängigkeiten und verknüpften Metadaten sind auf Ihrer Appliance verfügbar:
- Plattformübergreifende Abhängigkeiten finden Sie unter `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`.
- Plattformspezifische Abhängigkeiten finden Sie unter `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`.

Tarballs sind mit einer vollständigen Liste der Abhängigkeiten und Metadaten auch unter `https://enterprise.github.com/releases/<version>/download.html` verfügbar.

### Weiterführende Informationen

- „[Eine Testversion von {% data variables.product.prodname_ghe_server %} einrichten](/articles/setting-up-a-trial-of-github-enterprise-server)“
- „[{% data variables.product.prodname_ghe_server %}-Instanz einrichten](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance)“
- [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %}) in the  `github/roadmap` repository
