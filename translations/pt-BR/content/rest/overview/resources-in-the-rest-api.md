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

{% if currentVersion == "free-pro-team@latest" %}Todo acesso à API é feito por meio de HTTPS, e{% else %}a API é{% endif %} acessada a partir de `{% data variables.product.api_url_code %}`.  Todos os dados são
enviados e recebidos como JSON.

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/1.1 200 OK
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> Connection: keep-alive
> Status: 200 OK
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> X-RateLimit-Limit: 5000
> X-RateLimit-Remaining: 4987
> X-RateLimit-Reset: 1350085394{% if currentVersion != "free-pro-team@latest" %}
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

Usar o seu `client_id` e `client_secret` _ não_ autenticam você como usuário. Isso apenas irá identificar o seu aplicativo OAuth para aumentar o seu limite de taxa. Permissions are only granted to users, not applications, and you will only get back data that an unauthenticated user would see. For this reason, you should only use the OAuth2 key/secret in server-to-server scenarios. Don't leak your OAuth application's client secret to your users.

{% if currentVersion != "free-pro-team@latest" %}
You will be unable to authenticate using your OAuth2 key and secret while in private mode, and trying to authenticate will return `401 Unauthorized`. For more information, see "[Enabling private mode](/enterprise/admin/installation/enabling-private-mode)".
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}

