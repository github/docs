---
title: Primeiros passos com a API REST
intro: 'Aprenda os fundamentos para usar a API REST, começando com a autenticação e alguns exemplos de pontos de extremidade.'
redirect_from:
  - /guides/getting-started/
  - /v3/guides/getting-started
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---


Vamos andar pelos conceitos básicos da API, à medida que abordamos alguns casos de uso diário.

### Visão Geral

A maioria dos aplicativos usará uma [biblioteca de segurança][wrappers] existente na linguagem da sua escolha, mas é importante familiarizar-se primeiro com os métodos HTTP e de API subjacentes.

Não há uma maneira mais fácil dar os primeiros passos do que através do [cURL][curl]. {% if currentVersion == "free-pro-team@latest" %} Se você estiver usando um cliente alternativo, observe que você deve enviar um [cabeçalho do Agente de Usuário](/rest/overview/resources-in-the-rest-api#user-agent-required) válido na sua solicitação.{% endif %}

#### Hello World

Vamos começar testando a nossa configuração. Abra uma instrução de comando e digite o comando a seguir:

```shell
$ curl https://api.github.com/zen

> Keep it logically awesome.
```

A resposta será uma seleção aleatória das nossas filosofias de design.

Em seguida, vamos fazer `GET` para o [perfil de GitHub][users api] de [Chris Wanstrath][defunkt github]:

```shell
# GET /users/defunkt
$ curl https://api.github.com/users/defunkt

> {
>   "login": "defunkt",
>   "id": 2,
>   "url": "{% data variables.product.api_url_pre %}/users/defunkt",
>   "html_url": "https://github.com/defunkt",
>   ...
> }
```

Mmmmm, tem sabor de [JSON][json]. Vamos adicionar o sinalizador `-i` para incluir cabeçalhos:

```shell
$ curl -i https://api.github.com/users/defunkt

> HTTP/2 200
> Server: GitHub.com
> Date: Sun, 11 Nov 2012 18:43:28 GMT
> Content-Type: application/json; charset=utf-8
> ETag: "bfd85cbf23ac0b0c8a29bee02e7117c6"
> X-RateLimit-Limit: 60
> X-RateLimit-Remaining: 57
> X-RateLimit-Reset: 1352660008
> X-GitHub-Media-Type: github.v3
> Vary: Accept
> Cache-Control: public, max-age=60, s-maxage=60
> X-Content-Type-Options: nosniff
> Content-Length: 692
> Last-Modified: Tue, 30 Oct 2012 18:58:42 GMT

> {
>   "login": "defunkt",
>   "id": 2,
>   "url": "{% data variables.product.api_url_pre %}/users/defunkt",
>   "html_url": "https://github.com/defunkt",
>   ...
> }
```

Há algumas partes interessantes nos cabeçalhos da resposta. Como esperado, o `Content-Type` é `application/json`.

Qualquer cabeçalho que começar com `X -` é um cabeçalho personalizado e não está incluído nas especificações de HTTP. Por exemplo:

* `X-GitHub-Media-Type` tem um valor de `github.v3`. Isso nos permite saber o [tipo de mídia][media types] para a resposta. Tipos de mídia nos ajudaram a criar uma versão da nossa saída na API v3. Vamos falar mais sobre isso mais adiante.
* Anote os cabeçalhos `X-RateLimit-Limit` e `X-RateLimit-Remaining`. Este par de cabeçalhos indica [quantas solicitações um cliente pode fazer][rate-limiting] em um período de tempo consecutivo (geralmente, uma hora) e quantas dessas solicitações o cliente já gastou.

### Autenticação

Clientes sem autenticação podem fazer 60 solicitações por hora. Para obter mais solicitações por hora, precisaremos _efetuar a autenticação_. Na verdade, fazer qualquer coisa interessante com a API de {% data variables.product.product_name %} requer [autenticação][authentication].

#### Usar tokens de acesso pessoal

A melhor e mais fácil maneira de efetuar a autenticação com a API de {% data variables.product.product_name %} é usando a Autenticação Básica [por meio dos tokens do OAuth](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens). Os tokens do OAuth incluem [os tokens de acesso pessoal][personal token].

Use um sinalizador `-u` para definir o seu nome de usuário:

```shell
$ curl -i -u <em>your_username</em> {% data variables.product.api_url_pre %}/users/octocat

```

Quando solicitado, você poderá inserir o seu token OAuth, mas nós recomendamos que você configure uma variável para isso:

Você pode usar `-u "username:$token"` e configurar uma variável para o `token` para evitar deixar seu token no histórico do shell, o que deve ser evitado.

```shell
$ curl -i -u <em>username:$token</em> {% data variables.product.api_url_pre %}/users/octocat

```

Ao efetuar a autenticação, você deverá ver seu limite de taxa disparado para 5.000 slicitações por hora, conforme indicado no cabeçalho `X-RateLimit-Limit`. Além de fornecer mais chamadas por hora, a autenticação permite que você leia e escreva informações privadas usando a API.

Você pode facilmente [criar um **token de acesso pessoal**][personal token] usando a sua [página de configurações de tokens de acesso pessoal][tokens settings]:

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
![Seleção de Token Pessoal](/assets/images/personal_token.png)
{% endif %}

{% if currentVersion == "github-ae@latest" %}
![Seleção de Token Pessoal](/assets/images/help/personal_token_ghae.png)
{% endif %}

#### Obtenha seu próprio perfil de usuário

Após efetuar a autenticação corretamente, você poderá aproveitar as permissões associadas à sua conta de {% data variables.product.product_name %}. Por exemplo, tente obter

```shell
$ curl -i -u <em>your_username</em>:<em>your_token</em> {% data variables.product.api_url_pre %}/user

> {
>   ...
>   "plan": {
>     "space": 2516582,
>    "collaborators": 10,
>    "private_repos": 20,
>    "name": "medium"
>  }
>   ...
> }
```

Desta vez, além do mesmo conjunto de informações públicas que recuperamos para [@defunkt][defunkt github] anteriormente, você também deverá ver as informações não públicas do seu perfil de usuário. Por exemplo, você verá um objeto `plano` na resposta, que fornece detalhes sobre o plano de {% data variables.product.product_name %} para a conta.

#### Usar tokens do OAuth para aplicativos

Os aplicativos que precisam ler ou escrever informações privadas usando a API em nome de outro usuário devem usar o [OAuth][oauth].

O OAuth usa _tokens_. Os tokens fornecem dois grandes recursos:

* **Acesso revogável**: os usuários podem revogar a autorização a aplicativos de terceiros a qualquer momento
* **Acesso limitado**: os usuários podem revisar o acesso específico que um token fornecerá antes de autorizar um aplicativo de terceiros

Os tokens devem ser criados por meio de um [fluxo web][webflow]. Um aplicativo envia os usuários para {% data variables.product.product_name %} para efetuar o login. {% data variables.product.product_name %} apresenta uma caixa de diálogo, que indica o nome do aplicativo, bem como o nível de acesso que o aplicativo tem uma após ser autorizado pelo usuário. Depois que um usuário autoriza o acesso, {% data variables.product.product_name %} redireciona o usuário de volta para o aplicativo:

![Diálogo do GitHub's OAuth](/assets/images/oauth_prompt.png)

**Trate os tokens de OAuth como senhas!** Não compartilhe-os com outros usuários ou armazene-os em lugares inseguros. Os tokens nestes exemplos são falsos e os nomes foram alterados para proteger os inocentes.

Agora que demos um jeito de fazer chamadas autenticadas, vamos seguir em frente para a [API de repositórios][repos-api].

### Repositórios

Quase qualquer uso significativo da API de {% data variables.product.product_name %} envolverá algum nível de informação do repositório. Podemos [`OBTER` informações do repositório][get repo] da mesma forma que obtemos os informações do usuário anteriormente:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/twbs/bootstrap
```

Da mesma forma, podemos [visualizar repositórios para o usuário autenticado][user repos api]:

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/user/repos
```

Ou podemos [listar repositórios para outro usuário][other user repos api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/octocat/repos
```

Ou podemos [listar repositórios para uma organização][org repos api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/orgs/octo-org/repos
```

As informações retornadas dessas chamadas dependerão de quais escopos o nosso token terá quando efetuarmos a autenticação:

{% if currentVersion != "github-ae@latest" %}
* Um token com o escopo `public_repo` [][scopes] retorna uma resposta que inclui todos os repositórios públicos que temos acesso para ver em github.com.{% endif %}
* Um token com `repositório` [escopo][scopes] retorna uma resposta que inclui todos os repositórios {% if currentVersion ! "github-ae@latest" %}públicos{% else %}internos{% endif %} e privados aos quais temos acesso para ver em {% data variables.product.product_location %}.

Conforme a [documentação][repos-api] indica, estes métodos usam um parâmetro `tipo` que pode filtrar os repositórios retornados com base no tipo de acesso que o usuário possui para o repositório. Desta forma, podemos buscar apenas repositórios de propriedade direta, repositórios da organização ou repositórios nos quais o usuário colabora por meio de uma equipe.

```shell
$ curl -i "{% data variables.product.api_url_pre %}/users/octocat/repos?type=owner"
```

Neste exemplo, pegamos apenas os repositórios que o octocat possui, não os nos quais ela colabora. Observe a URL entre aspas acima. Dependendo de sua configuração do shell, a cURL às vezes exigirá uma URL entre aspas ou irá ignorar a string de consulta.

#### Criar um repositório

Buscar informações para repositórios existentes é um caso de uso comum, mas a
API de {% data variables.product.product_name %} também é compatível com a criação de novos repositórios. Para [criar um repositório][create repo],
precisamos `POST` alguns JSON que contém informações e opções de configuração.

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    -d '{ \
        "name": "blog", \
        "auto_init": true, \
        "private": true, \
        "gitignore_template": "nanoc" \
      }' \
    {% data variables.product.api_url_pre %}/user/repos
```

Neste pequeno exemplo, criamos um novo repositório privado para o nosso blogue (a ser servido no [GitHub Pages][pages], talvez). Embora o blogue {% if currentVersion != "github-ae@latest" %}seja público{% else %}é acessível a todos os integrantes da empresa{% endif %}, tornamos o repositório privado. In this single step, we'll also initialize it with a README and a [nanoc][nanoc]-flavored [.gitignore template][gitignore templates].

O repositório resultante será encontrado em `https://github.com/<your_username>/blog`. Para criar um repositório sob uma organização da qual você é proprietário, altere apenas o método API de `/user/repos` para `/orgs/<org_name>/repos`.

Em seguida, vamos buscar nosso repositório recém-criado:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/pengwynn/blog

> HTTP/2 404

> {
>    "message": "Not Found"
> }
```

Ah não! Onde ele foi parar? Uma vez que criamos o repositório como _privado_, precisamos autenticá-lo para poder vê-lo. Se você é um usuário de HTTP, você pode esperar um `403`. Como não queremos vazar informações sobre repositórios privados, a API do {% data variables.product.product_name %} retorna um `404` neste caso, como se dissesse "não podemos confirmar nem negar a existência deste repositório".

### Problemas

A interface de usuário para problemas no {% data variables.product.product_name %} visa a fornecer fluxo de trabalho "apenas suficiente" enquanto permanece fora de seu caminho. Com {% data variables.product.product_name %} [API de problemas][issues-api], você pode extrair dados ou criar problemas a partir de outras ferramentas para criar um fluxo de trabalho que funcione para a sua equipe.

Assim como o github.com, a API fornece alguns métodos para exibir problemas para o usuário autenticado. Para [ver todos os seus problemas][get issues api], chame `GET /issues`:

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/issues
```

Para obter apenas os [problemas sob uma das suas organizações de {% data variables.product.product_name %}][get issues api], chame `GET
/orgs/<org>/issues`:

```shell
$ curl -i -H "Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}" \
    {% data variables.product.api_url_pre %}/orgs/rails/issues
```

Também podemos obter [todos os problemas sob um único repositório][repo issues api]:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues
```

#### Paginação

Um projeto do tamanho de Rails tem milhares de problemas. Vamos precisar [paginar][pagination], fazendo várias chamadas de API para obter os dados. Vamos repetir essa última chamada, anotando os cabeçalhos de resposta:

```shell
$ curl -i {% data variables.product.api_url_pre %}/repos/rails/rails/issues

> HTTP/2 200

> ...
> Link: &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=2&gt;; rel="next", &lt;{% data variables.product.api_url_pre %}/repositories/8514/issues?page=30&gt;; rel="last"
> ...
```

O [cabeçalho de `Link`][link-header] fornece uma forma de resposta para vincular os recursos externos, nesse caso, as páginas de dados adicionais. Como nossa chamada encontrou mais de trinta problemas (o tamanho da página padrão), a API nos informa onde podemos encontrar a próxima página e a última página de resultados.

#### Criar um problema

Agora que vimos como paginar listas de problemas, vamos [criar um problema][create issue] a partir da API.

Para criar um problema, precisamos estar autenticados. Portanto, passaremos um token do OAuth no cabeçalho. Além disso, passaremos o título, texto, e as etiquetas no texto do JSON para o caminho `/issues` abaixo do repositório em que queremos criar o problema:

```shell
$ curl -i -H 'Authorization: token {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghp_16C7e42F292c6912E7710c838347Ae178B4a{% else %}5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4{% endif %}' \
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

A resposta nos dá algumas indicações sobre a questão recém-criada, tanto no cabeçalho de resposta da `Localização` quanto no campo `url` da resposta do JSON.

### Solicitações condicionais

Uma grande parte de ser um bom cidadão da API é respeitar os limites de taxa por meio de armazenamento de informações que não mudaram. A API é compatível com [solicitações condicionais][conditional-requests] e ajuda você a fazer a coisa certa. Considere a primeira chamada de que fizemos para obter o perfil de defunkt:

```shell
$ curl -i {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 200
> ETag: "bfd85cbf23ac0b0c8a29bee02e7117c6"
```

Além do texto do JSON, anote o código de status de HTTP de `200` e o cabeçalho `ETag`. O [ETag][etag] é uma impressão digital da resposta. Se passarmos isso em chamadas subsequentes, podemos dizer à API para nos dar o recurso novamente, somente se tiver mudado:

```shell
$ curl -i -H 'If-None-Match: "bfd85cbf23ac0b0c8a29bee02e7117c6"' \
$    {% data variables.product.api_url_pre %}/users/defunkt

> HTTP/2 304
```

O status `304` indica que o recurso não mudou desde a última vez que pedimos e a resposta não conterá texto. Como um bônus, as respostas de `304` não contam contra o seu [limite de taxa][rate-limiting].

Nossa! Agora você conhece os princípios básicos da API de {% data variables.product.product_name %}!

* Autenticação básica do & OAuth
* Buscar e criar de repositórios e problemas
* Solicitações condicionais

Continue aprendendo com o próximo guia da API [Princípios básicos da autenticação][auth guide]!

[wrappers]: /libraries/
[curl]: http://curl.haxx.se/
[media types]: /rest/overview/media-types
[oauth]: /apps/building-integrations/setting-up-and-registering-oauth-apps/
[webflow]: /apps/building-oauth-apps/authorizing-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[scopes]: /apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
[repos-api]: /rest/reference/repos
[repos-api]: /rest/reference/repos
[pages]: http://pages.github.com
[nanoc]: http://nanoc.ws/
[gitignore templates]: https://github.com/github/gitignore
[issues-api]: /rest/reference/issues
[link-header]: https://www.w3.org/wiki/LinkHeader
[conditional-requests]: /rest#conditional-requests
[rate-limiting]: /rest#rate-limiting
[rate-limiting]: /rest#rate-limiting
[users api]: /rest/reference/users#get-a-user
[defunkt github]: https://github.com/defunkt
[defunkt github]: https://github.com/defunkt
[json]: http://en.wikipedia.org/wiki/JSON
[authentication]: /rest#authentication
[personal token]: /articles/creating-an-access-token-for-command-line-use
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
[get issues api]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
[repo issues api]: /rest/reference/issues#list-repository-issues
[etag]: http://en.wikipedia.org/wiki/HTTP_ETag
