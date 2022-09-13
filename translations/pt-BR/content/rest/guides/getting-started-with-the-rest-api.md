---
title: Introdução à API REST
intro: 'Aprenda os fundamentos para usar a API REST, começando com a autenticação e alguns exemplos de pontos de extremidade.'
redirect_from:
  - /guides/getting-started
  - /v3/guides/getting-started
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - REST API
ms.openlocfilehash: a466a3ccad214c8fe797dd73e4e96af3ab6eead8
ms.sourcegitcommit: 8544f120269257d01adfe4a27b62f08fc8691727
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/02/2022
ms.locfileid: '147445077'
---
Vamos andar pelos conceitos básicos da API, à medida que abordamos alguns casos de uso diário.

{% data reusables.rest-api.dotcom-only-guide-note %}

## <a name="overview"></a>Visão geral

A maioria dos aplicativos usará uma [biblioteca de wrapper][wrappers] existente na linguagem de sua escolha, mas é importante se familiarizar primeiro com os métodos HTTP e de API subjacentes.

Não há maneira mais fácil de fazer um teste do que por meio do [cURL][curl].{% ifversion fpt or ghec %} Se estiver usando um cliente alternativo, observe que é necessário enviar um [cabeçalho User Agent](/rest/overview/resources-in-the-rest-api#user-agent-required) válido na solicitação.{% endif %}

### <a name="hello-world"></a>Olá, Mundo

Vamos começar testando a nossa configuração. Abra um prompt de comando e insira o seguinte comando:

```shell
$ curl https://api.github.com/zen

> Keep it logically awesome.
```

A resposta será uma seleção aleatória das nossas filosofias de design.

Em seguida, vamos executar `GET` no [perfil do GitHub][users api] de [Chris Wanstrath][defunkt github]:

```shell
# GET /users/defunkt
$ curl https://api.github.com/users/defunkt

> {
>   "login": "defunkt",
>   "id": 2,
>   "node_id": "MDQ6VXNlcjI=",
>   "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
>   "gravatar_id": "",
>   "url": "https://api.github.com/users/defunkt",
>   "html_url": "https://github.com/defunkt",
>   ...
> }
```

Hmmmmm, tem gosto de [JSON][json]. Vamos adicionar o sinalizador `-i` para incluir cabeçalhos:

```shell
$ curl -i https://api.github.com/users/defunkt

> HTTP/2 200
> server: GitHub.com
> date: Thu, 08 Jul 2021 07:04:08 GMT
> content-type: application/json; charset=utf-8
> cache-control: public, max-age=60, s-maxage=60
> vary: Accept, Accept-Encoding, Accept, X-Requested-With
> etag: W/"61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"
> last-modified: Fri, 01 Nov 2019 21:56:00 GMT
> x-github-media-type: github.v3; format=json
> access-control-expose-headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, Deprecation, Sunset
> access-control-allow-origin: *
> strict-transport-security: max-age=31536000; includeSubdomains; preload
> x-frame-options: deny
> x-content-type-options: nosniff
> x-xss-protection: 0
> referrer-policy: origin-when-cross-origin, strict-origin-when-cross-origin
> content-security-policy: default-src 'none'
> x-ratelimit-limit: 60
> x-ratelimit-remaining: 53
> x-ratelimit-reset: 1625731053
> x-ratelimit-resource: core
> x-ratelimit-used: 7
> accept-ranges: bytes
> content-length: 1305
> x-github-request-id: 9F60:7019:ACC5CD5:B03C931:60E6A368
>
> {
>  "login": "defunkt",
>  "id": 2,
>  "node_id": "MDQ6VXNlcjI=",
>  "avatar_url": "https://avatars.githubusercontent.com/u/2?v=4",
>  "gravatar_id": "",
>  "url": "https://api.github.com/users/defunkt",
>  "html_url": "https://github.com/defunkt",
>
>   ...
> }
```

Há algumas partes interessantes nos cabeçalhos da resposta. Como esperado, o `Content-Type` é `application/json`.

Todo cabeçalho que começa com `X-` é um cabeçalho personalizado e não está incluído nas especificações de HTTP. Por exemplo, observe os cabeçalhos `X-RateLimit-Limit` e `X-RateLimit-Remaining`. Este par de cabeçalhos indica [quantas solicitações um cliente pode fazer][rate-limiting] em um período consecutivo (geralmente, uma hora) e quantas dessas solicitações o cliente já gastou.

## <a name="authentication"></a>Autenticação

Clientes sem autenticação podem fazer 60 solicitações por hora. Para obter mais solicitações por hora, precisaremos nos _autenticar_. De fato, fazer qualquer coisa interessante com a API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} exige [autenticação][authentication].

