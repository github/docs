---
title: Lebenszyklus von Codespaces
intro: Du kannst in einer {% data variables.product.prodname_codespaces %}-Umgebung entwickeln und deine Daten während des gesamten Codespace-Lebenszyklus verwalten.
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Codespaces
- Developer
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 21aa691b94c8247a11a06537523cdaa070bd24b9
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876925"
---
## Informationen zum Lebenszyklus eines Codespaces

Der Lebenszyklus eines Codespaces beginnt beim Erstellen des Codespaces und endet, wenn du den Codespace löschst. Du kannst eine Verbindung mit einem aktiven Codespace trennen und erneut herstellen, ohne dass die ausgeführten Prozesse dadurch beeinträchtigt werden. Du kannst einen Codespace beenden und neu starten, ohne Änderungen zu verlieren, die du an deinem Projekt vorgenommen hast.

## Einen Codespace erstellen

Wenn du an einem Projekt arbeiten möchtest, kannst du einen neuen Codespace erstellen oder einen vorhandenen Codespace öffnen. Wenn du in {% data variables.product.prodname_codespaces %} entwickelst, kannst du einen neuen Codespace anhand eines Branches deines Projekts erstellen oder einen Codespace mit langer Ausführungsdauer für ein Feature nutzen. Weitere Informationen findest du unter [Erstellen eines Codespace](/codespaces/developing-in-codespaces/creating-a-codespace).

{% data reusables.codespaces.max-number-codespaces %} Wenn du die maximale Anzahl aktiver Codespaces erreichst und versuchst, andere zu starten, wirst du aufgefordert, einen deiner aktiven Codespaces zu beenden.

Falls du jedes Mal, wenn du an einem Projekt arbeitest, einen neuen Codespace erstellst, solltest du deine Änderungen regelmäßig pushen, damit neue Commits auf {% data variables.product.prodname_dotcom %} verfügbar sind. Wenn du für dein Projekt einen Codespace mit langer Ausführungsdauer verwendest, solltest du Inhalte aus dem Standardbranch deines Repositorys pullen, sobald du mit der Arbeit in deinem Codespace beginnst. Auf diese Weise verfügt deine Umgebung über die aktuellen Commits. Dieser Workflow ist mit der Arbeit an einem Projekt auf deinem lokalen Computer vergleichbar. 

{% data reusables.codespaces.prebuilds-crossreference %}

## Speichern von Änderungen in einem Codespace

Wenn du über das Internet eine Verbindung mit einem Codespace herstellst, ist die Funktion für automatisches Speichern automatisch für den Web-Editor aktiviert und so konfiguriert, dass Änderungen nach einer bestimmten Verzögerung gespeichert werden. Wenn du über {% data variables.product.prodname_vscode %} auf deinem Desktop eine Verbindung mit einem Codespace herstellst, musst du die Funktion für automatisches Speichern aktivieren. Weitere Informationen findest du unter [Speichern/Automatisch Speichern](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) in der {% data variables.product.prodname_vscode %}-Dokumentation.

Wenn du deine Änderungen im Git-Repository innerhalb des Dateisystems des Codespaces speichern möchtest, committe und pushe die Änderungen an einen Remotebranch.

Wenn du über Änderungen verfügst, die noch nicht gespeichert wurden, fordert dein Editor dich zum Speichern auf, bevor du das Programm beendest.

## Timeouts bei Codespaces

