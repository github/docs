---
title: Informationen zu CITATION-Dateien
intro: 'Du kannst eine CITATION-Datei zu deinem Repository hinzufügen, damit Benutzer deine Software richtig zitieren können.'
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 96e5e7308ba5d1877f231dcb454d7b797a63f221
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108398'
---
## Informationen zu CITATION-Dateien

Du kannst dem Stamm eines Repositorys eine `CITATION.cff`-Datei hinzufügen, um anderen mitzuteilen, wie sie deine Arbeit zitieren sollen. Das CITATION-Dateiformat ist Nur-Text mit von Personen und Computern lesbaren Informationen zum Zitieren.

Beispieldatei für `CITATION.cff`:

```
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github/linguist"
```

Bei der GitHub-Zitataufforderung in deinem Repository wird der Beispielinhalt der Datei `CITATION.cff` in diesen Formaten angezeigt:

**APA**

```
Lisa, M., & Bot, H. (2017). My Research Software (Version 2.0.4) [Computer software]. https://doi.org/10.5281/zenodo.1234
```

**BibTeX**

{% raw %}
```
@software{Lisa_My_Research_Software_2017,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.5281/zenodo.1234},
  month = {12},
  title = {{My Research Software}},
  url = {https://github.com/github/linguist},
  version = {2.0.4},
  year = {2017}
}
```
{% endraw %}

Beachte, dass das obige Beispiel ein _Softwarezitat_ generiert (d. h. Typ `@software` in BibTeX anstelle von `@article`).

Weitere Informationen findest du auf der Website zum [CITATION-Dateiformat](https://citation-file-format.github.io/).

Wenn du dem Standardbranch deines Repositorys eine Datei `CITATION.cff` hinzufügst, wird darauf automatisch auf der Landing Page deines Repositorys verwiesen. Dies erleichtert es anderen Benutzer*innen, dein Softwareprojekt mit den von dir bereitgestellten Informationen zu zitieren.

![Zitatlink auf der Landing Page eines Repositorys](/assets/images/help/repository/citation-link.png)

## Zitieren von anderen Komponenten als Software

Wenn du die Zitatinformationen aus {% data variables.product.prodname_dotcom %} mit einer anderen Ressource (z. B. einem Forschungsartikel) verknüpfen möchtest, kannst du die Überschreibung von `preferred-citation` in CFF mit den folgenden Typen verwenden.

| Resource | CFF-Typ | BibTeX-Typ | APA-Anmerkung |
|----------|----------|-------------|----------------|
| Journalartikel/-publikation | `article` | `@article` | |
| Buch | `book` | `@book` | |
| Broschüre (gebunden, aber nicht veröffentlicht) | `pamphlet` | `@booklet` | |
| Konferenzartikel/-publikation | `conference-paper` | `@inproceedings` | [Konferenzpublikation] |
| Konferenzverfahren | `conference`, `proceedings` | `@proceedings` | |
| Dataset | `data`, `database` | `@misc` | [Dataset] |
| Magazinartikel | `magazine-article` | `@article` | |
| Manuell | `manual` | `@manual` | |
| Verschiedene/allgemeine/andere | `generic` alle anderen CFF-Typen | `@misc` | |
| Zeitungsartikel | `newspaper-article` | `@article` | |
| Software |  `software`, `software-code`, `software-container`, `software-executable`, `software-virtual-machine` | `@software` | [Computersoftware] |
| Bericht/technischer Bericht | `report` | `@techreport` | |
| Veröffentlichung aufgehoben | `unpublished` | `@unpublished` | |

Erweiterte Datei „CITATION.cff“, die die Software beschreibt, aber mit einem Forschungsartikel als bevorzugtes Zitat verknüpft ist:

```
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github/linguist"
preferred-citation:
  type: article
  authors:
  - family-names: "Lisa"
    given-names: "Mona"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  - family-names: "Bot"
    given-names: "Hew"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  doi: "10.0000/00000"
  journal: "Journal Title"
  month: 9
  start: 1 # First page number
  end: 10 # Last page number
  title: "My awesome research software"
  issue: 1
  volume: 1
  year: 2021
```

Die obige Beispieldatei `CITATION.cff` generiert die folgenden Ausgaben an der GitHub Zitataufforderung:

**APA**

```
Lisa, M., & Bot, H. (2021). My awesome research software. Journal Title, 1(1), 1. https://doi.org/10.0000/00000
```

**BibTeX**

{% raw %}
```
@article{Lisa_My_awesome_research_2021,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.0000/00000},
  journal = {Journal Title},
  month = {9},
  number = {1},
  pages = {1--10},
  title = {{My awesome research software}},
  volume = {1},
  year = {2021}
}
```
{% endraw %}

## Zitieren eines Datasets

Wenn dein Repository ein Dataset enthält, kannst du oben in deiner Datei `CITATION.cff` die Option `type: dataset` festlegen, um eine Ausgabe der Datenzitatzeichenfolge an der {% data variables.product.prodname_dotcom %}-Zitataufforderung zu erstellen.

## Andere CITATION-Dateien

Das GitHub Zitatfeature erkennt auch eine kleine Anzahl zusätzlicher Dateien, die häufig von Communitys und Projekten verwendet werden, um zu beschreiben, wie ihre Arbeit zitiert werden soll.

GitHub erstellt in der Aufforderung _Dieses Repository zitieren_ eine Verknüpfung mit diesen Dateien, versucht aber nicht, sie in andere Zitatformate zu parsen.

```
# Note these are case-insensitive and must be in the root of the repository
CITATION
CITATIONS
CITATION.bib
CITATIONS.bib
CITATION.md
CITATIONS.md

# CITATION files for R packages are typically found at inst/CITATION
inst/CITATION
```

## Zitatformate

Derzeit werden die Dateiformate APA und BibTex unterstützt.

Suchst du nach weiteren Zitatformaten? GitHub verwendet eine Ruby-Bibliothek, um die Dateien `CITATION.cff` zu parsen. Du kannst weitere Formate im Repository [ruby-cff](https://github.com/citation-file-format/ruby-cff) anfordern oder selbst mitwirken.
