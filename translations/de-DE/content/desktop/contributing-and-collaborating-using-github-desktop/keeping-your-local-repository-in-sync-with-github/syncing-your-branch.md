---
title: Deinen Branch synchronisieren
intro: 'Während Commits an dein Projekt auf {% data variables.product.prodname_dotcom %} gepusht werden, kannst du die lokale Kopie des Projekts synchron halten, indem du es aus dem Remoterepository pullst.'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
  - /desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch
versions:
  fpt: '*'
ms.openlocfilehash: eb803c8f5ef34c4ab25255c1635d31468b1b32af
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090145'
---
## Informationen zur Branchsynchronisierung

Du kannst deinen lokalen Branch mit dem Remote-Repository synchronisieren, indem du alle Commits abrufst, die dem Branch für {% data variables.product.product_name %} seit der letzten Synchronisierung hinzugefügt wurden. Wenn du Commits aus einem anderen Gerät vornimmst oder mehrere Personen zu einem Projekt beitragen, musst du deinen lokalen Branch synchronisieren, um den Branch aktualisiert zu halten.

Wenn du deinen lokalen Branch abrufst, aktualisiere nur deine lokale Kopie des Repositorys. Um deinen Branch auf {% data variables.product.prodname_dotcom %} zu aktualisieren, musst du deine Änderungen pushen. Weitere Informationen findest du unter „[Pushen von Änderungen auf {% data variables.product.prodname_dotcom %}](/desktop/contributing-to-projects/pushing-changes-to-github)“.

