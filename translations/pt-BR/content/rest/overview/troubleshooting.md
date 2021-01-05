---
title: Solução de Problemas
intro: Aprenda a resolver os problemas mais comuns que as pessoas enfrentam na API REST.
redirect_from:
  - /v3/troubleshooting
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---



Se você estiver encontrando algumas situações estranhas na API, aqui está uma lista de resoluções de alguns dos problemas que você pode estar enfrentando.

### `404` error for an existing repository

Normalmente, enviamos um erro `404` quando seu cliente não está autenticado corretamente. Nesses casos, você pode esperar ver um `403 Forbidden`. No entanto, como não queremos fornecer _nenhuma_ informação sobre repositórios privados, a API retorna um erro `404`.

Para solucionar o problema, verifique se [você está efetuando a autenticação corretamente](/guides/getting-started/), se [seu token de acesso do OAuth tem os escopos necessários](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) e se as [restrições de aplicativos de terceiros][oap-guide] não estão bloqueando o acesso.

### Not all results returned

A maioria das chamadas da API que acessam uma lista de recursos (_por exemplo,_, usuários, issues, _etc._) é compatível com a paginação. Se você está fazendo solicitações e recebendo um conjunto incompleto de resultados, provavelmente você só está vendo a primeira página. Você precisará solicitar as páginas restantes para obter mais resultados.

É importante *não* tentar adivinhar o formato da URL de paginação. Nem todas as chamadas de API usam a mesma estrutura. Em vez disso, extraia as informações de paginação do [Cabeçalho do link](/rest#pagination), que é enviado com cada solicitação.

{% if currentVersion == "free-pro-team@latest" %}
### Basic authentication errors

On November 13, 2020 username and password authentication to the REST API and the OAuth Authorizations API were deprecated and no longer work.

#### Using `username`/`password` for basic authentication

If you're using `username` and `password` for API calls, then they are no longer able to authenticate. Por exemplo:

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

Instead, use a [personal access token](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) when testing endpoints or doing local development:

```bash
curl -H 'Authorization: token my_access_token' https://api.github.com/user/repos
```

For OAuth Apps, you should use the [web application flow](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to generate an OAuth token to use in the API call's header:

```bash
curl -H 'Authorization: token my-oauth-token' https://api.github.com/user/repos
```

#### Calls to OAuth Authorizations API

If you're making [OAuth Authorization API](/enterprise-server/rest/reference/oauth-authorizations) calls to manage your OAuth app's authorizations or to generate access tokens, similar to this example:

```bash
curl -u my_username:my_password -X POST "https://api.github.com/authorizations" -d '{"scopes":["public_repo"], "note":"my token", "client_id":"my_client_id", "client_secret":"my_client_secret"}'
```

Then you must switch to the [web application flow](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to generate access tokens.

{% endif %}

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
