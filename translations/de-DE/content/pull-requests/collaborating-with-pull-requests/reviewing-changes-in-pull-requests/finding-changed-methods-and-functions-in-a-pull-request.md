---
title: Geänderte Methoden und Funktionen in einem Pull Request suchen
intro: 'Du kannst vorgeschlagene Änderungen an einer Methode oder Funktion in einem Pull Request schnell in den *.go*-, *.js*-, *.ts*-, *.py*-, *.php*- und *.rb*-Dateien finden.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Methods & functions
ms.openlocfilehash: be891fe01166ee0eccf9ba7c824a1017c9d8fc11
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145133702'
---
Jeder, der Lesezugriff auf ein Repository hat, kann eine zusammenfassende Liste der Funktions- und Methodenänderungen in bestimmten Dateien eines Pull Requests anzeigen.

Die zusammenfassende Liste der Methoden und Funktionen wird aus den folgenden unterstützten Dateitypen erstellt:
  - Go
  - JavaScript (inkl. Typescript, Flow und anderer Arten von JavaScript)
  - PHP
  - Python
  - Ruby

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, in dem du geänderte Funktionen und Methoden suchen möchtest.
{% data reusables.repositories.changed-files %}
4. Um eine zusammenfassende Liste der geänderten Funktionen und Methoden zu sehen, klicke auf **Gehe zu...**. ![Dropdownmenü „Springen zu“](/assets/images/help/pull_requests/jump-to-menu.png).
5. Wähle die geänderte Funktion oder Methode aus dem Dropdownmenü aus. Du kannst auch den Namen der Funktion oder Methode eingeben, um die Ergebnisse zu filtern.
  ![Filtern von Funktionen und Methoden](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **Hinweis:** Wenn dir nicht die erwarteten Funktionen oder Methoden angezeigt werden, vergewissere dich, dass dein Code kompiliert werden kann und keine Fehler enthält. Im Dropdownmenü werden nur Funktionen und Methoden angezeigt, die in diesem Pull Request geändert wurden und sich in Dateien mit den Erweiterungen *.go*, *.js*, *.ts*, *.py*, *.php* und *.rb* befinden.

 {% endnote %}

6. Du wirst zur ersten Zeile der von Dir ausgewählten Funktion oder Methode weitergeleitet.
 ![Anzeigen einer Funktion oder Methode in geänderten Dateien](/assets/images/help/pull_requests/view-selected-function-or-method.png)

## Weiterführende Themen

- [Informationen zum Vergleichen von Branches in einem Pull Request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)
- [Filtern von Dateien in einem Pull Request nach Dateityp](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request)
