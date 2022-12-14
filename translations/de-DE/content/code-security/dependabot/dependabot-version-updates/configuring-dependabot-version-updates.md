---
title: Konfigurieren von Versionsupdates von Dependabot
intro: 'Du kannst dein Repository so konfigurieren, dass {% data variables.product.prodname_dependabot %} automatisch die von dir verwendeten Pakete aktualisiert.'
permissions: 'People with write permissions to a repository can enable or disable {% data variables.product.prodname_dependabot_version_updates %} for the repository.'
redirect_from:
  - /github/administering-a-repository/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure version updates
ms.openlocfilehash: 8513bd41ec86d353241297d2a5bd6111a49fec3d
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135814'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About version updates for dependencies".-->
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Informationen zu Versionsupdates für Abhängigkeiten

Du aktivierst {% data variables.product.prodname_dependabot_version_updates %}, indem du eine *dependabot.yml*-Konfigurationsdatei in das Verzeichnis `.github` deines Repositorys eincheckst. Dann werden von {% data variables.product.prodname_dependabot %} Pull Requests ausgelöst, damit die von Ihnen konfigurierten Abhängigkeiten auf dem neuesten Stand gehalten werden. Für die Abhängigkeiten jedes Paket-Managers, die du aktualisieren möchtest, musst du den Speicherort der Paketmanifestdateien angeben und festlegen, wie oft auf Aktualisierungen der in diesen Dateien aufgeführten Abhängigkeiten geprüft werden soll. Weitere Informationen zum Aktivieren von Sicherheitsupdates findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates).

{% data reusables.dependabot.initial-updates %} Weitere Informationen findest du unter [Anpassen von Abhängigkeitsaktualisierungen](/github/administering-a-repository/customizing-dependency-updates).

Standardmäßig werden nur direkte Abhängigkeiten von {% data variables.product.prodname_dependabot_version_updates %} auf dem neuesten Stand gehalten, die explizit in einem Manifest definiert sind. Du kannst auswählen, Updates für indirekte Abhängigkeiten zu empfangen, die in Sperrdateien definiert sind. Weitere Informationen findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow).

{% data reusables.dependabot.private-dependencies-note %} Darüber hinaus bietet {% data variables.product.prodname_dependabot %} keine Unterstützung für private {% data variables.product.prodname_dotcom %}-Abhängigkeiten für alle Paket-Manager. Weitere Informationen findest du unter [Informationen zu Dependabot-Versionsupdates](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems) und [{% data variables.product.prodname_dotcom %}-Sprachunterstützung](/github/getting-started-with-github/github-language-support).

## Aktivieren von {% data variables.product.prodname_dependabot_version_updates %}

Du aktivierst {% data variables.product.prodname_dependabot_version_updates %}, indem du die Konfigurationsdatei *dependabot.yml* in deinem Repositorys committest. {% ifversion dependabot-settings-update-37 %}Wenn du das Feature auf deiner Einstellungsseite aktivierst, erstellt GitHub eine Standarddatei, die du bearbeiten kannst. Ansonsten kannst du die Datei mit einem beliebigen Datei-Editor erstellen.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Klicke unter „Codesicherheit und -analyse“ rechts neben {% data variables.product.prodname_dependabot_version_updates %} auf **Aktivieren**, um die Standardkonfigurationsdatei *dependabot.yml* im Verzeichnis `.github` deines Repositorys zu öffnen.
{% else %}
1. Erstelle die Konfigurationsdatei *dependabot.yml* im Verzeichnis `.github` deines Repositorys. {% endif %}
1. Füge eine `version` hinzu. 
1. Wenn du über Abhängigkeiten in einer privaten Registrierung verfügst, kannst du optional einen `registries`-Abschnitt mit Authentifizierungsdetails hinzufügen. 
1. Füge einen `updates`-Abschnitt mit einem Eintrag für jeden Paket-Manager hinzu, der von {% data variables.product.prodname_dependabot %} überwacht werden soll.
1. Verwende für jeden Paket-Manager:
    - `package-ecosystem`, um den Paket-Manager anzugeben.
    - `directory`, um den Speicherort des Manifests oder anderer Definitionsdateien anzugeben.
    - `schedule.interval`, um anzugeben, wie oft nach neuen Versionen gesucht werden soll.
{% data reusables.dependabot.check-in-dependabot-yml %}

Weitere Informationen zu allen Konfigurationsoptionen findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/github/administering-a-repository/configuration-options-for-dependency-updates).

### Beispiel für die Datei *dependabot.yml*

Im folgenden Beispiel für die Datei *dependabot.yml* werden Versionsupdates für zwei Paket-Manager konfiguriert: npm und Docker. Wenn diese Datei eingecheckt ist, werden die Manifestdateien im Standardbranch von {% data variables.product.prodname_dependabot %} auf veraltete Abhängigkeiten geprüft. Wenn veraltete Abhängigkeiten gefunden werden, werden Pull Requests für den Standardbranch ausgelöst, damit die Abhängigkeiten aktualisiert werden.

