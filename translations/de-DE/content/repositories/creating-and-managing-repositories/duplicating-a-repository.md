---
title: Ein Repository duplizieren
intro: 'To maintain a mirror of a repository without forking it, you can run a special clone command, then mirror-push to the new repository.'
redirect_from:
  - /articles/duplicating-a-repo/
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
---

{% ifversion fpt %}

{% note %}

**Note:** If you have a project hosted on another version control system, you can automatically import your project to {% data variables.product.prodname_dotcom %} using the {% data variables.product.prodname_dotcom %} Importer tool. For more information, see "[About {% data variables.product.prodname_dotcom %} Importer](/github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)."

{% endnote %}

{% endif %}

Before you can push the original repository to your new copy, or _mirror_, of the repository, you must [create the new repository](/articles/creating-a-new-repository) on {% data variables.product.product_location %}. In diesen Beispielen sind `exampleuser/new-repository` oder `exampleuser/mirrored` die Spiegel.

## Ein Repository spiegeln

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Erstellen Sie einen leeren Klon des Repositorys.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Führe den Spiegel-Push in das neue Repository durch.
  ```shell
  $ cd <em>old-repository</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
4. Entferne das temporäre lokale Repository, dass Du früher erstellt hast.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

## Ein Repository spiegeln, das {% data variables.large_files.product_name_long %}-Objekte enthält

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Erstellen Sie einen leeren Klon des Repositorys. Ersetze den Beispiel-Benutzernamen durch den Namen der Person oder Organisation, der das Repository gehört, und ersetze den Beispiel-Repository-Namen durch den Namen des Repositorys, das Du duplizieren möchtest.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Navigiere zu dem Repository, das Du gerade geklont hast.
  ```shell
  $ cd <em>old-repository</em>
  ```
4. Rufe die {% data variables.large_files.product_name_long %}-Objekte des Repositorys ab.
  ```shell
  $ git lfs fetch --all
  ```
5. Führe den Spiegel-Push in das neue Repository durch.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
6. Übertrage die {% data variables.large_files.product_name_long %}-Objekte des Repositorys zu Deinem Spiegel.
  ```shell
  $ git lfs push --all https://github.com/<em>exampleuser/new-repository.git</em>
  ```
7. Entferne das temporäre lokale Repository, dass Du früher erstellt hast.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

## Ein Repository an einem anderen Ort spiegeln

Wenn Du ein Repository an einem anderen Ort spiegeln und Aktualisierungen vom Original-Repository abrufen möchtest, kannst Du einen Spiegel klonen und die Änderungen regelmäßig per Push übertragen.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Erstelle einen leeren gespiegelten Klon des Repositorys.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>repository-to-mirror</em>.git
  ```
3. Lege den Push-Ort auf Deinen Spiegel fest.
  ```shell
  $ cd <em>repository-to-mirror</em>
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>mirrored</em>
  ```

Wie ein leerer Klon enthält ein gespiegelter Klon alle Remote-Branches und Tags. Alle lokalen Verweise werden jedoch bei jedem Abrufen überschrieben, sodass er immer mit dem Original-Repository übereinstimmt. Das Festlegen einer Push-URL vereinfacht Pushes zu Deinem Spiegel. Um Deinen Spiegel zu aktualisieren, rufe Änderungen ab und übertrage sie per Push.

```shell
$ git fetch -p origin
$ git push --mirror
```
{% ifversion fpt %}
## Weiterführende Informationen

* "[Pushing changes to GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)"
* "[About Git Large File Storage and GitHub Desktop](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)"
* „[Informationen zu GitHub Importer](/github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)“

{% endif %}
