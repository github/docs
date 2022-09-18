---
ms.openlocfilehash: e01273fe15058c00b11d380a3c50d4448cfb92b8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180780"
---
O nome de cada entrada do log de auditoria é composto pelo objeto `action` ou qualificador de categoria, seguido de um tipo de operação. Por exemplo, a entrada `repo.create` refere-se à operação `create` na categoria `repo`.

Cada entrada do log de auditoria mostra informações aplicáveis sobre um evento, como:

- A {% ifversion ghec or ghes or ghae %}empresa ou {% endif %}organização em que uma ação foi executada
- O usuário (ator) que executou a ação
- O usuário afetado pela ação
- Em qual repositório uma ação foi executada
- A ação que foi executada
- Em que país a ação foi executada
- A data e hora em que a ação ocorreu {%- ifversion enterprise-audit-log-ip-addresses %}
- Opcionalmente, o endereço IP de origem para o usuário (ator) que executou a ação {%- endif %}