Um Änderungen von einem Branch zu einem anderen Branch hinzuzufügen, kannst du die Branches zusammenführen. Um Änderungen an deinem Branch aus einem anderen Branch im gleichen Repository anzuwenden, kannst du den anderen Branch in deinen Branch auf {% data variables.product.prodname_desktop %} zusammenführen. Um anzufordern, dass Änderungen aus deinem Branch in einen anderen Branch im selben Repository oder in einem anderen Repository im Netzwerk zusammengeführt werden, kannst du einen Pull Request auf {% data variables.product.prodname_desktop %} erstellen. Weitere Informationen findest du unter „[Zusammenführen eines anderen Branches in deine Projektbranches](#merging-another-branch-into-your-project-branch)“ und „[Informationen zu Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)“.

Einige Workflows erfordern oder profitieren vom Rebasing anstelle der Zusammenführung. Durch das Rebasing kannst du Commits neu anordnen, bearbeiten oder zusammenzwingen. Weitere Informationen findest du unter „[Informationen zu Git-Rebase](/github/getting-started-with-github/about-git-rebase)“ und „[Rebasing deines Projektbranches auf einem anderen Branch](#rebasing-your-project-branch-onto-another-branch)“.

## Pullen deines lokalen Branches aus dem Remotebranch

1. Verwende in {% data variables.product.prodname_desktop %} das {% octicon "git-branch" aria-label="The branch icon" %} Dropdown **Current Branch** und wähle den zu aktualisierenden lokalen Branch.
2.  Zum Überprüfen nach Commits auf dem Remotebranch klicke auf **Ursprung abrufen**
![Die Schaltfläche „Ursprung abrufen“](/assets/images/help/desktop/fetch-button.png)
3. Wenn du alle Commits aus dem Remotebranch pullen möchtest, klicke auf **Ursprung pullen** oder **Ursprung mit Rebase pullen**.
![Die Schaltfläche „Ursprung pullen“](/assets/images/help/desktop/pull-button.png) {% data reusables.desktop.resolve-merge-conflicts %}

## Anderen Branch in deinem Projektbranch zusammenführen

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.choose-a-branch-to-merge %} {% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Hinweis**: Wenn Zusammenführungskonflikte vorhanden sind, warnt {% data variables.product.prodname_desktop %} Dich über der Schaltfläche **BRANCH <em> in</em>BRANCH <em> zusammenführen</em>**. Du kannst die Branches erst per Merge fusionieren, nachdem du alle Konflikte behoben hast.

   {% endnote %}

   ![Die Schaltfläche „Zusammenführen“](/assets/images/help/desktop/merge-branch-button.png) {% data reusables.desktop.push-origin %}

## Deinen Projektbranch per Rebasing auf einem anderen Branch basieren lassen

{% mac %}

1. Verwende in der Menüleiste die Dropdownliste **Branch** und klicke auf **Rebase Current Branch** (Rebase für aktuellen Branch ausführen).
![Rebase Current Branch Rebase für aktuellen Branch ausführen im Dropdownmenü des Branches](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. Klicke auf den Branch, den du per Rebase in den aktuellen Branch versetzen möchtest, und klicke anschließend auf **Start rebase** (Rebase starten).
![Schaltfläche „Start rebase“ (Rebase starten)](/assets/images/help/desktop/start-rebase-button.png)
3. Wenn du sicher bist, dass du ein Rebase ausführen möchtest, klicke auf **Begin rebase (Rebase beginnen)**.
![Die Schaltfläche „Begin Rebase“](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. Wenn du deine lokalen Änderungen pushen möchtest, klicke auf **Force push origin (Ursprungs-Push) erzwingen**.
![Force push origin (Ursprungs-Push erzwingen)](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. Verwende die Dropdownliste **Branch** und klicke auf **Rebase Current Branch** (Rebase für aktuellen Branch ausführen).
![Rebase Current Branch (Basis des aktuellen Branches neu setzen) im Dropdown](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. Klicke auf den Branch, den du per Rebase in den aktuellen Branch versetzen möchtest, und klicke anschließend auf **Start rebase** (Rebase starten).
![Schaltfläche „Start rebase“ (Rebase starten)](/assets/images/help/desktop/start-rebase-button.png)
3. Wenn du sicher bist, dass du ein Rebase ausführen möchtest, klicke auf **Begin rebase (Rebase beginnen)**.
![Die Schaltfläche „Begin Rebase“](/assets/images/help/desktop/begin-rebase-button.png) {% data reusables.desktop.resolve-merge-conflicts %}
4. Wenn du deine lokalen Änderungen pushen möchtest, klicke auf **Force push origin (Ursprungs-Push erzwingen)**.
![Force push origin (Ursprungs-Push erzwingen)](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

## Squashing und Zusammenführen eines anderen Branches in deinem Projektbranch zusammenführen

1. Verwende die Dropdownliste **Branch**, und klicke auf **Squash and Merge into Current Branch (Squashing und Zusammenführen in aktuellem Branch)**.
![Dropdown „Squash und Zusammenführen in Branch“](/assets/images/help/desktop/squash-and-merge-menu.png)
2. Klicke auf den Branch, den du in den aktuellen Branch zusammenführen möchtest, und klicke anschließend auf **Squash and merge (Squash und zusammenführen)**.
![Schaltfläche Squash and merge (Squash und zusammenführen)](/assets/images/help/desktop/squash-and-merge-selection.png) {% note %}

   **Hinweis**: Wenn Zusammenführungskonflikte vorhanden sind, warnt {% data variables.product.prodname_desktop %} Dich über der Schaltfläche **Squash and merge (Squash und zusammenführen)**. Du kannst die Branches erst squashen und zusammenführen, nachdem du alle Konflikte behoben hast.

   {% endnote %} {% data reusables.desktop.push-origin %}

## Weitere Informationen
- „[Pull](/github/getting-started-with-github/github-glossary#pull)“ im {% data variables.product.prodname_dotcom %}-Glossar
- „[Zusammenführen](/github/getting-started-with-github/github-glossary#merge)“ im {% data variables.product.prodname_dotcom %}-Glossar
- „[Rebase](/github/getting-started-with-github/github-glossary#rebase)“ im {% data variables.product.prodname_dotcom %}-Glossar
