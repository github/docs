---
title: Pesquisar discussões
intro: 'Você pode pesquisar discussões em {% data variables.product.product_name %} e limitar os resultados usando os qualificadores de busca.'
versions:
  free-pro-team: '*'
topics:
  - pesquisa do github
---

{% data reusables.discussions.beta %}

### Sobre a pesquisa de discussões

É possível pesquisar discussões globalmente em todos os {% data variables.product.product_name %} ou pesquisar discussões dentro de uma determinada organização ou repositório. Para obter mais informações, consulte "[Sobre a pesquisa no {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github)".

{% data reusables.search.syntax_tips %}

### Pesquisar por título, texto ou comentários

Com o qualificador `in`, você pode restringir sua pesquisa por discussões sobre título, texto ou comentários. Você também pode combinar os qualificadores para pesquisar uma combinação de título, texto ou comentários. Ao omitir o qualificador `in` qualificador, {% data variables.product.product_name %} irá pesquisar o título, o texto e os comentários.

| Qualifier     | Exemplo                                                                                                                                                          |
|:------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:title`    | [**welcome in:title**](https://github.com/search?q=welcome+in%3Atitle&type=Discussions) corresponde discussões ao título "welcome".                              |
| `in:body`     | [**onboard in:title,body**](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions) corresponde discussões com "onboard" no título ou texto.     |
| `in:comments` | [**thanks in:comments**](https://github.com/search?q=thanks+in%3Acomment&type=Discussions) corresponde discussões com "thanks" nos comentários para a discussão. |

### Pesquisar nos repositórios de um usuário ou uma organização

Para pesquisar discussões em todos os repositórios pertencentes a um determinado usuário ou organização, você pode usar o qualificador `usuário` ou `org`. Para pesquisar discussões em um repositório específico, você pode usar o qualificador `repositório`.

| Qualifier                 | Exemplo                                                                                                                                                                                                                                              |
|:------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:octocat feedback**](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions) corresponde discussões com a palavra "feedback" dos repositórios pertencentes ao @octocat.                                                         |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93) corresponde discussões em repositórios pertencentes à organização do GitHub.                                                                              |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:nodejs/node created:<2021-01-01**](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions) corresponde discussões do projeto do tempo de execução do Node.js do @nodejs criadas antes de janeiro de 2021. |

### Filtrar por visibilidade do repositório

Você pode filtrar pela visibilidade do repositório que contém as discussões que usam o qualificador `is`. Para obter mais informações, consulte "[Sobre a visibilidade do repositório](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

| Qualificador | Exemplo | :- | :- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Discussions) corresponde discussões em repositórios públicos.{% endif %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Discussions) corresponde discussões em repositórios internos. | `is:private` | [**is:private tiramisu**](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions) corresponde discussões que contêm a palavra "tiramisu" em repositórios que você pode acessar.

### Pesquisar por autor

O qualificador do `autor` encontra discussões criadas por um determinado usuário.

| Qualifier                 | Exemplo                                                                                                                                                                                                            |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>author:<em>USERNAME</em></code> | [**cool author:octocat**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) corresponde a discussões com a palavra "cool" criadas por @octocat.                                                  |
|                           | [**bootstrap in:body author:octocat**](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions) corresponde a discussões criadas por @octocat que contêm a palavra "bootstrap" no texto. |

### Pesquisar por autor do comentário

O qualificador `commenter` encontra discussões que contêm um comentário de um usuário específico.

| Qualifier                 | Exemplo                                                                                                                                                                                                                                                                       |
|:------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:becca org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions) corresponde às discussões em repositórios pertencentes ao GitHub, que contêm a palavra "github" e que têm um comentário de @becca. |

### Procurar por um usuário envolvido em uma discussão

Você pode usar o qualificador `envolve` para encontrar discussões que envolvam um determinado usuário. O qualificador retorna discussões que ou foram criadas por um determinado usuário, menciona o usuário, ou contém comentários feitos pelo usuário. O qualificador `involves` é um operador lógico OU entre os qualificadores `autor`, `mentions` e `commenter` para um único usuário.

| Qualifier                 | Exemplo                                                                                                                                                                                           |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>involves:<em>USERNAME</em></code> | **[envolves:becca envolve:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions)** corresponde às discussões em que @becca ou @octocat estão envolvidos.      |
|                           | [**NOT beta in:body involves:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions) corresponde a discussões @becca que não contêm a palavra "beta" no texto. |

### Pesquisar por número de comentários

Você pode usar o qualificador `comments` com os qualificadores maior que, menor que e intervalo para pesquisar pelo número de comentários. Para obter mais informações, consulte "[Entender a sintaxe de pesquisa](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualifier                 | Exemplo                                                                                                                                                         |
|:------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>comments:<em>n</em></code> | [**comments:&gt;100**](https://github.com/search?q=comments%3A%3E100&type=Discussions) corresponde a discussões com mais de 100 comentários.              |
|                           | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Discussions) corresponde a discussões com comentários que variam de 500 a 1.000. |

### Pesquisar por número de interações

Você pode filtrar discussões pelo número de interações com o qualificador de `interações` com os qualificadores maior que, menor que e intervalo. A contagem das interações é o número de reações e comentários em uma discussão. Para obter mais informações, consulte "[Entender a sintaxe de pesquisa](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualifier                 | Exemplo                                                                                                                                               |
|:------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) corresponde a discussões com mais de 2.000 interações.     |
|                           | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) corresponde a discussões com interações que variam de 500 a 1.000. |

### Pesquisar por número de reações

Você pode filtrar discussões pelo número de reações usando o qualificador de `reações`, junto os qualificadores maior que, menor que e de intervalo. Para obter mais informações, consulte "[Entender a sintaxe de pesquisa](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualifier                 | Exemplo                                                                                                                               |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------- |
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E500) corresponde a discussões com mais de 500 reações. |
|                           | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) corresponde a discussões com 500 a 1.000 reações.        |

### Procurar por quando uma discussão foi criada ou quando foi atualizada por último

Você pode filtrar discussões com base no tempo de criação, ou quando a discussão foi atualizada pela última vez. Para a criação de discussões, você pode usar o qualificador `criado`; para saber quando uma discussão foi atualizada pela última vez, use o qualificador `atualizada`.

Ambos os qualificadores tomam uma data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                  | Exemplo                                                                                                                                                                                                                                |
|:-------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code>  | [**created:>2020-11-15**](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions) corresponde a discussões que foram criadas após 15 de novembro de 2020.                                                             |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2020-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions) corresponde a discussões com a palavra "weird" no texto que foram atualizadas após dezembro de 2020. |

### Leia mais

- "[Ordenar os resultados da pesquisa](/articles/sorting-search-results/)"
