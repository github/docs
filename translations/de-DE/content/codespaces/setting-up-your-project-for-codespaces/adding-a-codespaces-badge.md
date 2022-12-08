---
title: Hinzufügen eines Badges „In GitHub Codespaces öffnen“
shortTitle: Add a Codespaces badge
intro: 'Du kannst einer Markdown-Datei in deinem Repository einen Badge hinzufügen, auf den Benutzer klicken können, um einen Codespace zu erstellen.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: c69a815501f5943a56d32af3e58cd7850a69588b
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158781'
---
## Übersicht

Das Hinzufügen eines Badges „In {% data variables.product.prodname_github_codespaces %} öffnen“ zu einer Markdown-Datei bietet Benutzern eine einfache Möglichkeit, einen Codespace für dein Repository zu erstellen.

![Screenshot eines Codespaces-Badges auf einer README-Seite](/assets/images/help/codespaces/codespaces-badge-on-readme.png)

Wenn du einen Badge erstellst, kannst du bestimmte Konfigurationsoptionen für den Codespace auswählen, den der Badge erstellt.

Wenn Benutzer auf den Badge klicken, werden sie für die Erstellung von Codespaces zur Seite mit erweiterten Optionen weitergeleitet, wobei die Optionen deiner Wahl vordefiniert sind. Weitere Informationen zur Seite mit erweiterten Optionen findest du unter [Erstellen eines Codespace für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

Auf der Seite mit erweiterten Optionen können Benutzer die vordefinierten Einstellungen bei Bedarf ändern und dann auf **Codespace erstellen** klicken.

## Erstellen eines „In {% data variables.product.prodname_github_codespaces %} öffnen“-Badges

{% data reusables.repositories.navigate-to-repo %}
1. Wähle im Dropdownmenü „Branch“ unterhalb des Repositorynamens den Branch aus, für den du den Badge erstellen möchtest.

   ![Screenshot: Dropdownmenü „Branch“](/assets/images/help/codespaces/branch-drop-down.png)

1. Klicke auf die Schaltfläche **{% octicon "code" aria-label="The code icon" %} Code** und dann auf die Registerkarte **Codespaces**.

   ![Screenshot der Schaltfläche „Neuer Codespace“](/assets/images/help/codespaces/new-codespace-button.png)

1. Klicke oben rechts auf der Registerkarte **Codespaces** auf die Auslassungspunkte ( **...** ), und klicke dann auf **Neu mit Optionen**.

   ![Screenshot der Option „Codespace konfigurieren und erstellen“](/assets/images/help/codespaces/default-machine-type.png)

1. Wähle auf der Seite mit erweiterten Optionen für die Erstellung von Codespaces die Werte aus, die in jedem Feld vordefiniert sein sollen.

   ![Screenshot der Seite mit erweiterten Optionen](/assets/images/help/codespaces/advanced-options.png)

1. Kopiere die URL aus der Adressleiste des Browsers.
1. Füge das folgende Markdown hinzu, z. B. die Datei „`README.md`“ deines Repositorys:

   ```Markdown{:copy}
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](COPIED-URL)
   ```

   Beispiel:

   ```Markdown
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=0000000&machine=premiumLinux&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2)
   ```

   Im obigen Beispiel wird `0000000` die Referenznummer deines Repositorys sein. Die anderen Details in der URL werden durch die Werte bestimmt, die du in den Feldern auf der Seite mit erweiterten Optionen ausgewählt hast.
