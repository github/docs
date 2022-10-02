---
title: Hooks Pre-receive
intro: 'A API de hooks pre-receive permite que você crie, liste, atualize e apague hooks pre-receive.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: dd776e7ec95a970f025d4de1ec03f07b2a7b29f7
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147066151'
---
*Ela só está disponível para administradores [autenticados](/rest/overview/resources-in-the-rest-api#authentication) do site.* Os usuários normais receberão uma resposta `404` se tentarem acessá-la.

### Atributos do objeto

#### Hook pre-receive

| Nome                             | Tipo      | Descrição                                                     |
|----------------------------------|-----------|-----------------------------------------------------------------|
| `name`                           | `string`  | O nome do hook.                                           |
| `script`                         | `string`  | O script que o hook executa.                                  |
| `script_repository`              | `object`  | O repositório do GitHub onde o script é mantido.                 |
| `environment`                    | `object`  | O ambiente de pre-receive onde o script é executado.       |
| `enforcement`                    | `string`  | O estado de aplicação para este hook.                         |
| `allow_downstream_configuration` | `boolean` | Se a aplicação pode ser substituída no nível da organização ou do repositório. |

Os possíveis valores para *a imposição* são `enabled`, `disabled` e `testing`. `disabled` indica que o gancho de pré-recebimento não será executado. `enabled` indica que ele será executado e rejeitará os pushes que resultem em um status diferente de zero. `testing` significa que o script será executado, mas não fará com que nenhum push seja rejeitado.
