---
title: Commits durchsuchen
intro: 'Auf {% data variables.product.product_name %} kannst Du Commits durchsuchen und die Suchergebnisse mit den folgenden Qualifizierern der Commit-Suche in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Du kannst Commits global auf {% data variables.product.product_name %} oder in bestimmten Repositorys oder Organisationen durchsuchen. Weitere Informationen findest Du unter „[Informationen zur Suche auf {% data variables.product.company_short %}](/articles/about-searching-on-github).“

Bei der Suche nach Commits wird nur der [Standardbranch](/articles/about-branches) eines Repositorys durchsucht.

{% data reusables.search.syntax_tips %}

### Suche in Commit-Mitteilungen

Du kannst nach Commits suchen, deren Nachricht bestimmte Wörter enthält. [**fix typo**](https://github.com/search?q=fix+typo&type=Commits) beispielsweise sucht Commits mit den Wörtern „fix“ und „typo“.

### Suche nach Autor oder Committer

Mit den Qualifizierern `author` oder `committer` kannst Du Commits von bestimmten Benutzern suchen.

| Qualifizierer             | Beispiel                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits) sucht Commits, die von @defunkt verfasst wurden.          |
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits) sucht Commits, die von @defunkt freigegeben wurden. |

Die Qualifizierer `author-name` und `committer-name` gleichen Commits nach dem Namen des Autors oder Freigebenden ab.

| Qualifizierer             | Beispiel                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>author-name:<em>NAME</em></code> | [**author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits) sucht Commits mit „wanstrath“ im Namen des Autors.             |
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) sucht Commits mit „wanstrath“ im Namen des Freigebenden. |

Die Qualifizierer `author-email` und `committer-email` gleichen Commits nach der vollständigen E-Mail-Adresse des Autors oder Freigebenden ab.

| Qualifizierer             | Beispiel                                                                                                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author-email:<em>EMAIL</em></code> | [**author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) sucht Commits, die von chris@github.com verfasst wurden.          |
| <code>committer-email:<em>EMAIL</em></code> | [**committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) sucht Commits, die von chris@github.com freigegeben wurden. |

### Suche nach Verfassungs- oder Commit-Datum

Mit den Qualifizierern `author-date` und `committer-date` kannst Du Commits suchen, die innerhalb des angegebenen Datumsbereichs verfasst oder freigegeben wurden.

{% data reusables.search.date_gt_lt %}

| Qualifizierer             | Beispiel                                                                                                                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) sucht Commits, die vor dem 1. Januar 2016 verfasst wurden.               |
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A<2016-01-01&type=Commits) sucht Commits, die nach dem 1. Januar 2016 festgeschrieben wurden. |

### Merge-Commits filtern

Der Qualifizierer `merge` filtert Merge-Commits.

| Qualifizierer | Beispiel                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------- |
| `merge:true`  | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits) sucht Merge-Commits.        |
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) sucht Commits ohne Merge. |

### Suche nach Hash

Der Qualifizierer `hash` sucht Commits mit dem angegebenen SHA-1-Hash.

| Qualifizierer             | Beispiel                                                                                                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) sucht Commits mit dem Hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`. |

### Suche nach übergeordnetem Commit

Der Qualifizierer `parent` sucht Commits, deren übergeordneten Commits das angegebene SHA-1-Hash aufweisen.

| Qualifizierer             | Beispiel                                                                                                                                                                                                                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) sucht untergeordnete Commits von Commits mit dem Hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`. |

### Suche nach Struktur

Der Qualifizierer `tree` sucht Commits mit dem angegebenen SHA-1-Git-Struktur-Hash.

| Qualifizierer              | Beispiel                                                                                                                                                   |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) sucht Commits, die das Struktur-Hash `99ca967` referenzieren. |

### Suche innerhalb der Repositorys eines Benutzers oder einer Organisation

Wenn Du Commits in allen Repositorys suchst, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, verwende den Qualifizierer `user` respektive `org`. Für die Suche nach Commits in einem bestimmten Repository verwende den Qualifizierer `repo`.

| Qualifizierer              | Beispiel                                                                                                                                                                                                                                                  |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) sucht in Repositorys des Benutzers @defunkt nach Commits, deren Mitteilungen das Wort „gibberish“ enthalten.                               |
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) sucht in Repositorys der Organisation @github nach Commits, deren Mitteilungen das Wort „test“ enthalten.                                                |
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) sucht im Repository „gibberish“ des Benutzers @defunkt nach Commits, deren Mitteilungen das Wort „language“ enthalten. |

### Öffentliche oder private Repositorys filtern

Der Qualifizierer `is` gleicht öffentliche oder private Commits ab.

| Qualifizierer | Beispiel                                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| `is:public`   | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) gleicht öffentliche Commits ab. |
| `is:private`  | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) gleicht private Commits ab.     |

### Weiterführende Informationen

- „[Suchergebnisse sortieren](/articles/sorting-search-results/)“
