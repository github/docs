---
title: Problembehandlung bei Dependabot-Fehlern
intro: 'Manchmal kann {% data variables.product.prodname_dependabot %} keinen Pull Request auslösen, um deine Abhängigkeiten zu aktualisieren. Du kannst den Fehler überprüfen und die Blockierung von {% data variables.product.prodname_dependabot %} aufheben.'
shortTitle: Troubleshoot errors
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Pull requests
  - Troubleshooting
  - Errors
  - Dependencies
ms.openlocfilehash: 21b7c2b2e6c613d4443b54404dfc120bd8ac00e2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109797'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Informationen zu {% data variables.product.prodname_dependabot %}-Fehlern

{% data reusables.dependabot.pull-request-introduction %}

Wenn etwas verhindert, dass {% data variables.product.prodname_dependabot %} einen Pull Request auslöst, wird dies als Fehler gemeldet.

## Untersuchen von Fehlern bei {% data variables.product.prodname_dependabot_security_updates %}

Wenn {% data variables.product.prodname_dependabot %} daran gehindert wird, einen Pull Request zum Beheben einer {% data variables.product.prodname_dependabot %}-Warnung zu erstellen, wird die Fehlermeldung in der Warnung angezeigt. Die {% data variables.product.prodname_dependabot_alerts %}-Ansicht zeigt eine Liste aller Warnungen an, die noch nicht behoben wurden. Für den Zugriff auf die Warnungsansicht klicke auf der Registerkarte **Sicherheit** für das Repository auf **{% data variables.product.prodname_dependabot_alerts %}**. Wenn ein Pull Request generiert wurde, der die anfällige Abhängigkeit korrigiert, enthält die Warnung einen Link zu diesem Pull Request.

