---
title: Verwenden der Quellcodeverwaltung in deinem Codespace
intro: 'Nachdem du Änderungen an einer Datei in deinem Codespace vorgenommen hast, kannst du die Änderungen schnell übernehmen und ein Update an das Remoterepository pushen.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
ms.openlocfilehash: 513bf0729e1f04bf93f45999b2fa9e45231add5c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159641'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Informationen zur Quellcodeverwaltung in {% data variables.product.prodname_github_codespaces %}

Du kannst alle Git-Aktionen ausführen, die du direkt in deinem Codespace benötigst. Du kannst beispielsweise Änderungen aus einem Remoterepository fetchen, Branches wechseln, einen neuen Branch erstellen, Änderungen committen und pushen und einen Pull Request erstellen. Du kannst das integrierte Terminal in deinem Codespace verwenden, um Git-Befehle einzugeben, oder du kannst auf Symbole und Menüoptionen klicken, um alle gängigen Git-Aufgaben abzuschließen. In diesem Leitfaden wird erläutert, wie du die grafische Benutzeroberfläche für die Quellcodeverwaltung verwendest.

{% vscode %}

Weitere Informationen zur Git-Unterstützung in {% data variables.product.prodname_vscode %} findest du unter [Verwenden der Versionskontrolle in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support) in der {% data variables.product.prodname_vscode %}-Dokumentation.

{% endvscode %}

{% webui %}

Die Quellcodeverwaltung im {% data variables.product.prodname_vscode %}-Webclient verwendet denselben Workflow wie die {% data variables.product.prodname_vscode %}-Desktopanwendung. Weitere Informationen findest du unter [Verwenden der Versionskontrolle in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support) in der {% data variables.product.prodname_vscode %}-Dokumentation.

{% endwebui %}

Ein typischer Workflow zum Aktualisieren einer Datei mit {% data variables.product.prodname_github_codespaces %} sieht so aus:

* Erstelle im Standardbranch deines Repositorys auf {% data variables.product.prodname_dotcom %} einen Codespace. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).
* Erstelle in deinem Codespace einen neuen Branch, an dem du arbeiten möchtest.
* Nimm deine Änderungen vor, und speichere sie.
* Führe für die Änderung einen Commit aus.
* Auslösen eines Pull Requests

{% webui %}

{% data reusables.codespaces.source-control %} 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.source-control %} 

{% endvscode %}

{% jetbrains %}

## Erstellen oder Wechseln von Branches

1. Klicke auf der Statusleiste rechts auf den Branchnamen.

   ![Screenshot: Branchname auf der Statusleiste](/assets/images/help/codespaces/jetbrains-branch-button.png)

1. Führe im Popupmenü einen der folgenden Schritte aus:
   * Um basierend auf dem aktuellen Branch einen neuen Branch zu erstellen, klicke auf den Namen des aktuellen Branchs und dann auf **Neuer Branch**. 

     ![Screenshot: Option „Neuer Branch“](/assets/images/help/codespaces/jetbrains-new-branch-option.png)

     Gib einen Namen für den neuen Branch ein, und klicke dann auf **Erstellen**.

     ![Screenshot: Dialogfeld zum Erstellen eines neuen Branchs](/assets/images/help/codespaces/jetbrains-create-branch-dialog.png)

   * Um einen vorhandenen Branch auszuchecken, gib den Namen des Branchs ein, den du auschecken möchtest. Klicke in der Liste auf den Branch und dann auf **Auschecken**.

     ![Screenshot: Option zum Auschecken](/assets/images/help/codespaces/jetbrains-checkout-submenu.png)

     {% tip %}

     **Tipp:** Wenn eine Person vor Kurzem eine Datei im Remoterepository geändert hat, wird diese Änderung im Branch, zu dem du gewechselt bist, möglicherweise erst angezeigt, wenn du die Änderungen in deinen Codespace pullst. 

     {% endtip %}


## Committen deiner Änderungen 

1. Klicke auf der Navigationsleiste rechts auf das Häkchen.

   ![Screenshot: Häkchen zum Committen](/assets/images/help/codespaces/jetbrains-commit-button.png)

1. Gib im Dialogfeld „Änderungen committen“ eine Commitnachricht ein.
1. Klicke auf **Commit ausführen**.

   Alternativ kannst du auf den nach unten zeigenden Pfeil neben **Commit** und dann auf **Commit und Push** klicken.

   ![Screenshot: Schaltfläche „Commit und Push“](/assets/images/help/codespaces/jetbrains-commit-and-push.png)

## Pullen von Änderungen aus einem Remoterepository

Du kannst Änderungen aus demselben Branch im Remoterepository pullen und diese Änderungen auf die Kopie des Repositorys anwenden, an dem du in deinem Codespace arbeitest.

1. Klicke rechts auf der Navigationsleiste auf den nach unten zeigenden Pfeil.

   ![Screenshot: Nach unten zeigender Pfeil für die Option „Projekt aktualisieren“](/assets/images/help/codespaces/jetbrains-update-project-button.png)

1. Wähle im Dialogfeld „Projekt aktualisieren“ aus, ob du eingehende Änderungen mergen oder ein Rebase ausführen möchtest.

   ![Screenshot: Dialogfeld „Projekt aktualisieren“](/assets/images/help/codespaces/jetbrains-update-options.png)

1. Klicke auf **OK**.

## Pushen von Änderungen an dein Remoterepository

Du kannst Änderungen pushen, die du gespeichert und committet hast. Dadurch werden die Änderungen im Upstreambranch im Remoterepository angewendet. Du kannst diese Methode nutzen, wenn du noch nicht bereit bist, einen Pull Request zu erstellen oder wenn du lieber einen Pull Request auf {% data variables.product.prodname_dotcom %} erstellen möchtest.

1. Klicke rechts auf der Navigationsleiste auf den nach oben zeigenden Pfeil.

   ![Screenshot: Nach oben zeigender Pfeil für die Option zum Pushen von Commits](/assets/images/help/codespaces/jetbrains-push-button.png)

1. Klicke im Dialogfeld „Commits pushen“ auf **Push**.

{% endjetbrains %}
