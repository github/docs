---
title: Umbenennen einer Verzweigung
intro: Du kannst den Namen eines Branchs in einem Repository ändern.
permissions: 'People with write permissions to a repository can rename a branch in the repository unless it is the [default branch](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch){% ifversion fpt or ghec or ghes > 3.3 %} or a [protected branch](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% endif %}. People with admin permissions can rename the default branch{% ifversion fpt or ghec or ghes > 3.3 %} and protected branches{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/renaming-a-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/renaming-a-branch
ms.openlocfilehash: 6e30c7c2615f8b3dc21075e24298796febbce314
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132357'
---
## Informationen zum Umbenennen von Verzweigungen

Du kannst einen Branch in einem Repository in {% data variables.product.product_location %} umbenennen. Weitere Informationen zu Branches findest du unter [Informationen zu Branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches).

Wenn du eine Verzweigung in {% data variables.product.product_location %} umbenennst, werden alle URLs, die den alten Verzweigungsnamen enthalten, automatisch an die entsprechende URL für die umbenannte Verzweigung umgeleitet. Verzweigungsschutzrichtlinien werden ebenfalls aktualisiert, sowie die Basisverzweigungen für offene Pull Requests (einschließlich der Forks) und Entwurfsversionen. Nachdem die Umbenennung abgeschlossen ist, stellt {% data variables.product.prodname_dotcom %} Anweisungen auf der Startseite des Repositorys bereit, die Mitwirkenden eine Anleitung zum Aktualisieren ihrer lokalen Git-Umgebungen geben.

Obwohl Datei-URLs automatisch umgeleitet werden, werden Roh-Datei-URLs nicht umgeleitet. Außerdem führt {% data variables.product.prodname_dotcom %} keine Umleitungen aus, wenn Benutzer einen `git pull` für den vorherigen Verzweigungsnamen ausführen.

Wenn dein Repository eine Aktion veröffentlicht, wird die Arbeit aller Benutzer*innen unterbrochen, die diese Aktion mit `@{old-branch-name}` verwenden, da {% data variables.product.prodname_actions %}-Workflows keinen Umbenennungen folgen. Du solltest in Erwägung ziehen, einen neuen Branch mit dem ursprünglichen Inhalt und einem zusätzlichen Commit hinzuzufügen, der meldet, dass der Name des Branchs veraltet ist, und den Benutzer*innen vorschlägt, zum neuen Branchnamen zu migrieren.

## Umbenennen einer Verzweigung

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
1. Klicke in der Liste der Branches rechts neben dem umzubenennenden Branch auf {% octicon "pencil" aria-label="The edit icon" %}.
    ![Bleistiftsymbol rechts neben der Verzweigung, die du umbenennen möchtest](/assets/images/help/branch/branch-rename-edit.png)
1. Gib einen neuen Namen für den Branch ein.
    ![Textfeld zum Eingeben des neuen Verzweigungsnamens](/assets/images/help/branch/branch-rename-type.png)
1. Überprüfe die Informationen zu lokalen Umgebungen, und klicke dann auf **Branch umbenennen**.
    ![Informationen zu lokalen Umgebungen und Schaltfläche „Verzweigung umbenennen“](/assets/images/help/branch/branch-rename-rename.png)

## Aktualisieren eines lokalen Klons nach Änderungen an einem Verzweigungsnamen

Nachdem du eine Verzweigung in einem Repository für {% data variables.product.product_name %} umbenannt hast, muss jeder Projektmitarbeiter mit einem lokalen Klon des Repositorys den Klon aktualisieren.

Führe über den lokalen Klon des Repositorys auf einem Computer die folgenden Befehle aus, um den Namen des Standardbranchs zu aktualisieren.

```shell
$ git branch -m <em>OLD-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git fetch origin
$ git branch -u origin/<em>NEW-BRANCH-NAME</em> <em>NEW-BRANCH-NAME</em>
$ git remote set-head origin -a
```

Führe optional den folgenden Befehl aus, um Nachverfolgungsverweise auf den alten Branchnamen zu entfernen.
```
$ git remote prune origin
```
