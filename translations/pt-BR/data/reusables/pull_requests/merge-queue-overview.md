---
ms.openlocfilehash: 9960ade469b1d52c0f880067e4dd449082b190c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145085129"
---
Uma fila de mesclagem pode aumentar a velocidade na qual as solicitações de pull são mescladas em um branch de destino ocupado, garantindo que todas as verificações de proteção de branch obrigatórias sejam aprovadas.

Depois que uma solicitação de pull tiver sido aprovada por todas as verificações de proteção de branch obrigatórias, um usuário com acesso de gravação no repositório poderá adicionar essa solicitação de pull a uma fila de mesclagem.

Uma fila de mesclagem poderá usar o {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[{% data variables.product.prodname_actions %}](/actions/)".
