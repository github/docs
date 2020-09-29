---
title: Nach Repositorys suchen
intro: 'Auf {% data variables.product.product_name %} kannst Du nach Repositorys suchen und die Suchergebnisse mit den folgenden Qualifizierern der Repository-Suche in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-repositories/
  - /articles/searching-for-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Du kannst Repositorys global auf {% data variables.product.product_name %} oder in einer bestimmten Organisation durchsuchen. Weitere Informationen findest Du unter „[Informationen zur Suche auf {% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github).“

Um Forks in die Suchergebnisse einzuschließen, musst du Deiner Abfrage den Qualifizierer `fork:true` oder `fork:only` hinzufügen. Weitere Informationen finden Sie unter „[Forks durchsuchen](/articles/searching-in-forks)“.

{% data reusables.search.syntax_tips %}

### Suche nach Repository-Name, Beschreibung oder Inhalt der README-Datei

Mit dem Qualifizierer `in` kannst Du Deine Suche auf den Namen, die Beschreibung oder den Inhalt der README-Dateien der Repositorys oder jede beliebige Kombination derselben eingrenzen. Ohne diesen Qualifizierer werden nur die Namen und Beschreibungen der Repositorys durchsucht.

| Qualifizierer     | Beispiel                                                                                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `in:name`         | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) sucht Repositorys, deren Namen die Zeichenfolge „jquery“ enthalten.                                               |
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) sucht Repositorys, deren Namen oder Beschreibungen die Zeichenfolge „jquery“ enthalten. |
| `in:readme`       | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) sucht Repositorys, deren README-Dateien die Zeichenfolge „jquery“ enthalten.                                  |
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) sucht nach einem Repository mit einem bestimmten Namen.                                                       |

### Suche nach Repository-Inhalt

Mit dem Qualifizierer `in:readme` kannst Du Repositorys nach Inhalten deren README-Dateien suchen.

`in:readme` ist die einzige Möglichkeit, Repositorys anhand bestimmter Inhalte im Repository zu finden. Wenn Du nach einer bestimmten Datei oder einem bestimmten Inhalt innerhalb eines Repositorys suchst, verwende den Dateifinder oder die code-spezifischen Suchbegriffe. Weitere Informationen findest Du in den Abschnitten „[Dateien auf {% data variables.product.prodname_dotcom %} finden](/articles/finding-files-on-github)“ und „[Code durchsuchen](/articles/searching-code).“

| Qualifizierer | Beispiel                                                                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `in:readme`   | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) sucht Repositorys, deren README-Dateien die Zeichenfolge „octocat“ enthalten. |

### Suche innerhalb der Repositorys eines Benutzers oder einer Organisation

Wenn Du alle Repositorys durchsuchen möchtest, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, verwende den Qualifizierer `user` respektive `org`.

| Qualifizierer             | Beispiel                                                                                                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) sucht Repositorys des Benutzers @defunkt mit mehr als 100 Forks. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) sucht GitHub-Repositorys.                                                                   |

### Suche nach Repository-Größe

Der Qualifizierer `size` sucht Repositorys mit einer bestimmten Größe (in Kilobyte). Zur Angabe des Größenbereichs verwende die [„Größer als“-, „Kleiner als“- oder Bereichsqualifizierer](/articles/understanding-the-search-syntax).

| Qualifizierer             | Beispiel                                                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) sucht Repositorys mit einer Größe von 1 MB.                                |
|                           | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) sucht Repositorys mit einer Größe von mindestens 30 MB. |
|                           | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) sucht Repositorys mit einer Größe von weniger als 50 KB.          |
|                           | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) sucht Repositorys mit einer Größe zwischen 50 KB und 120 KB.         |

### Suche nach Anzahl der Follower

Mit dem Qualifizierer `followers` kannst Du Repositorys nach der Anzahl ihrer Follower filtern. Zur Angabe der Anzahl der Follower verwende [„Größer als“-, „Kleiner als“- oder Bereichsqualifizierer](/articles/understanding-the-search-syntax).

| Qualifizierer             | Beispiel                                                                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) findet Repositorys mit mehr als 10.000 Followern und die das Wort „node" enthalten.                              |
|                           | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) sucht Repositorys mit 1 bis 10 Followern, die „styleguide linter“ enthalten. |

### Suche nach Anzahl der Forks

Mit dem Qualifizierer `forks` kannst Du Repositorys nach der Anzahl ihrer Forks filtern. Zur Angabe der Anzahl der Forks verwende [„Größer als“-, „Kleiner als“- oder Bereichsqualifizierer](/articles/understanding-the-search-syntax).

| Qualifizierer             | Beispiel                                                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) sucht Repositorys mit genau fünf Forks.                          |
|                           | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) sucht Repositorys mit mindestens 205 Forks. |
|                           | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) sucht Repositorys mit weniger als 90 Forks.       |
|                           | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) sucht Repositorys mit 10 bis 20 Forks.                 |

### Suche nach Anzahl der Sterne

Du kannst Repositorys nach der Anzahl Ihrer [Sterne](/articles/saving-repositories-with-stars) filtern. Zur Angabe der Anzahl der Sterne verwende [„Größer als“-, „Kleiner als“- oder Bereichsqualifizierer](/articles/understanding-the-search-syntax)

| Qualifizierer             | Beispiel                                                                                                                                                                                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) sucht Repositorys mit genau 500 Sternen.                                                                                                                        |
|                           | [**stars:10..20**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) sucht Repositorys mit 10 bis 20 Sternen und einer Größe von weniger als 1000 KB.                                                                          |
|                           | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) sucht Repositorys, darunter auch Fork-Repositorys, mit mindestens 500 Sternen, die in PHP geschrieben sind. |

### Suche nach dem Erstellungs- oder letzten Änderungsdatum eines Repositorys