### <a name="using-personal-access-tokens"></a>Usar tokens de acesso pessoal

A maneira mais fácil e melhor de se autenticar na API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} é usando a Autenticação Básica [por meio de tokens OAuth](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens). Os tokens OAuth incluem [tokens de acesso pessoal][personal token].

Use um sinalizador `-u` para definir seu nome de usuário:

```shell
$ curl -i -u <em>your_username</em> {% data variables.product.api_url_pre %}/users/octocat

```

Quando solicitado, você poderá inserir o seu token OAuth, mas nós recomendamos que você configure uma variável para isso:

Você pode usar `-u "your_username:$token"` e configurar uma variável para `token` a fim de evitar deixar o token no histórico do shell, que deve ser evitado.

```shell
$ curl -i -u <em>your_username:$token</em> {% data variables.product.api_url_pre %}/users/octocat

```

Ao se autenticar, você verá seu limite de taxa disparado para cinco mil solicitações por hora, conforme indicado no cabeçalho `X-RateLimit-Limit`. Além de fornecer mais chamadas por hora, a autenticação permite que você leia e escreva informações privadas usando a API.

Você pode [criar com facilidade um **token de acesso pessoal**][personal token] usando a [página Configurações de tokens de acesso pessoal][tokens settings]:

{% warning %}

Para ajudar a manter suas informações seguras, é altamente recomendável definir um vencimento para seus tokens de acesso pessoal.

{% endwarning %}

{% ifversion fpt or ghes or ghec %} ![Seleção de Token Pessoal](/assets/images/personal_token.png) {% endif %}

{% ifversion ghae %} ![Seleção de Token Pessoal](/assets/images/help/personal_token_ghae.png) {% endif %}

As solicitações de API que usam um token de acesso pessoal prestes a vencer retornam a data de validade do token no cabeçalho `GitHub-Authentication-Token-Expiration`. Você pode usar o cabeçalho nos seus scripts para fornecer uma mensagem de aviso quando o token estiver próximo da data de vencimento.

### <a name="get-your-own-user-profile"></a>Obtenha seu próprio perfil de usuário

Quando autenticado corretamente, você poderá aproveitar as permissões associadas à sua conta no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Por exemplo, experimente obter [seu perfil de usuário][auth user api]:

```shell
$ curl -i -u <em>your_username</em>:<em>your_token</em> {% data variables.product.api_url_pre %}/user

> {
>   ...
>   "plan": {
>     "space": 2516582,
>    "collaborators": 10,
>    "private_repos": 20,
>    "name&quot;: &quot;medium"
>  }
>   ...
> }
```

Desta vez, além do mesmo conjunto de informações públicas que recuperamos de [@defunkt][defunkt github] anteriormente, você também verá as informações não públicas do seu perfil de usuário. Por exemplo, você verá um objeto `plan` na resposta, que fornece detalhes sobre o plano do {% data variables.product.product_name %} para a conta.

### <a name="using-oauth-tokens-for-apps"></a>Usar tokens do OAuth para aplicativos

Os aplicativos que precisam ler ou gravar informações privadas usando a API em nome de outro usuário devem usar o [OAuth][oauth].

O OAuth usa _tokens_. Os tokens fornecem dois grandes recursos:

