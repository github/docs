---
ms.openlocfilehash: cf95e20b26e8fb29fbae23c0a5e9a913aa73c8b0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145065340"
---
1. Clique em **Remover**.
1. Você verá instruções para remover o executor auto-hospedado. Complete qualquer um dos seguintes passos para remover o executor, dependendo se ele ainda está acessível:

    * **Se você tiver acesso ao computador do executor:** siga as instruções na tela para que o sistema operacional do computador execute o comando de remoção. As instruções incluem a URL necessária e um token gerado automaticamente, limitado por tempo.

        O comando de remoção executa as seguintes tarefas:

        * Remove o executor de {% data variables.product.product_name %}.
        * Remove todos os arquivos de configuração do aplicativo de executor auto-hospedado na máquina.
        * Remove todos os serviços configurados se não estiver em execução no modo interativo.

    * **Se você não tiver acesso ao computador:** clique em **Forçar a remoção deste executor** para forçar o {% data variables.product.product_name %} a remover o executor.
