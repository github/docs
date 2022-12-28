---
title: Commits vergleichen
intro: 'Du kannst den Status deines Repositorys branch-, tag-, commit-, fork- und datumsübergreifend vergleichen.'
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 2ebf1a3cc83463e97d9a4d60401277bb844135b1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132520'
---
Um verschiedene Versionen deines Repositorys zu vergleichen, füge `/compare` an den Pfad deines Repositorys an.

Wir veranschaulichen die Leistungsfähigkeit der Vergleichsfunktion, indem wir uns die Vergleichsseite für [einen Fork des Linguist-Repositorys](https://github.com/octocat/linguist) ansehen, der sich unter [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master) befindet.

Jede Vergleichsansicht eines Repositorys enthält zwei Dropdownmenüs: `base` und `compare`.

`base` sollte als Ausgangspunkt des Vergleichs und `compare` als Endpunkt angesehen werden. Während eines Vergleichs kannst du den `base`- und den `compare`-Punkt jederzeit ändern, indem du auf **Bearbeiten** klickst.

## Branches vergleichen

Am häufigsten kommt die Vergleichsfunktion „Compare" beim Vergleich von Branches zum Einsatz, beispielsweise, wenn du einen neuen Pull Request erstellst. Beim Starten [eines neuen Pull Requests](/articles/creating-a-pull-request) wirst du immer zur Branchvergleichsansicht weitergeleitet.

Um Branches zu vergleichen, wähle oben auf der Seite im Dropdownmenü `compare` den Namen eines Branchs aus.

Hier siehst du ein Beispiel für einen [Vergleich zwischen zwei Branches](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs).

## Tags vergleichen

Ein Vergleich der Release-Tags zeigt Dir die Änderungen an deinem Repository seit dem letzten Release. Weitere Informationen findest du unter [Vergleichen von Releases](/github/administering-a-repository/comparing-releases).

Um Tags zu vergleichen, wähle oben auf der Seite im Dropdownmenü `compare` den Namen eines Tags aus.

Hier siehst du ein Beispiel für einen [Vergleich zwischen zwei Tags](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3).

## Commits vergleichen

Du kannst auch zwei beliebige Commits in deinem Repository oder seinen Forks auf {% data variables.product.prodname_dotcom %} mit einem Two-Dot-Diff vergleichen.

Um schnell zwei Commits oder Git-Objekt-IDs (OIDs) direkt miteinander in einem Two-Dot-Diff auf {% data variables.product.prodname_dotcom %} zu vergleichen, bearbeite die URL der Seite „Änderungen vergleichen“ deines Repositorys.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Weitere Informationen zu anderen Vergleichsoptionen findest du unter [Dreipunkt- und Zweipunkt-Diff-Vergleiche](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons).

## Zwischen Forks vergleichen

Du kannst dein Basis-Repository und jedes geforkte Repository vergleichen. Diese Ansicht wird gezeigt, wenn ein Benutzer einen Pull Request für ein Projekt ausführt.

Um Branches aus verschiedenen Repositorys zu vergleichen, stelle den Branchnamen Benutzernamen voran. Wenn du beispielsweise `octocat:main` für `base` und `octo-org:main` für `compare` angibst, kannst du den `main`-Branch der Repositorys im Besitz von `octocat` bzw. `octo-org` vergleichen.

Hier siehst du ein Beispiel für einen [Vergleich zwischen zwei Repositorys](https://github.com/github/linguist/compare/master...octocat:master).

## Vergleiche zwischen Commits

Als Kürzel verwendet Git die Notation `^`, um „einen Commit davor“ zu bezeichnen.

Mit dieser Notation kannst du einen einzelnen Commit oder Branch mit seinem unmittelbaren Vorgänger vergleichen. Beispielsweise gibt `96d29b7^^^^^` fünf Commits vor `96d29b7` an, weil fünf `^`-Zeichen vorhanden sind. Durch Eingeben von `96d29b7^^^^^` im `base`-Branch und von `96d29b7` im `compare`-Branch werden die fünf Commits vor `96d29b7` mit dem Commit `96d29b7` verglichen.

Hier siehst du ein Beispiel für einen [Vergleich über die `^`-Notation](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7).

## Weiterführende Themen

- [Ändern des Basisbranchs eines Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)
