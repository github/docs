---
ms.openlocfilehash: 9634dbe779ef8c4bf0707adfe45d6e5084d95196
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065416"
---
A execução de trabalho ou de fluxo de trabalho exige uma configuração `permissions` com [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). Você não poderá solicitar o token de ID JWT do OIDC se a configuração `permissions` de `id-token` for definida como `read` ou `none`.

A configuração `id-token: write`permite que o JWT seja solicitado do provedor OIDC do {% data variables.product.prodname_dotcom %} usando uma destas abordagens:

- Usando variáveis de ambiente no executor (`ACTIONS_ID_TOKEN_REQUEST_URL` e `ACTIONS_ID_TOKEN_REQUEST_TOKEN`).
- Usando `getIDToken()` por meio do kit de ferramentas do Actions.

Se você só precisa obter um token OIDC para um único trabalho, essa permissão poderá ser definida dentro desse trabalho. Por exemplo:

```yaml{:copy}
permissions:
  id-token: write
```

Você pode precisar especificar permissões adicionais aqui, dependendo das necessidades do seu fluxo de trabalho. 
