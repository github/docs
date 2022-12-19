---
title: Informationen zu selbstgehosteten Runnern
intro: 'Du kannst deine eigenen Runner hosten und die Umgebung anpassen, die für die Ausführung von Aufträgen in deinen {% data variables.product.prodname_actions %}-Workflows verwendet wird.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
ms.openlocfilehash: b570dbe3a5df607f0b02e0c7a42a6a7cfb860c80
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107565'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu selbstgehosteten Runnern

Ein selbstgehosteter Runner ist ein System, das du bereitstellst und verwaltest, um Aufträge von {% data variables.product.prodname_actions %} auf {% ifversion ghae or ghec %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} auszuführen. Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter [Grundlegendes zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}.{% elsif ghec or ghes or ghae %} und [Informationen zu {% data variables.product.prodname_actions %} für Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises).{% endif %}

{% data reusables.actions.self-hosted-runner-description %} {% data reusables.actions.self-hosted-runner-locations %}

Du kannst selbstgehostete Runner auf verschiedenen Ebenen der Verwaltungshierarchie hinzufügen:
- Runner auf Repositoryebene sind für ein einzelnes Repository vorgesehen.
- Runner auf Organisationsebene können Aufträge für mehrere Repositorys in einer Organisation verarbeiten.
- Runner auf Unternehmensebene können mehreren Organisationen innerhalb eines Unternehmenskontos zugewiesen werden.

{% data reusables.actions.self-hosted-runner-architecture %} {% data reusables.actions.runner-app-open-source %} Wenn eine neue Version veröffentlicht wird, aktualisiert sich die Runneranwendung automatisch bei Zuweisung eines Auftrags zum Runner oder innerhalb einer Woche nach der Veröffentlichung, wenn dem Runner keine Aufträge zugewiesen wurden.

{% ifversion ghes %} {% note %}

**Hinweis:** {% data reusables.actions.upgrade-runners-before-upgrade-ghes %}

