---
title: Nach Repositorys suchen
intro: 'Auf {% data variables.product.product_name %} kannst du nach Repositorys suchen und die Suchergebnisse mit den folgenden Kennzeichnern der Repositorysuche in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-repositories
  - /articles/searching-for-repositories
  - /github/searching-for-information-on-github/searching-for-repositories
  - /github/searching-for-information-on-github/searching-on-github/searching-for-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search for repositories
ms.openlocfilehash: 9a464fbb327809b8af970c9a62c3a70d81c2c6b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527934'
---
Du kannst auf {% data variables.product.product_location %} global nach Repositorys suchen oder eine Suche nach Repositorys innerhalb einer bestimmten Organisation durchführen. Weitere Informationen findest du unter [Informationen zur Suche auf {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

Um Forks in die Suchergebnisse einzubeziehen, musst du deiner Abfrage `fork:true` oder `fork:only` hinzufügen. Weitere Informationen findest du unter [Suchen in Forks](/search-github/searching-on-github/searching-in-forks).

{% data reusables.search.syntax_tips %}

## Suche nach Repository-Name, Beschreibung oder Inhalt der README-Datei

Mit dem Qualifizierer `in` kannst du deine Suche auf den Repositorynamen, die Repositorybeschreibung, Repositorythemen, den Inhalt der README-Datei oder eine beliebige Kombination davon beschränken. Ohne diesen Qualifizierer werden nur die Namen, die Beschreibung und Themen der Repositorys durchsucht.

| Qualifizierer  | Beispiel
| ------------- | -------------
| `in:name` | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) sucht nach Repositorys mit „jquery“ im Repositorynamen.
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) sucht nach Repositorys mit „jquery“ im Repositorynamen oder in der Beschreibung.
| `in:topics`  | [**jquery in:topics**](https://github.com/search?q=jquery+in%3Atopics&type=Repositories) entspricht Repositorys, die mit „jquery“ als Thema gekennzeichnet sind.
| `in:readme` | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) sucht nach Repositorys mit Erwähnung von „jquery“ in der README-Datei des Repositorys.
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) sucht nach einem bestimmten Repositorynamen.

## Suche nach Repository-Inhalt

Du kannst ein Repository finden, indem du mit dem Qualifizierer `in:readme` nach Inhalten in der README-Datei des Repositorys suchst. Weitere Informationen findest du unter [Informationen zu README-Dateien](/github/creating-cloning-and-archiving-repositories/about-readmes).

`in:readme` ist die einzige Möglichkeit, Repositorys anhand bestimmter Inhalte im Repository zu finden. Wenn du nach einer bestimmten Datei oder einem bestimmten Inhalt innerhalb eines Repositorys suchst, verwende den Dateifinder oder codespezifische Suchbegriffe. Weitere Informationen findest du unter [Suchen nach Dateien auf {% data variables.product.prodname_dotcom %}](/search-github/searching-on-github/finding-files-on-github) und [Suchen von Code](/search-github/searching-on-github/searching-code).

| Qualifizierer  | Beispiel
| ------------- | -------------
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) sucht nach Repositorys mit Erwähnung von „octocat“ in der README-Datei des Repositorys.

## Suche innerhalb der Repositorys eines Benutzers oder einer Organisation

Um in allen Repositorys zu suchen, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, kannst du den Qualifizierer `user` oder `org` verwenden.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) sucht nach Repositorys von @defunkt, die über mehr als 100 Forks verfügen.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) sucht nach Repositorys aus GitHub.

## Suche nach Repository-Größe

Mit dem Qualifizierer `size` werden Repositorys ermittelt, die einer bestimmten Größe (in Kilobyte) entsprechen, wobei die Qualifizierer > (größer als), < (kleiner als) und Bereichsqualifizierer verwendet werden können. Weitere Informationen findest du unter [Grundlagen der Suchsyntax](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) sucht nach Repositorys, die genau 1 MB groß sind.
| | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) sucht nach Repositorys, die mindestens 30 MB groß sind.
| | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) sucht nach Repositorys, die kleiner als 50 KB groß sind.
| | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) sucht nach Repositorys, die zwischen 50 KB und 120 KB groß sind.

## Suche nach der Anzahl der Follower

