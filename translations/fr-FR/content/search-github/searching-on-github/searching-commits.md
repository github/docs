---
title: Recherche de validations
intro: 'Vous pouvez rechercher des commits sur {% data variables.product.product_name %} et affiner les résultats en utilisant ces qualificateurs de recherche de commit dans n’importe quelle combinaison.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106046'
---
Vous pouvez rechercher des validations de manière globale dans l’ensemble de {% data variables.product.product_name %}, ou dans un référentiel ou une organisation spécifique. Pour plus d’informations, consultez « [À propos de la recherche sur {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github) ».

Lorsque vous recherchez des validations, la recherche porte uniquement sur la [branche par défaut](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) d’un référentiel.

{% data reusables.search.syntax_tips %}

## Rechercher dans les messages de validation

Vous pouvez rechercher des validations dont le message contient des mots particuliers. Par exemple, [**fix typo**](https://github.com/search?q=fix+typo&type=Commits) (corriger les coquilles) permet de rechercher les validations contenant les mots « fix » (corriger) et « typo » (coquilles).

## Rechercher par auteur ou validateur

Vous pouvez rechercher les validations d’un utilisateur particulier à l’aide des qualificateurs `author` ou `committer`.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits) permet de rechercher les validations créées par @defunkt.
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits) permet de rechercher les validations effectuées par @defunkt.

Les qualificateurs `author-name` et `committer-name` permettent d’effectuer des recherches de validations par nom d’auteur ou de validateur.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>author-name:<em>NAME</em></code> | [**author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits) permet de rechercher les validations dont le nom de l’auteur contient « wanstrath ».
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) permet de rechercher les validations dont le nom du validateur contient « wanstrath ».

Les qualificateurs `author-email` et `committer-email` permettent de rechercher les validations par adresse e-mail complète de l’auteur ou du validateur.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>author-email:<em>EMAIL</em></code> | [ **author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) permet de rechercher les validations créées par chris@github.com.
| <code>committer-email:<em>EMAIL</em></code> | [ **committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) permet de rechercher les validations effectuées par chris@github.com.

## Recherche par date de création ou de validation

Utilisez les qualificateurs `author-date` et `committer-date` pour rechercher les validations créées ou effectuées dans la plage de dates spécifiée.

{% data reusables.search.date_gt_lt %}

| Qualificateur  | Exemple
| ------------- | -------------
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) permet de rechercher les validations créées avant le 1er janvier 2016.
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A>2016-01-01&type=Commits) permet de rechercher les validations validées après le 1er janvier 2016.

## Filtrer les validations de fusion

Le qualificateur `merge` filtre les validations de fusion.

| Qualificateur  | Exemple
| ------------- | -------------
| `merge:true` | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits) permet de rechercher les validations de fusion.
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) permet de rechercher les validations autres que les validations de fusion.

## Rechercher par code de hachage

Le qualificateur `hash` permet de rechercher les validations contenant le code de hachage SHA-1 spécifié.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) permet de rechercher les validations contenant le code de hachage `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

## Rechercher par parent

Le qualificateur `parent` permet de rechercher les validations dont le parent contient le code de hachage SHA-1 spécifié.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) permet de rechercher les enfants des validations contenant le code de hachage `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

## Rechercher par arborescence

Le qualificateur `tree` permet de rechercher les validations contenant le code de hachage d’arborescence GIT SHA-1 spécifié.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) permet de rechercher les validations qui font référence au code de hachage d’arborescence `99ca967`.

## Recherche dans les référentiels d’un utilisateur ou d’une organisation

Pour rechercher des validations dans tous les référentiels appartenant à un utilisateur ou à une organisation, utilisez le qualificateur `user` ou `org`. Pour rechercher des validations dans un référentiel spécifique, utilisez le qualificateur `repo`.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) permet de rechercher les validations contenant le mot « gibberish » dans les référentiels appartenant à @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) permet de rechercher les validations contenant le mot « test » dans les référentiels appartenant à @github.
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) permet de rechercher les validations contenant le mot « language » dans le référentiel « gibberish » de @defunkt.

## Filtrer par visibilité de référentiel

Le qualificateur `is` permet de rechercher des validations dans les référentiels offrant la visibilité spécifiée. Pour plus d’informations, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) ».

| Qualificateur  | Exemple
| ------------- | ------------- |
{%- ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) permet de rechercher des validations dans les référentiels publics.
{%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Commits) permet de rechercher des validations dans les référentiels internes.
{%- endif %} | `is:private` | [**is:private**](https://github.com/search?q=is%3Aprivate&type=Commits) permet de rechercher les validations dans les référentiels privés.

## Pour aller plus loin

- « [Tri des résultats de recherche](/search-github/getting-started-with-searching-on-github/sorting-search-results/) »