{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

Weitere Informationen zum Installieren und Verwenden von selbstgehosteten Runnern findest du unter [Hinzufügen von selbstgehosteten Runnern](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners) und [Verwenden von selbstgehosteten Runnern in einem Workflow](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow).

## {% ifversion fpt or ghec or ghes %}Unterschiede zwischen von {% data variables.product.prodname_dotcom %} gehosteten und {% elsif ghae %}Merkmale von {% endif %}selbstgehosteten Runnern

{% ifversion fpt or ghec or ghes %} Mit Runnern, die mithilfe von {% data variables.product.prodname_dotcom %} gehostet werden, können deine Workflows schneller und einfacher ausgeführt werden, während selbstgehostete Runner eine hochgradig konfigurierbare Ausführung von Workflows in deiner eigenen benutzerdefinierten Umgebung ermöglichen{% elsif ghae %}Selbstgehostete Runner bieten eine hochgradig konfigurierbare Möglichkeit zum Ausführen von Workflows in deiner eigenen benutzerdefinierten Umgebung{% endif %}. {% ifversion ghae %}Selbstgehostete Runner:{% endif %}

{% ifversion fpt or ghec or ghes %} **Von {% data variables.product.prodname_dotcom %} gehostete Runner:**
- Erhalten automatischer Updates für das Betriebssystem, vorinstallierte Pakete und Tools und die selbstgehostete Runneranwendung.
- Werden von {% data variables.product.prodname_dotcom %} verwaltet und gepflegt.
- Bereitstellen einer sauberen Instanz für jede Auftragsausführung.
- Verwende freie Minuten von deinem {% data variables.product.prodname_dotcom %}-Plan. Nach Überschreiten der Freiminuten gelten Minutentarife.

**Selbstgehostete Runner:**{% endif %}
- Empfange automatische Updates nur für die selbstgehostete Runneranwendung{% ifversion fpt or ghec or ghes > 3.4 or ghae %}, obwohl du automatische Aktualisierungen des Runners möglicherweise deaktiviert hast. Weitere Informationen zum Steuern von Softwareupdates für selbstgehostete Runner findest du unter [Automatische Skalierung mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#controlling-runner-software-updates-on-self-hosted-runners).{% else %}.{% endif %} Du bist dafür verantwortlich, das Betriebssystem sowie alle weiteren Softwarekomponenten zu aktualisieren.
- Kann Clouddienste oder lokale Computer verwenden, für die du bereits bezahlst.
- Können an deine Hardware, das Betriebssystem, Software und Sicherheitsanforderungen angepasst werden.
- Benötigen keine saubere Instanz für jede Auftragsausführung.
- Sind in {% data variables.product.prodname_actions %} kostenlos. Du bist jedoch für die Kosten der Wartung deiner Runnercomputer verantwortlich.{% ifversion ghec or ghes or ghae %}
- Können in Gruppen organisiert werden, um den Zugriff auf bestimmte {% ifversion restrict-groups-to-workflows %}-Workflows, {% endif %}Organisationen und Repositorys zu beschränken. Weitere Informationen findest du unter [Verwalten des Zugriffs auf selbstgehostete Runner mithilfe von Gruppen](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}

## Anforderungen für selbst-gehostete Runner-Maschinen

Du kannst jeden Computer als selbstgehosteten Runner verwenden, solange er die folgenden Anforderungen erfüllt:

* Du kannst die Anwendung für selbst-gehostete Runner auf dem Rechner installieren und ausführen. Weitere Informationen findest du unter [Unterstützte Architekturen und Betriebssysteme für selbstgehostete Runner](#supported-architectures-and-operating-systems-for-self-hosted-runners).
* Die Maschine kann mit {% data variables.product.prodname_actions %} kommunizieren. Weitere Informationen findest du unter [Kommunikation zwischen selbstgehosteten Runnern und {% data variables.product.product_name %}](#communication-requirements).
* Der Rechner verfügt über genügend Hardwareressourcen für den Typ der Workflows, den du ausführen möchtest. Die Anwendung für selbst-gehostete Runner selbst erfordert nur minimale Ressourcen.
* Wenn du Workflows ausführen willst, die Docker-Container-Aktionen oder Service-Container verwenden, brauchst du eine Linux-Maschine und Docker muss installiert sein.

## Automatische Skalierung deiner selbstgehosteten Runner

Du kannst die Anzahl selbstgehosteter Runner in deiner Umgebung als Reaktion auf Webhookereignisse, die du erhältst, automatisch erhöhen oder verringern. Weitere Informationen findest du unter [Automatische Skalierung mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners).

## Usage limits (Nutzungseinschränkungen)

Die Verwendung von {% data variables.product.prodname_actions %} mit selbstgehosteten Runnern unterliegt gewissen Beschränkungen. Die Einschränkungen können sich jederzeit ändern.

{% data reusables.actions.usage-workflow-run-time %}
- **Zeit in der Auftragswarteschlange:** Jeder Auftrag für selbstgehostete Runner kann maximal 24 Stunden lang in die Warteschlange gestellt werden. Wenn ein selbst-gehosteter Läufer die Ausführung des Auftrags nicht innerhalb dieses Limits startet, wird der Auftrag beendet und kann nicht abgeschlossen werden.
{% data reusables.actions.usage-api-requests %}
- **Auftragsmatrix:** {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

## Workflowkontinuität für selbstgehostete Runner

{% data reusables.actions.runner-workflow-continuity %}

## Unterstützte Architekturen und Betriebssysteme für selbstgehostete Runner

Die folgenden Betriebssysteme werden für die selbstgehostete Runneranwendung unterstützt:

### Linux

- Red Hat Enterprise Linux 7 oder höher
- CentOS 7 oder höher
- Oracle Linux 7
- Fedora 29 oder höher
- Debian 9 oder höher
- Ubuntu 16.04 oder höher
- Linux Mint 18 oder höher
- openSUSE 15 oder höher
- SUSE Enterprise Linux (SLES) 12 SP2 oder höher

### Windows

- Windows 7 64-bit
- Windows 8.1 64-Bit
- Windows 10 64-Bit
- Windows Server 2012 R2 64-bit
- Windows Server 2019 64-bit

### macOS

- macOS 10.13 (High Sierra) oder höher

### Architekturen

Die folgenden Prozessorarchitekturen werden für die selbstgehostete Runneranwendung unterstützt:

- `x64`: Linux, macOS, Windows
- `ARM64`: Linux{% ifversion actions-macos-arm %}, macOS{% endif %}{% ifversion actions-windows-arm %}, Windows (derzeit in der Betaphase){% endif %}.
- `ARM32`: Linux.

{% ifversion ghes %}

## Unterstützte Aktionen auf selbstgehosteten Runnern

Möglicherweise ist zusätzliche Konfiguration erforderlich, um Aktionen von {% data variables.product.prodname_dotcom_the_website %} mit {% data variables.product.prodname_ghe_server %} oder die `actions/setup-LANGUAGE`-Aktionen mit selbstgehosteten Runnern zu verwenden, die keinen Internetzugang haben. Weitere Informationen findest du unter [Verwalten des Zugriffs auf Aktionen aus {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/managing-access-to-actions-from-githubcom). Zudem kannst du deine*n {% data variables.product.prodname_enterprise %}-Websiteadministrator*in kontaktieren.

{% endif %}

<a name="communication-requirements"></a>

## Kommunikation zwischen selbst-gehosteten Runnern und {% data variables.product.product_name %}

Der selbstgehostete Runner stellt eine Verbindung mit {% data variables.product.product_name %} her, um Auftragszuweisungen zu erhalten und neue Versionen der Runneranwendung herunterzuladen. Der selbstgehostete Runner verwendet eine _lange {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} Anfrage_, die 50 Sekunden lang eine Verbindung mit {% data variables.product.product_name %} öffnet. Wird keine Antwort empfangen, wird erfolgt ein Verbindungstimeout, und eine neue lange Anfrage wird erstellt. Die Anwendung muss auf dem Computer ausgeführt werden, um {% data variables.product.prodname_actions %}-Aufträge zu akzeptieren und auszuführen.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

{% ifversion fpt or ghec %} Da der selbstgehostete Runner eine Verbindung mit {% data variables.location.product_location %} herstellt, ist es nicht nötig, dass du {% data variables.product.prodname_dotcom %} erlaubst, eingehende Verbindungen mit deinem selbst gehosteten Runner herzustellen.
{% elsif ghes or ghae %} Es ist nur eine ausgehende Verbindung vom Runner zu {% data variables.location.product_location %} erforderlich. Es besteht keine Notwendigkeit für eine eingehende Verbindung von {% data variables.location.product_location %} zum Runner.
{%- endif %}

{% ifversion ghes %}

{% data variables.product.product_name %} muss eingehende Verbindungen von deinen Runnern über {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} im Hostnamen und der API-Unterdomäne von {% data variables.location.product_location %} akzeptieren. Außerdem müssen deine Runner ausgehende Verbindungen mit dem Hostnamen und der API-Unterdomäne von {% data variables.location.product_location %} über {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} zulassen.

{% elsif ghae %}

Du musst sicherstellen, dass der selbstgehostete Runner über einen angemessenen Netzwerkzugriff verfügt, sodass er mit deiner {% data variables.product.product_name %}-URL und deren Unterdomänen kommunizieren kann. Wenn deine Unterdomäne für {% data variables.product.product_name %} beispielsweise `octoghae` lautet, musst du dem selbstgehosteten Runner den Zugriff auf `octoghae.githubenterprise.com`, `api.octoghae.githubenterprise.com` und `codeload.octoghae.githubenterprise.com` erteilen.

Wenn du eine IP-Zulassungsliste verwendest, musst du die IP-Adresse deines selbstgehosteten Runners zur Zulassungsliste hinzufügen. Weitere Informationen findest du unter [Verwalten zulässiger IP-Adressen für deine Organisation](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list).

{% endif %}

{% ifversion fpt or ghec %}

Du musst sicherstellen, dass der Computer über angemessenen Netzwerkzugriff verfügt, um mit den unten aufgeführten {% data variables.product.prodname_dotcom %}-Hosts zu kommunizieren. Einige Hosts sind für wesentliche Runnervorgänge erforderlich, während andere nur für bestimmte Funktionen erforderlich sind.

{% note %}

**Hinweis:** Einige der unten aufgeführten Domänen werden mithilfe von `CNAME`-Einträgen konfiguriert. Für bestimmte Firewalls musst du Regeln möglicherweise rekursiv für alle `CNAME`-Einträge hinzufügen. Beachte, dass sich die `CNAME`-Einträge in Zukunft ändern können und dass nur die unten aufgeführten Domänen konstant bleiben.

{% endnote %}

**Erforderlich für wesentliche Vorgänge:**

```
github.com
api.github.com
```

**Erforderlich für Downloadaktionen:**

```
codeload.github.com
```

**Erforderlich für Runnerversionsupdates:**

```
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**Erforderlich für den Up- und Download von Caches und Workflowartefakten:**    

```
*.blob.core.windows.net
```

**Erforderlich für das Abrufen von OIDC-Token:**

```
*.actions.githubusercontent.com
```

**Erforderlich für das Herunterladen oder Veröffentlichen von Paketen oder Containern in {% data variables.product.prodname_dotcom %}-Paketen:**

```
*.pkg.github.com
ghcr.io
```

Darüber hinaus benötigt dein Workflow möglicherweise Zugriff auf andere Netzwerkressourcen.

Wenn du eine IP-Zulassungsliste für dein {% data variables.product.prodname_dotcom %}-Organisations- oder -Unternehmenskonto verwendest, musst du der Zulassungsliste die IP-Adresse ihres selbstgehosteten Runners hinzufügen. Weitere Informationen findest du in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation unter [Verwalten zulässiger IP-Adressen für deine Organisation](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list) und [Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise){% ifversion fpt %}.{% else %}."{% endif %}

{% else %}

{% ifversion ghes %}Selbstgehostete Runner erfordern keinen externen Internetzugriff für ihre Funktionsfähigkeit. Daher kannst du das Netzwerkrouting zur direkten Kommunikation zwischen dem selbstgehosteten Runner und {% data variables.location.product_location %} nutzen. Du kannst deinem selbstgehosteten Runner zum Beispiel eine private IP-Adresse zuweisen und das Routing so konfigurieren, dass der Datenverkehr an {% data variables.location.product_location %} gesendet wird, ohne dass der Datenverkehr ein öffentliches Netzwerk durchlaufen muss.{% endif %}

{% endif %}

{% ifversion ghae %} Wenn du eine IP-Zulassungsliste für dein {% data variables.product.prodname_dotcom %}-Organisations- oder -Unternehmenskonto verwendest, musst du der Zulassungsliste die IP-Adresse ihres selbstgehosteten Runners hinzufügen. Weitere Informationen findest du unter [Verwalten zulässiger IP-Adressen für deine Organisation](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list).
{% endif %}

Du kannst auch selbstgehostete Runner auch mit einem Proxyserver verwenden. Weitere Informationen findest du unter [Verwenden eines Proxyservers mit selbstgehosteten Runnern](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners).

Weitere Informationen zur Problembehandlung allgemeiner Netzwerkkonnektivitätsprobleme findest du unter [Überwachung und Problembehandlung von selbstgehosteten Runnern](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#troubleshooting-network-connectivity).

{% ifversion ghes or ghae %}

## Kommunikation zwischen selbstgehosteten Runnern und {% data variables.product.prodname_dotcom_the_website %}

Selbstgehostete Runner müssen keine Verbindung mit {% data variables.product.prodname_dotcom_the_website %} herstellen, es sei denn, du hast den automatischen Zugriff auf {% data variables.product.prodname_dotcom_the_website %}-Aktionen für {% data variables.location.product_location %} aktiviert. Weitere Informationen findest du unter [Informationen zum Verwenden von Aktionen in deinem Unternehmen](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise).

Wenn du den automatischen Zugriff auf {% data variables.product.prodname_dotcom_the_website %}-Aktionen aktiviert hast, wird der selbstgehostete Runner direkt mit {% data variables.product.prodname_dotcom_the_website %} verbunden, um Aktionen herunterzuladen. Du musst sicherstellen, dass der Rechner über den entsprechenden Netzwerkzugriff verfügt, um mit den nachfolgend aufgelisteten {% data variables.product.prodname_dotcom %}-URLs zu kommunizieren. 

```
github.com
api.github.com
codeload.github.com
```

{% note %}

**Hinweis:** Einige der oben aufgeführten Domänen werden mithilfe von `CNAME`-Einträgen konfiguriert. Für bestimmte Firewalls musst du Regeln möglicherweise rekursiv für alle `CNAME`-Einträge hinzufügen. Beachte, dass sich die `CNAME`-Einträge in Zukunft ändern können und dass nur die oben aufgeführten Domänen konstant bleiben.

{% endnote %}

{% endif %}

## Sicherheit von selbstgehosteten Runnern

{% ifversion fpt or ghec %}

{% data reusables.actions.self-hosted-runner-security %}

{% endif %}

{% ifversion fpt or ghec %}

Dieses Problem besteht nicht mit von {% data variables.product.prodname_dotcom %} gehosteten Runnern, da jeder von {% data variables.product.prodname_dotcom %} gehostete Runner immer aus einer klar isolierten VM besteht und am Ende der Auftragsausführung endgültig gelöscht wird.

{% endif %}

Nicht vertrauenswürdige Workflows auf deinem selbstgehosteten Runner stellen erhebliche Sicherheitsrisiken für deine Computer- und Netzwerkumgebung dar, insbesondere wenn deine Computerumgebung auftragsübergreifend bestehen bleibt. Beispiele für Risiken:

* Schadprogramme, die auf dem Rechner laufen.
* Ausbruch aus der Runner-Sandbox der Maschine.
* Der Zugriff auf die Netzwerkumgebung der Maschine wird offengelegt.
* Unerwünschte oder gefährliche Daten werden dauerhaft auf der Maschine gespeichert.

Weitere Informationen zur Sicherheitshärtung von selbstgehostete Runnern findest du unter [Sicherheitshärten für {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners).

{% ifversion ghec or ghes or ghae %}

## Weitere Informationsquellen

- [Erste Schritte mit selbstgehosteten Runnern für dein Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)

{% endif %}