Du kannst Repositorys nach der Anzahl von Benutzern filtern, die den Repositorys folgen, indem du den Qualifizierer `followers` mit den Qualifizierern >, < und Bereichsqualifizierern verwendest. Weitere Informationen findest du unter [Grundlagen der Suchsyntax](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) sucht nach Repositorys mit 10.000 oder mehr Followern und Erwähnung des Worts „node“.
| | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) sucht nach Repositorys mit 1–10 Followern und Erwähnung des Worts „styleguide linter“.

## Suche nach Anzahl der Forks

Der Qualifizierer `forks` gibt die Anzahl von Forks an, die ein Repository aufweisen muss, wobei die Qualifizierer >, < und Bereichsqualifizierer verwendet werden. Weitere Informationen findest du unter [Grundlagen der Suchsyntax](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) sucht nach Repositorys mit 5 Forks.
| | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) sucht nach Repositorys mit mindestens 205 Forks.
| | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) sucht nach Repositorys mit weniger als 90 Forks.
| | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) sucht nach Repositorys mit 10–20 Forks.

## Suche nach Anzahl der Sterne

Du kannst die Suche nach Repositorys basierend auf der Anzahl von Sternen durchführen, die das Repository aufweist, indem du die Qualifizierer >, < und Bereichsqualifizierer verwendest. Weitere Informationen findest du unter [Speichern von Repositorys mit Sternen](/github/getting-started-with-github/saving-repositories-with-stars) und [Informationen zur Suchsyntax](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) sucht nach Repositorys mit genau 500 Sternen.
| | [**stars:10..20 size:<1000**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) sucht nach Repositorys mit 10 bis 20 Sternen, die kleiner als 1.000 KB sind.
| | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) sucht nach Repositorys mit mindestens 500 Sternen, einschließlich geforkter und in PHP geschriebener Repository.

## Suche nach dem Erstellungs- oder letzten Änderungsdatum eines Repositorys

Du kannst Repositorys nach dem Zeitpunkt der Erstellung oder letzten Änderung filtern. Um ein Repository zu erstellen, kannst du den Qualifizierer `created` verwenden, und anhand des Qualifizierers `pushed` kannst du ermitteln, wann ein Repository zuletzt aktualisiert wurde. Der Qualifizierer `pushed` gibt eine Repositoryliste sortiert nach dem letzten Commit in einem beliebigen Branch des Repositorys zurück.

Beide Qualifizierer verwenden als Parameter ein Datum. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) sucht nach Repositorys mit dem Wort „webos“, die vor 2011 erstellt wurden.
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) sucht nach Repositorys mit dem Wort „webos“, das nach Januar 2013 gepusht wurde.
| | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) sucht nach Repositorys mit dem Wort „case“, die am oder nach dem 6. März 2013 gepusht wurden, und bei denen es sich um Forks handelt.

## Suche nach Sprache

Du kannst die Suche nach Repositorys basierend auf der Sprache des Codes in den Repositorys durchführen.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [ **`rails language:javascript`**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) sucht nach Repositorys mit dem Wort „rails“, die in JavaScript geschrieben wurden.

## Suche nach Thema

Du kannst alle Repositorys ausfindig machen, die einem bestimmten Thema zugeordnet sind. Weitere Informationen findest du unter [Klassifizieren deines Repositorys mit Themen](/github/administering-a-repository/classifying-your-repository-with-topics).

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>topic:<em>TOPIC</em></code> | [ **`topic:jekyll`**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) sucht nach Repositorys, die mit dem Thema „Jekyll“ klassifiziert wurden.

## Suche nach Anzahl der Themen

Du kannst Repositorys nach der Anzahl von Themen durchsuchen, die auf die Repositorys angewendet wurden, indem du den Qualifizierer `topics` zusammen mit den Qualifizierern >, < und Bereichsqualifizierern verwendest. Weitere Informationen findest du unter [Klassifizieren von Repositorys mit Themen](/github/administering-a-repository/classifying-your-repository-with-topics) und [Informationen zur Suchsyntax](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) sucht nach Repositorys, die fünf Themen aufweisen.
| | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) sucht nach Repositorys, die mehr als drei Themen aufweisen.

{% ifversion fpt or ghes or ghec %}

## Suche nach Lizenz

