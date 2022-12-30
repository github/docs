---
ms.openlocfilehash: 0d73e17e61dc0848a42a18a7e1811b43e541b6a4
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: "147061295"
---
1. Em "Executores", localize o executor na lista. Se o executor estiver em um grupo, clique em {% octicon "chevron-down" aria-label="The downwards chevron" %} para expandir a lista.
1. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ao lado do executor que deseja remover e clique em **Remover**.

    ![Removendo uma configuração do executor auto-hospedado](/assets/images/help/settings/actions-runner-remove.png)
1. Você verá instruções para remover o executor auto-hospedado. Complete qualquer um dos seguintes passos para remover o executor, dependendo se ele ainda está acessível:

    * **Se você tiver acesso ao computador do executor:** siga as instruções na tela para que o sistema operacional do computador execute o comando de remoção. As instruções incluem a URL necessária e um token gerado automaticamente, limitado por tempo.

        O comando de remoção executa as seguintes tarefas:

        * Remove o executor de {% data variables.product.product_name %}.
        * Remove todos os arquivos de configuração do aplicativo de executor auto-hospedado na máquina.
        * Remove todos os serviços configurados se não estiver em execução no modo interativo.

    * **Se você não tiver acesso ao computador:** clique em **Sim, forçar a remoção deste executor** para forçar o {% data variables.product.product_name %} a remover o executor.