Read [more about unauthenticated rate limiting](#increasing-the-unauthenticated-rate-limit-for-oauth-applications).

{% endif %}

#### Failed login limit

Authenticating with invalid credentials will return `401 Unauthorized`:

```shell
$ curl -i {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/1.1 401 Unauthorized

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/v3"
> }
```

After detecting several requests with invalid credentials within a short period, the API will temporarily reject all authentication attempts for that user (including ones with valid credentials) with `403 Forbidden`:

```shell
$ curl -i {% data variables.product.api_url_pre %} -u valid_username:valid_password
> HTTP/1.1 403 Forbidden

> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/v3"
> }
```

### Parâmetros

Many API methods take optional parameters. For `GET` requests, any parameters not specified as a segment in the path can be passed as an HTTP query string parameter:

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

In this example, the 'vmg' and 'redcarpet' values are provided for the `:owner` and `:repo` parameters in the path while `:state` is passed in the query string.

For `POST`, `PATCH`, `PUT`, and `DELETE` requests, parameters not included in the URL should be encoded as JSON with a Content-Type of 'application/json':

```shell
$ curl -i -u username -d '{"scopes":["public_repo"]}' {% data variables.product.api_url_pre %}/authorizations
```

### Ponto de extremidade raiz

You can issue a `GET` request to the root endpoint to get all the endpoint categories that the REST API supports:

```shell
$ curl {% if currentVersion != "free-pro-team@latest" %}-u <em>username</em>:<em>password</em> {% endif %}{% data variables.product.api_url_pre %}
```

{% if currentVersion != "free-pro-team@latest" %}

{% note %}

**Note:** For {% data variables.product.prodname_ghe_server %}, [as with all other endpoints](/v3/enterprise-admin/#endpoint-urls), you'll need to pass your username and password.

{% endnote %}

{% endif %}

### GraphQL global node IDs

See the guide on "[Using Global Node IDs](/v4/guides/using-global-node-ids)" for detailed information about how to find `node_id`s via the REST API and use them in GraphQL operations.

### Client errors

There are three possible types of client errors on API calls that receive request bodies:

1. Sending invalid JSON will result in a `400 Bad Request` response.
   
        HTTP/1.1 400 Bad Request
        Content-Length: 35
       
        {"message":"Problems parsing JSON"}

2. Sending the wrong type of JSON values will result in a `400 Bad
Request` response.
   
        HTTP/1.1 400 Bad Request
        Content-Length: 40
       
        {"message":"Body should be a JSON object"}

3. Sending invalid fields will result in a `422 Unprocessable Entity` response.
   
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

All error objects have resource and field properties so that your client can tell what the problem is.  There's also an error code to let you know what is wrong with the field.  These are the possible validation error codes:

| Error code name  | Descrição                                                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `missing`        | A resource does not exist.                                                                                                             |
| `missing_field`  | A required field on a resource has not been set.                                                                                       |
| `invalid`        | The formatting of a field is invalid.  Review the documentation for the for more specific information.                                 |
| `already_exists` | Another resource has the same value as this field.  This can happen in resources that must have some unique key (such as label names). |
| `unprocessable`  | The inputs provided were invalid.                                                                                                      |

Resources may also send custom validation errors (where `code` is `custom`). Custom errors will always have a `message` field describing the error, and most errors will also include a `documentation_url` field pointing to some content that might help you resolve the error.

### HTTP redirects

API v3 uses HTTP redirection where appropriate. Os clientes devem assumir que qualquer solicitação pode resultar em redirecionamento. Receber um redirecionamento de HTTP *não* é um erro e os clientes devem seguir esse redirecionamento. As respostas de redirecionamento terão um campo do cabeçalho do tipo `Localização` que contém o URI do recurso ao qual o cliente deve repetir as solicitações.

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

| Nome      | Descrição                                                     |
| --------- | ------------------------------------------------------------- |
| `avançar` | A relação de link para a próxima página de resultados.        |
| `last`    | A relação de link para a última página de resultados.         |
| `first`   | The link relation for the first page of results.              |
| `prev`    | The link relation for the immediate previous page of results. |

### Rate limiting

For API requests using Basic Authentication or OAuth, you can make up to 5,000 requests per hour. Authenticated requests are associated with the authenticated user, regardless of whether [Basic Authentication](#basic-authentication) or [an OAuth token](#oauth2-token-sent-in-a-header) was used. This means that all OAuth applications authorized by a user share the same quota of 5,000 requests per hour when they authenticate with different tokens owned by the same user.

{% if currentVersion == "free-pro-team@latest" %}

For users that belong to a {% data variables.product.prodname_ghe_cloud %} account, requests made using an OAuth token to resources owned by the same {% data variables.product.prodname_ghe_cloud %} account have an increased limit of 15,000 requests per hour.

{% endif %}

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

{% data reusables.enterprise.rate_limit %}

Note that [the Search API has custom rate limit rules](/v3/search/#rate-limit).

The returned HTTP headers of any API request show your current rate limit status:

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat
> HTTP/1.1 200 OK
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> Status: 200 OK
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 56
> X-RateLimit-Reset: 1372700873
```

| Header Name             | Descrição                                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `X-RateLimit-Limit`     | The maximum number of requests you're permitted to make per hour.                                                      |
| `X-RateLimit-Remaining` | The number of requests remaining in the current rate limit window.                                                     |
| `X-RateLimit-Reset`     | The time at which the current rate limit window resets in [UTC epoch seconds](http://en.wikipedia.org/wiki/Unix_time). |

If you need the time in a different format, any modern programming language can get the job done. For example, if you open up the console on your web browser, you can easily get the reset time as a JavaScript Date object.

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

If you exceed the rate limit, an error response returns:

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

You can [check your rate limit status](/v3/rate_limit) without incurring an API hit.

#### Increasing the unauthenticated rate limit for OAuth applications

If your OAuth application needs to make unauthenticated calls with a higher rate limit, you can pass your app's client ID and secret before the endpoint route.

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

**Note:** Never share your client secret with anyone or include it in client-side browser code. Use the method shown here only for server-to-server calls.

{% endnote %}

#### Staying within the rate limit

If you exceed your rate limit using Basic Authentication or OAuth, you can likely fix the issue by caching API responses and using [conditional requests](#conditional-requests).

#### Abuse rate limits

In order to provide quality service on {% data variables.product.product_name %}, additional rate limits may apply to some actions when using the API. For example, using the API to rapidly create content, poll aggressively instead of using webhooks, make multiple concurrent requests, or repeatedly request data that is computationally expensive may result in abuse rate limiting.

Abuse rate limits are not intended to interfere with legitimate use of the API. Your normal rate limits should be the only limit you target. To ensure you're acting as a good API citizen, check out our [Best Practices guidelines](/guides/best-practices-for-integrators/).

If your application triggers this rate limit, you'll receive an informative response:

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

### User agent required

All API requests MUST include a valid `User-Agent` header. Requests with no `User-Agent` header will be rejected. We request that you use your {% data variables.product.product_name %} username, or the name of your application, for the `User-Agent` header value. Isso nos permite entrar em contato com você, em caso de problemas.

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

A maioria das respostas retorna um cabeçalho de </code>Etag`. Many responses also return a <code>Last-Modified` header. You can use the values of these headers to make subsequent requests to those resources using the `If-None-Match` and `If-Modified-Since` headers, respectively. If the resource has not changed, the server will return a `304 Not Modified`.

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Note**: Making a conditional request and receiving a 304 response does not count against your [Rate Limit](#rate-limiting), so we encourage you to use it whenever possible.

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

### Cross origin resource sharing

A API é compatível com Compartilhamento de Recursos de Origens Cruzadas (CORS) para solicitações de AJAX de qualquer origem. You can read the [CORS W3C Recommendation](http://www.w3.org/TR/cors/), or [this intro](http://code.google.com/p/html5security/wiki/CrossOriginRequestSecurity) from the HTML 5 Security Guide.

Here's a sample request sent from a browser hitting `http://example.com`:

```shell
$ curl -i {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/1.1 302 Found
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

This is what the CORS preflight request looks like:

```shell
$ curl -i {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

### JSON-P callbacks

You can send a `?callback` parameter to any GET call to have the results wrapped in a JSON function.  This is typically used when browsers want to embed {% data variables.product.product_name %} content in web pages by getting around cross domain issues.  The response includes the same data output as the regular API, plus the relevant HTTP Header information.

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

You can write a JavaScript handler to process the callback. Here's a minimal example you can try out:

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

All of the headers are the same String value as the HTTP Headers with one notable exception: Link.  Link headers are pre-parsed for you and come through as an array of `[url, options]` tuples.

A link that looks like this:

    Link: <url1>; rel="next", <url2>; rel="foo"; bar="baz"

... will look like this in the Callback output:

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

### Timezones

Some requests that create new data, such as creating a new commit, allow you to provide time zone information when specifying or generating timestamps. We apply the following rules, in order of priority, to determine timezone information for API calls.

* [Explicitly providing an ISO 8601 timestamp with timezone information](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [Using the `Time-Zone` header](#using-the-time-zone-header)
* [Using the last known timezone for the user](#using-the-last-known-timezone-for-the-user)
* [Defaulting to UTC without other timezone information](#defaulting-to-utc-without-other-timezone-information)

#### Explicitly providing an ISO 8601 timestamp with timezone information

For API calls that allow for a timestamp to be specified, we use that exact timestamp. An example of this is the [Commits API](/v3/git/commits).

These timestamps look something like `2014-02-27T15:05:06+01:00`. Also see [this example](/v3/git/commits/#example-input) for how these timestamps can be specified.

#### Using the `Time-Zone` header

It is possible to supply a `Time-Zone` header which defines a timezone according to the [list of names from the Olson database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

This means that we generate a timestamp for the moment your API call is made in the timezone this header defines. For example, the [Contents API](/v3/repos/contents/) generates a git commit for each addition or change and uses the current time as the timestamp. This header will determine the timezone used for generating that current timestamp.

#### Using the last known timezone for the user

If no `Time-Zone` header is specified and you make an authenticated call to the API, we use the last known timezone for the authenticated user. The last known timezone is updated whenever you browse the {% data variables.product.product_name %} website.

#### Defaulting to UTC without other timezone information

If the steps above don't result in any information, we use UTC as the timezone to create the git commit.

[rfc]: http://tools.ietf.org/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

[pagination-guide]: /guides/traversing-with-pagination
