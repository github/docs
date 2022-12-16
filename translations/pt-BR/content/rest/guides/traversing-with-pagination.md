---
title: Deslocamento com paginação
intro: Explore como usar a paginação para gerenciar as suas respostas com alguns exemplos usando a API de pesquisa.
redirect_from:
- /guides/traversing-with-pagination
- /v3/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- API
shortTitle: Traverse with pagination
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 92173dffdf2c50bdcd2b10fa42ef634683a3e149
ms.sourcegitcommit: d1d7ccc513192fdd0fc27bb49dc9c85108119b91
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/21/2022
ms.locfileid: "148179526"
---
A {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API fornece uma vasta riqueza de informações para os desenvolvedores consumirem.
Na maioria das vezes, você poderá até descobrir que está solicitando _muita_ informação e, para manter nossos servidores satisfeitos, a API [paginará automaticamente os itens solicitados](/rest/overview/resources-in-the-rest-api#pagination).

Neste guia, faremos algumas chamadas à API de Pesquisa e iterar nos resultados usando a paginação. Encontre o código-fonte completo deste projeto no repositório [platform-samples][platform samples].

{% data reusables.rest-api.dotcom-only-guide-note %}



## Fundamentos da paginação

Para começar, é importante conhecer alguns fatos sobre o recebimento de itens paginados:


1. Diferentes chamadas de API respondem com diferentes padrões. Por exemplo, uma chamada a [Listar repositórios públicos](/rest/reference/repos#list-public-repositories) fornece itens paginados em conjuntos de 30, enquanto uma chamada à API de Pesquisa do GitHub fornece itens em conjuntos de 100
2. Você pode especificar quantos itens receber (até um máximo de 100); mas
3. Por razões técnicas, nem todos os pontos de referência comportam-se da mesma forma. Por exemplo, os [eventos](/rest/reference/activity#events) não permitirão que você defina um número máximo para os itens a serem recebidos.
Leia a documentação sobre como lidar com resultados paginados para pontos de extremidade específicos.

{% note %}

**Observação**: conte sempre com as URLs incluídas no cabeçalho do link. Não tente adivinhar nem construir URLs.

{% endnote %}


### Cabeçalho do link

O cabeçalho de resposta inclui informações sobre paginação. Para obter mais informações sobre cabeçalhos, confira "[Introdução à API REST](/rest/guides/getting-started-with-the-rest-api#about-the-response-code-and-headers)". Para obter o cabeçalho de resposta, inclua o sinalizador `-I` em sua solicitação. Por exemplo:

```shell 
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"   https://api.github.com/enterprises/advacado-corp/audit-log

```

O sinalizador `-I` retorna apenas o cabeçalho de resposta. Se a resposta for paginada, o cabeçalho de resposta incluirá um cabeçalho `link`. O cabeçalho se parecerá com o seguinte:

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=>; rel="next"
```

ou

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```
### Tipos de paginação

A API do {% data variables.product.company_short %} usa dois métodos de paginação: paginação baseada em página e paginação baseada em cursor. Se o cabeçalho `link` incluir `page`, a operação usará paginação baseada em página. Se o cabeçalho `link` incluir `before` e `after`, a operação usará paginação baseada em cursor.


#### Paginação baseada em página

O cabeçalho do link para paginação baseada em página fornecerá informações sobre as páginas anteriores, seguintes e as primeiras e últimas páginas. Se você não solicitou uma página específica, a resposta será o padrão para a primeira página e as informações sobre a primeira página e as anteriores serão omitidas.

Por exemplo, para uma solicitação que não especificou uma página, esse cabeçalho afirma que a página seguinte é `2` e a última página é `511`.

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```

Por exemplo, para uma solicitação que especificou a página cinco, esse cabeçalho afirma que a página anterior é `4`, a página seguinte é `6`, a última página é `511` e a primeira página é `1`.

```
link: <https://api.github.com/repositories/1300192/issues?page=4>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=6>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

#### Paginação baseada em cursor

A paginação por cursor usa os termos `before` e `after` para navegar pelas páginas. `rel="next"` e `rel="prev"` marcam o ponto do cursor no conjunto de dados e fornecem uma referência para percorrer a página `before` e `after` da página atual.  

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next",
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

Nesse exemplo, `rel=next` informa que a página seguinte está localizada em:

```
after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```




### Usar paginação

#### Paginação baseada em cursor

O uso da paginação baseada em cursor exige que você use os termos `before` e `after`. Para navegar usando `before` e `after`, copie o cabeçalho de link gerado acima em sua solicitação curl:

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```

O exemplo acima gerará uma página de resultados e novas informações de cabeçalho que você poderá usar para fazer a próxima solicitação. `rel="next"` fornece a próxima página de resultados. `rel="prev"` fornece a página de resultados anterior. A parte importante da saída aqui é que o cabeçalho do link precisa ser gerado, em vez de inserido manualmente. Copie o link inteiro da saída a seguir.

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

Ao contrário da paginação baseada em página, os resultados não retornarão o último número de página na resposta.

    link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
    
Como a paginação baseada em cursor cria um ponto de referência no conjunto de dados, ela não pode calcular o número total de resultados.


#### Paginação baseada em página

Para navegar usando a paginação baseada em página, transmita um parâmetro `page`. Por padrão, `page` sempre começa em `1`. No exemplo a seguir, fizemos uma solicitação curl para os projetos Mozilla da API de pesquisa usarem a expressão `addClass`. Em vez de começar em 1, vamos pular para a página 14. 

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

Aqui está um trecho do cabeçalho do link na solicitação HTTP:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

Nesse exemplo, `rel="next"` está em 15 e `rel="last"` em 34. Mas agora temos mais informações: `rel="first"` indica a URL da _primeira_ página e o mais importante: `rel="prev"` informa o número da página anterior. Ao usar essas informações, você pode construir uma interface do usuário que permite que os usuários pulem entre a primeira, a anterior, a seguinte ou a última lista de resultados em uma chamada à API.


### Alterar o número de itens recebidos

#### Paginação baseada em página

Ao transmitir o parâmetro `per_page`, você pode especificar quantos itens deseja retornar em cada página, até o limite de 100 itens. Vamos experimentar solicitar 50 itens sobre `addClass`:

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

Observe o que ele faz com a resposta do cabeçalho:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

Como você deve ter imaginado, as informações de `rel="last"` indicam que a última página agora é a 20. Isso ocorre porque estamos solicitando mais informações por página sobre os resultados.

#### Paginação baseada em cursor

Você também pode transmitir o parâmetro `per_page` para paginação baseada em cursor. 

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=&per_page=50
```

## Consumir informações

Você não deseja fazer chamadas de baixo nível ao cURL apenas para trabalhar com a paginação. Portanto, vamos escrever um pequeno script do Ruby que faz tudo o que descrevemos acima.

Como sempre, precisaremos primeiro da biblioteca [Octokit.rb do Ruby do GitHub][octokit.rb] e transmitiremos nosso [{% data variables.product.pat_generic %}][personal token]:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

Em seguida, executaremos a pesquisa usando o método `search_code` do Octokit. Ao contrário do uso do `curl`, também podemos recuperar imediatamente o número de resultados. Portanto, vamos fazer isso:

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

Agora, vamos usar o número da última página, de maneira similar as informações de `page=34>; rel="last"` no cabeçalho Link. O Octokit.rb dá suporte a informações de paginação por meio de uma implementação chamada "[Relações de vínculo de hipermídia][hypermedia-relations]".
Não entraremos em detalhes sobre o que ela é, mas basta dizer que cada elemento na variável `results` tem um hash chamado `rels`, que pode conter informações sobre `:next`, `:last`, `:first` e `:prev`, dependendo do resultado em que você está. Essas relações também contêm informações sobre a URL resultante, pela chamada a `rels[:last].href`.

Sabendo disso, vamos usar o número de página do último resultado e apresentar todas essas informações ao usuário:

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Finalmente, vamos iterar entre os resultados. Você pode fazer isso com um loop `for i in 1..number_of_pages.to_i`, mas vamos seguir os cabeçalhos `rels[:next]` para recuperar as informações de cada página. Para simplificar, vamos apenas usar o caminho do arquivo do primeiro resultado de cada página. Para fazer isso, precisaremos de um loop, e, no final de cada loop, recuperaremos o conjunto de dados da próxima página seguindo as informações de `rels[:next]`.
O loop será concluído quando não houver informações de `rels[:next]` a serem consumidas (em outras palavras, estivermos em `rels[:last]`). Poderá ser semelhante ao seguinte:

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

Alterar o número de itens por página é extremamente simples com Octokit.rb. Basta transmitir um hash de opções `per_page` para a construção inicial do cliente. Depois disso, o código permanecerá intacto:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla', :per_page => 100)
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

## Construir links de paginação

Normalmente, com a paginação, sua meta não é concatenar todos os resultados possíveis, mas produzir um conjunto de navegação, como este:

![Amostra dos links de paginação](/assets/images/pagination_sample.png)

Vamos esboçar uma microversão do que isso poderia implicar.

Com base no código acima, já sabemos que podemos obter o `number_of_pages` nos resultados paginados com a primeira chamada:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla')
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

A partir daí, podemos construir uma linda representação em ASCII das caixas numéricas:
``` ruby
numbers = ""
for i in 1..number_of_pages.to_i
  numbers << "[#{i}] "
end
puts numbers
```

Vamos simular um usuário clicando em uma dessas caixas, construindo um número aleatório:

``` ruby
random_page = Random.new
random_page = random_page.rand(1..number_of_pages.to_i)

puts "A User appeared, and clicked number #{random_page}!"
```

Agora que temos um número de página, podemos usar o Octokit para recuperar explicitamente essa página individual transmitindo a opção `:page`:

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

Caso desejemos incrementar um pouco, também podemos usar as páginas anterior e a próxima a fim de gerar links para os elementos anterior (`<<`) e posterior (`>>`):

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination
[listing commits]: /rest/reference/commits#list-commits
