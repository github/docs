---
title: Tools für die Quellcode-Migration
intro: Für die Migration Deiner Projekte nach GitHub kannst Du externe Werkzeuge verwenden.
redirect_from:
  - /articles/importing-from-subversion
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
  - /github/importing-your-projects-to-github/importing-source-code-to-github/source-code-migration-tools
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Code migration tools
ms.openlocfilehash: 7877d435e7971f669d9d49a70d2d2450371b5159
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882167'
---
{% ifversion fpt or ghec %}

Wir empfehlen, [GitHub Importer](/articles/about-github-importer) zum Importieren von Projekten aus Subversion, Mercurial, Team Foundation-Versionskontrolle (TFVC) oder einem anderen Git-Repository zu verwenden. Auch diese externen Werkzeuge können für die Konvertierung Deines Projekts für Git verwendet werden.

{% endif %}

## Import aus Subversion

In einer typischen Subversion-Umgebung sind in einem Root-Repository mehrere Projekte gespeichert. Auf GitHub wird in der Regel jedes dieser Projekte einem eigenen Git-Repository eines persönlichen Kontos oder einer Organisation zugeordnet. Wir empfehlen Dir in den folgenden Situationen den Import jedes Teils Deines Subversion-Repositorys in ein separates GitHub-Repository:

* Check-outs und Commits durch die Mitarbeiter zu diesem Teil des Projekts erfolgen getrennt von den anderen Teilen
* Für die einzelnen Teile sollen unterschiedliche Zugriffsberechtigungen verwendet werden

Für die Konvertierung von Subversion-Repositorys nach Git empfehlen wir folgende Werkzeuge:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## Import aus Mercurial

Wir empfehlen [hg-fast-export](https://github.com/frej/fast-export) zum Konvertieren von Mercurial-Repositorys zu Git.

## Importieren aus TFVC

Wir empfehlen [git-tfs](https://github.com/git-tfs/git-tfs) zum Übertragen von Änderungen zwischen TFVC und Git.

Weitere Informationen zum Wechsel von TFVC (einem zentralisierten Versionskontrollsystem) zu Git findest du unter „[Planen der Migration zu Git](https://docs.microsoft.com/devops/develop/git/centralized-to-git)“ auf der Website mit der Microsoft-Dokumentation.

{% tip %}

**Tipp:** Nachdem du dein Projekt erfolgreich in Git konvertierst hast, kannst du es an [{% data variables.product.prodname_dotcom %} pushen](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}

{% ifversion fpt or ghec %}

## Weiterführende Themen

- [Informationen zu GitHub Importer](/articles/about-github-importer)
- [Ein Repository mit GitHub Importer importieren](/articles/importing-a-repository-with-github-importer)
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
