---
title: Recursos na API REST
intro: 'Aprenda a navegar pelos recursos fornecidos pela API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.'
redirect_from:
  - /rest/initialize-the-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - API
ms.openlocfilehash: c7928ce90b887d6fa3bd5342fc1633b3e30983f1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192846'
---
{% ifversion api-date-versioning %}
## Versão da API

Os recursos disponíveis podem variar entre as versões da API REST. Você deve usar o cabeçalho `X-GitHub-Api-Version` para especificar uma versão da API. Para obter mais informações, confira "[Versões da API](/rest/overview/api-versions)".

{% endif %}

## Esquema

{% ifversion fpt or ghec %}Todo o acesso à API é feito por HTTPS e{% else %}A API é{% endif %} acessada de `{% data variables.product.api_url_code %}`.  Todos os dados são enviados e recebidos como JSON.

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat/orgs

> HTTP/2 200
> Server: nginx
> Date: Fri, 12 Oct 2012 23:33:14 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "a00049ba79152d03380c34652f2cb612"
> X-GitHub-Media-Type: github.v3
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4987
> x-ratelimit-reset: 1350085394{% ifversion ghes %}
> X-GitHub-Enterprise-Version: {{ currentVersion | remove: "enterprise-server@" }}.0{% elsif ghae %}
> X-GitHub-Enterprise-Version: GitHub AE{% endif %}
> Content-Length: 5
> Cache-Control: max-age=0, private, must-revalidate
> X-Content-Type-Options: nosniff
```

Os campos em branco são incluídos como `null` em vez de serem omitidos.

Todos os timestamps são retornados no formato UTC, ISO 8601:

    YYYY-MM-DDTHH:MM:SSZ

Para obter mais informações sobre fusos horários em carimbos de data/hora, confira [esta seção](#timezones).

### Apresentações resumidas

Ao buscar uma lista de recursos, a resposta inclui um _subconjunto_ dos atributos para esse recurso. Esta é a representação "resumo" do recurso. (Alguns atributos são computacionalmente caros para a API fornecer.
Por razões de desempenho, a representação resumida exclui esses atributos.
Para obter esses atributos, busque a representação "detalhada".)

**Exemplo**: ao receber uma lista de repositórios, você recebe a representação resumida de cada repositório. Aqui, buscamos a lista de repositórios pertencentes à organização [octokit](https://github.com/octokit):

    GET /orgs/octokit/repos

### Representações detalhadas

Ao buscar um recurso individual, a resposta normalmente inclui _todos_ os atributos para esse recurso. Esta é a representação "detalhada" do recurso. (Observe que a autorização às vezes influencia a quantidade de detalhes incluídos na representação.)

**Exemplo**: ao receber um repositório individual, você recebe a representação detalhada do repositório. Aqui, buscamos o repositório [octokit/octokit.rb](https://github.com/octokit/octokit.rb):

    GET /repos/octokit/octokit.rb

A documentação fornece um exemplo de resposta para cada método da API. A resposta de exemplo ilustra todos os atributos que retornados por esse método.

## Autenticação

{% ifversion ghae %} Recomendamos a autenticação na API REST {% data variables.product.product_name %} criando um token OAuth2 por meio do [fluxo do aplicativo Web](/developers/apps/authorizing-oauth-apps#web-application-flow). {% else %} Existem duas maneiras de efetuar a autenticação por meio da API REST de {% data variables.product.product_name %}.{% endif %} As solicitações que exigem autenticação retornarão `404 Not Found`, em vez de `403 Forbidden`, em alguns lugares.  Isso é para evitar a fuga acidental de repositórios privados para usuários não autorizados.

### Autenticação Básica

```shell
$ curl -u "username" {% data variables.product.api_url_pre %}
```

### Token do OAuth2 (enviado em um cabeçalho)

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}
```

{% note %}

Observação: O GitHub recomenda enviar tokens do OAuth usando o cabeçalho de autorização.

