---
title: Der webbasierte github.dev-Editor
intro: 'Verwende den {% data variables.codespaces.serverless %} von github.dev aus deinem Repository oder Pull Request, um Änderungen vorzunehmen und zu committen.'
versions:
  feature: githubdev-editor
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Web-based editor
redirect_from:
  - /codespaces/developing-in-codespaces/web-based-editor
ms.openlocfilehash: adc5622d666f6a32e698a29ceedfc24217b27df9
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172179'
---
{% note %}

**Hinweis:** Der {% data variables.codespaces.serverless %} von github.dev befindet sich derzeit in der Betavorschau. Du kannst [in unseren Diskussionen](https://github.com/community/community/discussions/categories/general) Feedback bereitstellen.

{% endnote %}

## Informationen zu {% data variables.codespaces.serverless %}

Der {% data variables.codespaces.serverless %} stellt eine schlanke Bearbeitungsumgebung zur Verfügung, die vollständig in deinem Browser ausgeführt wird. Mit dem {% data variables.codespaces.serverless %} kannst du in Dateien und Quellcoderepositorys von {% data variables.product.prodname_dotcom %} navigieren und Codeänderungen vornehmen und committen. Du kannst ein beliebiges Repository, eine Fork oder einen Pull Request im Editor öffnen.

Der {% data variables.codespaces.serverless %} ist auf {% data variables.product.prodname_dotcom_the_website %} kostenlos verfügbar.

Der {% data variables.codespaces.serverless %} bietet viele Vorteile von {% data variables.product.prodname_vscode %}, z. B. Suchen, Syntaxhervorhebung und eine Quellcodeverwaltungsansicht. Du kannst auch Einstellungssynchronisierung verwenden, um deine eigenen {% data variables.product.prodname_vscode_shortname %}-Einstellungen im Editor zu übernehmen. Weitere Informationen findest du unter [Einstellungssynchronisierung](https://code.visualstudio.com/docs/editor/settings-sync) in der Dokumentation zu {% data variables.product.prodname_vscode_shortname %}.

Der {% data variables.codespaces.serverless %} wird vollständig in der Sandbox deines Browsers ausgeführt. Der Editor klont das Repository nicht, sondern verwendet stattdessen die [Erweiterung „GitHub-Repositorys“](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension), um die meisten Funktionen auszuführen, die du verwendest. Deine Arbeit wird im lokalen Speicher des Browsers gespeichert, bis du sie committest. Du solltest deine Änderungen regelmäßig committen, um sicherzustellen, dass sie immer zugänglich sind.

Du musst angemeldet sein, um den webbasierten Editor nutzen zu können.

## Öffnen des {% data variables.codespaces.serverless %}

Du kannst ein beliebiges {% data variables.product.prodname_dotcom %}-Repository im {% data variables.codespaces.serverless %} auf eine der folgenden Arten öffnen:

- Um das Repository auf derselben Browserregisterkarte zu öffnen, drückst du auf <kbd>.</kbd>, während du ein Repository oder einen Pull Request auf {% data variables.product.prodname_dotcom %} durchsuchst.
 
  Um das Repository auf einer neuen Browserregisterkarte zu öffnen, drückst du auf <kbd>></kbd>.

- Ändere die URL von „github.com“ in „github.dev“.
- Verwende beim Anzeigen einer Datei das Dropdownmenü neben {% octicon "pencil" aria-label="The edit icon" %}, und klicke auf **In github.dev öffnen**.

  ![Schaltfläche „Datei bearbeiten“ im Dropdownmenü](/assets/images/help/repository/edit-file-edit-dropdown.png)

## {% data variables.product.prodname_codespaces %} und der {% data variables.codespaces.serverless %}

Sowohl der {% data variables.codespaces.serverless %} als auch {% data variables.product.prodname_github_codespaces %} ermöglichen es dir, deinen Code direkt über dein Repository zu bearbeiten. Beide Optionen haben jedoch leicht unterschiedliche Vorteile, je nach Anwendungsfall.

|| {% data variables.codespaces.serverless %} | {% data variables.product.prodname_github_codespaces %}|
|-|----------------|---------|
| **Kosten** | Frei.      | Kostenloses monatliches Nutzungskontingent für persönliche Konten. Informationen zur Preisgestaltung findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#github-codespaces-pricing).|
| **Verfügbarkeit** | Verfügbar für alle Benutzer auf GitHub.com. | Verfügbar für alle Benutzer auf GitHub.com. |
| **Start** | Der {% data variables.codespaces.serverless %} wird sofort mit einem Tastendruck geöffnet, und du kannst sofort mit der Verwendung beginnen, ohne auf zusätzliche Konfiguration oder die Installation warten zu müssen. | Wenn du einen Codespace erstellst oder fortsetzt, wird dem Codespace eine VM zugewiesen, und der Container wird basierend auf dem Inhalt einer Datei `devcontainer.json` konfiguriert. Diese Einrichtung kann einige Minuten dauern, bis die Umgebung erstellt wurde. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository). |
| **Compute**  | Es gibt keine zugeordnete Computemöglichkeit, sodass du deinen Code nicht erstellen und ausführen oder das integrierte Terminal verwenden kannst. | Mit {%  data variables.product.prodname_github_codespaces %} erhältst du die Leistungsfähigkeit einer dedizierten VM, auf der du deine Anwendung ausführen und debuggen kannst.|
| **Terminalzugriff** | Keine. | {% data variables.product.prodname_github_codespaces %} stellt standardmäßig ein Set mit gängigen Tools bereit, sodass du das Terminal genau wie in deiner lokalen Umgebung nutzen kannst.|
| **Erweiterungen**  | Nur eine Teilmenge von Erweiterungen, die im Web ausgeführt werden können, werden in der Erweiterungsansicht angezeigt und können installiert werden. Weitere Informationen findest du unter [Verwenden von Erweiterungen](#using-extensions).| Mit {% data variables.product.prodname_github_codespaces %} kannst du die meisten Erweiterungen aus dem {% data variables.product.prodname_vscode_marketplace %} nutzen.|

### Fortsetzen der Arbeit in {% data variables.product.prodname_codespaces %}

Du kannst deinen Workflow im {% data variables.codespaces.serverless %} starten und in einem Codespace fortsetzen. Wenn du versuchst, auf die Ausführungs- und Debugansicht oder das Terminal zuzugreifen, wirst du benachrichtigt, dass sie im {% data variables.codespaces.serverless %} nicht verfügbar sind.

Wenn du deine Arbeit in einem Codespace fortsetzen möchtest, klicke auf **Arbeit fortsetzen in...** , und wähle dann **Neuen Codespace erstellen** aus, um einen Codespace in deinem aktuellen Branch zu erstellen. Bevor du diese Option auswählst, musst du alle Änderungen committen.

![Screenshot der Schaltfläche „Arbeit fortsetzen in“ auf der Benutzeroberfläche](/assets/images/help/codespaces/codespaces-continue-working.png)

## Verwenden von Quellcodeverwaltung

Wenn du den {% data variables.codespaces.serverless %} verwendest, werden alle Aktionen über die Quellcodeverwaltungsansicht verwaltet, die sich auf der linken Seite in der Aktivitätsleiste befindet. Weitere Informationen zur Quellcodeverwaltungsansicht findest du in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation unter [Versionskontrolle](https://code.visualstudio.com/docs/editor/versioncontrol).

Da der webbasierte Editor die Erweiterung „GitHub-Repositorys“ für seine Funktionalität verwendet, kannst du Branches wechseln, ohne einen Stash für Änderungen auszuführen. Weitere Informationen findest du unter [GitHub-Repositorys](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension) in der Dokumentation zu {% data variables.product.prodname_vscode_shortname %}.

### Neuen Branch erstellen

{% data reusables.codespaces.create-or-switch-branch %} Alle nicht committeten Änderungen, die du in deinem alten Branch vorgenommen hast, sind in deinem neuen Branch verfügbar.

### Committen der Änderungen

{% data reusables.codespaces.source-control-commit-changes %} 
5. Nachdem du deine Änderungen committet hast, werden sie automatisch in deinen Branch auf {% data variables.product.prodname_dotcom %} gepusht.
### Erstellen eines Pull Requests

{% data reusables.codespaces.source-control-pull-request %}

### Arbeiten mit einem vorhandenen Pull Request

Du kannst den {% data variables.codespaces.serverless %} verwenden, um mit einem vorhandenen Pull Request zu arbeiten.

1. Navigiere zum Pull Request, den du im {% data variables.codespaces.serverless %} öffnen möchtest.
2. Drücke `.`, um den Pull Request im {% data variables.codespaces.serverless %} zu öffnen.
3. Nachdem du Änderungen vorgenommen hast, committe sie mit den Schritten unter [Committen deiner Änderungen](#commit-your-changes). Deine Änderungen werden direkt in den Branch committet, es ist nicht erforderlich, die Änderungen zu pushen.

## Verwenden von Erweiterungen

Der {% data variables.codespaces.serverless %} unterstützt {% data variables.product.prodname_vscode_shortname %}-Erweiterungen, die speziell erstellt oder aktualisiert wurden, um im Web ausgeführt werden zu können. Diese Erweiterungen werden als „Weberweiterungen“ bezeichnet. Informationen dazu, wie du eine Weberweiterung erstellen oder deine vorhandene Erweiterung für das Web aktualisieren kannst, findest du unter [Weberweiterungen](https://code.visualstudio.com/api/extension-guides/web-extensions) in der Dokumentation zu {% data variables.product.prodname_vscode_shortname %}.

Erweiterungen, die im {% data variables.codespaces.serverless %} ausgeführt werden können, werden in der Erweiterungsansicht angezeigt und können installiert werden. Wenn du Einstellungssynchronisierung verwendest, werden auch kompatible Erweiterungen automatisch installiert. Weitere Informationen findest du unter [Einstellungssynchronisierung](https://code.visualstudio.com/docs/editor/settings-sync) in der Dokumentation zu {% data variables.product.prodname_vscode_shortname %}.


## Problembehandlung

Wenn du Probleme beim Öffnen des {% data variables.codespaces.serverless %} hast, versuche Folgendes:

- Stelle sicher, dass du bei {% data variables.product.prodname_dotcom %} angemeldet bist.
- Deaktiviere alle Werbeblocker.
- Verwende ein Nicht-Inkognito-Fenster in deinem Browser, um den {% data variables.codespaces.serverless %} zu öffnen.

### Bekannte Einschränkungen

- Der {% data variables.codespaces.serverless %} wird derzeit in Chrome (und verschiedenen anderen Chromium-basierten Browsern), Edge, Firefox und Safari unterstützt. Es wird empfohlen, die neueste Version dieser Browser zu verwenden.
- Einige Tastenzuordnungen funktionieren möglicherweise nicht, je nachdem, welchen Browser du verwendest. Diese Tastenzuordnungseinschränkungen werden im Abschnitt [Bekannte Einschränkungen und Anpassungen](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations) der Dokumentation zu {% data variables.product.prodname_vscode_shortname %} dokumentiert.
- `.` funktioniert möglicherweise nicht, um den {% data variables.codespaces.serverless %} gemäß deinem lokalen Tastaturlayout zu öffnen. In diesem Fall kannst du ein beliebiges {% data variables.product.prodname_dotcom %}-Repository im {% data variables.codespaces.serverless %} öffnen, indem du die URL von `github.com` in `github.dev` änderst.