![{% data variables.product.prodname_dependabot_alerts %}-Ansicht mit einem Pull Request-Link](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

Es gibt mehrere Gründe, warum eine Warnung nicht über einen Pull Request-Link verfügt:

1. {% data variables.product.prodname_dependabot_security_updates %} sind nicht für das Repository aktiviert.
{% ifversion GH-advisory-db-supports-malware %}
1. Die Warnung gilt für Schadsoftware, und es ist keine sichere Version des Pakets verfügbar.
{% endif %}
1. Die Warnung ist für eine indirekte oder transitive Abhängigkeit vorgesehen, die in einer Sperrdatei nicht explizit definiert ist.
1. Ein Fehler hat verhindert, dass {% data variables.product.prodname_dependabot %} einen Pull Request erstellt.

Wenn ein Fehler verhindert hat, dass {% data variables.product.prodname_dependabot %} einen Pull Request erstellt, kannst du Details des Fehlers anzeigen, indem du auf die Warnung klickst.

## Untersuchen von Fehlern bei {% data variables.product.prodname_dependabot_version_updates %}

Wenn {% data variables.product.prodname_dependabot %} daran gehindert wurde, einen Pull Request zum Aktualisieren einer Abhängigkeit in einem Ökosystem zu erstellen, wird das Fehlersymbol in der Manifestdatei angezeigt. Die Manifestdateien, die von {% data variables.product.prodname_dependabot %} verwaltet werden, werden auf der Registerkarte „{% data variables.product.prodname_dependabot %}“ aufgelistet. Für den Zugriff auf diese Registerkarte klicke auf der Registerkarte **Erkenntnisse** für das Repository auf **Abhängigkeitsdiagramm**, und klicke dann auf die Registerkarte **{% data variables.product.prodname_dependabot %}**.

![{% data variables.product.prodname_dependabot %}-Ansicht mit einem Fehler](/assets/images/help/dependabot/dependabot-tab-view-error.png)

{% ifversion fpt or ghec %}

Wenn du die Protokolldatei für eine beliebige Manifestdatei anzeigen möchtest, klicke auf den Link **Last checked TIME ago** (Zuletzt überprüft vor ZEIT). Wenn du die Protokolldatei für ein Manifest anzeigst, das mit einem Fehlersymbol angezeigt wird (z. B. Maven im obigen Screenshot), werden auch alle Fehler angezeigt.

![{% data variables.product.prodname_dependabot %}-Versionsupdates und Protokoll ](/assets/images/help/dependabot/dependabot-version-update-error.png)

{% else %}

Wenn du die Protokolle für eine Manifestdatei anzeigen möchtest, klicke auf den Link **Last checked TIME ago** (Zuletzt überprüft vor ZEIT) und dann auf **Protokolle anzeigen**.

![{% data variables.product.prodname_dependabot %}-Versionsupdates und Protokoll ](/assets/images/enterprise/3.3/dependabot/dependabot-version-update-error.png)

{% endif %}

## Grundlegendes zu {% data variables.product.prodname_dependabot %}-Fehlern

Pull Requests für Sicherheitsupdates dienen zum Upgrade einer anfälligen Abhängigkeit auf die Mindestversion, die einen Fix für das Sicherheitsrisiko enthält. Im Gegensatz dazu dienen Pull Requests für Versionsupdates zum Upgrade einer Abhängigkeit auf die neueste Version, die nach dem Paketmanifest und den {% data variables.product.prodname_dependabot %}-Konfigurationsdateien zulässig ist. Daher sind einige Fehler für einen Updatetyp spezifisch.

### {% data variables.product.prodname_dependabot %} kann DEPENDENCY nicht auf eine nicht anfällige Version aktualisieren

**Nur Sicherheitsupdates.** {% data variables.product.prodname_dependabot %} kann keinen Pull Request erstellen, um die anfällige Abhängigkeit auf eine sichere Version zu aktualisieren, ohne andere Abhängigkeiten im Abhängigkeitsdiagramm für dieses Repository zu unterbrechen.

Jede Anwendung mit Abhängigkeiten hat ein Abhängigkeitsdiagramm, also einen gerichteten azyklischen Graph jeder Paketversion, von der die Anwendung direkt oder indirekt abhängt. Jedes Mal, wenn eine Abhängigkeit aktualisiert wird, muss dieses Diagramm aufgelöst werden, andernfalls wird die Anwendung nicht erstellt. Wenn ein Ökosystem über ein tiefes und komplexes Abhängigkeitsdiagramm verfügt, z. B. npm und RubyGems, ist es oft unmöglich, ein Upgrade für eine einzelne Abhängigkeit ohne ein Upgrade für das gesamte Ökosystem durchzuführen.

Die beste Möglichkeit, dieses Problem zu vermeiden, besteht darin, mit den zuletzt veröffentlichten Versionen auf dem neuesten Stand zu bleiben, z. B. durch Aktivieren von Versionsupdates. Dadurch wird die Wahrscheinlichkeit erhöht, dass ein Sicherheitsrisiko in einer Abhängigkeit durch ein einfaches Upgrade behoben werden kann, das das Abhängigkeitsdiagramm nicht unterbricht. Weitere Informationen findest du unter [Konfigurieren von Versionsupdates für {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).{% ifversion dependabot-security-updates-unlock-transitive-dependencies %}

### {% data variables.product.prodname_dependabot %} versucht, Abhängigkeiten ohne Warnung zu aktualisieren

**Nur Sicherheitsupdates.** {% data variables.product.prodname_dependabot %} aktualisiert explizit definierte transitive Abhängigkeiten, die bei allen Ökosystemen anfällig sind. Bei npm löst {% data variables.product.prodname_dependabot %} einen Pull Request aus, der auch die übergeordnete Abhängigkeit aktualisiert, wenn dies die einzige Möglichkeit ist, die transitive Abhängigkeit zu beheben.

Beispiel: Ein Projekt mit einer Abhängigkeit auf `A` Version `~2.0.0`, die eine transitive Abhängigkeit auf `B` Version `~1.0.0` hat, wird in `1.0.1` aufgelöst.
```
my project
|
--> A (2.0.0) [~2.0.0]
       |
       --> B (1.0.1) [~1.0.0]
```       
Wenn ein Sicherheitsrisiko für `B` Version `<2.0.0` veröffentlicht wird und ein Patch unter `2.0.0` verfügbar ist, versucht {% data variables.product.prodname_dependabot %}, `B` zu aktualisieren, was aber aufgrund der Einschränkung durch `A` nicht möglich ist, die nur niedrigere anfällige Versionen zulässt. Zum Beheben des Sicherheitsrisikos sucht {% data variables.product.prodname_dependabot %} nach Updates für Abhängigkeit `A`, welche die Verwendung der reparierten Version `B` zulassen. 

{% data variables.product.prodname_dependabot %} generiert automatisch einen Pull Request, der sowohl die gesperrten übergeordneten als auch die untergeordneten transitiven Abhängigkeiten aktualisiert.{% endif %}

### {% data variables.product.prodname_dependabot %} kann nicht auf die erforderliche Version aktualisiert werden, da bereits ein offener Pull Request für die neueste Version vorhanden ist.

**Nur Sicherheitsupdates.** {% data variables.product.prodname_dependabot %} erstellt keinen Pull Request, um die anfällige Abhängigkeit auf eine sichere Version zu aktualisieren, da bereits ein offener Pull Request vorhanden ist, um diese Abhängigkeit zu aktualisieren. Dieser Fehler wird angezeigt, wenn ein Sicherheitsrisiko in einer einzigen Abhängigkeit erkannt wird und bereits ein offener Pull Request vorhanden ist, um die Abhängigkeit auf die neueste Version zu aktualisieren.

Du hast zwei Möglichkeiten: Du kannst den offenen Pull Request überprüfen und zusammenführen, sobald du sicher bist, dass die Änderung sicher ist. Alternativ kannst du diesen Pull Request schließen und einen neuen Pull Request für ein Sicherheitsupdate auslösen. Weitere Informationen findest du unter [Manuelles Auslösen eines {% data variables.product.prodname_dependabot %}-Pull Requests](#triggering-a-dependabot-pull-request-manually).

### {% data variables.product.prodname_dependabot %}-Timeout während des Updates

{% data variables.product.prodname_dependabot %} brauchte länger als die zulässige maximale Zeit, um das erforderliche Update zu bewerten und einen Pull Request vorzubereiten. Dieser Fehler wird normalerweise nur für große Repositorys mit vielen Manifestdateien angezeigt, z. B. npm- oder yarn-Monorepo-Projekte mit Hunderten von *package.json*-Dateien. Die Bewertung von Aktualisierungen des Composer-Ökosystems dauert auch länger, und es kann zu einem Timeout kommen.

Dieser Fehler ist schwer zu beheben. Wenn es bei einem Versionsupdate zu einem Timeout kommt, kannst du die wichtigsten Abhängigkeiten angeben, die mit dem `allow`-Parameter aktualisiert werden sollen, oder alternativ den `ignore`-Parameter verwenden, um einige Abhängigkeiten von Updates auszuschließen. Durch das Aktualisieren deiner Konfiguration kann {% data variables.product.prodname_dependabot %} das Versionsupdate überprüfen und den Pull Request in der verfügbaren Zeit generieren.

Wenn es bei einem Sicherheitsupdate zu einem Timeout kommt, kannst du die Wahrscheinlichkeit dafür verringern, indem du die Abhängigkeiten auf dem neuesten Stand hältst, z. B. durch Aktivieren von Versionsupdates. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot %}-Versionsupdates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).

### {% data variables.product.prodname_dependabot %} kann keine weiteren Pull Requests öffnen

Es gibt ein Limit für die Anzahl der offenen Pull Requests, die von {% data variables.product.prodname_dependabot %} generiert werden. Wenn dieses Limit erreicht ist, werden keine neuen Pull Requests geöffnet, und dieser Fehler wird gemeldet. Die beste Möglichkeit zum Beheben dieses Fehlers besteht darin, einige der offenen Pull Requests zu überprüfen und zusammenzuführen.

Es gibt separate Limits für Pull Requests für Sicherheits- und Versionsupdates, sodass offene Pull Requests für Versionsupdates nicht die Erstellung eines Pull Requests für ein Sicherheitsupdate blockieren können. Das Limit für Pull Requests für Sicherheitsupdates beträgt 10. Standardmäßig beträgt das Limit für Versionsupdates 5, aber du kannst diesen Wert mithilfe des `open-pull-requests-limit`-Parameters in der Konfigurationsdatei ändern. Weitere Informationen findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit).

