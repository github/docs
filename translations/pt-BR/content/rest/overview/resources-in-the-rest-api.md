---
title: Recursos na API REST
intro: 'Aprenda a navegar nos recursos fornecidos pela API de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /rest/initialize-the-repo/
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


Isso descreve os recursos que formam a API REST oficial de {% data variables.product.product_name %}. Em caso de problema ou solicitação, entre em contato com {% data variables.contact.contact_support %}.

### Versão atual

Por padrão, todas as solicitações para `{% data variables.product.api_url_code %}` recebem a versão **v3** [](/v3/versions) da API REST. Nós incentivamos que você a [solicite explicitamente esta versão por meio do cabeçalho `Aceitar`](/v3/media/#request-specific-version).

    Accept: application/vnd.github.v3+json

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt '2.9' %}

Para obter informações sobre a API do GraphQL do GitHub, consulte a [documentação v4](/v4). Para obter informações sobre migração para o GraphQL, consulte "[Fazendo a migração do REST](/v4/guides/migrating-from-rest/)".

{% endif %}

### Esquema

{% if currentVersion == "free-pro-team@latest" %}Todo o acesso à API é feito por meio de HTTPS, e{% else %}A API é{% endif %} acessada a partir de `{% data variables.product.api_url_code %}`.  Todos os dados são
enviados e recebidos como JSON.

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/1.1 200 OK
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> Status: 200 OK
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4987
> X-RateLimit-Reset: 1350085394{% if enterpriseServerVersions contains currentVersion %}
> X-GitHub-Enterprise-Version: {{ currentVersion }}.0{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

Os campos em branco são incluídos como `null` em vez de serem omitidos.

Todos os registros de tempo são retornados no formato ISO 8601:

    YYYY-MM-DDTHH:MM:SSZ

Para obter mais informações sobre fusos horários nos registros de tempo, consulte [esta seção](#timezones).

#### Apresentações resumidas

Ao buscar uma lista de recursos, a resposta inclui um _subconjunto_ dos atributos para esse recurso. Esta é a representação "resumo" do recurso. (Alguns atributos são computacionalmente caros para a API fornecer. Por razões de desempenho, a representação resumida exclui esses atributos. Para obter esses atributos, busque a representação "detalhada".)

**Exemplo**: ao receber uma lista de repositórios, você recebe a representação resumida de cada repositório. Aqui, buscamos a lista de repositórios pertencentes a à organização do [octokit](https://github.com/octokit):

    GET /orgs/octokit/repos

#### Representações detalhadas

Ao buscar um recurso individual, a resposta normalmente inclui _todos os_ atributos para esse recurso. Esta é a representação "detalhada" do recurso. (Note que a autorização por vezes influencia o valor de detalhes incluído na representação.)

**Exemplo**: ao receber um repositório individual, você recebe a representação detalhada do repositório. Aqui, nós buscamos o repositório [octokit/octokit.rb](https://github.com/octokit/octokit.rb):

    GET /repos/octokit/octokit.rb

A documentação fornece um exemplo de resposta para cada método da API. O exemplo da resposta ilustra todos os atributos retornados por esse método.

### Autenticação

Existem duas maneiras de efetuar a autenticação através da API v3 de {% data variables.product.product_name %}.  Solicitações que exigem autenticação retornarão `404 Not Found`, em vez de `403 Forbidden`, em alguns lugares.  Isso é para evitar a fuga acidental de repositórios privados para usuários não autorizados.

#### Autenticação básica

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

#### Token do OAuth2 (enviado em um cabeçalho)

```shell
$ curl -H "Authorization: token <em>OAUTH-TOKEN</em>" {% data variables.product.api_url_pre %}
```

{% note %}

Observação: O GitHub recomenda enviar tokens do OAuth usando o cabeçalho de autorização.

{% endnote %}

Leia [mais sobre o OAuth2](/apps/building-oauth-apps/).  Observe que os tokens do OAuth2 podem ser adquiridos usando o [fluxo de aplicação web](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) para aplicativos de produção.

#### OAuth2 key/secret

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

Usar o seu `client_id` e `client_secret` _ não_ autenticam você como usuário. Isso apenas irá identificar o seu aplicativo OAuth para aumentar o seu limite de taxa. As permissões só são concedidas a usuários, não aplicativos, e você só obterá dados que um usuário não autenticado visualizaria. Por este motivo, você só deve usar a chave/segredo OAuth2 em cenários de servidor para servidor. Não compartilhe o segredo do cliente do aplicativo OAuth com os seus usuários.

{% if enterpriseServerVersions contains currentVersion %}
Você não conseguirá efetuar a autenticação usando sua chave e segredo do OAuth2 enquanto estiver no modo privado e essa tentativa de autenticação irá retornar `401 Unauthorized`. Para obter mais informações, consulte "[Habilitar o modo privado](/enterprise/admin/installation/enabling-private-mode)".
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}

Leia [Mais informações sobre limitação da taxa não autenticada](#increasing-the-unauthenticated-rate-limit-for-oauth-applications).

{% endif %}

#### Falha no limite de login

A autenticação com credenciais inválidas retornará `401 Unauthorized`:

```shell
$ curl -i {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/1.1 401 Unauthorized

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/v3"
> }
```

Após detectar várias solicitações com credenciais inválidas em um curto período de tempo, a API rejeitará temporariamente todas as tentativas de autenticação para esse usuário (incluindo aquelas com credenciais válidas) com `403 Forbidden`:

```shell
$ curl -i {% data variables.product.api_url_pre %} -u valid_username:valid_password
> HTTP/1.1 403 Forbidden

> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/v3"
> }
```

### Parâmetros

Muitos métodos de API tomam parâmetros opcionais. Para solicitações tipo `GET`, todos os parâmetros não especificados como um segmento no caminho podem ser passados como um parâmetro de string de consulta de HTTP:

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

Neste exemplo, os valores 'vmg' e 'redcarpet' são fornecidos para os parâmetros `:owner` e `:repo` no caminho enquanto `:state` é passado na string da consulta.

Para solicitações de `POST`, `PATCH`, `PUT`e `EXCLUIR`, os parâmetros não incluídos na URL devem ser codificados como JSON com um Content-Type de 'application/json':

```shell
$ curl -i -u username -d '{"scopes":["public_repo"]}' {% data variables.product.api_url_pre %}/authorizations
```

### Ponto de extremidade raiz

Você pode emitir uma solicitação `GET` para o ponto de extremidade de raiz para obter todas as categorias do ponto de extremidade com a qual a API REST é compatível:

```shell
$ curl {% if enterpriseServerVersions contains currentVersion %}-u <em>username</em>:<em>password</em> {% endif %}{% data variables.product.api_url_pre %}
```

{% if enterpriseServerVersions contains currentVersion %}

{% note %}

**Observação:** Por {% data variables.product.prodname_ghe_server %}, [como em todos os outros pontos de extremidade](/v3/enterprise-admin/#endpoint-urls), você deverá passar seu nome de usuário e senha.

{% endnote %}

{% endif %}

### IDs de nós globais do GraphQL

Consulte o guia em "[Usar IDs do nó globais ](/v4/guides/using-global-node-ids)" para obter informações detalhadas sobre como encontrar `node_id`s através da API REST e usá-los em operações do GraphQL.

### Erros do cliente

Há três tipos possíveis de erros de cliente na chamadas da API que recebem textos:

1. O envio de um JSON inválido resultará em uma resposta </code>400 Bad Request`.</p>

<pre><code> HTTP/1.1 400 Bad Request
 Content-Length: 35

 {"message":"Problems parsing JSON"}
`</pre></li>

2

Enviar o tipo incorreto de valores do JSON resultará em uma resposta `400 Bad
Request`.
  
       HTTP/1.1 400 Bad Request
       Content-Length: 40
      
       {"message":"Body should be a JSON object"}

3

O envio de campos inválidos resultará em uma resposta `422 Unprocessable Entity`.
  
       HTTP/1.1 422 Unprocessable Entity
       Content-Length: 149
      
       {
         "message": "Validation Failed",
         "errors": [
           {
             "resource": "Issue",
             "field": "title",
             "code": "missing_field"
           }
         ]
       }
      </ol>

Todos objetos de erro têm propriedades de recurso e campo para que seu cliente possa dizer qual é o problema.  Também há um código de erro para informar o que há de errado com o campo.  Estes são os possíveis códigos de validação:

| Nome do código de erro | Descrição                                                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `missing`              | Um recurso não existe.                                                                                                                         |
| `missing_field`        | Não foi definido um campo obrigatório em um recurso.                                                                                           |
| `invalid`              | Formatação de um campo é inválida.  Revise a documentação para obter informações mais específicas.                                             |
| `already_exists`       | Outro recurso tem o mesmo valor que este campo.  Isso pode acontecer em recursos que precisam ter alguma chave única (como nomes de etiqueta). |
| `unprocessable`        | As entradas fornecidas eram inválidas.                                                                                                         |

Os recursos também podem enviar erros de validação personalizados (em que o `código` é `personalizado`). Os erros personalizados sempre terão um campo de `mensagem` que descreve o erro e a maioria dos erros também incluirá um campo de `documentation_url` que aponta para algum conteúdo que pode ajudá-lo a resolver o erro.

### Redirecionamentos HTTP

API v3 usa redirecionamento HTTP quando apropriado. Os clientes devem assumir que qualquer solicitação pode resultar em redirecionamento. Receber um redirecionamento de HTTP *não* é um erro e os clientes devem seguir esse redirecionamento. As respostas de redirecionamento terão um campo do cabeçalho do tipo `Localização` que contém o URI do recurso ao qual o cliente deve repetir as solicitações.

| Código de status | Descrição                                                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `301`            | Redirecionamento permanente. O URI que você usou para fazer a solicitação foi substituído pelo especificado no campo do cabeçalho `Localização`. Este e todas as solicitações futuras deste recurso devem ser direcionadas para o novo URI. |
| `302`, `307`     | Redirecionamento temporário. A solicitação deve ser repetida literalmente para o URI especificado no campo de cabeçalho `Localização`, mas os clientes devem continuar a usar o URI original para solicitações futuras.                     |

Outros códigos de status de redirecionamento podem ser usados de acordo com a especificação HTTP 1.1.

### Verbos HTTP

Quando possível, a API v3 se esforça para usar verbos HTTP apropriados para cada ação.

| Verbo    | Descrição                                                                                                                                                                                                                                                                                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `HEAD`   | Pode ser emitido contra qualquer recurso para obter apenas as informações de cabeçalho HTTP.                                                                                                                                                                                                                                                                                |
| `GET`    | Usado para recuperar recursos.                                                                                                                                                                                                                                                                                                                                              |
| `POST`   | Usado para criar recursos.                                                                                                                                                                                                                                                                                                                                                  |
| `PATCH`  | Usado para atualizar recursos com dados parciais do JSON.  Por exemplo, um recurso de um problema tem atributos de `título` e `texto`.  Uma solicitação de PATCH pode aceitar um ou mais dos atributos para atualizar o recurso.  PATCH é um verbo HTTP relativamente novo e incomum. Portanto, os pontos de extremidade de recursos também aceitam solicitações de `POST`. |
| `PUT`    | Usado para substituir recursos ou coleções. Para as solicitações de `PUT` sem atributo de `texto`, certifique-se de definir o cabeçalho `Content-Length` como zero.                                                                                                                                                                                                         |
| `DELETE` | Usado para excluir recursos.                                                                                                                                                                                                                                                                                                                                                |

### Hipermídia

Todos os recursos podem ter uma ou mais propriedades `*_url` vinculando outros recursos.  Estes tem o objetivo de fornecer URLs explícitas para que os clientes API apropriados não precisem construir URLs por conta própria.  É altamente recomendável que os clientes da API os utilizem.  Fazer isso tornará as futuras atualizações da API mais fáceis para os desenvolvedores.  Espera-se que todas as URLs sejam modelos de URI [RFC 6570][rfc] adequados.

Então você pode expandir estes modelos usando algo como o [uri_template][uri] gem:

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"
    
    >> tmpl.expand :all => 1
    => "/notifications?all=1"
    
    >> tmpl.expand :all => 1, :participating => 1
    => "/notifications?all=1&participating=1"

### Paginação

Pedidos que retornam vários itens serão paginados para 30 itens por padrão.  Você pode especificar mais páginas com o parâmetro `?page`. Para alguns recursos, você também pode definir um tamanho de página até 100 com o parâmetro `?per_page`. Observe que, por razões técnicas, nem todos os pontos de extremidade respeitam o parâmetro `?per_page`, veja [eventos](/v3/activity/events/) por exemplo.

```shell
$ curl '{% data variables.product.api_url_pre %}/user/repos?page=2&per_page=100'
```

Observe que a numeração da página é baseada em 1 e que, ao omitir o parâmetro `?page`, retornará a primeira página.

Para obter mais informações sobre paginação, confira nosso guia sobre [Passar com paginação][pagination-guide].

#### Cabeçalho do link

{% note %}

**Observação:** É importante formar chamadas com valores de cabeçalho de link, em vez de construir suas próprias URLs.

{% endnote %}

O [cabeçalho do link](http://tools.ietf.org/html/rfc5988) inclui informações de paginação:

    Link: <{% data variables.product.api_url_code %}/user/repos?page=3&per_page=100>; rel="next",
      <{% data variables.product.api_url_code %}/user/repos?page=50&per_page=100>; rel="last"

_O exemplo inclui uma quebra de linha para legibilidade._

Este `Link` de resposta contém um ou mais links de relações de [hipermídia](/v3/#hypermedia), alguns dos quais podem exigir expansão como [modelos de URI](http://tools.ietf.org/html/rfc6570).

Os valores de `rel` possíveis são:

| Nome      | Descrição                                                        |
| --------- | ---------------------------------------------------------------- |
| `avançar` | A relação de link para a próxima página de resultados.           |
| `last`    | A relação de link para a última página de resultados.            |
| `first`   | A relação de link para a primeira página de resultados.          |
| `prev`    | A relação de link para a página de resultados anterior imediata. |

### Limite de taxa

Para solicitações de API que usam a Autenticação Básica ou OAuth, você pode criar até 5.000 solicitações por hora. As solicitações de autenticação são associadas ao usuário autenticado, independentemente de [Autenticação Básica](#basic-authentication) ou [um token do OAuth](#oauth2-token-sent-in-a-header) ter sido usado. Isto significa que todos os aplicativos OAuth autorizados por um usuário compartilham a mesma cota de 5.000 solicitações por hora quando eles são autenticados com diferentes tokens pertencentes ao mesmo usuário.

{% if currentVersion == "free-pro-team@latest" %}

Para usuários que pertencem a uma conta {% data variables.product.prodname_ghe_cloud %}, solicitações feitas usando um token OAuth para recursos pertencentes à mesma conta de {% data variables.product.prodname_ghe_cloud %} têm um aumento de 15.000 solicitações por hora no limite.

{% endif %}

Para solicitações não autenticadas, o limite de taxa permite até 60 solicitações por hora. Solicitações não autenticadas estão associadas ao endereço IP original, e não ao usuário que faz solicitações.

{% data reusables.enterprise.rate_limit %}

Observe que [a API de pesquisa tem regras de limite de taxa personalizadas](/v3/search/#rate-limit).

Os cabeçalhos HTTP retornados de qualquer solicitação de API mostram o seu status atual de limite de taxa:

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat
> HTTP/1.1 200 OK
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> Status: 200 OK
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 56
> X-RateLimit-Reset: 1372700873
```

| Nome do Cabeçalho       | Descrição                                                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-RateLimit-Limit`     | O número máximo de solicitações que você pode fazer por hora.                                                                                     |
| `X-RateLimit-Remaining` | O número de solicitações restantes na janela de limite de taxa atual.                                                                             |
| `X-RateLimit-Reset`     | O tempo em que a janela de limite de taxa atual é redefinida em [segundos no tempo de computação de UTC](http://en.wikipedia.org/wiki/Unix_time). |

Se você precisar de outro formato de tempo, qualquer linguagem de programação moderna pode fazer o trabalho. Por exemplo, se você abrir o console em seu navegador, você pode facilmente obter o tempo de redefinição como um objeto de tempo do JavaScript.

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

Se você exceder o limite de taxa, uma resposta do erro retorna:

```shell
> HTTP/1.1 403 Forbidden
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> Status: 403 Forbidden
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 0
> X-RateLimit-Reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/v3/#rate-limiting"
> }
```

Você pode [verificar o status do seu limite de taxa](/v3/rate_limit) sem a incorrer em uma consulta da API.

#### Aumentar o limite de taxa não autenticado para aplicativos OAuth

Se o seu aplicativo OAuth precisar fazer chamadas não autenticadas com um limite de taxa mais alto, você poderá passar o ID e o segredo do cliente do seu aplicativo antes do encaminhamento de pontos de extremidade.

```shell
$ curl -u my_client_id:my_client_secret {% data variables.product.api_url_pre %}/user/repos
> HTTP/1.1 200 OK
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> Status: 200 OK
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4966
> X-RateLimit-Reset: 1372700873
```

{% note %}

**Observação:** Nunca compartilhe seu segredo de cliente com alguém ou o inclua no código do navegador do lado do cliente. Use o método mostrado aqui apenas para chamadas de servidor para servidor.

{% endnote %}

#### Manter-se dentro do limite de taxa

Se você exceder seu limite de taxa usando a Autenticação Básica ou OAuth, você poderá corrigir o problema armazenando respostas da API e usando [solicitações condicionais](#conditional-requests).

#### Abusar dos limites de taxa

A fim de fornecer serviço de qualidade no {% data variables.product.product_name %}, podem-se aplicar limites de taxa adicionais podem a algumas ações ao usar a API. Por exemplo, usar a API para criar rapidamente conteúdo, fazer sondagem de modo agressivo em vez de usar webhooks, fazer várias solicitações simultâneas ou solicitar repetidamente dados caros do ponto de vista computacional podem resultar na limitação da taxa de abuso.

O abuso dos limites de taxa não são destinados a interferir no uso legítimo da API. Seus limites de taxa normais devem ser o único limite em que você deve focar. Para garantir que você está agindo como um bom cidadão da API, confira nossas [Diretrizes sobre práticas recomendadas](/guides/best-practices-for-integrators/).

Se seu aplicativo acionar este limite de taxa, você receberá uma resposta informativa:

```shell
> HTTP/1.1 403 Forbidden
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have triggered an abuse detection mechanism and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/v3/#abuse-rate-limits"
> }
```

{% if currentVersion == "free-pro-team@latest" %}

### Agente de usuário obrigatório

Todas as solicitações da API DEVEM incluir um cabeçalho válido de `User-Agent`. As requisições sem o cabeçalho do `User-Agent` serão rejeitadas. Pedimos que use seu nome de usuário de {% data variables.product.product_name %} ou o nome de seu aplicativo, para o valor do cabeçalho `User-Agent`. Isso nos permite entrar em contato com você, em caso de problemas.

Aqui está um exemplo:

```shell
User-Agent: Awesome-Octocat-App
```

A cURL envia um cabeçalho válido do `User-Agent` por padrão. Se você fornecer um cabeçalho inválido de `User-Agent` via cURL (ou via um cliente alternativo), você receberá uma resposta `403 Forbidden`:

```shell
$ curl -iH 'User-Agent: ' {% data variables.product.api_url_pre %}/meta
> HTTP/1.0 403 Forbidden
> Connection: close
> Content-Type: text/html

> Request forbidden by administrative rules.
> Please make sure your request has a User-Agent header.
> Check  for other possible causes.
```

{% endif %}

### Solicitações condicionais

A maioria das respostas retorna um cabeçalho de </code>Etag`. Muitas respostas também retornam um cabeçalho <code>Last-Modified`. Você pode usar os valores desses cabeçalhos para fazer solicitações subsequentes para esses recursos usando os cabeçalhos `If-None-Match` e `If-Modified-Desde`, respectivamente. Se o recurso não foi alterado, o servidor retornará `304 não modificado`.

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Observação**: Fazer uma solicitação condicional e receber uma resposta 304 não conta para o seu [Limite de Taxa](#rate-limiting). Portanto, recomendamos que você o utilize sempre que possível.

{% endtip %}

{% endif %}

```shell
$ curl -i {% data variables.product.api_url_pre %}/user
> HTTP/1.1 200 OK
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Status: 200 OK
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873

$ curl -i {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/1.1 304 Not Modified
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Status: 304 Not Modified
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873

$ curl -i {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/1.1 304 Not Modified
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Status: 304 Not Modified
> Vary: Accept, Authorization, Cookie
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4996
> X-RateLimit-Reset: 1372700873
```

### Compartilhamento de recursos de origem cruzada

A API é compatível com Compartilhamento de Recursos de Origens Cruzadas (CORS) para solicitações de AJAX de qualquer origem. You can read the [CORS W3C Recommendation](http://www.w3.org/TR/cors/), or [this intro](http://code.google.com/p/html5security/wiki/CrossOriginRequestSecurity) from the HTML 5 Security Guide.

Aqui está uma solicitação de exemplo enviada a partir de uma consulta em `http://exemplo.com`:

```shell
$ curl -i {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/1.1 302 Found
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

A solicitação pré-voo de CORS se parece com isso:

```shell
$ curl -i {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

### Chamadas de retorno do JSON-P

Você pode enviar um parâmetro `?callback` para qualquer chamada de GET para envolver os resultados em uma função JSON.  Isso é normalmente usado quando os navegadores querem que incorporem {% data variables.product.product_name %} conteúdo em páginas da web, contornando problemas de de domínio cruzado.  A resposta inclui a mesma saída de dados da API regular, mais as informações relevantes do cabeçalho de HTTP.

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "X-RateLimit-Limit": "5000",
>     "X-RateLimit-Remaining": "4966",
>     "X-RateLimit-Reset": "1372700873",
>     "Link": [ // pagination headers and other links
>       ["{% data variables.product.api_url_pre %}?page=2", {"rel": "next"}]
>     ]
>   },
>   "data": {
>     // the data
>   }
> })
```

Você pode escrever um manipulador do JavaScript para processar o retorno de chamada. Aqui está um exemplo pequeno que você pode experimentar:

    <html>
    <head>
    <script type="text/javascript">
    function foo(response) {
      var meta = response.meta;
      var data = response.data;
      console.log(meta);
      console.log(data);
    }
    
    var script = document.createElement('script');
    script.src = '{% data variables.product.api_url_code %}?callback=foo';
    
    document.getElementsByTagName('head')[0].appendChild(script);
    </script>
    </head>
    
    <body>
      <p>Open up your browser's console.</p>
    </body>
    </html>

Todos os cabeçalhos têm o mesmo valor d a string que os cabeçalhos de HTTP com uma exceção notável: Link.  Cabeçalhos de link são pré-analisados para você e chegam como um array de tuplas de `[url, options]`.

Um link que se parece com isto:

    Link: <url1>; rel="next", <url2>; rel="foo"; bar="baz"

... será mostrado assim na saída da chamada de retorno:

```json
{
  "Link": [
    [
      "url1",
      {
        "rel": "next"
      }
    ],
    [
      "url2",
      {
        "rel": "foo",
        "bar": "baz"
      }
    ]
  ]
}
```

### Fusos horários

Algumas solicitações que criam novos dados, como a criação de um novo commit, permitem que você forneça informações do fuso horário ao especificar ou marcas de tempo. Aplicamos as seguintes regras, por ordem de prioridade, para determinar as informações do fuso horário para chamadas de API.

* [Fornecer explicitamente uma marca de tempo ISO 8601 com informações de fuso horário](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [Usar o cabeçalho `Time-Zone`](#using-the-time-zone-header)
* [Usar o último fuso horário conhecido para o usuário](#using-the-last-known-timezone-for-the-user)
* [Definir como padrão UTC sem outras informações de fuso horário](#defaulting-to-utc-without-other-timezone-information)

#### Fornecer explicitamente uma marca de tempo ISO 8601 com informações de fuso horário

Para chamadas de API que permitem que uma marca de tempo seja especificada, usamos essa marca de tempo exata. Um exemplo disso é a [API de Commits](/v3/git/commits).

Essas marcas de tempo se parecem com `2014-02-27T15:05:06+01:00`. Veja também [este exemplo](/v3/git/commits/#example-input) para saber como essas marcas de tempo podem ser especificadas.

#### Usar o cabeçalho `Time-Zone`

É possível fornecer um cabeçalho `Time-Zone` que define um fuso horário de acordo com a lista [ de nomes do banco de dados Olson](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

Isso significa que geramos uma marca de tempo no momento em que sua chamada de API é feita no fuso horário que este cabeçalho define. Por exemplo, o [API de Conteúdo](/v3/repos/contents/) gera um commit do git para cada adição ou alteração e usa a hora atual como marca de tempo. Este cabeçalho determinará o fuso horário usado para gerar essa marca de tempo atual.

#### Usar o último fuso horário conhecido para o usuário

Se nenhum cabeçalho `Time-Zone` for especificado e você fizer uma chamada autenticada para a API, nós usaremos o último fuso horário conhecido para o usuário autenticado. O último fuso horário conhecido é atualizado sempre que você navegar no site de {% data variables.product.product_name %}.

#### Definir como padrão UTC sem outras informações de fuso horário

Se as etapas acima não resultarem em nenhuma informação, usaremos UTC como o fuso horário para criar o commit do git.

[rfc]: http://tools.ietf.org/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

[pagination-guide]: /guides/traversing-with-pagination
