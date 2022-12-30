---
title: Recherche dans les wikis
intro: 'Vous pouvez rechercher des wikis sur {% data variables.product.product_name %} et affiner les résultats en utilisant ces qualificateurs de recherche de wiki dans n’importe quelle combinaison.'
redirect_from:
  - /articles/searching-wikis
  - /github/searching-for-information-on-github/searching-wikis
  - /github/searching-for-information-on-github/searching-on-github/searching-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: da73bcaa13c718be9840483e2a34c4b90ba96e63
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106022'
---
Vous pouvez rechercher des wikis de manière globale dans {% data variables.product.product_name %}, ou dans un référentiel ou une organisation spécifique. Pour plus d’informations, consultez « [À propos de la recherche sur {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github) ».

{% data reusables.search.syntax_tips %}

## Effectuer une recherche dans les référentiels d’un utilisateur ou d’une organisation

Pour rechercher des pages wiki dans tous les référentiels appartenant à un utilisateur ou à une organisation spécifique, utilisez le qualificateur `user` ou `org`. Pour rechercher des pages wiki à partir d’un référentiel spécifique, utilisez le qualificateur `repo`.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis) trouve les pages wiki des référentiels appartenant à @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) trouve les wikis dans des référentiels appartenant à l’organisation GitHub.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis) trouve les pages wiki du référentiel nommé « gibberish » de @defunkt.

## Rechercher dans un titre ou un texte de corps de page wiki

Le qualificateur `in` limite la recherche au titre ou au texte du corps de la page wiki. Sans qualificateur, la recherche s’effectue dans le titre et dans le texte du corps.

| Qualificateur        | Exemple
| ------------- | -------------
| `in:title` | [**usage in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis) trouve les titres de page wiki contenant le mot « usage ».
| `in:body` | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis) trouve les pages wiki avec le mot « installation » dans le texte de corps principal.

## Rechercher par date de dernière mise à jour

Le qualificateur `updated` trouve les pages wiki qui ont été mises à jour en dernier dans la plage de dates spécifiée.

{% data reusables.search.date_gt_lt %}

| Qualificateur        | Exemple
| ------------- | -------------
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) trouve les pages wiki contenant le mot « usage » et mises à jour après 2016-01-01.

## Pour aller plus loin

- « [Tri des résultats de recherche](/search-github/getting-started-with-searching-on-github/sorting-search-results/) »
