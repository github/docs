---
ms.openlocfilehash: 6775f1ca71684e74de0fedce4cb7e6c6b15c2820
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147682860"
---
Você pode criar uma lista de permissões de IP adicionando entradas que contêm um endereço IP ou intervalo de endereços.{% ifversion ip-allow-list-address-check %} Depois de concluir a adição de entradas, você pode verificar se um endereço IP específico seria permitido por qualquer uma das entradas habilitadas em sua lista.{% endif %}

Antes que a lista restrinja o acesso a {% ifversion ghae %}sua empresa{% else %}ativos privados pertencentes a organizações da sua empresa{% endif %}, você também deve habilitar endereços IP permitidos.