* **Acesso revogável**: os usuários podem revogar a autorização a aplicativos de terceiros a qualquer momento
* **Acesso limitado**: os usuários podem revisar o acesso específico que um token fornecerá antes de autorizar um aplicativo de terceiros

Os tokens devem ser criados por meio de um [fluxo da Web][webflow]. Um aplicativo envia os usuários ao {% data variables.product.product_name %} para fazer logon. Em seguida, o {% data variables.product.product_name %} apresenta uma caixa de diálogo, que indica o nome do aplicativo, bem como o nível de acesso que o aplicativo tem uma depois de ser autorizado pelo usuário. Depois que um usuário autoriza o acesso, o {% data variables.product.product_name %} redireciona o usuário novamente para o aplicativo:

![Diálogo do GitHub's OAuth](/assets/images/oauth_prompt.png)

**Trate os tokens OAuth como senhas.** Não os compartilhe com outros usuários nem os armazene em lugares não seguros. Os tokens destes exemplos são fictícios, e os nomes foram alterados para proteger os inocentes.

Agora que pegamos o jeito de fazer chamadas autenticadas, vamos passar para a [API de Repositórios][repos-api].

## <a name="repositories"></a>Repositórios

Quase qualquer uso significativo da API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} envolverá algum nível de informação do repositório. Podemos usar [`GET` para obter detalhes do repositório][get repo] da mesma forma que buscamos detalhes do usuário anteriormente:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/twbs/bootstrap
```

Da mesma forma, podemos [ver os repositórios do usuário autenticado][user repos api]:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/user/repos
```

Ou, então, podemos [listar os repositórios de outro usuário][other user repos api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat/repos
```

Outra opção é [listar os repositórios de uma organização][org repos api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/orgs/octo-org/repos
```

As informações retornadas dessas chamadas dependerão de quais escopos o nosso token terá quando efetuarmos a autenticação:

{%- ifversion fpt or ghec or ghes %}
* Um token com o [escopo][scopes] `public_repo` retorna uma resposta que inclui todos os repositórios públicos nos quais temos acesso de exibição na {% data variables.product.product_location %}.
{%- endif %}
* Um token com o [escopo][scopes] `repo` retorna uma resposta que inclui todos os repositórios {% ifversion fpt %}públicos ou privados{% elsif ghec or ghes %}públicos, privados ou internos{% elsif ghae %}privados ou internos{% endif %} nos quais temos acesso de exibição na {% data variables.product.product_location %}.

Como a [documentação][repos-api] indica, esses métodos usam um parâmetro `type` que pode filtrar os repositórios retornados com base no tipo de acesso que o usuário tem no repositório. Desta forma, podemos buscar apenas os repositórios de propriedade direta, os repositórios da organização ou os repositórios nos quais o usuário colabora por meio de uma equipe.

```shell
$ curl -i "{% data variables.product.api_url_pre %}/users/octocat/repos?type=owner"
```

Neste exemplo, usamos apenas os repositórios dos quais o Octocat é o proprietário, não aqueles nos quais ele colabora. Observe a URL entre aspas acima. Dependendo da configuração do shell, às vezes, o cURL exige uma URL entre aspas, caso contrário, ele ignora a cadeia de consulta.

### <a name="create-a-repository"></a>Criar um repositório

A busca de informações para repositórios existentes é um caso de uso comum, mas a API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} também dá suporte à criação de repositórios. Para [criar um repositório][create repo], precisamos executar `POST` em um JSON que contém detalhes e opções de configuração.

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    -d '{
        "name": "blog",
        "auto_init": true,
        "private": true,
        "gitignore_template&quot;: &quot;nanoc"
      }' \
    {% data variables.product.api_url_pre %}/user/repos
```

Neste exemplo mínimo, criamos um repositório privado para nosso blog (a ser fornecido no [GitHub Pages][pages], talvez). Embora o blogue {% ifversion not ghae %}seja público{% else %}, ele pode ser acessado por todos os integrantes da empresa{% endif %}, tornamos o repositório privado. Nesta única etapa, também o inicializaremos com um README e um [modelo .gitignore][nanoc] com a variante [nanoc][gitignore templates].

O repositório resultante será encontrado em `https://github.com/<your_username>/blog`.
Para criar um repositório em uma organização para a qual você é o proprietário, basta alterar o método de API de `/user/repos` para `/orgs/<org_name>/repos`.

