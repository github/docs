---
title: Tools für die Quellcode-Migration
intro: Für die Migration Deiner Projekte nach GitHub kannst Du externe Werkzeuge verwenden.
redirect_from:
  - /articles/importing-from-subversion/
  - /articles/source-code-migration-tools
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}

Wir empfehlen [GitHub Importer](/articles/about-github-importer) für den Import von Projekten aus Subversion, Mercurial, Team Foundation Server oder einem anderen Git-Repository. Auch diese externen Werkzeuge können für die Konvertierung Deines Projekts für Git verwendet werden.

{% endif %}

### Import aus Subversion

In einer typischen Subversion-Umgebung sind in einem Root-Repository mehrere Projekte gespeichert. Auf GitHub wird in der Regel jedes dieser Projekte einem eigenen Git-Repository eines Benutzerkontos oder einer Organisation zugeordnet. Wir empfehlen Dir in den folgenden Situationen den Import jedes Teils Deines Subversion-Repositorys in ein separates GitHub-Repository:

* Check-outs und Commits durch die Mitarbeiter zu diesem Teil des Projekts erfolgen getrennt von den anderen Teilen
* Für die einzelnen Teile sollen unterschiedliche Zugriffsberechtigungen verwendet werden

Für die Konvertierung von Subversion-Repositorys nach Git empfehlen wir folgende Werkzeuge:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

### Import aus Mercurial

Für die Konvertierung von Mercurial-Repositorys in Git empfehlen wir [hg-fast-export](https://github.com/frej/fast-export).

### Import aus Team Foundation Server

Für die Verschiebung von Änderungen zwischen Team Foundation Server und Git empfehlen wir folgende Werkzeuge:

- [git-tfs](https://github.com/git-tfs/git-tfs)
- [Git-TF](https://gittf.codeplex.com/)

{% tip %}

**Tipp:** Nach der erfolgreichen Konvertierung Deines Projekts zu Git kannst Du es [per Push auf {% data variables.product.prodname_dotcom %} übertragen](/articles/pushing-commits-to-a-remote-repository/).

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}

### Weiterführende Informationen

- „[Informationen zu GitHub Importer](/articles/about-github-importer)“
- „[Ein Repository mit GitHub Importer importieren](/articles/importing-a-repository-with-github-importer)“
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
