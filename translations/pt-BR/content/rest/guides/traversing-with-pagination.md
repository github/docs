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
ms.openlocfilehash: be0e961847e187b72848eda558636fe3ecb800bd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126758'
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

Informações sobre paginação são fornecidas no [cabeçalho Link](https://datatracker.ietf.org/doc/html/rfc5988) de uma chamada à API. Por exemplo, vamos fazer uma solicitação do cURL à API de pesquisa para descobrir quantas vezes os projetos da Mozilla usam a frase `addClass`:

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla"
```

O parâmetro `-I` indica que só nos importamos com os cabeçalhos, não com o conteúdo real. Ao examinar o resultado, você notará algumas informações no cabeçalho
Link parecidas com estas:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last"

Vamos explicar isso. `rel="next"` indica que a próxima página é `page=2`. Isso faz sentido, pois, por padrão, todas as consultas paginadas começam na página `1.` `rel="last"` fornece mais informações, indicando que a última página de resultados está na página `34`.
Assim, temos mais 33 páginas de informações sobre o `addClass` que podemos consumir.
Ótimo!

**Sempre** confie nessas relações de vínculo fornecidas a você. Não tente adivinhar nem construir a sua própria URL.

### Navegando pelas páginas

Agora que você sabe quantas páginas há para receber, comece a navegar por elas para consumir os resultados. Faça isso transmitindo um parâmetro `page`. Por padrão, `page` sempre começa em `1`. Vamos pular para a página 14 e ver o que acontece:

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

Aqui está o cabeçalho do link mais uma vez:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

Como esperado, `rel="next"` está em 15, e `rel="last"` ainda é 34. Mas agora temos mais informações: `rel="first"` indica a URL da _primeira_ página e o mais importante: `rel="prev"` informa o número da página anterior. Ao usar essas informações, você pode construir uma interface do usuário que permite que os usuários pulem entre a primeira, a anterior, a seguinte ou a última lista de resultados em uma chamada à API.

### Alterar o número de itens recebidos

Ao transmitir o parâmetro `per_page`, você pode especificar quantos itens deseja retornar em cada página, até o limite de 100 itens. Vamos experimentar solicitar 50 itens sobre `addClass`:

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

Observe o que ele faz com a resposta do cabeçalho:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

Como você deve ter imaginado, as informações de `rel="last"` indicam que a última página agora é a 20. Isso ocorre porque estamos solicitando mais informações por página sobre os resultados.

## Consumir informações

Você não deseja fazer chamadas de baixo nível ao cURL apenas para trabalhar com a paginação. Portanto, vamos escrever um pequeno script do Ruby que faz tudo o que descrevemos acima.

Como sempre, primeiro, precisaremos da [biblioteca Octokit.rb do Ruby do GitHub][octokit.rb] e transmitiremos nosso [token de acesso pessoal][personal token]:

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
