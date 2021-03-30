---
title: Ordenar os resultados da pesquisa
intro: 'Você pode ordenar os resultados da [pesquisa do {% data variables.product.product_name %}](/articles/searching-on-github) usando o menu Sort (Ordenar) ou adicionando um qualificador "sort" na consulta.'
redirect_from:
  - /articles/sorting-search-results
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pesquisa do github
---

Use o menu Sort (Ordenar) para ordenar os resultados por relevância, número de estrelas, número de bifurcações e data da atualização dos itens.

  ![Menu com opções para ordenar os resultados da pesquisa](/assets/images/help/search/repo-search-sort.png)

Para ordenar por interações, reações, data de criação, data do committer e data de atualização dos itens, adicione um qualificador `sort` na consulta de pesquisa.

### Ordenar por interações

O qualificador `sort:interactions` ordena pelo maior número combinado de reações e comentários.

| Qualifier                                       | Exemplo                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:interactions` ou `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) identifica os problemas nos repositórios do {% data variables.product.product_name %} ordenados pelo maior número combinado de reações e comentários.                        |
| `sort:interactions-asc`                         | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) identifica os problemas nos repositórios do {% data variables.product.product_name %} ordenados pelo menor número combinado de reações e comentários. |

### Ordenar por reações

O qualificador `sort:reactions` ordena pelo número ou tipo de reações.

| Qualifier                                 | Exemplo                                                                                                                                                                                                                                                                             |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:reactions` ou `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) identifica os problemas nos repositórios do {% data variables.product.product_name %} ordenados pelo maior número de reações.                                                |
| `sort:reactions-asc`                      | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) identifica os problemas nos repositórios do {% data variables.product.product_name %} ordenados pelo número crescente de reações (do menor para o maior).            |
| <code>sort:reactions-<em>reaction</em></code>                 | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) identifica os problemas nos repositórios do {% data variables.product.product_name %} ordenados pelo maior número de reações de curtida (:+1:).                      |
|                                           | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) identifica os problemas em repositórios do {% data variables.product.product_name %} ordenados pelo maior número de reações de não curti (:-1:).        |
|                                           | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) identifica os problemas nos repositórios do {% data variables.product.product_name %} ordenados pelo maior número de reações de risada (:smile:). |
|                                           | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) identifica os problemas nos repositórios do {% data variables.product.product_name %} ordenados pelo maior número de reações de "viva" (:tada:).    |
|                                           | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) identifica os problemas nos repositórios do {% data variables.product.product_name %} ordenados pelo maior número de reações de "amei" (:heart:). |

### Ordenar por data de criação

O qualificador `sort:author-date` ordena de forma crescente ou decrescente por data de criação.

| Qualifier                                     | Exemplo                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:author-date` ou `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) identifica os commits que contêm a palavra "feature" nos repositórios do {% data variables.product.product_name %} ordenados de forma decrescente por data de criação.       |
| `sort:author-date-asc`                        | [**feature org:github sort:author-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) identifica os commits que contêm a palavra "feature" nos repositórios do {% data variables.product.product_name %} ordenados de forma crescente por data de criação. |

### Ordenar por data do committer

O qualificador `sort:committer-date` ordena de forma crescente ou decrescente por data do committer.

| Qualifier                                           | Exemplo                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:committer-date` ou `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) identifica os commits que contêm a palavra "feature" nos repositórios do {% data variables.product.product_name %} ordenados de forma decrescente por data do committer.       |
| `sort:committer-date-asc`                           | [**feature org:github sort:committer-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) identifica os commits que contêm a palavra "feature" nos repositórios do {% data variables.product.product_name %} ordenados de forma crescente por data do committer. |

### Ordenar por data da atualização

O qualificador `sort:updated` ordena pela data de atualização dos itens.

| Qualifier                             | Exemplo                                                                                                                                                                                                                           |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:updated` ou `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) identifica os repositórios que contêm a palavra "feature" ordenados pela data mais recente de atualização.        |
| `sort:updated-asc`                    | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) identifica os repositórios que contêm a palavra "feature" ordenados pela data mais antiga de atualização. |

### Leia mais

- [Sobre a pesquisa no GitHub](/articles/about-searching-on-github)
- [Ordenar problemas e pull requests](/articles/sorting-issues-and-pull-requests/)
