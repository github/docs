---
ms.openlocfilehash: 9960ade469b1d52c0f880067e4dd449082b190c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145085129"
---
Uma fila de mesclagem pode aumentar a velocidade na qual as solicitações de pull são mescladas em um branch de destino ocupado, garantindo que todas as verificações de proteção de branch obrigatórias sejam aprovadas.

Depois que uma solicitação de pull tiver sido aprovada por todas as verificações de proteção de branch obrigatórias, um usuário com acesso de gravação no repositório poderá adicionar essa solicitação de pull a uma fila de mesclagem.

Uma fila de mesclagem poderá usar o {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[{% data variables.product.prodname_actions %}](/actions/)".
