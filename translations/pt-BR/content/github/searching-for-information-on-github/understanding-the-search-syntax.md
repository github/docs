---
title: Entender a sintaxe de pesquisa
intro: 'Durante a pesquisa no {% data variables.product.product_name %}, é possível criar consultas que correspondam a palavras e números específicos.'
redirect_from:
  - /articles/search-syntax/
  - /articles/understanding-the-search-syntax
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Consultar por valores maiores ou menores que outro valor

Você pode usar `>`, `>=`, `<` e `<=` para pesquisar valores que sejam maiores, maiores ou iguais, menores e menores ou iguais a outro valor.

| Consulta                  | Exemplo                                                                                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** corresponde a repositórios com a palavra "cats" com mais de 1000 estrelas.    |
| <code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** corresponde a repositórios com a palavra "cats" com 5 ou mais tópicos.        |
| <code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** corresponde ao código com a palavra "cats" nos arquivos com tamanho inferior a 10 KB. |
| <code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** corresponde a repositórios com a palavra "cats" com 50 estrelas ou menos.     |

Você também pode usar [consultas de intervalo](#query-for-values-between-a-range) para pesquisar valores que são maiores ou iguais ou menores ou iguais a outro valor.

| Consulta                  | Exemplo                                                                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code><em>n</em>..*</code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** é equivalente a `stars:>=10` e corresponde a repositórios com a palavra "cats" que têm até 10 estrelas.       |
| <code>*..<em>n</em></code> | **[cats stars:*..10](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories)** é equivalente a `stars:<=10` e corresponde a repositórios com a palavra "cats" que têm até 10 estrelas. |

### Consultar por valores dentro de um intervalo

Você pode usar a sintaxe de intervalo <code><em>n</em>..<em>n</em></code> para pesquisar valores dentro de um intervalo, em que o primeiro número _n_ é o valor mais baixo e o segundo é o valor mais alto.

| Consulta                  | Exemplo                                                                                                                                                                                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><em>n</em>..<em>n</em></code> | **[cats stars:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** corresponde a repositórios com a palavra "cats" que têm entre 10 e 50 estrelas. |

### Consultar por datas

Você pode usar `>`, `>=`, `<`, `<=` e [consultas de intervalo](#query-for-values-between-a-range) para pesquisar por datas anteriores ou posteriores a outra data ou que se enquadram em um intervalo de datas. {% data reusables.time_date.date_format %}

| Consulta                   | Exemplo                                                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>><em>YYYY</em>-<em>MM</em>-<em>DD</em></code>  | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** corresponde a problemas com a palavra "cats" que foram criados após 29 de abril de 2016.                                                 |
| <code>>=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code>  | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** corresponde a problemas com a palavra "cats" que foram criados a partir de 1 de abril de 2017.                                       |
| <code><<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** corresponde ao código com a palavra "cats" em repositórios que foram carregados até 5 de julho de 2012.                                      |
| <code><=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** corresponde a problemas com a palavra "cats" que foram criados em ou antes de 4 de julho de 2012.                                    |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** corresponde a repositórios com a palavra "cats" nos quais foi feito push entre o final de abril e julho de 2016. |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..*</code> | **[cats created:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** corresponde a problemas criados após 30 de abril de 2012 contendo a palavra "cats".                                                    |
| <code>*..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:*..2012-04-30](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** corresponde a problemas criados antes de 4 de julho de 2012 contendo a palavra "cats".                                                 |

{% data reusables.time_date.time_format %}

| Consulta                   | Exemplo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[cats created:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** corresponde a problemas criados entre 01 de janeiro de 2017 à 1h, com uma diferença de fuso horário de `07:00` em relação ao UTC, e 01 de março de 2017 às 15h, com uma diferença de fuso horário de `07:00` em relação ao UTC. com um ajuste de UTC de `07:00` e 1 de março de 2017 às 15h. com um ajuste de UTC de `07:00`. |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code> | **[cats created:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** corresponde a problemas criados entre 21 de março de 2016 às 14h11 e 07 de abril de 2106 às 20h45.                                                                                                                                                                                                                                                        |

### Excluir determinados resultados

Usando a sintaxe `NOT`, é possível excluir resultados contendo uma determinada palavra. O operador `NOT` só pode ser usado para palavras-chave de string. Ele não funciona com numerais ou datas.

| Consulta | Exemplo                                                                                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NOT`    | **[hello NOT world](https://github.com/search?q=hello+NOT+world&type=Repositories)** corresponde a repositórios que têm a palavra "hello", mas não a palavra "world". |

Outra maneira de restringir os resultados da pesquisa é excluir determinados subconjuntos. Adicione um prefixo a qualquer qualificador de pesquisa com um `-` para excluir todos os resultados correspondentes a esse qualificador.

| Consulta                   | Exemplo                                                                                                                                                                                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>-<em>QUALIFIER</em></code> | **[cats stars:>10 -language:javascript](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** corresponde a repositórios com a palavra "cats" com mais de 10 estrelas mas não estão escritos em JavaScript. |
|                            | **[mentions:defunkt -org:github](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** corresponde a problemas mencionando @defunkt que não estão em repositórios na organização do GitHub.               |

### Usar aspas para consultas com espaço em branco

Se a consulta de pesquisa contém espaço em branco, é preciso colocá-lo entre aspas. Por exemplo:

* [cats NOT "hello world"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories) corresponde a repositórios com a palavra "cats", mas não as palavras "hello world".
* [build label:"bug fix"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues) corresponde a problemas com a palavra "build" que têm a etiqueta "bug fix".

Alguns símbolos não alfanuméricos, como espaços, são descartados de consultas de pesquisa de código entre aspas, por isso os resultados podem ser inesperados.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
### Consultas com nomes de usuário

Se sua consulta de pesquisa contiver um qualificador que exige um nome de usuário, como, por exemplo, `usuário`, `ator` ou `responsável`, você poderá usar qualquer nome de usuário de {% data variables.product.product_name %}, para especificar uma pessoa específica ou `@me` para especificar o usuário atual.

| Consulta             | Exemplo                                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits) corresponde a commits criados por @nat                                                                   |
| `QUALIFIER:@me`      | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues) corresponde a problemas atribuídos à pessoa que está visualizando os resultados |

Você só pode usar `@me` com um qualificador e não como termo de pesquisa, como `@me main.workflow`.
{% endif %}
