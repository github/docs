---
title: Recherche d’utilisateurs
intro: 'Vous pouvez rechercher des utilisateurs sur {% data variables.product.product_name %} et affiner les résultats en utilisant ces qualificateurs de recherche d’utilisateurs dans n’importe quelle combinaison.'
redirect_from:
  - /articles/searching-users
  - /github/searching-for-information-on-github/searching-users
  - /github/searching-for-information-on-github/searching-on-github/searching-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: cf3af1837e398226bee7d926e5dae0fd437879c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133851'
---
Vous pouvez rechercher des utilisateurs globalement dans l’ensemble de {% data variables.product.product_name %}. Pour plus d’informations, consultez « [À propos de la recherche sur {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github) ».

{% data reusables.search.syntax_tips %}

## Rechercher uniquement des utilisateurs ou des organisations

Par défaut, la recherche d’utilisateurs retourne des personnes et des organisations. Toutefois, vous pouvez utiliser le qualificateur `type` pour limiter les résultats de recherche à certains comptes personnels ou organisations.

| Qualificateur        | Exemple
| ------------- | -------------
| `type:user` | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) correspond aux comptes personnels nommés « mike » qui ont été créés avant 2011.
| `type:org` | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) correspond aux organisations dont l’e-mail contient le mot « data ».

## Recherche par nom de compte, nom complet ou e-mail public

Vous pouvez filtrer votre recherche sur le nom de compte personnel d’utilisateur ou d’organisation avec le qualificateur `user` ou `org`.

Avec le qualificateur `in`, vous pouvez restreindre votre recherche au nom d’utilisateur (`login`), au nom complet, à l’e-mail public ou à toute combinaison de ces éléments. Lorsque vous omettez ce qualificateur, seul le nom d’utilisateur et l’adresse e-mail sont recherchés. Pour des raisons de confidentialité, vous ne pouvez pas effectuer de recherche par nom de domaine de courrier.

| Qualificateur        | Exemple
| ------------- | -------------
| `user:name` | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) correspond à l’utilisateur dont le nom d’utilisateur est « octocat ».
| `org:name` | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) correspond au nom de compte de l’organisation Electron.
| `in:login` | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) correspond aux utilisateurs dont le nom d’utilisateur contient le mot « kenya ».
| `in:name` | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) correspond aux utilisateurs dont le nom réel contient le mot « bolton ».
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) correspond à un utilisateur dont le nom complet est « Nat Friedman ». Remarque : ce qualificateur de recherche est sensible à l’espacement.
| `in:email` | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) correspond aux utilisateurs dont l’e-mail contient le mot « données ».

## Rechercher par le nombre de dépôts qu’un utilisateur possède

Vous pouvez filtrer les utilisateurs en fonction du nombre de dépôts qu’ils possèdent, à l’aide du qualificateur `repos` et des [qualificateurs supérieur à, inférieur à et plage](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Qualificateur        | Exemple
| ------------- | -------------
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) correspond aux utilisateurs dont le nombre de dépôts est supérieur à 9 000.
| | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) correspond aux utilisateurs dont le nom d’utilisateur ou le nom réel contiennent le mot « bert », qui possèdent de 10 à 30 dépôts.

## Rechercher par emplacement

Vous pouvez rechercher des utilisateurs par l’emplacement indiqué dans leur profil.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>location:<em>LOCATION</em></code> | [**repos:1 location:islande**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) correspond aux utilisateurs avec exactement un dépôt résidant en Islande.

## Rechercher par langue de dépôt

Le qualificateur `language` vous permet de rechercher des utilisateurs en fonction des langues des dépôts qu’ils possèdent.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) correspond aux utilisateurs en Russie dont la majorité des dépôts sont écrits en JavaScript.
| | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) correspond aux utilisateurs ayant des dépôts JavaScript dont le nom complet contient le mot « jenny ».

## Rechercher par moment de création d’un compte personnel

Vous pouvez filtrer les utilisateurs en fonction du moment où ils ont rejoint {% data variables.product.product_name %} avec le qualificateur `created`. Cela prend une date comme paramètre. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificateur        | Exemple
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) correspond aux utilisateurs qui se sont joints avant 2011.
| | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) correspond aux utilisateurs qui se sont joints le ou après le 11 mai 2013.
| | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) correspond aux utilisateurs qui se sont joints le 6 mars 2013, qui indiquent que leur emplacement est Londres.
| | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) correspond aux utilisateurs qui se sont joints entre 2010 et 2011, et dont le nom d’utilisateur contient le mot « john ».

## Rechercher par nombre d’abonnés

Vous pouvez filtrer les utilisateurs en fonction du nombre d’abonnés qu’ils ont, à l’aide du qualificateur `followers` et des [qualificateurs supérieur à, inférieur à et plage](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Qualificateur        | Exemple
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) correspond aux utilisateurs ayant 1 000 abonnés ou plus.
| | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) correspond aux utilisateurs ayant de 1 à 10 abonnés, dont le nom contient le mot « sparkle ».

{% ifversion fpt or ghec %}

## Recherche basée sur la possibilité de sponsoriser

Vous pouvez rechercher des utilisateurs et des organisations qui peuvent être sponsorisés sur {% data variables.product.prodname_sponsors %} avec le qualificateur `is:sponsorable`. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors) ».

| Qualificateur  | Exemple
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Users) correspond aux utilisateurs et organisations qui ont un profil {% data variables.product.prodname_sponsors %}.

{% endif %}

## Pour aller plus loin

- « [Tri des résultats de recherche](/search-github/getting-started-with-searching-on-github/sorting-search-results/) »
