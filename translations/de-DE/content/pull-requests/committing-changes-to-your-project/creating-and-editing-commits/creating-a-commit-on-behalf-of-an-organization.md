---
title: Einen Commit im Namen einer Organisation erstellen
intro: 'Du kannst Commits im Namen einer Organisation erstellen, indem du einen Trailer zur Commitnachricht hinzufügst. Commits, die einer Organisation zugeordnet sind, enthalten auf {% data variables.product.product_name %} einen `on-behalf-of`-Badge.'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: On behalf of an organization
ms.openlocfilehash: 31b8a6b8d1824fa960fb32fa5fd7b4c28625037c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132549'
---
{% note %}

**Hinweis:** Die Möglichkeit, einen Commit im Namen einer Organisation zu erstellen, liegt derzeit als öffentliche Beta-Version vor und kann geändert werden.

{% endnote %}

Damit du Commits im Namen einer Organisation erstellen kannst, müssen folgende Voraussetzungen erfüllt sein:

- Du musst ein Mitglied der Organisation sein, die im Trailer angegeben ist
- Du musst den Commit signieren
- Deine Commit-E-Mail-Adresse und die Organisations-E-Mail-Adresse müssen einer Domäne angehören, die von der Organisation verifiziert wurde
- Deine Commitnachricht muss mit dem Committrailer `on-behalf-of: @org <name@organization.com>` enden.
  - `org` ist die Anmeldung der Organisation
  - `name@organization.com` befindet sich in der Domäne der Organisation

Organisationen können die E-Mail-Adresse `name@organization.com` als öffentlichen Kontaktpunkt für Open-Source-Aktivitäten verwenden.

## Erstellen von Commits mit einem `on-behalf-of`-Signal in der Befehlszeile

1. Gib deine Commit-Mitteilung ein und eine kurze, aussagekräftige Beschreibung deiner Änderungen. Füge nach deiner Commit-Beschreibung zwei Leerzeilen statt eines abschließenden Anführungszeichens hinzu.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Tipp:** Wenn du deine Commitnachricht in der Befehlszeile mit einem Text-Editor eingibst, stelle sicher, dass zwischen dem Ende deiner Commitbeschreibung und dem `on-behalf-of:`-Committrailer zwei Zeilenvorschübe stehen.

  {% endtip %}

2. Gib in der nächsten Zeile der Commitnachricht `on-behalf-of: @org <name@organization.com>` und dann ein Schlusszeichen ein.

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: <em>@org</em> &lt;<em>name@organization.com</em>&gt;"
  ```

Beim nächsten Push wird der neue Commit samt Mitteilung und Badge auf {% data variables.product.product_location %} angezeigt. Weitere Informationen findest du unter [Pushen von Änderungen in ein Remoterepository](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

## Erstellen von Commits mit einem `on-behalf-of`-Signal auf {% data variables.product.product_name %}

Nachdem du mit dem Web-Editor Änderungen an einer Datei auf {% data variables.product.product_name %} vorgenommen hast, kannst du einen Commit im Namen deiner Organisation erstellen, indem du der Commitnachricht den `on-behalf-of:`-Trailer hinzufügst.

1. Nachdem du deine Änderungen gemacht hast, gib unten auf der Seite eine kurze, aussagekräftige Commit-Mitteilung ein, die die von Dir gemachten Änderungen beschreibt.
  ![Commitnachricht für deine Änderung](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. Füge im Textfeld unterhalb der Commitnachricht `on-behalf-of: @org <name@organization.com>` hinzu.

  ![Beispiel für on-behalf-of-Trailer in Commit-Mitteilung im Textfeld der zweiten Commit-Mitteilung](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. Klicke auf **Änderungen committen** oder **Änderungen vorschlagen**.

Der neue Commit wird samt Mitteilung und Badge auf {% data variables.product.product_location %} angezeigt.

## Weiterführende Themen

- [Anzeigen von Beiträgen auf deinem Profil](/articles/viewing-contributions-on-your-profile)
- [Warum werden meine Beiträge nicht in meinem Profil angezeigt?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)
- [Mitwirkende eines Projekts anzeigen](/articles/viewing-a-projects-contributors)
- [Eine Commit-Mitteilung ändern](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)
