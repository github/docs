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
ms.openlocfilehash: 3f4ef139386e616d14ef9a9cc5b474c96983de91
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185177'
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

  ![Screenshot: Schaltfläche zum Aktualisieren](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh.png)

  Hier aktualisierst du die Details im {% data variables.product.prodname_github_codespaces %}-Toolfenster. Wenn du beispielsweise über die {% data variables.product.prodname_cli %} den Anzeigenamen geändert hast, kannst du auf diese Schaltfläche klicken, um den neuen Namen anzuzeigen.

* **Verwalten deiner Codespaces aus dem Web**

  ![Screenshot: Listenschaltfläche](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  Öffne deine Codespace-Liste unter https://github.com/codespaces.

* **Anzeigen des Codespace-Erstellungsprotokolls**

  ![Screenshot: Protokollschaltfläche](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  Öffne das Codespace-Erstellungsprotokoll im Editor-Fenster. Weitere Informationen findest du unter „[{% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)“.
