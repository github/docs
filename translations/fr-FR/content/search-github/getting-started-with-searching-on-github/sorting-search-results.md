---
title: Tri des résultats de recherche
intro: 'Vous pouvez trier les résultats de la [recherche {% data variables.product.product_name %}](/articles/searching-on-github) à l’aide du menu Trier ou en ajoutant un qualificateur `sort` à votre requête.'
redirect_from:
  - /articles/sorting-search-results
  - /github/searching-for-information-on-github/sorting-search-results
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/sorting-search-results
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b2c01cdb1bc1df9d4ae4247886b1471211b2714b
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106078'
---
Utilisez le menu Trier pour trier les résultats par pertinence, nombre d’étoiles, nombre de duplications et date de dernière mise à jour.

  ![Menu avec options de tri des résultats de la recherche](/assets/images/help/search/repo-search-sort.png)

Pour trier par interactions, réactions, date d’auteur, date de validation ou dernière mise à jour, vous pouvez ajouter un qualificateur `sort` à votre requête de recherche.

## Trier par interactions

Le qualificateur `sort:interactions` trie par le nombre combiné le plus élevé de réactions et de commentaires.

| Qualificateur  | Exemple
| ------------- | -------------
| `sort:interactions` ou `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) correspond aux problèmes dans les référentiels détenus par {% data variables.product.product_name %}, triés par le nombre combiné le plus élevé de réactions et de commentaires.
| `sort:interactions-asc` | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) correspond aux problèmes dans les référentiels détenus par {% data variables.product.product_name %}, triés par le nombre combiné le plus bas de réactions et de commentaires.

## Trier par réactions

Le qualificateur `sort:reactions` trie selon le nombre ou le type de réactions.

| Qualificateur  | Exemple
| ------------- | -------------
| `sort:reactions` ou `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) correspond aux problèmes dans les référentiels détenus par {% data variables.product.product_name %}, triés par le nombre de réactions le plus élevé.
| `sort:reactions-asc` | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) correspond aux problèmes dans les référentiels détenus par {% data variables.product.product_name %}, triés par nombre croissant de réactions (du plus petit au plus grand).
| <code>sort:reactions-<em>reaction</em></code> | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) correspond aux problèmes dans les référentiels détenus par {% data variables.product.product_name %}, triés par le plus grand nombre de réactions positives (:+1:).
| | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) correspond aux problèmes dans les référentiels détenus par {% data variables.product.product_name %}, triés par le plus grand nombre de réactions négatives (:-1:).
| | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) correspond aux problèmes dans les référentiels détenus par {% data variables.product.product_name %}, triés par le plus grand nombre de réactions « smile » (:smile:).
| | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) correspond aux problèmes dans les référentiels détenus par {% data variables.product.product_name %}, triés par le plus grand nombre de réactions « hourra » (:tada:).
| | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) correspond aux problèmes dans les référentiels détenus par {% data variables.product.product_name %}, triés par le plus grand nombre de réactions « cœur » (:heart:).

## Trier par date d’auteur

Le qualificateur `sort:author-date` trie en ordre décroissant ou croissant de date de création.

| Qualificateur  | Exemple
| ------------- | -------------
| `sort:author-date` ou `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) correspond aux validations contenant le mot « feature » dans les référentiels détenus par {% data variables.product.product_name %}, triés par date de création décroissante.
| `sort:author-date-asc` | [ **`feature org:github sort:author-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) correspond aux validations contenant le mot « feature » dans les référentiels détenus par {% data variables.product.product_name %}, triés par date de création croissante.

## Trier par date de validation

Le qualificateur `sort:committer-date` trie en ordre décroissant ou croissant de date de validation.

| Qualificateur  | Exemple
| ------------- | -------------
| `sort:committer-date` ou `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) correspond aux validations contenant le mot « feature » dans les référentiels détenus par {% data variables.product.product_name %}, triés par date de validation décroissante.
| `sort:committer-date-asc` | [ **`feature org:github sort:committer-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) correspond aux validations contenant le mot « feature » dans les référentiels détenus par {% data variables.product.product_name %}, triés par date de validation croissante.

## Trier par date de mise à jour

Le qualificateur `sort:updated` trie en fonction de la date de dernière mise à jour des éléments.

| Qualificateur  | Exemple
| ------------- | -------------
| `sort:updated` ou `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) correspond aux référentiels contenant le mot « feature », triés par date de mise à jour la plus récente.
| `sort:updated-asc` | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) correspond aux référentiels contenant le mot « feature », triés par date de mise à jour la plus ancienne.

## Pour aller plus loin

- « [À propos de la recherche sur {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github) »
- « [Filtrage et recherche des problèmes et demandes de tirage](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests) »
