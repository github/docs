---
title: Solução de problemas
intro: Aprenda a resolver os problemas mais comuns que as pessoas enfrentam na API REST.
redirect_from:
  - /v3/troubleshooting
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 0aa55fae9b33604b95e0eeee78e0712e60aaa5c7
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717674'
---
Se você estiver encontrando situações estranhas na API, veja uma lista de resoluções de alguns dos problemas que pode estar enfrentando.

## Erro `404` em um repositório existente

Normalmente, enviamos um erro `404` quando o cliente não está autenticado corretamente.
Você poderá esperar ver um erro `403 Forbidden` nesses casos. No entanto, como não queremos fornecer _nenhuma_ informação sobre os repositórios privados, a API retorna um erro `404`.

Para a solução de problemas, verifique se [você está se autenticando corretamente](/guides/getting-started/), se [o token de acesso OAuth tem os escopos necessários](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), se as [restrições de aplicativo de terceiros][oap-guide] não estão bloqueando o acesso e se [o token não expirou ou foi revogado](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).

## Nem todos os resultados retornados

A maioria das chamadas à API que acessa uma lista de recursos (_por exemplo_, usuários, problemas _etc._ ) dá suporte à paginação. Se você está fazendo solicitações e recebendo um conjunto incompleto de resultados, provavelmente, só está vendo a primeira página. Você precisará solicitar as páginas restantes para obter mais resultados.

É importante *não* tentar adivinhar o formato da URL de paginação. Nem todas as chamadas à API usam a mesma estrutura. Em vez disso, extraia as informações de paginação do [cabeçalho Link](/rest#pagination), que é enviado com cada solicitação.

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/

{% ifversion fpt or ghec %}
## Erros de autenticação básica

Em 13 de novembro de 2020 a autenticação de nome de usuário e senha da API REST e da API de Autorizações OAuth tornaram-se obsoletas e já não funcionaram mais.

### Como usar `username`/`password` para a autenticação básica

Se você estiver usando `username` e `password` para as chamadas à API, elas não poderão mais ser autenticadas. Por exemplo:

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

Em vez disso, use um [token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) ao testar pontos de extremidade ou fazer o desenvolvimento local:

```bash
curl -H 'Authorization: Bearer my_access_token' https://api.github.com/user/repos
```

Para os Aplicativos OAuth, você deve usar o [fluxo do aplicativo Web](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) para gerar um token OAuth a ser usado no cabeçalho da chamada à API:

```bash
curl -H 'Authorization: Bearer my-oauth-token' https://api.github.com/user/repos
```

## Tempos limite

Se  {% data variables.product.product_name %} demorar mais de 10 segundos para processar uma solicitação de API, {% data variables.product.product_name %} encerrará a solicitação e você receberá uma resposta de tempo esgotado.

{% endif %}
