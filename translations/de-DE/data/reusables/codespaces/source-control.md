---
ms.openlocfilehash: c760b3f26f89437d485cc222de4fbc54fa907735
ms.sourcegitcommit: f464cc9bfc41132f315ea172c591bfd145a06736
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/15/2022
ms.locfileid: "148165460"
---
## Veröffentlichen eines Codespace, der mithilfe einer Vorlage erstellt wurde

Wenn du einen Codespace mithilfe eines Vorlagenrepositorys oder einer Vorlage auf der Seite „Deine Codespaces“ erstellst, wird deine Arbeit erst in einem Repository auf {% data variables.product.prodname_dotcom %} gespeichert, wenn du deinen Codespace veröffentlichst. Weitere Informationen findest du unter [Erstellen eines Codespace mithilfe einer Vorlage](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-repository-on-github).

{% data reusables.codespaces.publishing-template-codespaces %}

## Erstellen oder Wechseln von Branches

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**Tipp:** Wenn eine Person vor Kurzem eine Datei im Remoterepository geändert hat, wird diese Änderung im Branch, zu dem du gewechselt bist, möglicherweise erst angezeigt, wenn du die Änderungen in deinen Codespace pullst. 

{% endtip %}

## Committen deiner Änderungen 

{% data reusables.codespaces.source-control-commit-changes %} 

## Pullen von Änderungen aus einem Remoterepository

Du kannst Änderungen aus dem Remoterepository jederzeit in deinen Codespace pullen. 

{% data reusables.codespaces.source-control-display-dark %}
1. Klicke oben in der Seitenleiste auf die Auslassungspunkte ( **...** ). ![Auslassungspunkte für die Ansicht und weitere Aktionen](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. Klicke im Dropdownmenü auf **Pullen**.

Wenn die Konfiguration des Entwicklungscontainers seit der Erstellung des Codespaces geändert wurde, kannst du die Anwendung durch Neuerstellung des Containers für den Codespace anwenden. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration).

## Festlegen des Codespaces zum automatischen Abrufen neuer Änderungen 

Du kannst deinen Codespace so festlegen, dass automatisch Details aller neuen Commits abgerufen werden, die an das Remoterepository vorgenommen wurden. Auf diese Weise kannst du sehen, ob deine lokale Kopie des Repositorys veraltet ist, in diesem Fall kannst du die neuen Änderungen abrufen. 

Wenn der Abrufvorgang neue Änderungen im Remoterepository erkennt, wird die Anzahl neuer Commits in der Statusleiste angezeigt. Anschließend kannst du die Änderungen in deine lokale Kopie ziehen.

1. Klicke unten auf der Aktivitätsleiste auf die Schaltfläche **Verwalten**.
![Schaltfläche zur Verwaltung](/assets/images/help/codespaces/manage-button.png)
1. Klicken Sie im Menü auf **Settings**.
1. Suche auf der Seite „Einstellungen“ nach `autofetch`.
![Suchen nach der automatischen Abruffunktion (autofetch)](/assets/images/help/codespaces/autofetch-search.png)
1. Um Details zu Updates für alle Remoteoptionen abzurufen, die für das aktuelle Repository registriert sind, lege **Git: Autofetch** auf `all` fest.
![Aktivieren von Git autofetch](/assets/images/help/codespaces/autofetch-all.png)
1. Wenn du die Sekundenzahl zwischen jedem automatischen Abruf ändern möchtest, bearbeite den Wert von **Git: Autofetch Period**.

## Auslösen eines Pull Requests

{% data reusables.codespaces.source-control-pull-request %} 

## Pushen von Änderungen an dein Remoterepository

Du kannst Änderungen, die du gespeichert und committet hast, per Push übertragen. Dadurch werden die Änderungen im Upstreambranch im Remoterepository angewendet. Du kannst diese Methode nutzen, wenn du noch nicht bereit bist, einen Pull Request zu erstellen oder wenn du lieber einen Pull Request auf {% data variables.product.prodname_dotcom %} erstellen möchtest.

1. Klicke oben in der Seitenleiste auf die Auslassungspunkte ( **...** ). ![Auslassungspunkte für die Ansicht und weitere Aktionen](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. Klicke im Dropdownmenü auf **Pushen**.
