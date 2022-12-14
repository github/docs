---
title: Systemübersicht
intro: 'Hier erfährst du mehr über die internen Systemabläufe, Funktionen und die Sicherheit von {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/installation/system-overview
  - /enterprise/admin/overview/system-overview
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Security
  - Storage
ms.openlocfilehash: 656d68b267b4a739812b10e9409609f61cacdd5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066938'
---
## Informationen zu {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} {% data reusables.enterprise.github-distributes-ghes %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server).

## Speicherarchitektur

{% data variables.product.product_name %} erfordert zwei Speichervolumes: eines für den Pfad des *Stammdateisystems* (`/`) und eines für den Pfad des *Benutzerdateisystems* (`/data/user`). Diese Architektur vereinfacht die Upgrade-, Rollback und Wiederherstellungsprozeduren, indem die in Ausführung befindliche Softwareumgebung von den persistenten Anwendungsdaten getrennt wird.

Das Root-Dateisystem ist im verteilten Maschinen-Image enthalten. Es enthält das Basisbetriebssystem und die {% data variables.product.product_name %}-Anwendungsumgebung. Das Root-Dateisystem sollte als flüchtig behandelt werden. Daten auf dem Stammdateisystem werden beim Upgrade auf künftige {% data variables.product.product_name %}-Releases ersetzt.

Das Stammspeichervolume wird in zwei gleich große Partitionen unterteilt. Eine der Partitionen wird als Stammdateisystem (`/`) bereitgestellt. Die andere Partition wird nur während Upgrades und Rollbacks von Upgrades als `/mnt/upgrade` bereitgestellt, um bei Bedarf einfachere Rollbacks zu ermöglichen. Wenn beispielsweise ein Stammvolume mit 200 GB zugewiesen ist, sind 100  GB für das Stammdateisystem und 100 GB für die Upgrades und Rollbacks reserviert.

Das Stammdateisystem enthält Dateien, die die folgenden Informationen speichern. Diese Liste ist nicht vollständig.

- Benutzerdefinierte Zertifizierungsstellenzertifikate (ZS) (in `/usr/local/share/ca-certificates*`)
- benutzerdefinierte Netzwerkkonfigurationen
- benutzerdefinierte Firewallkonfigurationen
- den Replikationszustand

Das Benutzerdateisystem enthält Dateien, die die folgenden Konfigurationen und Daten speichern. Diese Liste ist nicht vollständig.

- Git-Repositorys
- Datenbanken
- Suchindizes
- auf {% data variables.product.prodname_pages %}-Websites veröffentlichte Inhalte,
- große Dateien von {% data variables.large_files.product_name_long %},
- Pre-Receive-Hook-Umgebungen.

## Bereitstellungstopologien

Du kannst {% data variables.product.product_name %} in einer Vielzahl von Topologien bereitstellen (z. B. ein Hochverfügbarkeitspaar). Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_ghe_server %}](/admin/overview/about-github-enterprise-server#about-deployment-topologies).

## Datenaufbewahrung und Rechenzentrumsredundanz

{% warning %}

**Warnung:** Bevor du {% data variables.product.product_name %} in einer Produktionsumgebung verwendest, wird dringend empfohlen, Sicherungen und einen Notfallwiederherstellungsplan einzurichten.

{% endwarning %}

{% data variables.product.product_name %} enthält Unterstützung für Onlinesicherungen und inkrementelle Sicherungen mit {% data variables.product.prodname_enterprise_backup_utilities %}. Du kannst inkrementelle Snapshots über eine sichere Netzwerkverbindung (den SSH-Verwaltungsport) über weite Entfernungen für den externen oder geografisch verteilten Storage erstellen. Im Falle eines Notfalls im primären Rechenzentrum kannst du Momentaufnahmen über das Netzwerk in einer neu bereitgestellten Instanz wiederherstellen.

Zusätzlich zu Netzwerksicherungen werden AWS- (EBS) und VMware-Datenträger-Momentaufnahmen der Benutzerspeichervolumes unterstützt, während die Instanz offline ist oder sich im Wartungsmodus befindet. Regelmäßige Volumemomentaufnahmen können als kostengünstige, unkomplizierte Alternative zu Netzwerksicherungen mit {% data variables.product.prodname_enterprise_backup_utilities %} verwendet werden, wenn deine Dienstebenenanforderungen eine regelmäßige Offlinewartung ermöglichen.

Weitere Informationen findest du unter [Konfigurieren von Sicherungen auf deiner Appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance).

## Sicherheit

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data variables.product.product_name %} umfasst auch zusätzliche Sicherheitsfeatures.

