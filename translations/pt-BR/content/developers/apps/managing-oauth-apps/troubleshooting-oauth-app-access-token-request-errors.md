---
title: Solucionar problemas de erros na solicitação de token de acesso do OAuth
intro: '{% data reusables.shortdesc.troubleshooting_access_token_reques_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors
  - /developers/apps/troubleshooting-oauth-app-access-token-request-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Troubleshoot token request
ms.openlocfilehash: 7764d0e1f23a3d2dac841412ea0120487c8f6560
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083973'
---
{% note %}

**Observação:** esses exemplos mostram apenas respostas JSON.

{% endnote %}

## Credenciais do cliente incorretas

Se a client\_id e o client\_secret que você transmitir estiverem incorretos, você receberá esta resposta de erro.

```json
{
  "error": "incorrect_client_credentials",
  "error_description": "The client_id and/or client_secret passed are incorrect.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#incorrect-client-credentials"
}
```

Para resolver este erro, verifique se você tem as credenciais corretas para o seu {% data variables.product.prodname_oauth_app %}. Verifique novamente `client_id` e `client_secret` para ver se eles estão corretos e se estão sendo transmitidos corretamente para o {% data variables.product.product_name %}.

## Erro no redirecionamento do URI

Se você fornecer um `redirect_uri` que não corresponde ao que você registrou com o {% data variables.product.prodname_oauth_app %}, você receberá esta mensagem de erro:

```json
{
  "error": "redirect_uri_mismatch",
  "error_description": "The redirect_uri MUST match the registered callback URL for this application.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-authorization-request-errors/#redirect-uri-mismatch2"
}
```

Para corrigir este erro, forneça um `redirect_uri` que corresponda ao que você registrou ou deixe este parâmetro de fora para usar o padrão registrado com seu aplicativo.

## Código de verificação incorreto

```json
{
  "add_scopes": [
    "repo"
  ],
  "note": "admin script"
}
```

Se o código de verificação que você transmitiu estiver incorreto, estiver vencido ou não corresponder ao que você recebeu na primeira solicitação de autorização, você receberá este erro.

```json
{
  "error": "bad_verification_code",
  "error_description": "The code passed is incorrect or expired.",
  "error_uri": "/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code"
}
```

Para resolver esse erro, inicie o [processo de autorização do OAuth novamente](/apps/building-oauth-apps/authorizing-oauth-apps/) e obtenha um novo código.
