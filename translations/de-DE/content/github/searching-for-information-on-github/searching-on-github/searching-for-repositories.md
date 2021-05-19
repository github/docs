---
title: Nach Repositorys suchen
intro: 'Auf {% data variables.product.product_name %} können Sie nach Repositorys suchen und die Suchergebnisse mit den folgenden Kennzeichnern der Repository-Suche in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-repositories/
  - /articles/searching-for-repositories
  - /github/searching-for-information-on-github/searching-for-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---
Sie können Repositorys global auf {% data variables.product.product_location %} oder in einer bestimmten Organisation durchsuchen. Weitere Informationen findest Du unter „[Informationen zur Suche auf {% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github).“

Um Forks in die Suchergebnisse einzuschließen, musst du Deiner Abfrage den Qualifizierer `fork:true` oder `fork:only` hinzufügen. Weitere Informationen finden Sie unter „[Forks durchsuchen](/articles/searching-in-forks)“.

{% data reusables.search.syntax_tips %}

### Suche nach Repository-Name, Beschreibung oder Inhalt der README-Datei

Mit dem Qualifizierer `in` kannst Du Deine Suche auf den Namen, die Beschreibung oder den Inhalt der README-Dateien der Repositorys oder jede beliebige Kombination derselben eingrenzen. Ohne diesen Qualifizierer werden nur die Namen und Beschreibungen der Repositorys durchsucht.

| Qualifizierer     | Beispiel                                                                                                                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:name`         | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) matches repositories with "jquery" in the repository name.                                          |
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) matches repositories with "jquery" in the repository name or description. |
| `in:readme`       | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) matches repositories mentioning "jquery" in the repository's README file.                       |
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) sucht nach einem Repository mit einem bestimmten Namen.                                         |

### Suche nach Repository-Inhalt

You can find a repository by searching for content in the repository's README file using the `in:readme` qualifier. Weitere Informationen finden Sie unter „[Informationen zu README-Dateien](/github/creating-cloning-and-archiving-repositories/about-readmes)“.

`in:readme` ist die einzige Möglichkeit, Repositorys anhand bestimmter Inhalte im Repository zu finden. Wenn Du nach einer bestimmten Datei oder einem bestimmten Inhalt innerhalb eines Repositorys suchst, verwende den Dateifinder oder die code-spezifischen Suchbegriffe. Weitere Informationen findest Du in den Abschnitten „[Dateien auf {% data variables.product.prodname_dotcom %} finden](/articles/finding-files-on-github)“ und „[Code durchsuchen](/articles/searching-code).“

| Qualifizierer | Beispiel                                                                                                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:readme`   | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) matches repositories mentioning "octocat" in the repository's README file. |

### Suche innerhalb der Repositorys eines Benutzers oder einer Organisation

Wenn Du alle Repositorys durchsuchen möchtest, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, verwende den Qualifizierer `user` respektive `org`.

| Qualifizierer             | Beispiel                                                                                                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) sucht Repositorys des Benutzers @defunkt mit mehr als 100 Forks. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) sucht GitHub-Repositorys.                                                                   |

### Suche nach Repository-Größe

The `size` qualifier finds repositories that match a certain size (in kilobytes), using greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifizierer             | Beispiel                                                                                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) sucht Repositorys mit einer Größe von 1 MB.                                |
|                           | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) sucht Repositorys mit einer Größe von mindestens 30 MB. |
|                           | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) sucht Repositorys mit einer Größe von weniger als 50 KB.          |
|                           | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) sucht Repositorys mit einer Größe zwischen 50 KB und 120 KB.         |

### Suche nach Anzahl der Follower

You can filter repositories based on the number of users who follow the repositories, using the `followers` qualifier with greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifizierer             | Beispiel                                                                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) findet Repositorys mit mehr als 10.000 Followern und die das Wort „node" enthalten.                              |
|                           | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) sucht Repositorys mit 1 bis 10 Followern, die „styleguide linter“ enthalten. |

### Suche nach Anzahl der Forks

The `forks` qualifier specifies the number of forks a repository should have, using greater than, less than, and range qualifiers. For more information, see "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifizierer             | Beispiel                                                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) sucht Repositorys mit genau fünf Forks.                          |
|                           | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) sucht Repositorys mit mindestens 205 Forks. |
|                           | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) sucht Repositorys mit weniger als 90 Forks.       |
|                           | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) sucht Repositorys mit 10 bis 20 Forks.                 |

### Suche nach Anzahl der Sterne