Du kannst Repositorys nach dem Lizenztyp in den Repositorys durchsuchen. Du musst ein Lizenzschlüsselwort verwenden, um Repositorys nach einer bestimmten Lizenz oder Lizenzfamilie zu filtern. Weitere Informationen findest du unter [Lizenzieren eines Repositorys](/github/creating-cloning-and-archiving-repositories/licensing-a-repository).

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) sucht nach Repositorys, die unter Apache-Lizenz 2.0 lizenziert sind.

{% endif %}

## Suche nach Repositorysichtbarkeit

Du kannst deine Suche nach der Sichtbarkeit der Repositorys filtern. Weitere Informationen findest du unter [Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

| Qualifizierer | Beispiel | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) sucht nach öffentlichen Repositorys mit dem Besitzer {% data variables.product.company_short %}.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) sucht nach internen Repositorys, auf die du zugreifen kannst und die das Wort „test“ enthalten.{% endif %} | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) sucht nach privaten Repositorys, auf die du zugreifen kannst und die das Wort „pages“ enthalten.

{% ifversion fpt or ghec %}

## Suche auf Basis der Spiegelung eines Repositorys

Du kannst die Suche nach Repositorys basierend darauf durchführen, ob es sich bei den Repositorys um Spiegelungen handelt und sie an anderer Stelle gehostet werden. Weitere Informationen findest du unter [Beitragen zu Open-Source-Projekten auf {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github).

| Qualifizierer  | Beispiel
| ------------- | -------------
| `mirror:true` | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) sucht nach Repositorys, bei denen es sich um Spiegelungen handelt und die das Wort „GNOME“ enthalten.
|  `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) sucht nach Repositorys, bei denen es sich nicht um Spiegelungen handelt und die das Wort „GNOME“ enthalten.

{% endif %}

## Suche auf Basis der Archivierung eines Repositorys

Du kannst die Suche nach Repositorys basierend darauf durchführen, ob die Repositorys archiviert wurden. Weitere Informationen findest du unter [Archivieren von Repositorys](/repositories/archiving-a-github-repository/archiving-repositories).

| Qualifizierer  | Beispiel
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) sucht nach Repositorys, die archiviert wurden und die das Wort „GNOME“ enthalten.
|  `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) sucht nach Repositorys, die nicht archiviert wurden und die das Wort „GNOME“ enthalten.

{% ifversion fpt or ghec %}

## Suche auf Basis der Anzahl von Issues mit den Bezeichnungen `good first issue` oder `help wanted`

Du kannst nach Repositorys suchen, die eine Mindestanzahl von Issues aufweisen, die mit `help-wanted` oder `good-first-issue` und den Qualifizierern `help-wanted-issues:>n` und `good-first-issues:>n` gekennzeichnet sind. Weitere Informationen findest du unter [Fördern hilfreicher Beiträge zu deinem Projekt mit Bezeichnungen](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels).

| Qualifizierer  | Beispiel
| ------------- | -------------
| `good-first-issues:>n` | [ **`good-first-issues:&gt;2 javascript`**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) sucht nach Repositorys, die mehr als zwei mit `good-first-issue` gekennzeichnete Issues aufweisen und das Wort „javascript“ enthalten.
| `help-wanted-issues:>n`|[**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) sucht nach Repositorys, die mehr als vier mit `help-wanted` gekennzeichnete Issues aufweisen und das Wort „React“ enthalten.

## Suche basierend auf der Möglichkeit zum Sponsern

Mit dem Qualifizierer `is:sponsorable` kannst du auf {% data variables.product.prodname_sponsors %} nach Repositorys suchen, deren Besitzer gesponsert werden können. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors).

Du kannst mit dem Qualifizierer `has:funding-file` nach Repositorys suchen, die über eine FUNDING-Datei verfügen. Weitere Informationen findest du unter [Informationen zu FUNDING-Dateien](/github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository#about-funding-files).

| Qualifizierer  | Beispiel
| ------------- | -------------
| `is:sponsorable` | [**ist:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Repositories) sucht nach Repositorys, deren Besitzer über ein {% data variables.product.prodname_sponsors %}- Profil verfügen.
| `has:funding-file` | [**has:funding-file**](https://github.com/search?q=has%3Afunding-file&type=Repositories) sucht nach Repositorys, die eine Datei „FUNDING.yml“ enthalten.

{% endif %}

## Weiterführende Themen

- [Sortieren von Suchergebnissen](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
- [Suche in Forks](/search-github/searching-on-github/searching-in-forks)
