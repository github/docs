---
ms.openlocfilehash: da828b3b969dfc24b1f71400f336cccfa1f4d004
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145096763"
---
Configure o balanceador de carga para verificar uma destas URLs:
 - `https://HOSTNAME/status` se o HTTPS estiver habilitado (padrão)
 - `http://HOSTNAME/status` se o HTTPS estiver desabilitado

A verificação retornará o código de status `200` (OK) se o nó estiver íntegro e disponível para solicitações do usuário final do serviço.
