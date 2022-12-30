---
title: Permalinks zu Dateien abrufen
intro: 'Wenn du eine Datei auf {% data variables.product.product_location %} anzeigst, kannst du die Y-Taste drücken, um die URL auf einen Permalink zu genau der angezeigten Version der Datei zu aktualisieren.'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url
  - /articles/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/managing-files-on-github/getting-permanent-links-to-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Permanent links to files
ms.openlocfilehash: 4e3d5ec282f7f7ba820094240698c88e298cdb69
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131884'
---
{% tip %}

**Tipp**: Drücke auf einer beliebigen Seite in {% data variables.product.product_name %} auf das Fragezeichen („?“), um alle verfügbaren Tastenkombinationen anzuzeigen.

{% endtip %}

## Dateiansichten zeigen die aktuelle Version auf einem Branch

Wenn du eine Datei auf {% data variables.product.product_location %} anzeigst, siehst du in der Regel die Version am aktuellen Head eines Branches.  Beispiel:

* [https://github.com/github/codeql/blob/**main**/README.md](https://github.com/github/codeql/blob/main/README.md)

bezieht sich auf das GitHub-Repository `codeql` und zeigt die aktuelle Version der Datei `README.md` des `main`-Branches an.

Die Version einer Datei am Head eines Branches kann sich durch neue Commits ändern. Wenn du also die normale URL kopierst und jemand die Datei später über diese URL aufruft, ist der Inhalt der Datei möglicherweise nicht mehr derselbe.

## Mit der Taste <kbd>Y</kbd> kannst du einen Permalink zu einer Datei in einem bestimmten Commit erzeugen

Wenn du nicht den Namen eines Branchs in der URL (d. h. der Teil `main` im obigen Beispiel) verwenden, sondern einen Permalink zu einer bestimmten Version einer Datei, die angezeigt wird, erstellen möchtest, gib eine Commit-ID an. Dadurch entsteht ein Permalink zur exakten Version dieser Datei in diesem Commit.  Beispiel:

* [https://github.com/github/codeql/blob/**b212af08a6cffbb434f3c8a2795a579e092792fd**/README.md](https://github.com/github/codeql/blob/b212af08a6cffbb434f3c8a2795a579e092792fd/README.md)

ersetzt `main` durch eine spezielle Commit-ID; der Inhalt der Datei ändert sich nicht.

Die manuelle Suche nach der Commit-SHA ist unpraktisch. Gib stattdessen einfach den Tastaturkurzbefehl <kbd>y</kbd> ein, um die URL automatisch mit der Permalinkversion zu aktualisieren.  Dann kannst du die URL kopieren und sicher sein, dass jeder, der die Datei über diesen Link aufruft, dieselben Inhalte sieht wie Du.

{% tip %}

**Tipp:** Du kannst in der URL jede ID angeben, die zu einem Commit aufgelöst werden kann, darunter auch Branchnamen, bestimmte Commit-SHAs oder Tags.

{% endtip %}

## Einen Permalink zu einem Code-Ausschnitt erstellen

Du kannst einen Permalink zu einer bestimmten Code-Zeile oder einem bestimmten Code-Ausschnitt in einer spezifischen Version einer Datei oder eines Pull Requests erstellen. Weitere Informationen findest du unter [Erstellen eines permanenten Links zu einem Codeausschnitt](/articles/creating-a-permanent-link-to-a-code-snippet/).

## Weitere Informationsquellen

- [Archivieren eines GitHub-Repositorys](/articles/archiving-a-github-repository)
