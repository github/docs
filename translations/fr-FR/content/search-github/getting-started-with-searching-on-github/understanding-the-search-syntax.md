---
title: Compréhension de la syntaxe de recherche
intro: 'Lors de la recherche dans {% data variables.product.product_name %}, vous pouvez construire des requêtes qui correspondent à des nombres et des mots spécifiques.'
redirect_from:
  - /articles/search-syntax
  - /articles/understanding-the-search-syntax
  - /github/searching-for-information-on-github/understanding-the-search-syntax
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/understanding-the-search-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Understand search syntax
ms.openlocfilehash: e233c32d01c53ca5e5aa815fffe4505b14696240
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106058'
---
## Requête de valeurs supérieures ou inférieures à une autre valeur

Vous pouvez utiliser `>`, `>=`, `<` et `<=` pour rechercher des valeurs supérieures, supérieures ou égales, inférieures, et inférieures ou égales à une autre valeur.

Requête  |  Exemple
------------- | -------------
<code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** correspond aux dépôts contenant le mot «cats » qui ont plus de 1 000 étoiles.
<code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** correspond aux dépôts contenant le mot «cats » qui ont au minimum 5 rubriques.
<code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** correspond au code contenant le mot « cats » dans des fichiers d’une taille inférieure à 10 Ko.
<code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** correspond aux dépôts contenant le mot «cats » qui ont au maximum 50 étoiles.

Vous pouvez également utiliser des [requêtes de plage](#query-for-values-between-a-range) pour rechercher des valeurs supérieures ou égales, ou inférieures ou égales à une autre valeur.

Requête  |  Exemple
------------- | -------------
<code><em>n</em>..*</code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** équivaut à `stars:>=10` et correspond à des dépôts contenant le mot « cats » qui ont au minimum 10 étoiles.
<code>*..<em>n</em></code> | **[cats stars:*..10](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories)** équivaut à `stars:<=10` et correspond à des dépôts contenant le mot « cats » qui ont au maximum 10 étoiles.

## Requête de valeurs comprises dans une plage

Vous pouvez utiliser la syntaxe de plage <code><em>n</em>..<em>n</em></code> pour rechercher des valeurs dans une plage, où le premier nombre _n_ est la valeur la plus basse, et le second la valeur la plus élevée.

Requête  |  Exemple
------------- | -------------
<code><em>n</em>..<em>n</em></code>  | **[cats stars:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** correspond aux dépôts contenant le mot «cats » qui ont entre 10 et 50 étoiles.

## Requête de dates

Vous pouvez rechercher des dates antérieures ou postérieures à une autre date, ou qui s’inscrivent dans une plage de dates, en utilisant `>`, `>=`, `<`, `<=` et des [requêtes de plage](#query-for-values-between-a-range). {% data reusables.time_date.date_format %}

Requête  |  Exemple
------------- | -------------
<code>><em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** correspond aux problèmes liés au mot « cats » qui ont été créés après le 29 avril 2016.
<code>>=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** correspond aux problèmes liés au mot « cats », qui ont été créés à partir du 1 avril 2017.
<code><<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** correspond au code contenant le mot « cats » dans les dépôts qui ont été envoyés (push) avant le 5 juillet 2012.
<code><=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** correspond aux problèmes liés au mot « cats », qui ont été créés jusqu’au 4 avril 2012.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** correspond aux dépôts contenant le mot « cats » qui ont été envoyés (push) jusqu’à la fin des mois d’avril et de juillet 2016.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..*</code> | **[cats created:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** correspond aux problèmes créés après le 30 avril 2012, contenant le mot « cats ».
<code>*..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:*..2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** correspond aux problèmes créés avant le 4 juillet 2012, contenant le mot « cats ».

{% data reusables.time_date.time_format %}

Requête  |  Exemple
------------- | -------------
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[cats created:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** correspond aux problèmes créés entre le 1 janvier 2017 à 1 h avec un décalage UTC de `07:00` et le 1 mars 2017 à 15 h. avec un décalage UTC de `07:00`.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code>  | **[cats created:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** correspond aux problèmes créés entre le 21 mars 2016 à 14h11 et le 7 avril 2016 à 20h45.

## Exclure certains résultats

Vous pouvez exclure des résultats contenant un certain mot à l’aide de la syntaxe `NOT`. L’opérateur `NOT` ne peut être utilisé que pour des mots clés de type chaîne. Il ne fonctionne pas pour des chiffres ou des dates.

Requête  |  Exemple
------------- | -------------
`NOT`  | **[hello NOT world](https://github.com/search?q=hello+NOT+world&type=Repositories)** correspond aux dépôts contenant le mot « hello », mais pas le mot « world ».

Une autre façon de limiter les résultats de recherche consiste à exclure certains sous-ensembles. Vous pouvez préfixer n’importe quel qualificateur de recherche avec un signe `-` afin d’exclure tous les résultats correspondant à ce qualificateur.

Requête  |  Exemple
------------- | -------------
<code>-<em>QUALIFIER</em></code>  | **[`cats stars:>10 -language:javascript`](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** correspond aux dépôts contenant le mot « cats », qui ont plus de 10 étoiles mais ne sont pas écrits en JavaScript.
 | **[`mentions:defunkt -org:github`](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** correspond aux problèmes indiquant @defunkt, qui ne figurent pas dans des dépôts au sein de l’organisation GitHub

## Utiliser des guillemets pour les requêtes contenant un espace blanc

Si votre requête de recherche contient un espace blanc, vous devez l’entourer de guillemets. Par exemple :

* [cats NOT "hello world"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories) correspond aux dépôts contenant le mot « cats » mais pas les mots « hello world ».
* [build label:"bug fix"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues) correspond aux problèmes liés au mot « build », qui ont l’étiquette « bug fix ».

Certains symboles non alphanumériques, tels que les espaces, étant supprimés des requêtes de recherche de code entre guillemets, les résultats peuvent être inattendus.

## Requêtes avec des noms d’utilisateur

Si votre requête de recherche contient un qualificateur qui exige un nom d’utilisateur, tel que `user`, `actor` ou `assignee`, vous pouvez utiliser n’importe quel nom d’utilisateur {% data variables.product.product_name %} pour spécifier une personne spécifique, ou `@me`, pour spécifier l’utilisateur actuel.

Requête  |  Exemple
------------- | -------------
`QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits) correspond aux validations créées par @nat
`QUALIFIER:@me` | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues) correspond aux problèmes attribués à la personne qui affiche les résultats

Vous ne pouvez utiliser `@me` qu’avec un qualificateur, et non comme un terme de recherche tel que `@me main.workflow`.
