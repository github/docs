---
ms.openlocfilehash: e3bbac236dce195487aada32132e9b78e27500ea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145093685"
---
Você pode monitorar a disponibilidade do {% data variables.product.prodname_ghe_server %} verificando o código de status retornado para a URL `https://HOSTNAME/status`. Um dispositivo que pode atender ao tráfego do usuário retornará o código de status `200` (OK). Um dispositivo poderá retornar o código de status `503` (Serviço Indisponível) por alguns motivos:
 - O appliance é uma réplica passiva, como a réplica em uma configuração de alta disponibilidade de dois nós.
 - O appliance está no modo de manutenção.
 - O appliance é parte de uma configuração de geo-replicação, mas é uma réplica inativa.

Você também pode usar o painel de visualização de réplica disponível em:

`https://HOSTNAME/setup/replication`
