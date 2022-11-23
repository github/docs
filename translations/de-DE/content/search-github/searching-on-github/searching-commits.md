---
title: Commits durchsuchen
intro: 'Auf {% data variables.product.product_name %} kannst du Commits durchsuchen und die Suchergebnisse mit den folgenden Kennzeichnern der Commit-Suche in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-commits
  - /github/searching-for-information-on-github/searching-commits
  - /github/searching-for-information-on-github/searching-on-github/searching-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 2dc35c96805e175bef1ed1ec1898d48e50de6042
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106047'
---
Du kannst Commits global auf {% data variables.product.product_name %} oder in bestimmten Repositorys oder Organisationen durchsuchen. Weitere Informationen findest du unter [Informationen zur Suche auf {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

Beim Suchen nach Commits wird nur der [Standardbranch](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) eines Repositorys durchsucht.

{% data reusables.search.syntax_tips %}

## Suche in Commit-Mitteilungen

Du kannst nach Commits suchen, deren Nachricht bestimmte Wörter enthält. Beispielsweise sucht [**fix typo**](https://github.com/search?q=fix+typo&type=Commits) nach Commits, die die Worte „fix“ und „typo“ enthalten.

## Suche nach Autor oder Committer

Mit den Qualifizierern `author` oder `committer` kannst du nach Commits eines bestimmten Benutzers suchen.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits) sucht nach Commits, die von @defunkt erstellt wurden.
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits) sucht nach Commits, die von @defunkt committet wurden.

Die Qualifizierer `author-name` und `committer-name` suchen anhand des Autoren- oder Committernamens nach Commits.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>author-name:<em>NAME</em></code> | [**author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits) sucht nach Commits mit „wanstrath“ im Autorennamen.
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) sucht nach Commits mit „wanstrath“ im Committernamen.

Die Qualifizierer `author-email` und `committer-email` suchen anhand der vollständigen E-Mail-Adresse des Autors oder Committers nach Commits.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>author-email:<em>EMAIL</em></code> | [ **author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) sucht nach Commits, die von chris@github.com erstellt wurden.
| <code>committer-email:<em>EMAIL</em></code> | [ **committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) sucht nach Commits, die von chris@github.com committet wurden.

## Suche nach Verfassungs- oder Commit-Datum

Verwende die Qualifizierer `author-date` und `committer-date`, um nach Commits zu suchen, die im angegeben Datumsbereich erstellt oder committet wurden.

{% data reusables.search.date_gt_lt %}

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) sucht nach Commits, die vor dem 01.01.2016 erstellt wurden.
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A>2016-01-01&type=Commits) sucht nach Commits, die nach dem 01.01.2016 committet wurden.

## Merge-Commits filtern

Der Qualifizierer `merge` filtert nach Mergecommits.

| Qualifizierer  | Beispiel
| ------------- | -------------
| `merge:true` | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits) sucht nach Mergecommits.
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) sucht nach Nichtmergecommits.

## Suche nach Hash

Der Qualifizierer `hash` sucht nach Commits mit dem angegebenen SHA-1-Hash.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) sucht nach Commits mit dem Hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

## Suche nach übergeordnetem Commit

Der Qualifizierer `parent` sucht nach Commits, deren übergeordneten Commits den angegebenen SHA-1-Hash enthalten.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) sucht nach untergeordneten Commits von Commits mit dem Hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

## Suche nach Struktur

Der Qualifizierer `tree` sucht nach Commits mit dem angegebenen SHA-1-Git-Strukturhash.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) sucht nach Commits, die sich auf den Strukturhash `99ca967` beziehen.

## Suche innerhalb der Repositorys eines Benutzers oder einer Organisation

Verwende die Qualifizierer `user` oder `org`, um in allen Repositorys nach Commits im Besitz eines bestimmten Benutzers oder einer bestimmten Organisation zu suchen. Verwende den Qualifizierer `repo`, um in einem bestimmten Repository nach Commits zu suchen.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) sucht nach Commitmeldungen mit dem Wort „gibberish“ in Repositorys im Besitz von @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) sucht nach Commitmeldungen mit dem Wort „test“ in Repositorys im Besitz von @github.
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) sucht nach Commitmeldungen mit dem Wort „language“ im Repository „gibberish“ von @defunkt.

## Filtern nach der Sichtbarkeit von Repositorys

Der Qualifizierer `is` sucht nach Commits von Repositorys mit der angegebenen Sichtbarkeit. Weitere Informationen findest du unter [Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

| Qualifizierer  | Beispiel
| ------------- | ------------- |
{%- ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) sucht nach Commits in öffentliche Repositorys.
{%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Commits) sucht nach Commits in interne Repositorys.
{%- endif %} | `is:private` | [**is:private**](https://github.com/search?q=is%3Aprivate&type=Commits) sucht nach Commits in private Repositorys.

## Weiterführende Themen

- [Sortieren von Suchergebnissen](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