- [Betriebssystem, Software und Patches](#operating-system-software-and-patches)
- [Netzwerksicherheit](#network-security)
- [Anwendungssicherheit](#application-security)
- [Externe Dienste und Supportzugriff](#external-services-and-support-access)
- [Verschlüsselte Kommunikation](#encrypted-communication)
- [Benutzer und Zugriffsberechtigungen](#users-and-access-permissions)
- [Authentifizierung](#authentication)
- [Überwachungs- und Zugriffsprotokollierung](#audit-and-access-logging)

### Betriebssystem, Software und Patches

{% data variables.product.product_name %} führt ein benutzerdefiniertes Linux-Betriebssystem mit den nötigsten Anwendungen und Diensten aus. {% data variables.product.company_short %} verteilt Patches für das Kernbetriebssystem der Instanz als Teil des Standardproduktreleasezyklus. Die Patches richten sich an Funktions-, Stabilitäts- und nicht kritische Sicherheitsprobleme bei {% data variables.product.product_name %}. Bei Bedarf stellt {% data variables.product.company_short %} außerdem kritische Sicherheitspatches außerhalb des normalen Releasezyklus bereit.

{% data variables.product.product_name %} wird als Appliance bereitgestellt, und viele der Betriebssystempakete werden im Vergleich zur üblichen Debian-Distribution geändert. Aus diesem Grund unterstützen wir keine Änderung des zugrunde liegenden Betriebssystems (einschließlich Betriebssystemupgrades) entsprechend der [Lizenz- und Supportvereinbarung von {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/license) unter dem Abschnitt 11.3 „Ausschluss“.

Derzeit ist Debian 9 (Stretch) das Basisbetriebssystem für {% data variables.product.product_name %}. Diese Version umfasst die Supportunterstützung im Rahmen des langfristigen Debian-Supportprogramms.  Es gibt Pläne, vor dem Ende der Debian-LTS-Laufzeit für Stretch auf ein neueres Basisbetriebssystem zu wechseln.

Regelmäßige Patchupdates werden auf {% data variables.product.product_name %}-[Releaseseite](https://enterprise.github.com/releases) veröffentlicht, und auf der Seite [Versionshinweise](/admin/release-notes) erhältst du weitere Informationen. Diese Patches enthalten normalerweise Upstreamanbieter- und Projektsicherheitspatches, nachdem sie von unserem Engineeringteam getestet und qualitativ genehmigt wurden. Es kann eine leichte Zeitverzögerung zwischen der Veröffentlichung des Upstreamupdates und dem Zeitpunkt geben, an dem es getestet und in einen kommenden {% data variables.product.product_name %}-Patchrelease gebündelt wird.

### Netzwerksicherheit

Die interne Firewall von {% data variables.product.product_name %} schränkt den Netzwerkzugriff auf die Dienste der Instanz ein. Über das Netzwerk sind ausschließlich Dienste verfügbar, die für die Funktionsfähigkeit der Appliance erforderlich sind. Weitere Informationen findest du unter [Netzwerkports](/admin/configuration/configuring-network-settings/network-ports).

### Anwendungssicherheit

Das Anwendungssicherheitsteam von {% data variables.product.company_short %} konzentriert sich auf die Sicherheitsbewertung, Penetrationstests und Code Reviews für {% data variables.product.company_short %}-Produkte (einschließlich {% data variables.product.product_name %}). {% data variables.product.company_short %} hat zusätzlich externe Sicherheitsfirmen mit zeitabhängigen Sicherheitsbeurteilungen der {% data variables.product.company_short %}-Produkte beauftragt.

### Externe Dienste und Supportzugang

{% data variables.product.product_name %} kann ohne jeglichen ausgehenden Zugriff von deinem Netzwerk auf externe Dienste genutzt werden. Optional kannst du die Integration in externe Dienste zur E-Mail-Zustellung, zur externen Überwachung und zur Protokollweiterleitung aktivieren. Weitere Informationen findest du unter [Konfigurieren von E-Mails für Benachrichtigungen](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications), [Einrichten externer Überwachung](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring) und [Protokollweiterleitung](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding).

Du kannst manuell Fehlerbehebungsdaten sammeln und an den {% data variables.contact.github_support %} senden. Weitere Informationen findest du unter [Bereitstellen von Daten für {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support).

### Verschlüsselte Kommunikation

{% data variables.product.company_short %} konzipiert {% data variables.product.product_name %} für die Ausführung hinter deiner Unternehmensfirewall. Zum Schutz der drahtgebundenen Kommunikation solltest du TLS (Transport Layer Security) aktivieren. {% data variables.product.product_name %} unterstützt handelsübliche TLS-Zertifikate mit 2048 Bit und mehr für den HTTPS-Datenverkehr. Weitere Informationen findest du unter [Konfigurieren von TLS](/admin/configuration/configuring-network-settings/configuring-tls).

Standardmäßig bietet die Instanz auch den SSH-Zugriff (Secure Shell) für den Repositoryzugriff über Git und für Verwaltungszwecke. Weitere Informationen findest du unter [Informationen zu SSH](/authentication/connecting-to-github-with-ssh/about-ssh) und [Zugriff auf die Administrative Shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

{% ifversion ghes > 3.3 %}

Wenn du die SAML-Authentifizierung für {% data variables.product.product_location %} konfigurierst, kannst du verschlüsselte Assertionen zwischen der Instanz und deinem SAML-IdP aktivieren. Weitere Informationen findest du unter [Verwenden von SAML](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml#enabling-encrypted-assertions).

{% endif %}

### Benutzer und Zugriffsberechtigungen

{% data variables.product.product_name %} bietet drei Arten von Konten.

- Das Linux-Benutzerkonto `admin` hat den Zugriff auf das zugrundeliegende Betriebssystem festgelegt, einschließlich des direkten Dateisystems und des Datenbankzugriffs. Eine kleine Gruppe vertrauenswürdiger Administratoren sollte den Zugriff auf dieses Konto erhalten, auf das sie über SSH zugreifen können. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).
- Benutzerkonten in der Webanwendung der Instanz haben uneingeschränkten Zugriff auf die jeweils eigenen Daten sowie auf alle Daten, für die andere Benutzer*innen oder Organisationen den Zugriff ausdrücklich gewähren.
- Websiteadministrator*innen in der Webanwendung der Instanz sind Benutzerkonten, die die allgemeinen Webanwendungs- und Instanzeinstellungen, die Einstellungen für Benutzer- und Organisationskonten sowie die Repositorydaten verwalten können.

Weitere Informationen zu den Benutzerberechtigungen von {% data variables.product.product_name %} findest du unter [Zugriffsberechtigungen in {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/access-permissions-on-github).

### Authentifizierung

{% data variables.product.product_name %} umfasst vier Authentifizierungsmethoden.

- Die Authentifizierung mit einem öffentlichen SSH-Schlüssel eröffnet sowohl den Repository-Zugriff mit Git als auch den Zugriff auf die Verwaltungsshell. Weitere Informationen findest du unter [Informationen zu SSH](/authentication/connecting-to-github-with-ssh/about-ssh) und [Zugriff auf die Administrative Shell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).
- Die Authentifizierung per Benutzername und Passwort mit HTTP-Cookies eröffnet den Zugriff auf die Webanwendung und auf die Sitzungsverwaltung mit optionaler Zwei-Faktor-Authentifizierung (2FA). Weitere Informationen findest du unter [Verwenden der integrierten Authentifizierung](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication).
- Die externe LDAP-, SAML- oder CAS-Authentifizierung mit einem LDAP-Service, einem SAML Identity Provider (IdP) oder anderen kompatiblen Diensten eröffnet den Zugriff auf die Webanwendung. Weitere Informationen findest du unter [Verwalten von IAM für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise).
- OAuth-Token und persönliche Zugriffstoken eröffnen den Zugriff auf Git-Repository-Daten und APIs sowohl für externe Clients als auch für Dienste. Weitere Informationen findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token).

### Audit- und Zugriffsprotokollierung

{% data variables.product.product_name %} speichert sowohl herkömmliche Betriebssystemprotokolle als auch Anwendungsprotokolle. Die Anwendung führt außerdem detaillierte Überwachungs- und Sicherheitsprotokolle, die {% data variables.product.product_name %} dauerhaft speichert. Du kannst beide Protokolltypen über das `syslog-ng`-Protokoll in Echtzeit an mehrere Ziele weiterleiten. Weitere Informationen findest du unter [Informationen zum Überwachungsprotokoll für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise) und [Protokollweiterleitung](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding).

Zugriffs- und Auditprotokolle enthalten beispielsweise die folgenden Informationen.

#### Zugriffsprotokolle

- Vollständige Webserverprotokolle über den Browser- und API-Zugriff
- Vollständige Protokolle über den Zugriff auf Repository-Daten über Git, HTTPS und SSH-Protokolle
- Verwaltungszugriffsprotokolle über HTTPS und SSH

#### Überwachungsprotokolle

- Benutzeranmeldungen, Passwortzurücksetzungen, 2FA-Anfragen, Änderungen der E-Mail-Einstellungen und Änderungen an autorisierten Anwendungen und APIs
- Aktionen von Websiteadministratoren wie das Entsperren von Benutzerkonten und Repositorys
- Repository-Push-Events, Zugriffsgewährungen, Übertragungen und Umbenennungen
- Änderungen an der Organisationsmitgliedschaft, u. a. Teamerstellung und -vernichtung

## Open-Source-Abhängigkeiten für {% data variables.product.product_name %}

Eine vollständige Liste der Abhängigkeiten in der Version deiner {% data variables.product.product_name %}-Instanz sowie die Lizenz jedes Projekts findest du unter `http(s)://HOSTNAME/site/credits`.

Tarballs mit einer vollständigen Liste der Abhängigkeiten und verknüpften Metadaten sind in deiner Instanz verfügbar.

- Für Abhängigkeiten, die für alle Plattformen gelten, unter `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`
- Für Abhängigkeiten, die für eine Plattform spezifisch gelten, unter `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`

Tarballs sind auch mit einer vollständigen Liste der Abhängigkeiten und Metadaten unter `https://enterprise.github.com/releases/<version>/download.html` verfügbar.

## Weiterführende Themen

- [Einrichten einer Testversion von {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)
- [Einrichten einer {% data variables.product.prodname_ghe_server %}-Instanz](/admin/installation/setting-up-a-github-enterprise-server-instance)
