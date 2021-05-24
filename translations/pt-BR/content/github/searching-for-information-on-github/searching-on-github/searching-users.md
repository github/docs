---
title: Pesquisar usuários
intro: 'Você pode pesquisar usuários no {% data variables.product.product_name %} e limitar os resultados usando qualquer combinação dos qualificadores da pesquisa de usuário.'
redirect_from:
  - /articles/searching-users
  - /github/searching-for-information-on-github/searching-users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---
Você pode pesquisar usuários globalmente no {% data variables.product.product_name %}. Para obter mais informações, consulte "[Sobre pesquisar no {% data variables.product.company_short %}](/articles/about-searching-on-github)".

{% data reusables.search.syntax_tips %}

### Pesquisar somente usuários ou organizações

Por padrão, a pesquisa de usuários retorna pessoas e organizações. No entanto, você pode usar o qualificador `type` para restringir os resultados a contas pessoais ou organizações.

| Qualifier   | Exemplo                                                                                                                                                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:user` | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) identifica as contas pessoais com nome "mike" que foram criadas antes de 2011. |
| `type:org`  | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) identifica as organizações com a palavra "data" no e-mail.                                                                        |

### Pesquisar por nome da conta, nome completo ou e-mail público

Você pode restringir a pesquisa ao nome da conta da organização ou ao usuário pessoal com os qualificadores `user` ou `org`.

Com o qualificador `in`, você pode restringir a pesquisa ao nome de usuário (`login`), nome completo, e-mail público e qualquer combinação desses itens. Quando você omite esse qualificador, somente o nome de usuário e o endereço de e-mail são pesquisados. Por questão de privacidade, não é possível pesquisar pelo nome do domínio do e-mail.

| Qualifier                     | Exemplo                                                                                                                                                                                                                 |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user:name`                   | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) identifica o usuário com o nome de usuário "octocat".                                                                                         |
| `org:name`                    | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) identifica o nome da conta da organização Electron.                                                                   |
| `in:login`                    | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) identifica os usuários com a palavra "kenya" no nome de usuário.                                                                          |
| `in:name`                     | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) identifica os usuários cujo nome real contém a palavra "bolton".                                                                      |
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) identifica o usuário com o nome completo "Nat Friedman". Observação: esse qualificador de pesquisa considera o espaçamento. |
| `in:email`                    | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) identifica os usuários com a palavra "data" no e-mail.                                                                       |

### Pesquisar por número de repositórios do usuário

Você pode filtrar usuários com base no número de repositórios usando o qualificador `repos` e os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax).

| Qualifier                 | Exemplo                                                                                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) corresponde a usuários cujo número de repositórios é superior a 9.000.                                                |
|                           | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) identifica os usuários com a palavra "bert" no nome de usuário ou nome real que têm entre 10 e 30 repositório. |

### Pesquisar por local

Você pode pesquisar usuários pelo local indicado no perfil dele.

| Qualifier                 | Exemplo                                                                                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>location:<em>LOCATION</em></code> | [**repos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) identifica os usuários com exatamente 1 repositório que moram na Islândia. |

### Pesquisar por linguagem do repositório

Com o qualificador `language`, você pode pesquisar usuários com base na linguagem dos repositórios deles.

| Qualifier                 | Exemplo                                                                                                                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) identificar os usuários na Russia com a maior parte dos repositórios escritos em JavaScript.            |
|                           | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) identificar os usuários com repositórios em JavaScript cujo nome completo contém a palavra "jenny". |

### Pesquisar por data de criação da conta de usuário

Você pode filtrar usuários com base na data de ingresso no {% data variables.product.product_name %} com o qualificador `created`. Esse qualificador usa uma data como parâmetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                 | Exemplo                                                                                                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) corresponde a usuários que juntaram-se antes de 2011.                                                                                                  |
|                           | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) corresponde a usuários que juntaram-se em ou após 11 de maio de 2013.                                                                              |
|                           | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) identifica os usuários de Londres que ingressaram em 6 de março de 2013.                                                 |
|                           | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) identifica os usuários que ingressaram entre 2010 e 2011 com a palavra "john" no nome de usuário. |

### Pesquisar por número de seguidores

Você pode filtrar usuários com base no número de seguidores usando o qualificador `followers` com os [qualificadores maior que, menor que e intervalo](/articles/understanding-the-search-syntax).

| Qualifier                 | Exemplo                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) corresponde a usuários com 1.000 seguidores ou mais.                                    |
|                           | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) identifica os usuários com 1 a 10 seguidores com a palavra "sparkle" no nome. |

### Leia mais

- "[Ordenar os resultados da pesquisa](/articles/sorting-search-results/)"
