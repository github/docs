---
ms.openlocfilehash: 038896fa537c7cc3ea3fa95e903900a9eb8f3db7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145917058"
---
Ao usar a opção **Trocar base e Mesclar** em uma solicitação de pull, é importante observar que os commits no branch principal são adicionados ao branch base sem verificação de assinatura de commit. Quando você usa essa opção, o {% data variables.product.prodname_dotcom %} cria um commit modificado usando os dados e o conteúdo do commit original. Isso significa que o {% data variables.product.prodname_dotcom %} não criou de fato esse commit e, portanto, não pode assiná-lo como um usuário genérico do sistema. O {% data variables.product.prodname_dotcom %} não tem acesso às chaves de assinatura privadas do responsável pelo commit, portanto, não pode assinar o commit em nome do usuário.

Uma solução alternativa é trocar a base e fazer a mesclagem localmente e depois enviar as alterações por push ao branch base da solicitação de pull.