You can search repositories based on the number of stars the repositories have, using greater than, less than, and range qualifiers. For more information, see "[Saving repositories with stars](/github/getting-started-with-github/saving-repositories-with-stars)" and "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

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

You can search repositories based on the language of the code in the repositories.

| Qualifizierer             | Beispiel                                                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>language:<em>LANGUAGE</em></code> | [**rails language:javascript**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) sucht Repositorys, die das Wort „rails“ enthalten und in JavaScript geschrieben sind. |

### Suche nach Thema

You can find all of the repositories that are classified with a particular topic. Weitere Informationen finden Sie unter „[Repository mit Themen klassifizieren](/github/administering-a-repository/classifying-your-repository-with-topics)“.

| Qualifizierer             | Beispiel                                                                                                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topic:<em>TOPIC</em></code> | [**topic:jekyll**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) sucht Repositorys, die durch das Thema „jekyll“ klassifiziert wurden. |

### Suche nach Anzahl der Themen

You can search repositories by the number of topics that have been applied to the repositories, using the `topics` qualifier along with greater than, less than, and range qualifiers. For more information, see "[Classifying your repository with topics](/github/administering-a-repository/classifying-your-repository-with-topics)" and "[Understanding the search syntax](/github/searching-for-information-on-github/understanding-the-search-syntax)."

| Qualifizierer              | Beispiel                                                                                                                                                  |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) sucht Repositorys mit fünf Themen.              |
|                            | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) sucht Repositorys mit mehr als drei Themen. |

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

### Suche nach Lizenz

You can search repositories by the type of license in the repositories. You must use a license keyword to filter repositories by a particular license or license family. Weitere Informationen finden Sie unter „[Ein Repository lizenzieren](/github/creating-cloning-and-archiving-repositories/licensing-a-repository)“.

| Qualifizierer              | Beispiel                                                                                                                                                                                       |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) sucht Repositorys, die unter Apache License 2.0 lizenziert sind. |

{% endif %}

### Search by repository visibility

You can filter your search based on the visibility of the repositories. Weitere Informationen findest Du unter „[Über Sichtbarkeit von Repositorys](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

| Qualifier  | Example | ------------- | ------------- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) matches public repositories owned by {% data variables.product.company_short %}.{% endif %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) matches internal repositories that you can access and contain the word "test". | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) matches private repositories that you can access and contain the word "pages."

{% if currentVersion == "free-pro-team@latest" %}

### Suche auf Basis der Spiegelung eines Repositorys

You can search repositories based on whether the repositories are mirrors and hosted elsewhere. Weitere Informationen findest du unter „[Möglichkeiten finden, Beiträge an Open-Source auf {% data variables.product.prodname_dotcom %} zu leisten](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."

| Qualifizierer  | Beispiel                                                                                                                                                                |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mirror:true`  | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) matches repositories that are mirrors and contain the word "GNOME."       |
| `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) matches repositories that are not mirrors and contain the word "GNOME." |

{% endif %}

### Suche auf Basis der Archivierung eines Repositorys

You can search repositories based on whether or not the repositories are archived. For more information, see "[About archiving repositories](/github/creating-cloning-and-archiving-repositories/about-archiving-repositories)."

| Qualifizierer    | Beispiel                                                                                                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) matches repositories that are archived and contain the word "GNOME."       |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) matches repositories that are not archived and contain the word "GNOME." |

{% if currentVersion == "free-pro-team@latest" %}

### Suche nach Anzahl der Issues mit der Kennzeichnung `good first issue` oder `help wanted`

Mit den Qualifizierern `good-first-issues:>n` und `help-wanted-issues:>n` kannst Du Repositorys mit einer Mindestanzahl an Issues mit der Kennzeichnung `good-first-issue` oder `help-wanted` suchen. Weitere Informationen findest Du auf „[Ermutigen hilfreicher Beiträge zu Deinem Projekt über Kennzeichnungen](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)."

| Qualifizierer              | Beispiel                                                                                                                                                                                                                                                       |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `good-first-issues:>n`  | [**good-first-issues:&gt;2 javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) sucht Repositorys mit mehr als zwei Issues mit der Kennzeichnung `good-first-issue`, die das Wort „javascript“ enthalten. |
| `help-wanted-issues:>n` | [**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) sucht Repositorys mit mehr als vier Issues mit der Kennzeichnung `help-wanted`, die das Wort „React“ enthalten.                   |

{% endif %}

### Weiterführende Informationen

- „[Suchergebnisse sortieren](/articles/sorting-search-results/)“
- „[Forks durchsuchen](/articles/searching-in-forks)“
