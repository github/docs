---
title: Solucionar problemas de erros na solicitação de token de acesso do OAuth
intro: '{% data reusables.shortdesc.troubleshooting_access_token_reques_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/
  - /apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /developers/apps/troubleshooting-oauth-app-access-token-request-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - OAuth Apps
---
{% note %}

**Observação:** Esses exemplos mostram apenas respostas do JSON.

{% endnote %}

### Credenciais do cliente incorretas

Se o cliente\_id e o cliente\_secret que você inseriu estiverem incorretos, você receberá essa resposta de erro.

```json
{
  "error": "incorrect_client_credentials",
  "error_description": "The client_id and/or client_secret passed are incorrect.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#incorrect-client-credentials"
}
```

Para resolver este erro, verifique se você tem as credenciais corretas para o seu {% data variables.product.prodname_oauth_app %}. Verifique novamente o `client_id` e `client_secret` para certificar-se de que estão corretos e que são informados corretamente para {% data variables.product.product_name %}.

### Erro no redirecionamento do URI

Se você fornecer um `redirect_uri` que não coincide com o que você registrou com o seu {% data variables.product.prodname_oauth_app %}, você receberá esta mensagem de erro:

```json
{
  "error": "redirect_uri_mismatch",
  "error_description": "The redirect_uri MUST match the registered callback URL for this application.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-authorization-request-errors/#redirect-uri-mismatch2"
}
```

Para corrigir este erro, forneça um `redirect_uri` que corresponda ao que você registrou ou deixe este parâmetro de fora para usar o padrão registrado com o seu aplicativo.

### Código de verificação incorreto

```json
{
  "add_scopes": [
    "repo"
  ],
  "note": "admin script"
}
```

Se o código de verificação que você informou estiver incorreto, expirado, ou não corresponder ao que você recebeu na primeira solicitação de autorização, você receberá este erro.

```json
{
  "error": "bad_verification_code",
  "error_description": "The code passed is incorrect or expired.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code"
}
```

Para corrigir este erro, inicie o [processo de autorização do OAuth novamente](/apps/building-oauth-apps/authorizing-oauth-apps/) e obtenha um novo código.
