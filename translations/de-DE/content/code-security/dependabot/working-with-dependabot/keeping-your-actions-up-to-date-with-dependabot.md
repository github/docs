---
title: Deine Aktionen mit Dependabot auf dem neuesten Stand halten
intro: 'Du kannst {% data variables.product.prodname_dependabot %} verwenden, um die Aktionen beizubehalten, die du auf die neuesten Versionen aktualisiert hast.'
redirect_from:
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
shortTitle: Auto-update actions
ms.openlocfilehash: 804660684230d8a0fb716b69644aab851a4c247b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107725'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## Informationen zu {% data variables.product.prodname_dependabot_version_updates %} für Aktionen

Aktionen werden häufig mit Fehlerkorrekturen und neuen Features aktualisiert, um automatisierte Prozesse zuverlässiger, schneller und sicherer zu machen. Wenn du {% data variables.product.prodname_dependabot_version_updates %} für {% data variables.product.prodname_actions %} aktivierst, sorgt {% data variables.product.prodname_dependabot %} dafür, dass die Verweise auf Aktionen in der *workflow.yml*-Datei eines Repositorys auf dem neuesten Stand sind. Für jede Aktion in der Datei prüft {% data variables.product.prodname_dependabot %} die Referenz der Aktion (in der Regel eine Versionsnummer oder eine Commit-Kennung, die mit der Aktion verbunden ist) mit der neuesten Version. Wenn eine neuere Version der Aktion verfügbar ist, sendet {% data variables.product.prodname_dependabot %} Dir eine Pull-Anforderung, die die Referenz in der Workflow-Datei auf die neueste Version aktualisiert. Weitere Informationen zu {% data variables.product.prodname_dependabot_version_updates %} findest du unter "[Informationen zu {% data variables.product.prodname_dependabot_version_updates %}](/github/administering-a-repository/about-dependabot-version-updates)". Weitere Informationen zur Konfiguration von Workflows für {% data variables.product.prodname_actions %} findest du unter "[Lernen {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."
  
{% data reusables.actions.workflow-runs-dependabot-note %}

## Aktivieren von {% data variables.product.prodname_dependabot_version_updates %} für Aktionen

Du kannst {% data variables.product.prodname_dependabot_version_updates %} konfigurieren, um deine Aktionen sowie die Bibliotheken und Pakete zu verwalten, von denen du abhängig bist. 

1. Wenn du bereits {% data variables.product.prodname_dependabot_version_updates %} für andere Ökosysteme oder Paket-Manager aktiviert hast, öffne einfach die bestehende *dependabot.yml*-Datei. Erstelle andernfalls die Konfigurationsdatei *dependabot.yml* im Verzeichnis `.github` deines Repositorys. Weitere Informationen findest du unter [Konfigurieren von Dependabot-Versionsupdates](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates).
1. Gib `"github-actions"` als `package-ecosystem` zu überwachen an.
1. Lege `directory` `"/"` Kontrollkästchen für Workflowdateien in `.github/workflows`fest.
1. Lege mit `schedule.interval` fest, wie oft nach neuen Versionen gesucht werden soll.
{% data reusables.dependabot.check-in-dependabot-yml %} Wenn du eine bestehende Datei bearbeitet hast, speichere deine Änderungen.

Du kannst auch {% data variables.product.prodname_dependabot_version_updates %} auf Forks aktivieren. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot %}-Versionsupdates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-version-updates-on-forks).

### Beispiel für die Datei *dependabot.yml* für {% data variables.product.prodname_actions %}

Die folgende Beispieldatei *dependabot.yml* konfiguriert die Versionsaktualisierungen für {% data variables.product.prodname_actions %}. `directory` muss auf `"/"` gesetzt werden, um Workflow-Dateien in `.github/workflows` zu überprüfen. `schedule.interval` wird auf `"weekly"` festgelegt. Nachdem diese Datei eingecheckt oder aktualisiert wurde, sucht {% data variables.product.prodname_dependabot %} nach neuen Versionen deiner Aktionen. {% data variables.product.prodname_dependabot %} wird Pull-Anforderungen für Versionsaktualisierungen für alle veralteten Aktionen erstellen, die es findet. Nach den ersten Versionsaktualisierungen wird {% data variables.product.prodname_dependabot %} weiterhin einmal wöchentlich nach veralteten Versionen von Aktionen suchen.

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```

## Konfigurieren von {% data variables.product.prodname_dependabot_version_updates %} für Aktionen

Wenn du {% data variables.product.prodname_dependabot_version_updates %} für Aktionen aktivierst, musst du Werte für `package-ecosystem`, `directory`, und `schedule.interval` angeben. Es gibt noch viele weitere optionale Eigenschaften, die du einstellen kannst, um deine Versionsaktualisierungen weiter anzupassen. Weitere Informationen findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/github/administering-a-repository/configuration-options-for-dependency-updates).

## Weitere Informationsquellen

- "[Informationen zu GitHub Aktionen](/actions/getting-started-with-github-actions/about-github-actions)"
