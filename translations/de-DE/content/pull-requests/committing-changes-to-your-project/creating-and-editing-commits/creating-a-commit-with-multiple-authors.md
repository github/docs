---
title: Einen Commit mit mehreren Autoren erstellen
intro: 'Du kannst einen Commit mehreren Autor*innen zuordnen, indem du mindestens einen `Co-authored-by`-Nachspann zur Commitnachricht hinzufügst. Commits mit Co-Autor*in sind auf {% data variables.product.product_name %} sichtbar{% ifversion ghes or ghae %} und können in das Beteiligungsdiagramm des Profils sowie in die Repositorystatistik aufgenommen werden{% endif %}.'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: With multiple authors
ms.openlocfilehash: 4aa5b707e75480ead830e680151064db5f278557
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132538'
---
## Erforderliche Co-Autor-Informationen

Bevor du einen Co-Autor zu einem Commit hinzufügen kannst, musst du die richtige E-Mail-Adresse für jeden Co-Autor kennen. Damit Commits von Co-Autor*innen als Beitrag gelten, musst du die E-Mail-Adressen verwenden, die deren Konto in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} zugeordnet sind.

{% ifversion fpt or ghec %}

Wenn eine Person ihre E-Mail-Adresse als privat festgelegt hat, musst du die von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse verwenden, um ihre Daten zu schützen. Andernfalls ist die E-Mail-Adresse des Co-Autors in der Commit-Mitteilung öffentlich einsehbar. Wenn du deine E-Mail-Adresse öffentlich machen möchtest, kannst du die von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse für Git-Vorgänge verwenden und andere Co-Autor*innen bitten, deine `no-reply`-Adresse in Commitnachspannen zu verwenden.

Weitere Informationen findest du unter [Festlegen der Commit-E-Mail-Adresse](/articles/setting-your-commit-email-address).

  {% tip %}

  **Tipp:** Um Co-Autor*innen dabei zu helfen, ihre bevorzugte E-Mail-Adresse zu finden, kannst du die folgenden Informationen weitergeben:
  - Die von {% data variables.product.product_name %} bereitgestellte `no-reply`-E-Mail-Adresse findest du auf der Seite mit deinen E-Mail-Einstellungen unter „E-Mail-Adresse privat halten“.
  - Um die E-Mail zu finden, die du zum Konfigurieren von Git auf deinem Computer verwendet hast, führst du `git config user.email` an der Befehlszeile aus.

  {% endtip %}

{% endif %}

## Commits mit Co-Autor mit {% data variables.product.prodname_desktop %} erstellen

Du kannst mit {% data variables.product.prodname_desktop %} einen Commit mit einem Co-Autor erstellen. Weitere Informationen findest du unter [Schreiben einer Commitnachricht und Pushen deiner Änderungen](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes) und [{% data variables.product.prodname_desktop %}](https://desktop.github.com).

![Einen Co-Autor zur Commit-Mitteilung hinzufügen](/assets/images/help/desktop/co-authors-demo-hq.gif)

## Commits mit Co-Autor in der Befehlszeile erstellen

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

1. Gib deine Commit-Mitteilung ein und eine kurze, aussagekräftige Beschreibung deiner Änderungen. Füge nach deiner Commit-Beschreibung zwei Leerzeilen statt eines abschließenden Anführungszeichens hinzu.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Tipp:** Wenn du deine Commitnachricht in der Befehlszeile mit einem Text-Editor eingibst, stelle sicher, dass zwischen dem Ende deiner Commitbeschreibung und dem `Co-authored-by:`-Committrailer zwei Zeilenvorschübe stehen.

  {% endtip %}

3. Gib in der nächsten Zeile der Commitnachricht `Co-authored-by: name <name@example.com>` mit spezifischen Informationen zu allen Co-Autor*innen ein. Füge nach den Angaben zu den Co-Autoren ein abschließendes Anführungszeichen ein.

  Wenn du mehrere Co-Autor*innen hinzufügst, verwendest du für alle jeweils eine eigene Zeile und einen eigenen Commitnachspann mit `Co-authored-by:`.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: <em>name</em> &lt;<em>name@example.com</em>&gt;
  Co-authored-by: <em>another-name</em> &lt;<em>another-name@example.com</em>&gt;"
  ```

Der neue Commit und die neue Commit-Mitteilung werden beim nächsten Push auf {% data variables.product.product_location %} angezeigt. Weitere Informationen findest du unter [Verschieben von Änderungen in ein Remoterepository](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

## Commits mit Co-Autor auf {% data variables.product.product_name %} erstellen

Wenn du mit dem Web-Editor Änderungen an einer Datei auf {% data variables.product.product_name %} vorgenommen hast, kannst du einen Commit mit Co-Autor*innen erstellen, indem du der Commitnachricht den Nachspann `Co-authored-by:` hinzufügst.

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. Nachdem du alle deine Änderungen vorgenommen hast, gib unten auf der Seite eine kurze, aussagekräftige Commit-Mitteilung ein, die die von Dir gemachten Änderungen beschreibt.
  ![Commitnachricht für deine Änderung](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. Füge im Textfeld unterhalb der Commitnachricht `Co-authored-by: name <name@example.com>` mit spezifischen Informationen zu allen Co-Autor*innen hinzu. Wenn du mehrere Co-Autor*innen hinzufügst, verwendest du für alle jeweils eine eigene Zeile und einen eigenen Commitnachspann mit `Co-authored-by:`.

  ![Beispiel für Co-Autor-Trailer in Commit-Mitteilung im Textfeld der zweiten Commit-Mitteilung](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. Klicke auf **Änderungen committen** oder **Änderungen vorschlagen**.

Der neue Commit samt Mitteilung wird auf {% data variables.product.product_location %} angezeigt.

## Weitere Informationsquellen
{% ifversion ghes or ghae %}
- [Anzeigen von Beiträgen in deinem Profil](/articles/viewing-contributions-on-your-profile)
- [Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile){% endif %}
- [Anzeigen der Mitwirkenden an einem Projekt](/articles/viewing-a-projects-contributors)
- [Eine Commit-Mitteilung ändern](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)
- [Committen und Überprüfen von Änderungen an deinem Projekt](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes) in der Dokumentation zu {% data variables.product.prodname_desktop %}