```yaml
# Basic dependabot.yml file with
# minimum configuration for two package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"

  # Enable version updates for Docker
  - package-ecosystem: "docker"
    # Look for a `Dockerfile` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
```

Wenn die Docker-Abhängigkeiten im obigen Beispiel sehr veraltet waren, empfiehlt es sich, mit einem Zeitplan vom Typ `daily` zu beginnen, bis die Abhängigkeiten aktuell sind, und dann wieder auf einen wöchentlichen Zeitplan überzugehen.

### Aktivieren von Versionsupdates für Forks

Wenn du Versionsupdates für Forks aktivieren möchtest, gibt es einen zusätzlichen Schritt. Versionsupdates werden nicht automatisch für Forks aktiviert, wenn eine *dependabot.yml*-Konfigurationsdatei vorhanden ist. Dadurch wird sichergestellt, dass Forkbesitzer nicht versehentlich Versionsupdates aktivieren, wenn sie Änderungen, einschließlich einer *dependabot.yml*-Konfigurationsdatei, aus dem ursprünglichen Repository abrufen. 

Für einen Fork musst du {% data variables.product.prodname_dependabot %} zudem explizit aktivieren.

{% ifversion dependabot-version-updates-for-forks %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Klicke unter „Codesicherheit und -analyse“ rechts neben {% data variables.product.prodname_dependabot_version_updates %} auf **Aktivieren**, damit {% data variables.product.prodname_dependabot %} Versionsupdates initiieren kann.
![Screenshot der {% data variables.product.prodname_dependabot_version_updates %}-Einstellung für ein geforktes Repository](/assets/images/help/dependabot/dependabot-version-update-forks.png)

{% else %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
5. Klicke unter „Enable Dependabot“ (Dependabot aktivieren) auf **Enable Dependabot** (Dependabot aktivieren).

{% endif %}

## Überprüfen des Status von Versionsupdates

Nachdem du Versionsupdates aktiviert hast, ist im Abhängigkeitsdiagramm für das Repository die Registerkarte **Dependabot** ausgefüllt. Diese Registerkarte zeigt, für die Überwachung welcher Paket-Manager {% data variables.product.prodname_dependabot %} konfiguriert ist und wann von {% data variables.product.prodname_dependabot %} zum letzten Mal eine Prüfung auf neue Versionen durchgeführt wurde.

![Registerkarte „Insights“ (Erkenntnisse) des Repositorys, Abhängigkeitsdiagramm, Registerkarte „Dependabot“](/assets/images/help/dependabot/dependabot-tab-view.png)

Weitere Informationen findest du unter [Auflisten von für Versionsupdates konfigurierten Abhängigkeiten](/github/administering-a-repository/listing-dependencies-configured-for-version-updates).

## Deaktivieren von {% data variables.product.prodname_dependabot_version_updates %}

Du kannst Versionsupdates vollständig deaktivieren, indem du die Datei *dependabot.yml* aus deinem Repository löschst. In der Regel möchtest du Updates vorübergehend für eine oder mehrere Abhängigkeiten oder Paket-Manager deaktivieren.

- Paket-Manager: Deaktiviere Updates durch Festlegen von `open-pull-requests-limit: 0` oder durch Auskommentieren vom relevanten `package-ecosystem` in der Konfigurationsdatei.
- Bestimmte Abhängigkeiten: Deaktiviere Updates durch Hinzufügen von `ignore`-Attributen für Pakete oder Anwendungen, die du aus Updates ausschließen möchtest.

Wenn du Abhängigkeiten deaktivierst, kannst du Platzhalter verwenden, um Übereinstimmungen mit verwandten Bibliotheken zu erzielen. Du kannst auch angeben, welche Versionen ausgeschlossen werden sollen. Dies ist besonders nützlich, wenn du Updates für eine Bibliothek blockieren musst – bei ausstehender Arbeit zum Unterstützen eines Breaking Change an der API –, aber alle Sicherheitskorrekturen für die von dir verwendete Version abrufen möchtest.

### Beispiel für das Deaktivieren von Versionsupdates für einige Abhängigkeiten

Das nachstehende Beispiel für die Datei *dependabot.yml* enthält Beispiele für die verschiedenen Möglichkeiten zum Deaktivieren von Updates für einige Abhängigkeiten, während andere Updates fortgesetzt werden können.

```yaml
# dependabot.yml file with updates
# disabled for Docker and limited for npm

version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
      # For all packages, ignore all patch updates
      - dependency-name: "*"
        update-types: ["version-update:semver-patch"]
```

Weitere Informationen zum Überprüfen auf vorhandene Einstellungen vom Typ „Ignorieren“ findest du unter [Konfigurationsoptionen für die Datei dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore).