Wenn ein Codespace ohne Interaktion ausgeführt wird oder du deinen Codespace beendest, ohne ihn explizit anzuhalten, tritt nach einer bestimmten Dauer an Inaktivität ein Timeout auf, und der Codespace wird beendet. Standardmäßig wird ein Codespace nach einer Inaktivitätsperiode von 30 Minuten mit einem Timeout beendet. Du kannst diesen Zeitraum bei Codespaces, die du neu erstellst, jedoch anpassen. Weitere Informationen zum Festlegen des Standard-Timeoutzeitraums für deine Codespaces findest du unter [Festlegen des Timeoutzeitraums für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces). Weitere Informationen zum Anhalten eines Codespaces findest du unter [Anhalten eines Codespaces](#stopping-a-codespace).

Wenn ein Timeout für einen Codespace auftritt, werden deine Daten zum Zeitpunkt des letzten Speichervorgangs beibehalten. Weitere Informationen findest du unter [Speichern von Änderungen in einem Codespace](#saving-changes-in-a-codespace).

## Neuerstellen eines Codespaces

Du kannst deinen Codespace neu erstellen, um einen bereinigten Zustand wiederherzustellen, der dem Zustand eines neuen Codespaces entspricht. Für die meisten Anwendungsfälle ist das Erstellen eines neuen Codespaces eine Alternative zum Neuerstellen eines Codespaces. Die Neuerstellung eines Codespaces wird wahrscheinlich gewählt, um Änderungen an deinem Entwicklungscontainer zu implementieren. Wenn du einen Codespace neu erstellst, werden alle Docker-Container, Images, Volumes und Caches bereinigt, bevor der Codespace neu erstellt wird.

Wenn einige dieser Daten bei einer Neuerstellung beibehalten werden sollen, kannst du eine symbolische Verknüpfung (Symlink) mit dem persistenten Verzeichnis am gewünschten Speicherort innerhalb des Containers erstellen. Du kannst z. B. in deinem `.devcontainer`-Verzeichnis ein `config`-Verzeichnis erstellen, das bei einer Neuerstellung beibehalten wird. Anschließend erstellst du eine symbolische Verknüpfung für das `config`-Verzeichnis und seinen Inhalt als `postCreateCommand` in deiner `devcontainer.json`-Datei.

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

In der nachstehenden Beispieldatei `postCreate.sh` werden die Inhalte des `config`-Verzeichnisses symbolisch mit dem Basisverzeichnis verknüpft.

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## Beenden eines Codespaces

Codespaces können jederzeit beendet werden. Wenn du einen Codespace beendest, werden alle ausgeführten Prozesse beendet, und der Terminalverlauf wird gelöscht. Alle gespeicherten Änderungen in deinem Codespace sind weiterhin verfügbar, wenn du den Codespace beim nächsten Mal startest. Wenn du einen Codespace nicht explizit beendest, wird er weiterhin ausgeführt, bis aufgrund von Inaktivität ein Timeout auftritt. Weitere Informationen findest du unter [Timeouts bei Codespaces](#codespaces-timeouts).

CPU-Gebühren fallen nur bei ausgeführten Codespaces an. Bei beendeten Codespaces werden lediglich Speicherkosten in Rechnung gestellt.

Es kann sinnvoll sein, einen Codespace zu beenden und neu zu starten, um Änderungen anzuwenden. Wenn du z. B. den für deinen Codespace verwendeten Computertyp änderst, musst du den Codespace beenden und neu starten, damit die Änderungen wirksam werden. Du kannst deinen Codespace auch beenden und ihn neu starten oder löschen, wenn ein Fehler oder ein unerwartetes Verhalten auftritt. Weitere Informationen findest du unter [Anhalten oder Beenden eines Codespaces](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace).

## Einen Codespace löschen

Du kannst einen Codespace für eine bestimmte Aufgabe erstellen und den Codespace sicher löschen, nachdem du deine Änderungen an einen Remotebranch gepusht hast.

Wenn du versuchst, einen Codespace mit nicht gepushten Git-Commits zu löschen, wirst du in deinem Editor benachrichtigt, dass Änderungen vorliegen, die nicht an einen Remotebranch gepusht wurden. In diesem Fall kannst du alle gewünschten Änderungen pushen und deinen Codespace anschließend löschen, oder du löschst deinen Codespace mitsamt allen ausgecheckten Änderungen. Du kannst deinen Code auch in einen neuen Branch exportieren, ohne einen neuen Codespace zu erstellen. Weitere Informationen findest du unter [Exportieren von Änderungen in einen Branch](/codespaces/troubleshooting/exporting-changes-to-a-branch).

Dir wird der Speicher all deiner Codespaces in Rechnung gestellt. Wenn du einen Codespace löschst, fallen keine weiteren Gebühren an.

Weitere Informationen zum Löschen eines Codespaces findest du unter [Löschen eines Codespaces](/codespaces/developing-in-codespaces/deleting-a-codespace).

## Verbindungsunterbrechung beim Verwenden von Codespaces

{% data variables.product.prodname_codespaces %} ist eine cloudbasierte Entwicklungsumgebung, für die eine Internetverbindung erforderlich ist. Wenn die Internetverbindung unterbrochen wird, während du in einem Codespace arbeitest, kannst du nicht auf deinen Codespace zugreifen. Alle ausgecheckten Änderungen werden jedoch gespeichert. Sobald die Internetverbindung wiederhergestellt ist, kannst du dich erneut mit deinem Codespace verbinden. Der Codespace weist in diesem Fall den exakt selben Zustand auf wie vor der Verbindungsunterbrechung. Wenn deine Internetverbindung instabil ist, solltest du deine Änderungen häufig committen und pushen.

Wenn du weißt, dass du häufig offline arbeiten wirst, kannst du deine `devcontainer.json`-Datei mit der [{% data variables.product.prodname_vscode %}-Erweiterung „Remote - Containers“](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) verwenden, um einen lokalen Entwicklungscontainer für dein Repository zu erstellen und zu verwenden. Weitere Informationen findest du unter [Entwickeln innerhalb eines Containers](https://code.visualstudio.com/docs/remote/containers) in der {% data variables.product.prodname_vscode %}-Dokumentation.
