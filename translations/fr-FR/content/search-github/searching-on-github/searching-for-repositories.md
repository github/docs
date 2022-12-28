---
title: Recherche de référentiels
intro: 'Vous pouvez rechercher des référentiels sur {% data variables.product.product_name %} et restreindre les résultats en utilisant ces qualificateurs de recherche de référentiel dans n’importe quelle combinaison.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527933'
---
Vous pouvez rechercher des référentiels globalement dans tout {% data variables.product.product_location %} ou rechercher des référentiels au sein d’une organisation particulière. Pour plus d’informations, consultez « [À propos de la recherche sur {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github) ».

Pour inclure des duplications (forks) dans les résultats de la recherche, vous devez ajouter `fork:true` ou `fork:only` à votre requête. Pour plus d’informations, consultez « [Recherche dans les duplications (forks)](/search-github/searching-on-github/searching-in-forks) ».

{% data reusables.search.syntax_tips %}

## Rechercher par nom du référentiel, description ou contenu du fichier LISEZMOI

Avec le qualificateur `in`, vous pouvez restreindre votre recherche au nom du référentiel, à la description du référentiel, aux rubriques du référentiel, au contenu du fichier LISEZMOI ou à toute combinaison de ces critères. Quand vous omettez ce qualificateur, la recherche utilise uniquement le nom, la description et les rubriques du référentiel.

| Qualificateur  | Exemple
| ------------- | -------------
| `in:name` | [**jquery in:name**](https://github.com/search?q=jquery+in%3Aname&type=Repositories) trouve les référentiels dont le nom du référentiel contient « jquery ».
| `in:description`  | [**jquery in:name,description**](https://github.com/search?q=jquery+in%3Aname%2Cdescription&type=Repositories) trouve les référentiels dont le nom ou la description du référentiel contient « jquery ».
| `in:topics`  | [**jquery in:topics**](https://github.com/search?q=jquery+in%3Atopics&type=Repositories) correspond aux référentiels dont le sujet est « jquery ».
| `in:readme` | [**jquery in:readme**](https://github.com/search?q=jquery+in%3Areadme&type=Repositories) trouve les référentiels mentionnant « jquery » dans le fichier LISEZMOI du référentiel.
| `repo:owner/name` | [**repo:octocat/hello-world**](https://github.com/search?q=repo%3Aoctocat%2Fhello-world) trouve un nom de référentiel spécifique.

## Recherche en fonction du contenu d’un référentiel

Vous pouvez trouver un référentiel en effectuant une recherche dans le contenu dans le fichier LISEZMOI du référentiel à l’aide du qualificateur `in:readme`. Pour plus d’informations, consultez « [À propos des fichiers README](/github/creating-cloning-and-archiving-repositories/about-readmes) ».

Outre l’utilisation de `in:readme`, il n’est pas possible de trouver des référentiels en recherchant du contenu spécifique dans le référentiel. Pour rechercher un fichier ou un contenu spécifique dans un référentiel, vous pouvez utiliser la fonctionnalité de recherche de fichiers ou les qualificateurs de recherche spécifiques au code. Pour plus d’informations, consultez « [Recherche de fichiers sur {% data variables.product.prodname_dotcom %}](/search-github/searching-on-github/finding-files-on-github) » et « [Recherche de code](/search-github/searching-on-github/searching-code). »

| Qualificateur  | Exemple
| ------------- | -------------
| `in:readme` | [**octocat in:readme**](https://github.com/search?q=octocat+in%3Areadme&type=Repositories) trouve les référentiels mentionnant « octocat » dans le fichier LISEZMOI du référentiel.

## Rechercher dans les référentiels d’un utilisateur ou d’une organisation

Pour effectuer une recherche dans l’ensemble des référentiels appartenant à un utilisateur ou à une organisation, vous pouvez utiliser le qualificateur `user` ou `org`.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt forks:&gt;100**](https://github.com/search?q=user%3Adefunkt+forks%3A%3E%3D100&type=Repositories) trouve les référentiels de @defunkt qui contiennent plus de 100 duplications (forks).
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub&type=Repositories) trouve les référentiels de GitHub.

## Rechercher par taille de référentiel

Le qualificateur `size` trouve des référentiels qui correspondent à une certaine taille (en kilo-octets), à l’aide des qualificateurs supérieur à, inférieur à et de plage. Pour plus d’informations, consultez « [Présentation de la syntaxe de recherche](/github/searching-for-information-on-github/understanding-the-search-syntax) ».

| Qualificateur  | Exemple
| ------------- | -------------
| <code>size:<em>n</em></code> | [**size:1000**](https://github.com/search?q=size%3A1000&type=Repositories) trouve les référentiels d’une taille de 1 Mo exactement.
| | [**size:&gt;=30000**](https://github.com/search?q=size%3A%3E%3D30000&type=Repositories) trouve les référentiels d’une taille de 30 Mo minimum.
| | [**size:&lt;50**](https://github.com/search?q=size%3A%3C50&type=Repositories) trouve les référentiels d’une taille inférieure à 50 Mo.
| | [**size:50..120**](https://github.com/search?q=size%3A50..120&type=Repositories) trouve les référentiels d’une taille comprise entre 50 Ko et 120 Ko.

## Rechercher par nombre d’abonnés

Vous pouvez filtrer les référentiels en fonction du nombre d’utilisateurs qui suivent les référentiels, en utilisant le qualificateur `followers` avec des qualificateurs supérieur à, inférieur à et de plage. Pour plus d’informations, consultez « [Présentation de la syntaxe de recherche](/github/searching-for-information-on-github/understanding-the-search-syntax) ».

| Qualificateur        | Exemple
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**node followers:>=10000**](https://github.com/search?q=node+followers%3A%3E%3D10000) trouve les référentiels avec 10 000 abonnés ou plus, mentionnant le mot « node ».
| | [**styleguide linter followers:1..10**](https://github.com/search?q=styleguide+linter+followers%3A1..10&type=Repositories) trouve les référentiels qui disposent de 1 à 10 abonnés, mentionnant les mots « styleguide linter ».

## Rechercher par nombre de duplications (forks)

Le qualificateur `forks` spécifie le nombre de duplications (forks) qu’un référentiel doit avoir, à l’aide des qualificateurs supérieur à, inférieur à et de plage. Pour plus d’informations, consultez « [Présentation de la syntaxe de recherche](/github/searching-for-information-on-github/understanding-the-search-syntax) ».

| Qualificateur  | Exemple
| ------------- | -------------
| <code>forks:<em>n</em></code> | [**forks:5**](https://github.com/search?q=forks%3A5&type=Repositories) trouve les référentiels comprenant seulement cinq duplications (forks).
| | [**forks:&gt;=205**](https://github.com/search?q=forks%3A%3E%3D205&type=Repositories) trouve les référentiels comprenant au moins 205 duplications (forks).
| | [**forks:&lt;90**](https://github.com/search?q=forks%3A%3C90&type=Repositories) trouve les référentiels comprenant moins de 90 duplications (forks).
| | [**forks:10..20**](https://github.com/search?q=forks%3A10..20&type=Repositories) trouve les référentiels comprenant entre 10 et 20 duplications (forks).

## Rechercher par nombre d’étoiles

Vous pouvez rechercher des référentiels en fonction du nombre d’étoiles dont ils disposent, en utilisant les qualificateurs supérieur à, inférieur à et des qualificateurs de plage. Pour plus d’informations, consultez « [Enregistrement de référentiels avec des étoiles](/github/getting-started-with-github/saving-repositories-with-stars) » et « [Présentation de la syntaxe de recherche](/github/searching-for-information-on-github/understanding-the-search-syntax) ».

| Qualificateur  | Exemple
| ------------- | -------------
| <code>stars:<em>n</em></code> | [**stars:500**](https://github.com/search?utf8=%E2%9C%93&q=stars%3A500&type=Repositories) trouve les référentiels comprenant 500 étoiles exactement.
| | [**stars:10..20 size:<1000**](https://github.com/search?q=stars%3A10..20+size%3A%3C1000&type=Repositories) trouve les référentiels comprenant entre 10 et 20 étoiles, qui sont inférieurs à 1 000 Ko.
| | [**stars:&gt;=500 fork:true language:php**](https://github.com/search?q=stars%3A%3E%3D500+fork%3Atrue+language%3Aphp&type=Repositories) trouve les référentiels comprenant au moins 500 étoiles, notamment les duplications (forks), qui sont écrits en PHP.

## Recherchez par la date de création ou de dernière modification du référentiel

Vous pouvez filtrer les référentiels en fonction de l’heure de création ou de l’heure de la dernière mise à jour. Pour la création du référentiel, vous pouvez utiliser le qualificateur `created`. Pour déterminer la dernière mise à jour du référentiel, vous pouvez utiliser le qualificateur `pushed`. Le qualificateur `pushed` retourne une liste de référentiels triés par la validation (commit) la plus récente effectuée sur n’importe quelle branche du référentiel.

Ils utilisent tous les deux une date comme paramètre. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificateur  | Exemple
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**webos created:&lt;2011-01-01**](https://github.com/search?q=webos+created%3A%3C2011-01-01&type=Repositories) trouve les référentiels comprenant le mot « webos » qui ont été créés avant 2011.
| <code>pushed:<em>YYYY-MM-DD</em></code> | [**css pushed:&gt;2013-02-01**](https://github.com/search?utf8=%E2%9C%93&q=css+pushed%3A%3E2013-02-01&type=Repositories) trouve les référentiels comprenant le mot « css » qui ont été envoyés (push) après janvier 2013.
| | [**case pushed:&gt;=2013-03-06 fork:only**](https://github.com/search?q=case+pushed%3A%3E%3D2013-03-06+fork%3Aonly&type=Repositories) trouve les référentiels comprenant le mot « case » qui ont été envoyés (push) le 6 mars 2013 ou ultérieurement, et qui sont des duplications (forks).

## Rechercher par langage

Vous pouvez rechercher référentiels en fonction du langage du code dans les référentiels.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [ **`rails language:javascript`**](https://github.com/search?q=rails+language%3Ajavascript&type=Repositories) trouve les référentiels comprenant le mot « rails » qui sont écrits en JavaScript.

## Rechercher par sujet

Vous pouvez trouver l’ensemble des référentiels qui sont classifiés avec une rubrique particulière. Pour plus d’informations, consultez « [Classification de votre référentiel avec des rubriques](/github/administering-a-repository/classifying-your-repository-with-topics) ».

| Qualificateur  | Exemple
| ------------- | -------------
| <code>topic:<em>TOPIC</em></code> | [ **`topic:jekyll`**](https://github.com/search?utf8=%E2%9C%93&q=topic%3Ajekyll&type=Repositories&ref=searchresults) trouve les référentiels qui ont été classifiés avec la rubrique « Jekyll ».

## Rechercher par nombre de sujets

Vous pouvez rechercher des référentiels par le nombre de rubriques qui ont été appliquées aux référentiels, en utilisant le qualificateur `topics`, ainsi que les qualificateurs supérieur à, inférieur à et de plage. Pour plus d’informations, consultez « [Classification de votre référentiel avec des rubriques](/github/administering-a-repository/classifying-your-repository-with-topics) » et « [Présentation de la syntaxe de recherche](/github/searching-for-information-on-github/understanding-the-search-syntax) ».

| Qualificateur  | Exemple
| ------------- | -------------
| <code>topics:<em>n</em></code> | [**topics:5**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A5&type=Repositories&ref=searchresults) trouve les référentiels qui présentent cinq rubriques.
| | [**topics:>3**](https://github.com/search?utf8=%E2%9C%93&q=topics%3A%3E3&type=Repositories&ref=searchresults) trouve les référentiels qui présentent plus de trois rubriques.

{% ifversion fpt or ghes or ghec %}

## Rechercher par licence

Vous pouvez rechercher des référentiels par type de licence dans les référentiels. Vous devez utiliser un mot clé de licence pour filtrer les référentiels selon une licence ou une famille de licences particulière. Pour plus d’informations, consultez « [Gestion des licences d’un référentiel](/github/creating-cloning-and-archiving-repositories/licensing-a-repository) ».

| Qualificateur  | Exemple
| ------------- | -------------
| <code>license:<em>LICENSE_KEYWORD</em></code> | [**license:apache-2.0**](https://github.com/search?utf8=%E2%9C%93&q=license%3Aapache-2.0&type=Repositories&ref=searchresults) trouve les référentiels sous licence Apache License 2.0.

{% endif %}

## Rechercher par visibilité de référentiel

Vous pouvez filtrer votre recherche en fonction de la visibilité des référentiels. Pour plus d’informations, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) ».

| Qualificateur  | Exemple | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public org:github**](https://github.com/search?q=is%3Apublic+org%3Agithub&type=Repositories) trouve les référentiels publics appartenant à {% data variables.product.company_short %}.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal test**](https://github.com/search?q=is%3Ainternal+test&type=Repositories) trouve les référentiels internes auxquels vous avez accès et contenant le mot « test ».{% endif %} | `is:private` | [**is:private pages**](https://github.com/search?q=is%3Aprivate+pages&type=Repositories) trouve les référentiels privés auxquels vous avez accès et contenant le mot « pages ».

{% ifversion fpt or ghec %}

## Rechercher en fonction du fait qu’un référentiel est un miroir

Vous pouvez rechercher des référentiels en fonction du fait qu’il s’agisse de miroirs qui sont hébergés à un autre emplacement. Pour plus d’informations, consultez « [Trouver des moyens de contribuer à l’open source sur {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github) ».

| Qualificateur  | Exemple
| ------------- | -------------
| `mirror:true` | [**mirror:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Atrue+GNOME&type=) trouve les référentiels qui sont des miroirs et contiennent le mot « GNOME ».
|  `mirror:false` | [**mirror:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=mirror%3Afalse+GNOME&type=) trouve les référentiels qui ne sont pas des miroirs et contiennent le mot « GNOME ».

{% endif %}

## Effectuer une recherche en fonction du fait que des référentiels soient archivés ou non

Vous pouvez rechercher des référentiels en fonction du fait qu’ils soient archivés ou non. Pour plus d’informations, consultez « [Archivage des dépôts](/repositories/archiving-a-github-repository/archiving-repositories) ».

| Qualificateur  | Exemple
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Atrue+GNOME&type=) trouve les référentiels qui sont archivés et contiennent le mot « GNOME ».
|  `archived:false` | [**archived:false GNOME**](https://github.com/search?utf8=%E2%9C%93&q=archived%3Afalse+GNOME&type=) trouve les référentiels qui ne sont pas archivés et contiennent le mot « GNOME ».

{% ifversion fpt or ghec %}

## Rechercher en fonction du nombre de problèmes avec des étiquettes `good first issue` ou `help wanted`

Vous pouvez rechercher des référentiels qui présentent un nombre minimal de problèmes étiquetés `help-wanted` ou `good-first-issue` avec les qualificateurs `help-wanted-issues:>n` et `good-first-issues:>n`. Pour plus d’informations, consultez [« Mise en évidence des contributions utiles à votre projet à l’aide d’étiquettes »](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels).

| Qualificateur  | Exemple
| ------------- | -------------
| `good-first-issues:>n` | [ **`good-first-issues:&gt;2 javascript`**](https://github.com/search?utf8=%E2%9C%93&q=javascript+good-first-issues%3A%3E2&type=) trouve les référentiels qui présentent plus de deux problèmes étiquetés `good-first-issue` et contiennent le mot « javascript ».
| `help-wanted-issues:>n`|[**help-wanted-issues:&gt;4 react**](https://github.com/search?utf8=%E2%9C%93&q=react+help-wanted-issues%3A%3E4&type=) trouve les référentiels qui présentent plus de quatre problèmes étiquetés `help-wanted` et contiennent le mot « React ».

## Recherche basée sur la possibilité de parrainer

Vous pouvez rechercher des référentiels dont les propriétaires peuvent être parrainés sur {% data variables.product.prodname_sponsors %} avec le qualificateur `is:sponsorable`. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors). »

Vous pouvez rechercher des référentiels qui disposent d’un fichier funding à l’aide du qualificateur `has:funding-file`. Pour plus d’informations, consultez « [À propos des fichiers FUNDING](/github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository#about-funding-files) ».

| Qualificateur  | Exemple
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Repositories) trouve les référentiels dont les propriétaires disposent d’un profil {% data variables.product.prodname_sponsors %}.
| `has:funding-file` | [**has:funding-file**](https://github.com/search?q=has%3Afunding-file&type=Repositories) trouve les référentiels qui disposent d’un fichier FUNDING.yml.

{% endif %}

## Pour aller plus loin

- « [Tri des résultats de recherche](/search-github/getting-started-with-searching-on-github/sorting-search-results/) »
- « [Recherche dans les duplications](/search-github/searching-on-github/searching-in-forks) »
