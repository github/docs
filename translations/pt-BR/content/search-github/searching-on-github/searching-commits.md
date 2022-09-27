---
title: Pesquisar commits
intro: 'Você pode pesquisar commits no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação dos qualificadores de pesquisa de commits.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095524'
---
Você pode pesquisar commits globalmente no {% data variables.product.product_name %} ou pesquisar em uma organização ou um repositório específico. Para obter mais informações, confira "[Sobre a pesquisa no {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

Quando você procura commits, apenas o [branch padrão](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) de um repositório é pesquisado.

{% data reusables.search.syntax_tips %}

## Pesquisar em mensagens do commit

Você pode pesquisar commits que contêm palavras específicas na mensagem. Por exemplo, [**fix typo**](https://github.com/search?q=fix+typo&type=Commits) corresponde aos commits que contêm as palavras "fix" e "typo".

## Pesquisar por autor ou committer

Encontre os commits por um usuário específico com os qualificadores `author` ou `committer`.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits) corresponde aos commits criados por @defunkt.
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits) corresponde aos commits feitos por @defunkt.

Os qualificadores `author-name` e `committer-name` correspondem aos commits pelo nome do autor ou pelo autor do commit.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>author-name:<em>NAME</em></code> | [**author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits) corresponde aos commits com "wanstrath" no nome do autor.
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) corresponde aos commits com "wanstrath" no nome do autor do commit.

Os qualificadores `author-email` e `committer-email` correspondem aos commits pelo endereço de email completo do autor ou do autor do commit.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>author-email:<em>EMAIL</em></code> | [ **author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) corresponde aos commits criados por chris@github.com.
| <code>committer-email:<em>EMAIL</em></code> | [ **committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) corresponde aos commits feitos por chris@github.com.

## Pesquisar por data de criação ou do commit

Use os qualificadores `author-date` e `committer-date` para encontrar correspondências de commits criados ou feitos no intervalo de datas especificado.

{% data reusables.search.date_gt_lt %}

| Qualificador  | Exemplo
| ------------- | -------------
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) corresponde aos commits criados antes de 1/1/2016.
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A>2016-01-01&type=Commits) corresponde aos commits feitos após 1/1/2016.

## Filtrar commits de merge

O qualificador `merge` filtra os commits de mesclagem.

| Qualificador  | Exemplo
| ------------- | -------------
| `merge:true` | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits) corresponde aos commits de mesclagem.
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) corresponde aos commits que não são de mesclagem.

## Pesquisar por hash

O qualificador `hash` corresponde aos commits com o hash SHA-1 especificado.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) corresponde aos commits com o hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

## Pesquisar por principal

O qualificador `parent` corresponde aos commits cujo pai tem o hash SHA-1 especificado.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) corresponde filhos de commits com o hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

## Pesquisar por árvore

O qualificador `tree` corresponde aos commits com o hash de árvore do Git SHA-1 especificado.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) corresponde aos commits que se referem ao hash de árvore `99ca967`.

## Pesquisar nos repositórios de um usuário ou uma organização

Para pesquisar commits em todos os repositórios pertencentes a uma organização ou a um usuário específico, use o qualificador `user` ou `org`. Para pesquisar commits em um repositório específico, use o qualificador `repo`.

| Qualificador  | Exemplo
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) corresponde às mensagens de commit com a palavra "gibberish" em repositórios pertencentes a @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) corresponde às mensagens de commit com a palavra "test" em repositórios pertencentes a @github.
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) corresponde às mensagens de commit com a palavra "language" no repositório "gibberish" de @defunkt.

## Filtrar por visibilidade do repositório

O qualificador `is` corresponde aos commits de repositórios com a visibilidade especificada. Para obter mais informações, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

| Qualificador  | Exemplo
| ------------- | ------------- |
{%- ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) corresponde aos commits feitos em repositórios públicos.
{%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Commits) corresponde aos commits feitos em repositórios internos.
{%- endif %} | `is:private` | [**is:private**](https://github.com/search?q=is%3Aprivate&type=Commits) corresponde aos commits feitos em repositórios privados.

## Leitura adicional

- "[Como classificar os resultados da pesquisa](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
