---
title: Deslocamento com paginação
intro: Explore como usar a paginação para gerenciar as suas respostas com alguns exemplos usando a API de pesquisa.
redirect_from:
  - /guides/traversing-with-pagination/
  - /v3/guides/traversing-with-pagination
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



A API de {% data variables.product.product_name %} fornece uma grande quantidade de informações para os desenvolvedores consumirem. Na maioria das vezes, você pode até achar que está pedindo _muita_ informação, e, para manter nossos servidores satisfeitos, a API irá automaticamente [paginar os itens solicitados][pagination].

Neste guia, vamos fazer algumas chamadas para a API de pesquisa do {% data variables.product.product_name %} e iterar sobre os resultados usando a paginação. Você pode encontrar o código-fonte completo para este projeto no repositório de [platform-samples][platform samples].

### Fundamentos da paginação

Para começar, é importante conhecer alguns fatos sobre o recebimento de itens paginados:

1. Diferentes chamadas de API respondem com diferentes padrões. Por exemplo, uma chamada para [Listar repositórios públicos](/v3/repos/#list-public-repositories) fornece itens paginados em conjuntos de 30, enquanto uma chamada para a API de Pesquisa do GitHub fornece itens em conjuntos de 100
2. Você pode especificar quantos itens receber (até um máximo de 100); mas
3. Por razões técnicas, nem todos os pontos de referência comportam-se da mesma forma. Por exemplo, os [eventos](/v3/activity/events/) não permitirão que você defina um máximo de itens a receber. Leia a documentação sobre como lidar com resultados paginados para pontos de extremidade específicos.

As informações sobre paginação são fornecidas no [cabeçalho do link](http://tools.ietf.org/html/rfc5988) de uma chamada de API. Por exemplo, vamos fazer uma solicitação de curl para a API de pesquisa, para descobrir quantas vezes os projetos da Mozilla usam a frase `addClass`:

```shell
$ curl -I "{% data variables.product.api_url_pre %}/search/code?q=addClass+user:mozilla"
```

O parâmetro `-I` indica que só nos importamos com os cabeçalhos, não com o conteúdo real. Ao examinar o resultado, você notará algumas informações no cabeçalho do link que se parecem com isso:

    Link: <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=2>; rel="next",
      <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=34>; rel="last"

Vamos explicar isso. `rel="next"` diz que a próxima página é `page=2`. Isto faz sentido, pois, por padrão, todas as consultas paginadas iniciam na página `1.` e `rel="última"` fornece mais algumas informações, afirmando que a última página com resultados está na página `34`. Assim, temos mais 33 páginas de informações sobre o `addClass` que podemos consumir. Ótimo!

**Sempre** depende destas relações de link fornecidas a você. Não tente adivinhar nem construir a sua própria URL.

#### Navegando pelas páginas

Agora que você sabe quantas páginas há para receber, você pode começar a navegar pelas páginas para consumir os resultados. Você pode fazer isso passando o parâmetro </code>página`. Por padrão, a <code>página` sempre começa em `1`. Vamos pular para a página 14 e ver o que acontece:

```shell
$ curl -I "{% data variables.product.api_url_pre %}/search/code?q=addClass+user:mozilla&page=14"
```

Aqui está o cabeçalho do link mais uma vez:

    Link: <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

Como esperado, `rel="next"` está em 15 e `rel="last"` ainda está em 34. Mas agora temos mais informações: `rel="first"` indica a URL para a _primeira_ página e, mais importante, `rel="prev"` informa o número da página anterior. Ao usar essas informações, você pode construir uma interface de usuário que permite que esses pulem entre a lista de resultados primeira, anterior ou seguinte em uma chamada de API.

#### Alterar o número de itens recebidos

Ao passar o parâmetro `per_page`, você pode especificar quantos itens você deseja que cada página retorne, até o limite de 100 itens. Vamos tentar pedir 50 itens sobre `addClass`:

```shell
$ curl -I "{% data variables.product.api_url_pre %}/search/code?q=addClass+user:mozilla&per_page=50"
```

Observe o que ele faz com a resposta do cabeçalho:

    Link: <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

Como você deve ter imaginado, as informações `rel="last"` dizem que a última página agora é a 20. Isso ocorre porque estamos pedindo mais informações por página sobre os nossos resultados.

### Consumir informações

Você não deseja fazer chamadas de curl de nível baixo apenas para poder trabalhar com a paginação. Portanto, vamos escrever um pequeno script de Ruby que faz tudo o que descrevemos acima.

Como sempre, primeiro solicitaremos que a biblioteca do Ruby [Octokit.rb do GitHub][octokit.rb] e passaremos nosso [token de acesso pessoal][personal token]:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

Em seguida, executaremos a pesquisa, usando o método `search_code` do Octokit. Ao contrário de usar `curl`, também podemos recuperar imediatamente o número de resultados. Portanto, vamos fazer isso:

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

Agora, vamos pegar o número da última página, de forma similar à informação `page=34>; rel="last"` no cabeçalho do link. O Octokit.rb é compatível com as informações de paginação através de uma implementação chamada "[Relações de link de hipermídia][hypermedia-relations]." Não vamos entrar em detalhes sobre o que isso é, mas basta dizer cada elemento na variável `resultados` tem um hash chamado `rels`, que pode conter informações sobre `:next`, `:last`, `:first` e `:prev`, dependendo do resultado em que você está. Essas relações também contêm informações sobre a URL resultante, chamando `rels[:last].href`.

Sabendo disso, vamos pegar o número de página do último resultado e apresentar todas essas informações para o usuário:

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Finalmente, vamos iterar entre os resultados. Você poderia fazer isso com um loop `for i in 1..number_of_pages.to_i`, mas, em vez disso, vamos seguir os cabeçalhos `rels[:next]` para recuperar informações de cada página. Por uma questão de simplicidade, vamos apenas pegar o caminho do arquivo do primeiro resultado de cada página. Para fazer isso, precisaremos de um loop; e, no final de cada loop, recuperaremos os dados definidos para a próxima página seguindo as informações `rels[:next]`. O loop irá terminar quando não houver informações de `rels[:next]` para consumir (em outras palavras, quando estivermos em `rels[:last]`). Pode parecer como isso:

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

Alterar o número de itens por página é extremamente simples com Octokit.rb. Simplesmente passe um hash de opções `per_page` para a construção inicial do cliente. Depois disso, seu código deverá permanecer intacto:

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

### Construir links de paginação

Normalmente, com a paginação, seu objetivo não é concatenar todos os resultados possíveis, mas produzir um conjunto de navegação, como esse:

![Amostra dos links de paginação](/assets/images/pagination_sample.png)

Vamos esboçar uma microversão do que isso poderia implicar.

A partir do código acima, já sabemos que podemos obter o `number_of_pages` nos resultados paginados da primeira chamada:

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

Agora que temos um número de página, podemos usar o Octokit para recuperar explicitamente essa página individual, passando a opção `:page`:

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

Se quiséssemos ser elegantes, também poderíamos pegar as páginas anterior e as próximas, para gerar links dos elementos anterior (`<<`) e posterior (`>>`):

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[pagination]: /v3/#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination
