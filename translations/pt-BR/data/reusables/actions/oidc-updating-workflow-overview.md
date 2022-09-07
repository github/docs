---
ms.openlocfilehash: a2d715cc94af2755d4161ef0715314caa0e82047
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145083872"
---
Para adicionar integração OIDC aos seus fluxos de trabalho para implantação na nuvem, você deverá adicionar as seguintes alterações de código:

- Conceder permissão para obter o token do provedor do OIDC de {% data variables.product.prodname_dotcom %}:
  - O fluxo de trabalho precisa de uma configuração `permissions` com um valor definido `id-token`. Isso permite obter o token do OIDC de cada trabalho do fluxo de trabalho. Se você só precisa obter um token OIDC para um único trabalho, essa permissão poderá ser definida dentro desse trabalho.
- Solicite o Token do JSON Web (JWT) do provedor OIDC de {% data variables.product.prodname_dotcom %} e apresente-o ao seu provedor de nuvem para receber um token de acesso:
  - Você pode usar o kit de ferramentas de ações para obter os tokens no seu trabalho ou você pode usar a ação oficial criada pelo seu provedor de nuvem para obter o JWT e receber o token de acesso da nuvem.
