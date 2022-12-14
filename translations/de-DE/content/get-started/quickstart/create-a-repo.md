---
title: Erstellen eines Repositorys
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'Um dein Projekt auf {% data variables.product.prodname_dotcom %} hochzuladen, musst du ein Repository für dein Projekt erstellen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: 66db99def4463929236197fdc4903f82bfc1cbe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682293'
---
## Erstellen eines Repositorys

{% ifversion fpt or ghec %}

Du kannst die unterschiedlichsten Projekte in {% data variables.product.prodname_dotcom %}-Repositorys speichern, darunter auch Open-Source-Projekte. Mit Open-Source-Projekten kannst du Code teilen, um zu einer besseren, zuverlässigeren Software beizutragen. Du kannst Repositorys zum Zusammenarbeiten mit anderen und zum Nachverfolgen deiner Arbeit verwenden. Weitere Informationen findest du unter [Informationen zu Repositorys](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories). Weitere Informationen zu Open-Source-Projekten findest du auf [OpenSource.org](https://opensource.org/about).

{% elsif ghes or ghae %}

Du kannst die unterschiedlichsten Projekte in {% data variables.product.product_name %}-Repositorys speichern, darunter auch Inner-Source-Projekte. Mit Inner Source kannst du Code teilen, um zu einer besseren, zuverlässigeren Software beizutragen. Weitere Informationen zu Inner Source findest du im {% data variables.product.company_short %}-Whitepaper [Eine Einführung in Inner Source](https://resources.github.com/whitepapers/introduction-to-innersource/).

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Hinweise:** 
- Du kannst öffentliche Repositorys für Open-Source-Projekte erstellen. Wenn du ein öffentliches Repository erstellst, musst du unbedingt eine [Lizenzdatei](https://choosealicense.com/) hinzufügen, die bestimmt, wie dein Projekt für andere Personen freigegeben wird. {% data reusables.open-source.open-source-guide-repositories %} 
- {% data reusables.open-source.open-source-learning %} 
- Du kannst deinen Repositorys auch Communityintegritätsdateien hinzufügen, Richtlinien für die Beiträge festlegen, deine Repositorys sicher halten und vieles mehr. Weitere Informationen findest du unter [Erstellen einer Standard-Communityintegritätsdatei](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file). 

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. Gib einen kurzen, einprägsamen Namen für das Repository ein. Beispiel: „hello world“.
  ![Feld zum Eingeben eines Repositorynamens](/assets/images/help/repository/create-repository-name.png)
3. Füge optional eine Beschreibung deines Repositorys hinzu. Beispiel: „Mein erstes Repository auf {% data variables.product.product_name %}“.
  ![Feld zum Eingeben einer Repositorybeschreibung](/assets/images/help/repository/create-repository-desc.png) {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

Glückwunsch! Du hast erfolgreich dein erstes Repository erstellt und mit einer *README*-Datei initialisiert.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. Navigiere in der Befehlszeile zu dem Verzeichnis, in dem du einen lokalen Klon deines neuen Projekts erstellen möchtest.
2. Verwende zum Erstellen eines Repositorys für dein Projekt den Unterbefehl `gh repo create`. Wenn du dazu aufgefordert wirst, wähle **Create a new repository on GitHub from scratch** aus, und gib den Namen deines neuen Projekts ein. Wenn dein Projekt nicht zu deinem persönlichen Konto, sondern zu einer Organisation gehören soll, musst du mithilfe von `organization-name/project-name` den Organisationsnamen und den Projektnamen angeben. 
3. Befolge die interaktiven Eingabeaufforderungen. Um das Repository lokal zu klonen, bestätige mit „Yes“, wenn gefragt wirst, ob du das Remoteprojektverzeichnis klonen möchtest.  
4. Um die Eingabeaufforderungen zu überspringen, gibst du alternativ den Repositorynamen und ein Sichtbarkeitsflag an (`--public`, `--private` oder `--internal`). Beispiel: `gh repo create project-name --public`. Um das Repository lokal zu klonen, übergib das `--clone`-Flag.  Weitere Informationen zu möglichen Argumenten findest du im [GitHub CLI-Handbuch](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Die erste Änderung freigeben

{% webui %}

Ein *[Commit](/articles/github-glossary#commit)* ist wie eine Momentaufnahme aller Dateien in deinem Projekt zu einem bestimmten Zeitpunkt.

Als du dein neues Repository erstellt hast, hast du es mit einer *README*-Datei initialisiert. *README*-Dateien bieten Platz, um das Projekt detaillierter zu beschreiben oder weitere Dokumentation hinzuzufügen, z. B. Informationen zum Installieren oder Verwenden deines Projekts. Der Inhalt deiner *README*-Datei wird automatisch auf der Hauptseite deines Repositorys angezeigt.

Lass uns eine Änderung an der *README*-Datei committen.

1. Klicke in der Dateiliste deines Repositorys auf ***README.md***.
  ![README-Datei in Dateiliste](/assets/images/help/repository/create-commit-open-readme.png)
2. Klicke über dem Dateiinhalt auf {% octicon "pencil" aria-label="The edit icon" %}.
3. Gib auf der Registerkarte **Datei bearbeiten** einige Informationen zu deiner Person ein.
  ![Neuer Inhalt in Datei](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %}
5. Überprüfe die Änderungen, die du an der Datei vorgenommen hast. Der neue Inhalt wird grün dargestellt.
  ![Ansicht der Dateivorschau](/assets/images/help/repository/create-commit-review.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Nachdem du ein Projekt erstellt hast, kannst du mit dem Committen von Änderungen beginnen.

*README*-Dateien bieten Platz, um das Projekt detaillierter zu beschreiben oder weitere Dokumentation hinzuzufügen, z. B. Informationen zum Installieren oder Verwenden deines Projekts. Der Inhalt deiner *README*-Datei wird automatisch auf der Hauptseite deines Repositorys angezeigt. Führe die folgenden Schritte aus, um eine *README*-Datei hinzuzufügen.

1. Navigiere in der Befehlszeile zum Stammverzeichnis deines neuen Projekts. (Dieses Verzeichnis wurde erstellt, als du den Befehl `gh repo create` ausgeführt hast.)
1. Erstelle eine *README*-Datei mit Informationen zum Projekt.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Geben Sie `git status` ein. Du stellst fest, dass du über eine nicht nachverfolgte `README.md`-Datei verfügst.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Stage und committe die Datei.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Pushe die Änderungen auf den Branch.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Nächste Schritte

Du hast jetzt ein Repository mitsamt einer *README*-Datei und deinen ersten Commit auf {% data variables.product.product_location %} erstellt.

{% webui %}

* Du kannst jetzt ein {% data variables.product.prodname_dotcom %}-Repository klonen, um eine lokale Kopie auf deinem Computer zu erstellen. In deinem lokalen Repository kannst du eine Pull Request committen und erstellen, um die Änderungen im Upstream-Repository zu aktualisieren. Weitere Informationen findest du unter [Klonen eines Repositorys](/github/creating-cloning-and-archiving-repositories/cloning-a-repository) und [Einrichten von Git](/articles/set-up-git).

{% endwebui %}

* Auf {% data variables.product.prodname_dotcom %} findest du interessante Projekte und Repositorys, die du ändern kannst, indem du das Repository forkst. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
