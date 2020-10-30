---
title: Netzwerkports
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls/
  - /enterprise/admin/articles/firewall/
  - /enterprise/admin/guides/installation/network-configuration/
  - /enterprise/admin/guides/installation/network-ports-to-open/
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
intro: 'Öffnen Sie Netzwerkports anhand dessen, welche Netzwerkdienste Sie für Administratoren, Endbenutzer und für die E-Mail-Unterstützung bereitstellen müssen.'
versions:
  enterprise-server: '*'
---

### Verwaltungsports

Einige Verwaltungsports sind zum Konfigurieren von {% data variables.product.product_location_enterprise %} und zum Ausführen bestimmter Features erforderlich. Verwaltungsports sind für die einfache Verwendung von Anwendungen durch Endbenutzer nicht erforderlich.

| Port     | Dienst | Beschreibung                                                                                                                                                                                                                                                                                        |
| -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8443     | HTTPS  | Sichere webbasierte {% data variables.enterprise.management_console %}. Für die grundlegende Installation und Konfiguration erforderlich.                                                                                                                                                           |
| 8080     | HTTP   | Webbasierte {% data variables.enterprise.management_console %} im Nur-Text-Format. Nur erforderlich, wenn SSL manuell deaktiviert wird.                                                                                                                                                             |
| 122      | SSH    | Shellzugriff für {% data variables.product.product_location_enterprise %}. Muss für eingehende Verbindungen von allen anderen Knoten in einer Hochverfügbarkeitskonfiguration geöffnet sein. Der standardmäßige SSH-Port (22) ist für den Git- und SSH-Netzwerk-Traffic der Anwendung vorgesehen. |
| 1194/UDP | VPN    | Sicherer Replikationsnetzwerktunnel in einer hochverfügbaren Konfiguration. Muss für alle anderen Knoten in der Konfiguration geöffnet sein.                                                                                                                                                        |
| 123/UDP  | NTP    | Für Zeitprotokollvorgänge erforderlich.                                                                                                                                                                                                                                                             |
| 161/UDP  | SNMP   | Für Netzwerküberwachungs-Protokollvorgänge erforderlich.                                                                                                                                                                                                                                            |

### Anwendungsports für Endbenutzer

Mit Anwendungsports können Endbenutzer auf Webanwendungen und Git zugreifen.

| Port | Dienst | Beschreibung                                                                                                                                                                                                     |
| ---- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 443  | HTTPS  | Zugriff auf die Webanwendung und Git über HTTPS.                                                                                                                                                                 |
| 80   | HTTP   | Webanwendungszugriff. Alle Anforderungen werden an den HTTPS-Port weitergeleitet, wenn SSL aktiviert ist.                                                                                                        |
| 22   | SSH    | Zugriff auf Git über SSH. Unterstützt das Klonen, Abrufen und Übertragen von Vorgängen an öffentliche/private Repositorys.                                                                                       |
| 9418 | Git    | Der Git-Protokollport unterstützt das Klonen und Abrufen von Vorgängen für öffentliche Repositorys mit unverschlüsselter Netzwerkkommunikation. {% data reusables.enterprise_installation.when-9418-necessary %}

{% data reusables.enterprise_installation.terminating-tls %}

### E-Mail-Ports

E-Mail-Ports müssen direkt oder über ein Relay für die Unterstützung eingehender E-Mails für Endbenutzer erreichbar sein.

| Port | Dienst | Beschreibung                                           |
| ---- | ------ | ------------------------------------------------------ |
| 25   | SMTP   | Unterstützung für SMTP mit Verschlüsselung (STARTTLS). |
