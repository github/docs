---
ms.openlocfilehash: ce7aa40d4312947c099afb8c1a8b88bacd021847
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145093313"
---
Se você selecionar **Habilitar a configuração de lista de permissões de IP para aplicativos GitHub instalados** em suas configurações de lista de permissões, os endereços IP dos dados {% data variables.product.prodname_github_apps %} serão adicionados a sua lista de permissões. Isso acontece independentemente de a sua lista de permissão estar habilitada. Se você instalar um {% data variables.product.prodname_github_app %}, o criador desse aplicativo muda o endereço na sua lista de permissões e esta é atualizada automaticamente com essas alterações.

Você pode identificar os endereços IP que foram automaticamente adicionados de {% data variables.product.prodname_github_apps %} revisando o campo de descrição. A descrição para esses endereços IP é: "Gerenciado pelo NOME do aplicativo GitHub". Ao contrário dos endereços adicionados manualmente, você não pode editar, excluir ou desabilitar endereços IP adicionados automaticamente a partir de {% data variables.product.prodname_github_apps %}.
