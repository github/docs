---
title: Pesquisar discussões
intro: 'Você pode pesquisar discussões em {% data variables.product.product_name %} e limitar os resultados usando os qualificadores de busca.'
versions:
  feature: discussions
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-discussions
  - /github/searching-for-information-on-github/searching-on-github/searching-discussions
ms.openlocfilehash: 4a1224d05cd78a0b701e7bc2a9e93a1c5a837bcd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410448'
---
## Sobre a pesquisa de discussões

É possível pesquisar discussões globalmente em todos os {% data variables.product.product_name %} ou pesquisar discussões dentro de uma determinada organização ou repositório. Para obter mais informações, confira "[Sobre a pesquisa no {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github)".

{% data reusables.search.syntax_tips %}

## Pesquisar por título, texto ou comentários

Com o qualificador `in`, você pode restringir a pesquisa de discussões ao título, ao corpo ou aos comentários. Você também pode combinar os qualificadores para pesquisar uma combinação de título, texto ou comentários. Quando você omite o qualificador `in`, o {% data variables.product.product_name %} pesquisa o título, o corpo e os comentários.

| Qualificador | Exemplo |
| :- | :- |
| `in:title` | [**welcome in:title**](https://github.com/search?q=welcome+in%3Atitle&type=Discussions) corresponde às discussões com "welcome" no título. |
| `in:body` | [**onboard in:title,body**](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions) corresponde às discussões com "onboard" no título ou no corpo. |
| `in:comments` | [**thanks in:comments**](https://github.com/search?q=thanks+in%3Acomment&type=Discussions) corresponde às discussões com "thanks" nos comentários da discussão. |

## Pesquisar nos repositórios de um usuário ou uma organização

Para pesquisar discussões  em todos os repositórios pertencentes a uma organização ou a um usuário específico, use o qualificador `user` ou `org`. Para pesquisar discussões em um repositório específico, use o qualificador `repo`.

| Qualificador | Exemplo |
| :- | :- |
| <code>user:<em>USERNAME</em></code> | [**user:octocat feedback**](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions) corresponde às discussões com a palavra "feedback" de repositórios pertencentes a @octocat. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93) corresponde às discussões em repositórios pertencentes à organização GitHub. |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:nodejs/node created:<2021-01-01**](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions) corresponde às discussões do projeto de runtime Node.js de @nodejs que foram criadas antes de janeiro de 2021. |

## Filtrar por visibilidade do repositório

Você pode filtrar o conteúdo pela visibilidade do repositório que contém as discussões usando o qualificador `is`. Para obter mais informações, confira "[Sobre os repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

| Qualificador | Exemplo | :- | :- | {% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Discussions) corresponde às discussões em repositórios públicos.{% endif %}{% ifversion ghec %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Discussions) corresponde às discussões em repositórios internos.{% endif %} | `is:private` | [**is:private tiramisu**](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions) corresponde às discussões que contêm a palavra "tiramisu" em repositórios privados que você pode acessar.

## Pesquisar por autor

O qualificador `author` encontra as discussões criadas por um usuário específico.

| Qualificador | Exemplo |
| :- | :- |
| <code>author:<em>USERNAME</em></code> | [**cool author:octocat**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) corresponde às discussões com a palavra "cool" que foram criadas por @octocat. |
| | [**bootstrap in:body author:octocat**](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions) corresponde às discussões criadas por @octocat que contêm a palavra "bootstrap" no corpo. |

## Pesquisar por autor do comentário

O qualificador `commenter` encontra as discussões que contêm um comentário de um usuário específico.

| Qualificador | Exemplo |
| :- | :- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:becca org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions) corresponde às discussões em repositórios pertencentes ao GitHub que contêm a palavra "github" e que têm um comentário de @becca.

## Procurar por um usuário envolvido em uma discussão

Use o qualificador `involves` para encontrar discussões que envolvam um usuário específico. O qualificador retorna discussões que ou foram criadas por um determinado usuário, menciona o usuário, ou contém comentários feitos pelo usuário. O qualificador `involves` é um OR lógico entre os qualificadores `author`, `mentions` e `commenter` para um só usuário.

| Qualificador | Exemplo |
| :- | :- |
| <code>involves:<em>USERNAME</em></code> | **[involves:becca involves:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions)** corresponde às discussões em que @becca e @octocat estão envolvidos.
| | [**NOT beta in:body involves:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions) corresponde às discussões em que @becca está envolvido e que não contêm a palavra "beta" no corpo.

## Pesquisar por número de comentários

Use o qualificador `comments` com os qualificadores maior que, menor que e intervalo para fazer a pesquisa pelo número de comentários. Para obter mais informações, confira "[Noções básicas sobre a sintaxe de pesquisa](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualificador | Exemplo |
| :- | :- |
| <code>comments:<em>n</em></code> | [**comments:&gt;100**](https://github.com/search?q=comments%3A%3E100&type=Discussions) corresponde às discussões com mais de 100 comentários.
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Discussions) corresponde às discussões com comentários que variam de 500 a mil.

## Procurar por quando uma discussão foi criada ou quando foi atualizada por último

Você pode filtrar discussões com base no tempo de criação, ou quando a discussão foi atualizada pela última vez. Para a criação da discussão, use o qualificador `created`. Para descobrir quando uma discussão foi atualizada pela última vez, use o qualificador `updated`.

Ambos os qualificadores tomam uma data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificador | Exemplo |
| :- | :- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:>2020-11-15**](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions) corresponde às discussões criadas após 15 de novembro de 2020.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2020-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions) corresponde às discussões com a palavra "weird" no corpo que foram atualizadas após dezembro de 2020.

## Leitura adicional

- "[Como classificar os resultados da pesquisa](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
