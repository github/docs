---
title: Verwenden des GitHub Codespaces-Plug-Ins für JetBrains
shortTitle: Plugin for JetBrains
intro: 'Du kannst das {% data variables.product.prodname_github_codespaces %}-Plug-In für die JetBrains-Clientanwendung verwenden, um mehr über deinen Codespace zu erfahren oder diesen zu beenden, wenn du mit der Arbeit fertig bist.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: 8ffd48856a2653f3db3c871122d3acd23c246d7a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159609'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## Informationen zum {% data variables.product.prodname_github_codespaces %}-Plug-In

Die JetBrains-Clientanwendung wird gestartet, wenn du eine Verbindung mit einem Codespace in der JetBrains Gateway-Anwendung herstellst. Mit dieser Anwendung kannst du {% data variables.product.prodname_github_codespaces %} mit deiner bevorzugten JetBrains-IDE verwenden. Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_github_codespaces %} in deiner JetBrains-IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).

Das {% data variables.product.prodname_github_codespaces %}-Plug-In ist bereits im JetBrains-Client installiert, wenn du über JetBrains Gateway eine Verbindung mit einem Codespace herstellst. Das Plug-In fügt der Benutzeroberfläche das {% data variables.product.prodname_github_codespaces %}-Toolfenster hinzu.

Klicke unten links im Anwendungsfenster des JetBrains-Clients auf **{% data variables.product.prodname_github_codespaces %}** , um das {% data variables.product.prodname_github_codespaces %}-Toolfenster zu öffnen.

![Screenshot: {% data variables.product.prodname_github_codespaces %}-Toolfenster](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)

## Verwenden des {% data variables.product.prodname_github_codespaces %}-Toolfensters

Im {% data variables.product.prodname_github_codespaces %}-Toolfenster wird Folgendes angezeigt:
* Das Repository, über das du den betreffenden Codespace erstellt hast
* Der Anzeigename des Codespace
* Der aktuelle Branch
* Die Computerspezifikationen
* Der Zeitraum, für den der betreffende Codespace im Leerlauf bleiben kann, bis er automatisch beendet wird
* Das Alter des Codespace
* Der Zeitraum, für den ein beendeter Codespace beibehalten wird, bevor er automatisch gelöscht wird

Die Symbole oben im {% data variables.product.prodname_github_codespaces %}-Toolfenster verfügen über die folgenden Funktionen.

* **Aktualisieren des aktiven Codespace**

  ![Screenshot: Schaltfläche zum Aktualisieren](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh-BAK.png)

  Hier aktualisierst du die Details im {% data variables.product.prodname_github_codespaces %}-Toolfenster. Wenn du beispielsweise über die {% data variables.product.prodname_cli %} den Anzeigenamen geändert hast, kannst du auf diese Schaltfläche klicken, um den neuen Namen anzuzeigen.

* **Trennen und Beenden**

  ![Screenshot: Schaltfläche zum Beenden](/assets/images/help/codespaces/jetbrains-plugin-icon-stop.png)

  Hier beendest du den Codespace und die Back-End-IDE auf dem Remotecomputer und schließt den lokalen JetBrains-Client.

* **Verwalten deiner Codespaces aus dem Web**

  ![Screenshot: Listenschaltfläche](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  Öffne deine Codespace-Liste unter https://github.com/codespaces.

* **Anzeigen des Codespace-Erstellungsprotokolls**

  ![Screenshot: Protokollschaltfläche](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  Öffne das Codespace-Erstellungsprotokoll im Editor-Fenster. Weitere Informationen findest du unter „[{% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)“.

* **Neuerstellen des Entwicklungscontainers**

  ![Screenshot: Schaltfläche zum Neuerstellen](/assets/images/help/codespaces/jetbrains-plugin-icon-rebuild.png)

  Erstelle deinen Codespace neu, um Änderungen anzuwenden, die du an der Entwicklungscontainerkonfiguration vorgenommen hast. Der JetBrains-Client wird geschlossen, und du musst den Codespace erneut öffnen. Weitere Informationen findest du unter [Der Codespace-Lebenszyklus](/codespaces/developing-in-codespaces/the-codespace-lifecycle#rebuilding-a-codespace).

