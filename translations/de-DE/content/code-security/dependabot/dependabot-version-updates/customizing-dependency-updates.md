---
title: Anpassen von Abhängigkeitsupdates
intro: 'Du kannst anpassen, wie {% data variables.product.prodname_dependabot %} deine Abhängigkeiten verwaltet.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/customizing-dependency-updates
  - /code-security/supply-chain-security/customizing-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/customizing-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
  - Vulnerabilities
shortTitle: Customize updates
ms.openlocfilehash: 99a3869313598733493d21f8b15d46db98b1a53c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107741'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Informationen zum Anpassen von Abhängigkeitsupdates

Nachdem du Versionsupdates aktiviert hast, kannst du anpassen, wie {% data variables.product.prodname_dependabot %} deine Abhängigkeiten verwaltet, indem du der *dependabot.yml*-Datei weitere Optionen hinzufügst. Beispielsweise ist Folgendes möglich:

- Gib an, an welchem Wochentag Pull Requests für Versionsupdates geöffnet werden sollen: `schedule.day`
- Lege Prüfer, zugewiesene Personen und Bezeichnungen für jeden Paket-Manager fest: `reviewers`, `assignees` und `labels`
- Definiere eine Versionsverwaltungsstrategie für Änderungen an jeder Manifestdatei: `versioning-strategy`
- Ändere die Standardeinstellung 5 für die maximale Anzahl geöffneter Pull Requests für Versionsupdates: `open-pull-requests-limit`
- Öffne Pull Requests für Versionsupdates für einen bestimmten Branch anstelle des Standardbranchs: `target-branch`

Weitere Informationen zu den Konfigurationsoptionen findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates).

Wenn du die Datei *dependabot.yml* in deinem Repository aktualisierst, führt {% data variables.product.prodname_dependabot %} eine sofortige Überprüfung mit der neuen Konfiguration aus. Innerhalb von Minuten wird eine aktualisierte Liste der Abhängigkeiten auf der Registerkarte **{% data variables.product.prodname_dependabot %}** angezeigt. Dies kann länger dauern, wenn das Repository viele Abhängigkeiten aufweist. Möglicherweise werden auch neue Pull Requests für Versionsupdates angezeigt. Weitere Informationen findest du unter [Auflisten für Versionsupdates konfigurierter Abhängigkeiten](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates).

## Auswirkungen von Konfigurationsänderungen auf Sicherheitsupdates

Wenn du die Datei *dependabot.yml* anpasst, bemerkst du möglicherweise einige Änderungen der Pull Requests, die für Sicherheitsupdates ausgelöst werden. Diese Pull Requests werden immer durch eine Sicherheitsempfehlung für eine Abhängigkeit ausgelöst, anstatt durch den {% data variables.product.prodname_dependabot %}-Zeitplan. Sie erben jedoch relevante Konfigurationseinstellungen aus der Datei *dependabot.yml*, sofern du keinen anderen Zielbranch für Versionsupdates angibst.

Ein Beispiel findest du unten unter [Festlegen benutzerdefinierter Bezeichnungen](#setting-custom-labels).

## Ändern von Zeitplänen

Wenn du einen `daily` Updatezeitplan festlegst, sucht {% data variables.product.prodname_dependabot %} standardmäßig um 05:00 Uhr UTC nach neuen Versionen. Mit `schedule.time` kannst du eine alternative Tageszeit für die Prüfung auf Updates (Format: `hh:mm`) angeben.

Die nachstehende Beispieldatei *dependabot.yml* erweitert die npm-Konfiguration, um anzugeben, wann {% data variables.product.prodname_dependabot %} nach Versionsupdates für Abhängigkeiten suchen sollte.

```yaml
# dependabot.yml file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry for updates at 2am UTC
    schedule:
      interval: "daily"
      time: "02:00"
```

## Festlegen von Prüfern und zugewiesenen Personen

Standardmäßig löst {% data variables.product.prodname_dependabot %} Pull Requests ohne Prüfer oder zugewiesene Personen aus.

Mit `reviewers` und `assignees` kannst du Prüfer und zugewiesene Personen für alle Pull Requests angeben, die für einen Paket-Manager ausgelöst werden. Wenn du ein Team angibst, musst du den vollständigen Teamnamen verwenden, als ob du @mentioning auf das Team (einschließlich der Organisation) anwenden würdest.

Die folgende Beispieldatei *dependabot.yml* ändert die npm-Konfiguration, sodass alle Pull Requests, die mit Versions- und Sicherheitsupdates für npm geöffnet werden, zwei Prüfer und eine zugewiesene Person haben.

```yaml
# dependabot.yml file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with an assignee
    assignees:
      - "user-name"
```

## Festlegen benutzerdefinierter Bezeichnungen

{% data reusables.dependabot.default-labels %}

Mit `labels` kannst du die Standardbezeichnungen außer Kraft setzen und alternative Bezeichnungen für alle Pull Requests angeben, die für einen Paket-Manager ausgelöst werden. Du kannst keine neuen Bezeichnungen in der Datei *dependabot.yml* erstellen, sodass die alternativen Bezeichnungen bereits im Repository vorhanden sein müssen.

Die folgende Beispieldatei *dependabot.yml* ändert die npm-Konfiguration, sodass alle Pull Requests, die mit Versions- und Sicherheitsupdates für npm geöffnet werden, benutzerdefinierte Bezeichnungen haben. Außerdem wird die Docker-Konfiguration geändert, um nach Versionsupdates für einen benutzerdefinierten Branch zu suchen und Pull Requests mit benutzerdefinierten Bezeichnungen für diesen benutzerdefinierten Branch auszulösen. Die Docker-Änderungen wirken sich nicht auf Sicherheitsupdate-Pull Requests aus, da Sicherheitsupdates immer am Standardbranch vorgenommen werden.

{% note %}

**Hinweis:** Der neue `target-branch` muss ein Dockerfile enthalten, das aktualisiert werden soll, andernfalls hat diese Änderung Auswirkungen auf das Deaktivieren von Versionsupdates für Docker.

{% endnote %}

```yaml
# dependabot.yml file with
# customized npm configuration

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"

    # Keep Docker dependencies up to date
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise pull requests for Docker version updates
    # against the "develop" branch. The Docker configuration
    # no longer affects security update pull requests.
    target-branch: "develop"
    # Use custom labels on pull requests for Docker version updates
    labels:
      - "Docker dependencies"
      - "triage-board"
```

## Weitere Beispiele

Weitere Beispiele findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates).
