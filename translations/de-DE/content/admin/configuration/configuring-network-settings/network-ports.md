---
title: Netzwerkports
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls
  - /enterprise/admin/articles/firewall
  - /enterprise/admin/guides/installation/network-configuration
  - /enterprise/admin/guides/installation/network-ports-to-open
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: 'Öffne Netzwerkports anhand dessen, welche Netzwerkdienste du für Administratoren, Endbenutzer und für die E-Mail-Unterstützung bereitstellen musst.'
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: 048b27ed44cea11057c781ae3043078a825f8d1a
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160654'
---
## Verwaltungsports

Einige Verwaltungsports sind zum Konfigurieren von {% data variables.location.product_location %} und zum Ausführen bestimmter Features erforderlich. Verwaltungsports sind für die einfache Verwendung von Anwendungen durch Endbenutzer nicht erforderlich.

| Port | Dienst | BESCHREIBUNG |
|---|---|---|
| 8443 | HTTPS | Sichere webbasierte {% data variables.enterprise.management_console %}. Für die grundlegende Installation und Konfiguration erforderlich. |
| 8080 | HTTP | Webbasierte {% data variables.enterprise.management_console %} im Nur-Text-Format. Nur erforderlich, wenn TLS manuell deaktiviert wird. |
| 122 | SSH | Shellzugriff für {% data variables.location.product_location %}. Muss für eingehende Verbindungen zwischen allen Knoten in einer Hochverfügbarkeitskonfiguration geöffnet sein. Der standardmäßige SSH-Port (22) ist für den Git- und SSH-Netzwerk-Traffic der Anwendung vorgesehen. |
| 1194/UDP | VPN | Sicherer Replikationsnetzwerktunnel in einer hochverfügbaren Konfiguration. Muss für die Kommunikation zwischen allen Knoten in der Konfiguration geöffnet sein.|
| 123/UDP| NTP | Für Zeitprotokollvorgänge erforderlich. |
| 161/UDP | SNMP | Für Netzwerküberwachungs-Protokollvorgänge erforderlich. |

## Anwendungsports für Endbenutzer

Mit Anwendungsports können Endbenutzer auf Webanwendungen und Git zugreifen.

| Port | Dienst | BESCHREIBUNG |
|---|---|---|
| 443 | HTTPS | Zugriff auf die Webanwendung und Git über HTTPS. |
| 80 | HTTP | Webanwendungszugriff. Alle Anforderungen werden an den HTTPS-Port umgeleitet, wenn TLS konfiguriert ist. |
| 22 | SSH | Zugriff auf Git über SSH. Unterstützt das Klonen, Abrufen und Übertragen von Vorgängen an öffentliche/private Repositorys. |
| 9418 | Git | Der Git-Protokollport unterstützt das Klonen und Abrufen von Vorgängen für öffentliche Repositorys mit unverschlüsselter Netzwerkkommunikation. {% data reusables.enterprise_installation.when-9418-necessary %} |

{% data reusables.enterprise_installation.terminating-tls %}

## E-Mail-Ports

E-Mail-Ports müssen direkt oder über ein Relay für die Unterstützung eingehender E-Mails für Endbenutzer erreichbar sein.

| Port | Dienst | BESCHREIBUNG |
|---|---|---|
| 25 | SMTP | Unterstützung für SMTP mit Verschlüsselung (STARTTLS). |

## {% data variables.product.prodname_actions %}-Ports

{% data variables.product.prodname_actions %}-Ports müssen für selbstgehostete Runner zugänglich sein, um eine Verbindung mit {% data variables.location.product_location %} herzustellen. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-enterprise-server)“.

| Port | Dienst | BESCHREIBUNG |
|---|---|---|
| 443 | HTTPS | Selbstgehostete Runner stellen eine Verbindung mit {% data variables.location.product_location %} her, um Auftragszuweisungen zu erhalten und neue Versionen der Runneranwendung herunterzuladen. Erforderlich, wenn TLS konfiguriert ist.
| 80 | HTTP | Selbstgehostete Runner stellen eine Verbindung mit {% data variables.location.product_location %} her, um Auftragszuweisungen zu erhalten und neue Versionen der Runneranwendung herunterzuladen. Erforderlich, wenn TLS nicht konfiguriert ist.

Wenn du den automatischen Zugriff auf {% data variables.product.prodname_dotcom_the_website %}-Aktionen aktivierst, sucht {% data variables.product.prodname_actions %} immer zuerst nach einer Aktion für {% data variables.location.product_location %} über diese Ports, bevor {% data variables.product.prodname_dotcom_the_website %} überprüft wird. Weitere Informationen findest du unter [Aktivieren des automatischen Zugriffs auf {% data variables.product.prodname_dotcom_the_website %}-Aktionen mithilfe von {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#about-resolution-for-actions-using-github-connect).

## {% data variables.product.prodname_github_connect %}-Ports

Wenn Du {% data variables.product.prodname_github_connect %} aktivierst, verwendet die Verbindung zwischen {% data variables.product.product_name %} und {% data variables.product.prodname_dotcom_the_website %} HTTPS über die Ports 443 oder 80, und TLS ist erforderlich. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect).

## Weiterführende Themen

- [Konfigurieren von TLS](/admin/configuration/configuring-network-settings/configuring-tls)
