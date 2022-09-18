---
title: Ordenar os resultados da pesquisa
intro: 'Você pode classificar os resultados da [pesquisa do {% data variables.product.product_name %}](/articles/searching-on-github) usando o menu Classificar ou ao adicionar um qualificador `sort` à consulta.'
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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095540'
---
Use o menu Sort (Ordenar) para ordenar os resultados por relevância, número de estrelas, número de bifurcações e data da atualização dos itens.

  ![Menu com opções para ordenar os resultados da pesquisa](/assets/images/help/search/repo-search-sort.png)

Para ordenar por interações, reações, data de criação, data do committer e data de atualização dos itens, adicione um qualificador `sort` na consulta de pesquisa.

## Ordenar por interações

O qualificador `sort:interactions` ordena pelo maior número combinado de reações e comentários.

| Qualificador  | Exemplo
| ------------- | -------------
| `sort:interactions` ou `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) corresponde a problemas em repositórios de propriedade de {% data variables.product.product_name %}, classificados pelo maior número combinado de reações e comentários.
| `sort:interactions-asc` | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) corresponde a problemas em repositórios de propriedade de {% data variables.product.product_name %}, classificados pelo menor número combinado de reações e comentários.

## Ordenar por reações

O qualificador `sort:reactions` classifica pelo número ou tipo de reações.

| Qualificador  | Exemplo
| ------------- | -------------
| `sort:reactions` ou `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) corresponde a problemas em repositórios de propriedade de {% data variables.product.product_name %}, classificados pelo maior número de reações.
| `sort:reactions-asc` | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) corresponde a problemas em repositórios de propriedade de {% data variables.product.product_name %}, classificados por número crescente de reações (do menor para o maior).
| <code>sort:reactions-<em>reaction</em></code> | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) identifica problemas em repositórios de propriedade de {% data variables.product.product_name %}, classificados pela maioria das reações de polegar para cima (:+1:).
| | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) identifica problemas em repositórios de propriedade de {% data variables.product.product_name %}, classificados pela maioria das reações de polegares para baixo (:-1:).
| | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) identifica problemas em repositórios de propriedade de {% data variables.product.product_name %}, classificados pela maioria das reações de risada (:smile:).
| | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) identifica problemas em repositórios de propriedade de {% data variables.product.product_name %}, classificados pela maioria das reações viva (:tada:).
| | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) identifica problemas em repositórios de propriedade de {% data variables.product.product_name %}, classificados pela maioria das reações de coração (:heart:).

## Ordenar por data de criação

O qualificador `sort:author-date` classifica por data de autor decrescente ou crescente.

| Qualificador  | Exemplo
| ------------- | -------------
| `sort:author-date` ou `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) corresponde a commits contendo a palavra "recurso" em repositórios de propriedade de {% data variables.product.product_name %}, classificados por data de autor decrescente.
| `sort:author-date-asc` | [ **`feature org:github sort:author-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) corresponde a commits contendo a palavra "recurso" em repositórios de propriedade de {% data variables.product.product_name %}, classificados por data de autor crescente.

## Ordenar por data do committer

O qualificador `sort:committer-date` classifica por data de committer decrescente ou crescente.

| Qualificador  | Exemplo
| ------------- | -------------
| `sort:committer-date` ou `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) corresponde a commits contendo a palavra "recurso" em repositórios de propriedade de {% data variables.product.product_name %}, classificados por data de committer decrescente.
| `sort:committer-date-asc` | [ **`feature org:github sort:committer-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) corresponde a commits contendo a palavra "recurso" em repositórios de propriedade de {% data variables.product.product_name %}, classificados por data de committer crescente.

## Ordenar por data da atualização

O qualificador `sort:updated` classifica por quão recentemente os itens foram atualizados.

| Qualificador  | Exemplo
| ------------- | -------------
| `sort:updated` ou `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) corresponde aos repositórios que contêm a palavra "recurso", classificados pela data de atualização mais recente.
| `sort:updated-asc` | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) corresponde aos repositórios que contêm a palavra "recurso", classificados pela data de atualização menos recente.

## Leitura adicional

- "[Sobre pesquisar sobre o {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
- "[Como filtrar e pesquisar problemas e solicitações de pull](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"
