---
title: Pesquisar wikis
intro: 'Você pode pesquisar wikis no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação dos qualificadores da pesquisa de wiki.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095512'
---
Você pode pesquisar wikis globalmente no {% data variables.product.product_name %} ou pesquisar em uma organização ou um repositório específico. Para obter mais informações, confira "[Sobre a pesquisa no {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

{% data reusables.search.syntax_tips %}

## Pesquisar nos repositórios de um usuário ou uma organização

Para localizar páginas do wiki de todos os repositórios pertencentes a determinado usuário ou organização, use o qualificador `user` ou `org`. Para localizar páginas do wiki de um repositório específico, use o qualificador `repo`.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis) corresponde às páginas do wiki de repositórios pertencentes a @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) corresponde aos wikis em repositórios pertencentes à organização GitHub.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis) corresponde às páginas do wiki do repositório "gibberish" de @defunkt.

## Pesquisar no título ou no texto da página wiki

O qualificador `in` limita a pesquisa ao título da página do wiki ou ao texto do corpo. Sem o qualificador, o título e o texto são pesquisados.

| Qualificador        | Exemplo
| ------------- | -------------
| `in:title` | [**use in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis) corresponde aos títulos de página do wiki com a palavra "usage".
| `in:body` | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis) corresponde às páginas do wiki com a palavra "installation " no texto do corpo principal.

## Pesquisar por data da última atualização

O qualificador `updated` corresponde às páginas do wiki que foram atualizadas pela última vez no intervalo de datas especificado.

{% data reusables.search.date_gt_lt %}

| Qualificador        | Exemplo
| ------------- | -------------
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) corresponde às páginas do wiki com a palavra "usage" que foram atualizadas pela última vez após 1/1/2016.

## Leitura adicional

- "[Como classificar os resultados da pesquisa](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
