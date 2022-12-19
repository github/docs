---
ms.openlocfilehash: 88adaa8f671dd9eb805301c3e659bcdba76f24cc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159389"
---
Quando você trabalha em um codespace criado com base em um modelo, seu trabalho é salvo em uma máquina virtual na nuvem, mas não é armazenado em um repositório no {% data variables.product.prodname_dotcom %}.

É possível salvar seus arquivos, fechar e parar o codespace e voltar mais tarde. Normalmente, o Git vem pré-instalado e o diretório de trabalho é inicializado automaticamente como um repositório Git, a menos que você tenha começado com o modelo em branco do {% data variables.product.company_short %}. Isso significa que é possível usar o Git imediatamente para o controle do código-fonte local, como adicionar e confirmar arquivos.

No entanto, se você excluir um codespace não publicado ou ele for excluído automaticamente por não ser usado durante o período de retenção, seu trabalho também será excluído. Para manter seu trabalho e permitir que outras pessoas trabalhem no projeto, publique o codespace em um repositório no {% data variables.product.prodname_dotcom %}.