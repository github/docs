---
title: Wikis durchsuchen
intro: 'Auf {% data variables.product.product_name %} kannst du Wikis durchsuchen und die Suchergebnisse mit den folgenden Kennzeichnern der Wiki-Suche in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-wikis
  - /github/searching-for-information-on-github/searching-wikis
  - /github/searching-for-information-on-github/searching-on-github/searching-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: da73bcaa13c718be9840483e2a34c4b90ba96e63
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106023'
---
Du kannst Wikis global auf {% data variables.product.product_name %} oder in bestimmten Repositorys oder Organisationen durchsuchen. Weitere Informationen findest du unter [Informationen zur Suche auf {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

{% data reusables.search.syntax_tips %}

## Suche innerhalb der Repositorys eines Benutzers oder einer Organisation

Um nach Wiki-Seiten aus allen Repositorys zu suchen, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, kannst du den Qualifizierer `user` oder `org` verwenden. Verwende für die Suche nach Wiki-Seiten aus einem bestimmten Repository den Qualifizierer `repo`.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis) sucht Wiki-Seiten aus Repositorys, die dem Benutzer @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) sucht Issues in Repositorys, die der Organisation GitHub gehören.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis) sucht Wiki-Seiten aus dem Repository „gibberish“ des Benutzers @defunkt.

## Suche im Titel oder Text einer Wiki-Seite

Der Qualifizierer `in` beschränkt die Suche auf den Titel oder den Textteil der Wiki-Seite. Ohne diesen Qualifizierer werden sowohl der Titel als auch der Textteil durchsucht.

| Qualifizierer        | Beispiel
| ------------- | -------------
| `in:title` | [**usage in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis) sucht in den Titeln von Wiki-Seiten nach dem Wort „usage“.
| `in:body` | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis) sucht im Textteil von Wiki-Seiten nach dem Wort „installation“.

## Suche nach dem letzten Aktualisierungsdatum

Der Qualifizierer `updated` beschränkt die Suche auf Wiki-Seiten, die zuletzt innerhalb des angegebenen Datumbereichs geändert wurden.

{% data reusables.search.date_gt_lt %}

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) sucht in Wiki-Seiten, die nach dem 1. Januar 2016 aktualisiert wurden, nach dem Wort „usage“.

## Weiterführende Themen

- [Sortieren von Suchergebnissen](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
