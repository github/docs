---
title: Solucionar problemas de erros de solicitação de autorização
intro: '{% data reusables.shortdesc.troubleshooting_authorization_request_errors_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/managing-oauth-apps/troubleshooting-authorization-request-errors
  - /apps/managing-oauth-apps/troubleshooting-authorization-request-errors
  - /developers/apps/troubleshooting-authorization-request-errors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Troubleshoot authorization
ms.openlocfilehash: 8706453423298277ed27ac5f950c562db8a42a09
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083974'
---
## Aplicativo suspenso

Se o aplicativo OAuth que você configurou foi suspenso (em razão de abusos, spam, ou de má utilização da API), o GitHub irá redirecionar para a URL de chamada de retorno registrada, usando os parâmetros a seguir para resumir o erro:

    http://your-application.com/callback?error=application_suspended
      &error_description=Your+application+has+been+suspended.+Contact+support@github.com.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23application-suspended
      &state=xyz

Para resolver problemas com aplicativos suspensos, entre em contato com {% data variables.contact.contact_support %}.

## Erro no redirecionamento do URI

Se você fornecer um `redirect_uri` que não corresponda ao que você registrou no seu aplicativo, o GitHub redirecionará você para a URL de retorno de chamada registrada com os seguintes parâmetros resumindo o erro:

    http://your-application.com/callback?error=redirect_uri_mismatch
      &error_description=The+redirect_uri+MUST+match+the+registered+callback+URL+for+this+application.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23redirect-uri-mismatch
      &state=xyz

Para corrigir este erro, forneça um `redirect_uri` que corresponda ao que você registrou ou deixe este parâmetro de fora para usar o padrão registrado com seu aplicativo.

### Acesso negado

Se o usuário rejeitar o acesso ao seu aplicativo, o GitHub o redirecionará para a URL de retorno de chamada registrada com os seguintes parâmetros resumindo o erro:

    http://your-application.com/callback?error=access_denied
      &error_description=The+user+has+denied+your+application+access.
      &error_uri=/apps/building-integrations/setting-up-and-registering-oauth-apps/troubleshooting-authorization-request-errors/%23access-denied
      &state=xyz

Não há nada que você possa fazer aqui, pois os usuários são livres para optar por não usar seu aplicativo. Frequentemente, os usuários apenas fecharão a janela ou pressionarão "Voltar" no navegador. Portanto, é provável que você nunca veja esse erro.
