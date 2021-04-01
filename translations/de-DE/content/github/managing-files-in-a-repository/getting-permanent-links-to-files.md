---
title: Permalinks zu Dateien abrufen
intro: 'Wenn Sie eine Datei auf {% data variables.product.product_location %} anzeigen, können Sie die Taste Y drücken, um aus der URL einen Permalink zu genau der angezeigten Version der Datei zu erstellen.'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file/
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url/
  - /articles/getting-permanent-links-to-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

{% tip %}

**Tipp:** Drücke auf einer beliebigen Seite von {% data variables.product.product_name %} auf die „?"-Taste, um alle verfügbaren Tastenkürzel anzuzeigen.

{% endtip %}

### Dateiansichten zeigen die aktuelle Version auf einem Branch

Wenn Sie eine Datei auf {% data variables.product.product_location %} anzeigen, sehen Sie in der Regel die Version am aktuellen Head eines Branches.  Ein Beispiel:

* [https://github.com/github/codeql/blob/**main**/README.md](https://github.com/github/codeql/blob/main/README.md)

refers to GitHub's `codeql` repository, and shows the `main` branch's current version of the `README.md` file.

Die Version einer Datei am Head eines Branches kann sich durch neue Commits ändern. Wenn Du also die normale URL kopierst und jemand die Datei später über diese URL aufruft, ist der Inhalt der Datei möglicherweise nicht mehr derselbe.

### Mit der Taste <kbd>y</kbd> einen Permalink zu einer Datei in einem spezifischen Commit erstellen

For a permanent link to the specific version of a file that you see, instead of using a branch name in the URL (i.e. the `main` part in the example above), put a commit id.  Dadurch entsteht ein Permalink zu der genauen Version der Datei in diesem Commit.  Ein Beispiel:

* [https://github.com/github/codeql/blob/**b212af08a6cffbb434f3c8a2795a579e092792fd**/README.md](https://github.com/github/codeql/blob/b212af08a6cffbb434f3c8a2795a579e092792fd/README.md)

replaces `main` with a specific commit id and the file content will not change.

Die manuelle Suche der Commit-SHA ist unpraktisch. Drücke stattdessen einfach auf <kbd>y</kbd>, um die URL automatisch in die Permalink-Version zu ändern.  Dann kannst Du die URL kopieren und sicher sein, dass jeder, der die Datei über diesen Link aufruft, dieselben Inhalte sieht wie Du.

{% tip %}

**Tipp:** Du kannst jede Kennzeichnung, die aufgelöst werden kann, zu einem Commit in der URL hinzufügen, darunter auch Branch-Namen, spezifische Commit-SHAs oder Tags!

{% endtip %}

### Einen Permalink zu einem Code-Ausschnitt erstellen

Sie können einen Permalink zu einer bestimmten Code-Zeile oder einem bestimmten Code-Ausschnitt in einer spezifischen Version einer Datei oder eines Pull Requests erstellen. Weitere Informationen findest Du unter „[Einen Permalink zu einem Code-Ausschnitt erstellen](/articles/creating-a-permanent-link-to-a-code-snippet/).“

### Weiterführende Informationen

- „[Ein GitHub-Repository archivieren](/articles/archiving-a-github-repository)“
