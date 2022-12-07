---
title: Der Codespace-Lebenszyklus
intro: 'Du kannst in einer {% data variables.product.prodname_github_codespaces %}-Umgebung entwickeln und deine Daten während des gesamten Codespace-Lebenszyklus verwalten.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/codespaces-lifecycle
  - /codespaces/developing-in-codespaces/the-codespace-lifecycle
ms.openlocfilehash: 8f223bce2acf2f6dc6200271397c0d70f28aefe4
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188369'
---
## Informationen zum Lebenszyklus eines Codespaces

Der Lebenszyklus eines Codespaces beginnt beim Erstellen des Codespaces und endet, wenn du den Codespace löschst. Du kannst eine Verbindung mit einem aktiven Codespace trennen und erneut herstellen, ohne dass die ausgeführten Prozesse dadurch beeinträchtigt werden. Du kannst einen Codespace beenden und neu starten, ohne Änderungen zu verlieren, die du an deinem Projekt vorgenommen hast.

## Einen Codespace erstellen

Wenn du an einem Projekt arbeiten möchtest, kannst du einen neuen Codespace erstellen oder einen vorhandenen Codespace öffnen. Wenn du in {% data variables.product.prodname_github_codespaces %} entwickelst, kannst du einen neuen Codespace anhand eines Branches deines Repositorys erstellen oder einen Codespace mit langer Ausführungsdauer für ein Feature nutzen. {% data reusables.codespaces.starting-new-project-template %} Weitere Informationen findest du unter „[Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)“ und „[Erstellen eines Codespaces aus einer Vorlage](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)“.

{% data reusables.codespaces.max-number-codespaces %} Wenn du die maximale Anzahl aktiver Codespaces erreichst und versuchst, andere zu starten, wirst du aufgefordert, einen deiner aktiven Codespaces zu beenden.

Falls du jedes Mal, wenn du an einem Projekt arbeitest, einen neuen Codespace erstellst, solltest du deine Änderungen regelmäßig pushen, damit neue Commits auf {% data variables.product.prodname_dotcom %} verfügbar sind. Wenn du für dein Projekt einen Codespace mit langer Ausführungsdauer verwendest, solltest du Inhalte aus dem Standardbranch deines Repositorys pullen, sobald du mit der Arbeit in deinem Codespace beginnst. Auf diese Weise verfügt deine Umgebung über die aktuellen Commits. Dieser Workflow ist mit der Arbeit an einem Projekt auf deinem lokalen Computer vergleichbar. 

{% data reusables.codespaces.prebuilds-crossreference %}

## Speichern von Änderungen in einem Codespace

Wenn du über das Internet eine Verbindung mit einem Codespace herstellst, ist die Funktion für automatisches Speichern automatisch für den Web-Editor aktiviert und so konfiguriert, dass Änderungen nach einer bestimmten Verzögerung gespeichert werden. Wenn du über {% data variables.product.prodname_vscode %} auf deinem Desktop eine Verbindung mit einem Codespace herstellst, musst du die Funktion für automatisches Speichern aktivieren. Weitere Informationen findest du unter [Speichern/Automatisch Speichern](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) in der {% data variables.product.prodname_vscode %}-Dokumentation.

Deine Arbeit wird auf einem virtuellen Computer in der Cloud gespeichert. Du kannst einen Codespace schließen und beenden und später zur gespeicherten Arbeit zurückkehren. Wenn du über Änderungen verfügst, die noch nicht gespeichert wurden, fordert dein Editor dich zum Speichern auf, bevor du das Programm beendest. Wenn dein Codespace jedoch gelöscht wird, wird auch deine Arbeit gelöscht. Um deine Arbeit beizubehalten, musst du deine Änderungen committen und in dein Remoterepository pushen oder deine Arbeit in einem neuen Remoterepository veröffentlichen, wenn du deinen Codespace aus einer Vorlage erstellt hast. Weitere Informationen findest du unter [Verwenden der Quellcodeverwaltung in deinem Codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace).

## Timeouts für {% data variables.product.prodname_github_codespaces %}

