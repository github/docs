---
title: Pesquisar usuários
intro: 'Você pode pesquisar usuários no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação dos qualificadores da pesquisa de usuário.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128016'
---
Você pode pesquisar usuários globalmente no {% data variables.product.product_name %}. Para obter mais informações, confira "[Sobre a pesquisa no {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

{% data reusables.search.syntax_tips %}

## Pesquisar somente usuários ou organizações

Por padrão, a pesquisa de usuários retorna pessoas e organizações. No entanto, você pode usar o qualificador `type` para restringir os resultados da pesquisa apenas às contas pessoais ou de organizações.

| Qualificador        | Exemplo
| ------------- | -------------
| `type:user` | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) corresponde às contas pessoas chamadas "mike" que foram criadas antes de 2011.
| `type:org` | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) corresponde às organizações com a palavra "data" no email.

## Pesquisar por nome da conta, nome completo ou e-mail público

Você pode filtrar sua pesquisa para o nome da conta pessoal de usuário ou de organização com os qualificadores `user` ou `org`.

Com o qualificador `in`, você pode restringir a pesquisa ao nome de usuário (`login`), ao nome completo, ao email público ou a qualquer combinação desses. Quando você omite esse qualificador, somente o nome de usuário e o endereço de e-mail são pesquisados. Por questão de privacidade, não é possível pesquisar pelo nome do domínio do e-mail.

| Qualificador        | Exemplo
| ------------- | -------------
| `user:name` | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) corresponde ao usuário com o nome de usuário "octocat".
| `org:name` | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) corresponde ao nome da conta da organização Electron.
| `in:login` | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) corresponde aos usuários com a palavra "kenya" no nome de usuário.
| `in:name` | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) corresponde aos usuários cujo nome real contém a palavra "bolton".
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) corresponde a um usuário com o nome completo "Nat Friedman". Observação: esse qualificador de pesquisa considera o espaçamento.
| `in:email` | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) corresponde aos usuários com a palavra "data" no email.

## Pesquisar por número de repositórios do usuário

Você pode filtrar os usuários com base no número de repositórios que eles têm, usando o qualificador `repos` e os [qualificadores maior que, menor que e intervalo](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Qualificador        | Exemplo
| ------------- | -------------
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) corresponde aos usuários cuja contagem de repositórios é superior a nova mil.
| | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) corresponde aos usuários com a palavra "bert" no nome de usuário ou no nome real que têm de dez a 30 repositórios.

## Pesquisar por local

Você pode pesquisar usuários pelo local indicado no perfil dele.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>location:<em>LOCATION</em></code> | [**repos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) corresponde aos usuários com exatamente um repositório que residem na Islândia.

## Pesquisar por linguagem do repositório

Usando o qualificador `language`, você pode pesquisar os usuários com base nas linguagens dos repositórios que eles têm.

| Qualificador        | Exemplo
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) corresponde aos usuários na Rússia com a maioria dos repositórios escritos em JavaScript.
| | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) corresponde aos usuários com repositórios JavaScript cujo nome completo contém a palavra "jenny".

## Pesquisar por data de criação da conta pessoal

Você pode filtrar os usuários com base em quando eles ingressaram no {% data variables.product.product_name %} com o qualificador `created`. Esse qualificador usa uma data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificador        | Exemplo
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) corresponde aos usuários que ingressaram antes de 2011.
| | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) corresponde aos usuários que ingressaram em 11 de maio de 2013 ou após essa data.
| | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) corresponde aos usuários que ingressaram em 6 de março de 2013, que listam a localização como Londres.
| | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) corresponde aos usuários que ingressaram entre 2010 e 2011 com a palavra "john" no nome de usuário.

## Pesquisar por número de seguidores

Você pode filtrar os usuários com base no número de seguidores que eles têm, usando o qualificador `followers` com os [qualificadores maior que, menor que e intervalo](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Qualificador        | Exemplo
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) corresponde aos usuários com mil seguidores ou mais.
| | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) corresponde aos usuários com um a dez seguidores, com a palavra "sparkle" no nome.

{% ifversion fpt or ghec %}

## Pesquisar com base na capacidade de patrocinador

Você pode pesquisar usuários e organizações que podem ser patrocinados no {% data variables.product.prodname_sponsors %} com o qualificador `is:sponsorable`. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)".

| Qualificador  | Exemplo
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Users) corresponde aos usuários e às organizações que têm um perfil do {% data variables.product.prodname_sponsors %}.

{% endif %}

## Leitura adicional

- "[Como classificar os resultados da pesquisa](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
