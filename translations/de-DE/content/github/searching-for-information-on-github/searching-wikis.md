---
title: Wikis durchsuchen
intro: 'Auf {% data variables.product.product_name %} können Sie Wikis durchsuchen und die Suchergebnisse mit den folgenden Kennzeichnern der Wiki-Suche in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-wikis
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Sie können Wikis global auf {% data variables.product.product_name %} oder in bestimmten Repositorys oder Organisationen durchsuchen. Weitere Informationen findest Du unter „[Informationen zur Suche auf {% data variables.product.company_short %}](/articles/about-searching-on-github).“

{% data reusables.search.syntax_tips %}

### Suche innerhalb der Repositorys eines Benutzers oder einer Organisation

Wenn Du Wiki-Seiten in allen Repositorys suchst, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, verwende den Qualifizierer `user` respektive `org`. Für die Suche nach Wiki-Seiten aus einem bestimmten Repository verwende den Qualifizierer `repo`.

| Qualifizierer             | Beispiel                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis) sucht Wiki-Seiten aus Repositorys, die dem Benutzer @defunkt gehören.              |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) sucht Wiki-Seiten aus Repositorys, die der Organisation GitHub gehören. |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis) sucht Wiki-Seiten aus dem Repository „gibberish“ des Benutzers @defunkt. |

### Suche im Titel oder Text einer Wiki-Seite

Der Qualifizierer `in` beschränkt die Suche auf ausschließlich den Titel oder ausschließlich den Textteil der Wiki-Seite. Ohne diesen Qualifizierer werden sowohl der Titel als auch der Textteil durchsucht.

| Qualifizierer | Beispiel                                                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:title`    | [**usage in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis) sucht in den Titeln von Wiki-Seiten nach dem Wort „usage“.                  |
| `in:body`     | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis) sucht im Textteil von Wiki-Seiten nach dem Wort „installation“. |

### Suche nach dem letzten Aktualisierungsdatum

Der Qualifizierer `updated` beschränkt die Suche auf Wiki-Seiten, deren letztes Änderungsdatum innerhalb des angegebenen Datumbereichs liegt.

{% data reusables.search.date_gt_lt %}

| Qualifizierer             | Beispiel                                                                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) findet Wiki-Seiten, die das Wort „usage" beinhalten und zuletzt nach dem 1. Januar 2016 angepasst wurden. |

### Weiterführende Informationen

- „[Suchergebnisse sortieren](/articles/sorting-search-results/)“
