---
title: Pesquisar wikis
intro: 'Você pode pesquisar wikis no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação dos qualificadores da pesquisa de wiki.'
redirect_from:
  - /articles/searching-wikis
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Você pode pesquisar wikis globalmente no {% data variables.product.product_name %} ou pesquisar em uma organização ou um repositório específico. For more information, see "[About searching on {% data variables.product.company_short %}](/articles/about-searching-on-github)."

{% data reusables.search.syntax_tips %}

### Pesquisar nos repositórios de um usuário ou uma organização

Para pesquisar páginas wiki em todos os repositórios de um determinado usuário ou organização, use os qualificadores `user` ou `org`. Para pesquisar páginas wiki em um repositório específico, use o qualificador `repo`.

| Qualifier                 | Exemplo                                                                                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis) identifica as páginas wikis nos repositórios de propriedade de @defunkt.         |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) identifica os wikis nos repositórios de propriedade da orgain GitHub. |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis) identifica as páginas wiki no repositório "gibberish" de @defunkt.     |

### Pesquisar no título ou no texto da página wiki

Os qualificadores `in` limitam a pesquisa ao texto ou ao título da página wiki. Sem o qualificador, o título e o texto são pesquisados.

| Qualifier  | Exemplo                                                                                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:title` | [**usage in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis) identifica os títulos de página wiki com a palavra "usage".                             |
| `in:body`  | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis) identifica as páginas wiki com a palavra "installation" no texto principal. |

### Pesquisar por data da última atualização

O qualificador `updated` identifica as páginas wiki que foram atualizadas pela última vez no intervalo de datas especificado.

{% data reusables.search.date_gt_lt %}

| Qualifier                 | Exemplo                                                                                                                                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) corresponde a páginas de wiki com a palavra "uso", cuja última atualização foi depois de 01/01/2016. |

### Leia mais

- "[Ordenar os resultados da pesquisa](/articles/sorting-search-results/)"
