---
title: Verwalten von Branches
intro: 'Du kannst einen Branch aus dem Standardbranch eines Repositorys erstellen, damit du unbesorgt mit Änderungen experimentieren kannst.'
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-branches
versions:
  fpt: '*'
ms.openlocfilehash: 30604c6b3ed0ab9ca5c0f3f8ca0fe853624ee86b
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105368'
---
## Informationen zum Verwalten von Branches
Du kannst Branches verwenden, um sicher mit Änderungen an deinem Projekt zu experimentieren. Branches isolieren deine Entwicklungsarbeit von anderen Branches im Repository. Du könntest beispielsweise einen Branch verwenden, um ein neues Feature zu entwickeln oder einen Fehler zu beheben.

Du erstellst einen Branch immer aus einem existierenden Branch. Normalerweise würdest du einen Branch aus dem Standardbranch deines Repositorys erstellen. Da kannst dann in diesem Branch unabhängig von Änderungen arbeiten, die andere Personen im Repository machen.

Du kannst einen Branch auch ausgehend von einem vorherigen Commit im Verlauf eines Branchs erstellen. Dies kann hilfreich sein, wenn du zu einer früheren Ansicht des Repositorys zurückkehren musst, um einen Fehler zu untersuchen, oder um einen Hot Fix am Anfang deines neuesten Release zu erstellen.

Wenn du mit deiner Arbeit zufrieden bist, kannst du einen Pull Request erstellen, um deine Änderungen im aktuellen Branch in einen anderen Branch zu mergen. Weitere Informationen findest du unter [Erstellen eines Issues oder Pull Requests](/desktop/contributing-to-projects/creating-an-issue-or-pull-request) und [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Du kannst immer einen Branch in {% data variables.product.prodname_desktop %} erstellen, wenn du Lesezugriff auf ein Repository hast, aber du kannst den Branch nur nach {% data variables.product.prodname_dotcom %} pushen, wenn du Schreibzugriff auf das Repository hast.

{% data reusables.desktop.protected-branches %}

## Branch erstellen

{% tip %}

**Tipp:** Der erste neue Branch, den du erstellst, basiert auf dem Standardbranch. Wenn du mehrere Branches besitzt, kannst du wählen, ob der neue Branch auf dem aktuell ausgecheckten Branch oder dem Standardbranch basieren soll.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![Dropdownmenü zum Wechseln des aktuellen Branchs](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.create-new-branch %} ![Option „Neuer Branch“ im Menü „Branch“](/assets/images/help/desktop/new-branch-button-mac.png) {% data reusables.desktop.name-branch %} ![Feld zum Erstellen eines Namens für den neuen Branch](/assets/images/help/desktop/create-branch-name-mac.png) {% data reusables.desktop.select-base-branch %} ![Basisbranchoptionen](/assets/images/help/desktop/create-branch-choose-branch-mac.png) {% data reusables.desktop.confirm-new-branch-button %} ![Schaltfläche „Branch erstellen“](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![Dropdownmenü zum Wechseln des aktuellen Branchs](/assets/images/help/desktop/click-branch-in-drop-down-win.png) {% data reusables.desktop.create-new-branch %} ![Option „Neuer Branch“ im Menü „Branch“](/assets/images/help/desktop/new-branch-button-win.png) {% data reusables.desktop.name-branch %} ![Feld zum Erstellen eines Namens für den neuen Branch](/assets/images/help/desktop/create-branch-name-win.png) {% data reusables.desktop.select-base-branch %} ![Basisbranchoptionen](/assets/images/help/desktop/create-branch-choose-branch-win.png) {% data reusables.desktop.confirm-new-branch-button %} ![Schaltfläche „Branch erstellen“](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

## Erstellen eines Branchs aus einem vorherigen Commit

{% data reusables.desktop.history-tab %}
2. Klicke mit der rechten Maustaste auf den Commit, aus dem du einen neuen Branch erstellen möchtest, und wähle **Branch aus Commit erstellen** aus.
  ![Erstellen eines Branchs aus dem Commitkontextmenü](/assets/images/help/desktop/create-branch-from-commit-context-menu.png) {% data reusables.desktop.name-branch %} {% data reusables.desktop.confirm-new-branch-button %} ![Branch aus Commit erstellen](/assets/images/help/desktop/create-branch-from-commit-overview.png)

## Veröffentlichen eines Branchs

Wenn du einen Branch auf {% data variables.product.product_name %} erstellst, musst du den Branch veröffentlichen, um ihn für die Zusammenarbeit auf {% data variables.product.prodname_dotcom %} verfügbar zu machen.

1. Klicke oben in der App auf {% octicon "git-branch" aria-label="The branch icon" %} **Aktueller Branch**, und dann auf den Branch, den du veröffentlichen möchtest.
  ![Dropdownmenü zum Auswählen des zu veröffentlichenden Branchs](/assets/images/help/desktop/select-branch-from-dropdown.png)
2. Klicke auf **Branch veröffentlichen**.
  ![Schaltfläche „Branch veröffentlichen“](/assets/images/help/desktop/publish-branch-button.png)

## Wechseln zwischen Zweigen
Du kannst Commits auf allen Branches deiner Repositorys anzeigen und durchführen. Wenn du Änderungen gespeichert hast, die nicht per Commit übertragen wurden, musst du Dich entscheiden, was mit deinen Änderungen geschehen soll, bevor du den Branch wechseln kannst. Du kannst deine Änderungen zum aktuellen Branch committen, einen Stash für sie ausführen, um sie temporär auf dem aktuellen Branch zu speichern, oder sie zu deinem neuen Branch übertragen. Wenn du deine Änderungen vor dem Wechseln von Branches committen möchtest, nutze die Informationen unter [Committen und Überprüfen von Änderungen an deinem Projekt](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project).
{% tip %}

**Tipp**: Du kannst ein Standardverhalten für das Wechseln von Branches in den Einstellungen unter **Erweitert** festlegen. Weitere Informationen findest du unter [Konfigurieren von Grundeinstellungen](/desktop/getting-started-with-github-desktop/configuring-basic-settings).

{% endtip %}

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.switching-between-branches %} ![Liste der Branches im Repository](/assets/images/help/desktop/select-branch-from-dropdown.png)
3. Wenn gespeicherte, noch nicht committete Änderungen vorhanden sind, wähle **Meine Änderungen vergessen** oder **Meine Änderungen übertragen**, und klicke auf **Branch wechseln**.
  ![Optionen zum Wechseln des Branches mit Änderungen](/assets/images/help/desktop/stash-changes-options.png)

## Branch löschen

Du kannst einen Branch nicht löschen, wenn er derzeit einem offenen Pull Request zugeordnet ist. Du kannst das Löschen eines Branchs nicht rückgängig machen.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %} ![Dropdownmenü zur Auswahl des zu löschenden Branchs](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-mac %} ![Option „Löschen...“ im Menü „Branch“](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %} ![Dropdownmenü zur Auswahl des zu löschenden Branchs](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-win %} ![Option „Löschen...“ im Menü „Branch“](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

## Weiterführende Themen

- [Klonen eines Repositorys in {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)
- [Branch](/articles/github-glossary/#branch) im {% data variables.product.prodname_dotcom %}-Glossar
- [Informationen zu Branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [Branches in einer Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) in der Git-Dokumentation
- [Ausführen eines Stashs für Änderungen](/desktop/contributing-and-collaborating-using-github-desktop/stashing-changes)
