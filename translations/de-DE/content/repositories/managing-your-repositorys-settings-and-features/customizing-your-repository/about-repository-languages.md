---
title: Informationen zu Repository-Sprachen
intro: 'Die Dateien und Verzeichnisse innerhalb eines Repositorys bestimmen die Sprachen des Repositorys. Du kannst die Sprachen eines Repositorys anzeigen, um Dir einen schnellen Überblick über das Repository zu verschaffen.'
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language
  - /articles/why-isn-t-my-favorite-language-recognized
  - /articles/my-repo-is-marked-as-the-wrong-language
  - /articles/why-isn-t-sql-recognized-as-a-language
  - /articles/why-isn-t-my-favorite-language-recognized-by-github
  - /articles/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-languages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository languages
ms.openlocfilehash: 3796ec1828bb8f64072f62255d76ca79c4467457
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132238'
---
{% data variables.product.product_name %} verwendet die Open Source [Linguist library](https://github.com/github/linguist), um die Dateisprachen zur Hervorhebung der Syntax und für die Repositorystatistiken festzulegen. Sprachstatistiken werden aktualisiert, nachdem Du Änderungen an Deiner Standardverzweitung gepusht hast.

Einige Dateien sind schwer zu identifizieren, und manchmal enthalten Projekte mehr Bibliotheks- und Anbieterdateien als eigenen Primärcode. Wenn Du falsche Ergebnisse erhältst, lies bitte den [Linguist-Problembehandlungsleitfaden](https://github.com/github/linguist/blob/master/docs/troubleshooting.md), um Hilfe zu erhalten.

## Markup-Sprachen

Markupsprachen werden mit unserer Open-Source [Markup-Bibliothek](https://github.com/github/markup) in HTML gerendert und inline angezeigt. Derzeit akzeptieren wir keine neuen Markup-Sprachen für die Anzeige innerhalb von {% data variables.product.product_name %}. Wir verwalten jedoch aktiv unsere aktuellen Markup-Sprachen. Wenn ein Problem angezeigt wird, [erstelle ein Problem](https://github.com/github/markup/issues/new).