Du kannst Repositorys nach dem Zeitpunkt der Erstellung oder letzten Änderung filtern. Für die Suche nach dem Erstellungsdatum verwende den Qualifizierer `created`, für die Suche nach dem letzten Änderungsdatum den Qualifizierer `pushed`. Der Qualifizierer `pushed` gibt eine Repository-Liste sortiert nach dem letzten Commit in einem beliebigen Branch der Repositorys zurück.

Beide Qualifizierer verwenden als Parameter ein Datum. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer             | Beispiel                                                                                                                                                                                                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) sucht Repositorys, die das Wort „webos“ enthalten und vor 2011 erstellt wurden.                                                                         |
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) sucht Repositorys, die das Wort „css“ enthalten und deren letzter Push nach Januar 2013 erfolgt ist.                                           |
|                           | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) sucht ausschließlich Fork-Repositorys, die das Wort „case“ enthalten und deren letzter Push im März 2013 oder später erfolgt ist. |

### Suche nach Sprache

Du kannst Repositorys nach der primären Programmiersprache suchen, in der sie geschrieben wurden.

| Qualifizierer             | Beispiel                                                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>language:<em>LANGUAGE</em></code> | [**rails language:javascript**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) sucht Repositorys, die das Wort „rails“ enthalten und in JavaScript geschrieben sind. |

### Suche nach Thema

Du kannst nach allen Repositorys suchen, die durch ein bestimmtes [Thema](/articles/classifying-your-repository-with-topics) klassifiziert wurden.

| Qualifizierer             | Beispiel                                                                                                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topic:<em>TOPIC</em></code> | [**topic:jekyll**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) sucht Repositorys, die durch das Thema „jekyll“ klassifiziert wurden. |

### Suche nach Anzahl der Themen

Mit dem Qualifizierer `topics` kannst Du Repositorys nach der Anzahl der [Themen](/articles/classifying-your-repository-with-topics) filtern, durch die sie klassifiziert wurden. Zur Angabe der Anzahl der Themen verwende die [„Größer als“-, „Kleiner als“- oder Bereichsqualifizierer](/articles/understanding-the-search-syntax).

| Qualifizierer              | Beispiel                                                                                                                                                  |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) sucht Repositorys mit fünf Themen.              |
|                            | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) sucht Repositorys mit mehr als drei Themen. |

### Suche nach Lizenz

Du kannst Repositorys nach ihrer [Lizenz](/articles/licensing-a-repository) filtern. Zum Filtern von Repositorys nach einer bestimmten Lizenz oder Lizenzfamilie musst Du ein [Lizenzstichwort](/articles/licensing-a-repository/#searching-github-by-license-type) angeben.

| Qualifizierer              | Beispiel                                                                                                                                                                                       |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) sucht Repositorys, die unter Apache License 2.0 lizenziert sind. |

### Suche nach öffentlichen oder privaten Repositorys

Du kannst Deine Suche danach filtern, ob ein Repository öffentlich oder privat ist.

| Qualifizierer | Beispiel                                                                                                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:public`   | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories&utf8=%E2%9C%93) sucht öffentliche GitHub-Repositorys.                                        |
| `is:private`  | [**is:private pages**](https://github.com/search?utf8=%E2%9C%93&q=pages+is%3Aprivate&type=Repositories) sucht private Repositorys, auf die Du Zugriff hast und die das Wort „pages“ enthalten. |

{% if currentVersion == "free-pro-team@latest" %}

### Suche auf Basis der Spiegelung eines Repositorys

Du kannst Repositorys danach durchsuchen, ob sie ein Spiegel sind und an anderer Stelle gehostet werden. Weitere Informationen findest Du unter „[Möglichkeiten finden, um Beiträge zu Open-Source auf {% data variables.product.prodname_dotcom %} zu leisten](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github) ."

| Qualifizierer  | Beispiel                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mirror:true`  | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) sucht gespiegelte Repositorys, die das Wort „GNOME“ enthalten.         |
| `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) sucht nicht gespiegelte Repositorys, die das Wort „GNOME“ enthalten. |

{% endif %}

### Suche auf Basis der Archivierung eines Repositorys

Bei der Suche kannst Du Repositorys auf Basis dessen filtern, ob sie [archiviert](/articles/about-archiving-repositories) sind.

| Qualifizierer    | Beispiel                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) sucht archivierte Repositorys, die das Wort „GNOME“ enthalten.         |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) sucht nicht archivierte Repositorys, die das Wort „GNOME“ enthalten. |

{% if currentVersion == "free-pro-team@latest" %}
### Suche nach Anzahl der Issues mit der Kennzeichnung `good first issue` oder `help wanted`

Mit den Qualifizierern `good-first-issues:>n` und `help-wanted-issues:>n` kannst Du Repositorys mit einer Mindestanzahl an Issues mit der Kennzeichnung `good-first-issue` oder `help-wanted` suchen. Weitere Informationen findest Du auf „[Ermutigen hilfreicher Beiträge zu Deinem Projekt über Kennzeichnungen](/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels)."

| Qualifizierer              | Beispiel                                                                                                                                                                                                                                                       |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `good-first-issues:>n`  | [**good-first-issues:&gt;2 javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) sucht Repositorys mit mehr als zwei Issues mit der Kennzeichnung `good-first-issue`, die das Wort „javascript“ enthalten. |
| `help-wanted-issues:>n` | [**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) sucht Repositorys mit mehr als vier Issues mit der Kennzeichnung `help-wanted`, die das Wort „React“ enthalten.                   |
{% endif %}

### Weiterführende Informationen

- „[Suchergebnisse sortieren](/articles/sorting-search-results/)“
- „[Forks durchsuchen](/articles/searching-in-forks)“