Wenn ein Codespace ohne Interaktion ausgeführt wird oder du deinen Codespace beendest, ohne ihn explizit anzuhalten, tritt nach einer bestimmten Dauer an Inaktivität ein Timeout auf, und der Codespace wird beendet. Standardmäßig wird ein Codespace nach einer Inaktivitätsperiode von 30 Minuten mit einem Timeout beendet. Du kannst diesen Zeitraum bei Codespaces, die du neu erstellst, jedoch anpassen. Weitere Informationen zum Festlegen des Standard-Timeoutzeitraums für deine Codespaces findest du unter [Festlegen des Timeoutzeitraums für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces). Weitere Informationen zum Anhalten eines Codespaces findest du unter [Anhalten eines Codespaces](#stopping-a-codespace).

Wenn ein Timeout für einen Codespace auftritt, werden deine Daten zum Zeitpunkt des letzten Speichervorgangs beibehalten. Weitere Informationen findest du unter [Speichern von Änderungen in einem Codespace](#saving-changes-in-a-codespace).

## Neuerstellen eines Codespaces

Du kannst deinen Codespace neu erstellen, um Änderungen an deiner Entwicklungscontainerkonfiguration zu implementieren. Für die meisten Anwendungsfälle ist das Erstellen eines neuen Codespaces eine Alternative zum Neuerstellen eines Codespaces. Wenn Du deinen Codespace neu erstellst, verwendet {% data variables.product.prodname_github_codespaces %} standardmäßig Images aus deinem Cache neu, um den Neuerstellungsprozess zu beschleunigen. Alternativ kannst du eine vollständige Neuerstellung durchführen, wodurch der Cache gelöscht und der Container mit neuen Images neu erstellt wird.

Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace) und [Durchführen einer vollständigen Neuerstellung eines Containers](/codespaces/codespaces-reference/performing-a-full-rebuild-of-a-container).

## Beenden eines Codespaces

{% data reusables.codespaces.stopping-a-codespace %} Weitere Informationen findest du unter „[Beenden und Starten eines Codespaces](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)“.

## Einen Codespace löschen

Du kannst einen Codespace für eine bestimmte Aufgabe erstellen und den Codespace sicher löschen, nachdem du deine Änderungen an einen Remotebranch gepusht hast.

Wenn du versuchst, einen Codespace mit nicht gepushten Git-Commits zu löschen, wirst du in deinem Editor benachrichtigt, dass Änderungen vorliegen, die nicht an einen Remotebranch gepusht wurden. In diesem Fall kannst du alle gewünschten Änderungen pushen und deinen Codespace anschließend löschen, oder du löschst deinen Codespace mitsamt allen ausgecheckten Änderungen. Du kannst deinen Code auch in einen neuen Branch exportieren, ohne einen neuen Codespace zu erstellen. Weitere Informationen findest du unter [Exportieren von Änderungen in einen Branch](/codespaces/troubleshooting/exporting-changes-to-a-branch).

Codespaces, die angehalten wurden und für einen bestimmten Zeitraum inaktiv bleiben, werden automatisch gelöscht. Standardmäßig werden inaktive Codespaces nach 30 Tagen gelöscht, du kannst allerdings den Aufbewahrungszeitraum für Codespaces anpassen. Weitere Informationen findest du unter [Konfigurieren des automatischen Löschens deiner Codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces).

Wenn du einen Codespace erstellst, fallen weiterhin Speichergebühren an, bis er gelöscht wird, unabhängig davon, ob er aktiv oder beendet ist. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage). Das Löschen eines Codespaces verringert nicht den aktuellen abrechenbaren Betrag für {% data variables.product.prodname_github_codespaces %}, der während jedes monatlichen Abrechnungszyklus akkumuliert wird. Weitere Informationen findest du unter „[Anzeigen der {% data variables.product.prodname_github_codespaces %}-Nutzung](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)“.

Weitere Informationen zum Löschen eines Codespaces findest du unter [Löschen eines Codespaces](/codespaces/developing-in-codespaces/deleting-a-codespace).

## Unterbrechung der Verbindung bei Verwendung von {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} ist eine cloudbasierte Entwicklungsumgebung, für die eine Internetverbindung erforderlich ist. Wenn die Internetverbindung unterbrochen wird, während du in einem Codespace arbeitest, kannst du nicht auf deinen Codespace zugreifen. Alle ausgecheckten Änderungen werden jedoch gespeichert. Sobald die Internetverbindung wiederhergestellt ist, kannst du dich erneut mit deinem Codespace verbinden. Der Codespace weist in diesem Fall den exakt selben Zustand auf wie vor der Verbindungsunterbrechung. Wenn deine Internetverbindung instabil ist, solltest du deine Änderungen häufig committen und pushen.

Wenn du weißt, dass du häufig offline arbeiten wirst, kannst du deine `devcontainer.json`-Datei mit der Erweiterung [„Dev Containers“](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) für {% data variables.product.prodname_vscode_shortname %} verwenden, um einen lokalen Entwicklungscontainer für dein Repository zu erstellen und anzufügen. Weitere Informationen findest du unter [Entwickeln innerhalb eines Containers](https://code.visualstudio.com/docs/remote/containers) in der {% data variables.product.prodname_vscode %}-Dokumentation.
