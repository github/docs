---
title: Unterordner in ein neues Repository auslagern
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository
intro: Einzelne Ordner eines Git-Repositorys kannst du in neue Repositorys auslagern.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Splitting a subfolder
ms.openlocfilehash: e99c1c1411b335837b478b32f085596ec4f5fc0f
ms.sourcegitcommit: 46eac8c63f52669996a9c832f2abf04864dc89ba
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172909'
---
Wenn Du bei der Erstellung eines Repository-Klons einen Ordner in ein separates Repository verschiebst, verlierst Du weder Deinen Git-Verlauf noch die bereits vorgenommenen Änderungen.

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Ändere Dein aktuelles Arbeitsverzeichnis in das Verzeichnis, in dem das neue Repository erstellt werden soll.

4. Klone das Repository, das den Unterordner enthält.
   ```shell
   $ git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME
   ```

4. Ändere Dein aktuelles Arbeitsverzeichnis in das Verzeichnis mit dem geklonten Repository.
   ```shell
   $ cd REPOSITORY-NAME
   ```

5. Um den Unterordner aus den restlichen Dateien im Repository herauszufiltern, installiere [`git-filter-repo`](https://github.com/newren/git-filter-repo), und führe dann `git filter-repo` mit den folgenden Argumenten aus:
   - `FOLDER-NAME`: Der Ordner in deinem Projekt, in dem du ein separates Repository erstellen möchtest.

   {% windows %}

   {% tip %}

   **Tipp:** Windows-Benutzer sollten `/` zum Trennen von Ordnern verwenden.

   {% endtip %}

   {% endwindows %}
  
   ```shell
   $ git filter-repo --path FOLDER-NAME1/ --path FOLDER-NAME2/
   # Filter the specified branch in your directory and remove empty commits
   > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
   > Ref 'refs/heads/BRANCH-NAME' was rewritten
   ```
   
   Das Repository sollte jetzt nur die Dateien aus dem bzw. den zuvor angegebenen Unterordner(n) enthalten.

6. [Erstelle ein neues Repository](/articles/creating-a-new-repository/) auf {% data variables.product.product_name %}.

7. Klicke oben in deinem neuen Repository auf der Seite zur Schnelleinrichtung deiner {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} auf {% octicon "clippy" aria-label="The copy to clipboard icon" %}, um die URL des Remoterepositorys zu kopieren.
    
   ![Feld zum Kopieren der Remote-Repository-URL](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

   {% tip %}

   **Tipp:** Informationen zum Unterschied zwischen HTTPS- und SSH-URLs findest du unter [Informationen zu Remoterepositorys](/github/getting-started-with-github/about-remote-repositories).

   {% endtip %}

8. Prüfe den bestehenden Remote-Namen Deines Repositorys. Beispielsweise sind `origin` oder `upstream` zwei häufige Optionen.
   ```shell
   $ git remote -v
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (fetch)
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (push)
   ```

9. Richte für Dein neues Repository eine neue Remote-URL mit dem vorhandenen Remote-Namen und der URL des Remote-Repositorys ein, die Du in Schritt 7 kopiert hast.
   ```shell
   git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git
   ```

10. Vergewissere Dich, dass die Remote-URL in den Namen des neuen Repositorys geändert wurde.
    ```shell
    $ git remote -v
    # Verify new remote URL
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (fetch)
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (push)
    ```

11. Übertrage Deine Änderungen am neuen Repository per Push auf {% data variables.product.product_name %}.
    ```shell
    git push -u origin BRANCH-NAME
    ```
