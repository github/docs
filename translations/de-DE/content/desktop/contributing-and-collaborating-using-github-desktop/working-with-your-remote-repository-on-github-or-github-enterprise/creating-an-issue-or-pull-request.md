---
title: Ein „Issue“ (Problem) oder einen Pull-Request erstellen
intro: 'Du kannst ein Issue oder einen Pull Request erstellen, um Änderungen an einem Repository vorzuschlagen und gemeinsam mit anderen daran zu arbeiten.'
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request
versions:
  fpt: '*'
shortTitle: Create an issue or PR
ms.openlocfilehash: 5430c8f11d08efc3f21cf1c62f470f38dcc2f257
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105335'
---
## Informationen zu Issues und Pull Requests

Du kannst Issues verwenden, um Ideen, Fehler, Aufgaben und andere Informationen zu verfolgen, die für dein Projekt wichtig sind. Du kannst ein Issue im Repository deines Projekts mit {% data variables.product.prodname_desktop %} erstellen. Weitere Informationen zu Issues findest du unter [Informationen zu Issues](/github/managing-your-work-on-github/about-issues).

Nachdem du einen Branch erstellt und Änderungen an Dateien in einem Projekt vorgenommen hast, kannst du einen Pull Request erstellen. Mit einem Pull Request kannst du Änderungen vorschlagen, besprechen und durchlaufen, bevor du die Änderungen im Projekt zusammenführst. Du kannst einen Pull Request im Repository deines Projekts mit {% data variables.product.prodname_desktop %} erstellen. Weitere Informationen zu Pull Requests findest du unter [Informationen zu Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

## Voraussetzungen

Bevor du einen Pull Request erstellst, musst du Änderungen an einem Branch an {% data variables.product.prodname_dotcom %} pushen.
- Speicher und committe alle Änderungen in deinen lokalen Branch. Weitere Informationen findest du unter [Committen und Überprüfen von Änderungen an deinem Projekt](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project).
- Pushe deinen lokalen Commit an das Remoterepository. Weitere Informationen findest du unter [Pushen von Änderungen an GitHub](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github).
- Veröffentliche deinen aktuellen Branch auf {% data variables.product.prodname_dotcom %}. Weitere Informationen findest du unter [Verwalten von Branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches).

## Einen Issue erstellen

{% mac %}

1. Verwende in der Menüleiste das Dropdownmenü **Repository**, und klicke dann auf **Issue erstellen auf {% data variables.product.prodname_dotcom %}**.
    ![Repositorywert im Menü „Branch“](/assets/images/help/desktop/create-issue-mac.png)
2. Klicke auf {% data variables.product.prodname_dotcom %} auf **Erste Schritte**, um eine Issuevorlage zu öffnen oder auf **Leeres Issue öffnen** zu klicken.
    ![Optionen zum Erstellen eines neuen Issues](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. Verwende in der Menüleiste das Dropdownmenü **Repository**, und klicke dann auf **Issue erstellen auf {% data variables.product.prodname_dotcom %}**.
    ![Repositorywert im Menü „Branch“](/assets/images/help/desktop/create-issue-windows.png)
2. Klicke auf {% data variables.product.prodname_dotcom %} auf **Erste Schritte**, um eine Issuevorlage zu öffnen oder auf **Leeres Issue öffnen** zu klicken.
    ![Optionen zum Erstellen eines neuen Issues](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**Hinweis**: Wenn keine Issuevorlagen in deinem aktuellen Repository aktiviert sind, leitet {% data variables.product.prodname_desktop %} dich zu einem leeren Issue auf {% data variables.product.prodname_dotcom %} weiter.

{% endnote %}

## Erstellen eines Pull Requests

{% mac %}

1. Wechsle zu dem Branch, für den du einen Pull Request erstellen möchtest. Weitere Informationen findest du unter [Wechseln zwischen Branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches).
2. Klicke auf **Pull Request erstellen**. {% data variables.product.prodname_desktop %} öffnet deinen Standardbrowser und leitet dich zu {% data variables.product.prodname_dotcom %}.
  ![Schaltfläche „Pull Request erstellen“](/assets/images/help/desktop/mac-create-pull-request.png)
4. Vergewissere dich bei {% data variables.product.prodname_dotcom %}, dass der Branch im Dropdownmenü **Basis:** der Branch ist, in dem du deine Änderungen zusammenführen möchtest. Vergewissere dich, dass der Branch im Dropdownmenü **Vergleich:** der Topic-Branch ist, in dem du deine Änderungen vorgenommen hast.
  ![Dropdownmenüs zum Auswählen der Basis- und Vergleichbranches](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Wechsle zu dem Branch, für den du einen Pull Request erstellen möchtest. Weitere Informationen findest du unter [Wechseln zwischen Branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches).
2. Klicke auf **Pull Request erstellen**. {% data variables.product.prodname_desktop %} öffnet deinen Standardbrowser und leitet dich zu {% data variables.product.prodname_dotcom %}.
  ![Schaltfläche „Pull Request erstellen“](/assets/images/help/desktop/windows-create-pull-request.png)
3. Vergewissere dich bei {% data variables.product.prodname_dotcom %}, dass der Branch im Dropdownmenü **Basis:** der Branch ist, in dem du deine Änderungen zusammenführen möchtest. Vergewissere dich, dass der Branch im Dropdownmenü **Vergleich:** der Topic-Branch ist, in dem du deine Änderungen vorgenommen hast.
  ![Dropdownmenüs zum Auswählen der Basis- und Vergleichbranches](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

## Weiterführende Themen
- [Issue](/github/getting-started-with-github/github-glossary#issue) im {% data variables.product.prodname_dotcom %}-Glossar
- [Pull Request](/github/getting-started-with-github/github-glossary#pull-request) im {% data variables.product.prodname_dotcom %}-Glossar
- [Basisbranch](/github/getting-started-with-github/github-glossary#base-branch) im {% data variables.product.prodname_dotcom %}-Glossar
- [Topic-Branch](/github/getting-started-with-github/github-glossary#topic-branch) im {% data variables.product.prodname_dotcom %}-Glossar