Em seguida, vamos buscar nosso repositório recém-criado:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/pengwynn/blog

> HTTP/2 404

> {
>    "message": "Not Found"
> }
```

Ah não! Onde ele foi parar? Como criamos o repositório como _privado_, precisamos nos autenticar para vê-lo. Se você é um usuário antigo de HTTP, espere um `403`. Como não queremos vazar informações sobre os repositórios privados, a API do {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} retorna um `404`, neste caso, como se dissesse "não podemos confirmar nem negar a existência deste repositório".

## <a name="issues"></a>Problemas

A interface do usuário dos Problemas no {% data variables.product.product_name %} visa fornecer um fluxo de trabalho 'apenas suficiente', permanecendo fora do caminho. Com a [API de Problemas][issues-api] do {% data variables.product.product_name %}, você pode extrair dados ou criar problemas de outras ferramentas para criar um fluxo de trabalho que funcione para sua equipe.

Assim como o github.com, a API fornece alguns métodos para exibir os problemas para o usuário autenticado. Para [ver todos os seus problemas][get issues api], chame `GET /issues`:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/issues
```

Para obter apenas os [problemas em uma das suas organizações do {% data variables.product.product_name %}][get issues api], chame `GET
/orgs/<org>/issues`:

```shell
$ curl -i -H "Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a" \
    {% data variables.product.api_url_pre %}/orgs/rails/issues
```

