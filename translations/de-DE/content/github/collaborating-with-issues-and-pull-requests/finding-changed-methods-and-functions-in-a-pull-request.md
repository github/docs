---
title: Geänderte Methoden und Funktionen in einem Pull Request finden
intro: 'Du kannst vorgeschlagene Änderungen für eine Methode oder Funktion in einem Pull Request in *.go*-, *.js*-, *.ts*-, *.py*-, *.php*- und *.rb*-Dateien schnell finden.'
redirect_from:
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Jeder, der Lesezugriff auf ein Repository hat, kann eine zusammenfassende Liste der Funktions- und Methodenänderungen in bestimmten Dateien eines Pull Requests anzeigen.

Die zusammenfassende Liste der Methoden und Funktionen wird aus den folgenden unterstützten Dateitypen erstellt:
  - Go
  - JavaScript (inkl. Typescript, Flow und anderer Arten von JavaScript)
  - PHP
  - Python
  - Ruby

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, in dem Du geänderte Funktionen und Methoden suchen möchtest.
{% data reusables.repositories.changed-files %}
4. Um eine zusammenfassende Liste der geänderten Funktionen und Methoden anzuzeigen, klicke auf **Jump to...** (Gehe zu...). ![Dropdownmenü „Jump to...“ (Gehe zu...)](/assets/images/help/pull_requests/jump-to-menu.png)
5. Wähle die geänderte Funktion oder Methode aus dem Dropdownmenü aus. Du kannst auch den Namen der Funktion oder Methode eingeben, um die Ergebnisse zu filtern. ![Funktionen und Methoden filtern](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **Hinweis:** Wenn Du die erwarteten Funktionen oder Methoden nicht siehst, vergewissere Dich, dass Dein Code kompiliert wird und keine Fehler enthält. Im Dropdownmenü werden nur die Funktionen und Methoden angezeigt, die in diesem Pull Request geändert wurden und in *.go*-, *.js*-, *.ts*-, *.py*-, *.php*- und *.rb*-Dateien enthalten sind.

 {% endnote %}

6. Du wirst zur ersten Zeile der von Dir ausgewählten Funktion oder Methode weitergeleitet. ![Geänderte Funktion oder Methode in Dateien anzeigen](/assets/images/help/pull_requests/view-selected-function-or-method.png)

### Weiterführende Informationen

- „[Informationen zum Vergleich von Branches in einem Pull Request](/articles/about-comparing-branches-in-pull-requests)“
- „[Dateien in einem Pull Request nach Dateityp filtern](/articles/filtering-files-in-a-pull-request)“