{% endnote %}

{% note %}

**Observação:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

Leia [mais sobre OAuth2](/apps/building-oauth-apps/).  Observe que os tokens OAuth2 podem ser adquiridos usando o [fluxo do aplicativo Web](/developers/apps/authorizing-oauth-apps#web-application-flow) para aplicativos de produção.

{% ifversion fpt or ghes or ghec %}
### OAuth2 key/secret

{% data reusables.apps.deprecating_auth_with_query_parameters %}

```shell
curl -u my_client_id:my_client_secret '{% data variables.product.api_url_pre %}/user/repos'
```

Usar seu `client_id` e `client_secret` _não_ autentica como usuário, apenas identificará seu aplicativo OAuth para aumentar seu limite de taxa. As permissões só são concedidas a usuários, não aplicativos, e você só obterá dados que um usuário não autenticado visualizaria. Por este motivo, você só deve usar a chave/segredo OAuth2 em cenários de servidor para servidor. Não deixe vazar o segredo do cliente do OAuth do seu aplicativo para os seus usuários.

{% ifversion ghes %} Você não conseguirá efetuar a autenticação usando sua chave e segredo do OAuth2 enquanto estiver no modo privado e essa tentativa de autenticação irá retornar `401 Unauthorized`. Para obter mais informações, confira "[Como habilitar o modo privado](/admin/configuration/configuring-your-enterprise/enabling-private-mode)".
{% endif %} {% endif %}

{% ifversion fpt or ghec %}

Leia [mais sobre limite de taxa não autenticada](#increasing-the-unauthenticated-rate-limit-for-oauth-apps).

{% endif %}

### Falha no limite de login

A autenticação com credenciais inválidas retornará `401 Unauthorized`:

```shell
$ curl -I {% data variables.product.api_url_pre %} -u foo:bar
> HTTP/2 401

> {
>   "message": "Bad credentials",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

Após detectar várias solicitações com credenciais inválidas em um curto período de tempo, a API rejeitará temporariamente todas as tentativas de autenticação para esse usuário (incluindo aquelas com credenciais válidas) com `403 Forbidden`:

```shell
$ curl -i {% data variables.product.api_url_pre %} -u {% ifversion fpt or ghae or ghec %}
-u VALID_USERNAME:VALID_TOKEN {% endif %}{% ifversion ghes %}-u VALID_USERNAME:VALID_PASSWORD {% endif %}
> HTTP/2 403
> {
>   "message": "Maximum number of login attempts exceeded. Please try again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}"
> }
```

## Parâmetros

Muitos métodos de API tomam parâmetros opcionais. Para solicitações tipo `GET`, todos os parâmetros não especificados como um segmento no caminho podem ser passados como um parâmetro de string de consulta de HTTP:

```shell
$ curl -i "{% data variables.product.api_url_pre %}/repos/vmg/redcarpet/issues?state=closed"
```

Neste exemplo, os valores 'vmg' e 'redcarpet' são fornecidos para os parâmetros `:owner` e `:repo` no caminho, enquanto `:state` é passado na cadeia de caracteres de consulta.

Para as solicitações `POST`, `PATCH`, `PUT` e `DELETE`, os parâmetros não incluídos na URL devem ser codificados como JSON com um tipo de conteúdo de 'application/json':

```shell
$ curl -i -u username -d '{"scopes":["repo_deployment"]}' {% data variables.product.api_url_pre %}/authorizations
```

## Ponto de extremidade raiz

Você pode emitir uma solicitação `GET` para o ponto de extremidade de raiz para obter todas as categorias do ponto de extremidade com a qual a API REST é compatível:

```shell
$ curl {% ifversion fpt or ghae or ghec %}
-u USERNAME:TOKEN {% endif %}{% ifversion ghes %}-u USERNAME:PASSWORD {% endif %}{% data variables.product.api_url_pre %}
```

## IDs de nós globais do GraphQL

Confira o guia sobre "[Usar IDs de nós globais](/graphql/guides/using-global-node-ids)" para obter informações detalhadas sobre como localizar `node_id`s por meio da API REST e usá-los em operações do GraphQL.

## Erros do cliente

Há três tipos possíveis de erros de cliente em chamadas de API que recebem corpos de solicitação:

1. O envio de JSON inválido resultará em uma resposta `400 Bad Request`.

        HTTP/2 400
        Content-Length: 35

        {"message":"Problems parsing JSON"}

2. O envio do tipo errado de valores JSON resultará em uma resposta `400 Bad
   Request`.

        HTTP/2 400
        Content-Length: 40

        {"message":"Body should be a JSON object"}

3. O envio de campos inválidos resultará em uma resposta `422 Unprocessable Entity`.

        HTTP/2 422
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

Todos os objetos de erro têm propriedades de recursos e campos para que seu cliente possa dizer qual é o problema.  Há também um código de erro para que você saiba o que está errado com o campo.  Estes são os possíveis códigos de erro de validação:

Nome do código de erro | Descrição
-----------|-----------|
`missing` | Um recurso não existe.
`missing_field` | Não foi definido um campo obrigatório em um recurso.
`invalid` | Formatação de um campo é inválida.  Revise a documentação para obter informações mais específicas.
`already_exists` | Outro recurso tem o mesmo valor que este campo.  Isso pode acontecer em recursos que precisam ter alguma chave única (como nomes de etiqueta).
`unprocessable` | As entradas fornecidas eram inválidas.

Os recursos também podem enviar erros de validação personalizados (em que `code` e `custom` ). Os erros personalizados sempre terão um campo de `message` que descreve o erro e a maioria dos erros também incluirá um campo de `documentation_url` que aponta para algum conteúdo que pode ajudá-lo a resolver o erro.

## Redirecionamentos HTTP

A API REST do {% data variables.product.product_name %} usa o redirecionamento HTTP quando apropriado. Os clientes devem assumir que qualquer solicitação pode resultar em um redirecionamento. Receber um redirecionamento de HTTP *não* é um erro e os clientes devem seguir esse redirecionamento. As respostas de redirecionamento terão
um campo do cabeçalho do tipo `Location` que contém o URI do recurso ao qual o cliente deve repetir as solicitações.

Código de status | Descrição
-----------|-----------|
`301` | Redirecionamento permanente. O URI que você usou para fazer a solicitação foi substituído pelo especificado no campo do cabeçalho `Location`. Este e todas as solicitações futuras deste recurso devem ser direcionadas para o novo URI.
`302`, `307` | Redirecionamento temporário. A solicitação deve ser repetida literalmente para o URI especificado no campo de cabeçalho `Location`, mas os clientes devem continuar a usar o URI original para solicitações futuras.

Outros códigos de status de redirecionamento podem ser usados de acordo com a especificação HTTP 1.1.

## Verbos HTTP

Sempre que possível, a API REST do {% data variables.product.product_name %} procura usar verbos HTTP apropriados para cada ação. Observe que os verbos HTTP diferenciam maiúsculas de minúsculas.

Verbo | Descrição
-----|-----------
`HEAD` | Pode ser emitido contra qualquer recurso para obter apenas as informações de cabeçalho HTTP.
`GET` | Usado para recuperar recursos.
`POST` | Usado para criar recursos.
`PATCH` | Usado para atualizar recursos com dados parciais do JSON. Por exemplo, um recurso de problema tem os atributos `title` e `body`. Uma solicitação de `PATCH` pode aceitar um ou mais dos atributos para atualizar o recurso.
`PUT` | Usado para substituir recursos ou coleções. Para solicitações `PUT` sem atributo `body`, defina o cabeçalho `Content-Length` como zero.
`DELETE` |Usado para excluir recursos.

## Hipermídia

Todos os recursos podem ter uma ou mais propriedades `*_url` vinculando outros recursos.  Estes tem o objetivo de fornecer URLs explícitas para que os clientes API apropriados não precisem construir URLs por conta própria.  É altamente recomendável que os clientes da API
os utilizem.  Fazer isso tornará as futuras atualizações da API mais fáceis para os desenvolvedores.  Espera-se que todas as URLs sejam modelos de URI [RFC 6570][rfc] adequados.

Em seguida, você pode expandir esses modelos usando algo como ogem [uri_template][uri]:

    >> tmpl = URITemplate.new('/notifications{?since,all,participating}')
    >> tmpl.expand
    => "/notifications"

    >> tmpl.expand all: 1
    => "/notifications?all=1"

    >> tmpl.expand all: 1, participating: 1
    => "/notifications?all=1&participating=1"

[rfc]: https://datatracker.ietf.org/doc/html/rfc6570
[uri]: https://github.com/hannesg/uri_template

## Paginação

Quando uma resposta da API REST incluir muitos resultados, {% data variables.product.company_short %} paginará os resultados e retornará um subconjunto dos resultados. Você pode usar o cabeçalho do link da resposta para solicitar páginas adicionais de dados. Se um ponto de extremidade oferecer suporte ao parâmetro de consulta `per_page`, você poderá controlar quantos resultados são retornados em uma página. Para obter mais informações sobre paginação, confira "[Como usar paginação na API REST](/rest/guides/using-pagination-in-the-rest-api)".

## Tempos limite

Se {% data variables.product.prodname_dotcom %} leva mais de 10 segundos para processar uma solicitação de API, {% data variables.product.prodname_dotcom %} encerrará a solicitação e você receberá uma resposta de tempo limite como esta:

```json
{
    "message": "Server Error"
}
```

{% data variables.product.product_name %} se reserva o direito de alterar o período de tempo limite para proteger a velocidade e confiabilidade da API.

## Limitação de taxa

Os diferentes tipos de solicitações da API para {% data variables.location.product_location %} estão sujeitos a diferentes limites de taxa. 

Além disso, a API de pesquisa tem limites dedicados. Para obter mais informações, confira "[Pesquisar](/rest/reference/search#rate-limit)" na documentação da API REST.

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

### Solicitações de contas pessoais

As solicitações diretas da API que você autentica com um {% data variables.product.pat_generic %} são solicitações do usuário para servidor. Um aplicativo OAuth ou GitHub também pode fazer uma solicitação de usuário para servidor em seu nome depois de autorizar o aplicativo. Para obter mais informações, confira "[Como criar um {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)", "[Como autorizar aplicativos OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)" e "[Como autorizar aplicativos GitHub](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)".

{% data variables.product.product_name %} associa todas as solicitações de usuário para servidor ao usuário autenticado. Para aplicativos OAuth e aplicativos GitHub, este é o usuário que autorizou o aplicativo. Todos os pedidos de usuário-servidor contam para o limite de taxa do usuário autenticado.

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% ifversion fpt or ghec or ghes %}

Para solicitações não autenticadas, o limite de taxa permite até 60 solicitações por hora. As solicitações não autenticadas estão associadas ao endereço IP original, e não à pessoa que faz as solicitações.

{% endif %}

{% endif %}

### Solicitações de aplicativos GitHub

As solicitações de um aplicativo GitHub podem ser de usuário para servidor ou de servidor para servidor. Para obter mais informações sobre limites de taxa para aplicativos GitHub, confira "[Limites de taxa para aplicativos GitHub](/developers/apps/building-github-apps/rate-limits-for-github-apps)". 

### Solicitações do GitHub Actions

Você pode utilizar o `GITHUB_TOKEN` integrado para autenticar as solicitações nos fluxos de trabalho do GitHub Actions. Para obter mais informações, confira "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)".

Quando `GITHUB_TOKEN` é usado, o limite de taxa é de 1.000 solicitações por hora por repositório.{% ifversion fpt or ghec %} Para solicitações a recursos que pertencem a uma conta corporativa na {% data variables.location.product_location %}, aplicam-se os limites de taxa do {% data variables.product.prodname_ghe_cloud %} e o limite é de 15.000 solicitações por hora por repositório.{% endif %}

### Verificando o status do seu limite da taxa

A API de limite de taxa e os cabeçalhos HTTP de uma resposta são fontes autorizadas para o número atual de chamadas de API disponíveis para você ou seu aplicativo a qualquer momento.

#### API de limite de taxa

Você pode usar a API do limite de taxa para verificar o status do seu limite de taxa sem impactar no limite atual. Para obter mais informações, confira "[Limite de taxa](/rest/reference/rate-limit)".

#### Cabeçalhos de HTTP de limite de taxa

Os cabeçalhos HTTP retornados de qualquer solicitação de API mostram o seu status atual de limite de taxa:

```shell
$ curl -I {% data variables.product.api_url_pre %}/users/octocat
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 56
> x-ratelimit-used: 4
> x-ratelimit-reset: 1372700873
```

Nome do cabeçalho | Descrição
-----------|-----------|
`x-ratelimit-limit` | O número máximo de solicitações que você pode fazer por hora.
`x-ratelimit-remaining` | O número de solicitações restantes na janela de limite de taxa atual.
`x-ratelimit-used` | O número de solicitações feitas na janela de limite de taxa atual.
`x-ratelimit-reset` | O tempo em que a janela de limite de taxa atual é redefinida em [segundos de época UTC](http://en.wikipedia.org/wiki/Unix_time).

Se você precisar de outro formato de tempo, qualquer linguagem de programação moderna pode fazer o trabalho. Por exemplo, se você abrir o console em seu navegador, você pode facilmente obter o tempo de redefinição como um objeto de tempo do JavaScript.

``` javascript
new Date(1372700873 * 1000)
// => Mon Jul 01 2013 13:47:53 GMT-0400 (EDT)
```

Se você exceder o limite de taxa, uma resposta do erro retorna:

```shell
> HTTP/2 403
> Date: Tue, 20 Aug 2013 14:50:41 GMT
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 0
> x-ratelimit-used: 60
> x-ratelimit-reset: 1377013266

> {
>    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
>    "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#rate-limiting"
> }
```

### Aumentando o limite de taxa não autenticado para aplicativos OAuth

Se o seu aplicativo OAuth precisar fazer chamadas não autenticadas com um limite de taxa mais alto, você poderá passar o ID e o segredo do cliente do seu aplicativo antes do encaminhamento de pontos de extremidade.

```shell
$ curl -u my_client_id:my_client_secret -I {% data variables.product.api_url_pre %}/user/repos
> HTTP/2 200
> Date: Mon, 01 Jul 2013 17:27:06 GMT
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4966
> x-ratelimit-used: 34
> x-ratelimit-reset: 1372700873
```

{% note %}

**Observação:** Nunca compartilhe seu segredo de cliente com alguém ou o inclua no código do navegador do lado do cliente. Use o método mostrado aqui apenas para chamadas de servidor para servidor.

{% endnote %}

### Manter-se dentro do limite de taxa

Se você exceder o limite de taxa usando a autenticação básica ou o OAuth, provavelmente poderá corrigir o problema armazenando em cache as respostas da API e usando [solicitações condicionais](#conditional-requests).

### Limites de taxa secundária

A fim de fornecer serviço de qualidade no {% data variables.product.product_name %}, podem-se aplicar limites de taxa adicionais podem a algumas ações ao usar a API. Por exemplo, usar a API para criar rapidamente conteúdo, fazer sondagem de modo agressivo em vez de usar webhooks, fazer várias solicitações simultâneas ou solicitar repetidamente dados caros do ponto de vista computacional podem resultar na limitação da taxa secundária.

Limites de taxa secundária não pretendem interferir com o uso legítimo da API. Seus limites de taxa normais devem ser o único limite em que você deve focar. Para garantir que você esteja agindo como um bom cidadão da API, confira nossas [Diretrizes de Práticas Recomendadas](/guides/best-practices-for-integrators/).

Se seu aplicativo acionar este limite de taxa, você receberá uma resposta informativa:

```shell
> HTTP/2 403
> Content-Type: application/json; charset=utf-8
> Connection: close

> {
>   "message": "You have exceeded a secondary rate limit and have been temporarily blocked from content creation. Please retry your request again later.",
>   "documentation_url": "{% data variables.product.doc_url_pre %}/overview/resources-in-the-rest-api#secondary-rate-limits"
> }
```

{% ifversion fpt or ghec %}

## Agente de usuário obrigatório

Todas as solicitações de API PRECISAM incluir um cabeçalho `User-Agent` válido. Solicitações sem cabeçalho `User-Agent` serão rejeitadas. Pedimos que use seu nome de usuário de {% data variables.product.product_name %} ou o nome de seu
aplicativo, para o valor do cabeçalho `User-Agent`. Isso nos permite entrar em contato com você, em caso de problemas.

Veja um exemplo:

```shell
User-Agent: Awesome-Octocat-App
```

O cURL envia um cabeçalho `User-Agent` válido por padrão. Se você fornecer um cabeçalho `User-Agent` inválido via cURL (ou por meio de um cliente alternativo), receberá uma resposta `403 Forbidden`:

```shell
$ curl -IH 'User-Agent: ' {% data variables.product.api_url_pre %}/meta
> HTTP/1.0 403 Forbidden
> Connection: close
> Content-Type: text/html

> Request forbidden by administrative rules.
> Please make sure your request has a User-Agent header.
> Check  for other possible causes.
```

{% endif %}

## Solicitações condicionais

A maioria das respostas retorna um cabeçalho `ETag`. Muitas respostas também retornam um cabeçalho `Last-Modified`. Você pode usar os valores desses cabeçalhos para fazer solicitações subsequentes a esses recursos usando os cabeçalhos `If-None-Match` e `If-Modified-Since`, respectivamente. Se o recurso não tiver sido alterado, o servidor retornará um `304 Not Modified`.

{% ifversion fpt or ghec %}

{% tip %}

**Observação**: Fazer uma solicitação condicional e receber uma resposta 304 não conta para o seu [Limite de Taxa](#rate-limiting). Portanto, recomendamos que você o utilize sempre que possível.

{% endtip %}

{% endif %}

```shell
$ curl -I {% data variables.product.api_url_pre %}/user
> HTTP/2 200
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
> HTTP/2 304
> Cache-Control: private, max-age=60
> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873

$ curl -I {% data variables.product.api_url_pre %}/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
> HTTP/2 304
> Cache-Control: private, max-age=60
> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
> Vary: Accept, Authorization, Cookie
> x-ratelimit-limit: 5000
> x-ratelimit-remaining: 4996
> x-ratelimit-reset: 1372700873
```

## Compartilhamento de recursos entre origens

A API é compatível com Compartilhamento de Recursos de Origens Cruzadas (CORS) para solicitações de AJAX de qualquer origem.
Você pode ler a [Recomendação CORS W3C](http://www.w3.org/TR/cors/) ou [esta introdução](https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki) do Guia de Segurança HTML 5.

Aqui está uma solicitação de exemplo enviada de um navegador atingindo `http://example.com`:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com"
HTTP/2 302
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
```

A solicitação pré-voo de CORS se parece com isso:

```shell
$ curl -I {% data variables.product.api_url_pre %} -H "Origin: http://example.com" -X OPTIONS
HTTP/2 204
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With
Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE
Access-Control-Expose-Headers: ETag, Link, X-GitHub-OTP, x-ratelimit-limit, x-ratelimit-remaining, x-ratelimit-reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval
Access-Control-Max-Age: 86400
```

## Chamadas de retorno do JSON-P

Você pode enviar um parâmetro `?callback` para qualquer chamada de GET para envolver os resultados em uma função JSON.  Isso geralmente é usado quando os navegadores desejam incorporar o conteúdo do {% data variables.product.product_name %} em páginas da Web, contornando problemas entre domínios.  A resposta inclui a mesma saída de dados da API regular, mais as informações relevantes do cabeçalho de HTTP.

```shell
$ curl {% data variables.product.api_url_pre %}?callback=foo

> /**/foo({
>   "meta": {
>     "status": 200,
>     "x-ratelimit-limit": "5000",
>     "x-ratelimit-remaining": "4966",
>     "x-ratelimit-reset": "1372700873",
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

Todos os cabeçalhos têm o mesmo valor da string que os cabeçalhos de HTTP com uma exceção notável: Link.  Cabeçalhos de link são pré-analisados para você e chegam como um array de tuplas de `[url, options]`.

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

## Fusos horários

Algumas solicitações que criam novos dados, como a criação de um novo commit, permitem que você forneça informações do fuso horário ao especificar ou marcas de tempo. Aplicamos as seguintes regras, por ordem de prioridade, para determinar as informações do fuso horário para essas chamadas da API.

* [Fornecer explicitamente uma marca de tempo ISO 8601 com informações de fuso horário](#explicitly-providing-an-iso-8601-timestamp-with-timezone-information)
* [Usar o cabeçalho `Time-Zone`](#using-the-time-zone-header)
* [Usar o último fuso horário conhecido para o usuário](#using-the-last-known-timezone-for-the-user)
* [Definir como padrão UTC sem outras informações de fuso horário](#defaulting-to-utc-without-other-timezone-information)

Observe que essas regras se aplicam somente a dados passados para a API, não a dados retornados pela API. Conforme mencionado no "[Esquema](#schema)", os registros de hora retornados pela API estão em formato UTC, ISO 8601.

### Fornecer explicitamente uma marca de tempo ISO 8601 com informações de fuso horário

Para chamadas de API que permitem que uma marca de tempo seja especificada, usamos essa marca de tempo exata. Um exemplo disso é a [API Commits](/rest/reference/git#commits).

Esses carimbos de data/hora se parecem com `2014-02-27T15:05:06+01:00`. Confira também [este exemplo](/rest/reference/git#example-input) para saber como esses carimbos de data/hora podem ser especificados.

### Usar o cabeçalho `Time-Zone`

É possível fornecer um cabeçalho `Time-Zone` que define um fuso horário de acordo com a [lista de nomes do banco de dados Olson](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```shell
$ curl -H "Time-Zone: Europe/Amsterdam" -X POST {% data variables.product.api_url_pre %}/repos/github/linguist/contents/new_file.md
```

Isso significa que geramos uma marca de tempo no momento em que sua chamada de API é feita no fuso horário que este cabeçalho define. Por exemplo, o [API de Conteúdo](/rest/reference/repos#contents) gera um commit do git para cada adição ou alteração e usa a hora atual como marca de tempo. Este cabeçalho determinará o fuso horário usado para gerar essa marca de tempo atual.

### Usar o último fuso horário conhecido para o usuário

Se nenhum cabeçalho `Time-Zone` for especificado e você fizer uma chamada autenticada para a API, nós usaremos o último fuso horário conhecido para o usuário autenticado. O último fuso horário conhecido é atualizado sempre que você navegar no site de {% data variables.product.product_name %}.

### Definir como padrão UTC sem outras informações de fuso horário

Se as etapas acima não resultarem em nenhuma informação, usaremos UTC como o fuso horário para criar o commit do git.