Também podemos obter [todos os problemas em um só repositório][repo issues api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues
```

### <a name="pagination"></a>Paginação

Um projeto do tamanho de Rails tem milhares de problemas. Precisaremos fazer a [paginação][pagination] fazendo várias chamadas à API para obter os dados. Vamos repetir essa última chamada anotando os cabeçalhos de resposta:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues

> HTTP/2 200

> ...
> Link: &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=2&gt;; rel="next&quot;, &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=30&gt;; rel=&quot;last"
> ...
```

O [cabeçalho `Link`][link-header] fornece uma forma de uma resposta ser vinculada a recursos externos, nesse caso, páginas adicionais de dados. Como nossa chamada encontrou mais de trinta problemas (o tamanho da página padrão), a API nos informa o local em que podemos encontrar a próxima página e a última página de resultados.

### <a name="creating-an-issue"></a>Criar um problema

Agora que vimos como paginar listas de problemas, vamos [criar um problema][create issue] por meio da API.

Para criar um problema, precisamos estar autenticados. Portanto, transmitiremos um token OAuth no cabeçalho. Além disso, transmitiremos o título, o corpo e os rótulos no corpo do JSON para o caminho `/issues` abaixo do repositório em que queremos criar o problema:

```shell
$ curl -i -H 'Authorization: token ghp_16C7e42F292c6912E7710c838347Ae178B4a' \
$    -d '{ \
$         "title": "New logo", \
$         "body": "We should have one", \
$         "labels": ["design"] \
$       }' \
$    {% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues

> HTTP/2 201
> Location: {% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues/17
> X-RateLimit-Limit: 5000

> {
>   "pull_request": {
>     "patch_url": null,
>     "html_url": null,
>     "diff_url": null
>   },
>   "created_at": "2012-11-14T15:25:33Z",
>   "comments": 0,
>   "milestone": null,
>   "title": "New logo",
>   "body": "We should have one",
>   "user": {
>     "login": "pengwynn",
>     "gravatar_id": "7e19cd5486b5d6dc1ef90e671ba52ae0",
>     "avatar_url": "https://secure.gravatar.com/avatar/7e19cd5486b5d6dc1ef90e671ba52ae0?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
>     "id": 865,
>     "url": "{% data variables.product.api_url_pre %}/users/pengwynn"
>   },
>   "closed_at": null,
>   "updated_at": "2012-11-14T15:25:33Z",
>   "number": 17,
>   "closed_by": null,
>   "html_url": "https://github.com/pengwynn/api-sandbox/issues/17",
>   "labels": [
>     {
>       "color": "ededed",
>       "name": "design",
>       "url": "{% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/labels/design"
>     }
>   ],
>   "id": 8356941,
>   "assignee": null,
>   "state": "open",
>   "url": "{% data variables.product.api_url_pre %}/repos/pengwynn/api-sandbox/issues/17"
> }
```

A resposta nos dá algumas sugestões sobre o problema recém-criado, tanto no cabeçalho de resposta `Location`quanto no campo `url` da resposta JSON.

## <a name="conditional-requests"></a>Solicitações condicionais

Uma grande parte de ser um bom cidadão da API é respeitar os limites de taxa por meio de armazenamento de informações que não mudaram. A API dá suporte a [solicitações condicionais][conditional-requests] e ajuda você a fazer a coisa certa. Considere a primeira chamada que fizemos para obter o perfil de defunkt:

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 200
> etag: W/"61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"
```

Além do corpo do JSON, anote o código de status HTTP `200` e o cabeçalho `ETag`.
A [Etag][etag] é uma impressão digital da resposta. Se transmitirmos isso em chamadas posteriores, poderemos instruir a API a nos dar o recurso novamente, somente se ele tiver mudado:

```shell
$ curl -i -H 'If-None-Match: "61e964bf6efa3bc3f9e8549e56d4db6e0911d8fa20fcd8ab9d88f13d513f26f0"' \
$    {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 304
```

O status `304` indica que o recurso não mudou desde a última vez que o solicitamos, e a resposta não conterá nenhum corpo. Como um bônus, as respostas `304` não contam no [limite de taxa][rate-limiting].

Agora você sabe o básico da API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}!

* Autenticação Básica e OAuth
* Buscar e criar de repositórios e problemas
* Solicitações condicionais

Continue aprendendo com o próximo guia de API [Noções básicas de autenticação][auth guide].

[wrappers]: /libraries/
[curl]: http://curl.haxx.se/
[media types]: /rest/overview/media-types
[oauth]: /apps/building-integrations/setting-up-and-registering-oauth-apps/
[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[repos-api]: /rest/reference/repos
[pages]: http://pages.github.com
[nanoc]: http://nanoc.ws/
[gitignore templates]: https://github.com/github/gitignore
[issues-api]: /rest/reference/issues
[link-header]: https://www.w3.org/wiki/LinkHeader
[conditional-requests]: /rest#conditional-requests
[rate-limiting]: /rest/overview/resources-in-the-rest-api#rate-limit-http-headers
[users api]: /rest/reference/users#get-a-user
[auth user api]: /rest/reference/users#get-the-authenticated-user
[defunkt github]: https://github.com/defunkt
[json]: http://en.wikipedia.org/wiki/JSON
[authentication]: /rest#authentication
[2fa]: /articles/about-two-factor-authentication
[2fa header]: /rest/overview/other-authentication-methods#working-with-two-factor-authentication
[oauth section]: /rest/guides/getting-started-with-the-rest-api#oauth
[personal token]: /articles/creating-an-access-token-for-command-line-use
[tokens settings]: https://github.com/settings/tokens
[pagination]: /rest#pagination
[get repo]: /rest/reference/repos#get-a-repository
[create repo]: /rest/reference/repos#create-a-repository-for-the-authenticated-user
[create issue]: /rest/reference/issues#create-an-issue
[auth guide]: /guides/basics-of-authentication
[user repos api]: /rest/reference/repos#list-repositories-for-the-authenticated-user
[other user repos api]: /rest/reference/repos#list-repositories-for-a-user
[org repos api]: /rest/reference/repos#list-organization-repositories
[get issues api]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
[repo issues api]: /rest/reference/issues#list-repository-issues
[etag]: http://en.wikipedia.org/wiki/HTTP_ETag
[2fa section]: /rest/guides/getting-started-with-the-rest-api#two-factor-authentication
