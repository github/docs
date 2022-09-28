---
ms.openlocfilehash: a314ace9dc0cc07e1119fa2a02c5ea45ef3a90fe
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147875494"
---
A execução de trabalho ou de fluxo de trabalho exige uma configuração `permissions` com [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token). Você não poderá solicitar o token de ID JWT do OIDC se a configuração `permissions` de `id-token` for definida como `read` ou `none`.

A configuração `id-token: write`permite que o JWT seja solicitado do provedor OIDC do {% data variables.product.prodname_dotcom %} usando uma destas abordagens:

- Usando variáveis de ambiente no executor (`ACTIONS_ID_TOKEN_REQUEST_URL` e `ACTIONS_ID_TOKEN_REQUEST_TOKEN`).
- Usando `getIDToken()` por meio do kit de ferramentas do Actions.

Se você precisar buscar um token OIDC para um fluxo de trabalho, a permissão poderá ser definida no nível do fluxo de trabalho. Por exemplo:

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
  contents: read  # This is required for actions/checkout
```

Se você só precisa obter um token OIDC para um único trabalho, essa permissão poderá ser definida dentro desse trabalho. Por exemplo:

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
```

Você pode precisar especificar permissões adicionais aqui, dependendo das necessidades do seu fluxo de trabalho. 
