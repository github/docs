---
title: Solucionar problemas de erros de solicitação de autorização
intro: '{% data reusables.shortdesc.troubleshooting_authorization_request_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-authorization-request-errors/
  - /apps/managing-oauth-apps/troubleshooting-authorization-request-errors
  - /developers/apps/troubleshooting-authorization-request-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

### Aplicativo suspenso

Se o aplicativo OAuth que você configurou foi suspenso (em razão de abusos, spam, ou de má utilização da API), o GitHub irá redirecionar para a URL de chamada de retorno registrada, usando os parâmetros a seguir para resumir o erro:

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

Para resolver problemas com aplicativos suspensos, entre em contato com {% data variables.contact.contact_support %}.

### Erro no redirecionamento do URI

Se você fornecer um `redirect_uri` que não corresponde ao que você registrou com o seu aplicativo, o GitHub irá redirecionar para a URL de chamada de retorno registrada com os parâmetros a seguir resumindo o erro:

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

Para corrigir este erro, ou forneça um `redirect_uri` que corresponda ao que você registrou ou deixe de fora este parâmetro para usar o padrão registrado com o seu aplicativo.

#### Acesso Negado

Se o usuário rejeitar o acesso ao seu aplicativo, o GitHub irá redirecionar para a URL de chamada de retorno registrada com os parâmetros a seguir resumindo o erro:

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

Não há nada que você possa fazer aqui, pois os usuários são livres para escolher não usar seu aplicativo. Frequentemente, os usuários irão apenas apenas fechar a janela ou pressionar "voltar" em seu navegador. Portanto, é provável que você nunca veja esse erro.