Die beste Möglichkeit zum Beheben dieses Fehlers besteht darin, einige der vorhandenen Pull Requests zusammenzuführen oder zu schließen und einen neuen Pull Request manuell auszulösen. Weitere Informationen findest du unter [Manuelles Auslösen eines {% data variables.product.prodname_dependabot %}-Pull Requests](#triggering-a-dependabot-pull-request-manually).

### {% data variables.product.prodname_dependabot %} kann deine Abhängigkeiten nicht auflösen oder darauf zugreifen.

Wenn {% data variables.product.prodname_dependabot %} versucht zu überprüfen, ob Abhängigkeitsverweise in einem Repository aktualisiert werden müssen, jedoch nicht auf eine oder mehrere der verwiesenen Dateien zugreifen kann, schlägt der Vorgang mit der Fehlermeldung „{% data variables.product.prodname_dependabot %} kann deine LANGUAGE-Abhängigkeitsdateien nicht auflösen“ fehl. Der API-Fehlertyp ist `git_dependencies_not_reachable`.

Wenn {% data variables.product.prodname_dependabot %} nicht auf eine private Paketregistrierung zugreifen kann, in der sich eine Abhängigkeit befindet, wird einer der folgenden Fehler generiert:

*   „Dependabot can't reach a dependency in a private package registry“ (Dependabot kann eine Abhängigkeit in einer privaten Paketregistrierung nicht erreichen)<br>
   (API-Fehlertyp: `private_source_not_reachable`)
*   „Dependabot can't authenticate to a private package registry“ (Dependabot kann sich nicht bei einer privaten Paketregistrierung authentifizieren)<br>
   (API-Fehlertyp:`private_source_authentication_failure`)
*   „Dependabot timed out while waiting for a private package registry“ (Dependabot-Timeout beim Warten auf eine private Paketregistrierung)<br>
   (API-Fehlertyp:`private_source_timed_out`)
*   „Dependabot couldn't validate the certificate for a private package registry“ (Dependabot konnte das Zertifikat für eine private Paketregistrierung nicht überprüfen)<br>
   (API-Fehlertyp:`private_source_certificate_failure`)

Damit {% data variables.product.prodname_dependabot %} die Abhängigkeitsverweise erfolgreich aktualisieren kann, stelle sicher, dass alle referenzierten Abhängigkeiten an zugänglichen Speicherorten gehostet werden. 

**Nur Versionsupdates.** {% data reusables.dependabot.private-dependencies-note %} Darüber hinaus bietet {% data variables.product.prodname_dependabot %} keine Unterstützung für private {% data variables.product.prodname_dotcom %}-Abhängigkeiten für alle Paket-Manager. Weitere Informationen findest du unter [Informationen zu Dependabot-Versionsupdates](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems).

## Manuelles Auslösen eines {% data variables.product.prodname_dependabot %}-Pull Requests

Wenn du die Blockierung von {% data variables.product.prodname_dependabot %} aufhebst, kannst du einen neuen Versuch zum Erstellen eines Pull Requests manuell auslösen.

- **Sicherheitsupdates**: Zeige die {% data variables.product.prodname_dependabot %}-Warnung an, die den Fehler anzeigt, den du behoben hast, und klicke auf **{% data variables.product.prodname_dependabot %}-Sicherheitsupdate erstellen**.
- **Versionsupdates**: Klicke auf der Registerkarte **Erkenntnisse** für das Repository auf **Abhängigkeitsdiagramm**, und klicke dann auf die Registerkarte **Dependabot**. Klicke auf **Last checked *TIME* ago** (Zuletzt überprüft vor ZEIT), um die Protokolldatei anzuzeigen, die {% data variables.product.prodname_dependabot %} während der letzten Überprüfung auf Versionsupdates generiert hat. Klicke auf **Nach Updates suchen**.

## Weitere Informationsquellen

- [Problembehandlung beim Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)
- [Problembehandlung bei der Erkennung von anfälligen Abhängigkeiten](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)
